// perimeterGuideTranslations.b3pt.ts: Right Triangle Perimeter Guide (Page 25 of 45) translation for Portuguese (pt).
export const B3_PT = {
  "pt": {
    "tocHeading": "Neste guia",
    "tocItems": {
      "sec-intro": "Como calcular o perímetro de um triângulo retângulo",
      "sec-geometry": "O que é um triângulo retângulo?",
      "sec-definition": "O que é o perímetro de um triângulo retângulo?",
      "sec-howto": "Como encontrar o perímetro de um triângulo retângulo",
      "sec-examples": "Exemplos passo a passo do perímetro de triângulo retângulo",
      "sec-missing": "Como calcular o perímetro de um triângulo retângulo com um lado faltando",
      "sec-applications": "Aplicações reais do perímetro de triângulo retângulo",
      "sec-properties": "Propriedades especiais do perímetro de um triângulo retângulo",
      "sec-vs-area": "Qual é a diferença entre perímetro e área?",
      "sec-semiperimeter": "Qual é a relação entre perímetro e semiperímetro?",
      "sec-units": "Entendendo as unidades de medida nos cálculos de perímetro de triângulo retângulo",
      "sec-mistakes": "Erros comuns ao calcular o perímetro de triângulo retângulo",
      "sec-verify": "Como verificar se o perímetro do seu triângulo retângulo está correto",
      "sec-related": "Explore calculadoras relacionadas de triângulo retângulo",
      "sec-faq": "Perguntas frequentes",
      "sec-conclusion": "Conclusão"
    },
    "sections": {
      "sec-intro": {
        "h2": "Como calcular o perímetro de um triângulo retângulo",
        "blocks": [
          { "kind": "p", "text": "Considere um triângulo retângulo com lados [[a=3]], [[b=4]] e [[c=5]]. Seu perímetro é [[P=3+4+5]], ou [[[\\boxed{P=12\\text{ units}}]]]. O número 12 indica a distância completa ao redor da fronteira triangular: percorra as três arestas e você terá viajado 12 unidades." },
          { "kind": "p", "text": "Esta calculadora faz exatamente essa soma para qualquer triângulo retângulo. Você informa os dois catetos e a hipotenusa, e ela devolve o comprimento total da fronteira com o passo a passo e um diagrama ao vivo. Três comprimentos de lado são necessários porque a fronteira tem três arestas, e a hipotenusa deve ser incluída: ela é uma dessas três arestas, mesmo que nunca toque o ângulo reto. Os dois catetos formam o canto quadrado, e a hipotenusa se estende através dele para fechar a forma." },
          { "kind": "p", "text": "O perímetro é uma medida linear, não uma medida de área. Ele responde a \"de quanta borda eu preciso?\" em vez de \"quanta superfície há dentro?\". Essa distinção o torna o número certo sempre que você estima cerca, arremate, molduras, arame, corda ou bordas de tecido ao redor de uma forma triangular retângula." }
        ]
      },
      "sec-geometry": {
        "h2": "O que é um triângulo retângulo?",
        "blocks": [
          { "kind": "p", "text": "Antes de começar qualquer soma, os três lados precisam ser rotulados corretamente. Os símbolos abaixo permanecem fixos em todo o guia, e a calculadora usa os mesmos nomes." },
          { "kind": "h3", "text": "Definição de triângulo retângulo" },
          { "kind": "p", "text": "Um triângulo retângulo é um triângulo que contém um ângulo interno medindo exatamente 90 graus. Ele tem três vértices, três lados, dois ângulos agudos e um ângulo reto, geralmente marcado com um pequeno quadrado. Os dois lados que formam o ângulo reto são os catetos; o lado oposto ao ângulo reto é a hipotenusa. Como os ângulos de qualquer triângulo somam 180 graus, [[A+B+C=180^\\circ]], e com [[C=90^\\circ]] segue-se que [[[\\boxed{A+B=90^\\circ}]]]: os dois ângulos agudos são complementares, de modo que conhecer um determina o outro. A soma dos ângulos importa ao identificar um triângulo retângulo porque é o teste que os comprimentos dos lados precisam passar: apenas um canto genuíno de 90 graus produz a relação entre os lados da qual o restante deste guia depende." },
          { "kind": "h3", "text": "O que são os dois catetos?" },
          { "kind": "p", "text": "O cateto [[a]] e o cateto [[b]] são os dois lados que se encontram no vértice do ângulo reto, perpendiculares entre si. Qualquer um deles pode ser desenhado na horizontal ou na vertical dependendo da orientação do triângulo; o que os define é o canto de 90 graus que eles formam, não sua direção na página. Eles diferem da hipotenusa em posição e em comprimento: cada cateto toca o ângulo reto, e cada cateto é mais curto que a hipotenusa. No trabalho com perímetros, o papel deles é simples: ambos são arestas da fronteira, então ambos entram na soma." },
          { "kind": "h3", "text": "O que é a hipotenusa?" },
          { "kind": "p", "text": "A hipotenusa é o lado oposto ao ângulo reto, sempre o lado mais longo do triângulo. Ela nunca forma o ângulo reto; estende-se atravessando-o, ligando as extremidades distantes dos dois catetos. Ela difere dos catetos em posição e em comprimento: os catetos se encontram a 90 graus, enquanto a hipotenusa encontra cada cateto em um ângulo agudo. Ela completa a fronteira triangular, por isso deve ser incluída nos cálculos de perímetro. Quando ambos os catetos são conhecidos, o teorema de Pitágoras a recupera: [[[\\boxed{c=\\sqrt{a^2+b^2}}]]]." },
          { "kind": "h3", "text": "Como identificar os rótulos corretos dos lados" },
          { "kind": "p", "text": "[[a]] e [[b]] são os dois lados que se encontram a 90 graus, e [[c]] é oposto ao ângulo reto. Em um triângulo retângulo não degenerado, [[c]] é o lado mais longo. O marcador de ângulo reto indica qual lado é [[c]]: é aquele que não toca esse vértice. Uma verificação rápida de ordenação ajuda: ordene os três números, e o maior deve desempenhar o papel de [[c]]. Se o maior lado não estiver oposto ao canto quadrado, os rótulos estão errados, e todo cálculo construído sobre eles também estará errado." },
          { "kind": "h3", "text": "A fórmula do perímetro funciona apenas para triângulos retângulos?" },
          { "kind": "p", "text": "Há uma distinção matemática importante aqui. A fórmula [[P=a+b+c]] funciona para todo triângulo, retângulo ou não: qualquer fronteira de três lados se soma da mesma maneira. O que a condição do ângulo reto acrescenta é a relação especial [[a^2+b^2=c^2]], útil para encontrar lados faltantes e para verificar se as medidas descrevem mesmo um triângulo retângulo. A fórmula do perímetro é universal; a relação pitagórica é o bônus do triângulo retângulo." }
        ],
        "imgAlt": "Triângulo retângulo ABC com catetos a e b, hipotenusa c, ângulo reto em C e fronteira do perímetro destacada",
        "figcaption": "Triângulo ABC: os catetos a e b se encontram no ângulo reto C, a hipotenusa c fecha a fronteira, e P = a + b + c percorre as três arestas."
      },
      "sec-definition": {
        "h2": "O que é o perímetro de um triângulo retângulo?",
        "blocks": [
          { "kind": "h3", "text": "Definição de perímetro" },
          { "kind": "p", "text": "Perímetro é a distância total ao redor da fronteira externa de uma forma bidimensional. Para um triângulo, é a soma dos comprimentos dos seus três lados: [[[\\boxed{P=a+b+c}]]]. Todos os três lados devem ser incluídos porque a fronteira não está completa até que cada aresta tenha sido contada. Deixar um de fora não produz um perímetro mais curto; produz uma quantidade diferente e errada." },
          { "kind": "h3", "text": "Por que a hipotenusa conta no perímetro?" },
          { "kind": "p", "text": "O perímetro mede a fronteira externa completa, e a hipotenusa não é uma medida opcional nem interna. Ela é uma das três arestas externas. Considere [[a=3]], [[b=4]], [[c=5]]. O cálculo incorreto [[3+4=7]] conta apenas os dois catetos, os lados do canto quadrado. O cálculo correto [[3+4+5=12]] percorre o triângulo inteiro e retorna ao início. O valor 7 é o comprimento combinado dos dois catetos, não o perímetro completo, porque o caminho do fim do cateto [[b]] de volta ao início do cateto [[a]] corre ao longo da hipotenusa." },
          { "kind": "h3", "text": "Como funciona a fórmula do perímetro?" },
          { "kind": "p", "text": "A fórmula se divide em três partes. Primeiro lado: [[a]]. Segundo lado: [[b]]. Terceiro lado: [[c]]. Combinados: [[P=a+b+c]]. A soma é suficiente porque o perímetro é um total de comprimentos, e comprimentos ao longo de um mesmo caminho simplesmente se somam. Não é necessária divisão, nem quadrados, nem trigonometria: a fórmula é o uso mais simples possível da definição de fronteira." },
          { "kind": "h3", "text": "O que o perímetro representa na vida real?" },
          { "kind": "p", "text": "O perímetro é o comprimento total da fronteira: o material necessário para contornar um objeto uma vez. Isso o torna o número por trás das medidas de borda, dimensões de molduras, comprimentos de bordas, necessidades de cerca, arremate e rodapés, e comprimentos de corda e arame. Medir a fronteira externa é um trabalho diferente de medir a superfície contida dentro do triângulo. Cercar um jardim triangular precisa do perímetro; cobrir o mesmo jardim com grama precisa da área. Confundir os dois compra o material errado." }
        ]
      },
      "sec-howto": {
        "h2": "Como encontrar o perímetro de um triângulo retângulo",
        "blocks": [
          { "kind": "p", "text": "O cálculo segue uma sequência clara. Cada etapa tem um propósito: identificar, conferir, substituir, somar e verificar. O triângulo 3-4-5 demonstra cada etapa." },
          { "kind": "p", "text": "<strong>Etapa 1: Identifique os três lados.</strong> Reúna as medidas [[a=3]], [[b=4]], [[c=5]]. Esta etapa coleta os dados brutos antes de qualquer aritmética." },
          { "kind": "p", "text": "<strong>Etapa 2: Identifique os dois catetos perpendiculares.</strong> Confirme que 3 e 4 são os catetos, os lados que formam o canto de 90 graus. Isso atribui a [[a]] e [[b]] seus papéis corretos." },
          { "kind": "p", "text": "<strong>Etapa 3: Identifique a hipotenusa oposta ao ângulo reto.</strong> Confirme que 5 é a hipotenusa: é o lado mais longo e fica oposto ao canto quadrado. Isso evita o erro de rotulagem mais comum." },
          { "kind": "p", "text": "<strong>Etapa 4: Confirme que as três medidas usam unidades compatíveis.</strong> As três são unidades simples aqui, então nenhuma conversão é necessária. Esta etapa evita somar metros com pés." },
          { "kind": "p", "text": "<strong>Etapa 5: Escreva a fórmula.</strong> [[P=a+b+c]]. Escrevê-la mantém a estrutura visível durante a substituição." },
          { "kind": "p", "text": "<strong>Etapa 6: Substitua as medidas conhecidas.</strong> [[P=3+4+5]]. Cada símbolo é substituído pelo seu número." },
          { "kind": "p", "text": "<strong>Etapa 7: Some os três valores.</strong> [[P=12]]. Uma soma é toda a aritmética." },
          { "kind": "p", "text": "<strong>Etapa 8: Anexe a unidade linear de medida correta.</strong> [[[\\boxed{P=12\\text{ units}}]]]. O perímetro é um comprimento, então usa unidades lineares, nunca unidades quadradas." },
          { "kind": "p", "text": "<strong>Etapa 9: Verifique o resultado.</strong> Confira [[3^2+4^2=5^2]]: [[9+16=25]]. Os lados satisfazem o teorema de Pitágoras, então o triângulo é genuinamente retângulo e o perímetro é confiável." },
          { "kind": "h3", "text": "Por que é importante identificar os lados corretamente?" },
          { "kind": "p", "text": "A rotulagem incorreta afeta tudo o que vem depois. A verificação matemática falha quando a hipotenusa é rotulada errado, porque a checagem pitagórica espera que [[c]] seja o lado mais longo. Os cálculos de lado faltante usam fórmulas diferentes para um cateto faltante e para uma hipotenusa faltante, então um rótulo trocado aplica a fórmula errada. As entradas da calculadora são vinculadas a [[a]], [[b]] e [[c]], então valores trocados produzem uma resposta de aparência plausível, mas errada. A visualização ao vivo do triângulo também parecerá distorcida quando um valor de cateto ocupa o campo da hipotenusa. Acertar os rótulos uma vez protege todas as etapas seguintes." },
          { "kind": "h3", "text": "Posso calcular o perímetro sem conhecer a hipotenusa?" },
          { "kind": "p", "text": "Sim, com uma etapa extra antes. Se ambos os catetos são conhecidos, a hipotenusa pode ser encontrada com o teorema de Pitágoras: [[c=\\sqrt{a^2+b^2}]]. Uma vez conhecido [[c]], o perímetro segue por soma ordinária. Isso não significa que a calculadora de perímetro existente aceite apenas dois lados: a calculadora precisa das três entradas, então o lado faltante deve ser calculado à mão (ou com a calculadora de lados) antes de inserir os valores." }
        ]
      },
      "sec-examples": {
        "h2": "Exemplos passo a passo do perímetro de triângulo retângulo",
        "blocks": [
          { "kind": "p", "text": "Os quatro exemplos abaixo mantêm os casos resolvidos existentes e expandem suas explicações. Cada um substitui, soma e depois verifica pelo teorema de Pitágoras." },
          { "kind": "h3", "text": "Exemplo 1: Triângulo retângulo 3-4-5" },
          { "kind": "p", "text": "Dados: [[a=3,\\;b=4,\\;c=5]]" },
          { "kind": "p", "text": "Fórmula: [[P=a+b+c]]" },
          { "kind": "p", "text": "Substituição: [[P=3+4+5]]" },
          { "kind": "p", "text": "Soma: [[P=12]]" },
          { "kind": "p", "text": "Resposta final: [[[\\boxed{P=12\\text{ units}}]]]]" },
          { "kind": "p", "text": "Verificação: [[3^2+4^2=5^2]], que é [[9+16=25]]. As medidas satisfazem o teorema de Pitágoras, então formam um triângulo retângulo: os dois quadrados menores construídos sobre os catetos preenchem exatamente o quadrado construído sobre a hipotenusa." },
          { "kind": "h3", "text": "Exemplo 2: Triângulo retângulo 5-12-13" },
          { "kind": "p", "text": "Dados: [[a=5,\\;b=12,\\;c=13]]" },
          { "kind": "p", "text": "Substituição: [[P=5+12+13]]" },
          { "kind": "p", "text": "Resposta final: [[[\\boxed{P=30\\text{ units}}]]]]" },
          { "kind": "p", "text": "Verificação: [[5^2+12^2=13^2]], que é [[25+144=169]]. A igualdade confirma um triângulo retângulo válido." },
          { "kind": "h3", "text": "Exemplo 3: Triângulo retângulo 8-15-17" },
          { "kind": "p", "text": "Dados: [[a=8,\\;b=15,\\;c=17]]" },
          { "kind": "p", "text": "Substituição: [[P=8+15+17]]" },
          { "kind": "p", "text": "Resposta final: [[[\\boxed{P=40\\text{ units}}]]]]" },
          { "kind": "p", "text": "Verificação: [[8^2+15^2=17^2]], que é [[64+225=289]]. Novamente os quadrados se equilibram, confirmando o ângulo reto." },
          { "kind": "h3", "text": "Exemplo 4: Comprimentos de lado decimais" },
          { "kind": "p", "text": "Dados: [[a=2.5,\\;b=6,\\;c=6.5]]" },
          { "kind": "p", "text": "Substituição: [[P=2.5+6+6.5]]" },
          { "kind": "p", "text": "Resposta final: [[[\\boxed{P=15\\text{ units}}]]]]" },
          { "kind": "p", "text": "Verificação: [[2.5^2+6^2=6.5^2]], que é [[6.25+36=42.25]]. Valores decimais não mudam a fórmula: a soma funciona da mesma forma para números inteiros e decimais, e a aritmética de verificação é idêntica." }
        ],
        "table": {
          "headers": ["Triângulo", "Cateto a", "Cateto b", "Hipotenusa c", "Perímetro P", "Verificação"],
          "rows": [
            ["3-4-5", "3", "4", "5", "12", "[[9+16=25]]"],
            ["5-12-13", "5", "12", "13", "30", "[[25+144=169]]"],
            ["8-15-17", "8", "15", "17", "40", "[[64+225=289]]"],
            ["2.5-6-6.5", "2.5", "6", "6.5", "15", "[[6.25+36=42.25]]"]
          ]
        },
        "closingParagraphs": ["A tabela mostra como comprimentos de lado diferentes produzem medidas de fronteira diferentes, enquanto o mesmo ritmo de duas etapas, somar e depois verificar, permanece inalterado."]
      },
      "sec-missing": {
        "h2": "Como calcular o perímetro de um triângulo retângulo com um lado faltando",
        "blocks": [
          { "kind": "p", "text": "A calculadora de perímetro existente exige os três comprimentos de lado. Se um lado for desconhecido, calcule-o primeiro com o teorema de Pitágoras e depois some. Os três casos abaixo cobrem todas as possibilidades." },
          { "kind": "h3", "text": "Caso 1: Encontrando a hipotenusa faltante" },
          { "kind": "p", "text": "Quando ambos os catetos são conhecidos: [[[\\boxed{c=\\sqrt{a^2+b^2}}]]]]" },
          { "kind": "p", "text": "Exemplo: [[a=6,\\;b=8]]" },
          { "kind": "p", "text": "[[c=\\sqrt{6^2+8^2}]]" },
          { "kind": "p", "text": "[[c=\\sqrt{36+64}]]" },
          { "kind": "p", "text": "[[[\\boxed{c=10}]]]" },
          { "kind": "p", "text": "Agora calcule: [[P=6+8+10]], então [[[\\boxed{P=24\\text{ units}}]]]." },
          { "kind": "h3", "text": "Caso 2: Encontrando um cateto faltante" },
          { "kind": "p", "text": "Quando a hipotenusa [[c]] e o cateto [[a]] são conhecidos: [[[\\boxed{b=\\sqrt{c^2-a^2}}]]]]" },
          { "kind": "p", "text": "Exemplo: [[c=13,\\;a=5]]" },
          { "kind": "p", "text": "[[b=\\sqrt{13^2-5^2}]]" },
          { "kind": "p", "text": "[[b=\\sqrt{169-25}]]" },
          { "kind": "p", "text": "[[[\\boxed{b=12}]]]" },
          { "kind": "p", "text": "Agora calcule: [[P=5+12+13]], então [[[\\boxed{P=30\\text{ units}}]]]." },
          { "kind": "h3", "text": "Caso 3: Encontrando o outro cateto faltante" },
          { "kind": "p", "text": "Quando a hipotenusa [[c]] e o cateto [[b]] são conhecidos: [[[\\boxed{a=\\sqrt{c^2-b^2}}]]]]" },
          { "kind": "p", "text": "Exemplo: [[c=17,\\;b=15]]" },
          { "kind": "p", "text": "[[a=\\sqrt{17^2-15^2}]]" },
          { "kind": "p", "text": "[[a=\\sqrt{289-225}]]" },
          { "kind": "p", "text": "[[[\\boxed{a=8}]]]" },
          { "kind": "p", "text": "Agora calcule: [[P=8+15+17]], então [[[\\boxed{P=40\\text{ units}}]]]." },
          { "kind": "h3", "text": "Por que você deve encontrar o lado faltante primeiro?" },
          { "kind": "p", "text": "O perímetro representa a fronteira completa. Ignorar um lado desconhecido produz um resultado incompleto: dois lados conhecidos dão um caminho parcial, não o perímetro. Esses cálculos de lado faltante são métodos matemáticos de apoio, não modos adicionais na calculadora de perímetro existente. Quando você conhece apenas dois lados, a calculadora de lados de triângulo retângulo recupera o terceiro, e então a calculadora de perímetro termina o trabalho." }
        ],
        "imgAlt": "Triângulo retângulo com catetos 6 e 8, hipotenusa encontrada como 10 por Pitágoras, depois perímetro 24",
        "figcaption": "Os catetos 6 e 8 dão c = 10 pelo teorema de Pitágoras, depois P = 6 + 8 + 10 = 24."
      },
      "sec-applications": {
        "h2": "Aplicações reais do perímetro de triângulo retângulo",
        "blocks": [
          { "kind": "p", "text": "Doze exemplos realistas e totalmente resolvidos seguem abaixo. Cada um nomeia uma situação, dá três medidas de lado, mostra a soma e explica o que o resultado ajuda a estimar. Trate cada um como um modelo geométrico simplificado de triângulo retângulo: objetos reais raramente são triângulos perfeitos, então margens de material, desperdício de corte e verificação da construção ficam fora do próprio número do perímetro." },
          { "kind": "h3", "text": "Exemplo 1: Moldura de janela de vidro triangular" },
          { "kind": "p", "text": "Uma moldura de janela de vidro triangular tem [[a=3\\text{ m},\\;b=4\\text{ m},\\;c=5\\text{ m}]]. Então [[P=3+4+5]], logo [[[\\boxed{P=12\\text{ m}}]]]. Os 12 metros representam o comprimento total ao redor do contorno triangular da janela, o comprimento do estoque de moldura a cortar. As juntas da moldura e as margens de corte podem exigir material adicional além dos 12 metros." },
          { "kind": "h3", "text": "Exemplo 2: Arremate de borda de telhado" },
          { "kind": "p", "text": "Uma seção triangular retângula de telhado tem [[a=6\\text{ ft},\\;b=8\\text{ ft},\\;c=10\\text{ ft}]]. Então [[P=6+8+10]], logo [[[\\boxed{P=24\\text{ ft}}]]]. O perímetro estima o arremate ao redor do contorno triangular da extremidade do telhado. Cantos e sobreposição no beiral aumentam o comprimento a comprar." },
          { "kind": "h3", "text": "Exemplo 3: Cerca de jardim triangular" },
          { "kind": "p", "text": "Uma seção triangular de jardim tem [[a=5\\text{ m},\\;b=12\\text{ m},\\;c=13\\text{ m}]]. Então [[P=5+12+13]], logo [[[\\boxed{P=30\\text{ m}}]]]. O comprimento total da fronteira estima a cerca necessária ao redor do jardim. Portões, postes, sobreposições e margens de instalação são contados separadamente dos 30 metros de linha de cerca." },
          { "kind": "h3", "text": "Exemplo 4: Suporte metálico de aço" },
          { "kind": "p", "text": "Um suporte metálico triangular retângulo tem [[a=8\\text{ cm},\\;b=15\\text{ cm},\\;c=17\\text{ cm}]]. Então [[P=8+15+17]], logo [[[\\boxed{P=40\\text{ cm}}]]]. O perímetro descreve a borda externa do suporte e ajuda a estimar o material de proteção da borda. Ele não determina a resistência estrutural, que depende da espessura, da liga e dos caminhos de carga, e não do comprimento da borda." },
          { "kind": "h3", "text": "Exemplo 5: Faixa de tecido triangular" },
          { "kind": "p", "text": "Uma faixa de tecido triangular tem [[a=9\\text{ ft},\\;b=12\\text{ ft},\\;c=15\\text{ ft}]]. Então [[P=9+12+15]], logo [[[\\boxed{P=36\\text{ ft}}]]]. O perímetro estima o comprimento total de borda que precisa de bainha ou viés. O tecido adicional para costuras e dobras está excluído dos 36 pés." },
          { "kind": "h3", "text": "Exemplo 6: Moldura de placa triangular" },
          { "kind": "p", "text": "Um painel de placa triangular retângulo tem [[a=12\\text{ in},\\;b=16\\text{ in},\\;c=20\\text{ in}]]. Então [[P=12+16+20]], logo [[[\\boxed{P=48\\text{ in}}]]]. O perímetro estima a moldura ou a borda decorativa ao redor do painel." },
          { "kind": "h3", "text": "Exemplo 7: Borda de paisagismo" },
          { "kind": "p", "text": "Uma seção triangular retângula de paisagismo tem [[a=7\\text{ m},\\;b=24\\text{ m},\\;c=25\\text{ m}]]. Então [[P=7+24+25]], logo [[[\\boxed{P=56\\text{ m}}]]]. Este resultado estima o comprimento total da borda de paisagismo para a seção, antes do desperdício e da sobreposição das juntas." },
          { "kind": "h3", "text": "Exemplo 8: Estrutura de suporte de painel solar" },
          { "kind": "p", "text": "Uma pequena estrutura triangular retângula de suporte tem [[a=9\\text{ cm},\\;b=40\\text{ cm},\\;c=41\\text{ cm}]]. Então [[P=9+40+41]], logo [[[\\boxed{P=90\\text{ cm}}]]]. O perímetro descreve o contorno triangular completo da estrutura." },
          { "kind": "h3", "text": "Exemplo 9: Borda de toldo triangular" },
          { "kind": "p", "text": "Uma seção triangular retângula de toldo tem [[a=15\\text{ ft},\\;b=20\\text{ ft},\\;c=25\\text{ ft}]]. Então [[P=15+20+25]], logo [[[\\boxed{P=60\\text{ ft}}]]]. O perímetro estima o material de borda necessário ao redor do tecido, excluindo as ferragens de fixação." },
          { "kind": "h3", "text": "Exemplo 10: Arremate de extremidade de telhado de armazém" },
          { "kind": "p", "text": "Uma seção simplificada de extremidade de telhado de armazém tem [[a=11\\text{ ft},\\;b=60\\text{ ft},\\;c=61\\text{ ft}]]. Então [[P=11+60+61]], logo [[[\\boxed{P=132\\text{ ft}}]]]. O perímetro total representa as três arestas externas da seção triangular modelada." },
          { "kind": "h3", "text": "Exemplo 11: Painel industrial de fabricação" },
          { "kind": "p", "text": "Um painel triangular retângulo de fabricação tem [[a=13\\text{ cm},\\;b=84\\text{ cm},\\;c=85\\text{ cm}]]. Então [[P=13+84+85]], logo [[[\\boxed{P=182\\text{ cm}}]]]. O resultado ajuda a estimar perfis de proteção de borda ou material de borda para o painel." },
          { "kind": "h3", "text": "Exemplo 12: Chapa de reforço de madeira compensada" },
          { "kind": "p", "text": "Uma chapa triangular retângula de suporte de madeira compensada tem [[a=28\\text{ cm},\\;b=45\\text{ cm},\\;c=53\\text{ cm}]]. Então [[P=28+45+53]], logo [[[\\boxed{P=126\\text{ cm}}]]]. O perímetro representa a borda externa completa da chapa de madeira compensada." }
        ],
        "table": {
          "headers": ["Aplicação prática", "Cateto a", "Cateto b", "Hipotenusa c", "Perímetro P", "Unidade"],
          "rows": [
            ["Moldura de janela de vidro triangular", "3", "4", "5", "12", "m"],
            ["Arremate de borda de telhado", "6", "8", "10", "24", "ft"],
            ["Cerca de jardim triangular", "5", "12", "13", "30", "m"],
            ["Suporte metálico de aço", "8", "15", "17", "40", "cm"],
            ["Faixa de tecido triangular", "9", "12", "15", "36", "ft"],
            ["Moldura de placa triangular", "12", "16", "20", "48", "in"],
            ["Borda de paisagismo", "7", "24", "25", "56", "m"],
            ["Estrutura de suporte de painel solar", "9", "40", "41", "90", "cm"],
            ["Borda de toldo triangular", "15", "20", "25", "60", "ft"],
            ["Arremate de extremidade de telhado de armazém", "11", "60", "61", "132", "ft"],
            ["Painel industrial de fabricação", "13", "84", "85", "182", "cm"],
            ["Chapa de reforço de madeira compensada", "28", "45", "53", "126", "cm"]
          ]
        },
        "closingParagraphs": ["Lembre-se dos limites práticos: podem ser necessárias margens de material, o desperdício de corte não está incluído, as juntas da moldura podem aumentar os requisitos de material, portões e aberturas afetam as quantidades de cerca, as medidas reais da construção devem ser verificadas, e o perímetro sozinho não determina a resistência estrutural nem a capacidade de carga."],
        "imgAlt": "Quatro exemplos reais de perímetro: moldura de janela, arremate de telhado, borda de jardim e suporte de aço",
        "figcaption": "Janela, telhado, jardim e suporte: cada painel traça a fronteira triangular e seu perímetro."
      },
      "sec-properties": {
        "h2": "Propriedades especiais do perímetro de um triângulo retângulo",
        "blocks": [
          { "kind": "p", "text": "Além da simples soma, o perímetro de um triângulo retângulo obedece a várias desigualdades precisas. Elas servem também como verificações rápidas de sanidade para qualquer resultado calculado." },
          { "kind": "h3", "text": "O perímetro é maior que o dobro da hipotenusa" },
          { "kind": "p", "text": "Para todo triângulo válido, a desigualdade triangular dá [[a+b>c]]. Some [[c]] aos dois lados: [[a+b+c>2c]]. Portanto [[[\\boxed{P>2c}]]]. Em linguagem simples: os dois catetos juntos são sempre mais longos que a hipotenusa, então somar a hipotenusa aos dois lados mantém a desigualdade apontando para o mesmo lado. Para o triângulo 3-4-5, [[P=12]] e [[2c=10]], e 12 é de fato maior que 10." },
          { "kind": "h3", "text": "O perímetro é menor que o triplo da hipotenusa" },
          { "kind": "p", "text": "Como a hipotenusa é mais longa que qualquer cateto, [[a<c]] e [[b<c]]. Portanto [[a+b<2c]]. Somar [[c]] dá [[[\\boxed{P<3c}]]]. Esta é uma verificação rápida útil: qualquer perímetro alegado igual ou acima do triplo da hipotenusa não pode pertencer a um triângulo retângulo válido. Para o triângulo 3-4-5, [[3c=15]], e 12 está confortavelmente abaixo." },
          { "kind": "h3", "text": "Perímetro de um triângulo 45-45-90" },
          { "kind": "p", "text": "Em um triângulo 45-45-90, ambos os catetos têm o mesmo comprimento. Seja cada cateto igual a [[k]]. A hipotenusa é [[c=k\\sqrt{2}]]. Portanto [[P=k+k+k\\sqrt{2}]], ou [[[\\boxed{P=k(2+\\sqrt{2})}]]]. Com [[k=5]], o perímetro é [[5(2+\\sqrt{2})\\approx17.07]]: dois catetos de 5 mais uma hipotenusa de cerca de 7,07." },
          { "kind": "h3", "text": "Perímetro de um triângulo 30-60-90" },
          { "kind": "p", "text": "Se o menor cateto é [[k]], então o cateto mais longo é [[k\\sqrt{3}]] e a hipotenusa é [[2k]]. Portanto [[P=k+k\\sqrt{3}+2k]], ou [[[\\boxed{P=k(3+\\sqrt{3})}]]]. Com [[k=4]], os lados são 4, cerca de 6,93 e 8, dando um perímetro de cerca de 18,93." },
          { "kind": "h3", "text": "Qual triângulo retângulo tem o maior perímetro para uma hipotenusa fixa?" },
          { "kind": "p", "text": "Intuitivamente, quando a hipotenusa permanece fixa, o perímetro cresce à medida que os dois catetos crescem juntos, e é maior quando nenhum cateto fica defasado: quando ambos os catetos são iguais. Esse é o triângulo 45-45-90. A afirmação precisa usa a desigualdade [[a+b\\leq\\sqrt{2(a^2+b^2)}]]. Como [[a^2+b^2=c^2]], segue-se que [[[\\boxed{P\\leq c(1+\\sqrt{2})}]]], com igualdade exatamente quando [[a=b]]. Portanto, entre todos os triângulos retângulos que compartilham uma hipotenusa, o triângulo retângulo isósceles vence a disputa do perímetro." }
        ]
      },
      "sec-vs-area": {
        "h2": "Qual é a diferença entre perímetro e área?",
        "blocks": [
          { "kind": "p", "text": "Perímetro e área descrevem ambos um triângulo, mas respondem a perguntas diferentes. Esta seção traça a linha com cuidado." },
          { "kind": "h3", "text": "O perímetro mede a fronteira externa" },
          { "kind": "p", "text": "[[[\\boxed{P=a+b+c}]]] mede a distância total ao redor do triângulo. Suas unidades são lineares: metros, centímetros, milímetros, pés, polegadas. Ele diz quanto material percorre a borda." },
          { "kind": "h3", "text": "A área mede a superfície contida" },
          { "kind": "p", "text": "Para um triângulo retângulo, [[[\\boxed{K=\\frac{ab}{2}}]]]. Os dois catetos perpendiculares servem como base e altura, então nenhuma hipotenusa aparece na fórmula. A área usa unidades quadradas: metros quadrados, centímetros quadrados, pés quadrados, polegadas quadradas. Ela diz quanta superfície há dentro da fronteira." },
          { "kind": "h3", "text": "Comparação resolvida usando um triângulo 3-4-5" },
          { "kind": "p", "text": "Perímetro: [[P=3+4+5]], logo [[[\\boxed{P=12\\text{ units}}]]]." },
          { "kind": "p", "text": "Área: [[K=\\frac{3\\times4}{2}]], logo [[[\\boxed{K=6\\text{ square units}}]]]." },
          { "kind": "p", "text": "Os números 12 e 6 descrevem propriedades completamente diferentes do mesmo triângulo: um é o passeio ao redor dele, o outro é o terreno que ele cobre." },
          { "kind": "h3", "text": "Dois triângulos retângulos podem ter o mesmo perímetro, mas áreas diferentes?" },
          { "kind": "p", "text": "Sim. O perímetro sozinho não determina a área de forma única; a forma e as proporções do triângulo afetam sua área contida. Um triângulo 3-4-5 tem perímetro 12 e área 6. Um triângulo 45-45-90 também pode ter perímetro 12: de [[P=k(2+\\sqrt{2})=12]], o cateto é [[k=\\frac{12}{2+\\sqrt{2}}\\approx3.51]], e sua área é [[K=\\frac{k^2}{2}\\approx6.18]] unidades quadradas, um pouco maior que 6. Mesmo comprimento de fronteira, interior diferente: a forma isósceles encerra um pouco mais." }
        ],
        "imgAlt": "Triângulo 3-4-5 com fronteira destacada P igual a 12 e interior sombreado área K igual a 6",
        "figcaption": "A aresta destacada é o perímetro; o interior sombreado é a área. Duas medidas diferentes."
      },
      "sec-semiperimeter": {
        "h2": "Qual é a relação entre perímetro e semiperímetro?",
        "blocks": [
          { "kind": "p", "text": "Semiperímetro é metade do perímetro completo: [[[\\boxed{s=\\frac{P}{2}}]]]. Para um triângulo retângulo, isso é [[[\\boxed{s=\\frac{a+b+c}{2}}]]]. Ele permanece uma medida de apoio nesta página, não um segundo assunto principal." },
          { "kind": "h3", "text": "Exemplo numérico" },
          { "kind": "p", "text": "Use [[a=3,\\;b=4,\\;c=5]]. O perímetro é [[P=12]], então o semiperímetro é [[s=\\frac{12}{2}=6]]. Ambos são medidas lineares nas mesmas unidades; um é simplesmente metade do outro." },
          { "kind": "h3", "text": "Por que o semiperímetro é útil?" },
          { "kind": "p", "text": "O semiperímetro é uma medida intermediária importante na geometria dos triângulos. Ele aparece na fórmula de Herão para a área, [[K=\\sqrt{s(s-a)(s-b)(s-c)}]], e na relação do raio inscrito [[K=rs]], e simplifica várias demonstrações avançadas de geometria. Sempre que uma fórmula pedir [[s]], calcule primeiro o perímetro e divida-o ao meio. Para uma ferramenta dedicada, use a calculadora de semiperímetro de triângulo retângulo." }
        ]
      },
      "sec-units": {
        "h2": "Entendendo as unidades de medida nos cálculos de perímetro de triângulo retângulo",
        "blocks": [
          { "kind": "p", "text": "O perímetro funciona em qualquer unidade de comprimento: metros, centímetros, milímetros, quilômetros, pés, polegadas, jardas ou milhas. O número muda com a unidade, mas o triângulo não." },
          { "kind": "h3", "text": "Por que as três medidas de lado devem usar unidades compatíveis?" },
          { "kind": "p", "text": "O perímetro é calculado por soma, e a soma só faz sentido entre quantidades semelhantes. Somar 3 pés a 48 polegadas sem conversão mistura duas escalas e produz um total sem sentido. Converta cada lado para uma unidade comum primeiro e depois some." },
          { "kind": "h3", "text": "Exemplo resolvido de conversão de unidades" },
          { "kind": "p", "text": "Dados [[a=3\\text{ ft}]], [[b=48\\text{ inches}]], [[c=5\\text{ ft}]]. Converta polegadas para pés: [[48\\text{ inches}=4\\text{ ft}]]. Agora os três lados estão em pés, então [[P=3+4+5]] e [[[\\boxed{P=12\\text{ ft}}]]]. A conversão deve acontecer antes da soma, não depois." },
          { "kind": "h3", "text": "Como os seletores de unidade da calculadora ajudam" },
          { "kind": "p", "text": "Cada uma das três entradas desta página tem seu próprio seletor de unidade. Quando você escolhe unidades diferentes para lados diferentes, a calculadora converte cada entrada para a unidade comum automaticamente antes de somar: ela lê a unidade escolhida para o primeiro lado e ajusta os outros dois para coincidir, usando razões exatas de comprimento (1 polegada = 0,0254 m, 1 pé = 0,3048 m, e assim por diante). O resultado é informado nessa unidade comum. Você ainda pode converter à mão como mostrado acima, mas os seletores eliminam a aritmética." },
          { "kind": "h3", "text": "Trabalhando com medidas decimais" },
          { "kind": "p", "text": "Use [[a=2.5,\\;b=6,\\;c=6.5]]. Então [[P=2.5+6+6.5]], logo [[[\\boxed{P=15\\text{ units}}]]]. Valores decimais são somados exatamente da mesma forma que números inteiros; os pontos decimais simplesmente se alinham na soma." },
          { "kind": "h3", "text": "Trabalhando com comprimentos de lado irracionais" },
          { "kind": "p", "text": "Considere um triângulo com [[a=1,\\;b=1,\\;c=\\sqrt{2}]]. Então [[P=1+1+\\sqrt{2}]], logo [[[\\boxed{P=2+\\sqrt{2}}]]], aproximadamente [[P\\approx3.4142]]. Manter a forma radical exata é útil em problemas matemáticos porque preserva a precisão total; a aproximação decimal serve para o relatório final." },
          { "kind": "h3", "text": "Por que você deve evitar arredondar cedo demais?" },
          { "kind": "p", "text": "O arredondamento prematuro injeta pequenos erros que a soma final acaba mantendo. Se um lado é irracional, como [[\\sqrt{2}]], arredondá-lo para 1,41 antes de somar remove parte do comprimento real, e com vários lados assim o erro se acumula. Mantenha a precisão total durante os cálculos intermediários e arredonde apenas o resultado final para a exatidão que o problema exige." }
        ]
      },
      "sec-mistakes": {
        "h2": "Erros comuns ao calcular o perímetro de triângulo retângulo",
        "blocks": [
          { "kind": "p", "text": "Dezesseis erros explicam quase todo perímetro errado. Cada um é explicado com sua causa e a abordagem correta." },
          { "kind": "p", "text": "<strong>1. Esquecer de incluir a hipotenusa.</strong> O erro mais comum: somar os dois catetos e parar. Com 3-4-5 isso dá 7 em vez de 12. Some sempre os três lados." },
          { "kind": "p", "text": "<strong>2. Usar apenas os dois catetos.</strong> Mesma causa raiz do item anterior, muitas vezes por leitura errada do problema. A fronteira tem três arestas; conte três." },
          { "kind": "p", "text": "<strong>3. Confundir perímetro com área.</strong> Perímetro é [[a+b+c]] em unidades lineares; área é [[ab/2]] em unidades quadradas. Leia a pergunta: \"ao redor\" significa perímetro, \"dentro\" significa área." },
          { "kind": "p", "text": "<strong>4. Inserir a hipotenusa como cateto.</strong> Colocar o maior valor em um campo de cateto quebra a geometria. O campo da hipotenusa deve conter o lado mais longo." },
          { "kind": "p", "text": "<strong>5. Escolher o lado errado como hipotenusa.</strong> Se 4 for inserido como [[c]] enquanto 5 ocupa um campo de cateto, toda verificação falha. Ordene os valores primeiro: o maior é [[c]]." },
          { "kind": "p", "text": "<strong>6. Usar medidas que não formam um triângulo retângulo.</strong> Teste [[a^2+b^2=c^2]] antes de confiar no rótulo \"triângulo retângulo\". Se falhar, a fórmula do perímetro ainda soma, mas o triângulo não é retângulo." },
          { "kind": "p", "text": "<strong>7. Misturar centímetros e metros.</strong> Somar 3 m com 40 cm não dá 43 de nada. Converta para uma unidade primeiro." },
          { "kind": "p", "text": "<strong>8. Misturar pés e polegadas.</strong> A armadilha clássica do sistema imperial. Converta polegadas para pés (divida por 12) antes de somar, ou deixe os seletores de unidade fazerem isso." },
          { "kind": "p", "text": "<strong>9. Informar o perímetro em unidades quadradas.</strong> Um perímetro de 12 cm quadrados é um erro de categoria: o passeio ao redor de um triângulo é um comprimento, medido em cm, m, ft ou in." },
          { "kind": "p", "text": "<strong>10. Arredondar medidas cedo demais.</strong> Arredondar [[\\sqrt{2}]] para 1,4 antes de somar acumula erro. Arredonde apenas a resposta final." },
          { "kind": "p", "text": "<strong>11. Esquecer de calcular um lado faltante.</strong> Dois lados conhecidos não são um perímetro. Recupere o terceiro com o teorema de Pitágoras primeiro e depois some." },
          { "kind": "p", "text": "<strong>12. Usar o teorema de Pitágoras incorretamente.</strong> A forma da hipotenusa soma quadrados ([[c=\\sqrt{a^2+b^2}]]); a forma do cateto subtrai ([[b=\\sqrt{c^2-a^2}]]). Trocá-las inventa um lado que não existe." },
          { "kind": "p", "text": "<strong>13. Inserir comprimentos de lado negativos ou zero.</strong> Comprimentos são positivos. Uma entrada zero ou negativa não descreve triângulo algum, e a calculadora a recusa com razão." },
          { "kind": "p", "text": "<strong>14. Ignorar a desigualdade triangular.</strong> Se [[a+b\\leq c]], os três comprimentos não podem formar triângulo algum. Verifique antes de calcular." },
          { "kind": "p", "text": "<strong>15. Supor que o semiperímetro é o perímetro completo.</strong> Dividir a soma por 2 dá [[s]], não [[P]]. Para 3-4-5, [[(3+4+5)/2=6]] é o semiperímetro; o perímetro é 12." },
          { "kind": "p", "text": "<strong>16. Supor que o perímetro sozinho determina a área do triângulo.</strong> Como mostrou a comparação 3-4-5 contra 45-45-90, perímetros iguais podem esconder áreas diferentes. O perímetro fixa a fronteira, não o interior." },
          { "kind": "p", "text": "<strong>Errado contra correto, lado a lado.</strong> Dados [[a=3,\\;b=4,\\;c=5]]: o incorreto é [[P=3+4=7]], que omite a hipotenusa e mede apenas os dois catetos. O correto é [[P=3+4+5=12]]. E [[(3+4+5)/2=6]] é o semiperímetro, uma quantidade diferente com seus próprios usos, não o perímetro completo." }
        ]
      },
      "sec-verify": {
        "h2": "Como verificar se o perímetro do seu triângulo retângulo está correto",
        "blocks": [
          { "kind": "p", "text": "Sete verificações independentes pegam quase todo erro. O triângulo 3-4-5 demonstra cada uma. Verificações independentes importam porque falham de maneiras diferentes: quando dois métodos não relacionados concordam, a resposta conquistou sua confiança, seja para lição de casa, desenhos técnicos ou planejamento de material." },
          { "kind": "p", "text": "<strong>Método 1: Some os três lados novamente.</strong> Recalcule [[P=a+b+c]] do zero: [[3+4+5=12]]. Uma segunda passada pega deslizes de digitação e de aritmética." },
          { "kind": "p", "text": "<strong>Método 2: Verifique a relação pitagórica.</strong> Confira [[a^2+b^2=c^2]]: [[9+16=25]]. Isso confirma que os lados formam um triângulo retângulo, o que valida os rótulos dos lados dos quais o perímetro depende." },
          { "kind": "p", "text": "<strong>Método 3: Confira a hipotenusa.</strong> Confirme [[c>a]] e [[c>b]]: 5 é maior que 3 e maior que 4. Se a suposta hipotenusa não for o lado mais longo, os rótulos estão errados." },
          { "kind": "p", "text": "<strong>Método 4: Confira a desigualdade triangular.</strong> Confirme [[a+b>c]]: [[3+4=7>5]]. A soma de quaisquer dois lados deve exceder o terceiro, ou nenhum triângulo existe." },
          { "kind": "p", "text": "<strong>Método 5: Confira os limites do perímetro.</strong> Confirme [[2c<P<3c]]: [[10<12<15]]. Esses limites são verificações mentais rápidas para qualquer triângulo retângulo válido." },
          { "kind": "p", "text": "<strong>Método 6: Confira as unidades de medida.</strong> Confirme que as três entradas compartilham uma unidade. Unidades mistas invalidam a soma mesmo quando a aritmética está perfeita." },
          { "kind": "p", "text": "<strong>Método 7: Compare o resultado com a visualização ao vivo.</strong> O diagrama existente nesta página redesenha o triângulo a partir das suas entradas. Se um lado foi rotulado errado ou um valor foi digitado errado, a imagem parece errada: uma hipotenusa mais curta que um cateto, ou uma forma que não se fecha. Confie na imagem quando ela discordar do número e depois encontre o erro de entrada." }
        ]
      },
      "sec-conclusion": {
        "h2": "Três lados, uma fronteira, sem atalhos",
        "blocks": [
          { "kind": "p", "text": "O perímetro de um triângulo retângulo é a ideia mais simples desta página e a mais fácil de errar por omissão. A fórmula pede três números porque a fronteira tem três arestas, e a hipotenusa conquista seu lugar na soma como a aresta que fecha a forma. Todo o resto, o método passo a passo, a recuperação do lado faltante, as desigualdades, as verificações, existe para proteger aquela única soma dos pequenos erros de rotulagem e de unidade que produzem respostas erradas de aparência plausível." },
          { "kind": "p", "text": "Use a calculadora desta página sempre que os três lados estiverem medidos, recupere um lado faltante pelo teorema de Pitágoras quando não estiverem, e confira o resultado contra os limites 2c < P < 3c antes de o número entrar em um pedido de material. Quando a pergunta se volta para a superfície dentro da fronteira, a calculadora de área está esperando; quando se volta para metade da fronteira para uma fórmula mais profunda, a calculadora de semiperímetro assume." }
        ]
      },
      "sec-related": {
        "h2": "Explore calculadoras relacionadas de triângulo retângulo",
        "blocks": [
          { "kind": "p", "text": "Cada uma dessas ferramentas estende o cálculo do perímetro em uma direção: lados faltantes, semiperímetros, superfícies, medidas combinadas ou o teorema por trás de tudo." }
        ]
      },
      "sec-faq": {
        "h2": "Perguntas frequentes",
        "blocks": []
      }
    },
    "relatedHeading": "Explore calculadoras relacionadas de triângulo retângulo",
    "relatedIntro": "Cada uma dessas ferramentas estende o cálculo do perímetro em uma direção: lados faltantes, semiperímetros, superfícies, medidas combinadas ou o teorema por trás de tudo.",
    "relatedItems": [
      "Calculadora de medidas de triângulo retângulo",
      "Calculadora de semiperímetro de triângulo retângulo",
      "Calculadora de lados de triângulo retângulo",
      "Calculadora de área de triângulo retângulo",
      "Calculadora do teorema de Pitágoras"
    ],
    "faqHeading": "Perguntas frequentes",
    "faqs": [
      {
        "question": "Qual é a fórmula do perímetro de um triângulo retângulo?",
        "answer": "A fórmula é P = a + b + c, onde a e b são os dois catetos que formam o ângulo de 90 graus e c é a hipotenusa, o lado mais longo. Some os três comprimentos de lado; o resultado é o comprimento total da fronteira em unidades lineares."
      },
      {
        "question": "Como calculo o perímetro de um triângulo retângulo?",
        "answer": "Identifique os dois catetos e a hipotenusa, confirme que os três usam a mesma unidade, substitua em P = a + b + c e some. Para um triângulo 3-4-5: P = 3 + 4 + 5 = 12 unidades. A calculadora desta página executa os mesmos passos e mostra seu trabalho."
      },
      {
        "question": "Por que devo incluir a hipotenusa?",
        "answer": "A hipotenusa é uma das três arestas externas do triângulo, então a fronteira fica incompleta sem ela. Somar apenas os dois catetos de um triângulo 3-4-5 dá 7, que é o comprimento combinado dos catetos, não o perímetro. O passeio completo ao redor do triângulo é 3 + 4 + 5 = 12."
      },
      {
        "question": "Posso calcular o perímetro se um lado estiver faltando?",
        "answer": "Sim, mas recupere primeiro o lado faltante com o teorema de Pitágoras. Com catetos 6 e 8, a hipotenusa é sqrt(36 + 64) = 10, então o perímetro é 6 + 8 + 10 = 24. Com hipotenusa 13 e cateto 5, o cateto faltante é sqrt(169 - 25) = 12, então o perímetro é 30."
      },
      {
        "question": "Como encontro a hipotenusa antes de calcular o perímetro?",
        "answer": "Use c = sqrt(a^2 + b^2) quando ambos os catetos são conhecidos. Para catetos 6 e 8: c = sqrt(36 + 64) = sqrt(100) = 10. Uma vez conhecida a hipotenusa, some os três lados para obter o perímetro."
      },
      {
        "question": "A fórmula do perímetro é diferente para um triângulo retângulo?",
        "answer": "Não. P = a + b + c funciona para todo triângulo. O que há de especial no triângulo retângulo é a relação pitagórica a^2 + b^2 = c^2, que permite encontrar um lado faltante ou verificar se as medidas formam mesmo um triângulo retângulo."
      },
      {
        "question": "Qual é o perímetro de um triângulo retângulo 3-4-5?",
        "answer": "O perímetro é 3 + 4 + 5 = 12 unidades. Os lados satisfazem 9 + 16 = 25, confirmando o ângulo reto. Versões escaladas como 6-8-10 ou 9-12-15 mantêm a mesma forma com perímetros proporcionalmente maiores."
      },
      {
        "question": "Como verifico se três lados formam um triângulo retângulo?",
        "answer": "Confira que a^2 + b^2 = c^2 com c como o lado mais longo. Para 3, 4, 5: 9 + 16 = 25, então o triângulo é retângulo. Se a igualdade falhar, a fórmula do perímetro ainda soma, mas o triângulo não é retângulo."
      },
      {
        "question": "Qual é a diferença entre perímetro e área?",
        "answer": "Perímetro (P = a + b + c) mede a distância total ao redor do triângulo em unidades lineares como metros ou pés. Área (K = ab/2) mede a superfície dentro do triângulo em unidades quadradas como metros quadrados. Para um triângulo 3-4-5, o perímetro é 12 unidades e a área é 6 unidades quadradas."
      },
      {
        "question": "A calculadora de perímetro aceita valores decimais?",
        "answer": "Sim. Comprimentos de lado decimais funcionam exatamente como números inteiros: para a = 2.5, b = 6, c = 6.5, o perímetro é 2.5 + 6 + 6.5 = 15 unidades. Mantenha a precisão total durante o cálculo e arredonde apenas a resposta final."
      },
      {
        "question": "Que unidades devo usar para o perímetro?",
        "answer": "Qualquer unidade de comprimento funciona: metros, centímetros, milímetros, pés, polegadas, jardas ou milhas. Os três lados devem compartilhar a mesma unidade antes de somar. A calculadora converte cada entrada para uma unidade comum automaticamente por meio de seus seletores de unidade por entrada."
      },
      {
        "question": "Qual é a relação entre perímetro e semiperímetro?",
        "answer": "O semiperímetro é exatamente metade do perímetro: s = P/2. Para um triângulo 3-4-5, P = 12 e s = 6. O semiperímetro aparece em fórmulas avançadas como a fórmula de Herão para a área e a relação do raio inscrito K = rs."
      }
    ]
  }
};
