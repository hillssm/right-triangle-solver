// altitudeGuideTranslations.bpt.ts: Right Triangle Altitude From Projections
// Guide (Page 29 of 45) translation.
export const B3_PT = {
  "pt": {
      "tocHeading": "Navegação das Seções",
      "tocItems": {
        "sec-intro": "Calculadora de Altura do Triângulo Retângulo",
        "sec-calculate": "Calcular a Altura de um Triângulo Retângulo",
        "sec-what": "O Que É a Altura de um Triângulo Retângulo?",
        "sec-diagram": "Diagrama da Altura do Triângulo Retângulo Explicado",
        "sec-formulas": "Fórmulas da Altura do Triângulo Retângulo Explicadas",
        "sec-how": "Como Usar a Calculadora de Altura do Triângulo Retângulo",
        "sec-method1": "Método 1: Encontrar a Altura do Triângulo Retângulo a Partir dos Lados",
        "sec-method2": "Método 2: Encontrar a Altura a Partir das Projeções sobre a Hipotenusa",
        "sec-two-sides": "Como Encontrar a Altura Quando Apenas Dois Lados São Conhecidos",
        "sec-why": "Por Que a Fórmula da Altura do Triângulo Retângulo Funciona?",
        "sec-proof": "Demonstração do Teorema da Altura Usando Triângulos Semelhantes",
        "sec-examples": "Exemplos Resolvidos de Altura do Triângulo Retângulo",
        "sec-area": "Relação Entre Altura e Área do Triângulo",
        "sec-geomean": "Média Geométrica e Projeções sobre a Hipotenusa",
        "sec-properties": "Propriedades Importantes da Altura do Triângulo Retângulo",
        "sec-verify": "Como Verificar se a Sua Resposta de Altura Está Correta",
        "sec-mistakes": "Erros Comuns ao Calcular a Altura",
        "sec-applications": "Aplicações Reais da Altura do Triângulo Retângulo",
        "sec-practice": "Exercícios com Respostas",
        "sec-related": "Explorar Calculadoras Relacionadas de Triângulo Retângulo",
        "sec-faq": "Perguntas Frequentes",
        "sec-conclusion": "Calculadoras Relacionadas de Triângulo Retângulo",
      },
      "sections": {
        "sec-intro": {
          "h2": "Calculadora de Altura do Triângulo Retângulo",
          "blocks": [
            {
              "kind": "p",
              "text": "Este guia mostra duas formas de encontrar a altura de um triângulo retângulo, com exemplos resolvidos para cada uma.",
            },
            {
              "kind": "p",
              "text": "A altura é o segmento perpendicular traçado do vértice do ângulo reto até a hipotenusa. A Calculadora de Altura do Triângulo Retângulo encontra esse comprimento usando os três lados ou as duas projeções sobre a hipotenusa. Escolha o modo que corresponde ao que você conhece, insira as suas medidas e a calculadora devolve a altura na mesma unidade.",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{ab}{c}]]]",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{pq}]]]",
            },
            {
              "kind": "p",
              "text": "A primeira fórmula usa os dois catetos [[a]] e [[b]] com a hipotenusa [[c]]. A segunda usa as projeções [[p]] e [[q]], os dois segmentos em que a altura divide a hipotenusa. Ambas as fórmulas encontram a mesma altura perpendicular; elas apenas partem de medidas conhecidas diferentes.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Calcular a Altura de um Triângulo Retângulo",
          "blocks": [
            {
              "kind": "p",
              "text": "A calculadora ao lado deste guia oferece dois modos, e escolher o correto é a única configuração necessária. Cada modo pede medidas diferentes e aplica uma fórmula diferente, então leia a tabela primeiro e combine o modo com os seus valores conhecidos.",
            },
            {
              "kind": "p",
              "text": "O Modo 1, Altura até a Hipotenusa, aceita Cateto a, Cateto b e Hipotenusa c. Ele calcula a altura com [[h=\\frac{ab}{c}]], que divide o produto dos dois catetos pela hipotenusa. O Modo 2, Altura ao Quadrado, aceita Projeção p e Projeção q, as duas partes da hipotenusa, e aplica [[h=\\sqrt{pq}]], a média geométrica das projeções.",
            },
            {
              "kind": "p",
              "text": "Todas as medidas devem usar unidades compatíveis: centímetros com centímetros, metros com metros. O resultado chega na unidade comum de comprimento das suas entradas. Use o botão Redefinir para limpar os campos antes de começar um novo problema.",
            },
          ],
          "table": {
            "headers": [
              "Medidas Conhecidas",
              "Modo da Calculadora",
              "Fórmula",
            ],
            "rows": [
              [
                "Catetos a, b e hipotenusa c",
                "Altura até a Hipotenusa",
                "[[h=\\frac{ab}{c}]]",
              ],
              [
                "Projeções p e q sobre a hipotenusa",
                "Altura ao Quadrado",
                "[[h=\\sqrt{pq}]]",
              ],
            ],
          },
        },
        "sec-what": {
          "h2": "O Que É a Altura de um Triângulo Retângulo?",
          "blocks": [
            {
              "kind": "p",
              "text": "Uma altura é um segmento perpendicular traçado de um vértice de um triângulo até a reta que contém o lado oposto. Em um triângulo retângulo, a altura mais útil começa no vértice do ângulo reto e encontra a hipotenusa formando um ângulo reto. O ponto onde ela chega é chamado de pé da altura, e a hipotenusa é a base natural para esse par base-altura.",
            },
            {
              "kind": "p",
              "text": "Todo triângulo tem três alturas, e o triângulo retângulo não é exceção. Duas delas coincidem com os catetos: se você tomar um cateto como base, o outro cateto já é perpendicular a ele, então serve como altura. A terceira altura vai do vértice do ângulo reto até a hipotenusa e fica dentro do triângulo. Esta página calcula essa terceira, a única altura que exige cálculo de verdade.",
            },
            {
              "kind": "p",
              "text": "Como ela encontra a hipotenusa em ângulo reto, essa altura divide o triângulo original em dois triângulos retângulos menores. Esses dois triângulos são semelhantes entre si e ao original, e é por isso que a altura cria as elegantes relações de média geométrica exploradas mais adiante neste guia.",
            },
          ],
        },
        "sec-diagram": {
          "h2": "Diagrama da Altura do Triângulo Retângulo Explicado",
          "blocks": [
            {
              "kind": "p",
              "text": "O diagrama abaixo mostra o triângulo ABC com o ângulo reto em C. Os lados AC e BC se encontram no ângulo reto, então AB é oposto ao ângulo reto e precisa ser a hipotenusa. A altura CD vai de C até o lado AB, encontrando-o em D com uma marca de ângulo reto que mostra a relação perpendicular.",
            },
            {
              "kind": "p",
              "text": "Cada lado tem um rótulo padrão: AC = a, BC = b, AB = c e a altura CD = h. A altura divide a hipotenusa em duas projeções, AD = p e DB = q, de modo que c = p + q. Observe que p fica junto ao cateto a e q fica junto ao cateto b, um padrão que importa para a demonstração por semelhança mais adiante.",
            },
            {
              "kind": "p",
              "text": "Lendo o diagrama da esquerda para a direita, a história completa aparece: um triângulo retângulo, uma altura caindo sobre a hipotenusa, dois segmentos de projeção e o triângulo original dividido em dois triângulos retângulos menores, ACD e CBD, que compartilham a altura como lado comum.",
            },
          ],
          "image": {
            "src": "altitude-main.svg",
            "alt": "Triângulo ABC com ângulo reto em C; altura CD traçada até a hipotenusa AB, com AC igual a a, BC igual a b, AB igual a c, CD igual a h, AD igual a p, DB igual a q",
            "caption": "A altura CD cai do ângulo reto C perpendicular à hipotenusa AB, dividindo-a nas projeções p e q.",
          },
        },
        "sec-formulas": {
          "h2": "Fórmulas da Altura do Triângulo Retângulo Explicadas",
          "blocks": [
            {
              "kind": "p",
              "text": "Quatro fórmulas encontram a mesma altura, e cada uma parte de medidas conhecidas diferentes. A calculadora implementa diretamente as duas primeiras; as outras duas são métodos manuais que você pode usar quando as medidas estão incompletas ou quando quer verificar um resultado de outra forma.",
            },
            {
              "kind": "p",
              "text": "A fórmula dos lados [[h=\\frac{ab}{c}]] precisa dos dois catetos e da hipotenusa. A fórmula das projeções [[h=\\sqrt{pq}]] precisa apenas dos dois segmentos da hipotenusa, e ela é equivalente ao teorema da altura [[h^2=pq]]. Quando você conhece os catetos, mas não a hipotenusa, substitua [[c=\\sqrt{a^2+b^2}]] para obter [[h=\\frac{ab}{\\sqrt{a^2+b^2}}]]. Quando você conhece a área A e a hipotenusa c, use [[h=\\frac{2A}{c}]], que vem direto da fórmula da área com a hipotenusa como base.",
            },
            {
              "kind": "p",
              "text": "Nunca trate essas quatro como quatro modos da calculadora. A calculadora mantém exatamente dois modos: Altura até a Hipotenusa e Altura ao Quadrado. As fórmulas restantes são auxiliares para o cálculo manual, para deduzir uma medida faltante antes de usar a calculadora ou para conferir uma resposta que a calculadora produziu.",
            },
          ],
          "table": {
            "headers": [
              "Fórmula",
              "Entradas necessárias",
            ],
            "rows": [
              [
                "[[h=\\frac{ab}{c}]]",
                "Catetos a, b e hipotenusa c",
              ],
              [
                "[[h=\\sqrt{pq}]]",
                "Projeções p e q",
              ],
              [
                "[[h=\\frac{ab}{\\sqrt{a^2 + b^2}}]]",
                "Ambos os catetos a, b",
              ],
              [
                "[[h=\\frac{2A}{c}]]",
                "Área A e hipotenusa c",
              ],
            ],
          },
        },
        "sec-how": {
          "h2": "Como Usar a Calculadora de Altura do Triângulo Retângulo",
          "blocks": [
            {
              "kind": "p",
              "text": "Siga estes passos em ordem e a calculadora faz o resto. O processo todo leva menos de um minuto depois que você sabe quais medidas tem.",
            },
            {
              "kind": "steps",
              "steps": [
                "Identifique as suas medidas conhecidas: são três comprimentos de lado ou as duas projeções sobre a hipotenusa?",
                "Selecione o modo da calculadora correspondente: Altura até a Hipotenusa para três lados, Altura ao Quadrado para duas projeções.",
                "Insira medidas positivas em unidades compatíveis, convertendo primeiro se elas chegarem em unidades mistas.",
                "Verifique se as medidas descrevem um triângulo retângulo válido, com os catetos satisfazendo o teorema de Pitágoras.",
                "Clique no botão Calcular para executar o modo selecionado.",
                "Leia o resultado da altura na unidade comum das suas entradas.",
                "Verifique a resposta com um dos métodos de conferência deste guia se o problema for importante.",
                "Clique em Redefinir antes de inserir um novo problema para que valores antigos nunca se misturem com os novos.",
              ],
            },
            {
              "kind": "p",
              "text": "A escolha do modo é o passo que mais importa. Se você conhece os catetos a e b mais a hipotenusa c, o modo Altura até a Hipotenusa serve. Se você só sabe como a hipotenusa se divide em p e q, escolha Altura ao Quadrado. O modo errado rejeita entradas válidas, então combinar o modo com as medidas evita frustração.",
            },
          ],
        },
        "sec-method1": {
          "h2": "Método 1: Encontrar a Altura do Triângulo Retângulo a Partir dos Lados",
          "blocks": [
            {
              "kind": "p",
              "text": "Quando os três comprimentos de lado são conhecidos, a altura sai de uma única divisão. A fórmula [[h=\\frac{ab}{c}]] multiplica os dois catetos e divide pela hipotenusa, e cada símbolo tem um significado fixo: a e b são os catetos perpendiculares, c é a hipotenusa e h é a altura até a hipotenusa.",
            },
            {
              "kind": "p",
              "text": "O clássico triângulo 3-4-5 mostra cada passo. Dados a = 3 cm, b = 4 cm e c = 5 cm, substitua na fórmula:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{(3 \\times 4)}{5}]]]",
            },
            {
              "kind": "p",
              "text": "Multiplique os catetos primeiro: 3 × 4 = 12. Depois divida pela hipotenusa:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{12}{5}]]]",
            },
            {
              "kind": "p",
              "text": "O resultado é h = 2,4 cm. Observe que 2,4 é menor que ambos os catetos, o que sempre acontece com a altura até a hipotenusa, e a seção de demonstração mais adiante explica por que a divisão por c é geometricamente natural.",
            },
            {
              "kind": "p",
              "text": "Use este método sempre que os três lados forem conhecidos ou puderem ser medidos diretamente. Para uma ferramenta dedicada que trata apenas de entradas de lados, experimente a <a href=\"/right-triangle-altitude-from-sides-calculator/\">calculadora de altura a partir dos lados</a>, que percorre a mesma fórmula com mais profundidade.",
            },
          ],
          "image": {
            "src": "altitude-sides-345.svg",
            "alt": "Triângulo retângulo com catetos 3 e 4, hipotenusa 5, altura 2,4 traçada perpendicular à hipotenusa",
            "caption": "Um triângulo 3-4-5: a altura h é igual a (3 x 4) / 5 = 2,4.",
          },
        },
        "sec-method2": {
          "h2": "Método 2: Encontrar a Altura a Partir das Projeções sobre a Hipotenusa",
          "blocks": [
            {
              "kind": "p",
              "text": "Quando a hipotenusa já está dividida em suas duas projeções, o teorema da altura dá um atalho. O teorema afirma [[h^2=pq]], então a altura é a raiz quadrada do produto das duas projeções:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{pq}]]]",
            },
            {
              "kind": "p",
              "text": "Tome p = 9 cm e q = 16 cm. Escreva primeiro a relação ao quadrado:",
            },
            {
              "kind": "p",
              "text": "[[[h^2=9 \\times 16]]]",
            },
            {
              "kind": "p",
              "text": "Multiplique: 9 × 16 = 144, então [[h^2=144]]. Agora tire a raiz quadrada:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{144}]]]",
            },
            {
              "kind": "p",
              "text": "O resultado é h = 12 cm. Isso diz que a altura é a média geométrica das duas projeções: ela fica entre elas em tamanho, mais próxima da média delas do que de qualquer extremo, um significado explicado mais a fundo na seção de média geométrica.",
            },
            {
              "kind": "p",
              "text": "Lembre-se de que p e q são segmentos da hipotenusa, não os catetos do triângulo. Um erro comum é inserir comprimentos de catetos como projeções, o que produz uma resposta errada. Para uma ferramenta construída apenas em torno deste método, veja a <a href=\"/right-triangle-altitude-from-projections-calculator/\">calculadora de altura a partir das projeções</a>.",
            },
          ],
          "image": {
            "src": "altitude-projections.svg",
            "alt": "Triângulo retângulo com altura h dividindo a hipotenusa nas projeções p = 9 e q = 16, altura h = 12",
            "caption": "A altura é a média geométrica das projeções: raiz quadrada de (9 x 16) = 12.",
          },
        },
        "sec-two-sides": {
          "h2": "Como Encontrar a Altura Quando Apenas Dois Lados São Conhecidos",
          "blocks": [
            {
              "kind": "p",
              "text": "Às vezes o terceiro lado está faltando, mas o teorema de Pitágoras o recupera em um passo. O método de recuperação depende de quais dois lados você conhece, então trate cada caso separadamente.",
            },
            {
              "kind": "h3",
              "text": "Caso 1: Ambos os Catetos São Conhecidos",
            },
            {
              "kind": "p",
              "text": "Dados a = 6 cm e b = 8 cm, encontre primeiro a hipotenusa com [[c=\\sqrt{a^2+b^2}]]:",
            },
            {
              "kind": "p",
              "text": "[[[c=\\sqrt{6^2+8^2}=\\sqrt{36+64}=\\sqrt{100}=10]]]",
            },
            {
              "kind": "p",
              "text": "Agora os três lados são conhecidos, então aplique a fórmula dos lados: h = (6 × 8) / 10 = 48 / 10 = 4,8 cm. A hipotenusa faltante era o único obstáculo, e a altura segue diretamente.",
            },
            {
              "kind": "h3",
              "text": "Caso 2: Um Cateto e a Hipotenusa São Conhecidos",
            },
            {
              "kind": "p",
              "text": "Dados a = 5 cm e c = 13 cm, encontre o cateto faltante com [[b=\\sqrt{c^2-a^2}]]:",
            },
            {
              "kind": "p",
              "text": "[[[b=\\sqrt{13^2-5^2}=\\sqrt{169-25}=\\sqrt{144}=12]]]",
            },
            {
              "kind": "p",
              "text": "Com b = 12 cm recuperado, a altura é h = (5 × 12) / 13 = 60/13 cm ≈ 4,615 cm. Essas são derivações manuais para encontrar primeiro as medidas necessárias; a calculadora em si pede entradas completas, então faça esse trabalho preliminar no papel antes de inserir os valores.",
            },
            {
              "kind": "p",
              "text": "Se você precisa com frequência do próprio lado faltante, a <a href=\"/right-triangle-side-calculator/\">calculadora de lados</a> o encontra diretamente antes de você passar para a altura.",
            },
          ],
        },
        "sec-why": {
          "h2": "Por Que a Fórmula da Altura do Triângulo Retângulo Funciona?",
          "blocks": [
            {
              "kind": "p",
              "text": "A fórmula funciona porque um triângulo pode ser medido com dois pares base-altura diferentes, e a área permanece a mesma de qualquer forma. Esse argumento da área é a demonstração mais curta e honesta de [[h=\\frac{ab}{c}]].",
            },
            {
              "kind": "p",
              "text": "Primeiro, use os catetos como par base-altura. Como os catetos são perpendiculares, a área é simplesmente metade do seu produto:",
            },
            {
              "kind": "p",
              "text": "[[[A=\\frac{ab}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Agora use a hipotenusa como base e a altura como altura. O mesmo triângulo tem a mesma área:",
            },
            {
              "kind": "p",
              "text": "[[[A=\\frac{ch}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Duas expressões para uma área, então iguale-as:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{ab}{2}=\\frac{ch}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Multiplique os dois lados por 2 para eliminar as frações, obtendo ab = ch. Divida os dois lados por c:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{ab}{c}]]]",
            },
            {
              "kind": "p",
              "text": "Cada passo é uma aritmética reversível, então a divisão pela hipotenusa não é um truque; é o preço algébrico de trocar o par base-altura dos catetos pelo par base-altura da hipotenusa enquanto a área permanece fixa.",
            },
          ],
          "image": {
            "src": "altitude-area-comparison.svg",
            "alt": "O mesmo triângulo retângulo desenhado duas vezes: primeiro com base a e altura b, depois com base c e altura h",
            "caption": "Mesmo triângulo, dois pares base-altura: a área é igual a ab/2 e ch/2, então h é igual a ab/c.",
          },
        },
        "sec-proof": {
          "h2": "Demonstração do Teorema da Altura Usando Triângulos Semelhantes",
          "blocks": [
            {
              "kind": "p",
              "text": "A fórmula das projeções [[h=\\sqrt{pq}]] vem da semelhança. Mantenha a rotulação consistente: o triângulo ABC é reto em C, D está sobre AB, CD é perpendicular a AB, AD = p, DB = q e CD = h.",
            },
            {
              "kind": "p",
              "text": "A altura divide ABC em dois triângulos retângulos menores, ACD e CBD. O ângulo em A é compartilhado entre ABC e ACD, então esses dois são semelhantes; da mesma forma, o ângulo em B é compartilhado entre ABC e CBD. Como ambos os triângulos menores são semelhantes ao original, eles são semelhantes entre si: o triângulo ACD é semelhante ao triângulo CBD.",
            },
            {
              "kind": "p",
              "text": "Escreva a semelhança como uma proporção de lados correspondentes. O cateto menor de ACD é p e o cateto maior é h; em CBD, o cateto menor é h e o cateto maior é q. Correspondendo-os, obtém-se:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{p}{h}=\\frac{h}{q}]]]",
            },
            {
              "kind": "p",
              "text": "Multiplique em cruz: h × h = p × q, então h² = pq. Tire a raiz quadrada:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{pq}]]]",
            },
            {
              "kind": "p",
              "text": "Apenas a raiz positiva é usada porque comprimentos de lado são positivos. Uma raiz negativa não tem significado geométrico aqui. A ideia central é que a altura é a média proporcional entre os dois segmentos da hipotenusa, que é exatamente o que uma média geométrica é.",
            },
          ],
          "image": {
            "src": "altitude-similar-triangles.svg",
            "alt": "Triângulo retângulo original ABC com altura CD, ao lado dos dois triângulos semelhantes menores ACD e CBD com lados correspondentes rotulados",
            "caption": "Os triângulos ACD e CBD são semelhantes: p/h = h/q, então h ao quadrado é igual a p vezes q.",
          },
        },
        "sec-examples": {
          "h2": "Exemplos Resolvidos de Altura do Triângulo Retângulo",
          "blocks": [
            {
              "kind": "p",
              "text": "Sete exemplos cobrem ambos os modos da calculadora, conversão de unidades e medidas decimais. Cada um mostra os valores dados, a fórmula escolhida, a substituição e a resposta final.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 1: Triângulo 3-4-5 Clássico",
            },
            {
              "kind": "p",
              "text": "Dados a = 3 cm, b = 4 cm, c = 5 cm. Use [[h=\\frac{ab}{c}]]: h = (3 × 4) / 5 = 12 / 5 = 2,4 cm. A altura é menor que qualquer cateto, como sempre.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 2: Triângulo 5-12-13",
            },
            {
              "kind": "p",
              "text": "Dados a = 5 m, b = 12 m, c = 13 m. Use [[h=\\frac{ab}{c}]]: h = (5 × 12) / 13 = 60/13 m ≈ 4,615 m. Mantenha a fração até o último passo para um decimal limpo.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 3: Triângulo 8-15-17",
            },
            {
              "kind": "p",
              "text": "Dados a = 8 cm, b = 15 cm, c = 17 cm. Use [[h=\\frac{ab}{c}]]: h = (8 × 15) / 17 = 120/17 cm ≈ 7,059 cm. Catetos maiores ainda dão uma altura menor que ambos.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 4: Projeções Iguais sobre a Hipotenusa",
            },
            {
              "kind": "p",
              "text": "Dados p = 5 cm e q = 5 cm. Use [[h=\\sqrt{pq}]]: h = √(5 × 5) = √25 = 5 cm. Projeções iguais significam que a altura é a mais alta possível para essa hipotenusa, e o triângulo é um triângulo retângulo isósceles: cada cateto mede 5√2 cm, cerca de 7,07 cm.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 5: Projeções Desiguais sobre a Hipotenusa",
            },
            {
              "kind": "p",
              "text": "Dados p = 4 cm e q = 25 cm. Use [[h=\\sqrt{pq}]]: h = √(4 × 25) = √100 = 10 cm. Observe como a altura de 10 fica entre as duas projeções, 4 e 25, que é a marca registrada da média geométrica.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 6: Medidas Decimais",
            },
            {
              "kind": "p",
              "text": "Dados a = 1,5 m, b = 2 m, c = 2,5 m. Use [[h=\\frac{ab}{c}]]: h = (1,5 × 2) / 2,5 = 3 / 2,5 = 1,2 m. Decimais funcionam exatamente como números inteiros, desde que cada valor use a mesma unidade.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 7: Unidades de Medida Diferentes",
            },
            {
              "kind": "p",
              "text": "Dados a = 30 cm, b = 0,4 m, c = 0,5 m. Converta tudo para centímetros primeiro: b = 40 cm, c = 50 cm. Então h = (30 × 40) / 50 = 1200 / 50 = 24 cm. Converter antes de substituir evita o erro de unidade mais comum.",
            },
          ],
        },
        "sec-area": {
          "h2": "Relação Entre Altura e Área do Triângulo",
          "blocks": [
            {
              "kind": "p",
              "text": "A área e a altura se determinam mutuamente uma vez que a hipotenusa é conhecida. Com a hipotenusa como base, a área A = ch/2, então isolando a altura obtém-se [[h=\\frac{2A}{c}]]. Esta é uma rota genuinamente diferente: ela pula os catetos por completo.",
            },
            {
              "kind": "p",
              "text": "Suponha que um problema informe a área A = 54 cm² e a hipotenusa c = 15 cm. Substitua:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\frac{2 \\times 54}{15}]]]",
            },
            {
              "kind": "p",
              "text": "Multiplique o numerador: 2 × 54 = 108. Depois divida: h = 108 / 15 = 7,2 cm. A altura segue sem nenhum conhecimento dos catetos individuais.",
            },
            {
              "kind": "p",
              "text": "Essa rota é útil quando a área é dada diretamente, por exemplo em problemas de palavras sobre terreno ou material. Ela também serve como ferramenta de verificação: calcule a altura a partir dos lados e depois confirme que 2A/c dá o mesmo valor. A <a href=\"/right-triangle-area-calculator/\">calculadora de área</a> encontra a área a partir de quaisquer medidas que um problema forneça.",
            },
          ],
        },
        "sec-geomean": {
          "h2": "Média Geométrica e Projeções sobre a Hipotenusa",
          "blocks": [
            {
              "kind": "p",
              "text": "O teorema da altura diz que a altura é a média geométrica das duas projeções, e a média geométrica é um tipo específico de média. Tome p = 4 e q = 9. A média geométrica deles é √(4 × 9) = √36 = 6, então um triângulo com essas projeções tem altura 6.",
            },
            {
              "kind": "p",
              "text": "Compare isso com a média aritmética comum: (4 + 9) / 2 = 6,5. As duas médias diferem, e apenas 6 é a altura correta. A média aritmética faz a média somando, enquanto a média geométrica faz a média multiplicando, o que combina com comprimentos que escalam juntos em vez de se somarem.",
            },
            {
              "kind": "p",
              "text": "Geometricamente, a relação média-proporcional h² = pq significa que a altura se relaciona com cada projeção da mesma forma que as projeções se relacionam entre si. Essa simetria é o que torna os dois triângulos menores semelhantes, e é por isso que a altura sempre fica entre as duas projeções em tamanho, nunca igual à média aritmética, a menos que p seja igual a q.",
            },
          ],
        },
        "sec-properties": {
          "h2": "Propriedades Importantes da Altura do Triângulo Retângulo",
          "blocks": [
            {
              "kind": "p",
              "text": "Sete propriedades descrevem a altura até a hipotenusa. Juntas, elas dão uma intuição confiável sobre quais valores de altura são possíveis e como eles se comportam.",
            },
            {
              "kind": "list",
              "items": [
                "A altura até a hipotenusa é perpendicular a ela, então é a menor distância do vértice do ângulo reto até a hipotenusa.",
                "A altura divide o triângulo em dois triângulos menores, cada um semelhante ao original e entre si.",
                "A altura é menor que ambos os catetos; nenhum cateto pode ser o caminho mais curto até a hipotenusa.",
                "A altura é menor que a própria hipotenusa, já que um segmento perpendicular é a rota mais curta.",
                "A altura é a média geométrica das duas projeções sobre a hipotenusa, [[h=\\sqrt{pq}]].",
                "Para uma hipotenusa fixa, a altura é máxima quando as duas projeções são iguais, o que acontece quando os dois catetos são iguais.",
                "Escalar cada comprimento de lado pelo mesmo fator escala a altura por esse fator; dobre o triângulo, dobre a altura.",
              ],
            },
            {
              "kind": "p",
              "text": "A sexta propriedade tem um limite preciso: a altura nunca pode exceder metade da hipotenusa, [[h \\leq \\frac{c}{2}]], com igualdade apenas quando os catetos são iguais. Um triângulo 45-45-90 com hipotenusa 10 tem altura exatamente 5, o máximo; um triângulo 6-8-10 com a mesma hipotenusa alcança apenas 4,8, como mostra o diagrama.",
            },
          ],
          "image": {
            "src": "altitude-equal-vs-unequal.svg",
            "alt": "Dois triângulos retângulos compartilhando uma hipotenusa de 10: um triângulo 45-45-90 com altura 5 e um triângulo estilo 6-8-10 com altura 4",
            "caption": "Mesma hipotenusa 10: projeções iguais dão a altura mais alta, 5.",
          },
        },
        "sec-verify": {
          "h2": "Como Verificar se a Sua Resposta de Altura Está Correta",
          "blocks": [
            {
              "kind": "p",
              "text": "Três verificações independentes pegam erros de cálculo. Use pelo menos uma delas sempre que uma resposta de altura importar.",
            },
            {
              "kind": "h3",
              "text": "Verificação 1: Área do Triângulo",
            },
            {
              "kind": "p",
              "text": "Compare ab/2 com ch/2 usando a sua altura. Para o triângulo 3-4-5 com h = 2,4: ab/2 = (3 × 4)/2 = 6, e ch/2 = (5 × 2,4)/2 = 6. Áreas iguais confirmam que a altura se encaixa nos lados.",
            },
            {
              "kind": "h3",
              "text": "Verificação 2: Média Geométrica",
            },
            {
              "kind": "p",
              "text": "Verifique [[h^2=pq]] quando as projeções são conhecidas. Com p = 9 e q = 16: h² = 12² = 144, e pq = 9 × 16 = 144. A igualdade significa que a altura é consistente com a forma como a hipotenusa se divide.",
            },
            {
              "kind": "h3",
              "text": "Verificação 3: Teorema de Pitágoras",
            },
            {
              "kind": "p",
              "text": "Confirme [[a^2+b^2=c^2]] para os lados dados: 9 + 16 = 25 no caso 3-4-5. Essa verificação valida os comprimentos dos lados, não a altura diretamente, mas uma entrada de lado errada é a razão mais comum para uma resposta de altura falhar nas outras duas verificações.",
            },
            {
              "kind": "p",
              "text": "Execute cada verificação em unidades consistentes. Misturar centímetros com metros quebra a verificação da área silenciosamente, então converta primeiro e verifique depois.",
            },
          ],
        },
        "sec-mistakes": {
          "h2": "Erros Comuns ao Calcular a Altura",
          "blocks": [
            {
              "kind": "p",
              "text": "Dez erros aparecem repetidamente. Cada um é fácil de identificar depois que você conhece a sua assinatura.",
            },
            {
              "kind": "steps",
              "steps": [
                "Confundir altura com cateto. A altura encontra a hipotenusa em ângulo reto; um cateto encontra o outro cateto no ângulo reto. Em um triângulo 3-4-5, h = 2,4, não 3 ou 4.",
                "Escolher o modo errado da calculadora. Inserir catetos e hipotenusa no modo Altura ao Quadrado, que espera projeções, produz absurdos. Combine o modo com as medidas.",
                "Confundir projeções com catetos. Inserir a = 3 e b = 4 como p e q calcula √(12) ≈ 3,46, que não é a altura. Projeções são segmentos da hipotenusa.",
                "Usar a hipotenusa errada. Dividir ab por um cateto em vez da hipotenusa, por exemplo 12/4 = 3, superestima a altura. O divisor precisa ser o lado mais longo, c.",
                "Esquecer a raiz quadrada na fórmula das projeções. Parar em h² = 144 dá 144 como altura; a resposta real é h = 12.",
                "Misturar centímetros e metros. Com a = 30 cm e c = 0,5 m, substituir 0,5 diretamente dá uma altura errada. Converta primeiro: 50 cm.",
                "Inserir comprimentos de lado inválidos. Lados como 2, 3, 10 não satisfazem o teorema de Pitágoras, então nenhum triângulo retângulo existe e nenhuma altura está definida.",
                "Arredondar cedo demais. Arredondar 60/13 para 4,6 antes de um passo seguinte carrega o erro adiante. Mantenha a fração e arredonde apenas a resposta final.",
                "Tratar h² como a altura final. Se um cálculo termina com h² = 36, a altura é 6, não 36.",
                "Aplicar fórmulas de triângulo retângulo a um triângulo qualquer. As fórmulas aqui precisam de um ângulo reto; para outros triângulos, as relações de altura diferem.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Aplicações Reais da Altura do Triângulo Retângulo",
          "blocks": [
            {
              "kind": "p",
              "text": "Cálculos de altura sustentam qualquer trabalho construído sobre a geometria do triângulo retângulo. No ensino de geometria, o teorema da altura dá aos estudantes um primeiro contato com demonstrações por semelhança e médias geométricas. O desenho técnico e o design geométrico usam a altura para posicionar perpendiculares ao traçar painéis triangulares ou formatos de suportes.",
            },
            {
              "kind": "p",
              "text": "A geometria de agrimensura usa relações de triângulo retângulo ao mapear terrenos com deslocamentos perpendiculares, e os modelos de planejamento de construção as usam quando uma estrutura triangular retangular precisa encontrar uma parede em ângulo reto. Os cálculos de área seguem o caminho inverso: a partir de uma altura e uma hipotenusa conhecidas, [[h=\\frac{2A}{c}]] recupera a altura sem medir os catetos.",
            },
            {
              "kind": "p",
              "text": "Estes são esboços geométricos hipotéticos, não procedimentos de engenharia. O trabalho real de agrimensura e estrutura exige medidas adequadas, premissas de projeto e normas profissionais; o teorema da altura descreve a geometria, ele nunca substitui métodos profissionais.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Exercícios com Respostas",
          "blocks": [
            {
              "kind": "p",
              "text": "Cinco problemas usam valores não vistos nos exemplos principais. Resolva cada um e confira as respostas abaixo.",
            },
            {
              "kind": "h3",
              "text": "Problema 1: Baseado em Lados, Iniciante",
            },
            {
              "kind": "p",
              "text": "Um triângulo retângulo tem catetos a = 9 cm e b = 40 cm com hipotenusa c = 41 cm. Encontre a altura até a hipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Problema 2: Baseado em Projeções, Iniciante",
            },
            {
              "kind": "p",
              "text": "A altura de um triângulo retângulo divide a hipotenusa em p = 16 m e q = 36 m. Encontre a altura.",
            },
            {
              "kind": "h3",
              "text": "Problema 3: Medidas Decimais",
            },
            {
              "kind": "p",
              "text": "Um triângulo retângulo tem a = 0,6 m, b = 0,8 m, c = 1,0 m. Encontre a altura até a hipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Problema 4: Lado Faltante",
            },
            {
              "kind": "p",
              "text": "Um triângulo retângulo tem cateto a = 7 in e hipotenusa c = 25 in. Encontre a altura até a hipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Problema 5: Área de Canteiro de Jardim",
            },
            {
              "kind": "p",
              "text": "Um canteiro de jardim em forma de triângulo retângulo tem área A = 96 m² e hipotenusa 20 m. Encontre a altura até a hipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Respostas dos Exercícios",
            },
            {
              "kind": "p",
              "text": "Problema 1: h = (9 × 40) / 41 = 360/41 cm ≈ 8,780 cm. Primeiro confirme os lados: 9² + 40² = 81 + 1600 = 1681 = 41², então o triângulo é válido.",
            },
            {
              "kind": "p",
              "text": "Problema 2: h = √(16 × 36) = √576 = 24 m. A altura fica entre as duas projeções, como a média geométrica precisa ficar.",
            },
            {
              "kind": "p",
              "text": "Problema 3: h = (0,6 × 0,8) / 1,0 = 0,48 / 1,0 = 0,48 m. Decimais precisam do mesmo tratamento que números inteiros.",
            },
            {
              "kind": "p",
              "text": "Problema 4: Recupere o cateto faltante: b = √(25² − 7²) = √(625 − 49) = √576 = 24 in. Então h = (7 × 24) / 25 = 168/25 in ≈ 6,72 in.",
            },
            {
              "kind": "p",
              "text": "Problema 5: Use a rota da área: h = 2A/c = (2 × 96) / 20 = 192 / 20 = 9,6 m. Nenhuma medida de cateto foi necessária.",
            },
          ],
        },
        "sec-conclusion": {
          "h2": "Calculadoras Relacionadas de Triângulo Retângulo",
          "blocks": [
            {
              "kind": "p",
              "text": "Este guia cobriu ambos os modos de altura: comprimentos de lado e projeções sobre a hipotenusa. Se você já sabe quais medidas tem, as ferramentas especializadas vão mais fundo: a <a href=\"/right-triangle-altitude-from-sides-calculator/\">calculadora de altura a partir dos lados</a> e a <a href=\"/right-triangle-altitude-from-projections-calculator/\">calculadora de altura a partir das projeções</a>. A <a href=\"/right-triangle-projection-calculator/\">calculadora de projeções</a> encontra os próprios p e q quando apenas os lados são conhecidos.",
            },
          ],
        },
      },
      "faqHeading": "Perguntas Frequentes",
      "faqs": [
        {
          "question": "O que é a altura de um triângulo retângulo?",
          "answer": "A altura até a hipotenusa é o segmento perpendicular do vértice do ângulo reto até a hipotenusa. É a terceira altura do triângulo retângulo, distinta dos dois catetos, e divide a hipotenusa nas projeções p e q.",
        },
        {
          "question": "Como calculo a altura do triângulo retângulo?",
          "answer": "Use a fórmula dos lados [[h=\\frac{ab}{c}]] quando os catetos e a hipotenusa forem conhecidos, ou a fórmula das projeções [[h=\\sqrt{pq}]] quando os segmentos da hipotenusa forem conhecidos. A calculadora aplica o modo que corresponde às suas medidas.",
        },
        {
          "question": "Qual é a fórmula da altura usando três lados?",
          "answer": "Com os catetos a e b e a hipotenusa c, a altura é [[h=\\frac{ab}{c}]]. Multiplique os dois catetos e divida pela hipotenusa. Para um triângulo 3-4-5, h = (3 × 4) / 5 = 2,4.",
        },
        {
          "question": "Como calculo a altura a partir das projeções?",
          "answer": "O teorema da altura diz [[h^2=pq]], então tire a raiz quadrada: [[h=\\sqrt{pq}]]. Para p = 9 e q = 16, h = √(9 × 16) = √144 = 12. As projeções são segmentos da hipotenusa, não os catetos.",
        },
        {
          "question": "Posso calcular a altura usando apenas dois lados?",
          "answer": "Sim, recuperando o terceiro lado primeiro. Com ambos os catetos, encontre [[c=\\sqrt{a^2+b^2}]]; com um cateto e a hipotenusa, encontre [[b=\\sqrt{c^2-a^2}]]. Depois aplique [[h=\\frac{ab}{c}]] normalmente.",
        },
        {
          "question": "Altura é sinônimo de altura?",
          "answer": "Em triângulos retângulos, os termos costumam se confundir, mas altura tem o significado preciso de um segmento perpendicular traçado de um vértice até o lado oposto. Nesta página, altura sempre significa a perpendicular do vértice do ângulo reto até a hipotenusa.",
        },
        {
          "question": "A altura é sempre menor que a hipotenusa?",
          "answer": "Sim. A altura é a menor distância do vértice do ângulo reto até a hipotenusa, e a hipotenusa é mais longa que qualquer segmento desse tipo. Ela também é menor que ambos os catetos.",
        },
        {
          "question": "A altura pode ser igual a uma projeção sobre a hipotenusa?",
          "answer": "Sim, quando as projeções são iguais. Se p = q, então [[h=\\sqrt{p \\times p}=p]], então a altura é igual a cada projeção. Isso acontece em triângulos retângulos isósceles, onde a altura também é metade da hipotenusa.",
        },
        {
          "question": "Como o teorema da média geométrica se relaciona com a altura?",
          "answer": "O teorema da média geométrica é outro nome para o teorema da altura: [[h=\\sqrt{pq}]] diz que a altura é a média geométrica das projeções sobre a hipotenusa. A semelhança dos dois triângulos menores o demonstra.",
        },
        {
          "question": "Como verifico meu cálculo de altura?",
          "answer": "Compare as duas fórmulas de área ab/2 e ch/2; elas precisam concordar. Se as projeções forem conhecidas, confirme [[h^2=pq]]. Verifique também [[a^2+b^2=c^2]] para confirmar que os lados descrevem um triângulo retângulo válido.",
        },
        {
          "question": "Posso usar esta calculadora para um triângulo não retângulo?",
          "answer": "Não. Ambas as fórmulas exigem um ângulo reto: o argumento da área precisa de catetos perpendiculares, e o teorema da altura precisa da semelhança do ângulo reto. Para outros triângulos, as relações de altura são diferentes.",
        },
        {
          "question": "Qual modo da calculadora devo escolher?",
          "answer": "Escolha Altura até a Hipotenusa quando você conhece os dois catetos e a hipotenusa. Escolha Altura ao Quadrado quando você conhece as duas projeções sobre a hipotenusa p e q. Combinar o modo com as suas medidas conhecidas é a única configuração que importa.",
        },
      ],
      "relatedHeading": "Explorar Calculadoras Relacionadas de Triângulo Retângulo",
      "relatedIntro": "Escolha a ferramenta que corresponde às medidas que você já conhece.",
      "relatedItems": [
        "Calculadora de Altura do Triângulo Retângulo a Partir dos Lados",
        "Calculadora de Altura do Triângulo Retângulo a Partir das Projeções",
        "Calculadora de Área do Triângulo Retângulo",
        "Calculadora de Lados do Triângulo Retângulo",
        "Calculadora de Projeções do Triângulo Retângulo",
      ],
    },
};
