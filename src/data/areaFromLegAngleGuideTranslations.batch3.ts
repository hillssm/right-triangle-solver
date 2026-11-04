// areaFromLegAngleGuideTranslations.batch3.ts: Right Triangle Area From Leg
// and Angle Guide (Page 21 of 45) translations for Portuguese (pt),
// Bengali (bn), and Japanese (ja).
export const AREA_FROM_LEG_ANGLE_TRANSLATIONS_BATCH3 = {
  "pt": {
    "faqs": [
      {
        "question": "Qual é a fórmula da área usando um cateto e um ângulo?",
        "answer": "K = bc sin(A) / 2, onde b é o cateto adjacente ao ângulo A, c é a hipotenusa e A é o ângulo agudo entre eles. Por exemplo, b = 4, c = 5 e A = 36.87° dão K = (4 × 5 × 0.6) / 2 = 6 unidades quadradas. O ângulo deve ser informado em graus, e ambos os lados devem usar a mesma unidade de comprimento."
      },
      {
        "question": "Por que a fórmula usa o seno?",
        "answer": "O seno recupera o cateto perpendicular ausente a partir da hipotenusa: como sin(A) = a/c, multiplicar dá a = c sin(A). A regra padrão da área precisa de ambos os catetos, K = ab/2, então substituir a expressão do seno para a produz K = bc sin(A)/2. O seno é a ponte entre a hipotenusa medida e a altura não medida."
      },
      {
        "question": "Qual lado é adjacente ao ângulo A?",
        "answer": "O cateto b é adjacente ao ângulo A: ele é um dos dois lados que formam esse ângulo, sendo o outro a hipotenusa c. O cateto a é oposto ao ângulo A, ficando do outro lado do triângulo. Se você trocar a referência para o ângulo B, os rótulos se invertem: b passa a ser o lado oposto e a passa a ser o lado adjacente."
      },
      {
        "question": "Posso calcular a área sem conhecer o cateto ausente?",
        "answer": "Sim, esse é o ponto central desta calculadora. O seno do ângulo A codifica a razão do cateto ausente pela hipotenusa, então c sin(A) reconstrói o cateto a sem medi-lo. Digite b, c e A, e a fórmula cuida do resto. Você nunca precisa do terceiro lado como uma entrada separada."
      },
      {
        "question": "Qual é a diferença entre o ângulo A e o ângulo B?",
        "answer": "Ambos são ângulos agudos do triângulo retângulo, e A + B = 90°. O ângulo A fica entre o cateto b e a hipotenusa c; o ângulo B fica entre o cateto a e a hipotenusa c. A fórmula K = bc sin(A)/2 exige especificamente o ângulo A. Usar o ângulo B com os lados b e c dá uma resposta errada; o ângulo B emparelha com os lados a e c."
      },
      {
        "question": "A calculadora usa graus ou radianos?",
        "answer": "Graus. Inserir um valor em radianos produz um seno completamente diferente e uma área errada. Converta radianos para graus primeiro com graus = radianos × 180/π; por exemplo, π/6 radianos equivale a 30°. Sempre confirme a unidade do ângulo antes de calcular."
      },
      {
        "question": "Posso usar qualquer ângulo com um dado cateto e hipotenusa?",
        "answer": "Não. As três entradas devem satisfazer b = c cos(A), então o ângulo fica fixo uma vez escolhidos os lados. Para b = 4 e c = 5, o ângulo A deve ser cerca de 36.87°. Inserir um ângulo diferente descreve um triângulo diferente, e o resultado não corresponderá ao triângulo retângulo pretendido."
      },
      {
        "question": "Como verifico se minhas medidas formam um triângulo retângulo válido?",
        "answer": "Verifique três condições: a hipotenusa excede o cateto (c > b > 0), o ângulo está estritamente entre 0° e 90°, e b = c cos(A) vale. Para confiança extra, verifique a = c sin(A) e o teorema de Pitágoras a² + b² = c². Se alguma verificação falhar, pelo menos uma medida ou rótulo está errado."
      },
      {
        "question": "Posso calcular a área se conheço ambos os catetos?",
        "answer": "Sim, e a fórmula mais curta K = ab/2 se aplica diretamente, sem ângulo nem seno. Para os catetos 3 e 4, K = 6. A calculadora baseada em seno foi projetada para o caso em que um cateto está ausente; quando ambos os catetos são conhecidos, a fórmula dos catetos é mais simples e dá o resultado idêntico."
      },
      {
        "question": "O que acontece se eu digitar o ângulo errado?",
        "answer": "A calculadora multiplica o que recebe, então um ângulo errado produz uma área errada sem aviso. Inserir o ângulo B = 53.13° em vez de A = 36.87° com b = 4 e c = 5 dá 8 em vez de 6. Sempre confirme que o ângulo digitado é aquele entre o cateto b e a hipotenusa."
      },
      {
        "question": "Qual é a área máxima possível para uma hipotenusa fixa?",
        "answer": "K = c²/4, alcançada quando o ângulo A = 45° e o triângulo é isósceles com catetos c/√2. Para uma hipotenusa de 10, o teto é 25 unidades quadradas. Nenhum triângulo retângulo com essa hipotenusa pode cercar mais área. Se seu resultado exceder c²/4, as entradas são inconsistentes."
      },
      {
        "question": "Qual é a diferença entre a fórmula baseada em seno e a fórmula padrão base-altura?",
        "answer": "Não há diferença matemática: substituir sin(A) = a/c em K = bc sin(A)/2 dá K = ab/2, a regra padrão base-altura. A versão do seno é simplesmente a mesma fórmula reescrita para dados diferentes. Use a forma do seno quando a hipotenusa e o ângulo são conhecidos; use ab/2 quando ambos os catetos são conhecidos."
      }
    ],
    "relatedHeading": "Explore Calculadoras Relacionadas de Triângulos Retângulos",
    "relatedItems": [
      "Calculadora de Área de Triângulo Retângulo",
      "Calculadora de Área de Triângulo Retângulo a Partir dos Catetos",
      "Calculadora de Área de Triângulo Retângulo a Partir do Ângulo",
      "Calculadora de Lado de Triângulo Retângulo a Partir do Ângulo",
      "Calculadora de Lado de Triângulo Retângulo",
      "Calculadora de Razões Trigonométricas de Triângulo Retângulo"
    ],
    "relatedIntro": "Medidas diferentes pedem calculadoras diferentes.",
    "faqHeading": "Perguntas Frequentes",
    "tocHeading": "Neste Guia",
    "tocItems": {
      "sec-intro": "Como Calcular a Área de um Triângulo Retângulo Usando um Cateto e um Ângulo",
      "sec-anatomy": "Entendendo os Lados e Ângulos de um Triângulo Retângulo",
      "sec-sine": "Entendendo a Função Seno nos Cálculos de Triângulos Retângulos",
      "sec-formula": "Por Que a Fórmula da Área do Triângulo Retângulo Usa o Seno?",
      "sec-howto": "Como Usar a Calculadora de Área de Triângulo Retângulo a Partir de Cateto e Ângulo",
      "sec-consistency": "Como Verificar se seu Cateto, Hipotenusa e Ângulo Formam um Triângulo Retângulo Válido",
      "sec-examples": "Exemplos Passo a Passo da Área de Triângulo Retângulo Usando um Cateto e um Ângulo",
      "sec-practical": "Aplicações da Vida Real da Área de Triângulo Retângulo a Partir de Cateto e Ângulo",
      "sec-compare": "Por Que a Fórmula Baseada em Seno Produz a Mesma Área que a Fórmula dos Catetos?",
      "sec-angle-effect": "Como o Ângulo Incluído Afeta a Área do Triângulo Retângulo?",
      "sec-alternative": "É Possível Calcular a Área de um Triângulo Retângulo Usando um Cateto e seu Ângulo?",
      "sec-units": "Entendendo Unidades de Ângulo e Medidas nos Cálculos de Área",
      "sec-mistakes": "Erros Comuns ao Calcular a Área de um Triângulo Retângulo a Partir de um Cateto e um Ângulo",
      "sec-verify": "Como Verificar se a Área do seu Triângulo Retângulo Está Correta",
      "sec-applications": "Área de Triângulo Retângulo a Partir de Cateto e Ângulo na Prática",
      "sec-related": "Explore Calculadoras Relacionadas de Triângulos Retângulos",
      "sec-faq": "Perguntas Frequentes",
      "sec-conclusion": "Três Entradas Carregam Toda a Área"
    },
    "sections": {
      "sec-intro": {
        "h2": "Como Calcular a Área de um Triângulo Retângulo Usando um Cateto e um Ângulo",
        "blocks": [
          { "kind": "p", "text": "Tome [[b=4]], [[c=5]] e [[A=36.87^\\circ]]. Aplique [[K=\\frac{bc\\sin(A)}{2}]]: [[K=\\frac{4\\times5\\times0.6}{2}]], [[[\\boxed{K=6\\text{ square units}}]]] O resultado nomeia a área plana total cercada pelos três lados: seis unidades quadradas de superfície. É exatamente o que a Calculadora de Área de Triângulo Retângulo a Partir de Cateto e Ângulo retorna para essas entradas." },
          { "kind": "p", "text": "A calculadora pede três medidas. O cateto [[b]] fica ao lado do ângulo [[A]]; a hipotenusa [[c]] é o lado mais longo, oposto ao ângulo reto; e o ângulo [[A]] é o ângulo agudo apertado entre eles. Como [[\\sin(A)]] é igual à razão do cateto ausente [[a]] pela hipotenusa [[c]], a fórmula reconstrói a altura ausente sem medi-la. Multiplicar [[b]], [[c]] e [[\\sin(A)]] forma o retângulo envolvente; dividir por dois o recorta até o triângulo." },
          { "kind": "p", "text": "Isso importa sempre que o terceiro lado é difícil de medir. Um desenho pode dar a hipotenusa e um cateto, enquanto um transferidor ou uma etapa anterior fornece o ângulo. O seno fecha a lacuna, de modo que a área segue do que já é conhecido." }
        ]
      },
      "sec-anatomy": {
        "h2": "Entendendo os Lados e Ângulos de um Triângulo Retângulo",
        "blocks": [
          { "kind": "p", "text": "Antes que a fórmula faça sentido, os rótulos precisam ser exatos. Cada símbolo abaixo aparece na calculadora, e cada um carrega um único significado fixo." },
          { "kind": "h3", "text": "O Que É um Triângulo Retângulo?" },
          { "kind": "p", "text": "Um triângulo retângulo é um triângulo com um ângulo interno igual a 90 graus. Os dois lados que formam esse ângulo são os catetos, perpendiculares entre si; o lado oposto ao ângulo reto é a hipotenusa. Como os três ângulos internos somam 180 graus, os dois ângulos agudos satisfazem [[A+B=90^\\circ]], o que os torna complementares: conhecer um determina o outro." },
          { "kind": "h3", "text": "O Que É a Hipotenusa?" },
          { "kind": "p", "text": "A hipotenusa é o lado oposto ao ângulo reto. É sempre o lado mais longo, não importa como o triângulo seja girado ou desenhado. A calculadora o usa como o lado [[c]], então identificá-lo corretamente é o primeiro passo: encontre o ângulo reto e depois tome o lado oposto a ele. Um cateto nunca pode desempenhar esse papel, por mais longo que pareça em um desenho inclinado." },
          { "kind": "h3", "text": "Quais São os Dois Catetos?" },
          { "kind": "p", "text": "Os dois catetos são os lados que se encontram no ângulo reto, perpendiculares entre si. O cateto [[a]] fica oposto ao ângulo [[A]]; o cateto [[b]] fica oposto ao ângulo [[B]]. A calculadora recebe o cateto [[b]], aquele adjacente ao ângulo [[A]], como sua primeira entrada. Juntos, os catetos formam o canto onde vive o ângulo de 90 graus." },
          { "kind": "h3", "text": "Entendendo o Ângulo A" },
          { "kind": "p", "text": "O ângulo [[A]] é o ângulo agudo formado pelo cateto [[b]] e pela hipotenusa [[c]]. É o ângulo incluído entre as duas entradas de lados da calculadora, de modo que [[\\angle A=\\text{angle between }b\\text{ and }c]]. Esse emparelhamento é fixo: onde quer que a fórmula mencione [[A]], ela significa o canto onde o cateto conhecido encontra a hipotenusa, não o canto na extremidade distante do cateto [[b]]." },
          { "kind": "h3", "text": "Lados Oposto e Adjacente em Relação ao Ângulo A" },
          { "kind": "p", "text": "Posicione-se no ângulo [[A]] e olhe através do triângulo. O lado que você encara sem tocar é o lado oposto; o lado que forma o ângulo junto com a hipotenusa é o lado adjacente. Esses rótulos seguem o ângulo de referência, então trocar a referência de [[A]] para [[B]] troca qual cateto é qual." },
          { "kind": "h3", "text": "Entendendo o Ângulo Incluído" },
          { "kind": "p", "text": "Um ângulo incluído é o ângulo formado por dois lados escolhidos. A fórmula da área multiplica [[b]] e [[c]], então o ângulo de que ela precisa é aquele preso entre eles: o ângulo [[A]]. O emparelhamento correto para esta calculadora é [[b,\\;c,\\;A]]. Usar qualquer outro ângulo com os mesmos dois lados quebra o emparelhamento que a fórmula pressupõe, então não confunda o ângulo [[A]] com o ângulo [[B]]." }
        ],
        "imgAlt": "Triângulo retângulo ABC: cateto b e hipotenusa c destacados, ângulo incluído A, cateto ausente a rotulado",
        "figcaption": "Triângulo ABC: o cateto adjacente b destacado e a hipotenusa c formam o ângulo incluído A; o lado a é o cateto oposto ausente."
      },
      "sec-sine": {
        "h2": "Entendendo a Função Seno nos Cálculos de Triângulos Retângulos",
        "blocks": [
          { "kind": "p", "text": "O seno é uma razão, não um comprimento. Para um ângulo agudo, [[[\\boxed{\\sin(A)=\\frac{\\text{Opposite}}{\\text{Hypotenuse}}}]]] Neste triângulo, isso se torna [[[\\boxed{\\sin(A)=\\frac{a}{c}}]]] A razão compara o lado oposto ao ângulo com o lado mais longo, então é um número puro sem unidades. Para um ângulo agudo, seu valor sempre fica entre 0 e 1, e é exatamente o que permite que um lado substitua o outro." },
          { "kind": "h3", "text": "Como o Seno Ajuda a Encontrar o Cateto Ausente" },
          { "kind": "p", "text": "Comece com [[\\sin(A)=\\frac{a}{c}]]. Multiplique ambos os lados por [[c]]: [[[\\boxed{a=c\\sin(A)}]]] A hipotenusa amplia a razão de volta para um comprimento, e esse comprimento é o cateto ausente. A calculadora nunca pede [[a]] porque esse único rearranjo o recupera de [[c]] e [[A]]. Cada etapa posterior da fórmula da área repousa sobre essa substituição." },
          { "kind": "h3", "text": "Exemplo Numérico" },
          { "kind": "p", "text": "Dado [[c=5]] e [[A=36.87^\\circ]]: [[a=5\\times\\sin(36.87^\\circ)]], [[a=5\\times0.6]], [[[\\boxed{a=3}]]] O cateto ausente tem 3 unidades de comprimento, o que completa o conhecido triângulo 3-4-5. Uma multiplicação substituiu uma medida separada." },
          { "kind": "h3", "text": "Como o Seno Difere do Cosseno e da Tangente" },
          { "kind": "p", "text": "O cosseno usa o lado adjacente: [[\\cos(A)=\\frac{b}{c}]]. A tangente usa os dois catetos: [[\\tan(A)=\\frac{a}{b}]]. Cada razão responde a uma pergunta diferente. O seno é o de que esta calculadora precisa porque a incógnita é o cateto oposto [[a]] e o lado conhecido é a hipotenusa [[c]]. Quando os dados mudam, a razão útil muda com eles, mas nada mais neste guia deixa a família do seno." }
        ]
      },
      "sec-formula": {
        "h2": "Por Que a Fórmula da Área do Triângulo Retângulo Usa o Seno?",
        "blocks": [
          { "kind": "p", "text": "Comece com a regra padrão: [[K=\\frac{\\text{base}\\times\\text{perpendicular height}}{2}]]. Para este triângulo, a base natural é o cateto [[b]] e a altura perpendicular é o cateto [[a]], já que os catetos se encontram a 90 graus. Isso dá [[K=\\frac{ab}{2}]]. A calculadora não pede [[a]], então a fórmula precisa reconstruí-lo. Pela razão do seno, [[a=c\\sin(A)]]. Substitua: [[K=\\frac{b(c\\sin(A))}{2}]], portanto [[[\\boxed{K=\\frac{bc\\sin(A)}{2}}]]] A divisão por dois sobrevive da regra base-altura; o fator seno é o cateto ausente disfarçado." },
          { "kind": "h3", "text": "Por Que a Fórmula É Dividida por Dois?" },
          { "kind": "p", "text": "Um triângulo com uma dada base e altura perpendicular preenche exatamente metade do paralelogramo construído sobre a mesma base e altura. Duplicar qualquer triângulo ao longo de um lado completa esse paralelogramo, então o triângulo possui metade de sua área. A divisão por dois é geometria, não convenção, e se aplica não importa qual fórmula forneça a base e a altura." },
          { "kind": "h3", "text": "Como o Seno Substitui a Altura Ausente?" },
          { "kind": "p", "text": "A altura perpendicular em [[K=\\frac{ab}{2}]] é o cateto [[a]]. Como [[\\sin(A)=\\frac{a}{c}]], multiplicar a hipotenusa pelo seno estica a razão adimensional de volta para o comprimento [[a]]. O usuário mede [[c]] e [[A]] em vez de [[a]], e o produto [[c\\sin(A)]] realiza a conversão silenciosamente dentro da fórmula." },
          { "kind": "h3", "text": "Por Que a Hipotenusa É Multiplicada pelo Cateto Adjacente?" },
          { "kind": "p", "text": "A regra geral para qualquer triângulo é que dois lados e seu ângulo incluído determinam a área. Aqui os dois lados conhecidos são [[b]] e [[c]], e seu ângulo incluído é [[A]]. A fórmula multiplica exatamente esses dois lados, depois escala por [[\\sin(A)]] e divide pela metade. Qualquer outro emparelhamento de lados exigiria um ângulo incluído diferente." },
          { "kind": "h3", "text": "Esta Fórmula Funciona para Outros Triângulos?" },
          { "kind": "p", "text": "Sim, em sua forma geral: [[[\\boxed{K=\\frac{xy\\sin(\\theta)}{2}}]]], onde [[x]] e [[y]] são dois lados quaisquer e [[\\theta]] é o ângulo entre eles. A versão do triângulo retângulo é essa regra com [[x=b]], [[y=c]] e [[\\theta=A]]. A calculadora adiciona uma restrição: as três entradas também devem satisfazer as relações do triângulo retângulo, como [[b=c\\cos(A)]]. A fórmula geral calcula uma área para qualquer par de lados com ângulo incluído; esta calculadora interpreta o resultado como um triângulo retângulo." }
        ],
        "imgAlt": "Triângulo 3-4-5: sin A igual a 3 sobre 5 recupera o cateto a igual a 3, área 6 pelas duas fórmulas",
        "figcaption": "Do seno à área: sin A = 3/5 dá a = 3, então K = bc sin A / 2 = 6 coincide com K = ab/2."
      },
      "sec-howto": {
        "h2": "Como Usar a Calculadora de Área de Triângulo Retângulo a Partir de Cateto e Ângulo",
        "blocks": [
          { "kind": "p", "text": "A calculadora precisa de exatamente três entradas, inseridas em ordem. As etapas abaixo seguem o layout na tela, das medidas conhecidas até um resultado verificado." }
        ],
        "steps": [
          "<strong>Identifique o cateto adjacente b.</strong> O cateto que forma o ângulo A junto com a hipotenusa.",
          "<strong>Identifique a hipotenusa c.</strong> O lado mais longo, oposto ao ângulo reto.",
          "<strong>Identifique o ângulo agudo incluído A.</strong> O ângulo entre o cateto b e a hipotenusa c.",
          "<strong>Use unidades compatíveis para ambos os lados.</strong> Metros com metros, pés com pés, nunca misturadas.",
          "<strong>Digite o cateto b na primeira entrada.</strong> Este é o cateto adjacente ao ângulo A.",
          "<strong>Digite a hipotenusa c na segunda entrada.</strong> Ela deve exceder o cateto b.",
          "<strong>Digite o ângulo A em graus.</strong> A calculadora espera graus, não radianos.",
          "<strong>Verifique se o ângulo está entre 0 e 90 graus.</strong> Os extremos não descrevem nenhum triângulo.",
          "<strong>Verifique se a hipotenusa é maior que o cateto.</strong> Se c não for maior que b, um rótulo está errado.",
          "<strong>Verifique se os três valores descrevem um triângulo retângulo.</strong> Confirme que b é igual a c cos(A), pelo menos aproximadamente.",
          "<strong>Clique em Calcular Área.</strong> O resultado aparece com a substituição mostrada.",
          "<strong>Revise o resultado.</strong> Leia a área e confirme que ela parece razoável.",
          "<strong>Leia as etapas da solução.</strong> Elas mostram a fórmula, o valor do seno e a aritmética.",
          "<strong>Verifique se o resultado final usa unidades quadradas.</strong> Unidades de comprimento ao quadrado, correspondendo às entradas.",
          "<strong>Use Redefinir antes de inserir outro problema.</strong> Ele limpa os três campos para um novo começo."
        ],
        "closingParagraphs": [
          "A página oferece uma configuração de calculadora: [[b]], [[c]] e [[A]]. Não há um segundo modo; toda área nesta página vem da fórmula do seno acima."
        ]
      },
      "sec-consistency": {
        "h2": "Como Verificar se seu Cateto, Hipotenusa e Ângulo Formam um Triângulo Retângulo Válido",
        "blocks": [
          { "kind": "p", "text": "As três entradas não são independentes. Em um triângulo retângulo, [[[\\boxed{\\cos(A)=\\frac{b}{c}}]]], portanto [[[\\boxed{b=c\\cos(A)}]]] Fixe dois dos três valores e o terceiro já está decidido. Inserir três números que discordam não descreve o triângulo que a fórmula pressupõe." },
          { "kind": "h3", "text": "Verificando o Ângulo a Partir dos Dois Comprimentos de Lado" },
          { "kind": "p", "text": "Quando [[b]] e [[c]] são conhecidos, o ângulo é forçado: [[A=\\cos^{-1}\\left(\\frac{b}{c}\\right)]]. Exemplo: [[b=4]], [[c=5]] dá [[A=\\cos^{-1}(4/5)]], [[[\\boxed{A\\approx36.87^\\circ}]]] Se um transferidor ou um cálculo anterior informar um ângulo diferente para esses lados, um dos números está errado. Os lados decidem; o ângulo segue." },
          { "kind": "h3", "text": "Verificando os Comprimentos de Lado a Partir do Ângulo" },
          { "kind": "p", "text": "A verificação funciona no outro sentido também. Dado [[c=10]] e [[A=60^\\circ]], o cateto adjacente deve ser [[b=10\\cos(60^\\circ)]], [[[\\boxed{b=5}]]] Inserir [[b=8]] com a mesma hipotenusa e o mesmo ângulo não descreveria o mesmo triângulo retângulo, porque [[10\\cos(60^\\circ)]] é igual a 5, não 8. Cada ângulo admite exatamente um comprimento de cateto adjacente para uma hipotenusa fixa." },
          { "kind": "h3", "text": "O Que Acontece Quando as Entradas São Inconsistentes?" },
          { "kind": "p", "text": "A fórmula geral de dois lados e ângulo incluído ainda retorna um número para entradas inconsistentes, porque multiplica o que recebe. Mas quando [[b\\neq c\\cos(A)]], as medidas não descrevem um triângulo retângulo com [[c]] como hipotenusa e [[b]] como seu cateto adjacente. Uma resposta numérica não é prova de geometria válida; a verificação de consistência é." },
          { "kind": "h3", "text": "Condições Básicas de Entrada" },
          { "kind": "p", "text": "Entradas válidas satisfazem [[c>b>0]], [[0^\\circ<A<90^\\circ]] e [[b=c\\cos(A)]]. A primeira mantém a hipotenusa como a mais longa; a segunda mantém o ângulo agudo; a terceira amarra os três valores em um triângulo. Verifique as três antes de confiar na área." }
        ],
        "imgAlt": "Três painéis: válido 4, 5, 36.87 graus; válido 5, 10, 60 graus; inválido 8, 10, 60 graus",
        "figcaption": "Entradas válidas satisfazem b = c cos A; o terceiro painel mostra 10 cos 60 graus = 5 diferente de 8."
      },
      "sec-examples": {
        "h2": "Exemplos Passo a Passo da Área de Triângulo Retângulo Usando um Cateto e um Ângulo",
        "blocks": [
          { "kind": "p", "text": "Quatro triângulos retângulos clássicos mostram o método em tamanhos crescentes. Cada exemplo substitui na fórmula do seno e depois verifica o resultado com a fórmula dos dois catetos." },
          { "kind": "h3", "text": "Exemplo 1: Triângulo Retângulo 3-4-5" },
          { "kind": "p", "text": "Dado [[b=4]], [[c=5]], [[A=36.87^\\circ]]. Etapa 1: [[K=\\frac{bc\\sin(A)}{2}]]. Etapa 2: [[K=\\frac{4\\times5\\times\\sin(36.87^\\circ)}{2}]]. Etapa 3: [[\\sin(36.87^\\circ)\\approx0.6]]. Etapa 4: [[K=\\frac{20\\times0.6}{2}]], [[[\\boxed{K=6\\text{ square units}}]]] Verifique: [[a=5\\times0.6=3]], e [[K=\\frac{4\\times3}{2}=6]]." },
          { "kind": "h3", "text": "Exemplo 2: Triângulo Retângulo 5-12-13" },
          { "kind": "p", "text": "Dado [[b=12]], [[c=13]], [[A\\approx22.62^\\circ]], com [[\\sin(A)=\\frac{5}{13}]]. Substitua: [[K=\\frac{12\\times13\\times(5/13)}{2}]]. O 13 cancela: [[K=\\frac{12\\times5}{2}]], [[[\\boxed{K=30\\text{ square units}}]]] Verifique: [[a=13\\times(5/13)=5]], e [[K=\\frac{12\\times5}{2}=30]]." },
          { "kind": "h3", "text": "Exemplo 3: Triângulo Retângulo 8-15-17" },
          { "kind": "p", "text": "Dado [[b=15]], [[c=17]], [[A\\approx28.07^\\circ]], com [[\\sin(A)=\\frac{8}{17}]]. Então [[K=\\frac{15\\times17\\times(8/17)}{2}=\\frac{15\\times8}{2}]], [[[\\boxed{K=60\\text{ square units}}]]] Verifique: [[a=8]], e [[\\frac{15\\times8}{2}=60]]." },
          { "kind": "h3", "text": "Exemplo 4: Triângulo Retângulo 7-24-25" },
          { "kind": "p", "text": "Dado [[b=24]], [[c=25]], [[A\\approx16.26^\\circ]], com [[\\sin(A)=\\frac{7}{25}]]. Então [[K=\\frac{24\\times25\\times(7/25)}{2}=\\frac{24\\times7}{2}]], [[[\\boxed{K=84\\text{ square units}}]]] Verifique: [[a=7]], e [[\\frac{24\\times7}{2}=84]]." },
          { "kind": "h3", "text": "Comparação dos Exemplos Fundamentais" }
        ],
        "table": {
          "headers": ["Tipo de triângulo", "Cateto conhecido b", "Hipotenusa c", "Ângulo A", "Área calculada"],
          "rows": [
            ["3-4-5", "4", "5", "36.87°", "6"],
            ["5-12-13", "12", "13", "22.62°", "30"],
            ["8-15-17", "15", "17", "28.07°", "60"],
            ["7-24-25", "24", "25", "16.26°", "84"]
          ]
        }
      },
      "sec-practical": {
        "h2": "Aplicações da Vida Real da Área de Triângulo Retângulo a Partir de Cateto e Ângulo",
        "blocks": [
          { "kind": "p", "text": "Doze situações resolvidas levam a fórmula da página para a oficina, o canteiro de obras e o estúdio. Cada uma nomeia um painel, seção, perfil ou modelo simplificado triangular retângulo, trabalha as três entradas da calculadora através da fórmula e declara a suposição por trás dos números. Onde o objeto real é curvo ou irregular, o cálculo cobre apenas o triângulo modelado." },
          { "kind": "h3", "text": "Exemplo 1: Janela de Vidro Triangular" },
          { "kind": "p", "text": "Uma janela de vidro triangular retângula tem [[a=3\\text{ m}]], [[b=4\\text{ m}]], [[c=5\\text{ m}]]. Entradas da calculadora: [[b=4]], [[c=5]], [[A\\approx36.87^\\circ]]. Substitua: [[K=\\frac{4\\times5\\times0.6}{2}]], [[[\\boxed{K=6\\text{ m}^2}]]] Esta é a área plana do vidro triangular antes que as folgas da moldura sejam subtraídas." },
          { "kind": "h3", "text": "Exemplo 2: Painel de Suporte de Telhado" },
          { "kind": "p", "text": "Uma seção de suporte de telhado triangular retângula tem [[a=5\\text{ ft}]], [[b=12\\text{ ft}]], [[c=13\\text{ ft}]]. Entradas: [[b=12]], [[c=13]], [[A\\approx22.62^\\circ]], [[\\sin(A)=\\frac{5}{13}]]. Então [[K=\\frac{12\\times13\\times(5/13)}{2}]], [[[\\boxed{K=30\\text{ ft}^2}]]] O resultado descreve a seção plana de suporte triangular, não o telhado inteiro." },
          { "kind": "h3", "text": "Exemplo 3: Perfil Lateral de Rampa Triangular" },
          { "kind": "p", "text": "Um perfil de rampa triangular retângulo simplificado tem [[a=6\\text{ m}]], [[b=8\\text{ m}]], [[c=10\\text{ m}]]. Entradas: [[b=8]], [[c=10]], [[A\\approx36.87^\\circ]]. Então [[K=\\frac{8\\times10\\times0.6}{2}]], [[[\\boxed{K=24\\text{ m}^2}]]] Este é o perfil lateral triangular, não a superfície inclinada de caminhada." },
          { "kind": "h3", "text": "Exemplo 4: Chapa de Aço de Reforço" },
          { "kind": "p", "text": "Uma chapa de aço triangular de suporte tem [[a=8\\text{ cm}]], [[b=15\\text{ cm}]], [[c=17\\text{ cm}]]. Entradas: [[b=15]], [[c=17]], [[A\\approx28.07^\\circ]], [[\\sin(A)=\\frac{8}{17}]]. Então [[K=\\frac{15\\times17\\times(8/17)}{2}]], [[[\\boxed{K=60\\text{ cm}^2}]]] A área sozinha não estabelece resistência estrutural ou capacidade de carga." },
          { "kind": "h3", "text": "Exemplo 5: Seção de Jardim Triangular" },
          { "kind": "p", "text": "Uma seção de jardim triangular retângula simplificada tem [[a=7\\text{ m}]], [[b=24\\text{ m}]], [[c=25\\text{ m}]]. Entradas: [[b=24]], [[c=25]], [[A\\approx16.26^\\circ]], [[\\sin(A)=\\frac{7}{25}]]. Então [[K=\\frac{24\\times25\\times(7/25)}{2}]], [[[\\boxed{K=84\\text{ m}^2}]]] Isso ajuda a estimar a área da seção triangular para plantio." },
          { "kind": "h3", "text": "Exemplo 6: Painel de Vela Triangular" },
          { "kind": "p", "text": "Uma seção de vela triangular retângula tem [[a=9\\text{ ft}]], [[b=12\\text{ ft}]], [[c=15\\text{ ft}]]. Entradas: [[b=12]], [[c=15]], [[A\\approx36.87^\\circ]]. Então [[K=\\frac{12\\times15\\times0.6}{2}]], [[[\\boxed{K=54\\text{ ft}^2}]]] Costuras e folgas de material estão excluídas deste valor de painel plano." },
          { "kind": "h3", "text": "Exemplo 7: Modelo de Corte de Compensado" },
          { "kind": "p", "text": "Um modelo de compensado triangular retângulo tem [[a=12\\text{ cm}]], [[b=16\\text{ cm}]], [[c=20\\text{ cm}]]. Entradas: [[b=16]], [[c=20]], [[A\\approx36.87^\\circ]]. Então [[K=\\frac{16\\times20\\times0.6}{2}]], [[[\\boxed{K=96\\text{ cm}^2}]]] A área ajuda a estimar o material plano necessário antes do desperdício de corte." },
          { "kind": "h3", "text": "Exemplo 8: Placa de Trânsito Triangular" },
          { "kind": "p", "text": "Um painel de placa triangular retângulo tem [[a=20\\text{ cm}]], [[b=21\\text{ cm}]], [[c=29\\text{ cm}]]. Entradas: [[b=21]], [[c=29]], [[A\\approx43.60^\\circ]], [[\\sin(A)=\\frac{20}{29}]]. Então [[K=\\frac{21\\times29\\times(20/29)}{2}]], [[[\\boxed{K=210\\text{ cm}^2}]]] Isso estima a área plana da face da placa." },
          { "kind": "h3", "text": "Exemplo 9: Seção de Levantamento Topográfico" },
          { "kind": "p", "text": "Uma seção topográfica triangular retângula tem [[a=9\\text{ m}]], [[b=40\\text{ m}]], [[c=41\\text{ m}]]. Entradas: [[b=40]], [[c=41]], [[A\\approx12.68^\\circ]], [[\\sin(A)=\\frac{9}{41}]]. Então [[K=\\frac{40\\times41\\times(9/41)}{2}]], [[[\\boxed{K=180\\text{ m}^2}]]] O resultado se aplica à seção de terreno triangular retângula simplificada." },
          { "kind": "h3", "text": "Exemplo 10: Suporte de Toldo Triangular" },
          { "kind": "p", "text": "Uma seção de suporte de toldo triangular retângula tem [[a=15\\text{ ft}]], [[b=20\\text{ ft}]], [[c=25\\text{ ft}]]. Entradas: [[b=20]], [[c=25]], [[A\\approx36.87^\\circ]]. Então [[K=\\frac{20\\times25\\times0.6}{2}]], [[[\\boxed{K=150\\text{ ft}^2}]]] Esta é a seção triangular plana, não o tecido completo de um toldo irregular." },
          { "kind": "h3", "text": "Exemplo 11: Seção Transversal de Sítio Industrial" },
          { "kind": "p", "text": "Uma seção de terreno industrial triangular retângula simplificada tem [[a=11\\text{ m}]], [[b=60\\text{ m}]], [[c=61\\text{ m}]]. Entradas: [[b=60]], [[c=61]], [[A\\approx10.39^\\circ]], [[\\sin(A)=\\frac{11}{61}]]. Então [[K=\\frac{60\\times61\\times(11/61)}{2}]], [[[\\boxed{K=330\\text{ m}^2}]]] Um sítio real irregular pode precisar de divisão em várias formas." },
          { "kind": "h3", "text": "Exemplo 12: Seção de Extremidade de Telhado de Armazém" },
          { "kind": "p", "text": "Uma grande seção de extremidade de telhado de armazém triangular retângula tem [[a=13\\text{ ft}]], [[b=84\\text{ ft}]], [[c=85\\text{ ft}]]. Entradas: [[b=84]], [[c=85]], [[A\\approx8.80^\\circ]], [[\\sin(A)=\\frac{13}{85}]]. Então [[K=\\frac{84\\times85\\times(13/85)}{2}]], [[[\\boxed{K=546\\text{ ft}^2}]]] O resultado estima a seção plana de extremidade triangular." },
          { "kind": "h3", "text": "Comparação dos Exemplos Práticos" }
        ],
        "table": {
          "headers": ["Aplicação prática", "Cateto a", "Cateto conhecido b", "Hipotenusa c", "Ângulo A", "Área calculada", "Unidade de medida"],
          "rows": [
            ["Janela de vidro", "3", "4", "5", "36.87°", "6", "m²"],
            ["Suporte de telhado", "5", "12", "13", "22.62°", "30", "ft²"],
            ["Perfil de rampa", "6", "8", "10", "36.87°", "24", "m²"],
            ["Chapa de reforço", "8", "15", "17", "28.07°", "60", "cm²"],
            ["Seção de jardim", "7", "24", "25", "16.26°", "84", "m²"],
            ["Painel de vela", "9", "12", "15", "36.87°", "54", "ft²"],
            ["Modelo de compensado", "12", "16", "20", "36.87°", "96", "cm²"],
            ["Placa de trânsito", "20", "21", "29", "43.60°", "210", "cm²"],
            ["Seção de levantamento", "9", "40", "41", "12.68°", "180", "m²"],
            ["Suporte de toldo", "15", "20", "25", "36.87°", "150", "ft²"],
            ["Seção industrial", "11", "60", "61", "10.39°", "330", "m²"],
            ["Extremidade de telhado", "13", "84", "85", "8.80°", "546", "ft²"]
          ]
        }
      },
      "sec-compare": {
        "h2": "Por Que a Fórmula Baseada em Seno Produz a Mesma Área que a Fórmula dos Catetos?",
        "blocks": [
          { "kind": "p", "text": "Comece com [[K=\\frac{bc\\sin(A)}{2}]] e lembre-se de [[\\sin(A)=\\frac{a}{c}]]. Substitua: [[K=\\frac{bc(a/c)}{2}]]. O [[c]] cancela, restando [[[\\boxed{K=\\frac{ab}{2}}]]] A fórmula do seno não inventa uma nova área; ela calcula a mesma área a partir de um conjunto diferente de dados, com o cateto ausente contrabandeado através da razão do seno." },
          { "kind": "h3", "text": "Quando a Fórmula do Seno É Mais Útil?" },
          { "kind": "p", "text": "Use-a quando um cateto é medido, a hipotenusa é conhecida e o ângulo incluído está disponível, enquanto o terceiro lado nunca foi medido diretamente. Medições de campo, desenhos em escala e dados topográficos frequentemente chegam exatamente nessa combinação. A fórmula transforma esses três números em uma área em uma linha, sem desvio para encontrar primeiro o cateto ausente." },
          { "kind": "h3", "text": "Quando a Fórmula dos Catetos É Mais Simples?" },
          { "kind": "p", "text": "Quando ambos os catetos perpendiculares já são conhecidos, [[K=\\frac{ab}{2}]] é mais curta: sem seno, sem ângulo, uma multiplicação e uma divisão pela metade. Use a versão do seno apenas quando um cateto estiver ausente e o ângulo puder fornecê-lo." },
          { "kind": "h3", "text": "Comparação Numérica" },
          { "kind": "p", "text": "No triângulo 3-4-5, o método do seno dá [[K=\\frac{4\\times5\\times0.6}{2}=6]], e o método dos catetos dá [[K=\\frac{3\\times4}{2}=6]]. Ambos os caminhos passam pela mesma geometria, então devem concordar. Quando não concordam, as entradas ou a aritmética são culpadas, nunca as fórmulas." }
        ]
      },
      "sec-angle-effect": {
        "h2": "Como o Ângulo Incluído Afeta a Área do Triângulo Retângulo?",
        "blocks": [
          { "kind": "p", "text": "Com a hipotenusa fixa, o ângulo não pode mudar livremente: as relações do triângulo retângulo amarram [[b]] e [[A]] juntas. Tratar essa restrição honestamente mostra exatamente como a área sobe e desce à medida que [[A]] se move entre 0 e 90 graus." },
          { "kind": "h3", "text": "O Que Acontece Quando o Ângulo A Aumenta?" },
          { "kind": "p", "text": "Com [[c]] fixo, [[b=c\\cos(A)]] e [[a=c\\sin(A)]], então [[K=\\frac{c^2\\sin(A)\\cos(A)}{2}]]. A identidade do ângulo duplo dá [[[\\boxed{K=\\frac{c^2\\sin(2A)}{4}}]]] A área cresce à medida que [[A]] se aproxima de 45 graus por baixo, atinge o pico em 45 graus e depois cai em direção a 90 graus. Ângulos complementares, como 30° e 60°, dão a mesma área porque [[\\sin(2A)]] é simétrico em torno de 45 graus." },
          { "kind": "h3", "text": "Área Máxima para uma Hipotenusa Fixa" },
          { "kind": "p", "text": "O pico ocorre em [[A=45^\\circ]], onde [[\\sin(2A)=1]]: [[[\\boxed{K_{\\max}=\\frac{c^2}{4}}]]] Lá, [[a=b=\\frac{c}{\\sqrt{2}}]], então o triângulo maximizador é isósceles. Uma hipotenusa fixa não pode cercar mais área triangular retângula do que um quarto de seu quadrado, e apenas a forma isósceles a alcança." },
          { "kind": "h3", "text": "Exemplo Numérico" },
          { "kind": "p", "text": "Dado [[c=10]], o teto é [[K_{\\max}=\\frac{10^2}{4}]], [[[\\boxed{K_{\\max}=25}]]] Em [[A=45^\\circ]], os catetos são [[10/\\sqrt{2}\\approx7.07]] cada, e [[\\frac{7.07\\times7.07}{2}\\approx25]]. Note que 90° não é uma entrada aguda admissível: ela colapsaria o triângulo em uma linha." }
        ]
      },
      "sec-alternative": {
        "h2": "É Possível Calcular a Área de um Triângulo Retângulo Usando um Cateto e seu Ângulo?",
        "blocks": [
          { "kind": "p", "text": "Sim, com a tangente em vez do seno. Se o cateto [[b]] e o ângulo [[A]] são conhecidos, o cateto oposto segue de [[a=b\\tan(A)]]. Coloque isso em [[K=\\frac{ab}{2}]]: [[K=\\frac{b(b\\tan(A))}{2}]], portanto [[[\\boxed{K=\\frac{b^2\\tan(A)}{2}}]]] Do outro canto, [[b=a\\tan(B)]] dá [[[\\boxed{K=\\frac{a^2\\tan(B)}{2}}]]] Estes são métodos alternativos genuínos, úteis quando a hipotenusa é desconhecida, mas um cateto e seu ângulo estão à mão. São alternativas matemáticas, não modos extras na calculadora acima, que funciona apenas com [[b]], [[c]] e [[A]]." }
        ]
      },
      "sec-units": {
        "h2": "Entendendo Unidades de Ângulo e Medidas nos Cálculos de Área",
        "blocks": [
          { "kind": "p", "text": "A área herda sua unidade dos dois comprimentos multiplicados para formá-la, enquanto o ângulo não contribui com nenhuma unidade. Manter as três entradas em unidades compatíveis é o que mantém a resposta honesta." },
          { "kind": "h3", "text": "Graus Versus Radianos" },
          { "kind": "p", "text": "A calculadora espera graus. Converta com [[\\text{Degrees}=\\text{Radians}\\times\\frac{180}{\\pi}]]; por exemplo, [[\\frac{\\pi}{6}\\text{ radians}=30^\\circ]]. Um ângulo em radianos alimentado em um campo em graus muda silenciosamente o valor do seno: [[\\sin(30^\\circ)=0.5]], mas [[\\sin(30\\text{ radians})\\approx-0.99]], o que arruinaria a área. Converta primeiro, depois digite." },
          { "kind": "h3", "text": "Por Que o Seno Não Tem Unidades" },
          { "kind": "p", "text": "O seno é uma razão de dois comprimentos, então as unidades cancelam: oposto sobre hipotenusa é um número puro. As unidades quadradas na resposta vêm inteiramente de multiplicar [[b]] por [[c]]. É por isso que a contabilidade de unidades da fórmula é simples: iguale as duas unidades de comprimento, e a unidade de área segue." },
          { "kind": "h3", "text": "Unidades de Medida Comuns" },
          { "kind": "p", "text": "Metros dão metros quadrados, centímetros dão centímetros quadrados, pés dão pés quadrados, polegadas dão polegadas quadradas: [[\\text{m}\\times\\text{m}=\\text{m}^2]], e o mesmo padrão vale para cada unidade de comprimento. Unidades mistas, como centímetros com metros, devem ser convertidas para uma unidade antes de a fórmula ser aplicada, ou o número não terá significado claro." },
          { "kind": "h3", "text": "Por Que o Arredondamento Precoce Pode Afetar o Resultado" },
          { "kind": "p", "text": "Mantenha precisão total nas etapas intermediárias e arredonde apenas a resposta final. O ângulo exato por trás de 36.87° é 36.869897°, cujo seno é exatamente 0.6; arredondar o ângulo primeiro move o seno por um fio, e esse fio se multiplica através de [[b]] e [[c]] até a área. Pequeno em um triângulo, perceptível em um projeto inteiro." }
        ]
      },
      "sec-mistakes": {
        "h2": "Erros Comuns ao Calcular a Área de um Triângulo Retângulo a Partir de um Cateto e um Ângulo",
        "blocks": [
          { "kind": "p", "text": "Quase toda resposta errada neste tópico remonta a uma entrada rotulada incorretamente, e não a aritmética ruim. Os dezesseis erros abaixo são os que aparecem repetidamente, cada um com sua causa e sua correção." },
          { "kind": "h3", "text": "1. Confundir a Hipotenusa com um Cateto Perpendicular" },
          { "kind": "p", "text": "A hipotenusa é o lado oposto ao ângulo reto e o lado mais longo; um cateto encontra o ângulo reto. Trocá-los alimenta o comprimento errado em [[c]]. Correção: encontre o ângulo reto primeiro e depois tome o lado oposto a ele." },
          { "kind": "h3", "text": "2. Emparelhar o Ângulo A com o Cateto Errado" },
          { "kind": "p", "text": "O ângulo [[A]] fica entre o cateto [[b]] e a hipotenusa [[c]]. Emparelhá-lo com o cateto [[a]] embaralha a relação de ângulo incluído que a fórmula pressupõe. Correção: trace os dois lados que formam o ângulo que você digitou." },
          { "kind": "h3", "text": "3. Confundir Lados Oposto e Adjacente" },
          { "kind": "p", "text": "Oposto significa do outro lado do ângulo; adjacente significa tocando-o, ao lado da hipotenusa. Os rótulos invertem quando o ângulo de referência muda. Correção: posicione-se no ângulo [[A]] e nomeie cada lado a partir dali." },
          { "kind": "h3", "text": "4. Usar o Ângulo B em Vez do Ângulo A Sem Trocar o Lado Correspondente" },
          { "kind": "p", "text": "O ângulo [[B]] emparelha com os lados [[a]] e [[c]], não com [[b]] e [[c]]. Inserir [[B]] mantendo [[b]] e [[c]] calcula uma quantidade diferente. Correção: mantenha cada ângulo com seu próprio emparelhamento de lados, ou converta [[B]] para [[A]] primeiro." },
          { "kind": "h3", "text": "5. Usar Radianos Quando a Calculadora Espera Graus" },
          { "kind": "p", "text": "Inserir 0.6435 (radianos) onde 36.87 (graus) deveria estar muda [[\\sin(A)]] completamente. Correção: verifique a unidade da calculadora, converta com [[\\times\\frac{180}{\\pi}]] se necessário, depois digite." },
          { "kind": "h3", "text": "6. Esquecer de Dividir por Dois" },
          { "kind": "p", "text": "Multiplicar [[b\\times c\\times\\sin(A)]] dá a área do paralelogramo envolvente, o dobro da do triângulo. Correção: divida o produto pela metade; o /2 faz parte da fórmula, não é opcional." },
          { "kind": "h3", "text": "7. Esquecer a Função Seno" },
          { "kind": "p", "text": "Calcular [[\\frac{bc}{2}]] sozinho trata [[\\sin(A)]] como 1, o que só vale em 90°, uma entrada aguda impossível. Correção: inclua [[\\sin(A)]]; ele carrega a parte do cateto ausente." },
          { "kind": "h3", "text": "8. Inserir um Cateto Maior que a Hipotenusa" },
          { "kind": "p", "text": "Nenhum cateto pode exceder a hipotenusa, então [[c\\leq b]] significa que um rótulo está errado. Correção: reidentifique os lados; a medida mais longa é [[c]]." },
          { "kind": "h3", "text": "9. Inserir um Ângulo de 0 Graus" },
          { "kind": "p", "text": "Em 0°, [[\\sin(A)=0]] e o triângulo colapsa em uma linha com área zero. Correção: use um ângulo agudo genuíno, estritamente entre 0° e 90°." },
          { "kind": "h3", "text": "10. Inserir um Ângulo de 90 Graus como Ângulo Agudo" },
          { "kind": "p", "text": "90° é o ângulo reto [[C]], não um ângulo agudo; [[\\sin(90^\\circ)=1]] transforma a fórmula em [[\\frac{bc}{2}]], que não é a área deste triângulo. Correção: digite o ângulo agudo entre [[b]] e [[c]]." },
          { "kind": "h3", "text": "11. Misturar Diferentes Unidades de Comprimento" },
          { "kind": "p", "text": "[[b=400\\text{ cm}]] com [[c=5\\text{ m}]] multiplica escalas incompatíveis. Correção: converta ambos para uma unidade (400 cm = 4 m) antes de calcular." },
          { "kind": "h3", "text": "12. Informar a Área em Unidades Lineares" },
          { "kind": "p", "text": "Uma área de 6 m² não é 6 m. Correção: escreva a unidade quadrada com o número, sempre." },
          { "kind": "h3", "text": "13. Arredondar o Ângulo Cedo Demais" },
          { "kind": "p", "text": "Arredondar 36.869897° para 36.87° antes de tomar o seno desloca levemente o resultado; arredondar para 37° desloca mais. Correção: mantenha precisão total até a resposta final." },
          { "kind": "h3", "text": "14. Supor que as Três Entradas Podem Ser Escolhidas Independentemente" },
          { "kind": "p", "text": "[[b]], [[c]] e [[A]] estão ligados por [[b=c\\cos(A)]]; escolher os três livremente sobredetermina o triângulo. Correção: derive o terceiro valor dos outros dois em vez de inventá-lo." },
          { "kind": "h3", "text": "15. Usar um Ângulo Inconsistente com os Comprimentos de Lado Inseridos" },
          { "kind": "p", "text": "[[b=8]], [[c=10]], [[A=60^\\circ]] falha na verificação, já que [[10\\cos(60^\\circ)=5\\neq8]]. A fórmula ainda retorna um número, mas não é a área deste triângulo retângulo. Correção: execute a verificação [[b=c\\cos(A)]]." },
          { "kind": "h3", "text": "16. Supor que um Resultado Numérico da Calculadora Sempre Representa um Triângulo Retângulo Válido" },
          { "kind": "p", "text": "A aritmética funciona em quaisquer números digitados; a geometria não. Correção: verifique com as checagens de consistência e uma fórmula independente antes de confiar na resposta." },
          { "kind": "h3", "text": "Errado Versus Correto: Um Exemplo Concreto" },
          { "kind": "p", "text": "Use [[b=4]], [[c=5]], [[A=36.87^\\circ]]. Correto: [[K=\\frac{4\\times5\\times0.6}{2}=6]]. Inserindo incorretamente o ângulo [[B=53.13^\\circ]] com os mesmos lados: [[K=\\frac{4\\times5\\times0.8}{2}=8]]. O ângulo [[B]] não é o ângulo incluído entre [[b]] e [[c]]; seu emparelhamento correto de lados é [[a]] e [[c]]. O erro é invisível na aritmética e óbvio na geometria." }
        ]
      },
      "sec-verify": {
        "h2": "Como Verificar se a Área do seu Triângulo Retângulo Está Correta",
        "blocks": [
          { "kind": "p", "text": "Sete verificações independentes, todas demonstradas no triângulo 3-4-5 ([[a=3]], [[b=4]], [[c=5]], [[A\\approx36.87^\\circ]]). A concordância entre rotas diferentes é a evidência mais forte de que uma resposta está certa." },
          { "kind": "h3", "text": "Método 1: Verifique a Fórmula Principal" },
          { "kind": "p", "text": "Recalcule [[K=\\frac{bc\\sin(A)}{2}]]: [[\\frac{4\\times5\\times0.6}{2}=6]]. Uma segunda passagem pega erros de digitação e ângulos mal inseridos." },
          { "kind": "h3", "text": "Método 2: Verifique a Relação do Cosseno" },
          { "kind": "p", "text": "Confirme [[b=c\\cos(A)]]: [[5\\times\\cos(36.87^\\circ)=5\\times0.8=4]]. Uma divergência significa que o ângulo e os lados pertencem a triângulos diferentes." },
          { "kind": "h3", "text": "Método 3: Calcule o Cateto Ausente" },
          { "kind": "p", "text": "Confirme [[a=c\\sin(A)]]: [[5\\times0.6=3]]. Isso verifica o valor do seno que alimenta a fórmula da área." },
          { "kind": "h3", "text": "Método 4: Verifique o Teorema de Pitágoras" },
          { "kind": "p", "text": "Confirme [[a^2+b^2=c^2]]: [[9+16=25]]. A falha aqui significa que a identificação dos lados está errada." },
          { "kind": "h3", "text": "Método 5: Verifique Usando os Dois Catetos" },
          { "kind": "p", "text": "Confirme [[K=\\frac{ab}{2}]]: [[\\frac{3\\times4}{2}=6]]. Dois métodos, um triângulo, uma resposta." },
          { "kind": "h3", "text": "Método 6: Verifique os Ângulos Complementares" },
          { "kind": "p", "text": "Confirme [[A+B=90^\\circ]]: [[36.87^\\circ+53.13^\\circ=90^\\circ]]. Isso pega um ângulo medido no canto errado." },
          { "kind": "h3", "text": "Método 7: Verifique a Área Máxima" },
          { "kind": "p", "text": "Confirme [[K\\leq\\frac{c^2}{4}]]: [[6\\leq\\frac{25}{4}=6.25]]. Uma área acima do teto é impossível para a hipotenusa dada." }
        ]
      },
      "sec-applications": {
        "h2": "Área de Triângulo Retângulo a Partir de Cateto e Ângulo na Prática",
        "blocks": [
          { "kind": "p", "text": "As mesmas três entradas aparecem em lugares que nunca mencionam trigonometria. Um vidraceiro mede o cateto e a diagonal de uma janela e lê o ângulo no caixilho; um telhadista conhece a hipotenusa do suporte pelo comprimento da viga e o ângulo pela inclinação. Em cada caso, o lado perpendicular ausente é o difícil de alcançar com a fita, enquanto a hipotenusa e o ângulo estão à mão. A fórmula do seno existe exatamente para essa assimetria: ela converte as medidas acessíveis na altura inacessível e depois na área." },
          { "kind": "p", "text": "Os quatro painéis abaixo mostram o padrão em diferentes escalas. Uma janela de vidro (6 m²) e um perfil de rampa (24 m²) usam geometria 3-4-5 e 6-8-10 em escala de metros; um suporte de telhado (30 ft²) usa o triângulo 5-12-13; uma seção topográfica (84 m²) usa 7-24-25. Cada painel rotula o cateto adjacente, a hipotenusa, o ângulo incluído e a área resultante, de modo que o caminho da medida à resposta permaneça visível." }
        ],
        "imgAlt": "Quatro painéis: janela de vidro 6 m2, painel de telhado 30 ft2, perfil de rampa 24 m2, seção topográfica 84 m2",
        "figcaption": "Quatro usos reais: janela, suporte de telhado, perfil de rampa e seção topográfica com suas áreas."
      },
      "sec-related": {
        "h2": "Explore Calculadoras Relacionadas de Triângulos Retângulos",
        "blocks": [
          { "kind": "p", "text": "Medidas diferentes pedem calculadoras diferentes." }
        ]
      },
      "sec-faq": {
        "h2": "Perguntas Frequentes",
        "blocks": [
          { "kind": "p", "text": "Abaixo estão as respostas às perguntas mais comuns sobre a área a partir de um cateto e um ângulo." }
        ]
      },
      "sec-conclusion": {
        "h2": "Três Entradas Carregam Toda a Área",
        "blocks": [
          { "kind": "p", "text": "Um cateto, a hipotenusa e o ângulo entre eles acabam sendo suficientes. A razão do seno reconstrói o cateto ausente, a divisão pela metade converte o retângulo envolvente no triângulo, e as relações de consistência permitem que cada entrada seja verificada contra as outras. Nada no método é aproximado quando as entradas são exatas." },
          { "kind": "p", "text": "O hábito de trabalho é simples: rotule os lados a partir do ângulo A, mantenha as unidades combinadas, confirme b = c cos(A) e verifique a resposta através da fórmula dos catetos. Com esses hábitos, K = bc sin(A)/2 é tão confiável quanto qualquer cálculo de área na geometria." }
        ]
      }
    }
  },
  "bn": {
    "faqs": [
      {
        "question": "একটি লম্ব বাহু ও একটি কোণ ব্যবহার করে ক্ষেত্রফলের সূত্র কী?",
        "answer": "K = bc sin(A) / 2, যেখানে b হলো কোণ A-এর সন্নিহিত লম্ব বাহু, c হলো অতিভুজ, এবং A হলো এদের মধ্যবর্তী সূক্ষ্মকোণ। উদাহরণস্বরূপ, b = 4, c = 5 এবং A = 36.87° হলে K = (4 × 5 × 0.6) / 2 = 6 বর্গ একক। কোণটি ডিগ্রিতে দিতে হবে, এবং দুটি বাহুর দৈর্ঘ্য একই এককে হতে হবে।"
      },
      {
        "question": "সূত্রে সাইন ব্যবহার করা হয় কেন?",
        "answer": "সাইন অতিভুজ থেকে অনুপস্থিত লম্ব উচ্চতা ফিরে পায়: যেহেতু sin(A) = a/c, দুই পক্ষকে c দিয়ে গুণ করলে পাওয়া যায় a = c sin(A)। ক্ষেত্রফলের সাধারণ নিয়মে দুটি লম্ব বাহুই দরকার, K = ab/2, তাই a-এর জায়গায় সাইনের রাশিমালা বসালে দাঁড়ায় K = bc sin(A)/2। সাইন হলো পরিমাপ করা অতিভুজ ও অপরিমিত উচ্চতার মধ্যকার সেতু।"
      },
      {
        "question": "কোণ A-এর সন্নিহিত বাহু কোনটি?",
        "answer": "লম্ব বাহু b হলো কোণ A-এর সন্নিহিত: এটি সেই কোণ গঠনকারী দুটি বাহুর একটি, অন্যটি অতিভুজ c। লম্ব বাহু a কোণ A-এর বিপরীত, ত্রিভুজের ওপারে অবস্থিত। রেফারেন্স কোণ B-তে বদলালে নামকরণ উল্টে যায়: b হয় বিপরীত বাহু এবং a হয় সন্নিহিত বাহু।"
      },
      {
        "question": "অনুপস্থিত বাহু না জেনে কি ক্ষেত্রফল বের করা যায়?",
        "answer": "হ্যাঁ, এটাই এই ক্যালকুলেটরের মূল উদ্দেশ্য। কোণ A-এর সাইন অতিভুজের সাপেক্ষে অনুপস্থিত বাহুর অনুপাত সংরক্ষণ করে, তাই c sin(A) বাহুটিকে না মেপেই a-কে পুনর্গঠন করে। b, c ও A লিখুন, বাকিটা সূত্র সামলে নেবে। তৃতীয় বাহুটি আলাদা ইনপুট হিসেবে কখনো দরকার হয় না।"
      },
      {
        "question": "কোণ A ও কোণ B-এর মধ্যে পার্থক্য কী?",
        "answer": "দুটোই সমকোণ ত্রিভুজের সূক্ষ্মকোণ, এবং A + B = 90°। কোণ A বাহু b ও অতিভুজ c-এর মধ্যে; কোণ B বাহু a ও অতিভুজ c-এর মধ্যে। K = bc sin(A)/2 সূত্রে বিশেষভাবে কোণ A-ই দরকার। b ও c বাহুর সঙ্গে কোণ B ব্যবহার করলে ভুল উত্তর আসে; কোণ B জুটি বাঁধে a ও c বাহুর সঙ্গে।"
      },
      {
        "question": "ক্যালকুলেটরে কি ডিগ্রি না রেডিয়ান ব্যবহার হয়?",
        "answer": "ডিগ্রি। রেডিয়ান মান দিলে সম্পূর্ণ ভিন্ন সাইন ও ভুল ক্ষেত্রফল পাওয়া যায়। আগে রেডিয়ানকে ডিগ্রিতে রূপান্তর করুন: ডিগ্রি = রেডিয়ান × 180/π; উদাহরণস্বরূপ, π/6 রেডিয়ান 30°-এর সমান। গণনার আগে সবসময় কোণের একক নিশ্চিত করুন।"
      },
      {
        "question": "দেওয়া বাহু ও অতিভুজের সঙ্গে কি যেকোনো কোণ ব্যবহার করা যায়?",
        "answer": "না। তিনটি ইনপুটকে b = c cos(A) সন্তুষ্ট করতে হয়, তাই বাহু বাছা হলে কোণ স্থির হয়ে যায়। b = 4 ও c = 5 হলে কোণ A-কে প্রায় 36.87° হতে হবে। ভিন্ন কোণ দিলে ভিন্ন ত্রিভুজ বর্ণনা করা হয়, এবং ফল কাঙ্ক্ষিত সমকোণ ত্রিভুজের সঙ্গে মিলবে না।"
      },
      {
        "question": "আমার পরিমাপগুলো বৈধ সমকোণ ত্রিভুজ গঠন করে কিনা যাচাই করব কীভাবে?",
        "answer": "তিনটি শর্ত যাচাই করুন: অতিভুজ বাহুর চেয়ে বড় (c > b > 0), কোণ কঠোরভাবে 0° ও 90°-এর মধ্যে, এবং b = c cos(A) সত্য। বাড়তি নিশ্চয়তার জন্য a = c sin(A) ও পিথাগোরাসের উপপাদ্য a² + b² = c² পরীক্ষা করুন। কোনো পরীক্ষা ব্যর্থ হলে অন্তত একটি পরিমাপ বা নামকরণ ভুল।"
      },
      {
        "question": "দুটি বাহুই জানা থাকলে কি ক্ষেত্রফল বের করা যায়?",
        "answer": "হ্যাঁ, এবং ছোট সূত্র K = ab/2 সরাসরি প্রযোজ্য হয়, কোণ বা সাইনের দরকার নেই। বাহু 3 ও 4 হলে K = 6। সাইন-ভিত্তিক ক্যালকুলেটরটি সেই ক্ষেত্রের জন্য যখন একটি বাহু অনুপস্থিত; দুটি বাহুই জানা থাকলে বাহুর সূত্রই সহজ এবং একই ফল দেয়।"
      },
      {
        "question": "ভুল কোণ দিলে কী হবে?",
        "answer": "ক্যালকুলেটর যা পায় তাই গুণ করে, তাই ভুল কোণে কোনো সতর্কতা ছাড়াই ভুল ক্ষেত্রফল আসে। b = 4 ও c = 5-এর সঙ্গে A = 36.87°-এর বদলে B = 53.13° দিলে 6-এর বদলে 8 আসে। দেওয়া কোণটি বাহু b ও অতিভুজের মধ্যবর্তী কিনা সবসময় নিশ্চিত করুন।"
      },
      {
        "question": "নির্দিষ্ট অতিভুজের জন্য সর্বোচ্চ সম্ভাব্য ক্ষেত্রফল কত?",
        "answer": "K = c²/4, যা পৌঁছায় যখন কোণ A = 45° এবং ত্রিভুজটি সমদ্বিবাহু, বাহু c/√2 করে। অতিভুজ 10 হলে সর্বোচ্চ 25 বর্গ একক। সেই অতিভুজের কোনো সমকোণ ত্রিভুজ এর চেয়ে বেশি ক্ষেত্রফল ঘিরতে পারে না। ফল c²/4 ছাড়িয়ে গেলে ইনপুটগুলো অসঙ্গতিপূর্ণ।"
      },
      {
        "question": "সাইন-ভিত্তিক সূত্র ও সাধারণ ভূমি-উচ্চতা সূত্রের পার্থক্য কী?",
        "answer": "গাণিতিক কোনো পার্থক্য নেই: K = bc sin(A)/2-এ sin(A) = a/c বসালে পাওয়া যায় K = ab/2, যা সাধারণ ভূমি-উচ্চতা নিয়ম। সাইন সংস্করণটি একই সূত্র, শুধু ভিন্ন জানা মানের জন্য পুনর্লিখিত। অতিভুজ ও কোণ জানা থাকলে সাইন রূপটি ব্যবহার করুন; দুটি বাহু জানা থাকলে ab/2 ব্যবহার করুন।"
      }
    ],
    "relatedHeading": "সম্পর্কিত সমকোণ ত্রিভুজ ক্যালকুলেটরগুলো দেখুন",
    "relatedItems": [
      "সমকোণ ত্রিভুজ ক্ষেত্রফল ক্যালকুলেটর",
      "বাহু থেকে সমকোণ ত্রিভুজ ক্ষেত্রফল ক্যালকুলেটর",
      "কোণ থেকে সমকোণ ত্রিভুজ ক্ষেত্রফল ক্যালকুলেটর",
      "কোণ থেকে সমকোণ ত্রিভুজ বাহু ক্যালকুলেটর",
      "সমকোণ ত্রিভুজ বাহু ক্যালকুলেটর",
      "সমকোণ ত্রিভুজ ত্রিকোণমিতিক অনুপাত ক্যালকুলেটর"
    ],
    "relatedIntro": "ভিন্ন ভিন্ন পরিমাপের জন্য ভিন্ন ভিন্ন ক্যালকুলেটর দরকার।",
    "faqHeading": "প্রায়শই জিজ্ঞাসিত প্রশ্ন",
    "tocHeading": "এই নির্দেশিকায়",
    "tocItems": {
      "sec-intro": "একটি লম্ব বাহু ও একটি কোণ ব্যবহার করে সমকোণ ত্রিভুজের ক্ষেত্রফল কীভাবে বের করবেন",
      "sec-anatomy": "সমকোণ ত্রিভুজের বাহু ও কোণ বোঝা",
      "sec-sine": "সমকোণ ত্রিভুজ গণনায় সাইন ফাংশন বোঝা",
      "sec-formula": "সমকোণ ত্রিভুজের ক্ষেত্রফল সূত্রে সাইন কেন ব্যবহার হয়?",
      "sec-howto": "লম্ব বাহু ও কোণ থেকে সমকোণ ত্রিভুজ ক্ষেত্রফল ক্যালকুলেটর কীভাবে ব্যবহার করবেন",
      "sec-consistency": "আপনার বাহু, অতিভুজ ও কোণ বৈধ সমকোণ ত্রিভুজ গঠন করে কিনা যাচাই করবেন কীভাবে",
      "sec-examples": "একটি লম্ব বাহু ও কোণ ব্যবহার করে সমকোণ ত্রিভুজ ক্ষেত্রফলের ধাপে ধাপে উদাহরণ",
      "sec-practical": "লম্ব বাহু ও কোণ থেকে সমকোণ ত্রিভুজ ক্ষেত্রফলের বাস্তব জীবনের প্রয়োগ",
      "sec-compare": "সাইন-ভিত্তিক সূত্র কেন বাহুর সূত্রের সমান ক্ষেত্রফল দেয়?",
      "sec-angle-effect": "অন্তর্ভুক্ত কোণ সমকোণ ত্রিভুজের ক্ষেত্রফলে কীভাবে প্রভাব ফেলে?",
      "sec-alternative": "একটি বাহু ও তার কোণ দিয়ে কি সমকোণ ত্রিভুজের ক্ষেত্রফল বের করা যায়?",
      "sec-units": "ক্ষেত্রফল গণনায় কোণের একক ও পরিমাপ বোঝা",
      "sec-mistakes": "একটি লম্ব বাহু ও কোণ থেকে সমকোণ ত্রিভুজের ক্ষেত্রফল বের করতে সাধারণ ভুল",
      "sec-verify": "আপনার সমকোণ ত্রিভুজের ক্ষেত্রফল সঠিক কিনা যাচাই করবেন কীভাবে",
      "sec-applications": "বাস্তবে লম্ব বাহু ও কোণ থেকে সমকোণ ত্রিভুজ ক্ষেত্রফল",
      "sec-related": "সম্পর্কিত সমকোণ ত্রিভুজ ক্যালকুলেটরগুলো দেখুন",
      "sec-faq": "প্রায়শই জিজ্ঞাসিত প্রশ্ন",
      "sec-conclusion": "তিনটি ইনপুটেই পুরো ক্ষেত্রফল"
    },
    "sections": {
      "sec-intro": {
        "h2": "একটি লম্ব বাহু ও একটি কোণ ব্যবহার করে সমকোণ ত্রিভুজের ক্ষেত্রফল কীভাবে বের করবেন",
        "blocks": [
          { "kind": "p", "text": "নিন [[b=4]], [[c=5]] ও [[A=36.87^\\circ]]। প্রয়োগ করুন [[K=\\frac{bc\\sin(A)}{2}]]: [[K=\\frac{4\\times5\\times0.6}{2}]], [[[\\boxed{K=6\\text{ square units}}]]] ফলটি তিনটি বাহু ঘিরে থাকা মোট সমতল ক্ষেত্রের নাম দেয়: ছয় বর্গ একক পৃষ্ঠ। এই ইনপুটগুলোর জন্য লম্ব বাহু ও কোণ থেকে সমকোণ ত্রিভুজ ক্ষেত্রফল ক্যালকুলেটর ঠিক এটাই দেয়।" },
          { "kind": "p", "text": "ক্যালকুলেটর তিনটি পরিমাপ চায়। লম্ব বাহু [[b]] কোণ [[A]]-এর পাশে বসে; অতিভুজ [[c]] সবচেয়ে লম্বা বাহু, সমকোণের বিপরীতে; এবং কোণ [[A]] হলো এদের মধ্যে চাপা সূক্ষ্মকোণ। যেহেতু [[\\sin(A)]] অনুপস্থিত বাহু [[a]] ও অতিভুজ [[c]]-এর অনুপাতের সমান, সূত্রটি না মেপেই অনুপস্থিত উচ্চতা পুনর্গঠন করে। [[b]], [[c]] ও [[\\sin(A)]]-কে গুণ করলে ঘেরা আয়তক্ষেত্র তৈরি হয়; দুই দিয়ে ভাগ করলে তা ত্রিভুজে ছাঁটা হয়।" },
          { "kind": "p", "text": "তৃতীয় বাহু মাপা কঠিন হলেই এটি গুরুত্বপূর্ণ হয়। একটি চিত্রে অতিভুজ ও একটি বাহু দেওয়া থাকতে পারে, আর প্রোট্রাক্টর বা আগের ধাপ থেকে কোণ পাওয়া যায়। সাইন ফাঁক পূরণ করে, ফলে যা জানা আছে তা থেকেই ক্ষেত্রফল বের হয়।" }
        ]
      },
      "sec-anatomy": {
        "h2": "সমকোণ ত্রিভুজের বাহু ও কোণ বোঝা",
        "blocks": [
          { "kind": "p", "text": "সূত্র বোধগম্য হওয়ার আগে নামকরণ একদম সঠিক হতে হবে। নিচের প্রতিটি প্রতীক ক্যালকুলেটরে আছে, এবং প্রতিটির একটি নির্দিষ্ট অর্থ আছে।" },
          { "kind": "h3", "text": "সমকোণ ত্রিভুজ কী?" },
          { "kind": "p", "text": "সমকোণ ত্রিভুজ হলো এমন ত্রিভুজ যার একটি অন্তঃকোণ 90 ডিগ্রির সমান। সেই কোণ গঠনকারী দুটি বাহু হলো লম্ব বাহু, পরস্পরের ওপর লম্ব; সমকোণের বিপরীত বাহু হলো অতিভুজ। তিনটি অন্তঃকোণের যোগফল 180 ডিগ্রি হওয়ায় দুটি সূক্ষ্মকোণ [[A+B=90^\\circ]] সন্তুষ্ট করে, ফলে এরা পরস্পরের পূরক: একটিকে জানলেই অন্যটি নির্ধারিত হয়।" },
          { "kind": "h3", "text": "অতিভুজ কী?" },
          { "kind": "p", "text": "অতিভুজ হলো সমকোণের বিপরীত বাহু। ত্রিভুজ যেভাবেই ঘোরানো বা আঁকা হোক, এটি সবসময় সবচেয়ে লম্বা বাহু। ক্যালকুলেটর এটিকে বাহু [[c]] হিসেবে ব্যবহার করে, তাই সঠিকভাবে চেনাই প্রথম ধাপ: সমকোণটি খুঁজুন, তারপর তার বিপরীত বাহুটি নিন। বাঁকা চিত্রে যতই লম্বা দেখাক, কোনো লম্ব বাহু এই ভূমিকা নিতে পারে না।" },
          { "kind": "h3", "text": "দুটি লম্ব বাহু কী?" },
          { "kind": "p", "text": "দুটি লম্ব বাহু হলো সেই বাহুগুলো যেগুলো সমকোণে মিলিত হয়, পরস্পরের ওপর লম্ব। লম্ব বাহু [[a]] কোণ [[A]]-এর বিপরীতে বসে; লম্ব বাহু [[b]] কোণ [[B]]-এর বিপরীতে বসে। ক্যালকুলেটর লম্ব বাহু [[b]]-কে, অর্থাৎ কোণ [[A]]-এর সন্নিহিতটিকে, প্রথম ইনপুট হিসেবে নেয়। দুটি লম্ব বাহু মিলে সেই কোণাটি তৈরি করে যেখানে 90 ডিগ্রি কোণ থাকে।" },
          { "kind": "h3", "text": "কোণ A বোঝা" },
          { "kind": "p", "text": "কোণ [[A]] হলো লম্ব বাহু [[b]] ও অতিভুজ [[c]]-এর তৈরি সূক্ষ্মকোণ। এটি ক্যালকুলেটরের দুটি বাহু ইনপুটের অন্তর্ভুক্ত কোণ, তাই [[\\angle A=\\text{angle between }b\\text{ and }c]]। এই জুটিবদ্ধতা স্থির: সূত্রে যেখানেই [[A]] বলা হবে, তার অর্থ লম্ব বাহু [[b]]-এর দূরপ্রান্তের কোণা নয়, বরং সেই কোণা যেখানে জানা বাহু অতিভুজের সঙ্গে মিলিত হয়।" },
          { "kind": "h3", "text": "কোণ A-এর সাপেক্ষে বিপরীত ও সন্নিহিত বাহু" },
          { "kind": "p", "text": "কোণ [[A]]-এ দাঁড়িয়ে ত্রিভুজের ওপারে তাকান। যে বাহুটির মুখোমুখি হলেন কিন্তু স্পর্শ করলেন না, সেটি বিপরীত বাহু; অতিভুজের পাশে কোণটি গঠনকারী বাহুটি সন্নিহিত বাহু। এই নামকরণ রেফারেন্স কোণ অনুসরণ করে, তাই রেফারেন্স [[A]] থেকে [[B]]-তে বদলালে কোন বাহু কোনটি তা অদলবদল হয়।" },
          { "kind": "h3", "text": "অন্তর্ভুক্ত কোণ বোঝা" },
          { "kind": "p", "text": "অন্তর্ভুক্ত কোণ হলো বাছাই করা দুটি বাহুর তৈরি কোণ। ক্ষেত্রফলের সূত্র [[b]] ও [[c]]-কে গুণ করে, তাই এর দরকার সেই কোণ যা এদের মধ্যে আটকা: কোণ [[A]]। এই ক্যালকুলেটরের জন্য সঠিক জুটি হলো [[b,\\;c,\\;A]]। একই দুটি বাহুর সঙ্গে অন্য কোনো কোণ ব্যবহার করলে সূত্রের ধরে নেওয়া জুটি ভেঙে যায়, তাই কোণ [[A]]-কে কোণ [[B]]-এর সঙ্গে গুলিয়ে ফেলবেন না।" }
        ],
        "imgAlt": "সমকোণ ত্রিভুজ ABC: লম্ব বাহু b ও অতিভুজ c হাইলাইট করা, অন্তর্ভুক্ত কোণ A, অনুপস্থিত বাহু a-কে নাম দেওয়া",
        "figcaption": "ত্রিভুজ ABC: হাইলাইট করা সন্নিহিত লম্ব বাহু b ও অতিভুজ c অন্তর্ভুক্ত কোণ A গঠন করে; বাহু a হলো অনুপস্থিত বিপরীত বাহু।"
      },
      "sec-sine": {
        "h2": "সমকোণ ত্রিভুজ গণনায় সাইন ফাংশন বোঝা",
        "blocks": [
          { "kind": "p", "text": "সাইন একটি অনুপাত, দৈর্ঘ্য নয়। সূক্ষ্মকোণের জন্য [[[\\boxed{\\sin(A)=\\frac{\\text{Opposite}}{\\text{Hypotenuse}}}]]] এই ত্রিভুজে তা হয় [[[\\boxed{\\sin(A)=\\frac{a}{c}}]]] অনুপাতটি কোণের বিপরীত বাহুকে সবচেয়ে লম্বা বাহুর সঙ্গে তুলনা করে, তাই এটি এককহীন বিশুদ্ধ সংখ্যা। সূক্ষ্মকোণের জন্য এর মান সবসময় 0 ও 1-এর মধ্যে থাকে, এবং এটাই এক বাহুকে অন্য বাহুর প্রতিনিধি হতে দেয়।" },
          { "kind": "h3", "text": "সাইন কীভাবে অনুপস্থিত বাহু খুঁজতে সাহায্য করে" },
          { "kind": "p", "text": "[[\\sin(A)=\\frac{a}{c}]] থেকে শুরু করুন। দুই পক্ষকে [[c]] দিয়ে গুণ করুন: [[[\\boxed{a=c\\sin(A)}]]] অতিভুজ অনুপাতটিকে আবার দৈর্ঘ্যে বড় করে, এবং সেই দৈর্ঘ্যই অনুপস্থিত বাহু। ক্যালকুলেটর কখনো [[a]] চায় না, কারণ এই এক পুনর্বিন্যাস [[c]] ও [[A]] থেকে তা উদ্ধার করে। ক্ষেত্রফল সূত্রের পরের প্রতিটি ধাপ এই প্রতিস্থাপনের ওপর দাঁড়িয়ে।" },
          { "kind": "h3", "text": "সংখ্যাগত উদাহরণ" },
          { "kind": "p", "text": "দেওয়া [[c=5]] ও [[A=36.87^\\circ]]: [[a=5\\times\\sin(36.87^\\circ)]], [[a=5\\times0.6]], [[[\\boxed{a=3}]]] অনুপস্থিত বাহুর দৈর্ঘ্য 3 একক, যা পরিচিত 3-4-5 ত্রিভুজটি সম্পূর্ণ করে। একটি গুণই আলাদা পরিমাপের বদলে কাজ করেছে।" },
          { "kind": "h3", "text": "সাইন কোসাইন ও ট্যানজেন্ট থেকে কীভাবে আলাদা" },
          { "kind": "p", "text": "কোসাইন সন্নিহিত বাহু ব্যবহার করে: [[\\cos(A)=\\frac{b}{c}]]। ট্যানজেন্ট দুটি লম্ব বাহু ব্যবহার করে: [[\\tan(A)=\\frac{a}{b}]]। প্রতিটি অনুপাত ভিন্ন প্রশ্নের উত্তর দেয়। এই ক্যালকুলেটরের সাইন দরকার, কারণ অজানা রাশি হলো বিপরীত বাহু [[a]] এবং জানা বাহু হলো অতিভুজ [[c]]। জানা মান বদলালে উপযোগী অনুপাতও বদলায়, কিন্তু এই নির্দেশিকায় আর কিছুই সাইন পরিবার ছাড়ে না।" }
        ]
      },
      "sec-formula": {
        "h2": "সমকোণ ত্রিভুজের ক্ষেত্রফল সূত্রে সাইন কেন ব্যবহার হয়?",
        "blocks": [
          { "kind": "p", "text": "সাধারণ নিয়ম থেকে শুরু করুন: [[K=\\frac{\\text{base}\\times\\text{perpendicular height}}{2}]]। এই ত্রিভুজের জন্য স্বাভাবিক ভূমি হলো লম্ব বাহু [[b]] এবং লম্ব উচ্চতা হলো লম্ব বাহু [[a]], যেহেতু লম্ব বাহুগুলো 90 ডিগ্রিতে মিলিত হয়। তাতে পাওয়া যায় [[K=\\frac{ab}{2}]]। ক্যালকুলেটর [[a]] চায় না, তাই সূত্রটিকে তা পুনর্গঠন করতে হয়। সাইন অনুপাত থেকে, [[a=c\\sin(A)]]। বসান: [[K=\\frac{b(c\\sin(A))}{2}]], অর্থাৎ [[[\\boxed{K=\\frac{bc\\sin(A)}{2}}]]] দুই দিয়ে ভাগ ভূমি-উচ্চতা নিয়ম থেকে টিকে আছে; সাইন গুণকটি ছদ্মবেশী অনুপস্থিত বাহু।" },
          { "kind": "h3", "text": "সূত্রকে দুই দিয়ে ভাগ করা হয় কেন?" },
          { "kind": "p", "text": "দেওয়া ভূমি ও লম্ব উচ্চতার ত্রিভুজ একই ভূমি ও উচ্চতার ওপর নির্মিত সামান্তরিকের ঠিক অর্ধেক পূরণ করে। যেকোনো ত্রিভুজকে একটি বাহু বরাবর দ্বিগুণ করলে সেই সামান্তরিক সম্পূর্ণ হয়, তাই ত্রিভুজটি তার অর্ধেক ক্ষেত্রের মালিক। দুই দিয়ে ভাগ জ্যামিতি, প্রথা নয়, এবং ভূমি ও উচ্চতা যে সূত্রই দিক না কেন তা প্রযোজ্য।" },
          { "kind": "h3", "text": "সাইন কীভাবে অনুপস্থিত উচ্চতার বদলে কাজ করে?" },
          { "kind": "p", "text": "[[K=\\frac{ab}{2}]]-এর লম্ব উচ্চতা হলো লম্ব বাহু [[a]]। যেহেতু [[\\sin(A)=\\frac{a}{c}]], অতিভুজকে সাইন দিয়ে গুণ করলে মাত্রাহীন অনুপাতটি আবার [[a]] দৈর্ঘ্যে প্রসারিত হয়। ব্যবহারকারী [[a]]-এর বদলে [[c]] ও [[A]] মাপে, এবং [[c\\sin(A)]] গুণফলটি সূত্রের ভেতরে নীরবে রূপান্তরটি সম্পন্ন করে।" },
          { "kind": "h3", "text": "অতিভুজকে সন্নিহিত বাহু দিয়ে গুণ করা হয় কেন?" },
          { "kind": "p", "text": "যেকোনো ত্রিভুজের সাধারণ নিয়ম হলো দুটি বাহু ও তাদের অন্তর্ভুক্ত কোণ ক্ষেত্রফল নির্ধারণ করে। এখানে জানা দুটি বাহু হলো [[b]] ও [[c]], এবং তাদের অন্তর্ভুক্ত কোণ হলো [[A]]। সূত্রটি ঠিক এই দুটি বাহুকে গুণ করে, তারপর [[\\sin(A)]] দিয়ে স্কেল করে অর্ধেক করে। বাহুর অন্য কোনো জুটি ভিন্ন অন্তর্ভুক্ত কোণ দাবি করত।" },
          { "kind": "h3", "text": "এই সূত্র কি অন্য ত্রিভুজেও কাজ করে?" },
          { "kind": "p", "text": "হ্যাঁ, এর সাধারণ রূপে: [[[\\boxed{K=\\frac{xy\\sin(\\theta)}{2}}]]], যেখানে [[x]] ও [[y]] যেকোনো দুটি বাহু এবং [[\\theta]] এদের মধ্যবর্তী কোণ। সমকোণ ত্রিভুজ সংস্করণটি সেই নিয়মেরই [[x=b]], [[y=c]] ও [[\\theta=A]] রূপ। ক্যালকুলেটর একটি বিধিনিষেধ যোগ করে: তিনটি ইনপুটকে সমকোণ ত্রিভুজের সম্পর্কও সন্তুষ্ট করতে হবে, যেমন [[b=c\\cos(A)]]। সাধারণ সূত্র যেকোনো অন্তর্ভুক্ত-কোণ জুটির জন্য ক্ষেত্রফল গণনা করে; এই ক্যালকুলেটর ফলটিকে সমকোণ ত্রিভুজ হিসেবে ব্যাখ্যা করে।" }
        ],
        "imgAlt": "3-4-5 ত্রিভুজ: sin A সমান 3/5 থেকে বাহু a = 3 উদ্ধার, দুটি সূত্রেই ক্ষেত্রফল 6",
        "figcaption": "সাইন থেকে ক্ষেত্রফলে: sin A = 3/5 থেকে a = 3, তাই K = bc sin A / 2 = 6, যা K = ab/2-এর সঙ্গে মেলে।"
      },
      "sec-howto": {
        "h2": "লম্ব বাহু ও কোণ থেকে সমকোণ ত্রিভুজ ক্ষেত্রফল ক্যালকুলেটর কীভাবে ব্যবহার করবেন",
        "blocks": [
          { "kind": "p", "text": "ক্যালকুলেটরের ঠিক তিনটি ইনপুট দরকার, ক্রমানুসারে। নিচের ধাপগুলো পর্দার বিন্যাস অনুসরণ করে, জানা পরিমাপ থেকে যাচাই করা ফল পর্যন্ত।" }
        ],
        "steps": [
          "<strong>সন্নিহিত লম্ব বাহু b চিহ্নিত করুন।</strong> সেই বাহু যা অতিভুজের সঙ্গে কোণ A গঠন করে।",
          "<strong>অতিভুজ c চিহ্নিত করুন।</strong> সবচেয়ে লম্বা বাহু, সমকোণের বিপরীতে।",
          "<strong>অন্তর্ভুক্ত সূক্ষ্মকোণ A চিহ্নিত করুন।</strong> বাহু b ও অতিভুজ c-এর মধ্যবর্তী কোণ।",
          "<strong>দুটি বাহুর জন্য সামঞ্জস্যপূর্ণ একক ব্যবহার করুন।</strong> মিটারের সঙ্গে মিটার, ফুটের সঙ্গে ফুট, কখনো মিশ্রিত নয়।",
          "<strong>প্রথম ইনপুটে বাহু b লিখুন।</strong> এটি কোণ A-এর সন্নিহিত বাহু।",
          "<strong>দ্বিতীয় ইনপুটে অতিভুজ c লিখুন।</strong> এটি বাহু b-কে ছাড়িয়ে যেতে হবে।",
          "<strong>কোণ A ডিগ্রিতে লিখুন।</strong> ক্যালকুলেটর ডিগ্রি আশা করে, রেডিয়ান নয়।",
          "<strong>কোণটি 0 ও 90 ডিগ্রির মধ্যে আছে কিনা পরীক্ষা করুন।</strong> প্রান্তিক মানগুলো কোনো ত্রিভুজ বর্ণনা করে না।",
          "<strong>যাচাই করুন অতিভুজ বাহুর চেয়ে লম্বা কিনা।</strong> c যদি b-এর চেয়ে বড় না হয়, তবে কোনো নামকরণ ভুল।",
          "<strong>যাচাই করুন তিনটি মান একটি সমকোণ ত্রিভুজ বর্ণনা করে কিনা।</strong> নিশ্চিত করুন b প্রায় c cos(A)-এর সমান।",
          "<strong>ক্ষেত্রফল গণনা করুন-এ ক্লিক করুন।</strong> প্রতিস্থাপনসহ ফল দেখা দেয়।",
          "<strong>ফল পর্যালোচনা করুন।</strong> ক্ষেত্রফল পড়ুন এবং যৌক্তিক মনে হচ্ছে কিনা নিশ্চিত করুন।",
          "<strong>সমাধানের ধাপগুলো পড়ুন।</strong> এগুলো সূত্র, সাইনের মান ও গাণিতিক হিসাব দেখায়।",
          "<strong>যাচাই করুন চূড়ান্ত ফলে বর্গ একক ব্যবহার হয়েছে কিনা।</strong> ইনপুটের সঙ্গে মিলিয়ে দৈর্ঘ্য এককের বর্গ।",
          "<strong>আরেকটি সমস্যা দেওয়ার আগে রিসেট ব্যবহার করুন।</strong> এটি নতুন শুরুর জন্য তিনটি ক্ষেত্রই সাফ করে।"
        ],
        "closingParagraphs": [
          "পাতাটি একটি ক্যালকুলেটর কনফিগারেশন দেয়: [[b]], [[c]] ও [[A]]। দ্বিতীয় কোনো মোড নেই; এই পাতার প্রতিটি ক্ষেত্রফল উপরের সাইন সূত্র থেকেই আসে।"
        ]
      },
      "sec-consistency": {
        "h2": "আপনার বাহু, অতিভুজ ও কোণ বৈধ সমকোণ ত্রিভুজ গঠন করে কিনা যাচাই করবেন কীভাবে",
        "blocks": [
          { "kind": "p", "text": "তিনটি ইনপুট স্বাধীন নয়। সমকোণ ত্রিভুজে, [[[\\boxed{\\cos(A)=\\frac{b}{c}}]]], অর্থাৎ [[[\\boxed{b=c\\cos(A)}]]] তিনটি মানের যেকোনো দুটি স্থির করলেই তৃতীয়টি নির্ধারিত হয়ে যায়। অসঙ্গত তিনটি সংখ্যা দিলে সূত্রের ধরে নেওয়া ত্রিভুজটি বর্ণনা করা হয় না।" },
          { "kind": "h3", "text": "দুটি বাহুর দৈর্ঘ্য থেকে কোণ পরীক্ষা" },
          { "kind": "p", "text": "[[b]] ও [[c]] জানা থাকলে কোণ বাধ্যতামূলক: [[A=\\cos^{-1}\\left(\\frac{b}{c}\\right)]]। উদাহরণ: [[b=4]], [[c=5]] দিলে [[A=\\cos^{-1}(4/5)]], [[[\\boxed{A\\approx36.87^\\circ}]]]। প্রোট্রাক্টর বা আগের গণনা এই বাহুগুলোর জন্য ভিন্ন কোণ দিলে কোনো সংখ্যা ভুল। বাহুরাই সিদ্ধান্ত নেয়; কোণ অনুসরণ করে।" },
          { "kind": "h3", "text": "কোণ থেকে বাহুর দৈর্ঘ্য পরীক্ষা" },
          { "kind": "p", "text": "পরীক্ষাটি উল্টো দিকেও চলে। [[c=10]] ও [[A=60^\\circ]] দেওয়া থাকলে সন্নিহিত বাহু হতেই হবে [[b=10\\cos(60^\\circ)]], [[[\\boxed{b=5}]]]। একই অতিভুজ ও কোণের সঙ্গে [[b=8]] দিলে একই সমকোণ ত্রিভুজ বর্ণনা করা হবে না, কারণ [[10\\cos(60^\\circ)]] 8 নয়, 5-এর সমান। স্থির অতিভুজের জন্য প্রতিটি কোণ সন্নিহিত বাহুর ঠিক একটি দৈর্ঘ্যই স্বীকার করে।" },
          { "kind": "h3", "text": "ইনপুট অসঙ্গতিপূর্ণ হলে কী হয়?" },
          { "kind": "p", "text": "দুটি বাহু ও অন্তর্ভুক্ত কোণের সাধারণ সূত্র অসঙ্গতিপূর্ণ ইনপুটেও একটি সংখ্যা দেয়, কারণ তা যা পায় তাই গুণ করে। কিন্তু যখন [[b\\neq c\\cos(A)]], তখন পরিমাপগুলো [[c]]-কে অতিভুজ ও [[b]]-কে তার সন্নিহিত বাহু ধরে কোনো সমকোণ ত্রিভুজ বর্ণনা করে না। সংখ্যাগত উত্তর বৈধ জ্যামিতির প্রমাণ নয়; সঙ্গতি পরীক্ষাই প্রমাণ।" },
          { "kind": "h3", "text": "মৌলিক ইনপুট শর্তাবলী" },
          { "kind": "p", "text": "বৈধ ইনপুট [[c>b>0]], [[0^\\circ<A<90^\\circ]] ও [[b=c\\cos(A)]] সন্তুষ্ট করে। প্রথমটি অতিভুজকে সবচেয়ে লম্বা রাখে; দ্বিতীয়টি কোণকে সূক্ষ্ম রাখে; তৃতীয়টি তিনটি মানকে একটি ত্রিভুজে বাঁধে। ক্ষেত্রফলে আস্থা রাখার আগে তিনটিই পরীক্ষা করুন।" }
        ],
        "imgAlt": "তিনটি প্যানেল: বৈধ 4, 5, 36.87 ডিগ্রি; বৈধ 5, 10, 60 ডিগ্রি; অবৈধ 8, 10, 60 ডিগ্রি",
        "figcaption": "বৈধ ইনপুট b = c cos A সন্তুষ্ট করে; তৃতীয় প্যানেলে 10 cos 60 ডিগ্রি = 5, 8-এর সমান নয়।"
      },
      "sec-examples": {
        "h2": "একটি লম্ব বাহু ও কোণ ব্যবহার করে সমকোণ ত্রিভুজ ক্ষেত্রফলের ধাপে ধাপে উদাহরণ",
        "blocks": [
          { "kind": "p", "text": "চারটি ক্লাসিক সমকোণ ত্রিভুজ ক্রমবর্ধমান আকারে পদ্ধতিটি দেখায়। প্রতিটি উদাহরণ সাইন সূত্রে প্রতিস্থাপন করে, তারপর দুটি বাহুর সূত্রে ফল যাচাই করে।" },
          { "kind": "h3", "text": "উদাহরণ 1: 3-4-5 সমকোণ ত্রিভুজ" },
          { "kind": "p", "text": "দেওয়া [[b=4]], [[c=5]], [[A=36.87^\\circ]]। ধাপ 1: [[K=\\frac{bc\\sin(A)}{2}]]। ধাপ 2: [[K=\\frac{4\\times5\\times\\sin(36.87^\\circ)}{2}]]। ধাপ 3: [[\\sin(36.87^\\circ)\\approx0.6]]। ধাপ 4: [[K=\\frac{20\\times0.6}{2}]], [[[\\boxed{K=6\\text{ square units}}]]]। যাচাই: [[a=5\\times0.6=3]], এবং [[K=\\frac{4\\times3}{2}=6]]।" },
          { "kind": "h3", "text": "উদাহরণ 2: 5-12-13 সমকোণ ত্রিভুজ" },
          { "kind": "p", "text": "দেওয়া [[b=12]], [[c=13]], [[A\\approx22.62^\\circ]], যেখানে [[\\sin(A)=\\frac{5}{13}]]। বসান: [[K=\\frac{12\\times13\\times(5/13)}{2}]]। 13 বাতিল হয়: [[K=\\frac{12\\times5}{2}]], [[[\\boxed{K=30\\text{ square units}}]]]। যাচাই: [[a=13\\times(5/13)=5]], এবং [[K=\\frac{12\\times5}{2}=30]]।" },
          { "kind": "h3", "text": "উদাহরণ 3: 8-15-17 সমকোণ ত্রিভুজ" },
          { "kind": "p", "text": "দেওয়া [[b=15]], [[c=17]], [[A\\approx28.07^\\circ]], যেখানে [[\\sin(A)=\\frac{8}{17}]]। তাহলে [[K=\\frac{15\\times17\\times(8/17)}{2}=\\frac{15\\times8}{2}]], [[[\\boxed{K=60\\text{ square units}}]]]। যাচাই: [[a=8]], এবং [[\\frac{15\\times8}{2}=60]]।" },
          { "kind": "h3", "text": "উদাহরণ 4: 7-24-25 সমকোণ ত্রিভুজ" },
          { "kind": "p", "text": "দেওয়া [[b=24]], [[c=25]], [[A\\approx16.26^\\circ]], যেখানে [[\\sin(A)=\\frac{7}{25}]]। তাহলে [[K=\\frac{24\\times25\\times(7/25)}{2}=\\frac{24\\times7}{2}]], [[[\\boxed{K=84\\text{ square units}}]]]। যাচাই: [[a=7]], এবং [[\\frac{24\\times7}{2}=84]]।" },
          { "kind": "h3", "text": "মৌলিক উদাহরণগুলোর তুলনা" }
        ],
        "table": {
          "headers": ["ত্রিভুজের ধরন", "জানা বাহু b", "অতিভুজ c", "কোণ A", "গণনা করা ক্ষেত্রফল"],
          "rows": [
            ["3-4-5", "4", "5", "36.87°", "6"],
            ["5-12-13", "12", "13", "22.62°", "30"],
            ["8-15-17", "15", "17", "28.07°", "60"],
            ["7-24-25", "24", "25", "16.26°", "84"]
          ]
        }
      },
      "sec-practical": {
        "h2": "লম্ব বাহু ও কোণ থেকে সমকোণ ত্রিভুজ ক্ষেত্রফলের বাস্তব জীবনের প্রয়োগ",
        "blocks": [
          { "kind": "p", "text": "বারোটি সমাধান করা পরিস্থিতি সূত্রটিকে পাতা থেকে কর্মশালা, নির্মাণক্ষেত্র ও স্টুডিওতে নিয়ে যায়। প্রতিটি একটি সমকোণ-ত্রিভুজাকার প্যানেল, খণ্ড, প্রোফাইল বা সরলীকৃত মডেলের নাম দেয়, ক্যালকুলেটরের তিনটি ইনপুটকে সূত্রের মধ্য দিয়ে চালায়, এবং সংখ্যাগুলোর পেছনের ধারণাটি বলে। আসল বস্তু বাঁকা বা অনিয়মিত হলে গণনা শুধু মডেল করা ত্রিভুজটিকেই কভার করে।" },
          { "kind": "h3", "text": "উদাহরণ 1: ত্রিভুজাকার কাচের জানালা" },
          { "kind": "p", "text": "একটি সমকোণ-ত্রিভুজাকার কাচের জানালার [[a=3\\text{ m}]], [[b=4\\text{ m}]], [[c=5\\text{ m}]] আছে। ক্যালকুলেটর ইনপুট: [[b=4]], [[c=5]], [[A\\approx36.87^\\circ]]। বসান: [[K=\\frac{4\\times5\\times0.6}{2}]], [[[\\boxed{K=6\\text{ m}^2}]]]। ফ্রেমের ছাড় বাদ দেওয়ার আগে এটি সমতল ত্রিভুজাকার কাচের ক্ষেত্রফল।" },
          { "kind": "h3", "text": "উদাহরণ 2: ছাদের সাপোর্ট প্যানেল" },
          { "kind": "p", "text": "একটি সমকোণ-ত্রিভুজাকার ছাদের সাপোর্ট খণ্ডের [[a=5\\text{ ft}]], [[b=12\\text{ ft}]], [[c=13\\text{ ft}]] আছে। ইনপুট: [[b=12]], [[c=13]], [[A\\approx22.62^\\circ]], [[\\sin(A)=\\frac{5}{13}]]। তাহলে [[K=\\frac{12\\times13\\times(5/13)}{2}]], [[[\\boxed{K=30\\text{ ft}^2}]]]। ফলটি সমতল ত্রিভুজাকার সাপোর্ট খণ্ড বর্ণনা করে, পুরো ছাদ নয়।" },
          { "kind": "h3", "text": "উদাহরণ 3: ত্রিভুজাকার র‍্যাম্পের পার্শ্ব প্রোফাইল" },
          { "kind": "p", "text": "একটি সরলীকৃত সমকোণ-ত্রিভুজাকার র‍্যাম্প প্রোফাইলের [[a=6\\text{ m}]], [[b=8\\text{ m}]], [[c=10\\text{ m}]] আছে। ইনপুট: [[b=8]], [[c=10]], [[A\\approx36.87^\\circ]]। তাহলে [[K=\\frac{8\\times10\\times0.6}{2}]], [[[\\boxed{K=24\\text{ m}^2}]]]। এটি ত্রিভুজাকার পার্শ্ব প্রোফাইল, ঢালু হাঁটার পৃষ্ঠ নয়।" },
          { "kind": "h3", "text": "উদাহরণ 4: স্টিলের গাসেট প্লেট" },
          { "kind": "p", "text": "একটি ত্রিভুজাকার স্টিল সাপোর্ট প্লেটের [[a=8\\text{ cm}]], [[b=15\\text{ cm}]], [[c=17\\text{ cm}]] আছে। ইনপুট: [[b=15]], [[c=17]], [[A\\approx28.07^\\circ]], [[\\sin(A)=\\frac{8}{17}]]। তাহলে [[K=\\frac{15\\times17\\times(8/17)}{2}]], [[[\\boxed{K=60\\text{ cm}^2}]]]। শুধু ক্ষেত্রফল কাঠামোগত শক্তি বা ভারবহন ক্ষমতা নির্ধারণ করে না।" },
          { "kind": "h3", "text": "উদাহরণ 5: ত্রিভুজাকার বাগানের খণ্ড" },
          { "kind": "p", "text": "একটি সরলীকৃত সমকোণ-ত্রিভুজাকার বাগানের খণ্ডের [[a=7\\text{ m}]], [[b=24\\text{ m}]], [[c=25\\text{ m}]] আছে। ইনপুট: [[b=24]], [[c=25]], [[A\\approx16.26^\\circ]], [[\\sin(A)=\\frac{7}{25}]]। তাহলে [[K=\\frac{24\\times25\\times(7/25)}{2}]], [[[\\boxed{K=84\\text{ m}^2}]]]। এটি রোপণের জন্য ত্রিভুজাকার খণ্ডের ক্ষেত্রফল অনুমান করতে সাহায্য করে।" },
          { "kind": "h3", "text": "উদাহরণ 6: ত্রিভুজাকার পালের প্যানেল" },
          { "kind": "p", "text": "একটি সমকোণ-ত্রিভুজাকার পালের খণ্ডের [[a=9\\text{ ft}]], [[b=12\\text{ ft}]], [[c=15\\text{ ft}]] আছে। ইনপুট: [[b=12]], [[c=15]], [[A\\approx36.87^\\circ]]। তাহলে [[K=\\frac{12\\times15\\times0.6}{2}]], [[[\\boxed{K=54\\text{ ft}^2}]]]। এই সমতল-প্যানেল সংখ্যা থেকে সেলাই ও কাপড়ের ছাড় বাদ আছে।" },
          { "kind": "h3", "text": "উদাহরণ 7: প্লাইউড কাটার টেমপ্লেট" },
          { "kind": "p", "text": "একটি সমকোণ-ত্রিভুজাকার প্লাইউড টেমপ্লেটের [[a=12\\text{ cm}]], [[b=16\\text{ cm}]], [[c=20\\text{ cm}]] আছে। ইনপুট: [[b=16]], [[c=20]], [[A\\approx36.87^\\circ]]। তাহলে [[K=\\frac{16\\times20\\times0.6}{2}]], [[[\\boxed{K=96\\text{ cm}^2}]]]। কাটার অপচয়ের আগে সমতল উপাদানের প্রয়োজন অনুমান করতে ক্ষেত্রফল সাহায্য করে।" },
          { "kind": "h3", "text": "উদাহরণ 8: ত্রিভুজাকার রোড সাইন" },
          { "kind": "p", "text": "একটি সমকোণ-ত্রিভুজাকার সাইন প্যানেলের [[a=20\\text{ cm}]], [[b=21\\text{ cm}]], [[c=29\\text{ cm}]] আছে। ইনপুট: [[b=21]], [[c=29]], [[A\\approx43.60^\\circ]], [[\\sin(A)=\\frac{20}{29}]]। তাহলে [[K=\\frac{21\\times29\\times(20/29)}{2}]], [[[\\boxed{K=210\\text{ cm}^2}]]]। এটি সাইনের সমতল মুখের ক্ষেত্রফল অনুমান করে।" },
          { "kind": "h3", "text": "উদাহরণ 9: জরিপ করা জমির খণ্ড" },
          { "kind": "p", "text": "একটি সমকোণ-ত্রিভুজাকার জরিপ করা খণ্ডের [[a=9\\text{ m}]], [[b=40\\text{ m}]], [[c=41\\text{ m}]] আছে। ইনপুট: [[b=40]], [[c=41]], [[A\\approx12.68^\\circ]], [[\\sin(A)=\\frac{9}{41}]]। তাহলে [[K=\\frac{40\\times41\\times(9/41)}{2}]], [[[\\boxed{K=180\\text{ m}^2}]]]। ফলটি সরলীকৃত সমকোণ-ত্রিভুজাকার জমির খণ্ডে প্রযোজ্য।" },
          { "kind": "h3", "text": "উদাহরণ 10: ত্রিভুজাকার ছাউনির সাপোর্ট" },
          { "kind": "p", "text": "একটি সমকোণ-ত্রিভুজাকার ছাউনির সাপোর্ট খণ্ডের [[a=15\\text{ ft}]], [[b=20\\text{ ft}]], [[c=25\\text{ ft}]] আছে। ইনপুট: [[b=20]], [[c=25]], [[A\\approx36.87^\\circ]]। তাহলে [[K=\\frac{20\\times25\\times0.6}{2}]], [[[\\boxed{K=150\\text{ ft}^2}]]]। এটি সমতল ত্রিভুজাকার খণ্ড, অনিয়মিত ছাউনির পুরো কাপড় নয়।" },
          { "kind": "h3", "text": "উদাহরণ 11: শিল্পক্ষেত্রের প্রস্থচ্ছেদ" },
          { "kind": "p", "text": "একটি সরলীকৃত সমকোণ-ত্রিভুজাকার শিল্প জমির খণ্ডের [[a=11\\text{ m}]], [[b=60\\text{ m}]], [[c=61\\text{ m}]] আছে। ইনপুট: [[b=60]], [[c=61]], [[A\\approx10.39^\\circ]], [[\\sin(A)=\\frac{11}{61}]]। তাহলে [[K=\\frac{60\\times61\\times(11/61)}{2}]], [[[\\boxed{K=330\\text{ m}^2}]]]। আসল অনিয়মিত ক্ষেত্রকে একাধিক আকারে ভাগ করার দরকার হতে পারে।" },
          { "kind": "h3", "text": "উদাহরণ 12: গুদামের ছাদ-প্রান্ত খণ্ড" },
          { "kind": "p", "text": "একটি বড় সমকোণ-ত্রিভুজাকার গুদামের ছাদ-প্রান্ত খণ্ডের [[a=13\\text{ ft}]], [[b=84\\text{ ft}]], [[c=85\\text{ ft}]] আছে। ইনপুট: [[b=84]], [[c=85]], [[A\\approx8.80^\\circ]], [[\\sin(A)=\\frac{13}{85}]]। তাহলে [[K=\\frac{84\\times85\\times(13/85)}{2}]], [[[\\boxed{K=546\\text{ ft}^2}]]]। ফলটি সমতল ত্রিভুজাকার প্রান্ত খণ্ডের অনুমান দেয়।" },
          { "kind": "h3", "text": "বাস্তব উদাহরণগুলোর তুলনা" }
        ],
        "table": {
          "headers": ["বাস্তব প্রয়োগ", "বাহু a", "জানা বাহু b", "অতিভুজ c", "কোণ A", "গণনা করা ক্ষেত্রফল", "পরিমাপের একক"],
          "rows": [
            ["কাচের জানালা", "3", "4", "5", "36.87°", "6", "m²"],
            ["ছাদের সাপোর্ট", "5", "12", "13", "22.62°", "30", "ft²"],
            ["র‍্যাম্প প্রোফাইল", "6", "8", "10", "36.87°", "24", "m²"],
            ["গাসেট প্লেট", "8", "15", "17", "28.07°", "60", "cm²"],
            ["বাগানের খণ্ড", "7", "24", "25", "16.26°", "84", "m²"],
            ["পালের প্যানেল", "9", "12", "15", "36.87°", "54", "ft²"],
            ["প্লাইউড টেমপ্লেট", "12", "16", "20", "36.87°", "96", "cm²"],
            ["রোড সাইন", "20", "21", "29", "43.60°", "210", "cm²"],
            ["জরিপ খণ্ড", "9", "40", "41", "12.68°", "180", "m²"],
            ["ছাউনির সাপোর্ট", "15", "20", "25", "36.87°", "150", "ft²"],
            ["শিল্প খণ্ড", "11", "60", "61", "10.39°", "330", "m²"],
            ["গুদামের ছাদ-প্রান্ত", "13", "84", "85", "8.80°", "546", "ft²"]
          ]
        }
      },
      "sec-compare": {
        "h2": "সাইন-ভিত্তিক সূত্র কেন বাহুর সূত্রের সমান ক্ষেত্রফল দেয়?",
        "blocks": [
          { "kind": "p", "text": "[[K=\\frac{bc\\sin(A)}{2}]] থেকে শুরু করুন এবং মনে রাখুন [[\\sin(A)=\\frac{a}{c}]]। বসান: [[K=\\frac{bc(a/c)}{2}]]। [[c]] বাতিল হয়, থেকে যায় [[[\\boxed{K=\\frac{ab}{2}}]]]। সাইন সূত্র নতুন কোনো ক্ষেত্রফল আবিষ্কার করে না; এটি ভিন্ন জানা মান থেকে একই ক্ষেত্রফল গণনা করে, অনুপস্থিত বাহুকে সাইন অনুপাতের ভেতর দিয়ে পাচার করে।" },
          { "kind": "h3", "text": "সাইন সূত্র কখন বেশি উপযোগী?" },
          { "kind": "p", "text": "যখন একটি বাহু মাপা হয়েছে, অতিভুজ জানা, এবং অন্তর্ভুক্ত কোণ পাওয়া যায়, অথচ তৃতীয় বাহুটি কখনো সরাসরি মাপা হয়নি, তখন এটি ব্যবহার করুন। মাঠ পর্যায়ের পরিমাপ, স্কেল করা চিত্র ও জরিপ ডেটা প্রায়ই ঠিক এই সংমিশ্রণেই আসে। সূত্রটি এই তিনটি সংখ্যাকে এক লাইনে ক্ষেত্রফলে রূপান্তর করে, অনুপস্থিত বাহু খুঁজতে আলাদা ঘোরাঘুরি ছাড়াই।" },
          { "kind": "h3", "text": "বাহুর সূত্র কখন সহজ?" },
          { "kind": "p", "text": "দুটি লম্ব বাহুই জানা থাকলে [[K=\\frac{ab}{2}]] ছোট: সাইন নেই, কোণ নেই, একটি গুণ ও অর্ধেক করা। সাইন সংস্করণটি তখনই ধরুন যখন একটি বাহু অনুপস্থিত এবং কোণ তা সরবরাহ করতে পারে।" },
          { "kind": "h3", "text": "সংখ্যাগত তুলনা" },
          { "kind": "p", "text": "3-4-5 ত্রিভুজে সাইন পদ্ধতিতে পাওয়া যায় [[K=\\frac{4\\times5\\times0.6}{2}=6]], আর বাহুর পদ্ধতিতে [[K=\\frac{3\\times4}{2}=6]]। দুটি পথ একই জ্যামিতির ভেতর দিয়ে যায়, তাই এদের মিলতেই হবে। না মিললে দোষ ইনপুট বা গাণিতিক হিসাবের, কখনো সূত্রের নয়।" }
        ]
      },
      "sec-angle-effect": {
        "h2": "অন্তর্ভুক্ত কোণ সমকোণ ত্রিভুজের ক্ষেত্রফলে কীভাবে প্রভাব ফেলে?",
        "blocks": [
          { "kind": "p", "text": "অতিভুজ স্থির থাকলে কোণ স্বাধীনভাবে বদলাতে পারে না: সমকোণ ত্রিভুজের সম্পর্ক [[b]] ও [[A]]-কে একসঙ্গে বাঁধে। এই সীমাবদ্ধতাকে সৎভাবে ধরলে ঠিক দেখা যায় [[A]] 0 ও 90 ডিগ্রির মধ্যে চলার সঙ্গে ক্ষেত্রফল কীভাবে বাড়ে-কমে।" },
          { "kind": "h3", "text": "কোণ A বাড়লে কী হয়?" },
          { "kind": "p", "text": "[[c]] স্থির থাকলে [[b=c\\cos(A)]] ও [[a=c\\sin(A)]], তাই [[K=\\frac{c^2\\sin(A)\\cos(A)}{2}]]। দ্বিগুণ-কোণ অভেদ দেয় [[[\\boxed{K=\\frac{c^2\\sin(2A)}{4}}]]]। [[A]] নিচ থেকে 45 ডিগ্রির দিকে এগোলে ক্ষেত্রফল বাড়ে, 45 ডিগ্রিতে শীর্ষে পৌঁছে, তারপর 90 ডিগ্রির দিকে কমে। 30° ও 60°-এর মতো পূরক কোণগুলো একই ক্ষেত্রফল দেয়, কারণ [[\\sin(2A)]] 45 ডিগ্রির সাপেক্ষে প্রতিসম।" },
          { "kind": "h3", "text": "স্থির অতিভুজের জন্য সর্বোচ্চ ক্ষেত্রফল" },
          { "kind": "p", "text": "শীর্ষ ঘটে [[A=45^\\circ]]-এ, যেখানে [[\\sin(2A)=1]]: [[[\\boxed{K_{\\max}=\\frac{c^2}{4}}]]]। সেখানে [[a=b=\\frac{c}{\\sqrt{2}}]], তাই সর্বাধিককারী ত্রিভুজটি সমদ্বিবাহু। স্থির অতিভুজ তার বর্গের এক-চতুর্থাংশের বেশি সমকোণ-ত্রিভুজাকার ক্ষেত্র ঘিরতে পারে না, এবং শুধু সমদ্বিবাহু আকারই তা অর্জন করে।" },
          { "kind": "h3", "text": "সংখ্যাগত উদাহরণ" },
          { "kind": "p", "text": "[[c=10]] দেওয়া থাকলে সর্বোচ্চ [[K_{\\max}=\\frac{10^2}{4}]], [[[\\boxed{K_{\\max}=25}]]]। [[A=45^\\circ]]-এ বাহুগুলো প্রতিটি [[10/\\sqrt{2}\\approx7.07]], এবং [[\\frac{7.07\\times7.07}{2}\\approx25]]। মনে রাখুন 90° গ্রহণযোগ্য সূক্ষ্ম ইনপুট নয়: এটি ত্রিভুজটিকে রেখায় ভেঙে ফেলবে।" }
        ]
      },
      "sec-alternative": {
        "h2": "একটি বাহু ও তার কোণ দিয়ে কি সমকোণ ত্রিভুজের ক্ষেত্রফল বের করা যায়?",
        "blocks": [
          { "kind": "p", "text": "হ্যাঁ, সাইনের বদলে ট্যানজেন্ট দিয়ে। বাহু [[b]] ও কোণ [[A]] জানা থাকলে বিপরীত বাহু আসে [[a=b\\tan(A)]] থেকে। তা [[K=\\frac{ab}{2}]]-এ বসান: [[K=\\frac{b(b\\tan(A))}{2}]], অর্থাৎ [[[\\boxed{K=\\frac{b^2\\tan(A)}{2}}]]]। অন্য কোণা থেকে, [[b=a\\tan(B)]] দেয় [[[\\boxed{K=\\frac{a^2\\tan(B)}{2}}]]]। এগুলো আসল বিকল্প পদ্ধতি, যখন অতিভুজ অজানা কিন্তু একটি বাহু ও তার কোণ হাতে থাকে তখন উপযোগী। এগুলো গাণিতিক বিকল্প, উপরের ক্যালকুলেটরের অতিরিক্ত মোড নয়, যা শুধু [[b]], [[c]] ও [[A]]-তে কাজ করে।" }
        ]
      },
      "sec-units": {
        "h2": "ক্ষেত্রফল গণনায় কোণের একক ও পরিমাপ বোঝা",
        "blocks": [
          { "kind": "p", "text": "ক্ষেত্রফল তার একক পায় তাকে গঠনকারী দুটি দৈর্ঘ্য থেকে, আর কোণ কোনো এককই যোগ করে না। তিনটি ইনপুটকে সামঞ্জস্যপূর্ণ এককে রাখাই উত্তরকে সৎ রাখে।" },
          { "kind": "h3", "text": "ডিগ্রি বনাম রেডিয়ান" },
          { "kind": "p", "text": "ক্যালকুলেটর ডিগ্রি আশা করে। রূপান্তর করুন [[\\text{Degrees}=\\text{Radians}\\times\\frac{180}{\\pi}]] দিয়ে; উদাহরণস্বরূপ, [[\\frac{\\pi}{6}\\text{ radians}=30^\\circ]]। ডিগ্রি-মোড ক্ষেত্রে রেডিয়ান-মোড কোণ দিলে সাইনের মান নীরবে বদলে যায়: [[\\sin(30^\\circ)=0.5]], কিন্তু [[\\sin(30\\text{ radians})\\approx-0.99]], যা ক্ষেত্রফল নষ্ট করবে। আগে রূপান্তর করুন, তারপর লিখুন।" },
          { "kind": "h3", "text": "সাইনের একক নেই কেন" },
          { "kind": "p", "text": "সাইন দুটি দৈর্ঘ্যের অনুপাত, তাই একক বাতিল হয়: অতিভুজের ওপর বিপরীত বাহু একটি বিশুদ্ধ সংখ্যা। উত্তরের বর্গ একক পুরোপুরি আসে [[b]]-কে [[c]] দিয়ে গুণ করা থেকে। এই কারণেই সূত্রের এককের হিসাব সহজ: দুটি দৈর্ঘ্যের একক মিলিয়ে নিন, ক্ষেত্রফলের একক নিজে থেকেই আসবে।" },
          { "kind": "h3", "text": "সাধারণ পরিমাপের একক" },
          { "kind": "p", "text": "মিটার থেকে বর্গমিটার, সেন্টিমিটার থেকে বর্গসেন্টিমিটার, ফুট থেকে বর্গফুট, ইঞ্চি থেকে বর্গইঞ্চি: [[\\text{m}\\times\\text{m}=\\text{m}^2]], এবং প্রতিটি দৈর্ঘ্য এককে একই ধারা চলে। মিশ্র একক, যেমন মিটারের সঙ্গে সেন্টিমিটার, সূত্র প্রয়োগের আগে এক এককে রূপান্তর করতে হবে, নইলে সংখ্যার কোনো পরিষ্কার অর্থ থাকে না।" },
          { "kind": "h3", "text": "আগে পূর্ণসংখ্যায়ন ফলকে প্রভাবিত করতে পারে কেন" },
          { "kind": "p", "text": "মধ্যবর্তী ধাপগুলোতে পূর্ণ নির্ভুলতা রাখুন এবং শুধু চূড়ান্ত উত্তরের পূর্ণসংখ্যায়ন করুন। 36.87°-এর পেছনের সঠিক কোণ হলো 36.869897°, যার সাইন ঠিক 0.6; আগে কোণের পূর্ণসংখ্যায়ন করলে সাইন এক চুল সরে, এবং সেই চুল [[b]] ও [[c]]-এর ভেতর দিয়ে গুণ হয়ে ক্ষেত্রফলে পৌঁছায়। একটি ত্রিভুজে সামান্য, পুরো প্রকল্পে লক্ষণীয়।" }
        ]
      },
      "sec-mistakes": {
        "h2": "একটি লম্ব বাহু ও কোণ থেকে সমকোণ ত্রিভুজের ক্ষেত্রফল বের করতে সাধারণ ভুল",
        "blocks": [
          { "kind": "p", "text": "এই বিষয়ে প্রায় প্রতিটি ভুল উত্তরের শিকড় খারাপ গাণিতিক হিসাব নয়, বরং ভুল নাম দেওয়া ইনপুট। নিচের ষোলটি ভুল বারবার দেখা যায়, প্রতিটির কারণ ও সমাধানসহ।" },
          { "kind": "h3", "text": "1. অতিভুজকে লম্ব বাহুর সঙ্গে গুলিয়ে ফেলা" },
          { "kind": "p", "text": "অতিভুজ সমকোণের বিপরীত বাহু এবং সবচেয়ে লম্বা বাহু; লম্ব বাহু সমকোণের সঙ্গে মিলিত হয়। এদের অদলবদল করলে [[c]]-তে ভুল দৈর্ঘ্য যায়। সমাধান: আগে সমকোণ খুঁজুন, তারপর তার বিপরীত বাহু নিন।" },
          { "kind": "h3", "text": "2. কোণ A-কে ভুল বাহুর সঙ্গে জোড়া দেওয়া" },
          { "kind": "p", "text": "কোণ [[A]] বাহু [[b]] ও অতিভুজ [[c]]-এর মধ্যে বসে। তাকে বাহু [[a]]-এর সঙ্গে জোড়া দিলে সূত্রের ধরে নেওয়া অন্তর্ভুক্ত-কোণ সম্পর্ক এলোমেলো হয়। সমাধান: দেওয়া কোণটি যে দুটি বাহু গঠন করে সেগুলো অনুসরণ করুন।" },
          { "kind": "h3", "text": "3. বিপরীত ও সন্নিহিত বাহু গুলিয়ে ফেলা" },
          { "kind": "p", "text": "বিপরীত মানে কোণের ওপারে; সন্নিহিত মানে তাকে স্পর্শ করে, অতিভুজের পাশে। রেফারেন্স কোণ বদলালে নামকরণ উল্টে যায়। সমাধান: কোণ [[A]]-এ দাঁড়িয়ে সেখান থেকে প্রতিটি বাহুর নাম দিন।" },
          { "kind": "h3", "text": "4. সংশ্লিষ্ট বাহু না বদলে কোণ A-এর বদলে কোণ B ব্যবহার করা" },
          { "kind": "p", "text": "কোণ [[B]] বাহু [[a]] ও [[c]]-এর সঙ্গে জোড়া বাঁধে, [[b]] ও [[c]]-এর সঙ্গে নয়। [[b]] ও [[c]] রেখে [[B]] দিলে ভিন্ন রাশি গণনা হয়। সমাধান: প্রতিটি কোণকে তার নিজের বাহু জুটির সঙ্গে রাখুন, অথবা আগে [[B]]-কে [[A]]-তে রূপান্তর করুন।" },
          { "kind": "h3", "text": "5. ক্যালকুলেটর ডিগ্রি আশা করলে রেডিয়ান ব্যবহার করা" },
          { "kind": "p", "text": "36.87 (ডিগ্রি)-এর জায়গায় 0.6435 (রেডিয়ান) দিলে [[\\sin(A)]] পুরোপুরি বদলে যায়। সমাধান: ক্যালকুলেটরের একক পরীক্ষা করুন, দরকার হলে [[\\times\\frac{180}{\\pi}]] দিয়ে রূপান্তর করুন, তারপর লিখুন।" },
          { "kind": "h3", "text": "6. দুই দিয়ে ভাগ করতে ভুলে যাওয়া" },
          { "kind": "p", "text": "[[b\\times c\\times\\sin(A)]] গুণ করলে ঘেরা সামান্তরিকের ক্ষেত্রফল পাওয়া যায়, ত্রিভুজের দ্বিগুণ। সমাধান: গুণফলকে অর্ধেক করুন; /2 সূত্রের অংশ, ঐচ্ছিক নয়।" },
          { "kind": "h3", "text": "7. সাইন ফাংশন ভুলে যাওয়া" },
          { "kind": "p", "text": "শুধু [[\\frac{bc}{2}]] গণনা করলে [[\\sin(A)]]-কে 1 ধরা হয়, যা শুধু 90°-তে সত্য, একটি অসম্ভব সূক্ষ্ম ইনপুট। সমাধান: [[\\sin(A)]] অন্তর্ভুক্ত করুন; এটি অনুপস্থিত বাহুর অংশ বহন করে।" },
          { "kind": "h3", "text": "8. অতিভুজের চেয়ে লম্বা বাহু দেওয়া" },
          { "kind": "p", "text": "কোনো বাহু অতিভুজকে ছাড়াতে পারে না, তাই [[c\\leq b]] মানে কোনো নামকরণ ভুল। সমাধান: বাহুগুলো আবার চিহ্নিত করুন; সবচেয়ে লম্বা পরিমাপটিই [[c]]।" },
          { "kind": "h3", "text": "9. 0 ডিগ্রি কোণ দেওয়া" },
          { "kind": "p", "text": "0°-তে [[\\sin(A)=0]] এবং ত্রিভুজটি শূন্য ক্ষেত্রফলের রেখায় ভেঙে পড়ে। সমাধান: আসল সূক্ষ্মকোণ ব্যবহার করুন, কঠোরভাবে 0° ও 90°-এর মধ্যে।" },
          { "kind": "h3", "text": "10. সূক্ষ্মকোণ হিসেবে 90 ডিগ্রি কোণ দেওয়া" },
          { "kind": "p", "text": "90° হলো সমকোণ [[C]], সূক্ষ্মকোণ নয়; [[\\sin(90^\\circ)=1]] সূত্রটিকে [[\\frac{bc}{2}]]-তে বদলে দেয়, যা এই ত্রিভুজের ক্ষেত্রফল নয়। সমাধান: [[b]] ও [[c]]-এর মধ্যবর্তী সূক্ষ্মকোণটি দিন।" },
          { "kind": "h3", "text": "11. ভিন্ন দৈর্ঘ্য একক মেশানো" },
          { "kind": "p", "text": "[[b=400\\text{ cm}]]-এর সঙ্গে [[c=5\\text{ m}]] অসামঞ্জস্যপূর্ণ স্কেল গুণ করে। সমাধান: গণনার আগে দুটিকেই এক এককে রূপান্তর করুন (400 cm = 4 m)।" },
          { "kind": "h3", "text": "12. রৈখিক এককে ক্ষেত্রফল বলা" },
          { "kind": "p", "text": "6 m² ক্ষেত্রফল 6 m নয়। সমাধান: সংখ্যার সঙ্গে বর্গ একক লিখুন, প্রতিবার।" },
          { "kind": "h3", "text": "13. কোণের আগেভাগে পূর্ণসংখ্যায়ন" },
          { "kind": "p", "text": "সাইন নেওয়ার আগে 36.869897°-কে 36.87°-তে পূর্ণসংখ্যায়ন করলে ফল সামান্য সরে; 37°-তে করলে আরও সরে। সমাধান: চূড়ান্ত উত্তর পর্যন্ত পূর্ণ নির্ভুলতা রাখুন।" },
          { "kind": "h3", "text": "14. তিনটি ইনপুট স্বাধীনভাবে বাছা যায় ধরে নেওয়া" },
          { "kind": "p", "text": "[[b]], [[c]] ও [[A]] [[b=c\\cos(A)]] দিয়ে যুক্ত; তিনটিকে স্বাধীনভাবে বাছলে ত্রিভুজ অতিনির্ধারিত হয়। সমাধান: তৃতীয় মানটি বানানোর বদলে অন্য দুটি থেকে বের করুন।" },
          { "kind": "h3", "text": "15. দেওয়া বাহুর দৈর্ঘ্যের সঙ্গে অসঙ্গতিপূর্ণ কোণ ব্যবহার করা" },
          { "kind": "p", "text": "[[b=8]], [[c=10]], [[A=60^\\circ]] পরীক্ষায় ফেল করে, যেহেতু [[10\\cos(60^\\circ)=5\\neq8]]। সূত্রটি তবু একটি সংখ্যা দেয়, কিন্তু তা এই সমকোণ ত্রিভুজের ক্ষেত্রফল নয়। সমাধান: [[b=c\\cos(A)]] পরীক্ষা চালান।" },
          { "kind": "h3", "text": "16. ক্যালকুলেটরের সংখ্যাগত ফল সবসময় বৈধ সমকোণ ত্রিভুজ বোঝায় ধরে নেওয়া" },
          { "kind": "p", "text": "টাইপ করা যেকোনো সংখ্যায় গাণিতিক হিসাব সফল হয়; জ্যামিতিতে হয় না। সমাধান: উত্তরে আস্থা রাখার আগে সঙ্গতি পরীক্ষা ও স্বাধীন সূত্রে যাচাই করুন।" },
          { "kind": "h3", "text": "ভুল বনাম সঠিক: একটি সুনির্দিষ্ট উদাহরণ" },
          { "kind": "p", "text": "ব্যবহার করুন [[b=4]], [[c=5]], [[A=36.87^\\circ]]। সঠিক: [[K=\\frac{4\\times5\\times0.6}{2}=6]]। একই বাহুর সঙ্গে ভুলভাবে কোণ [[B=53.13^\\circ]] দিলে: [[K=\\frac{4\\times5\\times0.8}{2}=8]]। কোণ [[B]] [[b]] ও [[c]]-এর অন্তর্ভুক্ত কোণ নয়; তার সঠিক বাহু জুটি হলো [[a]] ও [[c]]। ভুলটি গাণিতিক হিসাবে অদৃশ্য, জ্যামিতিতে স্পষ্ট।" }
        ]
      },
      "sec-verify": {
        "h2": "আপনার সমকোণ ত্রিভুজের ক্ষেত্রফল সঠিক কিনা যাচাই করবেন কীভাবে",
        "blocks": [
          { "kind": "p", "text": "সাতটি স্বাধীন পরীক্ষা, সবগুলো 3-4-5 ত্রিভুজে ([[a=3]], [[b=4]], [[c=5]], [[A\\approx36.87^\\circ]]) দেখানো। ভিন্ন পথের মধ্যে মিলই উত্তর সঠিক হওয়ার সবচেয়ে শক্ত প্রমাণ।" },
          { "kind": "h3", "text": "পদ্ধতি 1: মূল সূত্র পরীক্ষা করুন" },
          { "kind": "p", "text": "[[K=\\frac{bc\\sin(A)}{2}]] আবার গণনা করুন: [[\\frac{4\\times5\\times0.6}{2}=6]]। দ্বিতীয় পাসে টাইপো ও ভুল টাইপ করা কোণ ধরা পড়ে।" },
          { "kind": "h3", "text": "পদ্ধতি 2: কোসাইন সম্পর্ক পরীক্ষা করুন" },
          { "kind": "p", "text": "নিশ্চিত করুন [[b=c\\cos(A)]]: [[5\\times\\cos(36.87^\\circ)=5\\times0.8=4]]। অমিল মানে কোণ ও বাহু ভিন্ন ত্রিভুজের।" },
          { "kind": "h3", "text": "পদ্ধতি 3: অনুপস্থিত বাহু গণনা করুন" },
          { "kind": "p", "text": "নিশ্চিত করুন [[a=c\\sin(A)]]: [[5\\times0.6=3]]। এটি ক্ষেত্রফল সূত্রে যাওয়া সাইনের মান পরীক্ষা করে।" },
          { "kind": "h3", "text": "পদ্ধতি 4: পিথাগোরাসের উপপাদ্য পরীক্ষা করুন" },
          { "kind": "p", "text": "নিশ্চিত করুন [[a^2+b^2=c^2]]: [[9+16=25]]। এখানে ব্যর্থতা মানে বাহুর চেনা ভুল।" },
          { "kind": "h3", "text": "পদ্ধতি 5: দুটি বাহু দিয়ে যাচাই করুন" },
          { "kind": "p", "text": "নিশ্চিত করুন [[K=\\frac{ab}{2}]]: [[\\frac{3\\times4}{2}=6]]। দুটি পদ্ধতি, একটি ত্রিভুজ, একটি উত্তর।" },
          { "kind": "h3", "text": "পদ্ধতি 6: পূরক কোণ পরীক্ষা করুন" },
          { "kind": "p", "text": "নিশ্চিত করুন [[A+B=90^\\circ]]: [[36.87^\\circ+53.13^\\circ=90^\\circ]]। এটি ভুল কোণায় মাপা কোণ ধরে।" },
          { "kind": "h3", "text": "পদ্ধতি 7: সর্বোচ্চ ক্ষেত্রফল পরীক্ষা করুন" },
          { "kind": "p", "text": "নিশ্চিত করুন [[K\\leq\\frac{c^2}{4}]]: [[6\\leq\\frac{25}{4}=6.25]]। দেওয়া অতিভুজের জন্য সীমার উপরের ক্ষেত্রফল অসম্ভব।" }
        ]
      },
      "sec-applications": {
        "h2": "বাস্তবে লম্ব বাহু ও কোণ থেকে সমকোণ ত্রিভুজ ক্ষেত্রফল",
        "blocks": [
          { "kind": "p", "text": "একই তিনটি ইনপুট এমন জায়গায় দেখা দেয় যেখানে ত্রিকোণমিতির নামও ওঠে না। কাচমিস্ত্রি জানালার বাহু ও কর্ণ মাপে এবং ফ্রেম থেকে কোণ পড়ে; ছাদের মিস্ত্রি র‍্যাফটারের দৈর্ঘ্য থেকে সাপোর্টের অতিভুজ ও ঢাল থেকে কোণ জানে। প্রতিটি ক্ষেত্রে অনুপস্থিত লম্ব বাহুটিই ফিতে দিয়ে পৌঁছানো কঠিন, অথচ অতিভুজ ও কোণ হাতের নাগালে। সাইন সূত্র ঠিক এই অসাম্যের জন্য: এটি সহজলভ্য পরিমাপগুলোকে দুর্গম উচ্চতায়, তারপর ক্ষেত্রফলে রূপান্তর করে।" },
          { "kind": "p", "text": "নিচের চারটি প্যানেল ভিন্ন স্কেলে ধারাটি দেখায়। একটি কাচের জানালা (6 m²) ও একটি র‍্যাম্প প্রোফাইল (24 m²) মিটার-স্কেলের 3-4-5 ও 6-8-10 জ্যামিতি ব্যবহার করে; একটি ছাদের সাপোর্ট (30 ft²) 5-12-13 ত্রিভুজ ব্যবহার করে; একটি জরিপ খণ্ড (84 m²) 7-24-25 ব্যবহার করে। প্রতিটি প্যানেল সন্নিহিত বাহু, অতিভুজ, অন্তর্ভুক্ত কোণ ও ফলের ক্ষেত্রফলকে নাম দেয়, যাতে পরিমাপ থেকে উত্তর পর্যন্ত পথ দৃশ্যমান থাকে।" }
        ],
        "imgAlt": "চারটি প্যানেল: কাচের জানালা 6 m2, ছাদের প্যানেল 30 ft2, র‍্যাম্প প্রোফাইল 24 m2, জরিপ খণ্ড 84 m2",
        "figcaption": "চারটি বাস্তব ব্যবহার: জানালা, ছাদের সাপোর্ট, র‍্যাম্প প্রোফাইল ও জরিপ খণ্ড, তাদের ক্ষেত্রফলসহ।"
      },
      "sec-related": {
        "h2": "সম্পর্কিত সমকোণ ত্রিভুজ ক্যালকুলেটরগুলো দেখুন",
        "blocks": [
          { "kind": "p", "text": "ভিন্ন ভিন্ন পরিমাপের জন্য ভিন্ন ভিন্ন ক্যালকুলেটর দরকার।" }
        ]
      },
      "sec-faq": {
        "h2": "প্রায়শই জিজ্ঞাসিত প্রশ্ন",
        "blocks": [
          { "kind": "p", "text": "নিচে একটি বাহু ও কোণ থেকে ক্ষেত্রফল সম্পর্কে সবচেয়ে সাধারণ প্রশ্নগুলোর উত্তর দেওয়া হলো।" }
        ]
      },
      "sec-conclusion": {
        "h2": "তিনটি ইনপুটেই পুরো ক্ষেত্রফল",
        "blocks": [
          { "kind": "p", "text": "একটি বাহু, অতিভুজ ও এদের মধ্যবর্তী কোণ যথেষ্ট বলে প্রমাণিত হয়। সাইন অনুপাত অনুপস্থিত বাহু পুনর্গঠন করে, অর্ধেক করা ঘেরা আয়তক্ষেত্রকে ত্রিভুজে রূপান্তর করে, এবং সঙ্গতি সম্পর্ক প্রতিটি ইনপুটকে অন্যগুলোর বিরুদ্ধে পরীক্ষা করতে দেয়। ইনপুট সঠিক হলে পদ্ধতিতে কিছুই আনুমানিক নয়।" },
          { "kind": "p", "text": "কাজের অভ্যাসটি সহজ: কোণ A থেকে বাহুগুলোর নাম দিন, একক মিলিয়ে রাখুন, b = c cos(A) নিশ্চিত করুন, এবং বাহুর সূত্রে উত্তর যাচাই করুন। এই অভ্যাসগুলো থাকলে K = bc sin(A)/2 জ্যামিতির যেকোনো ক্ষেত্রফল গণনার মতোই নির্ভরযোগ্য।" }
        ]
      }
    }
  },
  "ja": {
    "faqs": [
      {
        "question": "1辺と1つの角を使った面積の公式は何ですか？",
        "answer": "K = bc sin(A) / 2 です。ここで b は角 A に隣接する辺、c は斜辺、A はその間の鋭角です。例えば b = 4、c = 5、A = 36.87° のとき K = (4 × 5 × 0.6) / 2 = 6 平方単位となります。角は度で入力し、2辺の長さの単位をそろえてください。"
      },
      {
        "question": "なぜ公式はサインを使うのですか？",
        "answer": "サインは斜辺から欠けている垂直な辺を復元します。sin(A) = a/c なので、両辺に c を掛けると a = c sin(A) が得られます。標準の面積公式には2つの辺が必要で K = ab/2 ですから、a にサインの式を代入すると K = bc sin(A)/2 となります。サインは測定した斜辺と測定していない高さをつなぐ架け橋です。"
      },
      {
        "question": "角 A に隣接する辺はどれですか？",
        "answer": "辺 b が角 A に隣接します。その角を作る2辺のうちの1つで、もう1つは斜辺 c です。辺 a は角 A の対辺で、三角形の向かい側にあります。基準角を角 B に変えると名称が入れ替わり、b が対辺、a が隣辺になります。"
      },
      {
        "question": "欠けている辺を知らなくても面積を計算できますか？",
        "answer": "はい、それがこの電卓の存在意義です。角 A のサインは斜辺に対する欠けている辺の比を符号化しているため、c sin(A) は辺を測らずに辺 a を復元します。b、c、A を入力すれば、残りは公式が処理します。第3の辺を別途入力する必要は決してありません。"
      },
      {
        "question": "角 A と角 B の違いは何ですか？",
        "answer": "どちらも直角三角形の鋭角で、A + B = 90° です。角 A は辺 b と斜辺 c の間にあり、角 B は辺 a と斜辺 c の間にあります。公式 K = bc sin(A)/2 には特に角 A が必要です。辺 b と c に対して角 B を使うと誤った答えになります。角 B は辺 a と c の組み合わせと対になります。"
      },
      {
        "question": "電卓は度とラジアンのどちらを使いますか？",
        "answer": "度です。ラジアンの値を入力するとサインがまったく異なり、面積が間違います。まずラジアンを度に変換してください。度 = ラジアン × 180/π です。例えば π/6 ラジアンは 30° に等しくなります。計算の前に必ず角の単位を確認してください。"
      },
      {
        "question": "与えられた辺と斜辺に対して任意の角を使えますか？",
        "answer": "いいえ。3つの入力は b = c cos(A) を満たさなければならず、辺が決まれば角は固定されます。b = 4、c = 5 の場合、角 A は約 36.87° でなければなりません。異なる角を入力すると異なる三角形を表すことになり、結果は目的の直角三角形と一致しません。"
      },
      {
        "question": "測定値が有効な直角三角形をなすかどうかを確認するにはどうすればよいですか？",
        "answer": "3つの条件を確認します。斜辺が辺より長いこと（c > b > 0）、角が 0° と 90° の間に厳密に収まること、そして b = c cos(A) が成り立つことです。さらに確実にするには a = c sin(A) とピタゴラスの定理 a² + b² = c² を確認します。いずれかの確認が失敗したら、少なくとも1つの測定値か名称が間違っています。"
      },
      {
        "question": "2辺が分かっている場合に面積を計算できますか？",
        "answer": "はい、その場合は短い公式 K = ab/2 をそのまま使え、角もサインも不要です。辺が 3 と 4 なら K = 6 です。サインベースの電卓は1辺が欠けている場合のために設計されています。2辺とも分かっている場合は辺の公式の方が単純で、まったく同じ結果が得られます。"
      },
      {
        "question": "間違った角を入力するとどうなりますか？",
        "answer": "電卓は受け取ったものをそのまま掛けるため、間違った角では警告なく誤った面積が出ます。b = 4、c = 5 に対して A = 36.87° の代わりに B = 53.13° を入力すると、6 ではなく 8 になります。入力した角が辺 b と斜辺の間の角であることを必ず確認してください。"
      },
      {
        "question": "斜辺が固定された場合の最大面積はいくつですか？",
        "answer": "K = c²/4 で、角 A = 45° のとき、辺が c/√2 の二等辺三角形で達成されます。斜辺が 10 の場合、上限は 25 平方単位です。その斜辺を持つ直角三角形がこれより大きな面積を囲むことはできません。結果が c²/4 を超えたら、入力に矛盾があります。"
      },
      {
        "question": "サインベースの公式と標準の底辺・高さ公式の違いは何ですか？",
        "answer": "数学的な違いはありません。K = bc sin(A)/2 に sin(A) = a/c を代入すると K = ab/2 となり、標準の底辺・高さ公式になります。サイン版は既知の量が異なる場合に書き換えた同じ公式です。斜辺と角が分かっているときはサイン形を、2辺が分かっているときは ab/2 を使います。"
      }
    ],
    "relatedHeading": "関連する直角三角形の電卓を見る",
    "relatedItems": [
      "直角三角形の面積電卓",
      "辺から求める直角三角形の面積電卓",
      "角から求める直角三角形の面積電卓",
      "角から求める直角三角形の辺電卓",
      "直角三角形の辺電卓",
      "直角三角形の三角比電卓"
    ],
    "relatedIntro": "測定値が異なれば、必要な電卓も異なります。",
    "faqHeading": "よくある質問",
    "tocHeading": "このガイドの内容",
    "tocItems": {
      "sec-intro": "1辺と1つの角を使って直角三角形の面積を計算する方法",
      "sec-anatomy": "直角三角形の辺と角を理解する",
      "sec-sine": "直角三角形の計算におけるサイン関数を理解する",
      "sec-formula": "直角三角形の面積公式がサインを使うのはなぜですか",
      "sec-howto": "辺と角から求める直角三角形の面積電卓の使い方",
      "sec-consistency": "辺・斜辺・角が有効な直角三角形をなすか確認する方法",
      "sec-examples": "1辺と1つの角を使った直角三角形の面積のステップバイステップ例",
      "sec-practical": "辺と角から求める直角三角形の面積の実生活での応用",
      "sec-compare": "サインベースの公式が辺の公式と同じ面積を出すのはなぜですか",
      "sec-angle-effect": "挟角は直角三角形の面積にどう影響しますか",
      "sec-alternative": "1辺とその角だけで直角三角形の面積を計算できますか",
      "sec-units": "面積計算における角の単位と測定を理解する",
      "sec-mistakes": "1辺と1つの角から直角三角形の面積を計算する際のよくある間違い",
      "sec-verify": "直角三角形の面積が正しいか確認する方法",
      "sec-applications": "実践における辺と角からの直角三角形の面積",
      "sec-related": "関連する直角三角形の電卓を見る",
      "sec-faq": "よくある質問",
      "sec-conclusion": "3つの入力が面積のすべてを担う"
    },
    "sections": {
      "sec-intro": {
        "h2": "1辺と1つの角を使って直角三角形の面積を計算する方法",
        "blocks": [
          { "kind": "p", "text": "[[b=4]]、[[c=5]]、[[A=36.87^\\circ]] とします。[[K=\\frac{bc\\sin(A)}{2}]] を適用します。[[K=\\frac{4\\times5\\times0.6}{2}]]、[[[\\boxed{K=6\\text{ square units}}]]] です。結果は3辺に囲まれた平面の総面積、つまり6平方単位の表面を表します。これは辺と角から求める直角三角形の面積電卓がこれらの入力に対して返す値とまったく同じです。" },
          { "kind": "p", "text": "電卓は3つの測定値を求めます。辺 [[b]] は角 [[A]] の隣にあり、斜辺 [[c]] は直角の向かいにある最長の辺、角 [[A]] はその間に挟まれた鋭角です。[[\\sin(A)]] は欠けている辺 [[a]] と斜辺 [[c]] の比に等しいため、公式は測定せずに欠けている高さを復元します。[[b]]、[[c]]、[[\\sin(A)]] を掛けると囲む長方形ができ、それを2で割ると三角形に切り取られます。" },
          { "kind": "p", "text": "これは第3の辺が測りにくいときに重要です。図面が斜辺と1辺を与え、分度器や前の手順が角を与える場合があります。サインがその隔たりを埋めるため、既知のものから面積が導かれます。" }
        ]
      },
      "sec-anatomy": {
        "h2": "直角三角形の辺と角を理解する",
        "blocks": [
          { "kind": "p", "text": "公式が理解できる前に、名称が正確でなければなりません。以下の各記号は電卓に登場し、それぞれ1つの固定された意味を持ちます。" },
          { "kind": "h3", "text": "直角三角形とは何ですか" },
          { "kind": "p", "text": "直角三角形は、1つの内角が90度に等しい三角形です。その角を作る2辺は直角を挟む辺で、互いに垂直です。直角の向かいの辺は斜辺です。3つの内角の合計が180度であるため、2つの鋭角は [[A+B=90^\\circ]] を満たし、互いに余角になります。一方を知れば他方が決まります。" },
          { "kind": "h3", "text": "斜辺とは何ですか" },
          { "kind": "p", "text": "斜辺は直角の向かいの辺です。三角形をどのように回転させたり描いたりしても、常に最長の辺です。電卓はこれを辺 [[c]] として使うため、正しく特定することが最初の手順です。直角を見つけ、その向かいの辺を取ります。傾いた図面で長く見えても、直角を挟む辺がこの役割を果たすことは決してありません。" },
          { "kind": "h3", "text": "直角を挟む2辺とは何ですか" },
          { "kind": "p", "text": "直角を挟む2辺は、直角で交わり互いに垂直な辺です。辺 [[a]] は角 [[A]] の向かいにあり、辺 [[b]] は角 [[B]] の向かいにあります。電卓は辺 [[b]]、つまり角 [[A]] に隣接する辺を最初の入力として受け取ります。2辺が合わさって、90度の角がある角を形成します。" },
          { "kind": "h3", "text": "角 A を理解する" },
          { "kind": "p", "text": "角 [[A]] は辺 [[b]] と斜辺 [[c]] によって作られる鋭角です。電卓の2つの辺入力の間の挟角であるため、[[\\angle A=\\text{angle between }b\\text{ and }c]] です。この組み合わせは固定されています。公式で [[A]] と言及されるときは、辺 [[b]] の遠端の角ではなく、既知の辺が斜辺と交わる角を意味します。" },
          { "kind": "h3", "text": "角 A に対する対辺と隣辺" },
          { "kind": "p", "text": "角 [[A]] に立ち、三角形の向こう側を見ます。触れずに向き合う辺が対辺、斜辺とともに角を形成する辺が隣辺です。これらの名称は基準角に従うため、基準を [[A]] から [[B]] に変えると、どちらの辺がどちらかが入れ替わります。" },
          { "kind": "h3", "text": "挟角を理解する" },
          { "kind": "p", "text": "挟角は、選んだ2辺によって作られる角です。面積公式は [[b]] と [[c]] を掛けるため、必要な角はその間に挟まれた角、つまり角 [[A]] です。この電卓の正しい組み合わせは [[b,\\;c,\\;A]] です。同じ2辺に対して他の角を使うと公式の前提が崩れるため、角 [[A]] を角 [[B]] と混同しないでください。" }
        ],
        "imgAlt": "直角三角形 ABC: 辺 b と斜辺 c を強調、挟角 A、欠けている辺 a に名称",
        "figcaption": "三角形 ABC: 強調された隣辺 b と斜辺 c が挟角 A を作ります。辺 a は欠けている対辺です。"
      },
      "sec-sine": {
        "h2": "直角三角形の計算におけるサイン関数を理解する",
        "blocks": [
          { "kind": "p", "text": "サインは比であり、長さではありません。鋭角に対して [[[\\boxed{\\sin(A)=\\frac{\\text{Opposite}}{\\text{Hypotenuse}}}]]] この三角形では [[[\\boxed{\\sin(A)=\\frac{a}{c}}]]] となります。この比は角の対辺と最長の辺を比較するため、単位のない純粋な数です。鋭角に対する値は常に0と1の間にあり、1辺が別の辺の代わりを務めることを可能にするまさにその値です。" },
          { "kind": "h3", "text": "サインが欠けている辺を見つけるのにどう役立つか" },
          { "kind": "p", "text": "[[\\sin(A)=\\frac{a}{c}]] から始めます。両辺に [[c]] を掛けます。[[[\\boxed{a=c\\sin(A)}]]] です。斜辺は比を再び長さに拡大し、その長さが欠けている辺です。電卓が [[a]] を求めないのは、この1つの変形で [[c]] と [[A]] からそれを回復できるためです。面積公式の後のすべての手順はこの代入の上に成り立っています。" },
          { "kind": "h3", "text": "数値例" },
          { "kind": "p", "text": "[[c=5]] と [[A=36.87^\\circ]] が与えられた場合、[[a=5\\times\\sin(36.87^\\circ)]]、[[a=5\\times0.6]]、[[[\\boxed{a=3}]]] となります。欠けている辺の長さは3単位で、おなじみの3-4-5三角形が完成します。1回の掛け算が別個の測定の代わりをしました。" },
          { "kind": "h3", "text": "サインがコサインやタンジェントとどう違うか" },
          { "kind": "p", "text": "コサインは隣辺を使います。[[\\cos(A)=\\frac{b}{c}]] です。タンジェントは直角を挟む2辺を使います。[[\\tan(A)=\\frac{a}{b}]] です。各比は異なる問いに答えます。この電卓に必要なのはサインです。未知なのは対辺 [[a]] で、既知の辺は斜辺 [[c]] だからです。既知の量が変われば有用な比も変わりますが、このガイドでサインの仲間から離れるものは他にありません。" }
        ]
      },
      "sec-formula": {
        "h2": "直角三角形の面積公式がサインを使うのはなぜですか",
        "blocks": [
          { "kind": "p", "text": "標準の規則から始めます。[[K=\\frac{\\text{base}\\times\\text{perpendicular height}}{2}]] です。この三角形では、自然な底辺は辺 [[b]]、垂直な高さは辺 [[a]] です。2辺は90度で交わるためです。これにより [[K=\\frac{ab}{2}]] が得られます。電卓は [[a]] を求めないため、公式はそれを復元しなければなりません。サインの比から [[a=c\\sin(A)]] です。代入します。[[K=\\frac{b(c\\sin(A))}{2}]]、したがって [[[\\boxed{K=\\frac{bc\\sin(A)}{2}}]]] です。2での割り算は底辺・高さの規則から受け継がれたもので、サインの係数は変装した欠けている辺です。" },
          { "kind": "h3", "text": "なぜ公式は2で割るのですか" },
          { "kind": "p", "text": "与えられた底辺と垂直な高さを持つ三角形は、同じ底辺と高さで作られた平行四辺形のちょうど半分を満たします。任意の三角形を1辺に沿って2倍にするとその平行四辺形が完成するため、三角形はその面積の半分を持ちます。2での割り算は慣習ではなく幾何学であり、底辺と高さをどの公式が与えても適用されます。" },
          { "kind": "h3", "text": "サインは欠けている高さをどう置き換えるのですか" },
          { "kind": "p", "text": "[[K=\\frac{ab}{2}]] における垂直な高さは辺 [[a]] です。[[\\sin(A)=\\frac{a}{c}]] であるため、斜辺にサインを掛けると無次元の比が再び長さ [[a]] に引き伸ばされます。利用者は [[a]] の代わりに [[c]] と [[A]] を測定し、積 [[c\\sin(A)]] が公式の内部で変換を静かに実行します。" },
          { "kind": "h3", "text": "なぜ斜辺に隣辺を掛けるのですか" },
          { "kind": "p", "text": "任意の三角形に対する一般規則は、2辺とその挟角が面積を決定するということです。ここでは既知の2辺は [[b]] と [[c]] で、その挟角は [[A]] です。公式はまさにその2辺を掛け、[[\\sin(A)]] でスケールして半分にします。他の辺の組み合わせでは、異なる挟角が必要になります。" },
          { "kind": "h3", "text": "この公式は他の三角形にも使えますか" },
          { "kind": "p", "text": "はい、一般形では使えます。[[[\\boxed{K=\\frac{xy\\sin(\\theta)}{2}}]]] で、[[x]] と [[y]] は任意の2辺、[[\\theta]] はその間の角です。直角三角形版は、この規則に [[x=b]]、[[y=c]]、[[\\theta=A]] を当てはめたものです。電卓は1つの制限を加えます。3つの入力は [[b=c\\cos(A)]] のような直角三角形の関係も満たさなければなりません。一般公式は任意の挟角の組み合わせに対して面積を計算します。この電卓は結果を直角三角形として解釈します。" }
        ],
        "imgAlt": "3-4-5三角形: sin A が 3/5 に等しく辺 a = 3 を復元、2つの公式で面積 6",
        "figcaption": "サインから面積へ: sin A = 3/5 から a = 3 が得られ、K = bc sin A / 2 = 6 は K = ab/2 と一致します。"
      },
      "sec-howto": {
        "h2": "辺と角から求める直角三角形の面積電卓の使い方",
        "blocks": [
          { "kind": "p", "text": "電卓には正確に3つの入力が必要で、順番に入力します。以下の手順は画面のレイアウトに沿って、既知の測定値から確認済みの結果まで進みます。" }
        ],
        "steps": [
          "<strong>隣辺 b を特定します。</strong> 斜辺とともに角 A を作る辺です。",
          "<strong>斜辺 c を特定します。</strong> 最長の辺で、直角の向かいにあります。",
          "<strong>挟角である鋭角 A を特定します。</strong> 辺 b と斜辺 c の間の角です。",
          "<strong>2辺に互換性のある単位を使います。</strong> メートルにはメートル、フィートにはフィートで、混ぜません。",
          "<strong>最初の入力に辺 b を入力します。</strong> これは角 A に隣接する辺です。",
          "<strong>2番目の入力に斜辺 c を入力します。</strong> 辺 b より大きくなければなりません。",
          "<strong>角 A を度で入力します。</strong> 電卓はラジアンではなく度を想定しています。",
          "<strong>角が0度と90度の間にあることを確認します。</strong> 端点では三角形になりません。",
          "<strong>斜辺が辺より長いことを確認します。</strong> c が b より大きくない場合、名称が間違っています。",
          "<strong>3つの値が1つの直角三角形を表すことを確認します。</strong> b が c cos(A) に等しいことを、少なくとも近似的に確認します。",
          "<strong>「面積を計算」をクリックします。</strong> 代入とともに結果が表示されます。",
          "<strong>結果を確認します。</strong> 面積を読み、妥当に見えるか確かめます。",
          "<strong>解法の手順を読みます。</strong> 公式、サインの値、計算過程が示されます。",
          "<strong>最終結果が平方単位になっていることを確認します。</strong> 入力に合わせた長さの単位の2乗です。",
          "<strong>次の問題を入力する前にリセットを使います。</strong> 3つの入力欄がすべて消去され、きれいに始められます。"
        ],
        "closingParagraphs": [
          "このページは1つの電卓設定を提供します。[[b]]、[[c]]、[[A]] です。第2のモードはなく、このページのすべての面積は上記のサイン公式から得られます。"
        ]
      },
      "sec-consistency": {
        "h2": "辺・斜辺・角が有効な直角三角形をなすか確認する方法",
        "blocks": [
          { "kind": "p", "text": "3つの入力は独立ではありません。直角三角形では [[[\\boxed{\\cos(A)=\\frac{b}{c}}]]]、したがって [[[\\boxed{b=c\\cos(A)}]]] です。3つの値のうち2つを固定すれば、3つ目はすでに決まっています。不一致な3つの数値を入力しても、公式が前提とする三角形にはなりません。" },
          { "kind": "h3", "text": "2辺の長さから角を確認する" },
          { "kind": "p", "text": "[[b]] と [[c]] が既知の場合、角は強制されます。[[A=\\cos^{-1}\\left(\\frac{b}{c}\\right)]] です。例: [[b=4]]、[[c=5]] なら [[A=\\cos^{-1}(4/5)]]、[[[\\boxed{A\\approx36.87^\\circ}]]] となります。分度器や前の計算がこれらの辺に対して異なる角を示したら、どれかの数値が間違っています。辺が決め、角は従います。" },
          { "kind": "h3", "text": "角から辺の長さを確認する" },
          { "kind": "p", "text": "確認は逆方向にも行えます。[[c=10]] と [[A=60^\\circ]] が与えられた場合、隣辺は [[b=10\\cos(60^\\circ)]]、[[[\\boxed{b=5}]]] でなければなりません。同じ斜辺と角で [[b=8]] を入力すると同じ直角三角形にはなりません。[[10\\cos(60^\\circ)]] は8ではなく5に等しいからです。斜辺が固定された場合、各角が許す隣辺の長さはちょうど1つです。" },
          { "kind": "h3", "text": "入力が不整合の場合はどうなりますか" },
          { "kind": "p", "text": "2辺と挟角の一般公式は、不整合な入力に対しても数値を返します。受け取ったものを掛けるだけだからです。しかし [[b\\neq c\\cos(A)]] の場合、測定値は [[c]] を斜辺、[[b]] をその隣辺とする直角三角形を表していません。数値の答えは有効な幾何学の証明ではなく、整合性の確認こそが証明です。" },
          { "kind": "h3", "text": "基本的な入力条件" },
          { "kind": "p", "text": "有効な入力は [[c>b>0]]、[[0^\\circ<A<90^\\circ]]、[[b=c\\cos(A)]] を満たします。1つ目は斜辺を最長に保ち、2つ目は角を鋭角に保ち、3つ目は3つの値を1つの三角形に結びつけます。面積を信じる前に3つすべてを確認してください。" }
        ],
        "imgAlt": "3つのパネル: 有効な 4、5、36.87度。有効な 5、10、60度。無効な 8、10、60度",
        "figcaption": "有効な入力は b = c cos A を満たします。第3のパネルは 10 cos 60度 = 5 であり、8 ではありません。"
      },
      "sec-examples": {
        "h2": "1辺と1つの角を使った直角三角形の面積のステップバイステップ例",
        "blocks": [
          { "kind": "p", "text": "4つの古典的な直角三角形で、大きさを変えながら手法を示します。各例はサイン公式に代入し、2辺の公式で結果を検証します。" },
          { "kind": "h3", "text": "例1: 3-4-5の直角三角形" },
          { "kind": "p", "text": "[[b=4]]、[[c=5]]、[[A=36.87^\\circ]] とします。手順1: [[K=\\frac{bc\\sin(A)}{2}]]。手順2: [[K=\\frac{4\\times5\\times\\sin(36.87^\\circ)}{2}]]。手順3: [[\\sin(36.87^\\circ)\\approx0.6]]。手順4: [[K=\\frac{20\\times0.6}{2}]]、[[[\\boxed{K=6\\text{ square units}}]]]。検証: [[a=5\\times0.6=3]]、そして [[K=\\frac{4\\times3}{2}=6]]。" },
          { "kind": "h3", "text": "例2: 5-12-13の直角三角形" },
          { "kind": "p", "text": "[[b=12]]、[[c=13]]、[[A\\approx22.62^\\circ]] とし、[[\\sin(A)=\\frac{5}{13}]] とします。代入: [[K=\\frac{12\\times13\\times(5/13)}{2}]]。13が約分されます。[[K=\\frac{12\\times5}{2}]]、[[[\\boxed{K=30\\text{ square units}}]]]。検証: [[a=13\\times(5/13)=5]]、そして [[K=\\frac{12\\times5}{2}=30]]。" },
          { "kind": "h3", "text": "例3: 8-15-17の直角三角形" },
          { "kind": "p", "text": "[[b=15]]、[[c=17]]、[[A\\approx28.07^\\circ]] とし、[[\\sin(A)=\\frac{8}{17}]] とします。[[K=\\frac{15\\times17\\times(8/17)}{2}=\\frac{15\\times8}{2}]]、[[[\\boxed{K=60\\text{ square units}}]]]。検証: [[a=8]]、そして [[\\frac{15\\times8}{2}=60]]。" },
          { "kind": "h3", "text": "例4: 7-24-25の直角三角形" },
          { "kind": "p", "text": "[[b=24]]、[[c=25]]、[[A\\approx16.26^\\circ]] とし、[[\\sin(A)=\\frac{7}{25}]] とします。[[K=\\frac{24\\times25\\times(7/25)}{2}=\\frac{24\\times7}{2}]]、[[[\\boxed{K=84\\text{ square units}}]]]。検証: [[a=7]]、そして [[\\frac{24\\times7}{2}=84]]。" },
          { "kind": "h3", "text": "基礎例の比較" }
        ],
        "table": {
          "headers": ["三角形の種類", "既知の辺 b", "斜辺 c", "角 A", "計算された面積"],
          "rows": [
            ["3-4-5", "4", "5", "36.87°", "6"],
            ["5-12-13", "12", "13", "22.62°", "30"],
            ["8-15-17", "15", "17", "28.07°", "60"],
            ["7-24-25", "24", "25", "16.26°", "84"]
          ]
        }
      },
      "sec-practical": {
        "h2": "辺と角から求める直角三角形の面積の実生活での応用",
        "blocks": [
          { "kind": "p", "text": "12の解決済みの場面が、公式をページから作業場、現場、スタジオへ運びます。各場面は直角三角形のパネル、区画、断面、または単純化されたモデルに名前を付け、電卓の3つの入力を公式に通し、数値の背後にある仮定を述べます。実際の物体が曲線的または不規則な場合、計算はモデル化された三角形のみを対象とします。" },
          { "kind": "h3", "text": "例1: 三角形のガラス窓" },
          { "kind": "p", "text": "直角三角形のガラス窓の [[a=3\\text{ m}]]、[[b=4\\text{ m}]]、[[c=5\\text{ m}]] とします。電卓の入力: [[b=4]]、[[c=5]]、[[A\\approx36.87^\\circ]]。代入: [[K=\\frac{4\\times5\\times0.6}{2}]]、[[[\\boxed{K=6\\text{ m}^2}]]]。これは枠の余白を差し引く前の平面の三角形ガラスの面積です。" },
          { "kind": "h3", "text": "例2: 屋根の支持パネル" },
          { "kind": "p", "text": "直角三角形の屋根支持区画の [[a=5\\text{ ft}]]、[[b=12\\text{ ft}]]、[[c=13\\text{ ft}]] とします。入力: [[b=12]]、[[c=13]]、[[A\\approx22.62^\\circ]]、[[\\sin(A)=\\frac{5}{13}]]。[[K=\\frac{12\\times13\\times(5/13)}{2}]]、[[[\\boxed{K=30\\text{ ft}^2}]]]。結果は平面の三角形支持区画を表し、屋根全体ではありません。" },
          { "kind": "h3", "text": "例3: 三角形のスロープ側面断面" },
          { "kind": "p", "text": "単純化された直角三角形のスロープ断面の [[a=6\\text{ m}]]、[[b=8\\text{ m}]]、[[c=10\\text{ m}]] とします。入力: [[b=8]]、[[c=10]]、[[A\\approx36.87^\\circ]]。[[K=\\frac{8\\times10\\times0.6}{2}]]、[[[\\boxed{K=24\\text{ m}^2}]]]。これは三角形の側面断面であり、傾斜した歩行面ではありません。" },
          { "kind": "h3", "text": "例4: 鋼製ガセットプレート" },
          { "kind": "p", "text": "三角形の鋼製支持板の [[a=8\\text{ cm}]]、[[b=15\\text{ cm}]]、[[c=17\\text{ cm}]] とします。入力: [[b=15]]、[[c=17]]、[[A\\approx28.07^\\circ]]、[[\\sin(A)=\\frac{8}{17}]]。[[K=\\frac{15\\times17\\times(8/17)}{2}]]、[[[\\boxed{K=60\\text{ cm}^2}]]]。面積だけでは構造強度や耐荷重は定まりません。" },
          { "kind": "h3", "text": "例5: 三角形の庭区画" },
          { "kind": "p", "text": "単純化された直角三角形の庭区画の [[a=7\\text{ m}]]、[[b=24\\text{ m}]]、[[c=25\\text{ m}]] とします。入力: [[b=24]]、[[c=25]]、[[A\\approx16.26^\\circ]]、[[\\sin(A)=\\frac{7}{25}]]。[[K=\\frac{24\\times25\\times(7/25)}{2}]]、[[[\\boxed{K=84\\text{ m}^2}]]]。これは植栽用の三角形区画の面積の見積もりに役立ちます。" },
          { "kind": "h3", "text": "例6: 三角形の帆パネル" },
          { "kind": "p", "text": "直角三角形の帆区画の [[a=9\\text{ ft}]]、[[b=12\\text{ ft}]]、[[c=15\\text{ ft}]] とします。入力: [[b=12]]、[[c=15]]、[[A\\approx36.87^\\circ]]。[[K=\\frac{12\\times15\\times0.6}{2}]]、[[[\\boxed{K=54\\text{ ft}^2}]]]。この平面パネルの数値には縫い目や材料の余白は含まれていません。" },
          { "kind": "h3", "text": "例7: 合板の切り出しテンプレート" },
          { "kind": "p", "text": "直角三角形の合板テンプレートの [[a=12\\text{ cm}]]、[[b=16\\text{ cm}]]、[[c=20\\text{ cm}]] とします。入力: [[b=16]]、[[c=20]]、[[A\\approx36.87^\\circ]]。[[K=\\frac{16\\times20\\times0.6}{2}]]、[[[\\boxed{K=96\\text{ cm}^2}]]]。面積は切り出しの無駄の前に必要な平面材料の見積もりに役立ちます。" },
          { "kind": "h3", "text": "例8: 三角形の道路標識" },
          { "kind": "p", "text": "直角三角形の標識パネルの [[a=20\\text{ cm}]]、[[b=21\\text{ cm}]]、[[c=29\\text{ cm}]] とします。入力: [[b=21]]、[[c=29]]、[[A\\approx43.60^\\circ]]、[[\\sin(A)=\\frac{20}{29}]]。[[K=\\frac{21\\times29\\times(20/29)}{2}]]、[[[\\boxed{K=210\\text{ cm}^2}]]]。これは標識の平面の面積の見積もりです。" },
          { "kind": "h3", "text": "例9: 測量区画" },
          { "kind": "p", "text": "直角三角形の測量区画の [[a=9\\text{ m}]]、[[b=40\\text{ m}]]、[[c=41\\text{ m}]] とします。入力: [[b=40]]、[[c=41]]、[[A\\approx12.68^\\circ]]、[[\\sin(A)=\\frac{9}{41}]]。[[K=\\frac{40\\times41\\times(9/41)}{2}]]、[[[\\boxed{K=180\\text{ m}^2}]]]。結果は単純化された直角三角形の土地区画に適用されます。" },
          { "kind": "h3", "text": "例10: 三角形のひさし支持部" },
          { "kind": "p", "text": "直角三角形のひさし支持区画の [[a=15\\text{ ft}]]、[[b=20\\text{ ft}]]、[[c=25\\text{ ft}]] とします。入力: [[b=20]]、[[c=25]]、[[A\\approx36.87^\\circ]]。[[K=\\frac{20\\times25\\times0.6}{2}]]、[[[\\boxed{K=150\\text{ ft}^2}]]]。これは平面の三角形区画であり、不規則なひさし全体の布地ではありません。" },
          { "kind": "h3", "text": "例11: 工業用地の断面" },
          { "kind": "p", "text": "単純化された直角三角形の工業用地区画の [[a=11\\text{ m}]]、[[b=60\\text{ m}]]、[[c=61\\text{ m}]] とします。入力: [[b=60]]、[[c=61]]、[[A\\approx10.39^\\circ]]、[[\\sin(A)=\\frac{11}{61}]]。[[K=\\frac{60\\times61\\times(11/61)}{2}]]、[[[\\boxed{K=330\\text{ m}^2}]]]。実際の不規則な用地は複数の図形に分割する必要があるかもしれません。" },
          { "kind": "h3", "text": "例12: 倉庫の屋根端部区画" },
          { "kind": "p", "text": "大きな直角三角形の倉庫屋根端部区画の [[a=13\\text{ ft}]]、[[b=84\\text{ ft}]]、[[c=85\\text{ ft}]] とします。入力: [[b=84]]、[[c=85]]、[[A\\approx8.80^\\circ]]、[[\\sin(A)=\\frac{13}{85}]]。[[K=\\frac{84\\times85\\times(13/85)}{2}]]、[[[\\boxed{K=546\\text{ ft}^2}]]]。結果は平面の三角形端部区画の見積もりです。" },
          { "kind": "h3", "text": "実用例の比較" }
        ],
        "table": {
          "headers": ["実用的な応用", "辺 a", "既知の辺 b", "斜辺 c", "角 A", "計算された面積", "測定単位"],
          "rows": [
            ["ガラス窓", "3", "4", "5", "36.87°", "6", "m²"],
            ["屋根支持", "5", "12", "13", "22.62°", "30", "ft²"],
            ["スロープ断面", "6", "8", "10", "36.87°", "24", "m²"],
            ["ガセットプレート", "8", "15", "17", "28.07°", "60", "cm²"],
            ["庭区画", "7", "24", "25", "16.26°", "84", "m²"],
            ["帆パネル", "9", "12", "15", "36.87°", "54", "ft²"],
            ["合板テンプレート", "12", "16", "20", "36.87°", "96", "cm²"],
            ["道路標識", "20", "21", "29", "43.60°", "210", "cm²"],
            ["測量区画", "9", "40", "41", "12.68°", "180", "m²"],
            ["ひさし支持", "15", "20", "25", "36.87°", "150", "ft²"],
            ["工業区画", "11", "60", "61", "10.39°", "330", "m²"],
            ["倉庫屋根端部", "13", "84", "85", "8.80°", "546", "ft²"]
          ]
        }
      },
      "sec-compare": {
        "h2": "サインベースの公式が辺の公式と同じ面積を出すのはなぜですか",
        "blocks": [
          { "kind": "p", "text": "[[K=\\frac{bc\\sin(A)}{2}]] から始め、[[\\sin(A)=\\frac{a}{c}]] を思い出します。代入: [[K=\\frac{bc(a/c)}{2}]]。[[c]] が約分され、[[[\\boxed{K=\\frac{ab}{2}}]]] が残ります。サイン公式は新しい面積を発明するのではなく、既知の量の異なる組み合わせから同じ面積を計算するもので、欠けている辺はサインの比を通して忍び込んでいます。" },
          { "kind": "h3", "text": "サイン公式はいつより有用ですか" },
          { "kind": "p", "text": "1辺が測定され、斜辺が既知で、挟角が利用可能であり、第3の辺が直接測定されていないときに使います。現場測定、縮尺図面、測量データは、まさにこの組み合わせで届くことがよくあります。公式はこの3つの数値を1行で面積に変え、欠けている辺を先に求める回り道は不要です。" },
          { "kind": "h3", "text": "辺の公式はいつより単純ですか" },
          { "kind": "p", "text": "2つの垂直な辺がすでに既知の場合、[[K=\\frac{ab}{2}]] の方が短くなります。サインも角もなく、1回の掛け算と半分にするだけです。1辺が欠けていて角がそれを補えるときにだけサイン版を使います。" },
          { "kind": "h3", "text": "数値比較" },
          { "kind": "p", "text": "3-4-5三角形では、サイン法で [[K=\\frac{4\\times5\\times0.6}{2}=6]]、辺の方法で [[K=\\frac{3\\times4}{2}=6]] となります。両方の経路は同じ幾何学を通るため、一致しなければなりません。一致しない場合、悪いのは入力か計算であり、公式ではありません。" }
        ]
      },
      "sec-angle-effect": {
        "h2": "挟角は直角三角形の面積にどう影響しますか",
        "blocks": [
          { "kind": "p", "text": "斜辺が固定された場合、角は自由に変えられません。直角三角形の関係が [[b]] と [[A]] を結びつけています。この制約を正直に扱うと、[[A]] が0度と90度の間を動くにつれて面積がどのように増減するかが正確に分かります。" },
          { "kind": "h3", "text": "角 A が大きくなるとどうなりますか" },
          { "kind": "p", "text": "[[c]] を固定すると [[b=c\\cos(A)]]、[[a=c\\sin(A)]] となるため、[[K=\\frac{c^2\\sin(A)\\cos(A)}{2}]] です。倍角の公式により [[[\\boxed{K=\\frac{c^2\\sin(2A)}{4}}]]] が得られます。[[A]] が下から45度に近づくにつれて面積は増え、45度で頂点に達し、90度に向かって減少します。30°と60°のような余角は、[[\\sin(2A)]] が45度について対称であるため、同じ面積を与えます。" },
          { "kind": "h3", "text": "斜辺が固定された場合の最大面積" },
          { "kind": "p", "text": "頂点は [[A=45^\\circ]] で起こり、そこで [[\\sin(2A)=1]] となります。[[[\\boxed{K_{\\max}=\\frac{c^2}{4}}]]] です。そこでは [[a=b=\\frac{c}{\\sqrt{2}}]] となるため、面積を最大化する三角形は二等辺です。固定された斜辺は、その2乗の4分の1を超える直角三角形の面積を囲めず、それに達するのは二等辺の形だけです。" },
          { "kind": "h3", "text": "数値例" },
          { "kind": "p", "text": "[[c=10]] の場合、上限は [[K_{\\max}=\\frac{10^2}{4}]]、[[[\\boxed{K_{\\max}=25}]]] です。[[A=45^\\circ]] では辺はそれぞれ [[10/\\sqrt{2}\\approx7.07]] で、[[\\frac{7.07\\times7.07}{2}\\approx25]] となります。90°は許容できる鋭角入力ではないことに注意してください。三角形が直線に潰れてしまいます。" }
        ]
      },
      "sec-alternative": {
        "h2": "1辺とその角だけで直角三角形の面積を計算できますか",
        "blocks": [
          { "kind": "p", "text": "はい、サインの代わりにタンジェントを使います。辺 [[b]] と角 [[A]] が既知の場合、対辺は [[a=b\\tan(A)]] から得られます。これを [[K=\\frac{ab}{2}]] に入れます。[[K=\\frac{b(b\\tan(A))}{2}]]、したがって [[[\\boxed{K=\\frac{b^2\\tan(A)}{2}}]]] です。他の角からは、[[b=a\\tan(B)]] により [[[\\boxed{K=\\frac{a^2\\tan(B)}{2}}]]] が得られます。これらは真の代替手法であり、斜辺が未知でも1辺とその角が手元にある場合に有用です。上記の電卓の追加モードではなく数学的な代替案であり、電卓は [[b]]、[[c]]、[[A]] のみで動作します。" }
        ]
      },
      "sec-units": {
        "h2": "面積計算における角の単位と測定を理解する",
        "blocks": [
          { "kind": "p", "text": "面積は、それを作るために掛けられた2つの長さから単位を受け継ぎ、角は何の単位も寄与しません。3つの入力を互換性のある単位に保つことが、答えを正直に保ちます。" },
          { "kind": "h3", "text": "度とラジアン" },
          { "kind": "p", "text": "電卓は度を想定しています。[[\\text{Degrees}=\\text{Radians}\\times\\frac{180}{\\pi}]] で変換します。例えば [[\\frac{\\pi}{6}\\text{ radians}=30^\\circ]] です。度モードの入力欄にラジアンモードの角を入れると、サインの値が静かに変わります。[[\\sin(30^\\circ)=0.5]] ですが [[\\sin(30\\text{ radians})\\approx-0.99]] となり、面積が台無しになります。まず変換してから入力してください。" },
          { "kind": "h3", "text": "サインに単位がないのはなぜですか" },
          { "kind": "p", "text": "サインは2つの長さの比であるため、単位は約分されます。対辺を斜辺で割ったものは純粋な数です。答えの平方単位は、[[b]] に [[c]] を掛けたものからすべて生じます。そのため公式の単位計算は単純です。2つの長さの単位をそろえれば、面積の単位は従います。" },
          { "kind": "h3", "text": "一般的な測定単位" },
          { "kind": "p", "text": "メートルからは平方メートル、センチメートルからは平方センチメートル、フィートからは平方フィート、インチからは平方インチが生じます。[[\\text{m}\\times\\text{m}=\\text{m}^2]] で、すべての長さの単位に同じパターンが当てはまります。センチメートルとメートルのような混合単位は、公式を適用する前に1つの単位に変換しなければならず、そうしないと数値に明確な意味がありません。" },
          { "kind": "h3", "text": "早すぎる丸めが結果に影響するのはなぜですか" },
          { "kind": "p", "text": "中間手順では完全な精度を保ち、最終的な答えだけを丸めてください。36.87°の背後にある正確な角は36.869897°で、そのサインは正確に0.6です。先に角を丸めるとサインがわずかにずれ、そのずれは [[b]] と [[c]] を通して掛けられ、面積に伝わります。1つの三角形では小さくても、プロジェクト全体では目立ちます。" }
        ]
      },
      "sec-mistakes": {
        "h2": "1辺と1つの角から直角三角形の面積を計算する際のよくある間違い",
        "blocks": [
          { "kind": "p", "text": "このトピックでのほぼすべての誤答は、悪い計算ではなく、誤った名称の入力に起因します。以下に挙げる16の間違いは、繰り返し現れるもので、それぞれ原因と修正方法を添えています。" },
          { "kind": "h3", "text": "1. 斜辺を直角を挟む辺と混同する" },
          { "kind": "p", "text": "斜辺は直角の向かいの辺であり、最長の辺です。直角を挟む辺は直角に接します。入れ替えると [[c]] に誤った長さが入ります。修正: まず直角を見つけ、その向かいの辺を取ります。" },
          { "kind": "h3", "text": "2. 角 A を誤った辺と組み合わせる" },
          { "kind": "p", "text": "角 [[A]] は辺 [[b]] と斜辺 [[c]] の間にあります。それを辺 [[a]] と組み合わせると、公式が前提とする挟角の関係が乱れます。修正: 入力した角を形成する2辺をたどります。" },
          { "kind": "h3", "text": "3. 対辺と隣辺を混同する" },
          { "kind": "p", "text": "対辺は角の向かい側を意味し、隣辺はそれに接し、斜辺のそばにあることを意味します。基準角が変わると名称は入れ替わります。修正: 角 [[A]] に立って、そこから各辺に名前を付けます。" },
          { "kind": "h3", "text": "4. 対応する辺を変えずに角 A の代わりに角 B を使う" },
          { "kind": "p", "text": "角 [[B]] は辺 [[a]] と [[c]] と組み合わさり、[[b]] と [[c]] ではありません。[[b]] と [[c]] をそのままに [[B]] を入力すると、異なる量が計算されます。修正: 各角はそれぞれの辺の組み合わせとともに使うか、まず [[B]] を [[A]] に変換します。" },
          { "kind": "h3", "text": "5. 電卓が度を想定しているのにラジアンを使う" },
          { "kind": "p", "text": "36.87（度）のあるべきところに0.6435（ラジアン）を入力すると、[[\\sin(A)]] が完全に変わります。修正: 電卓の単位を確認し、必要なら [[\\times\\frac{180}{\\pi}]] で変換してから入力します。" },
          { "kind": "h3", "text": "6. 2で割るのを忘れる" },
          { "kind": "p", "text": "[[b\\times c\\times\\sin(A)]] を掛けると、囲む平行四辺形の面積、つまり三角形の2倍が出ます。修正: 積を半分にします。/2は公式の一部であり、任意ではありません。" },
          { "kind": "h3", "text": "7. サイン関数を忘れる" },
          { "kind": "p", "text": "[[\\frac{bc}{2}]] だけを計算すると [[\\sin(A)]] を1として扱うことになり、これはあり得ない鋭角入力である90°でのみ成り立ちます。修正: [[\\sin(A)]] を含めます。これが欠けている辺の分を担っています。" },
          { "kind": "h3", "text": "8. 斜辺より長い辺を入力する" },
          { "kind": "p", "text": "どの辺も斜辺を超えられないため、[[c\\leq b]] は名称が間違っていることを意味します。修正: 辺を再特定します。最長の測定値が [[c]] です。" },
          { "kind": "h3", "text": "9. 0度の角を入力する" },
          { "kind": "p", "text": "0°では [[\\sin(A)=0]] で、三角形は面積ゼロの直線に潰れます。修正: 厳密に0°と90°の間にある真の鋭角を使います。" },
          { "kind": "h3", "text": "10. 90度の角を鋭角として入力する" },
          { "kind": "p", "text": "90°は直角 [[C]] であり、鋭角ではありません。[[\\sin(90^\\circ)=1]] は公式を [[\\frac{bc}{2}]] に変え、これはこの三角形の面積ではありません。修正: [[b]] と [[c]] の間の鋭角を入力します。" },
          { "kind": "h3", "text": "11. 異なる長さの単位を混ぜる" },
          { "kind": "p", "text": "[[b=400\\text{ cm}]] と [[c=5\\text{ m}]] では互換性のない尺度を掛けることになります。修正: 計算の前に両方を1つの単位に変換します（400 cm = 4 m）。" },
          { "kind": "h3", "text": "12. 面積を線形の単位で報告する" },
          { "kind": "p", "text": "6 m² の面積は 6 m ではありません。修正: 数値には必ず平方単位を添えます。" },
          { "kind": "h3", "text": "13. 角を早すぎる段階で丸める" },
          { "kind": "p", "text": "サインを取る前に36.869897°を36.87°に丸めると結果がわずかにずれ、37°に丸めるとさらにずれます。修正: 最終的な答えまで完全な精度を保ちます。" },
          { "kind": "h3", "text": "14. 3つの入力を独立に選べると思い込む" },
          { "kind": "p", "text": "[[b]]、[[c]]、[[A]] は [[b=c\\cos(A)]] で結ばれています。3つを自由に選ぶと三角形は過剰決定になります。修正: 第3の値をでっち上げるのではなく、他の2つから導出します。" },
          { "kind": "h3", "text": "15. 入力した辺の長さと不整合な角を使う" },
          { "kind": "p", "text": "[[b=8]]、[[c=10]]、[[A=60^\\circ]] は [[10\\cos(60^\\circ)=5\\neq8]] であるため確認に失敗します。公式はそれでも数値を返しますが、それはこの直角三角形の面積ではありません。修正: [[b=c\\cos(A)]] の確認を実行します。" },
          { "kind": "h3", "text": "16. 電卓の数値結果が常に有効な直角三角形を表すと思い込む" },
          { "kind": "p", "text": "入力された任意の数値で計算は成功しますが、幾何学はそうではありません。修正: 答えを信じる前に、整合性の確認と独立した公式で検証します。" },
          { "kind": "h3", "text": "誤りと正解: 具体例" },
          { "kind": "p", "text": "[[b=4]]、[[c=5]]、[[A=36.87^\\circ]] を使います。正解: [[K=\\frac{4\\times5\\times0.6}{2}=6]]。同じ辺で誤って角 [[B=53.13^\\circ]] を入力すると: [[K=\\frac{4\\times5\\times0.8}{2}=8]]。角 [[B]] は [[b]] と [[c]] の挟角ではなく、その正しい辺の組み合わせは [[a]] と [[c]] です。誤りは計算上は見えず、幾何学上は明らかです。" }
        ]
      },
      "sec-verify": {
        "h2": "直角三角形の面積が正しいか確認する方法",
        "blocks": [
          { "kind": "p", "text": "7つの独立した確認があり、すべて3-4-5三角形（[[a=3]]、[[b=4]]、[[c=5]]、[[A\\approx36.87^\\circ]]）で示します。異なる経路の間の一致が、答えが正しいことの最も強い証拠です。" },
          { "kind": "h3", "text": "方法1: 主要な公式を確認する" },
          { "kind": "p", "text": "[[K=\\frac{bc\\sin(A)}{2}]] を再計算します。[[\\frac{4\\times5\\times0.6}{2}=6]] です。2回目の計算で入力ミスや誤った角が見つかります。" },
          { "kind": "h3", "text": "方法2: コサインの関係を確認する" },
          { "kind": "p", "text": "[[b=c\\cos(A)]] を確認します。[[5\\times\\cos(36.87^\\circ)=5\\times0.8=4]] です。不一致は、角と辺が異なる三角形のものであることを意味します。" },
          { "kind": "h3", "text": "方法3: 欠けている辺を計算する" },
          { "kind": "p", "text": "[[a=c\\sin(A)]] を確認します。[[5\\times0.6=3]] です。これは面積公式に供給されるサインの値を確認します。" },
          { "kind": "h3", "text": "方法4: ピタゴラスの定理を確認する" },
          { "kind": "p", "text": "[[a^2+b^2=c^2]] を確認します。[[9+16=25]] です。ここでの失敗は辺の特定が間違っていることを意味します。" },
          { "kind": "h3", "text": "方法5: 2辺を使って検証する" },
          { "kind": "p", "text": "[[K=\\frac{ab}{2}]] を確認します。[[\\frac{3\\times4}{2}=6]] です。2つの方法、1つの三角形、1つの答えです。" },
          { "kind": "h3", "text": "方法6: 余角を確認する" },
          { "kind": "p", "text": "[[A+B=90^\\circ]] を確認します。[[36.87^\\circ+53.13^\\circ=90^\\circ]] です。これは誤った角で測定された角を捉えます。" },
          { "kind": "h3", "text": "方法7: 最大面積を確認する" },
          { "kind": "p", "text": "[[K\\leq\\frac{c^2}{4}]] を確認します。[[6\\leq\\frac{25}{4}=6.25]] です。上限を超える面積は、与えられた斜辺では不可能です。" }
        ]
      },
      "sec-applications": {
        "h2": "実践における辺と角からの直角三角形の面積",
        "blocks": [
          { "kind": "p", "text": "同じ3つの入力が、三角法に決して言及しない場所に現れます。ガラス職人は窓の辺と対角線を測り、枠から角を読み取ります。屋根職人は垂木の長さから支持部の斜辺を、屋根勾配から角を知っています。どちらの場合も、欠けている垂直な辺は巻尺が届きにくく、斜辺と角は手の届くところにあります。サイン公式はまさにこの非対称性のために存在します。到達可能な測定値を到達不可能な高さに変え、さらに面積に変えます。" },
          { "kind": "p", "text": "以下の4つのパネルは、異なるスケールでこのパターンを示します。ガラス窓（6 m²）とスロープ断面（24 m²）はメートルスケールの3-4-5と6-8-10の幾何学を使い、屋根支持（30 ft²）は5-12-13三角形、測量区画（84 m²）は7-24-25を使います。各パネルは隣辺、斜辺、挟角、結果の面積に名称を付けており、測定から答えまでの道筋が見えるままです。" }
        ],
        "imgAlt": "4つのパネル: ガラス窓 6 m2、屋根パネル 30 ft2、スロープ断面 24 m2、測量区画 84 m2",
        "figcaption": "4つの実際の用途: 面積とともに示す窓、屋根支持、スロープ断面、測量区画。"
      },
      "sec-related": {
        "h2": "関連する直角三角形の電卓を見る",
        "blocks": [
          { "kind": "p", "text": "測定値が異なれば、必要な電卓も異なります。" }
        ]
      },
      "sec-faq": {
        "h2": "よくある質問",
        "blocks": [
          { "kind": "p", "text": "以下は、1辺と1つの角からの面積に関する最も一般的な質問への回答です。" }
        ]
      },
      "sec-conclusion": {
        "h2": "3つの入力が面積のすべてを担う",
        "blocks": [
          { "kind": "p", "text": "1辺、斜辺、その間の角が十分であることが分かります。サインの比が欠けている辺を復元し、半分にすることで囲む長方形が三角形に変換され、整合性の関係により各入力が他と照合できます。入力が正確な場合、この手法に近似的なものは何もありません。" },
          { "kind": "p", "text": "作業習慣は単純です。角 A から辺に名前を付け、単位をそろえ、b = c cos(A) を確認し、辺の公式で答えを検証します。これらの習慣があれば、K = bc sin(A)/2 は幾何学の他の面積計算と同じくらい信頼できます。" }
        ]
      }
    }
  }
};
