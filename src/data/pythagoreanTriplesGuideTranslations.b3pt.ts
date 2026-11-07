// pythagoreanTriplesGuideTranslations.bpt.ts: Pythagorean Triples
// Guide (Page 44 of 45) translation.
export const PYTHAGOREANTRIPLES_B3_PT = {
  "pt": {
      "meta": {
        "title": "Calculadora de Ternos Pitagóricos - Verifique e Gere Ternos",
        "description": "Verifique se três números inteiros formam um terno pitagórico e gere ternos com a fórmula de Euclides. Aprenda sobre ternos primitivos, escalonamento e exemplos resolvidos.",
        "primaryKeyword": "Calculadora de Ternos Pitagóricos",
        "slug": "pythagorean-triples-calculator",
      },
      "tocHeading": "Navegação por Seções",
      "tocItems": {
        "sec-intro": "Calculadora de Ternos Pitagóricos",
        "sec-calculate": "Verifique ou Gere Ternos Pitagóricos com a Calculadora",
        "sec-what": "O Que É um Terno Pitagórico?",
        "sec-pythagorean": "Entendendo o Teorema de Pitágoras",
        "sec-check": "Como Verificar se Três Números Formam um Terno Pitagórico",
        "sec-euclid": "Como Gerar Ternos Pitagóricos Usando a Fórmula de Euclides",
        "sec-proof": "Prova Matemática da Fórmula de Euclides",
        "sec-primitive": "O Que É um Terno Pitagórico Primitivo?",
        "sec-nonprimitive": "O Que É um Terno Pitagórico Não Primitivo?",
        "sec-conditions": "Condições para Gerar Ternos Pitagóricos Primitivos",
        "sec-difference": "Diferença Entre Ternos Primitivos e Não Primitivos",
        "sec-scaling": "Como Gerar Mais Ternos Escalonando os Existentes",
        "sec-examples": "Exemplos Comuns de Ternos Pitagóricos",
        "sec-worked": "Exemplos Resolvidos Passo a Passo Usando a Calculadora",
        "sec-infinite": "Por Que Existem Infinitos Ternos Pitagóricos?",
        "sec-recognize": "Como Reconhecer um Terno Pitagórico sem Adivinhar",
        "sec-ordinary": "Ternos Pitagóricos e Triângulos Retângulos Comuns",
        "sec-mistakes": "Erros Comuns ao Usar a Calculadora de Ternos Pitagóricos",
        "sec-practice": "Problemas de Prática com Respostas",
        "sec-related": "Calculadoras de Triângulo Retângulo Relacionadas",
        "sec-faq": "Perguntas Frequentes",
      },
      "sections": {
        "sec-intro": {
          "h2": "Calculadora de Ternos Pitagóricos",
          "blocks": [
            {
              "kind": "p",
              "text": "Verifique ternos de números inteiros e gere novos com a fórmula de Euclides.",
            },
            {
              "kind": "p",
              "text": "Um terno pitagórico é um conjunto de três números inteiros positivos que podem servir como os lados de um triângulo retângulo. Os dois números menores são os catetos, o maior número é a hipotenusa, e os três valores satisfazem o teorema de Pitágoras.",
            },
            {
              "kind": "p",
              "text": "[[[a^2+b^2=c^2]]]",
            },
            {
              "kind": "p",
              "text": "A Calculadora de Ternos Pitagóricos faz dois trabalhos. No modo de verificação, você digita três números inteiros e ela testa se eles formam um terno válido. No modo de geração, você digita dois números inteiros, [[m]] e [[n]], e ela constrói um novo terno com a fórmula de Euclides. Verificar e gerar são tarefas diferentes, e esta página explica as duas, passo a passo.",
            },
            {
              "kind": "p",
              "text": "O exemplo mais conhecido é [[3]], [[4]] e [[5]]. Elevar os catetos ao quadrado e somá-los dá [[3^2+4^2=9+16=25]], que é igual a [[5^2]]. Como os dois lados são exatamente iguais, [[(3, 4, 5)]] é um terno válido. Um terno primitivo é aquele cujos três números não têm nenhum fator comum maior que [[1]]; [[3]], [[4]] e [[5]] não têm nada em comum, então [[(3, 4, 5)]] é primitivo. As seções abaixo mostram como verificar quaisquer três números, como gerar ternos de qualquer tamanho e como distinguir ternos primitivos de cópias escalonadas.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Verifique ou Gere Ternos Pitagóricos com a Calculadora",
          "blocks": [
            {
              "kind": "p",
              "text": "Dois modos, uma página: verifique um conjunto de números ou construa um novo terno.",
            },
            {
              "kind": "h3",
              "text": "Modo 1: Verificar um Terno Pitagórico",
            },
            {
              "kind": "p",
              "text": "Digite os três comprimentos dos lados como [[a]], [[b]] e [[c]], com [[c]] como o maior valor. A calculadora eleva [[a]] e [[b]] ao quadrado, soma os resultados, eleva [[c]] ao quadrado e compara os dois lados da equação.",
            },
            {
              "kind": "p",
              "text": "[[[a^2+b^2=c^2]]]",
            },
            {
              "kind": "p",
              "text": "Quando os dois lados são iguais, os três números formam um terno pitagórico válido, e o resultado diz isso. Quando são diferentes, os números não formam um terno, e o resultado mostra os dois totais desiguais para que você veja o quanto eles se afastam. As três entradas devem ser números inteiros positivos, e as três devem usar a mesma unidade.",
            },
            {
              "kind": "h3",
              "text": "Modo 2: Gerar Ternos Pitagóricos",
            },
            {
              "kind": "p",
              "text": "Digite dois números inteiros positivos, [[m]] e [[n]], com [[m]] maior que [[n]]. A calculadora aplica a fórmula de Euclides para produzir três comprimentos de lados inteiros.",
            },
            {
              "kind": "p",
              "text": "[[[a=m^2-n^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[b=2mn]]]",
            },
            {
              "kind": "p",
              "text": "[[[c=m^2+n^2]]]",
            },
            {
              "kind": "p",
              "text": "O resultado é sempre um terno válido, porque a fórmula de Euclides foi construída para satisfazer o teorema de Pitágoras. Os dois catetos podem aparecer em qualquer ordem, mas [[c]] é sempre a hipotenusa. Para usar a calculadora, escolha um modo, digite números válidos, clique em Calcular e leia o resultado com sua resolução passo a passo. Clique em Redefinir para limpar os campos e começar de novo.",
            },
          ],
        },
        "sec-what": {
          "h2": "O Que É um Terno Pitagórico?",
          "blocks": [
            {
              "kind": "p",
              "text": "Três números inteiros positivos que se encaixam exatamente no teorema de Pitágoras.",
            },
            {
              "kind": "p",
              "text": "Um terno pitagórico é um conjunto de três números inteiros positivos, escrito como [[(a, b, c)]], que satisfaz a equação [[a^2+b^2=c^2]]. Aqui, [[a]] e [[b]] são os catetos, os dois lados que se encontram no ângulo reto, e [[c]] é a hipotenusa, o lado oposto ao ângulo reto e sempre o maior dos três.",
            },
            {
              "kind": "p",
              "text": "A equação deve valer exatamente. Um quase acerto não é um terno: se a soma dos catetos ao quadrado diferir do quadrado da hipotenusa por apenas uma unidade, os três números não passam no teste. Essa igualdade rigorosa é o que torna um terno útil na construção civil e na carpintaria, onde uma verificação [[3]]-[[4]]-[[5]] marca um canto em esquadro sem erro de medição.",
            },
            {
              "kind": "p",
              "text": "Os três números devem ser inteiros e positivos. Um triângulo retângulo com comprimentos de lados decimais, como catetos [[1.5]] e [[2]] com hipotenusa [[2.5]], satisfaz o teorema de Pitágoras, mas não é um terno pitagórico, porque a definição exige números inteiros. Da mesma forma, um triângulo com um lado irracional, como catetos [[1]] e [[1]] com hipotenusa [[\\sqrt{2}]], é um triângulo retângulo, mas não um terno. A palavra terno é reservada apenas para soluções inteiras positivas.",
            },
            {
              "kind": "p",
              "text": "O terno [[(3, 4, 5)]] é o primeiro exemplo natural. Seus catetos são [[3]] e [[4]], sua hipotenusa é [[5]], e [[9+16=25]] confirma a equação. A ordem dos catetos não importa: [[(4, 3, 5)]] descreve o mesmo triângulo. O que importa é que os dois números menores são os catetos e o maior é a hipotenusa.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-squares.svg",
            "alt": "Quadrados desenhados sobre os lados 3, 4 e 5 com áreas 9, 16 e 25, mostrando que 9 mais 16 é igual a 25",
            "caption": "Quadrados sobre os lados 3, 4 e 5 têm áreas 9, 16 e 25. Como 9 + 16 = 25, os números 3, 4 e 5 formam um terno pitagórico.",
          },
        },
        "sec-pythagorean": {
          "h2": "Entendendo o Teorema de Pitágoras",
          "blocks": [
            {
              "kind": "p",
              "text": "O teorema por trás de todo terno: os quadrados dos catetos somam o quadrado da hipotenusa.",
            },
            {
              "kind": "p",
              "text": "O teorema de Pitágoras afirma que, em qualquer triângulo retângulo, o quadrado da hipotenusa é igual à soma dos quadrados dos outros dois lados. Com catetos [[a]] e [[b]] e hipotenusa [[c]], o teorema fica assim.",
            },
            {
              "kind": "p",
              "text": "[[[a^2+b^2=c^2]]]",
            },
            {
              "kind": "p",
              "text": "Uma maneira clara de ver isso é por meio de áreas. Desenhe um quadrado sobre cada lado do triângulo. O quadrado sobre o cateto [[a]] tem área [[a^2]], o quadrado sobre o cateto [[b]] tem área [[b^2]], e o quadrado sobre a hipotenusa tem área [[c^2]]. O teorema diz que as duas primeiras áreas somam a terceira. Para o triângulo [[3]]-[[4]]-[[5]], os quadrados têm áreas [[9]], [[16]] e [[25]], e [[9+16=25]] mostra o equilíbrio diretamente.",
            },
            {
              "kind": "p",
              "text": "Essa imagem de áreas também explica por que [[3]]-[[4]]-[[5]] é um triângulo retângulo válido. Seus comprimentos de lados satisfazem o equilíbrio de áreas exatamente, então o ângulo entre os catetos deve ser um ângulo reto. Todo terno pitagórico satisfaz o teorema, porque um terno é definido por essa equação. O contrário não é verdade: muitos triângulos retângulos têm comprimentos de lados que não são números inteiros, então satisfazem o teorema sem serem ternos. Use a <a href=\"/pythagorean-theorem-calculator/\">calculadora do teorema de Pitágoras</a> quando um triângulo tiver lados decimais ou desconhecidos em vez de ternos de números inteiros.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-theorem.svg",
            "alt": "Triângulo retângulo ABC com catetos a igual a 3 e b igual a 4, hipotenusa c igual a 5, um marcador de ângulo reto e a fórmula a ao quadrado mais b ao quadrado igual a c ao quadrado",
            "caption": "Triângulo retângulo ABC com catetos a = 3 e b = 4 e hipotenusa c = 5. O marcador de ângulo reto fica em C, e 3 ao quadrado mais 4 ao quadrado é igual a 5 ao quadrado.",
          },
        },
        "sec-check": {
          "h2": "Como Verificar se Três Números Formam um Terno Pitagórico",
          "blocks": [
            {
              "kind": "p",
              "text": "Oito passos curtos transformam quaisquer três números inteiros em um sim ou não claro.",
            },
            {
              "kind": "steps",
              "steps": [
                "Identifique o maior dos três valores.",
                "Atribua o maior valor a [[c]], a hipotenusa.",
                "Atribua os outros dois valores a [[a]] e [[b]], os catetos.",
                "Eleve [[a]] ao quadrado.",
                "Eleve [[b]] ao quadrado.",
                "Some os dois quadrados.",
                "Eleve [[c]] ao quadrado.",
                "Compare os dois resultados: iguais significa um terno válido, desiguais significa que não é um terno.",
              ],
            },
            {
              "kind": "p",
              "text": "Aqui está um exemplo válido. Verifique [[7]], [[24]] e [[25]]: o maior valor é [[25]], então é a hipotenusa. Eleve os catetos ao quadrado e some.",
            },
            {
              "kind": "p",
              "text": "[[[7^2+24^2=25^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[49+576=625]]]",
            },
            {
              "kind": "p",
              "text": "Como [[625=625]], os dois lados são iguais, então [[(7, 24, 25)]] é um terno pitagórico válido. Também é primitivo, porque [[7]], [[24]] e [[25]] não têm nenhum fator comum maior que [[1]].",
            },
            {
              "kind": "p",
              "text": "Agora um exemplo inválido. Verifique [[4]], [[5]] e [[6]]: o maior valor é [[6]], então é a hipotenusa.",
            },
            {
              "kind": "p",
              "text": "[[[4^2+5^2 \\neq 6^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[16+25=41]]]",
            },
            {
              "kind": "p",
              "text": "[[[6^2=36]]]",
            },
            {
              "kind": "p",
              "text": "Como [[41]] não é igual a [[36]], os valores não formam um terno pitagórico. Os mesmos oito passos funcionam para quaisquer entradas inteiras positivas, grandes ou pequenas, então a verificação exata nunca depende de memória ou de adivinhação.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-check-flow.svg",
            "alt": "Fluxo passo a passo para verificar 7, 24, 25: elevar os catetos ao quadrado dá 49 e 576, somar dá 625, elevar a hipotenusa ao quadrado dá 625 e confirmar a igualdade",
            "caption": "Verificando 7, 24, 25 passo a passo: 49 + 576 = 625 e 25 ao quadrado = 625, então os dois lados são iguais e o terno é válido.",
          },
        },
        "sec-euclid": {
          "h2": "Como Gerar Ternos Pitagóricos Usando a Fórmula de Euclides",
          "blocks": [
            {
              "kind": "p",
              "text": "Dois números inteiros pequenos entram, um terno completo sai: essa é a fórmula de Euclides.",
            },
            {
              "kind": "p",
              "text": "A fórmula de Euclides constrói um terno pitagórico a partir de dois números inteiros positivos, [[m]] e [[n]], com [[m]] maior que [[n]]. O parâmetro [[m]] é o número inteiro maior e [[n]] é o menor, e ambos devem ser números inteiros. As três fórmulas produzem os dois catetos e a hipotenusa.",
            },
            {
              "kind": "p",
              "text": "[[[a=m^2-n^2]]]",
            },
            {
              "kind": "p",
              "text": "[[[b=2mn]]]",
            },
            {
              "kind": "p",
              "text": "[[[c=m^2+n^2]]]",
            },
            {
              "kind": "p",
              "text": "A condição [[m>n>0]] importa. Se [[m]] for igual a [[n]], o primeiro cateto se torna zero, o que não é um lado de triângulo. Se [[m]] for menor que [[n]], o primeiro cateto se torna negativo, o que também é impossível. Valores decimais de [[m]] e [[n]] também não são válidos aqui, porque a fórmula foi projetada para parâmetros inteiros que produzem lados inteiros.",
            },
            {
              "kind": "p",
              "text": "Experimente [[m=2]] e [[n=1]]. O primeiro cateto é [[a=2^2-1^2=4-1=3]], o segundo cateto é [[b=2(2)(1)=4]], e a hipotenusa é [[c=2^2+1^2=4+1=5]]. O resultado é o terno [[(3, 4, 5)]]. Observe que os catetos gerados podem aparecer em qualquer ordem: a fórmula pode retornar o cateto maior primeiro ou segundo, mas [[c]] é sempre a hipotenusa. A próxima seção prova por que essas fórmulas sempre satisfazem o teorema de Pitágoras.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-euclid-flow.svg",
            "alt": "Fluxograma da fórmula de Euclides com m igual a 3 e n igual a 2 produzindo 5, 12 e 13",
            "caption": "Fórmula de Euclides com m = 3 e n = 2: m ao quadrado menos n ao quadrado é 5, 2mn é 12, e m ao quadrado mais n ao quadrado é 13, dando o terno 5, 12, 13.",
          },
        },
        "sec-proof": {
          "h2": "Prova Matemática da Fórmula de Euclides",
          "blocks": [
            {
              "kind": "p",
              "text": "Uma prova algébrica curta mostra por que a fórmula de Euclides nunca pode falhar.",
            },
            {
              "kind": "p",
              "text": "Comece com as duas fórmulas dos catetos, [[a=m^2-n^2]] e [[b=2mn]], e teste se [[a^2+b^2]] é igual a [[c^2]] quando [[c=m^2+n^2]]. Substitua as fórmulas no lado esquerdo da equação pitagórica.",
            },
            {
              "kind": "p",
              "text": "[[[a^2+b^2=(m^2-n^2)^2+(2mn)^2]]]",
            },
            {
              "kind": "p",
              "text": "Expanda os dois quadrados. O primeiro quadrado se expande para [[m^4-2m^2n^2+n^4]] e o segundo para [[4m^2n^2]], então a soma se torna a seguinte expressão.",
            },
            {
              "kind": "p",
              "text": "[[[=m^4-2m^2n^2+n^4+4m^2n^2]]]",
            },
            {
              "kind": "p",
              "text": "Combine os termos do meio: [[-2m^2n^2+4m^2n^2]] é [[+2m^2n^2]]. A expressão agora é um quadrado perfeito disfarçado.",
            },
            {
              "kind": "p",
              "text": "[[[=m^4+2m^2n^2+n^4]]]",
            },
            {
              "kind": "p",
              "text": "Fatore-a. O resultado é o quadrado de [[m^2+n^2]], que é exatamente [[c]].",
            },
            {
              "kind": "p",
              "text": "[[[=(m^2+n^2)^2]]]",
            },
            {
              "kind": "p",
              "text": "Como [[c=m^2+n^2]], o lado direito é [[c^2]], e a prova está completa.",
            },
            {
              "kind": "p",
              "text": "[[[a^2+b^2=c^2]]]",
            },
            {
              "kind": "p",
              "text": "O passo-chave é o cancelamento parcial dos termos do meio: o [[-2m^2n^2]] do primeiro quadrado e o [[+4m^2n^2]] do segundo deixam exatamente o [[+2m^2n^2]] necessário para completar o quadrado. Como isso funciona para quaisquer números inteiros [[m]] e [[n]] com [[m>n>0]], cada par gera um terno pitagórico genuíno. A prova não diz nada sobre primitividade, porém: se o resultado é primitivo depende das condições extras nas seções abaixo.",
            },
          ],
        },
        "sec-primitive": {
          "h2": "O Que É um Terno Pitagórico Primitivo?",
          "blocks": [
            {
              "kind": "p",
              "text": "Um terno primitivo é um terno em sua forma mais simples, sem fator compartilhado.",
            },
            {
              "kind": "p",
              "text": "Um terno pitagórico primitivo é aquele cujos três comprimentos de lados não têm nenhum fator inteiro positivo comum maior que [[1]]. Em símbolos, o maior divisor comum dos três lados é [[1]].",
            },
            {
              "kind": "p",
              "text": "[[[\\gcd(a,b,c)=1]]]",
            },
            {
              "kind": "p",
              "text": "O terno [[(3, 4, 5)]] é primitivo porque [[\\gcd(3,4,5)=1]]: nenhum número inteiro maior que [[1]] divide os três números. O mesmo vale para [[(5, 12, 13)]], [[(8, 15, 17)]] e [[(7, 24, 25)]]. Cada um deles é um terno base que não pode ser reduzido a um terno menor de números inteiros por divisão.",
            },
            {
              "kind": "p",
              "text": "Primitivo não significa que o terno seja o menor possível em todos os sentidos. Significa apenas que os três valores não têm nenhum fator comum além de [[1]]. Um terno primitivo grande como [[(20, 21, 29)]] continua primitivo, porque [[20]], [[21]] e [[29]] não têm divisor comum. A tabela abaixo compara os divisores de um terno primitivo e de uma cópia escalonada.",
            },
          ],
          "table": {
            "headers": [
              "Terno",
              "Divisores comuns",
              "Primitivo?",
            ],
            "rows": [
              [
                "[[(3, 4, 5)]]",
                "[[1]]",
                "Sim",
              ],
              [
                "[[(5, 12, 13)]]",
                "[[1]]",
                "Sim",
              ],
              [
                "[[(8, 15, 17)]]",
                "[[1]]",
                "Sim",
              ],
              [
                "[[(6, 8, 10)]]",
                "[[1, 2]]",
                "Não",
              ],
              [
                "[[(9, 12, 15)]]",
                "[[1, 3]]",
                "Não",
              ],
            ],
          },
          "image": {
            "src": "pythagorean-triples-primitive-vs-scaled.svg",
            "alt": "Dois triângulos retângulos, 3-4-5 e 6-8-10, mostrando que o segundo é o dobro do primeiro e que apenas o primeiro é primitivo",
            "caption": "O triângulo 3-4-5 é primitivo, enquanto 6-8-10 é duas vezes maior em cada lado: mdc(3, 4, 5) = 1, mas mdc(6, 8, 10) = 2.",
          },
        },
        "sec-nonprimitive": {
          "h2": "O Que É um Terno Pitagórico Não Primitivo?",
          "blocks": [
            {
              "kind": "p",
              "text": "Um terno não primitivo é uma cópia escalonada de um terno primitivo.",
            },
            {
              "kind": "p",
              "text": "Um terno pitagórico não primitivo é um terno cujos três valores têm um fator inteiro comum maior que [[1]]. Ele continua sendo um terno válido, porque satisfaz [[a^2+b^2=c^2]] exatamente. Ele simplesmente não está na forma mais simples.",
            },
            {
              "kind": "p",
              "text": "Comece com o terno primitivo [[(3, 4, 5)]] e multiplique cada lado por [[2]]. O resultado é [[(6, 8, 10)]], e a verificação continua funcionando: [[36+64=100]]. Multiplique por [[3]] em vez disso e o resultado é [[(9, 12, 15)]], com [[81+144=225]]. Ambos os ternos escalonados são válidos, e nenhum é primitivo, porque o primeiro tem o fator [[2]] em comum e o segundo tem o fator [[3]] em comum.",
            },
            {
              "kind": "p",
              "text": "Encontrar o fator comum é simples: tome o maior divisor comum dos três lados. Para [[(6, 8, 10)]] ele é [[2]]; para [[(9, 12, 15)]] ele é [[3]]. Dividir cada lado por esse fator recupera o terno primitivo por baixo. Assim, [[(6, 8, 10)]] dividido por [[2]] retorna [[(3, 4, 5)]], e [[(9, 12, 15)]] dividido por [[3]] retorna [[(3, 4, 5)]] também. Todo terno não primitivo se reduz a exatamente um terno primitivo dessa maneira.",
            },
          ],
        },
        "sec-conditions": {
          "h2": "Condições para Gerar Ternos Pitagóricos Primitivos",
          "blocks": [
            {
              "kind": "p",
              "text": "A fórmula de Euclides produz um terno primitivo apenas quando as duas condições dos parâmetros são atendidas.",
            },
            {
              "kind": "p",
              "text": "Duas condições sobre [[m]] e [[n]] decidem se a fórmula de Euclides produz um terno primitivo. As duas devem valer ao mesmo tempo, e nenhuma sozinha basta.",
            },
            {
              "kind": "h3",
              "text": "Condição 1: Parâmetros coprimos",
            },
            {
              "kind": "p",
              "text": "Os parâmetros devem ser coprimos, ou seja, não ter nenhum fator comum maior que [[1]].",
            },
            {
              "kind": "p",
              "text": "[[[\\gcd(m,n)=1]]]",
            },
            {
              "kind": "p",
              "text": "Quando [[m]] e [[n]] têm um fator em comum, esse fator vaza para os três lados gerados. Por exemplo, [[m=4]] e [[n=2]] têm o fator [[2]] em comum, e a fórmula produz [[(12, 16, 20)]], cujos lados todos têm o fator [[4]] em comum. O resultado é não primitivo.",
            },
            {
              "kind": "h3",
              "text": "Condição 2: Paridades opostas",
            },
            {
              "kind": "p",
              "text": "Um parâmetro deve ser par e o outro ímpar. Quando os dois parâmetros são ímpares, os catetos e a hipotenusa gerados saem todos pares, então o terno tem o fator [[2]] em comum e não pode ser primitivo. Por exemplo, [[m=3]] e [[n=1]] são coprimos, mas ambos ímpares, e a fórmula produz [[(8, 6, 10)]], que é o terno não primitivo [[(6, 8, 10)]] com os catetos em outra ordem.",
            },
            {
              "kind": "p",
              "text": "Três pares de parâmetros mostram como as condições funcionam juntas. O par [[(2, 1)]] é coprimo com paridades opostas e dá o terno primitivo [[(3, 4, 5)]]. O par [[(3, 2)]] é coprimo com paridades opostas e dá o terno primitivo [[(5, 12, 13)]]. O par [[(3, 1)]] é coprimo, mas ambos ímpares, então dá o terno não primitivo [[(6, 8, 10)]]. Coprimalidade sem paridades opostas não basta, e paridades opostas sem coprimalidade também não bastam.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-conditions.svg",
            "alt": "Dois exemplos de parâmetros: m igual a 3 e n igual a 2 dão o terno primitivo 5-12-13, enquanto m igual a 3 e n igual a 1 dão o terno não primitivo 6-8-10",
            "caption": "Os parâmetros m = 3, n = 2 são coprimos com paridades opostas e dão o terno primitivo 5-12-13. Os parâmetros m = 3, n = 1 são ambos ímpares e dão o terno não primitivo 6-8-10.",
          },
        },
        "sec-difference": {
          "h2": "Diferença Entre Ternos Primitivos e Não Primitivos",
          "blocks": [
            {
              "kind": "p",
              "text": "Mesmo teorema, forma diferente: uma tabela resume toda a distinção.",
            },
            {
              "kind": "p",
              "text": "Os dois tipos de terno satisfazem o teorema de Pitágoras exatamente, então ambos descrevem triângulos retângulos genuínos. A diferença é apenas sobre fatores compartilhados e como o terno foi produzido. Um terno primitivo é um padrão base; um terno não primitivo geralmente é um múltiplo de um.",
            },
          ],
          "table": {
            "headers": [
              "Característica",
              "Primitivo",
              "Não primitivo",
            ],
            "rows": [
              [
                "Divisor comum",
                "Apenas [[1]]",
                "Maior que [[1]]",
              ],
              [
                "Comprimentos dos lados",
                "Não pode ser reduzido a um terno inteiro menor",
                "Pode ser dividido por um fator comum",
              ],
              [
                "Exemplo",
                "[[3, 4, 5]]",
                "[[6, 8, 10]]",
              ],
              [
                "Geração",
                "[[m]], [[n]] coprimos com paridades opostas",
                "Outras combinações de parâmetros ou múltiplos inteiros",
              ],
              [
                "Relação",
                "Terno inteiro base",
                "Geralmente um múltiplo de um terno primitivo",
              ],
            ],
          },
        },
        "sec-scaling": {
          "h2": "Como Gerar Mais Ternos Escalonando os Existentes",
          "blocks": [
            {
              "kind": "p",
              "text": "Multiplique cada lado pelo mesmo número inteiro e o terno continua válido.",
            },
            {
              "kind": "p",
              "text": "Para qualquer número inteiro positivo [[k]], multiplicar cada lado de um terno pitagórico [[(a, b, c)]] por [[k]] dá outro terno pitagórico, [[(ka, kb, kc)]].",
            },
            {
              "kind": "p",
              "text": "[[[\\boxed{(ka, kb, kc)}]]]",
            },
            {
              "kind": "p",
              "text": "A razão é uma álgebra simples. Elevar os catetos escalonados ao quadrado dá [[(ka)^2+(kb)^2=k^2a^2+k^2b^2]], e colocar [[k^2]] em evidência dá [[k^2(a^2+b^2)]]. Como o terno original satisfaz [[a^2+b^2=c^2]], a soma escalonada é igual a [[k^2c^2]], que é [[(kc)^2]]. O terno escalonado, portanto, satisfaz o teorema exatamente.",
            },
            {
              "kind": "p",
              "text": "Escalonar [[(3, 4, 5)]] por [[2]] dá [[(6, 8, 10)]], e escalonar por [[3]] dá [[(9, 12, 15)]]. Escalonar [[(5, 12, 13)]] por [[2]] dá [[(10, 24, 26)]], e escalonar [[(8, 15, 17)]] por [[3]] dá [[(24, 45, 51)]]. Cada resultado é um terno válido, e cada um é não primitivo, porque o multiplicador se torna um fator comum dos três lados.",
            },
            {
              "kind": "p",
              "text": "Um multiplicador inteiro preserva comprimentos de lados inteiros, e é por isso que o escalonamento é uma maneira confiável de construir novos ternos. Um multiplicador real arbitrário, como [[1.5]], mantém o triângulo como triângulo retângulo com a mesma forma, mas os lados podem deixar de ser números inteiros: [[(3, 4, 5)]] escalonado por [[1.5]] dá [[(4.5, 6, 7.5)]], que é um triângulo retângulo, mas não um terno pitagórico. Observe que a calculadora em si não tem um campo separado de multiplicador; o escalonamento é um cálculo manual que você faz com os ternos que ela verifica ou gera.",
            },
          ],
          "image": {
            "src": "pythagorean-triples-scaling.svg",
            "alt": "O terno 3-4-5 multiplicado por 2, 3 e 4 para dar 6-8-10, 9-12-15 e 12-16-20",
            "caption": "Escalonar 3-4-5 por 2, 3 e 4 dá 6-8-10, 9-12-15 e 12-16-20. Cada conjunto escalonado continua sendo um terno pitagórico válido.",
          },
        },
        "sec-examples": {
          "h2": "Exemplos Comuns de Ternos Pitagóricos",
          "blocks": [
            {
              "kind": "p",
              "text": "Dez ternos que valem a pena saber de cor, cada um verificado.",
            },
            {
              "kind": "p",
              "text": "A tabela abaixo lista dez ternos pitagóricos bem conhecidos. Cada linha foi verificada com o teorema de Pitágoras, e cada linha é primitiva, exceto onde um múltiplo escalonado é indicado. Os catetos de cada linha podem ser listados em qualquer ordem: [[(4, 3, 5)]] é o mesmo triângulo que [[(3, 4, 5)]].",
            },
          ],
          "table": {
            "headers": [
              "Primeiro cateto",
              "Segundo cateto",
              "Hipotenusa",
            ],
            "rows": [
              [
                "[[3]]",
                "[[4]]",
                "[[5]]",
              ],
              [
                "[[5]]",
                "[[12]]",
                "[[13]]",
              ],
              [
                "[[8]]",
                "[[15]]",
                "[[17]]",
              ],
              [
                "[[7]]",
                "[[24]]",
                "[[25]]",
              ],
              [
                "[[20]]",
                "[[21]]",
                "[[29]]",
              ],
              [
                "[[12]]",
                "[[35]]",
                "[[37]]",
              ],
              [
                "[[9]]",
                "[[40]]",
                "[[41]]",
              ],
              [
                "[[28]]",
                "[[45]]",
                "[[53]]",
              ],
              [
                "[[11]]",
                "[[60]]",
                "[[61]]",
              ],
              [
                "[[16]]",
                "[[63]]",
                "[[65]]",
              ],
            ],
          },
          "image": {
            "src": "pythagorean-triples-compare.svg",
            "alt": "Três triângulos retângulos desenhados em escala: 3-4-5, 5-12-13 e 8-15-17, mostrando formas diferentes",
            "caption": "Três ternos primitivos desenhados em escala: 3-4-5, 5-12-13 e 8-15-17. Cada um tem uma forma diferente e ângulos agudos diferentes.",
          },
        },
        "sec-worked": {
          "h2": "Exemplos Resolvidos Passo a Passo Usando a Calculadora",
          "blocks": [
            {
              "kind": "p",
              "text": "Oito exemplos cobrindo os dois modos: quatro verificações e quatro gerações.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 1: Verificar 3, 4, 5",
            },
            {
              "kind": "p",
              "text": "Digite [[a=3]], [[b=4]] e [[c=5]] no modo de verificação. Eleve os catetos ao quadrado e some: [[3^2+4^2=9+16=25]]. Eleve a hipotenusa ao quadrado: [[5^2=25]]. Como [[25=25]], o resultado é um terno válido. Ele é primitivo, porque [[3]], [[4]] e [[5]] não têm nenhum fator comum.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 2: Verificar 5, 12, 13",
            },
            {
              "kind": "p",
              "text": "Digite [[a=5]], [[b=12]] e [[c=13]]. Os catetos dão [[5^2+12^2=25+144=169]], e a hipotenusa dá [[13^2=169]]. Como [[169=169]], o resultado é um terno válido. Ele é primitivo, porque [[\\gcd(5,12,13)=1]].",
            },
            {
              "kind": "h3",
              "text": "Exemplo 3: Verificar 6, 8, 10",
            },
            {
              "kind": "p",
              "text": "Digite [[a=6]], [[b=8]] e [[c=10]]. Os catetos dão [[6^2+8^2=36+64=100]], e a hipotenusa dá [[10^2=100]]. Como [[100=100]], o resultado é um terno válido. Ele é não primitivo, porque os três lados têm o fator [[2]] em comum; dividir por [[2]] retorna o terno primitivo [[(3, 4, 5)]].",
            },
            {
              "kind": "h3",
              "text": "Exemplo 4: Verificar 7, 24, 25",
            },
            {
              "kind": "p",
              "text": "Digite [[a=7]], [[b=24]] e [[c=25]]. Os catetos dão [[7^2+24^2=49+576=625]], e a hipotenusa dá [[25^2=625]]. Como [[625=625]], o resultado é um terno válido. Ele é primitivo, porque [[7]], [[24]] e [[25]] não têm nenhum fator comum.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 5: Gerar usando m = 2, n = 1",
            },
            {
              "kind": "p",
              "text": "Digite [[m=2]] e [[n=1]] no modo de geração. O primeiro cateto é [[a=2^2-1^2=3]], o segundo cateto é [[b=2(2)(1)=4]], e a hipotenusa é [[c=2^2+1^2=5]]. O resultado é [[(3, 4, 5)]], um terno primitivo.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 6: Gerar usando m = 3, n = 2",
            },
            {
              "kind": "p",
              "text": "Digite [[m=3]] e [[n=2]]. O primeiro cateto é [[a=3^2-2^2=9-4=5]], o segundo cateto é [[b=2(3)(2)=12]], e a hipotenusa é [[c=3^2+2^2=13]]. O resultado é [[(5, 12, 13)]], um terno primitivo, porque [[3]] e [[2]] são coprimos com paridades opostas.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 7: Gerar usando m = 4, n = 1",
            },
            {
              "kind": "p",
              "text": "Digite [[m=4]] e [[n=1]]. As fórmulas dão [[a=4^2-1^2=15]], [[b=2(4)(1)=8]] e [[c=4^2+1^2=17]]. Listado com os catetos em ordem crescente, o resultado é [[(8, 15, 17)]]. Ele é primitivo, porque [[4]] e [[1]] são coprimos com paridades opostas.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 8: Gerar usando m = 3, n = 1",
            },
            {
              "kind": "p",
              "text": "Digite [[m=3]] e [[n=1]]. As fórmulas dão [[a=3^2-1^2=8]], [[b=2(3)(1)=6]] e [[c=3^2+1^2=10]]. Listado com os catetos em ordem crescente, o resultado é [[(6, 8, 10)]]. Este terno é não primitivo: [[3]] e [[1]] são coprimos, mas ambos são ímpares, então a condição de paridades opostas falha e cada lado sai par. Dividir por [[2]] retorna o terno primitivo [[(3, 4, 5)]].",
            },
          ],
        },
        "sec-infinite": {
          "h2": "Por Que Existem Infinitos Ternos Pitagóricos?",
          "blocks": [
            {
              "kind": "p",
              "text": "A fórmula de Euclides nunca fica sem entradas, então nunca fica sem ternos.",
            },
            {
              "kind": "p",
              "text": "A fórmula de Euclides aceita qualquer par de números inteiros positivos [[m]] e [[n]] com [[m]] maior que [[n]], e existem infinitos pares assim. Cada novo par produz um terno, e pares diferentes geralmente produzem ternos diferentes. Os pares [[(2, 1)]], [[(3, 2)]], [[(4, 1)]], [[(4, 3)]] e [[(5, 2)]] dão [[(3, 4, 5)]], [[(5, 12, 13)]], [[(8, 15, 17)]], [[(7, 24, 25)]] e [[(20, 21, 29)]], respectivamente, e a lista continua: [[(5, 4)]] dá [[(9, 40, 41)]], e [[(6, 1)]] dá [[(12, 35, 37)]]. Valores maiores de [[m]] continuam produzindo ternos maiores sem fim.",
            },
            {
              "kind": "p",
              "text": "Múltiplos inteiros somam ainda mais. Todo terno primitivo gera uma família inteira de cópias escalonadas: [[(3, 4, 5)]] sozinho dá [[(6, 8, 10)]], [[(9, 12, 15)]], [[(12, 16, 20)]] e assim por diante, para sempre. Entre os pares de parâmetros sem fim e os múltiplos sem fim, o fornecimento de ternos pitagóricos é infinito. Observe a formulação cuidadosa: nem todo par de parâmetros produz um terno primitivo, mas todo par produz um terno válido, e os primitivos também são infinitos.",
            },
          ],
        },
        "sec-recognize": {
          "h2": "Como Reconhecer um Terno Pitagórico sem Adivinhar",
          "blocks": [
            {
              "kind": "p",
              "text": "Alguns hábitos fazem os ternos familiares saltarem aos olhos antes de você calcular.",
            },
            {
              "kind": "p",
              "text": "Comece tratando o maior valor como a hipotenusa e comparando os valores ao quadrado, exatamente como descrevem os passos de verificação. Com a prática, os ternos comuns se tornam familiares: [[3]]-[[4]]-[[5]], [[5]]-[[12]]-[[13]], [[8]]-[[15]]-[[17]] e [[7]]-[[24]]-[[25]] aparecem com tanta frequência em livros e provas que reconhecê-los economiza tempo de verdade.",
            },
            {
              "kind": "p",
              "text": "Procure fatores comuns em seguida. Se os três números forem pares, divida por [[2]] e veja o que resta. O conjunto [[6]]-[[8]]-[[10]] é imediatamente reconhecível como o dobro de [[3]]-[[4]]-[[5]] quando o fator [[2]] é percebido. Reduzir um terno não primitivo à sua forma primitiva muitas vezes revela um padrão familiar escondido atrás de números maiores.",
            },
            {
              "kind": "p",
              "text": "Quando você precisa de um novo terno em vez de uma verificação, a fórmula de Euclides é o caminho confiável: escolha valores pequenos de [[m]] e [[n]] e gere. O reconhecimento é um atalho útil, mas a verificação exata é sempre a palavra final. Um terno que parece familiar ainda merece o teste de elevar ao quadrado e comparar antes de você confiar nele.",
            },
          ],
        },
        "sec-ordinary": {
          "h2": "Ternos Pitagóricos e Triângulos Retângulos Comuns",
          "blocks": [
            {
              "kind": "p",
              "text": "Todo terno é um triângulo retângulo, mas a maioria dos triângulos retângulos não é terno.",
            },
            {
              "kind": "p",
              "text": "Um triângulo retângulo pode ter comprimentos de lados inteiros, decimais ou irracionais. Apenas a primeira categoria pode formar um terno pitagórico. O terno [[(3, 4, 5)]] é um triângulo retângulo inteiro, e ele se qualifica. Um triângulo com catetos [[1]] e [[1]] e hipotenusa [[\\sqrt{2}]] é um triângulo retângulo genuíno, pois [[1+1=2]], mas sua hipotenusa é irracional, então não é um terno. Um triângulo com lados [[3]], [[4]] e [[5.1]] não satisfaz a equação, pois [[9+16=25]] e [[5.1^2=26.01]], então nem é um triângulo retângulo.",
            },
            {
              "kind": "p",
              "text": "A distinção importa na prática. Os construtores usam [[3]]-[[4]]-[[5]] porque números inteiros são fáceis de medir com uma fita métrica. Um triângulo com lados [[3]], [[4]] e [[5.1]] parece quase reto, mas está errado por um ângulo visível, e nenhuma verificação de números inteiros o aprovaria. O teorema de Pitágoras se aplica a todos os triângulos retângulos, quaisquer que sejam seus comprimentos de lados. O termo terno pitagórico se refere apenas às soluções inteiras positivas, e esse significado restrito é o que torna os ternos especiais.",
            },
          ],
        },
        "sec-mistakes": {
          "h2": "Erros Comuns ao Usar a Calculadora de Ternos Pitagóricos",
          "blocks": [
            {
              "kind": "p",
              "text": "Quinze erros, cada um com a correção ao lado.",
            },
            {
              "kind": "list",
              "items": [
                "Digitar [[c]] como um lado menor: a hipotenusa deve ser o maior valor, então sempre atribua o maior número a [[c]] antes de verificar.",
                "Esquecer de elevar os valores ao quadrado: o teorema compara quadrados, não os comprimentos dos lados em si, então eleve [[a]], [[b]] e [[c]] ao quadrado primeiro.",
                "Somar os lados em vez de seus quadrados: [[a+b]] é a soma errada; a verificação precisa de [[a^2+b^2]] contra [[c^2]].",
                "Usar [[a+b=c]] em vez de [[a^2+b^2=c^2]]: a soma simples de dois lados nunca é igual à hipotenusa em um triângulo retângulo.",
                "Confundir a hipotenusa com um cateto: a hipotenusa fica oposta ao ângulo reto e é sempre o lado mais longo.",
                "Usar valores decimais e esperar um terno inteiro: decimais podem formar um triângulo retângulo, mas apenas inteiros positivos formam um terno pitagórico.",
                "Digitar comprimentos de lados zero ou negativos: os comprimentos dos lados devem ser positivos, e entradas zero ou negativas são rejeitadas.",
                "Usar [[m]] igual a [[n]]: o primeiro cateto se torna [[m^2-n^2=0]], o que não é um lado de triângulo.",
                "Usar [[m]] menor que [[n]]: o primeiro cateto se torna negativo, o que é impossível para um comprimento de lado.",
                "Digitar valores decimais de [[m]] e [[n]]: a fórmula de Euclides precisa de parâmetros inteiros positivos para produzir lados inteiros.",
                "Supor que todo terno gerado é primitivo: a geração só garante um terno válido, e a primitividade precisa de parâmetros coprimos com paridades opostas.",
                "Supor que todos os ternos primitivos são múltiplos de [[3]]-[[4]]-[[5]]: [[5]]-[[12]]-[[13]] e [[8]]-[[15]]-[[17]] são ternos primitivos independentes, não múltiplos de [[3]]-[[4]]-[[5]].",
                "Esquecer a condição de paridades opostas: dois parâmetros ímpares produzem um terno par e não primitivo, como [[m=3]], [[n=1]] mostra.",
                "Esquecer de verificar fatores comuns: um terno como [[(12, 16, 20)]] parece novo até o fator [[4]] em comum revelar que é um [[(3, 4, 5)]] escalonado.",
                "Confundir um triângulo retângulo válido com um terno pitagórico inteiro: um triângulo com lados irracionais ou decimais pode satisfazer o teorema sem ser um terno.",
              ],
            },
          ],
        },
        "sec-practice": {
          "h2": "Problemas de Prática com Respostas",
          "blocks": [
            {
              "kind": "p",
              "text": "Oito problemas, quatro verificações e quatro gerações, com soluções completas.",
            },
            {
              "kind": "list",
              "items": [
                "Verifique se [[8]], [[15]] e [[17]] formam um terno. Resposta: sim, primitivo. [[8^2+15^2=64+225=289=17^2]], e os três números não têm nenhum fator comum.",
                "Verifique se [[6]], [[8]] e [[11]] formam um terno. Resposta: não. [[6^2+8^2=36+64=100]], mas [[11^2=121]], então os dois lados são diferentes.",
                "Identifique se [[9]], [[12]] e [[15]] são primitivos. Resposta: não primitivo. Os números têm o fator [[3]] em comum, e dividir por [[3]] dá o terno primitivo [[(3, 4, 5)]].",
                "Gere um terno usando [[m=2]] e [[n=1]]. Resposta: [[(3, 4, 5)]]. [[a=4-1=3]], [[b=4]], [[c=4+1=5]].",
                "Gere um terno usando [[m=3]] e [[n=2]]. Resposta: [[(5, 12, 13)]]. [[a=9-4=5]], [[b=12]], [[c=9+4=13]].",
                "Gere um terno usando [[m=4]] e [[n=1]]. Resposta: [[(8, 15, 17)]]. [[a=16-1=15]], [[b=8]], [[c=16+1=17]], com os catetos ordenados em ordem crescente.",
                "Identifique se [[m=3]] e [[n=1]] produzem um terno primitivo. Resposta: não. Os parâmetros são coprimos, mas ambos ímpares, então o resultado é o terno não primitivo [[(6, 8, 10)]].",
                "Encontre o multiplicador comum entre [[3]]-[[4]]-[[5]] e [[15]]-[[20]]-[[25]]. Resposta: [[5]]. Cada lado de [[(3, 4, 5)]] multiplicado por [[5]] dá [[(15, 20, 25)]].",
              ],
            },
          ],
        },
      },
      "relatedHeading": "Calculadoras de Triângulo Retângulo Relacionadas",
      "relatedIntro": "Cada calculadora abaixo lida com uma tarefa diferente de triângulo retângulo, então escolha a ferramenta que corresponde à medida de que você precisa.",
      "relatedItems": [
        "Calculadora de Triângulo Retângulo",
        "Calculadora do Teorema de Pitágoras",
        "Calculadora de Triângulo 3-4-5",
        "Calculadora de Triângulo 5-12-13",
        "Calculadora de Lado de Triângulo Retângulo",
        "Calculadora de Triângulo Retângulo Especial",
      ],
      "faqHeading": "Perguntas Frequentes",
      "faqs": [
        {
          "question": "O que é um terno pitagórico?",
          "answer": "Um terno pitagórico é um conjunto de três números inteiros positivos, escrito como [[(a, b, c)]], que satisfaz a equação [[a^2+b^2=c^2]]. Os dois números menores são os catetos de um triângulo retângulo e o maior é a hipotenusa. O exemplo mais conhecido é [[(3, 4, 5)]], pois [[9+16=25]].",
        },
        {
          "question": "Como funciona a Calculadora de Ternos Pitagóricos?",
          "answer": "Ela tem dois modos. O modo de verificação recebe três números inteiros e testa se [[a^2+b^2=c^2]] vale. O modo de geração recebe dois números inteiros, [[m]] e [[n]], e aplica a fórmula de Euclides para construir um novo terno. Os dois modos mostram a resolução passo a passo junto com o resultado.",
        },
        {
          "question": "Como posso verificar se três números formam um terno pitagórico?",
          "answer": "Tome o maior valor como a hipotenusa [[c]] e os outros dois como os catetos [[a]] e [[b]]. Eleve os três ao quadrado, some [[a^2+b^2]] e compare com [[c^2]]. Totais iguais significam um terno válido; totais desiguais significam que os números não formam um.",
        },
        {
          "question": "O que é a fórmula de Euclides?",
          "answer": "A fórmula de Euclides gera um terno pitagórico a partir de dois números inteiros positivos, [[m]] e [[n]], com [[m]] maior que [[n]]. As fórmulas são [[a=m^2-n^2]], [[b=2mn]] e [[c=m^2+n^2]]. Cada par produz um terno válido, como mostra a prova algébrica desta página.",
        },
        {
          "question": "O que são m e n na fórmula do terno pitagórico?",
          "answer": "Os valores [[m]] e [[n]] são parâmetros inteiros positivos na fórmula de Euclides. O valor [[m]] é o número inteiro maior e [[n]] é o menor, com [[m>n>0]]. Valores maiores de [[m]] produzem ternos maiores, e pares diferentes produzem ternos diferentes.",
        },
        {
          "question": "O que é um terno pitagórico primitivo?",
          "answer": "Um terno primitivo é aquele cujos três comprimentos de lados não têm nenhum fator comum maior que [[1]], então [[\\gcd(a,b,c)=1]]. Exemplos incluem [[(3, 4, 5)]], [[(5, 12, 13)]], [[(8, 15, 17)]] e [[(7, 24, 25)]]. Ternos primitivos não podem ser reduzidos a um terno menor de números inteiros.",
        },
        {
          "question": "O que é um terno pitagórico não primitivo?",
          "answer": "Um terno não primitivo é um terno válido cujos três lados têm um fator comum maior que [[1]]. Por exemplo, [[(6, 8, 10)]] é o dobro de [[(3, 4, 5)]] e [[(9, 12, 15)]] é o triplo de [[(3, 4, 5)]]. Dividir pelo fator comum retorna o terno primitivo por baixo.",
        },
        {
          "question": "Como sei se um terno gerado é primitivo?",
          "answer": "Verifique as duas condições dos parâmetros: [[m]] e [[n]] devem ser coprimos, então [[\\gcd(m,n)=1]], e devem ter paridades opostas, então um é par e o outro é ímpar. Se as duas condições valerem, o terno gerado é primitivo. Se alguma falhar, ele é não primitivo.",
        },
        {
          "question": "Números decimais podem formar um terno pitagórico?",
          "answer": "Não. Um terno pitagórico é definido como três números inteiros positivos, então comprimentos de lados decimais nunca se qualificam. Decimais ainda podem formar um triângulo retângulo que satisfaz [[a^2+b^2=c^2]], como catetos [[1.5]] e [[2]] com hipotenusa [[2.5]], mas esse triângulo não é um terno pitagórico.",
        },
        {
          "question": "Existem infinitos ternos pitagóricos?",
          "answer": "Sim. A fórmula de Euclides aceita infinitos pares inteiros [[(m, n)]], e cada par produz um terno. Múltiplos inteiros somam mais: todo terno primitivo gera uma família infinita de cópias escalonadas. O fornecimento de ternos nunca se esgota.",
        },
        {
          "question": "Todo terno pitagórico pode ser gerado usando a fórmula de Euclides?",
          "answer": "Sim, todo terno primitivo vem da fórmula de Euclides com parâmetros coprimos adequados de paridades opostas, e todo terno não primitivo é um múltiplo de um terno primitivo. Assim, todo terno pitagórico pode ser alcançado pela fórmula de Euclides mais o escalonamento por um número inteiro positivo.",
        },
        {
          "question": "Qual é o terno pitagórico mais comum?",
          "answer": "O terno [[(3, 4, 5)]] é o mais comum e mais conhecido. É o menor terno primitivo, é fácil de lembrar, e construtores e carpinteiros o usam há séculos para verificar cantos em esquadro. Os próximos mais familiares são [[(5, 12, 13)]] e [[(8, 15, 17)]].",
        },
      ],
    },
};
