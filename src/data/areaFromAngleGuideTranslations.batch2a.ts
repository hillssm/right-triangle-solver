// areaFromAngleGuideTranslations.batch2a.ts: Right Triangle Area From Angle Guide (Page 18 of 45)
// translations for Portuguese (pt) and Bengali (bn).
export const AREA_FROM_ANGLE_TRANSLATIONS_BATCH2A = {
  "pt": {
    "tocHeading": "Neste guia",
    "tocItems": {
      "sec-intro": "Como calcular a área do triângulo retângulo a partir de um ângulo",
      "sec-geometry": "Os lados e os ângulos do triângulo retângulo",
      "sec-sine": "Por que a fórmula da área usa o seno?",
      "sec-mode1": "Como calcular a área com o lado b, a hipotenusa c e o ângulo A",
      "sec-mode2": "Como calcular a área com o lado a, a hipotenusa c e o ângulo B",
      "sec-same": "Duas fórmulas com ângulos, um só triângulo retângulo",
      "sec-howto": "Como usar a calculadora de área do triângulo retângulo a partir do ângulo",
      "sec-foundations": "Exemplos passo a passo da área do triângulo retângulo a partir de um ângulo",
      "sec-applications": "Aplicações reais da área do triângulo retângulo a partir do ângulo",
      "sec-consistency": "Como verificar se os lados e o ângulo formam um triângulo retângulo",
      "sec-alternatives": "Outras formas de calcular a área do triângulo retângulo usando ângulos",
      "sec-angle-effect": "Como o ângulo agudo afeta a área do triângulo retângulo?",
      "sec-units": "Unidades de área, graus e arredondamento",
      "sec-mistakes": "Erros comuns ao calcular a área do triângulo retângulo a partir de um ângulo",
      "sec-verify": "Como verificar se a área calculada está correta",
      "sec-related": "Explore as calculadoras relacionadas de triângulo retângulo",
      "sec-faq": "Perguntas frequentes",
      "sec-conclusion": "Conclusão"
    },
    "sections": {
      "sec-intro": {
        "h2": "Como calcular a área do triângulo retângulo a partir de um ângulo",
        "blocks": [
          { "kind": "p", "text": "Suponha que um triângulo retângulo tenha um cateto de [[b=4\\text{ m}]], uma hipotenusa de [[c=5\\text{ m}]] e que o ângulo agudo entre esses dois lados meça cerca de [[A\\approx36.87^\\circ]]. Sua área sai diretamente: [[K=\\frac{4\\times5\\times\\sin(36.87^\\circ)}{2}]]. Como [[\\sin(36.87^\\circ)\\approx0.6]], a área é aproximadamente [[[\\boxed{K=6\\text{ m}^2}]]] O triângulo ocupa 6 metros quadrados de superfície plana." },
          { "kind": "p", "text": "Esta calculadora trata exatamente dessa situação: com um cateto, a hipotenusa e o ângulo agudo entre eles, o seno transforma a hipotenusa na altura perpendicular que faltava, e metade da base vezes a altura dá a área em unidades quadradas. O ângulo incluído precisa ficar entre os dois lados informados, e cada modo combina um ângulo específico com seus dois lados." },
          { "kind": "p", "text": "O ângulo [[36.87^\\circ]] está arredondado de cerca de [[36.8699^\\circ]]; manter a precisão total na calculadora dá o resultado mais exato." }
        ]
      },
      "sec-geometry": {
        "h2": "Os lados e os ângulos do triângulo retângulo",
        "blocks": [
          { "kind": "p", "text": "Este guia usa uma única notação do início ao fim: [[A]] e [[B]] são os dois ângulos agudos, [[C=90^\\circ]] é o ângulo reto, o lado [[a]] está oposto ao ângulo [[A]], o lado [[b]] está oposto ao ângulo [[B]], o lado [[c]] é a hipotenusa e [[K]] é a área." },
          { "kind": "h3", "text": "O que é um triângulo retângulo?" },
          { "kind": "p", "text": "Um triângulo retângulo tem um ângulo interno de exatamente [[90^\\circ]]. Seus dois catetos se encontram nesse ângulo reto, e a hipotenusa fica oposta a ele. A hipotenusa é sempre o lado mais longo. Os outros dois ângulos são agudos e, como os três ângulos internos somam 180 graus, [[A+B+C=180^\\circ]]. Como [[C=90^\\circ]], os ângulos agudos satisfazem [[A+B=90^\\circ]]: conhecer um revela o outro." },
          { "kind": "h3", "text": "O que é a hipotenusa?" },
          { "kind": "p", "text": "A hipotenusa é o lado oposto ao ângulo reto, identificado como [[c]] nos dois modos da calculadora. Para encontrá-la num triângulo desenhado em qualquer orientação, procure o lado que não toca a marca do canto quadrado: esse lado é a hipotenusa. Ele é mais longo que qualquer cateto, porque atravessa todo o ângulo reto enquanto cada cateto atravessa só um ângulo agudo. Toda fórmula de área desta página usa [[c]] como um de seus dois lados, então identificá-la corretamente é a primeira habilidade a praticar." },
          { "kind": "h3", "text": "O que é o cateto adjacente?" },
          { "kind": "p", "text": "O cateto adjacente é o cateto que toca o ângulo de referência escolhido sem ser a hipotenusa. Para o ângulo [[A]], o cateto adjacente é [[b]]; para o ângulo [[B]], o cateto adjacente é [[a]]. Nomeie primeiro o ângulo de referência e depois identifique seu cateto adjacente. Trocar o ângulo de referência troca silenciosamente qual cateto conta como adjacente, e essa troca está por trás de muitos dos erros comuns listados mais adiante nesta página." },
          { "kind": "h3", "text": "O que é o cateto oposto?" },
          { "kind": "p", "text": "O lado oposto fica bem em frente ao ângulo escolhido, sem tocá-lo. Para o ângulo [[A]], o lado [[a]] é o oposto; para o ângulo [[B]], o lado [[b]] é o oposto. Os rótulos mudam com o ângulo de referência, mas a hipotenusa continua [[c]] nos dois casos. Manter o ângulo de referência fixo enquanto rotula o triângulo deixa cada etapa seguinte consistente." },
          { "kind": "h3", "text": "O que é um ângulo incluído?" },
          { "kind": "p", "text": "Um ângulo incluído é o ângulo que fica entre dois lados especificados. O ângulo [[A]] está incluído entre os lados [[b]] e [[c]]; o ângulo [[B]] está incluído entre os lados [[a]] e [[c]]. A fórmula geral da área com seno só funciona quando o ângulo é aquele incluído entre os dois lados usados, porque a fórmula lê a altura perpendicular a partir desse ângulo. Combinar um lado com um ângulo que ele não toca quebra a geometria da qual a fórmula depende." }
        ],
        "imgAlt": "Triângulo retângulo ABC mostrando os dois modos de área: ângulo A entre os lados b e c, ângulo B entre os lados a e c",
        "figcaption": "Os dois modos da calculadora usam o mesmo triângulo. O Modo 1 combina o lado b, a hipotenusa c e o ângulo incluído A; o Modo 2 combina o lado a, a hipotenusa c e o ângulo incluído B."
      },
      "sec-sine": {
        "h2": "Por que a fórmula da área usa o seno?",
        "blocks": [
          { "kind": "p", "text": "Os dois modos da calculadora se apoiam numa fórmula geral para a área de qualquer triângulo dados dois lados e o ângulo incluído:" },
          { "kind": "p", "text": "[[[\\boxed{K=\\frac12 xy\\sin(\\theta)}]]]" },
          { "kind": "p", "text": "Aqui [[x]] e [[y]] são dois comprimentos de lado, [[\\theta]] é o ângulo incluído entre eles e [[K]] é a área. O termo do seno é o que constrói a altura perpendicular a partir do segundo lado." },
          { "kind": "h3", "text": "Como funciona a fórmula geral" },
          { "kind": "p", "text": "A regra conhecida da área do triângulo é [[K=\\frac12\\times\\text{base}\\times\\text{height}]]. Quando a altura perpendicular não é medida diretamente, o seno pode recuperá-la a partir de outro lado. Tome uma base de comprimento [[x]] e um segundo lado de comprimento [[y]] encontrando-a num ângulo [[\\theta]]. A componente perpendicular desse segundo lado, a altura que conta para a área, é [[h=y\\sin(\\theta)]]. Substituir na regra da base vezes altura dá [[K=\\frac12 x(y\\sin(\\theta))]], a fórmula geral acima. O ângulo incluído precisa corresponder aos dois lados escolhidos; um ângulo de outra parte do triângulo mede outra perpendicular." },
          { "kind": "h3", "text": "Por que a área é dividida por dois?" },
          { "kind": "p", "text": "O triângulo ocupa metade da área do paralelogramo construído sobre a mesma base com a mesma altura perpendicular. Com base [[x]] e altura [[h]], o produto [[x\\times h]] é o paralelogramo inteiro, e o triângulo é exatamente metade dele. Multiplicar os dois lados pelo valor do seno sem dividir pela metade produz o dobro da área desejada." },
          { "kind": "h3", "text": "Por que a hipotenusa pode ser usada" },
          { "kind": "p", "text": "Um dos dois lados na fórmula do ângulo incluído pode ser a hipotenusa. Combinada com o cateto correto e o ângulo agudo entre eles, a hipotenusa carrega informação suficiente para construir a área: sua componente de seno é precisamente a altura perpendicular relativa àquele cateto como base. É por isso que a calculadora nunca pede o segundo cateto. A hipotenusa não é uma exceção especial da fórmula; é uma escolha comum de lado, num ângulo incluído comum." },
          { "kind": "h3", "text": "Por que o ângulo precisa estar correto" },
          { "kind": "p", "text": "Trocar o ângulo [[A]] pelo ângulo [[B]] mantendo a mesma combinação de lados costuma dar o resultado errado. Tome o triângulo 3-4-5 com [[b=4]], [[c=5]], [[A\\approx36.87^\\circ]]. O cálculo correto do Modo 1 é [[K=(4\\times5\\times\\sin(36.87^\\circ))/2\\approx6]]. Substituir o outro ângulo dá [[K=(4\\times5\\times\\sin(53.13^\\circ))/2\\approx8]], porque [[\\sin(53.13^\\circ)\\approx0.8]]. A resposta 8 não é um artefato de arredondamento; é a área de outra configuração, em que a combinação de lados já não corresponde ao ângulo incluído. Acertar a combinação ângulo-lado é uma das lições mais importantes desta página." }
        ],
        "imgAlt": "Triângulo retângulo 3-4-5 mostrando que a é igual a c vezes sen A, ou 3, como altura perpendicular da área",
        "figcaption": "O seno do ângulo A transforma a hipotenusa na altura perpendicular a = 3, então a conhecida K = ba/2 e a fórmula direta K = bc sen(A)/2 concordam."
      },
      "sec-mode1": {
        "h2": "Como calcular a área com o lado b, a hipotenusa c e o ângulo A",
        "blocks": [
          { "kind": "p", "text": "O Modo 1 da calculadora usa:" },
          { "kind": "p", "text": "[[[\\boxed{K=\\frac{bc\\sin(A)}{2}}]]]" },
          { "kind": "p", "text": "As variáveis são: [[b]] o cateto adjacente ao ângulo [[A]], [[c]] a hipotenusa, [[A]] o ângulo agudo incluído entre [[b]] e [[c]], e [[K]] a área." },
          { "kind": "h3", "text": "Dedução da fórmula passo a passo" },
          { "kind": "p", "text": "Comece da fórmula da área pelos catetos [[K=ab/2]]. Pela razão de seno no ângulo [[A]], [[\\sin(A)=a/c]], logo [[a=c\\sin(A)]]. O cateto oposto [[a]] está sendo reescrito como a componente de seno da hipotenusa. Substituir dá [[K=\\frac{b(c\\sin(A))}{2}]] e rearranjar produz [[[\\boxed{K=\\frac{bc\\sin(A)}{2}}]]] O cateto oposto desconhecido nunca precisa ser informado porque a fórmula o constrói a partir da hipotenusa e do ângulo nos bastidores." },
          { "kind": "h3", "text": "Exemplo completo resolvido" },
          { "kind": "p", "text": "Dados [[b=4\\text{ m}]], [[c=5\\text{ m}]], [[A\\approx36.87^\\circ]]:" }
        ],
        "steps": [
          "<strong>Escreva a fórmula.</strong> [[K=bc\\sin(A)/2]].",
          "<strong>Substitua.</strong> [[K=(4\\times5\\times\\sin(36.87^\\circ))/2]].",
          "<strong>Calcule o seno.</strong> [[\\sin(36.87^\\circ)\\approx0.6]].",
          "<strong>Multiplique.</strong> [[K\\approx(20\\times0.6)/2]].",
          "<strong>Divida.</strong> [[[\\boxed{K\\approx6\\text{ m}^2}]]]"
        ],
        "closingParagraphs": [
          "A resposta diz que o triângulo cobre cerca de 6 metros quadrados. Como o ângulo informado está arredondado, a palavra aproximadamente pertence ao relatório, embora com precisão total as mesmas entradas deem 6 exatos.",
          "<strong>Verificação pelo cateto que faltava.</strong> O cateto que faltava sai do teorema de Pitágoras: [[a=\\sqrt{c^2-b^2}]], logo [[a=\\sqrt{25-16}=3]]. Então [[K=(3\\times4)/2=6]]. Os dois caminhos concordam porque descrevem o mesmo triângulo: a rota do seno constrói o cateto que faltava a partir do ângulo, enquanto a rota dos catetos usa o cateto diretamente.",
          "<strong>Quando usar o Modo 1?</strong> Use o Modo 1 quando as medidas conhecidas forem o cateto adjacente ao ângulo agudo conhecido, a hipotenusa e esse próprio ângulo. Se os dois catetos já forem conhecidos, a fórmula direta dos catetos é mais simples e dispensa o ângulo. O Modo 1 é para a situação comum de campo em que um ângulo e dois comprimentos vêm do mesmo conjunto de medições, e o segundo cateto nunca foi registrado."
        ]
      },
      "sec-mode2": {
        "h2": "Como calcular a área com o lado a, a hipotenusa c e o ângulo B",
        "blocks": [
          { "kind": "p", "text": "O Modo 2 da calculadora usa:" },
          { "kind": "p", "text": "[[[\\boxed{K=\\frac{ac\\sin(B)}{2}}]]]" },
          { "kind": "p", "text": "As variáveis são: [[a]] o cateto adjacente ao ângulo [[B]], que é oposto ao ângulo [[A]]; [[c]] a hipotenusa; [[B]] o ângulo agudo incluído entre [[a]] e [[c]]; e [[K]] a área." },
          { "kind": "h3", "text": "Dedução da fórmula passo a passo" },
          { "kind": "p", "text": "Comece de novo de [[K=ab/2]]. A razão de seno medida no ângulo [[B]] é [[\\sin(B)=b/c]], porque do ponto de vista de [[B]] o lado oposto é [[b]]. Logo [[b=c\\sin(B)]]. Substituir dá [[K=\\frac{a(c\\sin(B))}{2}]], então [[[\\boxed{K=\\frac{ac\\sin(B)}{2}}]]] A fórmula usa o lado [[a]] embora [[a]] seja chamado de lado oposto na notação principal da página; o rótulo oposto pertence ao ângulo [[A]], enquanto em relação ao ângulo [[B]] o mesmo lado é adjacente. Os rótulos dos lados são sempre relativos ao ângulo de referência escolhido." },
          { "kind": "h3", "text": "Exemplo completo resolvido" },
          { "kind": "p", "text": "Dados [[a=3\\text{ m}]], [[c=5\\text{ m}]], [[B\\approx53.13^\\circ]]:" }
        ],
        "steps": [
          "<strong>Escreva a fórmula.</strong> [[K=ac\\sin(B)/2]].",
          "<strong>Substitua.</strong> [[K=(3\\times5\\times\\sin(53.13^\\circ))/2]].",
          "<strong>Calcule o seno.</strong> [[\\sin(53.13^\\circ)\\approx0.8]].",
          "<strong>Multiplique e divida.</strong> [[[\\boxed{K\\approx6\\text{ m}^2}]]]"
        ],
        "closingParagraphs": [
          "O resultado é os mesmos 6 metros quadrados do exemplo do Modo 1, porque os dois exemplos descrevem o mesmo triângulo 3-4-5 visto de seus dois ângulos agudos.",
          "<strong>Verificação pelo cateto que faltava.</strong> Calcule [[b=\\sqrt{c^2-a^2}]], logo [[b=\\sqrt{25-9}=4]]. Então [[K=(3\\times4)/2=6]]. A concordância é esperada: a fórmula do seno reconstruiu discretamente o cateto que faltava [[b]] a partir da hipotenusa e do ângulo.",
          "<strong>Quando usar o Modo 2?</strong> Use o Modo 2 quando o lado conhecido for [[a]], a hipotenusa [[c]] for conhecida e o ângulo medido for aquele que toca o lado [[a]], isto é, o ângulo [[B]]. Os dois modos não são intercambiáveis sem trocar também os rótulos de lado e ângulo; alimentar o Modo 2 com as entradas do Modo 1 calcula a área de outro triângulo."
        ]
      },
      "sec-same": {
        "h2": "Duas fórmulas com ângulos, um só triângulo retângulo",
        "blocks": [
          { "kind": "p", "text": "Os dois modos calculam a área do mesmo objeto geométrico, então precisam concordar. Para o Modo 1, [[K=bc\\sin(A)/2]], e como [[\\sin(A)=a/c]] para um triângulo retângulo válido, [[bc\\sin(A)=ab]]. Para o Modo 2, [[K=ac\\sin(B)/2]], e como [[\\sin(B)=b/c]], [[ac\\sin(B)=ab]]. As duas fórmulas se reduzem a [[[\\boxed{K=\\frac{ab}{2}}]]], a conhecida fórmula dos catetos. Os dois modos são duas rotas de entrada diferentes para uma só quantidade." }
        ],
        "table": {
          "headers": ["Método", "Entradas", "Resultado"],
          "rows": [
            ["Fórmula dos catetos", "[[a=3,\\;b=4]]", "6 unidades quadradas"],
            ["Modo 1", "[[b=4,\\;c=5,\\;A\\approx36.87^\\circ]]", "Aproximadamente 6"],
            ["Modo 2", "[[a=3,\\;c=5,\\;B\\approx53.13^\\circ]]", "Aproximadamente 6"]
          ]
        },
        "closingParagraphs": [
          "Medidas de ângulo arredondadas podem introduzir pequenas diferenças numéricas entre os dois modos, porque [[36.87^\\circ]] é só uma aproximação do verdadeiro [[36.8699^\\circ]]. Uma discrepância de alguns centésimos é efeito de arredondamento, não discordância entre as fórmulas."
        ],
        "imgAlt": "O mesmo triângulo 3-4-5 resolvido pelos Modos 1 e 2, ambos dando área 6, verificada pela fórmula dos catetos",
        "figcaption": "Dois ângulos incluídos, duas fórmulas equivalentes, uma só área de triângulo."
      },
      "sec-howto": {
        "h2": "Como usar a calculadora de área do triângulo retângulo a partir do ângulo",
        "blocks": [
          { "kind": "p", "text": "Este passo a passo segue a interface real da calculadora nesta página, etapa por etapa." }
        ],
        "steps": [
          "<strong>Identifique as medidas já conhecidas.</strong> Confirme que você tem um cateto, a hipotenusa e um ângulo agudo do mesmo triângulo.",
          "<strong>Escolha o modo correto.</strong> Selecione o Modo 1 para o lado [[b]], a hipotenusa [[c]] e o ângulo [[A]]; selecione o Modo 2 para o lado [[a]], a hipotenusa [[c]] e o ângulo [[B]].",
          "<strong>Confirme qual ângulo agudo está sendo medido.</strong> O ângulo precisa ser um dos dois ângulos agudos, não o ângulo reto.",
          "<strong>Identifique o cateto correspondente.</strong> O cateto precisa tocar o ângulo medido; confira as definições de adjacente e oposto acima se tiver dúvida.",
          "<strong>Informe o comprimento do cateto.</strong> Digite o cateto medido no campo de cateto do modo selecionado.",
          "<strong>Informe o comprimento da hipotenusa.</strong> Digite-o no campo de hipotenusa; ele precisa ser o maior dos dois comprimentos.",
          "<strong>Selecione unidades de medida compatíveis.</strong> Os dois comprimentos precisam usar a mesma unidade antes de calcular.",
          "<strong>Informe o ângulo agudo em graus.</strong> A calculadora espera graus, não radianos.",
          "<strong>Confirme que o ângulo está estritamente entre [[0^\\circ]] e [[90^\\circ]].</strong> Valores de fronteira descrevem formas degeneradas, não triângulos.",
          "<strong>Confirme que a hipotenusa é maior que o cateto.</strong> Um cateto igual ou maior que a hipotenusa não pode pertencer a um triângulo retângulo.",
          "<strong>Verifique se o cateto, a hipotenusa e o ângulo descrevem o mesmo triângulo retângulo.</strong> Os testes de consistência na seção de validação mostram como.",
          "<strong>Clique em Calcular área.</strong> O resultado aparece com as etapas da solução mostradas.",
          "<strong>Revise o resultado e as etapas da solução.</strong> Acompanhe cada substituição para garantir que as entradas pretendidas foram usadas.",
          "<strong>Interprete o resultado em unidades quadradas.</strong> A unidade de área é o quadrado da unidade de comprimento escolhida.",
          "<strong>Use Redefinir para limpar o cálculo anterior.</strong> Isso esvazia todos os campos antes que o próximo triângulo seja informado."
        ],
        "closingParagraphs": [
          "Note que cada modo pede um cateto diferente e um ângulo diferente. Os modos são distintos porque a combinação do ângulo incluído é diferente, não porque um modo seja um atalho do outro."
        ]
      },
      "sec-foundations": {
        "h2": "Exemplos passo a passo da área do triângulo retângulo a partir de um ângulo",
        "blocks": [
          { "kind": "p", "text": "Quatro exemplos constroem o método sobre triângulos conhecidos, do terno 3-4-5 aos casos de ângulos especiais." },
          { "kind": "h3", "text": "Exemplo 1: triângulo 3-4-5 usando o ângulo A" },
          { "kind": "p", "text": "Dados [[b=4]], [[c=5]], [[A\\approx36.87^\\circ]], use [[K=bc\\sin(A)/2]]. Então [[K=(4\\times5\\times\\sin(36.87^\\circ))/2]], [[K\\approx(20\\times0.6)/2]], logo [[[\\boxed{K\\approx6}]]] A área é 6 unidades quadradas porque o triângulo ocupa seis quadrados unitários de superfície plana; com o ângulo em precisão total o valor é exatamente 6." },
          { "kind": "h3", "text": "Exemplo 2: o mesmo triângulo usando o ângulo B" },
          { "kind": "p", "text": "Dados [[a=3]], [[c=5]], [[B\\approx53.13^\\circ]], use [[K=ac\\sin(B)/2]]. Então [[K=(3\\times5\\times\\sin(53.13^\\circ))/2]], [[K\\approx(15\\times0.8)/2]], logo [[[\\boxed{K\\approx6}]]] O resultado coincide com o Exemplo 1 porque os dois exemplos descrevem o mesmo triângulo; os dois ângulos são visões complementares de uma só forma." },
          { "kind": "h3", "text": "Exemplo 3: um triângulo 30-60-90" },
          { "kind": "p", "text": "Tome [[c=10]] e [[A=30^\\circ]]. O cateto sai de [[b=c\\cos(30^\\circ)=5\\sqrt{3}]]. Então [[K=(5\\sqrt{3})(10)\\sin(30^\\circ)/2]] e, como [[\\sin(30^\\circ)=1/2]], [[[\\boxed{K=\\frac{25\\sqrt{3}}{2}\\approx21.65}]]] Valores de ângulos especiais como [[\\sin(30^\\circ)]] e [[\\cos(30^\\circ)]] dão formas exatas antes de qualquer arredondamento decimal, e é por isso que esses triângulos são úteis para conferir a calculadora à mão." },
          { "kind": "h3", "text": "Exemplo 4: um triângulo 45-45-90" },
          { "kind": "p", "text": "Dados [[c=10]] e [[A=45^\\circ]], os catetos são iguais: [[a=b=5\\sqrt{2}]]. Então [[K=(5\\sqrt{2})(10)\\sin(45^\\circ)/2]] e, como [[\\sin(45^\\circ)=\\sqrt{2}/2]], o produto se simplifica para [[[\\boxed{K=25}]]] Este é um triângulo retângulo isósceles e, como mostrado adiante, ele também tem a área máxima possível para um triângulo retângulo com hipotenusa de 10 unidades." }
        ]
      },
      "sec-applications": {
        "h2": "Aplicações reais da área do triângulo retângulo a partir do ângulo",
        "blocks": [
          { "kind": "p", "text": "Doze situações totalmente resolvidas, seis para cada modo da calculadora. Cada exemplo apresenta as medidas, escolhe o modo, aplica a fórmula e interpreta a resposta. Os valores de ângulo aparecem com duas casas decimais enquanto a aritmética mantém precisão total por baixo." },
          { "kind": "h3", "text": "Exemplo prático 1: frontão triangular do telhado" },
          { "kind": "p", "text": "Uma seção simplificada de frontão de telhado em triângulo retângulo tem lado adjacente [[b=4\\text{ m}]], hipotenusa [[c=5\\text{ m}]] e ângulo incluído [[A\\approx36.87^\\circ]]. Use o Modo 1: [[K=(4\\times5\\times\\sin(36.87^\\circ))/2]], logo [[[\\boxed{K\\approx6\\text{ m}^2}]]] a área da seção plana, não a superfície total do telhado. Conferência: [[K=(3\\times4)/2=6]]." },
          { "kind": "h3", "text": "Exemplo prático 2: painel lateral de rampa triangular" },
          { "kind": "p", "text": "Um painel lateral de rampa em triângulo retângulo tem [[b=2.4\\text{ m}]], [[c=2.5\\text{ m}]] e [[A\\approx16.26^\\circ]]. O lado oposto subjacente é 0.7 m, logo [[\\sin(A)=0.7/2.5=0.28]]. Use o Modo 1: [[K=(2.4\\times2.5\\times0.28)/2]], logo [[[\\boxed{K\\approx0.84\\text{ m}^2}]]] a área do painel lateral, não a superfície inclinada da rampa. Conferência: [[K=(0.7\\times2.4)/2=0.84]]." },
          { "kind": "h3", "text": "Exemplo prático 3: vela triangular" },
          { "kind": "p", "text": "Uma seção plana de vela em triângulo retângulo tem [[b=12\\text{ ft}]], [[c=13\\text{ ft}]] e [[A\\approx22.62^\\circ]]. O lado oposto é 5 ft, logo [[\\sin(A)=5/13]]. Use o Modo 1: [[K=(12\\times13\\times(5/13))/2]], logo [[[\\boxed{K=30\\text{ ft}^2}]]] área geométrica plana, antes de costuras ou desperdício. Conferência: [[K=(5\\times12)/2=30]]." },
          { "kind": "h3", "text": "Exemplo prático 4: seção de terreno em triângulo retângulo" },
          { "kind": "p", "text": "Um croqui topográfico descreve um lote em triângulo retângulo com [[b=40\\text{ m}]], [[c=50\\text{ m}]] e [[A\\approx36.87^\\circ]]. Como [[\\sin(A)=30/50=0.6]], o Modo 1 dá [[K=(40\\times50\\times0.6)/2]], logo [[[\\boxed{K=600\\text{ m}^2}]]] a área plana do lote num modelo plano. Conferência: [[K=(30\\times40)/2=600]]." },
          { "kind": "h3", "text": "Exemplo prático 5: painel de aço de suporte" },
          { "kind": "p", "text": "Um painel plano triangular de aço tem [[b=1.5\\text{ m}]], [[c=1.7\\text{ m}]] e [[A\\approx28.07^\\circ]]. O lado oposto é 0.8 m, logo [[\\sin(A)=0.8/1.7]]. Use o Modo 1: [[K=(1.5\\times1.7\\times(0.8/1.7))/2]], logo [[[\\boxed{K=0.6\\text{ m}^2}]]] área plana apenas, não capacidade de carga. Conferência: [[K=(0.8\\times1.5)/2=0.6]]." },
          { "kind": "h3", "text": "Exemplo prático 6: perfil lateral de escada" },
          { "kind": "p", "text": "Um painel lateral simplificado de escada tem cateto horizontal [[b=3.2\\text{ m}]], hipotenusa [[c=4\\text{ m}]] e [[A\\approx36.87^\\circ]]. Com [[\\sin(A)=0.6]], o Modo 1 dá [[K=(3.2\\times4\\times0.6)/2]], logo [[[\\boxed{K=3.84\\text{ m}^2}]]] o perfil lateral, não a área dos degraus. Conferência: com o outro cateto de 2.4 m, [[K=(2.4\\times3.2)/2=3.84]]." },
          { "kind": "h3", "text": "Exemplo prático 7: janela triangular de vidro" },
          { "kind": "p", "text": "Uma janela em triângulo retângulo tem lado [[a=0.6\\text{ m}]], hipotenusa [[c=1\\text{ m}]] e ângulo incluído [[B\\approx53.13^\\circ]]. Com [[\\sin(B)=0.8]], o Modo 2 dá [[K=(0.6\\times1\\times0.8)/2]], logo [[[\\boxed{K=0.24\\text{ m}^2}]]] área de vidro antes das folgas da moldura. Conferência: [[K=(0.6\\times0.8)/2=0.24]]." },
          { "kind": "h3", "text": "Exemplo prático 8: toldo triangular" },
          { "kind": "p", "text": "Uma seção plana de toldo em triângulo retângulo tem [[a=1.2\\text{ m}]], [[c=2\\text{ m}]] e [[B\\approx53.13^\\circ]]. Use o Modo 2: [[K=(1.2\\times2\\times0.8)/2]], logo [[[\\boxed{K=0.96\\text{ m}^2}]]] Conferência: [[K=(1.2\\times1.6)/2=0.96]]." },
          { "kind": "h3", "text": "Exemplo prático 9: padrão de corte em compensado" },
          { "kind": "p", "text": "Uma peça em triângulo retângulo de compensado tem [[a=0.9\\text{ m}]], [[c=1.5\\text{ m}]] e [[B\\approx53.13^\\circ]]. Use o Modo 2: [[K=(0.9\\times1.5\\times0.8)/2]], logo [[[\\boxed{K=0.54\\text{ m}^2}]]] área útil de material, excluindo o desperdício de corte. Conferência: [[K=(0.9\\times1.2)/2=0.54]]." },
          { "kind": "h3", "text": "Exemplo prático 10: medição topográfica de um campo triangular" },
          { "kind": "p", "text": "Uma medição simplificada de campo triangular dá [[a=7\\text{ m}]], [[c=25\\text{ m}]] e [[B\\approx73.74^\\circ]]. O outro cateto é 24 m, logo [[\\sin(B)=24/25=0.96]]. Use o Modo 2: [[K=(7\\times25\\times0.96)/2]], logo [[[\\boxed{K=84\\text{ m}^2}]]] a área plana da seção. Conferência: [[K=(7\\times24)/2=84]]." },
          { "kind": "h3", "text": "Exemplo prático 11: painel triangular de pipa" },
          { "kind": "p", "text": "Um painel de pipa ou tecido em triângulo retângulo tem [[a=20\\text{ cm}]], [[c=25\\text{ cm}]] e [[B\\approx36.87^\\circ]]. Como [[\\sin(B)=15/25=0.6]], o Modo 2 dá [[K=(20\\times25\\times0.6)/2]], logo [[[\\boxed{K=150\\text{ cm}^2}]]] centímetros quadrados, combinando com as entradas. Conferência: [[K=(20\\times15)/2=150]]." },
          { "kind": "h3", "text": "Exemplo prático 12: painel lateral de suporte solar" },
          { "kind": "p", "text": "Um painel plano de lado de suporte em triângulo retângulo tem [[a=1.8\\text{ m}]], [[c=3\\text{ m}]] e ângulo incluído [[B\\approx53.13^\\circ]]. Com [[\\sin(B)=0.8]], o Modo 2 dá [[K=(1.8\\times3\\times0.8)/2]], logo [[[\\boxed{K=2.16\\text{ m}^2}]]] área do painel, não saída ou capacidade elétrica. Conferência: [[K=(1.8\\times2.4)/2=2.16]]." }
        ],
        "table": {
          "headers": ["Situação", "Modo", "Cateto / Hip.", "Ângulo", "Área", "Interpretação"],
          "rows": [
            ["Frontão do telhado", "1", "4 m / 5 m", "[[A\\approx36.87^\\circ]]", "6 m²", "Área da seção plana"],
            ["Painel lateral de rampa", "1", "2.4 m / 2.5 m", "[[A\\approx16.26^\\circ]]", "0.84 m²", "Painel lateral, não a inclinação"],
            ["Vela", "1", "12 ft / 13 ft", "[[A\\approx22.62^\\circ]]", "30 ft²", "Área plana antes das costuras"],
            ["Seção de terreno", "1", "40 m / 50 m", "[[A\\approx36.87^\\circ]]", "600 m²", "Área plana do lote"],
            ["Painel de aço", "1", "1.5 m / 1.7 m", "[[A\\approx28.07^\\circ]]", "0.6 m²", "Apenas área plana"],
            ["Perfil de escada", "1", "3.2 m / 4 m", "[[A\\approx36.87^\\circ]]", "3.84 m²", "Perfil lateral, não degraus"],
            ["Janela de vidro", "2", "0.6 m / 1 m", "[[B\\approx53.13^\\circ]]", "0.24 m²", "Antes das folgas da moldura"],
            ["Toldo", "2", "1.2 m / 2 m", "[[B\\approx53.13^\\circ]]", "0.96 m²", "Área da seção triangular"],
            ["Peça de compensado", "2", "0.9 m / 1.5 m", "[[B\\approx53.13^\\circ]]", "0.54 m²", "Área útil, sem desperdício"],
            ["Medição de campo", "2", "7 m / 25 m", "[[B\\approx73.74^\\circ]]", "84 m²", "Área plana do campo"],
            ["Painel de pipa", "2", "20 cm / 25 cm", "[[B\\approx36.87^\\circ]]", "150 cm²", "Área de tecido"],
            ["Painel lateral solar", "2", "1.8 m / 3 m", "[[B\\approx53.13^\\circ]]", "2.16 m²", "Painel de suporte, não saída"]
          ]
        },
        "imgAlt": "Quatro cálculos resolvidos de área do triângulo retângulo: frontão do telhado, janela de vidro, medição de campo e vela",
        "figcaption": "Quatro das situações resolvidas acima, cada uma com seu triângulo, ângulo incluído, fórmula e área verificada."
      },
      "sec-consistency": {
        "h2": "Como verificar se os comprimentos dos lados e o ângulo formam um triângulo retângulo",
        "blocks": [
          { "kind": "p", "text": "Um cateto, uma hipotenusa e um ângulo agudo carregam mais informação do que um triângulo retângulo precisa: dois dos três determinam o terceiro, então os três precisam concordar. As verificações abaixo confirmam que o número calculado descreve um triângulo retângulo." },
          { "kind": "h3", "text": "Validação do Modo 1" },
          { "kind": "p", "text": "Para o Modo 1, a relação de consistência é [[\\cos(A)=b/c]], equivalentemente [[[\\boxed{b=c\\cos(A)}]]] Com [[b=4]] e [[c=5]], [[\\cos(A)=0.8]] dá [[A=\\cos^{-1}(0.8)\\approx36.87^\\circ]]. Um ângulo arbitrário como [[60^\\circ]] não descreveria o mesmo triângulo retângulo com esses comprimentos: [[5\\cos(60^\\circ)=2.5\\neq4]], então as três entradas seriam mutuamente inconsistentes." },
          { "kind": "h3", "text": "Validação do Modo 2" },
          { "kind": "p", "text": "Para o Modo 2, a relação é [[\\cos(B)=a/c]], equivalentemente [[[\\boxed{a=c\\cos(B)}]]] Com [[a=3]] e [[c=5]], [[B=\\cos^{-1}(0.6)\\approx53.13^\\circ]]. O ângulo escolhido precisa corresponder às medidas reais; um cateto de 3 com hipotenusa de 5 simplesmente não se encontra num ângulo incluído de, digamos, [[70^\\circ]]." },
          { "kind": "h3", "text": "Por que a fórmula geral da área ainda pode retornar um número" },
          { "kind": "p", "text": "A fórmula [[K=\\frac12xy\\sin(\\theta)]] calcula a área de um triângulo geral definido por dois lados e seu ângulo incluído. Uma combinação incompatível de ângulo e lados ainda retorna um número, mas o triângulo resultante não é retângulo: é algum outro triângulo que por acaso compartilha essas três entradas. O resultado aritmético por si só não prova que as entradas descrevem um triângulo retângulo válido; a verificação do cosseno acima faz esse trabalho." },
          { "kind": "h3", "text": "Como lidar com medidas de ângulo arredondadas" },
          { "kind": "p", "text": "Um ângulo como [[36.87^\\circ]] pode ser a exibição arredondada de aproximadamente [[36.8699^\\circ]]. Pequenas divergências de arredondamento de exibição ou medição devem ser distinguidas de geometria genuinamente inconsistente: alguns centésimos de grau de folga são arredondamento, enquanto vários graus de divergência significam que as entradas discordam. Nenhuma tolerância numérica de validação é afirmada para a própria calculadora; a distinção é um julgamento feito a partir das medidas em mãos." }
        ]
      },
      "sec-alternatives": {
        "h2": "Outras formas de calcular a área do triângulo retângulo usando ângulos",
        "blocks": [
          { "kind": "p", "text": "Estas são alternativas matemáticas, não modos extras da calculadora; elas mostram a mesma geometria sob outras combinações de entradas." },
          { "kind": "h3", "text": "Usando a hipotenusa e um ângulo agudo" },
          { "kind": "p", "text": "Para um triângulo retângulo válido, [[a=c\\sin(A)]] e [[b=c\\cos(A)]]. Substituir em [[K=ab/2]] dá [[[\\boxed{K=\\frac{c^2\\sin(A)\\cos(A)}{2}}]]] Com a identidade do ângulo duplo [[\\sin(2A)=2\\sin(A)\\cos(A)]], isso vira [[[\\boxed{K=\\frac{c^2\\sin(2A)}{4}}]]] A hipotenusa e um ângulo agudo determinam o triângulo por completo, então nenhuma medida de cateto é necessária." },
          { "kind": "h3", "text": "Usando um cateto e seu ângulo adjacente" },
          { "kind": "p", "text": "Se o lado [[b]] e o ângulo [[A]] são conhecidos, então [[a=b\\tan(A)]], e [[[\\boxed{K=\\frac{b^2\\tan(A)}{2}}]]] A combinação importa: [[b]] precisa ser o cateto adjacente ao ângulo [[A]] para que a tangente produza o cateto oposto." },
          { "kind": "h3", "text": "Usando o lado a e o ângulo B" },
          { "kind": "p", "text": "Espelhando o caso anterior para o ângulo [[B]]: [[b=a\\tan(B)]], logo [[[\\boxed{K=\\frac{a^2\\tan(B)}{2}}]]] O lado [[a]] é adjacente ao ângulo [[B]], e é exatamente por isso que a tangente recupera de novo o cateto oposto." },
          { "kind": "h3", "text": "Qual método é o mais simples?" },
          { "kind": "p", "text": "A melhor fórmula é a que combina com as medidas disponíveis. Se os dois catetos são conhecidos, use [[K=ab/2]] e pule a trigonometria. Se um cateto, a hipotenusa e o ângulo incluído são conhecidos, os dois modos da calculadora são a rota direta. As formas com tangente e ângulo duplo são úteis para cálculos à mão com ângulos especiais, mas acrescentar etapas que as entradas não exigem só cria mais lugares para erros se esconderem." }
        ]
      },
      "sec-angle-effect": {
        "h2": "Como o ângulo agudo afeta a área do triângulo retângulo?",
        "blocks": [
          { "kind": "p", "text": "O seno cresce à medida que um ângulo agudo aumenta, então um ângulo maior parece prometer uma área maior. Isso só vale quando as outras quantidades ficam fixas, e num triângulo retângulo os lados e o ângulo não podem mudar de forma independente." },
          { "kind": "h3", "text": "Hipotenusa fixa, ângulo variando" },
          { "kind": "p", "text": "Para uma hipotenusa fixa, a área pode ser escrita como [[K=\\frac{c^2\\sin(2A)}{4}]]. O fator [[\\sin(2A)]] sobe à medida que [[A]] vai de perto de [[0^\\circ]] até [[45^\\circ]], depois cai à medida que [[A]] se aproxima de [[90^\\circ]]. A área portanto aumenta na primeira metade do intervalo agudo e diminui na segunda metade. As duas metades são imagens espelhadas pela relação de ângulos complementares [[A+B=90^\\circ]]: trocar os ângulos troca os catetos e deixa a área inalterada." },
          { "kind": "h3", "text": "Área máxima para uma hipotenusa fixa" },
          { "kind": "p", "text": "Como [[\\sin(2A)\\leq1]], a maior área possível é [[[\\boxed{K_{\\max}=\\frac{c^2}{4}}]]], atingida quando [[A=B=45^\\circ]]. Para [[c=10]], a área máxima é [[[\\boxed{K_{\\max}=25\\text{ square units}}]]] Este é o triângulo retângulo isósceles do Exemplo 4: catetos iguais tornam o produto dos catetos, e portanto a área, tão grande quanto a hipotenusa fixa permite." },
          { "kind": "h3", "text": "Por que a área não aumenta simplesmente com o ângulo em todo caso" },
          { "kind": "p", "text": "Uma afirmação sobre ângulos crescentes não significa nada sem dizer o que é mantido constante. Com hipotenusa fixa a relação sobe e depois cai; com um cateto fixo a relação é outra. Tratar a área como uma função crescente simples do ângulo é uma simplificação comum, e esta seção existe para mantê-la fora do seu trabalho." }
        ]
      },
      "sec-units": {
        "h2": "Unidades de área, graus e arredondamento",
        "blocks": [
          { "kind": "h3", "text": "Metros quadrados" },
          { "kind": "p", "text": "Se as entradas estão em metros, a área sai em metros quadrados: [[4\\text{ m}\\times5\\text{ m}\\times0.6/2=6\\text{ m}^2]]. A multiplicação de dois comprimentos sempre produz uma unidade quadrada, qualquer que seja o sistema de unidades." },
          { "kind": "h3", "text": "Centímetros quadrados" },
          { "kind": "p", "text": "Entradas em centímetros produzem áreas em centímetros quadrados, como no exemplo do painel de pipa com seu resultado [[150\\text{ cm}^2]]. Converter entre unidades quadradas eleva ao quadrado o fator de conversão linear: 1 m² = 10.000 cm², não 100." },
          { "kind": "h3", "text": "Pés quadrados" },
          { "kind": "p", "text": "Entradas em pés produzem áreas em pés quadrados, como no exemplo da vela com seu resultado [[30\\text{ ft}^2]]. Converta todas as entradas para uma unidade de comprimento antes de calcular; a calculadora não mistura metros e pés." },
          { "kind": "h3", "text": "Graus vs. radianos" },
          { "kind": "p", "text": "A calculadora espera ângulos em graus. Para converter, use [[\\text{Degrees}=\\text{Radians}\\times\\frac{180}{\\pi}]]. Por exemplo, [[\\frac{\\pi}{6}\\text{ radians}=30^\\circ]]. Informar um valor em radianos onde se esperam graus é um dos erros mais graves, porque o seno de um número pequeno em radianos parece plausível embora esteja totalmente errado." },
          { "kind": "h3", "text": "Por que o seno não tem unidades" },
          { "kind": "p", "text": "O seno é uma razão de dois comprimentos, então as unidades se cancelam e o valor é adimensional. Multiplicar dois comprimentos por um número adimensional deixa exatamente as unidades quadradas de que a área precisa. É também por isso que o valor do seno é o mesmo quer os lados tenham sido medidos em metros ou pés, desde que a forma do triângulo seja a mesma." },
          { "kind": "h3", "text": "Por que o arredondamento intermediário importa" },
          { "kind": "p", "text": "Arredondar um ângulo ou um valor de seno cedo demais pode deslocar a área final. Mantenha precisão total ao longo do cálculo e arredonde só o resultado relatado, numa precisão que as medidas de entrada sustentem. Uma medida dada com dois algarismos significativos não merece uma resposta com seis casas decimais." }
        ]
      },
      "sec-mistakes": {
        "h2": "Erros comuns ao calcular a área do triângulo retângulo a partir de um ângulo",
        "blocks": [],
        "steps": [
          "<strong>Usar o ângulo B com o Modo 1 sem trocar os lados.</strong> O Modo 1 combina [[b]] e [[c]] com o ângulo [[A]]; alimentá-lo com [[B]] calcula a área de outro triângulo.",
          "<strong>Usar o ângulo A com o Modo 2.</strong> O Modo 2 combina [[a]] e [[c]] com o ângulo [[B]]. Confira o seletor de modo antes de digitar os números.",
          "<strong>Confundir adjacente com oposto.</strong> Esses rótulos dependem do ângulo de referência: fixe primeiro o ângulo e depois rotule os catetos em relação a ele.",
          "<strong>Informar a hipotenusa no campo do cateto.</strong> O cateto precisa ser menor que [[c]]; trocá-los quebra toda verificação de consistência.",
          "<strong>Usar o ângulo incluído errado.</strong> O ângulo precisa ficar entre os dois lados informados, ou a projeção do seno sai errada.",
          "<strong>Esquecer a função seno.</strong> [[bc/2]] sozinho multiplica dois comprimentos não perpendiculares; o resultado não é a área do triângulo.",
          "<strong>Esquecer de dividir por dois.</strong> O produto sem dividir pela metade é a área do paralelogramo, não a do triângulo.",
          "<strong>Informar radianos quando se esperam graus.</strong> [[\\sin(0.64)]] e [[\\sin(36.87^\\circ)]] são números totalmente diferentes.",
          "<strong>Informar 0 ou 90 graus.</strong> Nenhum dos dois descreve um triângulo retângulo não degenerado com essas entradas.",
          "<strong>Informar comprimentos negativos ou zero.</strong> Comprimentos são positivos; qualquer outra coisa não tem significado geométrico.",
          "<strong>Informar um cateto maior que a hipotenusa.</strong> A hipotenusa é sempre o lado mais longo, então essa entrada contradiz a configuração.",
          "<strong>Usar entradas inconsistentes.</strong> Confira [[b=c\\cos(A)]] ou [[a=c\\cos(B)]]; um número vindo de entradas incompatíveis não pertence a nenhum triângulo retângulo.",
          "<strong>Misturar unidades.</strong> Converta todos os comprimentos para uma unidade primeiro; metros com centímetros escalam a resposta por 100.",
          "<strong>Relatar unidades lineares.</strong> A unidade de área é o quadrado da unidade de comprimento: m², não m.",
          "<strong>Arredondar o ângulo cedo demais.</strong> Arredonde só a resposta final; arredondar cedo desloca o seno.",
          "<strong>Tratar os modos como intercambiáveis.</strong> Cada modo é sua própria fórmula com seu próprio contrato de entradas."
        ],
        "closingParagraphs": [
          "<strong>Exemplo errado versus correto.</strong> Tome o triângulo 3-4-5 com [[b=4]], [[c=5]], [[A\\approx36.87^\\circ]]. Correto: [[K=(4\\times5\\times\\sin(A))/2\\approx6]]. Se o ângulo errado for substituído, [[K=(4\\times5\\times\\sin(B))/2\\approx8]], não 6. O erro usa o ângulo incluído incorreto para os lados [[b]] e [[c]], e 8 é simplesmente a área do triângulo errado."
        ]
      },
      "sec-verify": {
        "h2": "Como verificar se a área calculada está correta",
        "blocks": [
          { "kind": "h3", "text": "Método 1: confira o teorema de Pitágoras" },
          { "kind": "p", "text": "Para um triângulo retângulo válido, [[a^2+b^2=c^2]]. Para o triângulo 3-4-5, [[9+16=25]]. Uma falha aqui significa que as entradas de lado não descrevem nenhum triângulo retângulo." },
          { "kind": "h3", "text": "Método 2: confira a fórmula dos catetos" },
          { "kind": "p", "text": "Calcule [[K=ab/2]] de forma independente. Para [[a=3]] e [[b=4]], [[K=6]]. A concordância com o resultado baseado no ângulo confirma todo o cálculo." },
          { "kind": "h3", "text": "Método 3: confira o ângulo complementar" },
          { "kind": "p", "text": "Verifique [[A+B=90^\\circ]]. Para [[A\\approx36.87^\\circ]], [[B\\approx53.13^\\circ]]. A soma precisa valer para que o ângulo informado seja um ângulo agudo genuíno do triângulo." },
          { "kind": "h3", "text": "Método 4: confira a relação do seno" },
          { "kind": "p", "text": "Para o Modo 1, [[\\sin(A)=a/c]]; para o Modo 2, [[\\sin(B)=b/c]]. No triângulo 3-4-5, [[\\sin(36.87^\\circ)\\approx3/5]] e [[\\sin(53.13^\\circ)\\approx4/5]]. Esta é a mesma relação que a fórmula usa, verificada na direção oposta." },
          { "kind": "h3", "text": "Método 5: verifique a consistência das entradas" },
          { "kind": "p", "text": "Para o Modo 1, [[b\\approx c\\cos(A)]]; para o Modo 2, [[a\\approx c\\cos(B)]]. O símbolo de aproximação é adequado quando a medida do ângulo foi arredondada." },
          { "kind": "h3", "text": "Método 6: confira a área máxima" },
          { "kind": "p", "text": "Para uma hipotenusa fixa, [[K\\leq c^2/4]]. Com [[c=5]], nenhuma área válida passa de 6,25 unidades quadradas. Uma área calculada acima desse limite sinaliza um erro de entrada imediatamente." },
          { "kind": "h3", "text": "Método 7: confira as unidades quadradas" },
          { "kind": "p", "text": "Garanta que o resultado esteja expresso no quadrado da unidade de comprimento de entrada. Isso pega o hábito surpreendentemente comum de relatar o número da área com a unidade de comprimento inalterada." }
        ]
      },
      "sec-conclusion": {
        "h2": "Um ângulo, um cateto e a hipotenusa são tudo de que você precisa",
        "blocks": [
          { "kind": "p", "text": "O método da área por ângulo é a regra da base vezes altura com a altura reconstruída a partir da hipotenusa. Uma vez que o ângulo incluído é combinado com os lados corretos, o seno fornece o cateto perpendicular e a área está a uma substituição de distância. Os dois modos são duas portas para a mesma sala: o Modo 1 entra pelo ângulo A, o Modo 2 pelo ângulo B, e ambos chegam à mesma área." },
          { "kind": "p", "text": "A disciplina que torna o método confiável é a consistência: verifique se o cateto, a hipotenusa e o ângulo concordam pela relação do cosseno, confira a área contra a fórmula dos catetos quando o segundo cateto puder ser recuperado e mantenha exata a combinação ângulo-lado. Com essas verificações, a resposta conquista sua confiança." },
          { "kind": "p", "text": "Use a calculadora desta página sempre que um cateto, a hipotenusa e o ângulo incluído forem os dados medidos, e recorra às calculadoras de catetos, altura ou semiperímetro quando as medidas apontarem para outro lado." }
        ]
      }
    },
    "faqs": [
      {
        "question": "Como se calcula a área de um triângulo retângulo usando um ângulo?",
        "answer": "Use K = bc sen(A)/2 quando você conhece o lado b, a hipotenusa c e o ângulo incluído A; use K = ac sen(B)/2 quando conhece o lado a, a hipotenusa c e o ângulo incluído B. O seno converte a hipotenusa na altura perpendicular relativa ao cateto escolhido, e dividir por dois dá a área em unidades quadradas."
      },
      {
        "question": "Qual é a fórmula da área usando o lado b, a hipotenusa c e o ângulo A?",
        "answer": "A fórmula é K = bc sen(A)/2. O lado b é o cateto adjacente ao ângulo A, c é a hipotenusa e A é o ângulo agudo entre eles. Para b = 4, c = 5 e A de cerca de 36,87 graus, sen(A) é cerca de 0,6, então a área é cerca de 6 unidades quadradas."
      },
      {
        "question": "Qual é a fórmula da área usando o lado a, a hipotenusa c e o ângulo B?",
        "answer": "A fórmula é K = ac sen(B)/2. O lado a é o cateto adjacente ao ângulo B, c é a hipotenusa e B é o ângulo agudo entre eles. Para a = 3, c = 5 e B de cerca de 53,13 graus, sen(B) é cerca de 0,8, então a área é cerca de 6 unidades quadradas, o mesmo triângulo do exemplo do Modo 1."
      },
      {
        "question": "Por que a fórmula da área usa o seno?",
        "answer": "O seno constrói a altura perpendicular a partir da hipotenusa. Com base b e um lado c encontrando-a no ângulo A, a altura é c sen(A), logo K = bc sen(A)/2. Sem o termo do seno, a fórmula multiplicaria dois comprimentos não perpendiculares e responderia outra pergunta geométrica."
      },
      {
        "question": "O que é um ângulo incluído?",
        "answer": "Um ângulo incluído fica entre dois lados especificados. O ângulo A está incluído entre os lados b e c; o ângulo B está incluído entre os lados a e c. A fórmula da área com seno só funciona com o ângulo incluído dos dois lados usados, porque a fórmula lê a altura perpendicular a partir desse ângulo."
      },
      {
        "question": "Posso calcular a área sem conhecer os dois catetos?",
        "answer": "Sim. A hipotenusa e o ângulo incluído juntos reconstroem o cateto que faltava pelo seno, então o segundo cateto nunca precisa ser medido. Se os dois catetos forem conhecidos, a fórmula mais simples K = ab/2 é a rota direta e não precisa de trigonometria."
      },
      {
        "question": "Por que os dois modos da calculadora dão a mesma área?",
        "answer": "Os dois modos descrevem um só triângulo. Como sen(A) = a/c, bc sen(A) = ab; como sen(B) = b/c, ac sen(B) = ab. As duas fórmulas se reduzem a K = ab/2. Pequenas diferenças vindas de ângulos arredondados são efeitos de arredondamento, não discordâncias entre as fórmulas."
      },
      {
        "question": "Posso usar qualquer ângulo agudo com um cateto e uma hipotenusa dados?",
        "answer": "Não. As três entradas precisam concordar: o Modo 1 exige b = c cos(A) e o Modo 2 exige a = c cos(B). Um ângulo agudo arbitrário com os mesmos comprimentos descreve outro triângulo, não retângulo, e a área que a fórmula retorna pertence àquele triângulo."
      },
      {
        "question": "Como posso verificar a área usando a fórmula dos catetos?",
        "answer": "Recupere o cateto que faltava com o teorema de Pitágoras e calcule K = ab/2. Para b = 4 e c = 5, a = sqrt(25 - 16) = 3, e K = 12/2 = 6, igualando o resultado baseado no ângulo. A concordância entre as duas rotas independentes confirma as entradas e a aritmética."
      },
      {
        "question": "O ângulo precisa estar em graus ou radianos?",
        "answer": "A calculadora espera graus. Converta radianos com Graus = Radianos vezes 180/pi; pi/6 radianos são 30 graus. Um valor em radianos informado onde se esperam graus dá um valor de seno com aparência plausível mas errado, então confira a unidade antes de calcular."
      },
      {
        "question": "Qual é a área máxima para uma dada hipotenusa?",
        "answer": "O máximo é c ao quadrado dividido por 4, atingido quando os dois ângulos agudos são de 45 graus, o triângulo retângulo isósceles. Para uma hipotenusa de 10 unidades, a área máxima é 25 unidades quadradas. Qualquer área calculada acima de c ao quadrado sobre 4 sinaliza um erro de entrada."
      },
      {
        "question": "Quando devo usar a Calculadora de Área do Triângulo Retângulo principal?",
        "answer": "Use a calculadora de área principal quando suas medidas combinarem mais diretamente com uma de suas combinações de entrada, por exemplo os dois catetos conhecidos. Guarde esta calculadora baseada em ângulo para o caso para o qual foi feita: um cateto, a hipotenusa e o ângulo agudo incluído medidos juntos."
      }
    ],
    "faqHeading": "Perguntas frequentes",
    "relatedHeading": "Explore as calculadoras relacionadas de triângulo retângulo",
    "relatedItems": [
      "Calculadora de área do triângulo retângulo",
      "Calculadora de área do triângulo retângulo a partir dos catetos",
      "Calculadora de área do triângulo retângulo a partir da altura",
      "Calculadora de área do triângulo retângulo a partir de cateto e ângulo",
      "Calculadora de área do triângulo retângulo a partir do semiperímetro",
      "Calculadora de lado do triângulo retângulo a partir do seno",
      "Calculadora de ângulo do triângulo retângulo a partir do seno"
    ]
  },
  "bn": {
    "tocHeading": "এই নির্দেশিকায়",
    "tocItems": {
      "sec-intro": "কোণ থেকে সমকোণী ত্রিভুজের ক্ষেত্রফল কীভাবে নির্ণয় করবেন",
      "sec-geometry": "সমকোণী ত্রিভুজের বাহু ও কোণ বোঝা",
      "sec-sine": "ক্ষেত্রফলের সূত্রে সাইন কেন ব্যবহার হয়?",
      "sec-mode1": "b বাহু, c অতিভুজ ও A কোণ দিয়ে ক্ষেত্রফল নির্ণয়",
      "sec-mode2": "a বাহু, c অতিভুজ ও B কোণ দিয়ে ক্ষেত্রফল নির্ণয়",
      "sec-same": "দুটি কোণ-ভিত্তিক সূত্র, একটি সমকোণী ত্রিভুজ",
      "sec-howto": "সমকোণী ত্রিভুজের কোণ-থেকে-ক্ষেত্রফল ক্যালকুলেটর কীভাবে ব্যবহার করবেন",
      "sec-foundations": "কোণ থেকে সমকোণী ত্রিভুজের ক্ষেত্রফলের ধাপে ধাপে উদাহরণ",
      "sec-applications": "কোণ থেকে সমকোণী ত্রিভুজের ক্ষেত্রফলের বাস্তব প্রয়োগ",
      "sec-consistency": "বাহুর দৈর্ঘ্য ও কোণ সমকোণী ত্রিভুজ গঠন করে কিনা তা কীভাবে যাচাই করবেন",
      "sec-alternatives": "কোণ ব্যবহার করে সমকোণী ত্রিভুজের ক্ষেত্রফল নির্ণয়ের বিকল্প উপায়",
      "sec-angle-effect": "সূক্ষ্মকোণ সমকোণী ত্রিভুজের ক্ষেত্রফলকে কীভাবে প্রভাবিত করে?",
      "sec-units": "ক্ষেত্রফলের একক, ডিগ্রি ও আসন্নীকরণ",
      "sec-mistakes": "কোণ থেকে সমকোণী ত্রিভুজের ক্ষেত্রফল নির্ণয়ে সাধারণ ভুল",
      "sec-verify": "নির্ণীত ক্ষেত্রফল সঠিক কিনা তা কীভাবে যাচাই করবেন",
      "sec-related": "সম্পর্কিত সমকোণী ত্রিভুজ ক্যালকুলেটর দেখুন",
      "sec-faq": "সচরাচর জিজ্ঞাসিত প্রশ্ন",
      "sec-conclusion": "উপসংহার"
    },
    "sections": {
      "sec-intro": {
        "h2": "কোণ থেকে সমকোণী ত্রিভুজের ক্ষেত্রফল কীভাবে নির্ণয় করবেন",
        "blocks": [
          { "kind": "p", "text": "ধরা যাক, একটি সমকোণী ত্রিভুজের একটি বাহু [[b=4\\text{ m}]], অতিভুজ [[c=5\\text{ m}]], এবং এই দুটি বাহুর মধ্যবর্তী সূক্ষ্মকোণ প্রায় [[A\\approx36.87^\\circ]]। এর ক্ষেত্রফল সরাসরি পাওয়া যায়: [[K=\\frac{4\\times5\\times\\sin(36.87^\\circ)}{2}]]। যেহেতু [[\\sin(36.87^\\circ)\\approx0.6]], ক্ষেত্রফল প্রায় [[[\\boxed{K=6\\text{ m}^2}]]]। ত্রিভুজটি 6 বর্গমিটার সমতল পৃষ্ঠ জুড়ে আছে।" },
          { "kind": "p", "text": "এই ক্যালকুলেটর ঠিক এই পরিস্থিতির জন্য: একটি বাহু, অতিভুজ এবং তাদের মধ্যবর্তী সূক্ষ্মকোণ জানা থাকলে, সাইন অতিভুজকে অনুপস্থিত লম্ব উচ্চতায় রূপান্তর করে, এবং ভূমি গুণ উচ্চতার অর্ধেক বর্গ এককে ক্ষেত্রফল দেয়। অন্তর্ভুক্ত কোণটি প্রবেশ করানো দুটি বাহুর মাঝে থাকতে হবে, এবং প্রতিটি মোড একটি নির্দিষ্ট কোণকে তার দুটি বাহুর সঙ্গে জোড়া দেয়।" },
          { "kind": "p", "text": "[[36.87^\\circ]] কোণটি প্রায় [[36.8699^\\circ]] থেকে আসন্নীকৃত; ক্যালকুলেটরে পূর্ণ নির্ভুলতা রাখলে সবচেয়ে সঠিক ফল পাওয়া যায়।" }
        ]
      },
      "sec-geometry": {
        "h2": "সমকোণী ত্রিভুজের বাহু ও কোণ বোঝা",
        "blocks": [
          { "kind": "p", "text": "এই নির্দেশিকায় শুরু থেকে শেষ পর্যন্ত একটি সামঞ্জস্যপূর্ণ সংকেত ব্যবহার করা হয়েছে: [[A]] ও [[B]] দুটি সূক্ষ্মকোণ, [[C=90^\\circ]] সমকোণ, [[a]] বাহু [[A]] কোণের বিপরীতে, [[b]] বাহু [[B]] কোণের বিপরীতে, [[c]] বাহু অতিভুজ, এবং [[K]] ক্ষেত্রফল।" },
          { "kind": "h3", "text": "সমকোণী ত্রিভুজ কী?" },
          { "kind": "p", "text": "সমকোণী ত্রিভুজের একটি অন্তঃকোণ ঠিক [[90^\\circ]]। এর দুটি বাহু সেই সমকোণে মিলিত হয়, এবং অতিভুজ তার বিপরীতে থাকে। অতিভুজ সবসময় দীর্ঘতম বাহু। বাকি দুটি কোণ সূক্ষ্ম, এবং যেহেতু তিনটি অন্তঃকোণের যোগফল 180 ডিগ্রি, [[A+B+C=180^\\circ]]। যেহেতু [[C=90^\\circ]], সূক্ষ্মকোণ দুটি [[A+B=90^\\circ]] সিদ্ধ করে: একটি জানলে অন্যটি জানা যায়।" },
          { "kind": "h3", "text": "অতিভুজ কী?" },
          { "kind": "p", "text": "অতিভুজ হলো সমকোণের বিপরীত বাহু, ক্যালকুলেটরের উভয় মোডে যাকে [[c]] দিয়ে চিহ্নিত করা হয়। যেকোনো দিকমুখী অঙ্কিত ত্রিভুজে এটি খুঁজতে, সেই বাহুটি দেখুন যা বর্গাকার কোণের চিহ্ন স্পর্শ করে না: সেই বাহুটিই অতিভুজ। এটি যেকোনো বাহুর চেয়ে দীর্ঘ, কারণ এটি পুরো সমকোণ জুড়ে বিস্তৃত থাকে আর প্রতিটি বাহু কেবল একটি সূক্ষ্মকোণ জুড়ে থাকে। এই পৃষ্ঠার প্রতিটি ক্ষেত্রফল সূত্রে [[c]] দুটি বাহুর একটি হিসেবে ব্যবহৃত হয়, তাই এটি সঠিকভাবে চেনা অনুশীলনের প্রথম দক্ষতা।" },
          { "kind": "h3", "text": "সন্নিহিত বাহু কী?" },
          { "kind": "p", "text": "সন্নিহিত বাহু হলো সেই বাহু যা নির্বাচিত প্রসঙ্গ কোণকে স্পর্শ করে কিন্তু অতিভুজ নয়। [[A]] কোণের জন্য সন্নিহিত বাহু [[b]]; [[B]] কোণের জন্য সন্নিহিত বাহু [[a]]। প্রথমে প্রসঙ্গ কোণের নাম দিন, তারপর এর সন্নিহিত বাহু পড়ুন। প্রসঙ্গ কোণ বদলে দিলে নীরবে বদলে যায় কোন বাহু সন্নিহিত হিসেবে গণ্য হয়, এবং এই পৃষ্ঠায় পরে তালিকাভুক্ত অনেক সাধারণ ভুলের পেছনে সেই বদলই দায়ী।" },
          { "kind": "h3", "text": "বিপরীত বাহু কী?" },
          { "kind": "p", "text": "বিপরীত বাহু নির্বাচিত কোণের ঠিক বিপরীতে থাকে, তাকে স্পর্শ করে না। [[A]] কোণের জন্য [[a]] বাহু বিপরীত; [[B]] কোণের জন্য [[b]] বাহু বিপরীত। প্রসঙ্গ কোণের সঙ্গে চিহ্ন বদলায়, কিন্তু উভয় ক্ষেত্রে অতিভুজ [[c]]-ই থাকে। ত্রিভুজে চিহ্ন দেওয়ার সময় প্রসঙ্গ কোণ স্থির রাখলে পরের প্রতিটি ধাপ সামঞ্জস্যপূর্ণ থাকে।" },
          { "kind": "h3", "text": "অন্তর্ভুক্ত কোণ কী?" },
          { "kind": "p", "text": "অন্তর্ভুক্ত কোণ হলো দুটি নির্দিষ্ট বাহুর মাঝে থাকা কোণ। [[A]] কোণ [[b]] ও [[c]] বাহুর মাঝে অন্তর্ভুক্ত; [[B]] কোণ [[a]] ও [[c]] বাহুর মাঝে অন্তর্ভুক্ত। সাধারণ সাইন ক্ষেত্রফল সূত্র তখনই কাজ করে যখন কোণটি ব্যবহৃত দুটি বাহুর মাঝে অন্তর্ভুক্ত থাকে, কারণ সূত্রটি সেই কোণ থেকে লম্ব উচ্চতা পড়ে। যে কোণকে স্পর্শ করে না এমন বাহুর সঙ্গে কোণ জোড়া দিলে সূত্রটি যে জ্যামিতির ওপর নির্ভর করে তা ভেঙে যায়।" }
        ],
        "imgAlt": "ABC সমকোণী ত্রিভুজে দুটি ক্ষেত্রফল মোড: b ও c বাহুর মাঝে A কোণ, a ও c বাহুর মাঝে B কোণ",
        "figcaption": "ক্যালকুলেটরের উভয় মোড একই ত্রিভুজ ব্যবহার করে। মোড 1 b বাহু, c অতিভুজ ও অন্তর্ভুক্ত A কোণ জোড়া দেয়; মোড 2 a বাহু, c অতিভুজ ও অন্তর্ভুক্ত B কোণ জোড়া দেয়।"
      },
      "sec-sine": {
        "h2": "ক্ষেত্রফলের সূত্রে সাইন কেন ব্যবহার হয়?",
        "blocks": [
          { "kind": "p", "text": "ক্যালকুলেটরের উভয় মোড একটি সাধারণ সূত্রের ওপর দাঁড়িয়ে, যা দুটি বাহু ও তাদের অন্তর্ভুক্ত কোণ দিয়ে যেকোনো ত্রিভুজের ক্ষেত্রফল দেয়:" },
          { "kind": "p", "text": "[[[\\boxed{K=\\frac12 xy\\sin(\\theta)}]]]" },
          { "kind": "p", "text": "এখানে [[x]] ও [[y]] দুটি বাহুর দৈর্ঘ্য, [[\\theta]] তাদের মধ্যবর্তী অন্তর্ভুক্ত কোণ, এবং [[K]] ক্ষেত্রফল। সাইন পদটিই দ্বিতীয় বাহু থেকে লম্ব উচ্চতা তৈরি করে।" },
          { "kind": "h3", "text": "সাধারণ সূত্রটি কীভাবে কাজ করে" },
          { "kind": "p", "text": "ত্রিভুজের ক্ষেত্রফলের পরিচিত নিয়ম [[K=\\frac12\\times\\text{base}\\times\\text{height}]]। লম্ব উচ্চতা সরাসরি মাপা না গেলে, সাইন অন্য একটি বাহু থেকে তা উদ্ধার করতে পারে। [[x]] দৈর্ঘ্যের ভূমি ও [[\\theta]] কোণে মিলিত [[y]] দৈর্ঘ্যের দ্বিতীয় বাহু নিন। সেই দ্বিতীয় বাহুর লম্ব উপাংশ, ক্ষেত্রফলের জন্য গণ্য উচ্চতা, হলো [[h=y\\sin(\\theta)]]। ভূমি-উচ্চতা নিয়মে বসালে [[K=\\frac12 x(y\\sin(\\theta))]] পাওয়া যায়, উপরের সাধারণ সূত্র। অন্তর্ভুক্ত কোণ নির্বাচিত দুটি বাহুর সঙ্গে মিলতে হবে; ত্রিভুজের অন্য কোথাও থেকে নেওয়া কোণ ভিন্ন লম্ব পরিমাপ করে।" },
          { "kind": "h3", "text": "ক্ষেত্রফলকে দুই দিয়ে ভাগ করা হয় কেন?" },
          { "kind": "p", "text": "ত্রিভুজ একই ভূমি ও একই লম্ব উচ্চতার ওপর গঠিত সামান্তরিকের অর্ধেক জায়গা দখল করে। ভূমি [[x]] ও উচ্চতা [[h]] হলে, গুণফল [[x\\times h]] পুরো সামান্তরিক, আর ত্রিভুজ তার ঠিক অর্ধেক। দুটি বাহু ও সাইন মান গুণ করে অর্ধেক না করলে কাঙ্ক্ষিত ক্ষেত্রফলের দ্বিগুণ পাওয়া যায়।" },
          { "kind": "h3", "text": "অতিভুজ কেন ব্যবহার করা যায়" },
          { "kind": "p", "text": "অন্তর্ভুক্ত-কোণ সূত্রে দুটি বাহুর একটি অতিভুজ হতে পারে। সঠিক বাহু ও তাদের মধ্যবর্তী সূক্ষ্মকোণের সঙ্গে জোড়া দিলে, অতিভুজ ক্ষেত্রফল গঠনের জন্য যথেষ্ট তথ্য বহন করে: এর সাইন উপাংশ ঠিক সেই বাহুকে ভূমি ধরে লম্ব উচ্চতা। এই কারণে ক্যালকুলেটর কখনো দ্বিতীয় বাহু চায় না। অতিভুজ সূত্রের বিশেষ ব্যতিক্রম নয়; এটি বাহুর একটি সাধারণ পছন্দ, একটি সাধারণ অন্তর্ভুক্ত কোণে।" },
          { "kind": "h3", "text": "কোণ সঠিক হওয়া কেন জরুরি" },
          { "kind": "p", "text": "একই বাহু-জোড়া রেখে [[A]] কোণের বদলে [[B]] কোণ বসালে সাধারণত ভুল ফল আসে। [[b=4]], [[c=5]], [[A\\approx36.87^\\circ]] সহ 3-4-5 ত্রিভুজটি নিন। সঠিক মোড 1 গণনা [[K=(4\\times5\\times\\sin(36.87^\\circ))/2\\approx6]]। বদলে অন্য কোণ বসালে [[K=(4\\times5\\times\\sin(53.13^\\circ))/2\\approx8]] পাওয়া যায়, কারণ [[\\sin(53.13^\\circ)\\approx0.8]]। 8 উত্তরটি আসন্নীকরণের ত্রুটি নয়; এটি ভিন্ন একটি বিন্যাসের ক্ষেত্রফল, যেখানে বাহু-জোড়া আর অন্তর্ভুক্ত কোণের সঙ্গে মেলে না। কোণ-বাহু জোড়া ঠিক রাখা এই পৃষ্ঠার সবচেয়ে গুরুত্বপূর্ণ শিক্ষাগুলোর একটি।" }
        ],
        "imgAlt": "3-4-5 সমকোণী ত্রিভুজে a = c sin A = 3, ক্ষেত্রফলের লম্ব উচ্চতা হিসেবে",
        "figcaption": "A কোণের সাইন অতিভুজকে লম্ব উচ্চতা a = 3-এ রূপান্তর করে, তাই পরিচিত K = ba/2 ও সরাসরি সূত্র K = bc sin(A)/2 একমত হয়।"
      },
      "sec-mode1": {
        "h2": "b বাহু, c অতিভুজ ও A কোণ দিয়ে ক্ষেত্রফল নির্ণয়",
        "blocks": [
          { "kind": "p", "text": "ক্যালকুলেটরের মোড 1 ব্যবহার করে:" },
          { "kind": "p", "text": "[[[\\boxed{K=\\frac{bc\\sin(A)}{2}}]]]" },
          { "kind": "p", "text": "চলকগুলো হলো: [[b]] [[A]] কোণের সন্নিহিত বাহু, [[c]] অতিভুজ, [[A]] [[b]] ও [[c]]-এর মধ্যবর্তী অন্তর্ভুক্ত সূক্ষ্মকোণ, এবং [[K]] ক্ষেত্রফল।" },
          { "kind": "h3", "text": "ধাপে ধাপে সূত্রের উৎপত্তি" },
          { "kind": "p", "text": "বাহু-ভিত্তিক ক্ষেত্রফল সূত্র [[K=ab/2]] থেকে শুরু করুন। [[A]] কোণে সাইন অনুপাত থেকে, [[\\sin(A)=a/c]], তাই [[a=c\\sin(A)]]। বিপরীত বাহু [[a]]-কে অতিভুজের সাইন উপাংশ হিসেবে পুনর্লেখা হচ্ছে। বসিয়ে [[K=\\frac{b(c\\sin(A))}{2}]] পাওয়া যায়, এবং সাজিয়ে [[[\\boxed{K=\\frac{bc\\sin(A)}{2}}]]]। অজানা বিপরীত বাহু কখনো প্রবেশ করানোর দরকার হয় না কারণ সূত্রটি পর্দার আড়ালে অতিভুজ ও কোণ থেকে তা গঠন করে।" },
          { "kind": "h3", "text": "সম্পূর্ণ সমাধানকৃত উদাহরণ" },
          { "kind": "p", "text": "দেওয়া আছে [[b=4\\text{ m}]], [[c=5\\text{ m}]], [[A\\approx36.87^\\circ]]:" }
        ],
        "steps": [
          "<strong>সূত্রটি লিখুন।</strong> [[K=bc\\sin(A)/2]]।",
          "<strong>বসান।</strong> [[K=(4\\times5\\times\\sin(36.87^\\circ))/2]]।",
          "<strong>সাইন নির্ণয় করুন।</strong> [[\\sin(36.87^\\circ)\\approx0.6]]।",
          "<strong>গুণ করুন।</strong> [[K\\approx(20\\times0.6)/2]]।",
          "<strong>ভাগ করুন।</strong> [[[\\boxed{K\\approx6\\text{ m}^2}]]]।"
        ],
        "closingParagraphs": [
          "উত্তরটি বলছে ত্রিভুজটি প্রায় 6 বর্গমিটার জুড়ে আছে। যেহেতু ইনপুট কোণ আসন্নীকৃত, প্রতিবেদনে প্রায় শব্দটি থাকা উচিত, যদিও পূর্ণ নির্ভুলতায় একই ইনপুটে ঠিক 6 পাওয়া যায়।",
          "<strong>অনুপস্থিত বাহু দিয়ে যাচাই।</strong> অনুপস্থিত বাহু পিথাগোরাসের উপপাদ্য থেকে পাওয়া যায়: [[a=\\sqrt{c^2-b^2}]], তাই [[a=\\sqrt{25-16}=3]]। তাহলে [[K=(3\\times4)/2=6]]। উভয় পথ একমত কারণ তারা একই ত্রিভুজ বর্ণনা করে: সাইন পথ কোণ থেকে অনুপস্থিত বাহু গঠন করে, আর বাহু পথ সরাসরি বাহু ব্যবহার করে।",
          "<strong>মোড 1 কখন ব্যবহার করবেন?</strong> জানা পরিমাপগুলো যখন পরিচিত সূক্ষ্মকোণের সন্নিহিত বাহু, অতিভুজ ও সেই কোণ নিজে, তখন মোড 1 ব্যবহার করুন। দুটি বাহুই জানা থাকলে, সরাসরি বাহু সূত্র সহজতর এবং কোণ এড়িয়ে যায়। মোড 1 সেই সাধারণ মাঠ-পরিস্থিতির জন্য যেখানে একই পরিমাপ ব্যবস্থা থেকে একটি কোণ ও দুটি দৈর্ঘ্য আসে, আর দ্বিতীয় বাহু কখনো রেকর্ড করা হয়নি।"
        ]
      },
      "sec-mode2": {
        "h2": "a বাহু, c অতিভুজ ও B কোণ দিয়ে ক্ষেত্রফল নির্ণয়",
        "blocks": [
          { "kind": "p", "text": "ক্যালকুলেটরের মোড 2 ব্যবহার করে:" },
          { "kind": "p", "text": "[[[\\boxed{K=\\frac{ac\\sin(B)}{2}}]]]" },
          { "kind": "p", "text": "চলকগুলো হলো: [[a]] [[B]] কোণের সন্নিহিত বাহু, যা [[A]] কোণের বিপরীত; [[c]] অতিভুজ; [[B]] [[a]] ও [[c]]-এর মধ্যবর্তী অন্তর্ভুক্ত সূক্ষ্মকোণ; এবং [[K]] ক্ষেত্রফল।" },
          { "kind": "h3", "text": "ধাপে ধাপে সূত্রের উৎপত্তি" },
          { "kind": "p", "text": "আবার [[K=ab/2]] থেকে শুরু করুন। [[B]] কোণে পরিমাপ করা সাইন অনুপাত [[\\sin(B)=b/c]], কারণ [[B]]-এর দৃষ্টিকোণ থেকে বিপরীত বাহু [[b]]। সুতরাং [[b=c\\sin(B)]]। বসিয়ে [[K=\\frac{a(c\\sin(B))}{2}]] পাওয়া যায়, তাই [[[\\boxed{K=\\frac{ac\\sin(B)}{2}}]]]। সূত্রটি [[a]] বাহু ব্যবহার করে যদিও পৃষ্ঠার মূল সংকেতে [[a]]-কে বিপরীত বাহু বলা হয়; বিপরীত চিহ্নটি [[A]] কোণের, আর [[B]] কোণের সাপেক্ষে একই বাহু সন্নিহিত। বাহুর চিহ্ন সবসময় নির্বাচিত প্রসঙ্গ কোণের সাপেক্ষে।" },
          { "kind": "h3", "text": "সম্পূর্ণ সমাধানকৃত উদাহরণ" },
          { "kind": "p", "text": "দেওয়া আছে [[a=3\\text{ m}]], [[c=5\\text{ m}]], [[B\\approx53.13^\\circ]]:" }
        ],
        "steps": [
          "<strong>সূত্রটি লিখুন।</strong> [[K=ac\\sin(B)/2]]।",
          "<strong>বসান।</strong> [[K=(3\\times5\\times\\sin(53.13^\\circ))/2]]।",
          "<strong>সাইন নির্ণয় করুন।</strong> [[\\sin(53.13^\\circ)\\approx0.8]]।",
          "<strong>গুণ ও ভাগ করুন।</strong> [[[\\boxed{K\\approx6\\text{ m}^2}]]]।"
        ],
        "closingParagraphs": [
          "ফলাফল মোড 1 উদাহরণের মতোই 6 বর্গমিটার, কারণ উভয় উদাহরণ একই 3-4-5 ত্রিভুজকে তার দুটি সূক্ষ্মকোণ থেকে দেখে।",
          "<strong>অনুপস্থিত বাহু দিয়ে যাচাই।</strong> [[b=\\sqrt{c^2-a^2}]] গণনা করুন, তাই [[b=\\sqrt{25-9}=4]]। তাহলে [[K=(3\\times4)/2=6]]। একমত হওয়া প্রত্যাশিত: সাইন সূত্র নীরবে অতিভুজ ও কোণ থেকে অনুপস্থিত বাহু [[b]] পুনর্গঠন করেছে।",
          "<strong>মোড 2 কখন ব্যবহার করবেন?</strong> পরিচিত বাহু [[a]] হলে, অতিভুজ [[c]] জানা থাকলে, এবং পরিমাপ করা কোণ [[a]] বাহুকে স্পর্শ করলে, অর্থাৎ [[B]] কোণ হলে, মোড 2 ব্যবহার করুন। বাহু ও কোণের চিহ্নও না বদলে দুটি মোড পরস্পর বিনিময়যোগ্য নয়; মোড 1-এর ইনপুট মোড 2-এ দিলে ভিন্ন ত্রিভুজের ক্ষেত্রফল গণনা হয়।"
        ]
      },
      "sec-same": {
        "h2": "দুটি কোণ-ভিত্তিক সূত্র, একটি সমকোণী ত্রিভুজ",
        "blocks": [
          { "kind": "p", "text": "উভয় মোড একই জ্যামিতিক বস্তুর ক্ষেত্রফল গণনা করে, তাই তাদের একমত হতেই হবে। মোড 1-এর জন্য, [[K=bc\\sin(A)/2]], এবং যেহেতু বৈধ সমকোণী ত্রিভুজে [[\\sin(A)=a/c]], [[bc\\sin(A)=ab]]। মোড 2-এর জন্য, [[K=ac\\sin(B)/2]], এবং যেহেতু [[\\sin(B)=b/c]], [[ac\\sin(B)=ab]]। উভয় সূত্র [[[\\boxed{K=\\frac{ab}{2}}]]]-এ সরলীকৃত হয়, পরিচিত বাহু সূত্র। দুটি মোড একটি রাশির দুটি ভিন্ন ইনপুট পথ।" }
        ],
        "table": {
          "headers": ["পদ্ধতি", "ইনপুট", "ফলাফল"],
          "rows": [
            ["বাহু সূত্র", "[[a=3,\\;b=4]]", "6 বর্গ একক"],
            ["মোড 1", "[[b=4,\\;c=5,\\;A\\approx36.87^\\circ]]", "প্রায় 6"],
            ["মোড 2", "[[a=3,\\;c=5,\\;B\\approx53.13^\\circ]]", "প্রায় 6"]
          ]
        },
        "closingParagraphs": [
          "আসন্নীকৃত কোণ পরিমাপ দুটি মোডের মধ্যে ছোট সংখ্যাগত পার্থক্য আনতে পারে, কারণ [[36.87^\\circ]] প্রকৃত [[36.8699^\\circ]]-এর কেবল আসন্ন মান। কয়েক শতাংশের অমিল আসন্নীকরণের প্রভাব, সূত্রগুলোর মধ্যে মতভেদ নয়।"
        ],
        "imgAlt": "মোড 1 ও মোড 2 সূত্রে সমাধান করা একই 3-4-5 ত্রিভুজ, উভয়ে ক্ষেত্রফল 6, বাহু সূত্রে যাচাইকৃত",
        "figcaption": "দুটি অন্তর্ভুক্ত কোণ, দুটি সমতুল্য সূত্র, একটি ত্রিভুজের ক্ষেত্রফল।"
      },
      "sec-howto": {
        "h2": "সমকোণী ত্রিভুজের কোণ-থেকে-ক্ষেত্রফল ক্যালকুলেটর কীভাবে ব্যবহার করবেন",
        "blocks": [
          { "kind": "p", "text": "এই ধাপে ধাপে নির্দেশনা এই পৃষ্ঠার প্রকৃত ক্যালকুলেটর ইন্টারফেস অনুসরণ করে।" }
        ],
        "steps": [
          "<strong>ইতিমধ্যে জানা পরিমাপ চিহ্নিত করুন।</strong> নিশ্চিত করুন একই ত্রিভুজের একটি বাহু, অতিভুজ ও একটি সূক্ষ্মকোণ আপনার কাছে আছে।",
          "<strong>সঠিক মোড বেছে নিন।</strong> [[b]] বাহু, [[c]] অতিভুজ ও [[A]] কোণের জন্য মোড 1 বেছে নিন; [[a]] বাহু, [[c]] অতিভুজ ও [[B]] কোণের জন্য মোড 2 বেছে নিন।",
          "<strong>কোন সূক্ষ্মকোণ মাপা হচ্ছে তা নিশ্চিত করুন।</strong> কোণটি দুটি সূক্ষ্মকোণের একটি হতে হবে, সমকোণ নয়।",
          "<strong>সংশ্লিষ্ট বাহু চিহ্নিত করুন।</strong> বাহুটিকে পরিমাপ করা কোণ স্পর্শ করতে হবে; অনিশ্চিত হলে উপরের সন্নিহিত ও বিপরীত সংজ্ঞা দেখুন।",
          "<strong>বাহুর দৈর্ঘ্য লিখুন।</strong> নির্বাচিত মোডের বাহু ক্ষেত্রে পরিমাপ করা বাহু টাইপ করুন।",
          "<strong>অতিভুজের দৈর্ঘ্য লিখুন।</strong> অতিভুজ ক্ষেত্রে এটি টাইপ করুন; দুটি দৈর্ঘ্যের মধ্যে এটিই দীর্ঘতম হতে হবে।",
          "<strong>সামঞ্জস্যপূর্ণ পরিমাপ একক বেছে নিন।</strong> গণনার আগে উভয় দৈর্ঘ্য একই এককে হতে হবে।",
          "<strong>সূক্ষ্মকোণ ডিগ্রিতে লিখুন।</strong> ক্যালকুলেটর রেডিয়ান নয়, ডিগ্রি প্রত্যাশা করে।",
          "<strong>নিশ্চিত করুন কোণ [[0^\\circ]] ও [[90^\\circ]]-এর মধ্যে কঠোরভাবে আছে।</strong> সীমান্ত মান অবক্ষয়ী আকৃতি বর্ণনা করে, ত্রিভুজ নয়।",
          "<strong>নিশ্চিত করুন অতিভুজ বাহুর চেয়ে দীর্ঘ।</strong> অতিভুজের সমান বা দীর্ঘতর বাহু সমকোণী ত্রিভুজের হতে পারে না।",
          "<strong>যাচাই করুন বাহু, অতিভুজ ও কোণ একই সমকোণী ত্রিভুজ বর্ণনা করে।</strong> বৈধতা অংশের সামঞ্জস্য পরীক্ষা দেখায় কীভাবে।",
          "<strong>ক্ষেত্রফল গণনা করুন-এ ক্লিক করুন।</strong> সমাধান ধাপসহ ফলাফল দেখা যায়।",
          "<strong>ফলাফল ও সমাধান ধাপ পর্যালোচনা করুন।</strong> প্রতিটি বসানো অনুসরণ করে নিশ্চিত করুন উদ্দিষ্ট ইনপুট ব্যবহৃত হয়েছে।",
          "<strong>ফলাফল বর্গ এককে ব্যাখ্যা করুন।</strong> ক্ষেত্রফলের একক নির্বাচিত দৈর্ঘ্য এককের বর্গ।",
          "<strong>আগের গণনা মুছতে রিসেট ব্যবহার করুন।</strong> পরের ত্রিভুজ প্রবেশের আগে এটি সব ক্ষেত্র খালি করে দেয়।"
        ],
        "closingParagraphs": [
          "লক্ষ্য করুন প্রতিটি মোড ভিন্ন বাহু ও ভিন্ন কোণ চায়। মোডগুলো আলাদা কারণ অন্তর্ভুক্ত-কোণ জোড়া ভিন্ন, একটি মোড অন্যটির শর্টকাট বলে নয়।"
        ]
      },
      "sec-foundations": {
        "h2": "কোণ থেকে সমকোণী ত্রিভুজের ক্ষেত্রফলের ধাপে ধাপে উদাহরণ",
        "blocks": [
          { "kind": "p", "text": "চারটি উদাহরণ পরিচিত ত্রিভুজের ওপর পদ্ধতি গড়ে তোলে, 3-4-5 ত্রয়ী থেকে বিশেষ-কোণ ক্ষেত্রে।" },
          { "kind": "h3", "text": "উদাহরণ 1: A কোণ ব্যবহার করে 3-4-5 ত্রিভুজ" },
          { "kind": "p", "text": "দেওয়া আছে [[b=4]], [[c=5]], [[A\\approx36.87^\\circ]], [[K=bc\\sin(A)/2]] ব্যবহার করুন। তাহলে [[K=(4\\times5\\times\\sin(36.87^\\circ))/2]], [[K\\approx(20\\times0.6)/2]], তাই [[[\\boxed{K\\approx6}]]]। ক্ষেত্রফল 6 বর্গ একক কারণ ত্রিভুজটি সমতল পৃষ্ঠের ছয়টি একক বর্গ জুড়ে আছে; পূর্ণ-নির্ভুল কোণে মান ঠিক 6।" },
          { "kind": "h3", "text": "উদাহরণ 2: B কোণ ব্যবহার করে একই ত্রিভুজ" },
          { "kind": "p", "text": "দেওয়া আছে [[a=3]], [[c=5]], [[B\\approx53.13^\\circ]], [[K=ac\\sin(B)/2]] ব্যবহার করুন। তাহলে [[K=(3\\times5\\times\\sin(53.13^\\circ))/2]], [[K\\approx(15\\times0.8)/2]], তাই [[[\\boxed{K\\approx6}]]]। ফলাফল উদাহরণ 1-এর সঙ্গে মেলে কারণ উভয় উদাহরণ একই ত্রিভুজ বর্ণনা করে; দুটি কোণ একটি আকৃতির পরিপূরক দৃশ্য।" },
          { "kind": "h3", "text": "উদাহরণ 3: একটি 30-60-90 ত্রিভুজ" },
          { "kind": "p", "text": "[[c=10]] ও [[A=30^\\circ]] নিন। বাহুটি [[b=c\\cos(30^\\circ)=5\\sqrt{3}]] থেকে পাওয়া যায়। তাহলে [[K=(5\\sqrt{3})(10)\\sin(30^\\circ)/2]], এবং যেহেতু [[\\sin(30^\\circ)=1/2]], [[[\\boxed{K=\\frac{25\\sqrt{3}}{2}\\approx21.65}]]]। [[\\sin(30^\\circ)]] ও [[\\cos(30^\\circ)]]-এর মতো বিশেষ-কোণ মান যেকোনো দশমিক আসন্নীকরণের আগে নির্ভুল রূপ দেয়, এই কারণে এই ত্রিভুজগুলো হাতে ক্যালকুলেটর যাচাইয়ে উপযোগী।" },
          { "kind": "h3", "text": "উদাহরণ 4: একটি 45-45-90 ত্রিভুজ" },
          { "kind": "p", "text": "দেওয়া আছে [[c=10]] ও [[A=45^\\circ]], বাহু দুটি সমান: [[a=b=5\\sqrt{2}]]। তাহলে [[K=(5\\sqrt{2})(10)\\sin(45^\\circ)/2]], এবং যেহেতু [[\\sin(45^\\circ)=\\sqrt{2}/2]], গুণফল [[[\\boxed{K=25}]]]-এ সরলীকৃত হয়। এটি একটি সমদ্বিবাহু সমকোণী ত্রিভুজ, এবং পরে দেখানো মতো, 10 একক অতিভুজের সমকোণী ত্রিভুজের জন্য এটিই সম্ভাব্য সর্বাধিক ক্ষেত্রফল।" }
        ]
      },
      "sec-applications": {
        "h2": "কোণ থেকে সমকোণী ত্রিভুজের ক্ষেত্রফলের বাস্তব প্রয়োগ",
        "blocks": [
          { "kind": "p", "text": "বারোটি সম্পূর্ণ সমাধানকৃত পরিস্থিতি, ক্যালকুলেটরের প্রতিটি মোডের জন্য ছয়টি। প্রতিটি উদাহরণ পরিমাপ বলে, মোড বেছে নেয়, সূত্র প্রয়োগ করে ও উত্তর ব্যাখ্যা করে। কোণের মান দুই দশমিক স্থানে দেখানো হয় আর গাণিতিক ক্রিয়া নিচে পূর্ণ নির্ভুলতা রাখে।" },
          { "kind": "h3", "text": "ব্যবহারিক উদাহরণ 1: ত্রিভুজাকার ছাদের গ্যাবল" },
          { "kind": "p", "text": "সরলীকৃত সমকোণী ত্রিভুজাকার ছাদের গ্যাবল অংশের সন্নিহিত বাহু [[b=4\\text{ m}]], অতিভুজ [[c=5\\text{ m}]], ও অন্তর্ভুক্ত কোণ [[A\\approx36.87^\\circ]]। মোড 1 ব্যবহার করুন: [[K=(4\\times5\\times\\sin(36.87^\\circ))/2]], তাই [[[\\boxed{K\\approx6\\text{ m}^2}]]]। সমতল অংশের ক্ষেত্রফল, মোট ছাদের পৃষ্ঠ নয়। যাচাই: [[K=(3\\times4)/2=6]]।" },
          { "kind": "h3", "text": "ব্যবহারিক উদাহরণ 2: ত্রিভুজাকার র‍্যাম্পের পার্শ্ব প্যানেল" },
          { "kind": "p", "text": "সমকোণী ত্রিভুজাকার র‍্যাম্পের পার্শ্ব প্যানেলের [[b=2.4\\text{ m}]], [[c=2.5\\text{ m}]], ও [[A\\approx16.26^\\circ]]। অন্তর্নিহিত বিপরীত বাহু 0.7 m, তাই [[\\sin(A)=0.7/2.5=0.28]]। মোড 1 ব্যবহার করুন: [[K=(2.4\\times2.5\\times0.28)/2]], তাই [[[\\boxed{K\\approx0.84\\text{ m}^2}]]]। পার্শ্ব-প্যানেলের ক্ষেত্রফল, ঢালু র‍্যাম্প পৃষ্ঠ নয়। যাচাই: [[K=(0.7\\times2.4)/2=0.84]]।" },
          { "kind": "h3", "text": "ব্যবহারিক উদাহরণ 3: ত্রিভুজাকার পাল" },
          { "kind": "p", "text": "সমতল সমকোণী ত্রিভুজাকার পাল অংশের [[b=12\\text{ ft}]], [[c=13\\text{ ft}]], ও [[A\\approx22.62^\\circ]]। বিপরীত বাহু 5 ft, তাই [[\\sin(A)=5/13]]। মোড 1 ব্যবহার করুন: [[K=(12\\times13\\times(5/13))/2]], তাই [[[\\boxed{K=30\\text{ ft}^2}]]]। সেলাই বা অপচয়ের আগের সমতল জ্যামিতিক ক্ষেত্রফল। যাচাই: [[K=(5\\times12)/2=30]]।" },
          { "kind": "h3", "text": "ব্যবহারিক উদাহরণ 4: সমকোণী ত্রিভুজাকার জমির অংশ" },
          { "kind": "p", "text": "জরিপ স্কেচে [[b=40\\text{ m}]], [[c=50\\text{ m}]], ও [[A\\approx36.87^\\circ]] সহ একটি সমকোণী ত্রিভুজাকার প্লট বর্ণনা করা হয়েছে। যেহেতু [[\\sin(A)=30/50=0.6]], মোড 1 দেয় [[K=(40\\times50\\times0.6)/2]], তাই [[[\\boxed{K=600\\text{ m}^2}]]]। সমতল মডেলে সমতলীয় প্লট ক্ষেত্রফল। যাচাই: [[K=(30\\times40)/2=600]]।" },
          { "kind": "h3", "text": "ব্যবহারিক উদাহরণ 5: ইস্পাত সাপোর্ট প্যানেল" },
          { "kind": "p", "text": "সমতল ত্রিভুজাকার ইস্পাত প্যানেলের [[b=1.5\\text{ m}]], [[c=1.7\\text{ m}]], ও [[A\\approx28.07^\\circ]]। বিপরীত বাহু 0.8 m, তাই [[\\sin(A)=0.8/1.7]]। মোড 1 ব্যবহার করুন: [[K=(1.5\\times1.7\\times(0.8/1.7))/2]], তাই [[[\\boxed{K=0.6\\text{ m}^2}]]]। কেবল সমতলীয় ক্ষেত্রফল, ভার বহন ক্ষমতা নয়। যাচাই: [[K=(0.8\\times1.5)/2=0.6]]।" },
          { "kind": "h3", "text": "ব্যবহারিক উদাহরণ 6: সিঁড়ির পার্শ্ব প্রোফাইল" },
          { "kind": "p", "text": "সরলীকৃত সিঁড়ির পার্শ্ব প্যানেলের অনুভূমিক বাহু [[b=3.2\\text{ m}]], অতিভুজ [[c=4\\text{ m}]], ও [[A\\approx36.87^\\circ]]। [[\\sin(A)=0.6]] সহ, মোড 1 দেয় [[K=(3.2\\times4\\times0.6)/2]], তাই [[[\\boxed{K=3.84\\text{ m}^2}]]]। পার্শ্ব প্রোফাইল, ধাপের ক্ষেত্রফল নয়। যাচাই: অন্য বাহু 2.4 m সহ, [[K=(2.4\\times3.2)/2=3.84]]।" },
          { "kind": "h3", "text": "ব্যবহারিক উদাহরণ 7: ত্রিভুজাকার কাচের জানালা" },
          { "kind": "p", "text": "সমকোণী ত্রিভুজাকার জানালার বাহু [[a=0.6\\text{ m}]], অতিভুজ [[c=1\\text{ m}]], ও অন্তর্ভুক্ত কোণ [[B\\approx53.13^\\circ]]। [[\\sin(B)=0.8]] সহ, মোড 2 দেয় [[K=(0.6\\times1\\times0.8)/2]], তাই [[[\\boxed{K=0.24\\text{ m}^2}]]]। ফ্রেম ছাড়ের আগের কাচের ক্ষেত্রফল। যাচাই: [[K=(0.6\\times0.8)/2=0.24]]।" },
          { "kind": "h3", "text": "ব্যবহারিক উদাহরণ 8: ত্রিভুজাকার শামিয়ানা" },
          { "kind": "p", "text": "সমতল সমকোণী ত্রিভুজাকার শামিয়ানা অংশের [[a=1.2\\text{ m}]], [[c=2\\text{ m}]], ও [[B\\approx53.13^\\circ]]। মোড 2 ব্যবহার করুন: [[K=(1.2\\times2\\times0.8)/2]], তাই [[[\\boxed{K=0.96\\text{ m}^2}]]]। যাচাই: [[K=(1.2\\times1.6)/2=0.96]]।" },
          { "kind": "h3", "text": "ব্যবহারিক উদাহরণ 9: প্লাইউড কাটার নকশা" },
          { "kind": "p", "text": "সমকোণী ত্রিভুজাকার প্লাইউড টুকরোর [[a=0.9\\text{ m}]], [[c=1.5\\text{ m}]], ও [[B\\approx53.13^\\circ]]। মোড 2 ব্যবহার করুন: [[K=(0.9\\times1.5\\times0.8)/2]], তাই [[[\\boxed{K=0.54\\text{ m}^2}]]]। কাটা-ছাঁট বাদে ব্যবহারযোগ্য উপাদান ক্ষেত্রফল। যাচাই: [[K=(0.9\\times1.2)/2=0.54]]।" },
          { "kind": "h3", "text": "ব্যবহারিক উদাহরণ 10: ত্রিভুজাকার মাঠ জরিপ" },
          { "kind": "p", "text": "সরলীকৃত ত্রিভুজাকার মাঠ পরিমাপ দেয় [[a=7\\text{ m}]], [[c=25\\text{ m}]], ও [[B\\approx73.74^\\circ]]। অন্য বাহু 24 m, তাই [[\\sin(B)=24/25=0.96]]। মোড 2 ব্যবহার করুন: [[K=(7\\times25\\times0.96)/2]], তাই [[[\\boxed{K=84\\text{ m}^2}]]]। সমতলীয় অংশের ক্ষেত্রফল। যাচাই: [[K=(7\\times24)/2=84]]।" },
          { "kind": "h3", "text": "ব্যবহারিক উদাহরণ 11: ত্রিভুজাকার ঘুড়ির প্যানেল" },
          { "kind": "p", "text": "সমকোণী ত্রিভুজাকার ঘুড়ি বা কাপড়ের প্যানেলের [[a=20\\text{ cm}]], [[c=25\\text{ cm}]], ও [[B\\approx36.87^\\circ]]। যেহেতু [[\\sin(B)=15/25=0.6]], মোড 2 দেয় [[K=(20\\times25\\times0.6)/2]], তাই [[[\\boxed{K=150\\text{ cm}^2}]]]। বর্গ সেন্টিমিটার, ইনপুটের সঙ্গে মিলিয়ে। যাচাই: [[K=(20\\times15)/2=150]]।" },
          { "kind": "h3", "text": "ব্যবহারিক উদাহরণ 12: সোলার মাউন্টিং পার্শ্ব প্যানেল" },
          { "kind": "p", "text": "সমতল সমকোণী ত্রিভুজাকার সাপোর্ট-পার্শ্ব প্যানেলের [[a=1.8\\text{ m}]], [[c=3\\text{ m}]], ও অন্তর্ভুক্ত কোণ [[B\\approx53.13^\\circ]]। [[\\sin(B)=0.8]] সহ, মোড 2 দেয় [[K=(1.8\\times3\\times0.8)/2]], তাই [[[\\boxed{K=2.16\\text{ m}^2}]]]। প্যানেলের ক্ষেত্রফল, বৈদ্যুতিক আউটপুট বা ক্ষমতা নয়। যাচাই: [[K=(1.8\\times2.4)/2=2.16]]।" }
        ],
        "table": {
          "headers": ["পরিস্থিতি", "মোড", "বাহু / অতিভুজ", "কোণ", "ক্ষেত্রফল", "ব্যাখ্যা"],
          "rows": [
            ["ছাদের গ্যাবল", "1", "4 m / 5 m", "[[A\\approx36.87^\\circ]]", "6 m²", "সমতল অংশের ক্ষেত্রফল"],
            ["র‍্যাম্পের পার্শ্ব প্যানেল", "1", "2.4 m / 2.5 m", "[[A\\approx16.26^\\circ]]", "0.84 m²", "পার্শ্ব প্যানেল, ঢাল নয়"],
            ["পাল", "1", "12 ft / 13 ft", "[[A\\approx22.62^\\circ]]", "30 ft²", "সেলাইয়ের আগের সমতল ক্ষেত্রফল"],
            ["জমির অংশ", "1", "40 m / 50 m", "[[A\\approx36.87^\\circ]]", "600 m²", "সমতলীয় প্লট ক্ষেত্রফল"],
            ["ইস্পাত প্যানেল", "1", "1.5 m / 1.7 m", "[[A\\approx28.07^\\circ]]", "0.6 m²", "কেবল সমতলীয় ক্ষেত্রফল"],
            ["সিঁড়ির প্রোফাইল", "1", "3.2 m / 4 m", "[[A\\approx36.87^\\circ]]", "3.84 m²", "পার্শ্ব প্রোফাইল, ধাপ নয়"],
            ["কাচের জানালা", "2", "0.6 m / 1 m", "[[B\\approx53.13^\\circ]]", "0.24 m²", "ফ্রেম ছাড়ের আগে"],
            ["শামিয়ানা", "2", "1.2 m / 2 m", "[[B\\approx53.13^\\circ]]", "0.96 m²", "ত্রিভুজাকার অংশের ক্ষেত্রফল"],
            ["প্লাইউড টুকরো", "2", "0.9 m / 1.5 m", "[[B\\approx53.13^\\circ]]", "0.54 m²", "ব্যবহারযোগ্য ক্ষেত্রফল, অপচয় ছাড়া"],
            ["মাঠ জরিপ", "2", "7 m / 25 m", "[[B\\approx73.74^\\circ]]", "84 m²", "সমতলীয় মাঠ ক্ষেত্রফল"],
            ["ঘুড়ির প্যানেল", "2", "20 cm / 25 cm", "[[B\\approx36.87^\\circ]]", "150 cm²", "কাপড়ের ক্ষেত্রফল"],
            ["সোলার পার্শ্ব প্যানেল", "2", "1.8 m / 3 m", "[[B\\approx53.13^\\circ]]", "2.16 m²", "সাপোর্ট প্যানেল, আউটপুট নয়"]
          ]
        },
        "imgAlt": "চারটি সমাধানকৃত সমকোণী ত্রিভুজ ক্ষেত্রফল গণনা: ছাদের গ্যাবল, কাচের জানালা, মাঠ জরিপ ও পাল",
        "figcaption": "উপরের সমাধানকৃত পরিস্থিতির চারটি, প্রতিটিতে ত্রিভুজ, অন্তর্ভুক্ত কোণ, সূত্র ও যাচাইকৃত ক্ষেত্রফল।"
      },
      "sec-consistency": {
        "h2": "বাহুর দৈর্ঘ্য ও কোণ সমকোণী ত্রিভুজ গঠন করে কিনা তা কীভাবে যাচাই করবেন",
        "blocks": [
          { "kind": "p", "text": "একটি বাহু, একটি অতিভুজ ও একটি সূক্ষ্মকোণ সমকোণী ত্রিভুজের প্রয়োজনের চেয়ে বেশি তথ্য বহন করে: তিনটির মধ্যে দুটি তৃতীয়টি নির্ধারণ করে, তাই তিনটিকেই একমত হতে হবে। নিচের যাচাইগুলো নিশ্চিত করে গণনাকৃত সংখ্যা একটি সমকোণী ত্রিভুজ বর্ণনা করে।" },
          { "kind": "h3", "text": "মোড 1 যাচাইকরণ" },
          { "kind": "p", "text": "মোড 1-এর জন্য সামঞ্জস্য সম্পর্ক [[\\cos(A)=b/c]], সমতুল্যভাবে [[[\\boxed{b=c\\cos(A)}]]]। [[b=4]] ও [[c=5]] সহ, [[\\cos(A)=0.8]] দেয় [[A=\\cos^{-1}(0.8)\\approx36.87^\\circ]]। [[60^\\circ]]-এর মতো যেকোনো কোণ এই বাহু দৈর্ঘ্য দিয়ে একই সমকোণী ত্রিভুজ বর্ণনা করবে না: [[5\\cos(60^\\circ)=2.5\\neq4]], তাই তিনটি ইনপুট পারস্পরিক অসামঞ্জস্যপূর্ণ হবে।" },
          { "kind": "h3", "text": "মোড 2 যাচাইকরণ" },
          { "kind": "p", "text": "মোড 2-এর জন্য সম্পর্ক [[\\cos(B)=a/c]], সমতুল্যভাবে [[[\\boxed{a=c\\cos(B)}]]]। [[a=3]] ও [[c=5]] সহ, [[B=\\cos^{-1}(0.6)\\approx53.13^\\circ]]। নির্বাচিত কোণ প্রকৃত পরিমাপের সঙ্গে মিলতে হবে; 3 বাহু ও 5 অতিভুজের [[70^\\circ]] অন্তর্ভুক্ত কোণে মিলন হয় না।" },
          { "kind": "h3", "text": "সাধারণ ক্ষেত্রফল সূত্র তবু সংখ্যা দিতে পারে কেন" },
          { "kind": "p", "text": "[[K=\\frac12xy\\sin(\\theta)]] সূত্র দুটি বাহু ও তাদের অন্তর্ভুক্ত কোণ দিয়ে সংজ্ঞায়িত সাধারণ ত্রিভুজের ক্ষেত্রফল গণনা করে। অসামঞ্জস্য কোণ-বাহু সমন্বয় তবু সংখ্যা দেয়, কিন্তু ফলে পাওয়া ত্রিভুজ সমকোণী নয়: এটি অন্য কোনো ত্রিভুজ যা ঘটনাক্রমে এই তিনটি ইনপুট ভাগ করে। গাণিতিক ফলাফল নিজে প্রমাণ করে না ইনপুট বৈধ সমকোণী ত্রিভুজ বর্ণনা করে; উপরের কোসাইন যাচাই সেই কাজ করে।" },
          { "kind": "h3", "text": "আসন্নীকৃত কোণ পরিমাপ কীভাবে সামলাবেন" },
          { "kind": "p", "text": "[[36.87^\\circ]]-এর মতো কোণ প্রায় [[36.8699^\\circ]]-এর আসন্নীকৃত প্রদর্শন হতে পারে। প্রদর্শন বা পরিমাপ আসন্নীকরণের ছোট অমিলকে প্রকৃত অসামঞ্জস্য জ্যামিতি থেকে আলাদা করতে হবে: কয়েক শতাংশ ডিগ্রি ছাড় আসন্নীকরণ, আর কয়েক ডিগ্রি অমিল মানে ইনপুট দ্বিমত করে। ক্যালকুলেটরের নিজের জন্য কোনো সংখ্যাগত বৈধতা সহনশীলতা দাবি করা হয় না; পার্থক্যটি হাতের পরিমাপ থেকে করা বিচার।" }
        ]
      },
      "sec-alternatives": {
        "h2": "কোণ ব্যবহার করে সমকোণী ত্রিভুজের ক্ষেত্রফল নির্ণয়ের বিকল্প উপায়",
        "blocks": [
          { "kind": "p", "text": "এগুলো গাণিতিক বিকল্প, ক্যালকুলেটরের অতিরিক্ত মোড নয়; তারা অন্য ইনপুট সমন্বয়ে একই জ্যামিতি দেখায়।" },
          { "kind": "h3", "text": "অতিভুজ ও একটি সূক্ষ্মকোণ ব্যবহার" },
          { "kind": "p", "text": "বৈধ সমকোণী ত্রিভুজের জন্য, [[a=c\\sin(A)]] ও [[b=c\\cos(A)]]। [[K=ab/2]]-এ বসিয়ে [[[\\boxed{K=\\frac{c^2\\sin(A)\\cos(A)}{2}}]]] পাওয়া যায়। দ্বি-কোণ অভেদ [[\\sin(2A)=2\\sin(A)\\cos(A)]] দিয়ে, এটি [[[\\boxed{K=\\frac{c^2\\sin(2A)}{4}}]]]-এ রূপ নেয়। অতিভুজ ও একটি সূক্ষ্মকোণ ত্রিভুজ সম্পূর্ণ নির্ধারণ করে, তাই কোনো বাহু পরিমাপেরই দরকার হয় না।" },
          { "kind": "h3", "text": "একটি বাহু ও তার সন্নিহিত কোণ ব্যবহার" },
          { "kind": "p", "text": "[[b]] বাহু ও [[A]] কোণ জানা থাকলে, [[a=b\\tan(A)]], এবং [[[\\boxed{K=\\frac{b^2\\tan(A)}{2}}]]]। জোড়া গুরুত্বপূর্ণ: ট্যানজেন্ট যাতে বিপরীত বাহু দেয়, [[b]]-কে [[A]] কোণের সন্নিহিত বাহু হতেই হবে।" },
          { "kind": "h3", "text": "a বাহু ও B কোণ ব্যবহার" },
          { "kind": "p", "text": "[[B]] কোণের জন্য আগের ক্ষেত্রের প্রতিবিম্ব: [[b=a\\tan(B)]], তাই [[[\\boxed{K=\\frac{a^2\\tan(B)}{2}}]]]। [[a]] বাহু [[B]] কোণের সন্নিহিত, এই কারণেই ট্যানজেন্ট আবার বিপরীত বাহু উদ্ধার করে।" },
          { "kind": "h3", "text": "কোন পদ্ধতি সবচেয়ে সহজ?" },
          { "kind": "p", "text": "সেরা সূত্র সেটিই যা উপলব্ধ পরিমাপের সঙ্গে মেলে। দুটি বাহুই জানা থাকলে, [[K=ab/2]] ব্যবহার করুন ও ত্রিকোণমিতি এড়িয়ে যান। একটি বাহু, অতিভুজ ও অন্তর্ভুক্ত কোণ জানা থাকলে, ক্যালকুলেটরের দুটি মোড সরাসরি পথ। ট্যানজেন্ট ও দ্বি-কোণ রূপ বিশেষ কোণে হাতে গণনায় উপযোগী, কিন্তু ইনপুট যা চায় না এমন ধাপ যোগ করলে ভুল লুকানোর জায়গাই বাড়ে।" }
        ]
      },
      "sec-angle-effect": {
        "h2": "সূক্ষ্মকোণ সমকোণী ত্রিভুজের ক্ষেত্রফলকে কীভাবে প্রভাবিত করে?",
        "blocks": [
          { "kind": "p", "text": "সূক্ষ্মকোণ বাড়লে সাইন বাড়ে, তাই বড় কোণ বড় ক্ষেত্রফলের প্রতিশ্রুতি দেয় বলে মনে হয়। অন্য রাশিগুলো স্থির থাকলেই তা খাটে, আর সমকোণী ত্রিভুজে বাহু ও কোণ স্বাধীনভাবে বদলাতে পারে না।" },
          { "kind": "h3", "text": "স্থির অতিভুজ, পরিবর্তনশীল কোণ" },
          { "kind": "p", "text": "স্থির অতিভুজের জন্য, ক্ষেত্রফল [[K=\\frac{c^2\\sin(2A)}{4}]] লেখা যায়। [[\\sin(2A)]] গুণক [[A]] [[0^\\circ]]-এর কাছ থেকে [[45^\\circ]]-এর দিকে গেলে বাড়ে, তারপর [[A]] [[90^\\circ]]-এর কাছে গেলে কমে। তাই ক্ষেত্রফল সূক্ষ্ম পরিসরের প্রথমার্ধে বাড়ে ও দ্বিতীয়ার্ধে কমে। দুটি অর্ধেক পরিপূরক-কোণ সম্পর্ক [[A+B=90^\\circ]]-এর মাধ্যমে দর্পণ প্রতিবিম্ব: কোণ বদলালে বাহু বদলায় আর ক্ষেত্রফল অপরিবর্তিত থাকে।" },
          { "kind": "h3", "text": "স্থির অতিভুজে সর্বাধিক ক্ষেত্রফল" },
          { "kind": "p", "text": "যেহেতু [[\\sin(2A)\\leq1]], বৃহত্তম সম্ভাব্য ক্ষেত্রফল [[[\\boxed{K_{\\max}=\\frac{c^2}{4}}]]], যা [[A=B=45^\\circ]] হলে পাওয়া যায়। [[c=10]]-এর জন্য সর্বাধিক ক্ষেত্রফল [[[\\boxed{K_{\\max}=25\\text{ square units}}]]]। এটি উদাহরণ 4-এর সমদ্বিবাহু সমকোণী ত্রিভুজ: সমান বাহু বাহুর গুণফল, তথা ক্ষেত্রফল, স্থির অতিভুজ যতটা দেয় ততটা বড় করে।" },
          { "kind": "h3", "text": "প্রতিটি ক্ষেত্রে কোণের সঙ্গে ক্ষেত্রফল সরলভাবে বাড়ে না কেন" },
          { "kind": "p", "text": "কী স্থির রাখা হয়েছে তা না বলে ক্রমবর্ধমান কোণ নিয়ে দাবি অর্থহীন। স্থির অতিভুজে সম্পর্ক প্রথমে বাড়ে তারপর কমে; স্থির বাহুতে সম্পর্ক আবার ভিন্ন। ক্ষেত্রফলকে কোণের সরল ক্রমবর্ধমান ফাংশন ভাবা একটি সাধারণ অতি-সরলীকরণ, এবং আপনার কাজ থেকে এটি দূরে রাখতেই এই অংশ।" }
        ]
      },
      "sec-units": {
        "h2": "ক্ষেত্রফলের একক, ডিগ্রি ও আসন্নীকরণ",
        "blocks": [
          { "kind": "h3", "text": "বর্গমিটার" },
          { "kind": "p", "text": "ইনপুট মিটারে হলে, ক্ষেত্রফল বর্গমিটারে আসে: [[4\\text{ m}\\times5\\text{ m}\\times0.6/2=6\\text{ m}^2]]। দুটি দৈর্ঘ্যের গুণ সবসময় বর্গ একক দেয়, একক পদ্ধতি যাই হোক।" },
          { "kind": "h3", "text": "বর্গ সেন্টিমিটার" },
          { "kind": "p", "text": "সেন্টিমিটার ইনপুট বর্গ-সেন্টিমিটার ক্ষেত্রফল দেয়, যেমন ঘুড়ির প্যানেল উদাহরণে [[150\\text{ cm}^2]] ফলাফল। বর্গ এককের মধ্যে রূপান্তর রৈখিক রূপান্তর গুণককে বর্গ করে: 1 m² = 10,000 cm², 100 নয়।" },
          { "kind": "h3", "text": "বর্গফুট" },
          { "kind": "p", "text": "ফুট ইনপুট বর্গফুট ক্ষেত্রফল দেয়, যেমন পাল উদাহরণে [[30\\text{ ft}^2]] ফলাফল। গণনার আগে সব ইনপুট এক দৈর্ঘ্য এককে রূপান্তর করুন; ক্যালকুলেটর মিটার ও ফুট মেশাতে পারে না।" },
          { "kind": "h3", "text": "ডিগ্রি বনাম রেডিয়ান" },
          { "kind": "p", "text": "ক্যালকুলেটর ডিগ্রিতে কোণ প্রত্যাশা করে। রূপান্তরে ব্যবহার করুন [[\\text{Degrees}=\\text{Radians}\\times\\frac{180}{\\pi}]]। উদাহরণস্বরূপ, [[\\frac{\\pi}{6}\\text{ radians}=30^\\circ]]। যেখানে ডিগ্রি প্রত্যাশিত সেখানে রেডিয়ান মান প্রবেশ করানো সবচেয়ে ক্ষতিকর ভুলগুলোর একটি, কারণ ছোট রেডিয়ান সংখ্যার সাইন সম্ভাব্য দেখালেও সম্পূর্ণ ভুল।" },
          { "kind": "h3", "text": "সাইনের একক নেই কেন" },
          { "kind": "p", "text": "সাইন দুটি দৈর্ঘ্যের অনুপাত, তাই একক বাতিল হয় ও মান মাত্রাহীন। দুটি দৈর্ঘ্যকে মাত্রাহীন সংখ্যা দিয়ে গুণ করলে ক্ষেত্রফলের ঠিক প্রয়োজনীয় বর্গ একক থাকে। এই কারণে ত্রিভুজের আকৃতি একই থাকলে বাহু মিটার না ফুটে মাপা হয়েছে তাতে সাইন মান একই থাকে।" },
          { "kind": "h3", "text": "মধ্যবর্তী আসন্নীকরণ কেন গুরুত্বপূর্ণ" },
          { "kind": "p", "text": "কোণ বা সাইন মান আগেভাগে আসন্নীকৃত করলে চূড়ান্ত ক্ষেত্রফল সরে যেতে পারে। গণনা জুড়ে পূর্ণ নির্ভুলতা রাখুন ও কেবল প্রতিবেদিত ফল আসন্নীকরণ করুন, ইনপুট পরিমাপ যতটা নির্ভুলতা সমর্থন করে ততটায়। দুই তাৎপর্যপূর্ণ অঙ্কে দেওয়া পরিমাপ ছয়-দশমিক উত্তরের যোগ্য নয়।" }
        ]
      },
      "sec-mistakes": {
        "h2": "কোণ থেকে সমকোণী ত্রিভুজের ক্ষেত্রফল নির্ণয়ে সাধারণ ভুল",
        "blocks": [],
        "steps": [
          "<strong>বাহু না বদলে মোড 1-এ B কোণ ব্যবহার।</strong> মোড 1 [[b]] ও [[c]]-কে [[A]] কোণের সঙ্গে জোড়া দেয়; এতে [[B]] দিলে ভিন্ন ত্রিভুজের ক্ষেত্রফল গণনা হয়।",
          "<strong>মোড 2-এ A কোণ ব্যবহার।</strong> মোড 2 [[a]] ও [[c]]-কে [[B]] কোণের সঙ্গে জোড়া দেয়। সংখ্যা লেখার আগে মোড নির্বাচক দেখুন।",
          "<strong>সন্নিহিত ও বিপরীত গুলিয়ে ফেলা।</strong> এই চিহ্ন প্রসঙ্গ কোণের ওপর নির্ভর করে: প্রথমে কোণ স্থির করুন, তারপর তার সাপেক্ষে বাহুতে চিহ্ন দিন।",
          "<strong>বাহুর ক্ষেত্রে অতিভুজ লেখা।</strong> বাহু [[c]]-এর চেয়ে ছোট হতে হবে; বদলে দিলে প্রতিটি সামঞ্জস্য যাচাই ভাঙে।",
          "<strong>ভুল অন্তর্ভুক্ত কোণ ব্যবহার।</strong> কোণটিকে প্রবেশ করানো দুটি বাহুর মাঝে থাকতে হবে, নইলে সাইন অভিক্ষেপ ভুল হয়।",
          "<strong>সাইন ফাংশন ভুলে যাওয়া।</strong> একা [[bc/2]] দুটি অ-লম্ব দৈর্ঘ্য গুণ করে; ফলাফল ত্রিভুজের ক্ষেত্রফল নয়।",
          "<strong>দুই দিয়ে ভাগ করতে ভুলে যাওয়া।</strong> অর্ধেক না করা গুণফল সামান্তরিকের ক্ষেত্রফল, ত্রিভুজের নয়।",
          "<strong>ডিগ্রির জায়গায় রেডিয়ান লেখা।</strong> [[\\sin(0.64)]] ও [[\\sin(36.87^\\circ)]] সম্পূর্ণ ভিন্ন সংখ্যা।",
          "<strong>0 বা 90 ডিগ্রি লেখা।</strong> কোনোটিই এই ইনপুটে অ-অবক্ষয়ী সমকোণী ত্রিভুজ বর্ণনা করে না।",
          "<strong>ঋণাত্মক বা শূন্য দৈর্ঘ্য লেখা।</strong> দৈর্ঘ্য ধনাত্মক; অন্য কিছুর জ্যামিতিক অর্থ নেই।",
          "<strong>অতিভুজের চেয়ে দীর্ঘ বাহু লেখা।</strong> অতিভুজ সবসময় দীর্ঘতম বাহু, তাই এই এন্ট্রি সেটআপের বিরোধী।",
          "<strong>অসামঞ্জস্য ইনপুট ব্যবহার।</strong> [[b=c\\cos(A)]] বা [[a=c\\cos(B)]] যাচাই করুন; অমিল ইনপুটের সংখ্যা কোনো সমকোণী ত্রিভুজের নয়।",
          "<strong>একক মেশানো।</strong> প্রথমে সব দৈর্ঘ্য এক এককে রূপান্তর করুন; সেন্টিমিটারের সঙ্গে মিটার উত্তরকে 100 গুণ বাড়িয়ে দেয়।",
          "<strong>রৈখিক এককে প্রতিবেদন।</strong> ক্ষেত্রফলের একক দৈর্ঘ্য এককের বর্গ: m², m নয়।",
          "<strong>কোণ আগেভাগে আসন্নীকরণ।</strong> কেবল চূড়ান্ত উত্তর আসন্নীকরণ করুন; আগের আসন্নীকরণ সাইন সরিয়ে দেয়।",
          "<strong>মোডগুলোকে বিনিময়যোগ্য ভাবা।</strong> প্রতিটি মোড নিজস্ব সূত্র ও নিজস্ব ইনপুট চুক্তি নিয়ে।"
        ],
        "closingParagraphs": [
          "<strong>ভুল বনাম সঠিক উদাহরণ।</strong> [[b=4]], [[c=5]], [[A\\approx36.87^\\circ]] সহ 3-4-5 ত্রিভুজটি নিন। সঠিক: [[K=(4\\times5\\times\\sin(A))/2\\approx6]]। ভুল কোণ বসালে, [[K=(4\\times5\\times\\sin(B))/2\\approx8]], 6 নয়। ভুলটি [[b]] ও [[c]] বাহুর জন্য ভুল অন্তর্ভুক্ত কোণ ব্যবহার করে, এবং 8 কেবল ভুল ত্রিভুজের ক্ষেত্রফল।"
        ]
      },
      "sec-verify": {
        "h2": "নির্ণীত ক্ষেত্রফল সঠিক কিনা তা কীভাবে যাচাই করবেন",
        "blocks": [
          { "kind": "h3", "text": "পদ্ধতি 1: পিথাগোরাসের উপপাদ্য যাচাই" },
          { "kind": "p", "text": "বৈধ সমকোণী ত্রিভুজের জন্য, [[a^2+b^2=c^2]]। 3-4-5 ত্রিভুজের জন্য, [[9+16=25]]। এখানে ব্যর্থতা মানে বাহু ইনপুট কোনো সমকোণী ত্রিভুজই বর্ণনা করে না।" },
          { "kind": "h3", "text": "পদ্ধতি 2: বাহু সূত্র যাচাই" },
          { "kind": "p", "text": "স্বাধীনভাবে [[K=ab/2]] গণনা করুন। [[a=3]] ও [[b=4]]-এর জন্য, [[K=6]]। কোণ-ভিত্তিক ফলের সঙ্গে একমত হওয়া পুরো গণনা নিশ্চিত করে।" },
          { "kind": "h3", "text": "পদ্ধতি 3: পরিপূরক কোণ যাচাই" },
          { "kind": "p", "text": "[[A+B=90^\\circ]] যাচাই করুন। [[A\\approx36.87^\\circ]]-এর জন্য, [[B\\approx53.13^\\circ]]। প্রবেশ করানো কোণ ত্রিভুজের প্রকৃত সূক্ষ্মকোণ হতে যোগফলটি অবশ্যই খাটতে হবে।" },
          { "kind": "h3", "text": "পদ্ধতি 4: সাইন সম্পর্ক যাচাই" },
          { "kind": "p", "text": "মোড 1-এর জন্য, [[\\sin(A)=a/c]]; মোড 2-এর জন্য, [[\\sin(B)=b/c]]। 3-4-5 ত্রিভুজে, [[\\sin(36.87^\\circ)\\approx3/5]] ও [[\\sin(53.13^\\circ)\\approx4/5]]। এটি সূত্রটি যে সম্পর্ক ব্যবহার করে সেটিই, বিপরীত দিকে যাচাই করা।" },
          { "kind": "h3", "text": "পদ্ধতি 5: ইনপুট সামঞ্জস্য যাচাই" },
          { "kind": "p", "text": "মোড 1-এর জন্য, [[b\\approx c\\cos(A)]]; মোড 2-এর জন্য, [[a\\approx c\\cos(B)]]। কোণ পরিমাপ আসন্নীকৃত হলে আসন্ন চিহ্ন যথাযথ।" },
          { "kind": "h3", "text": "পদ্ধতি 6: সর্বাধিক ক্ষেত্রফল যাচাই" },
          { "kind": "p", "text": "স্থির অতিভুজের জন্য, [[K\\leq c^2/4]]। [[c=5]] সহ, কোনো বৈধ ক্ষেত্রফল 6.25 বর্গ একক ছাড়ায় না। সীমার উপরে গণনাকৃত ক্ষেত্রফল সঙ্গে সঙ্গে ইনপুট ত্রুটির সংকেত দেয়।" },
          { "kind": "h3", "text": "পদ্ধতি 7: বর্গ একক যাচাই" },
          { "kind": "p", "text": "নিশ্চিত করুন ফলাফল ইনপুট দৈর্ঘ্য এককের বর্গে প্রকাশিত। এটি দৈর্ঘ্য একক অপরিবর্তিত রেখে ক্ষেত্রফল সংখ্যা প্রতিবেদনের আশ্চর্যজনকভাবে সাধারণ অভ্যাস ধরে।" }
        ]
      },
      "sec-conclusion": {
        "h2": "একটি কোণ, একটি বাহু ও অতিভুজই আপনার প্রয়োজন",
        "blocks": [
          { "kind": "p", "text": "কোণ-ভিত্তিক ক্ষেত্রফল পদ্ধতি হলো ভূমি-উচ্চতা নিয়ম, যেখানে উচ্চতা অতিভুজ থেকে পুনর্গঠিত। অন্তর্ভুক্ত কোণ সঠিক বাহুর সঙ্গে জোড়া দিলেই, সাইন লম্ব বাহু দেয়, আর ক্ষেত্রফল এক বসানো দূরত্বে। দুটি মোড একই ঘরের দুটি দরজা: মোড 1 A কোণ দিয়ে প্রবেশ করে, মোড 2 B কোণ দিয়ে, এবং উভয়ে একই ক্ষেত্রফলে পৌঁছায়।" },
          { "kind": "p", "text": "পদ্ধতিকে বিশ্বস্ত করে যে শৃঙ্খলা তা হলো সামঞ্জস্য: কোসাইন সম্পর্ক দিয়ে যাচাই করুন বাহু, অতিভুজ ও কোণ একমত, দ্বিতীয় বাহু উদ্ধার করা গেলে বাহু সূত্রের বিপরীতে ক্ষেত্রফল যাচাই করুন, এবং কোণ-বাহু জোড়া নির্ভুল রাখুন। এই যাচাইগুলো থাকলে, উত্তর তার আস্থা অর্জন করে।" },
          { "kind": "p", "text": "একটি বাহু, অতিভুজ ও অন্তর্ভুক্ত কোণ পরিমাপকৃত তথ্য হলে এই পৃষ্ঠার ক্যালকুলেটর ব্যবহার করুন, এবং পরিমাপ অন্যদিকে ইঙ্গিত করলে বাহু, উচ্চতা বা অর্ধপরিসীমা ক্যালকুলেটরের দিকে যান।" }
        ]
      }
    },
    "faqs": [
      {
        "question": "কোণ ব্যবহার করে সমকোণী ত্রিভুজের ক্ষেত্রফল কীভাবে নির্ণয় করবেন?",
        "answer": "b বাহু, c অতিভুজ ও অন্তর্ভুক্ত A কোণ জানা থাকলে K = bc sin(A)/2 ব্যবহার করুন; a বাহু, c অতিভুজ ও অন্তর্ভুক্ত B কোণ জানা থাকলে K = ac sin(B)/2 ব্যবহার করুন। সাইন অতিভুজকে নির্বাচিত বাহুর সাপেক্ষে লম্ব উচ্চতায় রূপান্তর করে, এবং দুই দিয়ে ভাগ করলে বর্গ এককে ক্ষেত্রফল পাওয়া যায়।"
      },
      {
        "question": "b বাহু, c অতিভুজ ও A কোণ দিয়ে ক্ষেত্রফলের সূত্র কী?",
        "answer": "সূত্রটি K = bc sin(A)/2। b বাহু A কোণের সন্নিহিত বাহু, c অতিভুজ, এবং A তাদের মধ্যবর্তী সূক্ষ্মকোণ। b = 4, c = 5 ও A প্রায় 36.87 ডিগ্রি হলে, sin(A) প্রায় 0.6, তাই ক্ষেত্রফল প্রায় 6 বর্গ একক হয়।"
      },
      {
        "question": "a বাহু, c অতিভুজ ও B কোণ দিয়ে ক্ষেত্রফলের সূত্র কী?",
        "answer": "সূত্রটি K = ac sin(B)/2। a বাহু B কোণের সন্নিহিত বাহু, c অতিভুজ, এবং B তাদের মধ্যবর্তী সূক্ষ্মকোণ। a = 3, c = 5 ও B প্রায় 53.13 ডিগ্রি হলে, sin(B) প্রায় 0.8, তাই ক্ষেত্রফল প্রায় 6 বর্গ একক, মোড 1 উদাহরণের একই ত্রিভুজ।"
      },
      {
        "question": "ক্ষেত্রফলের সূত্রে সাইন কেন ব্যবহার হয়?",
        "answer": "সাইন অতিভুজ থেকে লম্ব উচ্চতা গঠন করে। ভূমি b ও A কোণে মিলিত c বাহু সহ, উচ্চতা c sin(A), তাই K = bc sin(A)/2। সাইন পদ ছাড়া সূত্রটি দুটি অ-লম্ব দৈর্ঘ্য গুণ করত এবং ভিন্ন একটি জ্যামিতিক প্রশ্নের উত্তর দিত।"
      },
      {
        "question": "অন্তর্ভুক্ত কোণ কী?",
        "answer": "অন্তর্ভুক্ত কোণ দুটি নির্দিষ্ট বাহুর মাঝে থাকে। A কোণ b ও c বাহুর মাঝে অন্তর্ভুক্ত; B কোণ a ও c বাহুর মাঝে অন্তর্ভুক্ত। সাইন ক্ষেত্রফল সূত্র কেবল ব্যবহৃত দুটি বাহুর অন্তর্ভুক্ত কোণে কাজ করে, কারণ সূত্রটি সেই কোণ থেকে লম্ব উচ্চতা পড়ে।"
      },
      {
        "question": "দুটি বাহু না জেনে কি ক্ষেত্রফল নির্ণয় করা যায়?",
        "answer": "হ্যাঁ। অতিভুজ ও অন্তর্ভুক্ত কোণ একসঙ্গে সাইনের মাধ্যমে অনুপস্থিত বাহু পুনর্গঠন করে, তাই দ্বিতীয় বাহু কখনো মাপার দরকার হয় না। অন্যদিকে দুটি বাহুই জানা থাকলে, সহজতর K = ab/2 সূত্রই সরাসরি সেরা পথ এবং ত্রিকোণমিতির কোনো প্রয়োজন একদমই হয় না।"
      },
      {
        "question": "ক্যালকুলেটরের উভয় মোড একই ক্ষেত্রফল দেয় কেন?",
        "answer": "উভয় মোড একটি ত্রিভুজ বর্ণনা করে। যেহেতু sin(A) = a/c, bc sin(A) = ab; যেহেতু sin(B) = b/c, ac sin(B) = ab। উভয় সূত্র K = ab/2-এ সরলীকৃত হয়। আসন্নীকৃত কোণ ইনপুটের ছোট পার্থক্য আসন্নীকরণের প্রভাব, সূত্রগুলোর মধ্যে মতভেদ নয়।"
      },
      {
        "question": "প্রদত্ত বাহু ও অতিভুজের সঙ্গে যেকোনো সূক্ষ্মকোণ কি ব্যবহার করা যায়?",
        "answer": "না। তিনটি ইনপুটকে একমত হতে হবে: মোড 1-এর জন্য b = c cos(A) এবং মোড 2-এর জন্য a = c cos(B) প্রয়োজন। একই বাহু দৈর্ঘ্যের সঙ্গে যেকোনো সূক্ষ্মকোণ ভিন্ন, অ-সমকোণী ত্রিভুজ বর্ণনা করে, এবং সূত্র যে ক্ষেত্রফল দেয় তা সেই ত্রিভুজের।"
      },
      {
        "question": "বাহু সূত্র দিয়ে ক্ষেত্রফল কীভাবে যাচাই করব?",
        "answer": "পিথাগোরাসের উপপাদ্য দিয়ে অনুপস্থিত বাহু উদ্ধার করুন, তারপর K = ab/2 গণনা করুন। b = 4 ও c = 5-এর জন্য, a = sqrt(25 - 16) = 3, এবং K = 12/2 = 6, কোণ-ভিত্তিক ফলের সঙ্গে মিলে। দুটি স্বাধীন পথের একমত হওয়া ইনপুট ও গাণিতিক ক্রিয়া নিশ্চিত করে।"
      },
      {
        "question": "কোণ কি ডিগ্রি না রেডিয়ানে হতে হবে?",
        "answer": "ক্যালকুলেটর সবসময় ডিগ্রিতে কোণ প্রত্যাশা করে। ডিগ্রি = রেডিয়ান গুণ 180/pi দিয়ে রেডিয়ান রূপান্তর করুন; pi/6 রেডিয়ান 30 ডিগ্রি। যেখানে ডিগ্রি প্রত্যাশিত সেখানে রেডিয়ান মান দিলে সম্ভাব্য-দেখতে কিন্তু ভুল সাইন মান পাওয়া যায়, তাই গণনার আগে একক অবশ্যই যাচাই করুন।"
      },
      {
        "question": "প্রদত্ত অতিভুজে সর্বাধিক ক্ষেত্রফল কত?",
        "answer": "সর্বাধিক মান c-এর বর্গ ভাগ 4, যা পাওয়া যায় যখন উভয় সূক্ষ্মকোণ 45 ডিগ্রি হয়, অর্থাৎ সমদ্বিবাহু সমকোণী ত্রিভুজে। 10 একক অতিভুজে সর্বাধিক ক্ষেত্রফল 25 বর্গ একক। c-এর বর্গ ভাগ 4-এর উপরে যেকোনো গণনাকৃত ক্ষেত্রফল ইনপুট ত্রুটির স্পষ্ট সংকেত দেয়।"
      },
      {
        "question": "মূল সমকোণী ত্রিভুজ ক্ষেত্রফল ক্যালকুলেটর কখন ব্যবহার করব?",
        "answer": "আপনার পরিমাপ যখন এর কোনো ইনপুট সমন্বয়ের সঙ্গে সরাসরি মেলে, যেমন দুটি বাহুই জানা, তখন মূল ক্ষেত্রফল ক্যালকুলেটর ব্যবহার করুন। এই কোণ-ভিত্তিক ক্যালকুলেটর সেই ক্ষেত্রের জন্য রাখুন যার জন্য এটি তৈরি: একটি বাহু, অতিভুজ ও একসঙ্গে পরিমাপ করা অন্তর্ভুক্ত সূক্ষ্মকোণ।"
      }
    ],
    "faqHeading": "সচরাচর জিজ্ঞাসিত প্রশ্ন",
    "relatedHeading": "সম্পর্কিত সমকোণী ত্রিভুজ ক্যালকুলেটর দেখুন",
    "relatedItems": [
      "সমকোণী ত্রিভুজের ক্ষেত্রফল ক্যালকুলেটর",
      "বাহু থেকে সমকোণী ত্রিভুজের ক্ষেত্রফল ক্যালকুলেটর",
      "উচ্চতা থেকে সমকোণী ত্রিভুজের ক্ষেত্রফল ক্যালকুলেটর",
      "বাহু ও কোণ থেকে সমকোণী ত্রিভুজের ক্ষেত্রফল ক্যালকুলেটর",
      "অর্ধপরিসীমা থেকে সমকোণী ত্রিভুজের ক্ষেত্রফল ক্যালকুলেটর",
      "সাইন থেকে সমকোণী ত্রিভুজের বাহু ক্যালকুলেটর",
      "সাইন থেকে সমকোণী ত্রিভুজের কোণ ক্যালকুলেটর"
    ]
  }
};
