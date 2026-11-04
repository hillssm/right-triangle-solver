// altitudeFromProjectionsGuideTranslations.bpt.ts: Right Triangle Altitude From Projections
// Guide (Page 27 of 45) translation.
export const B3_PT = {
  "pt": {
      "tocHeading": "Navegação por Secções",
      "tocItems": {
        "sec-intro": "Calcular a Altura de um Triângulo Retângulo a partir das Projeções",
        "sec-altitude": "O Que É a Altura de um Triângulo Retângulo?",
        "sec-projections": "O Que São Projeções num Triângulo Retângulo?",
        "sec-formula": "Fórmula da Altura do Triângulo Retângulo a partir das Projeções",
        "sec-steps": "Como Calcular a Altura a partir das Projeções Passo a Passo",
        "sec-diagram": "Diagrama da Altura do Triângulo Retângulo Explicado",
        "sec-proof": "Porque É que a Fórmula da Altura Funciona? Demonstração com Triângulos Semelhantes",
        "sec-examples": "Exemplos Resolvidos de Altura a partir das Projeções",
        "sec-verify": "Como Verificar o Cálculo da Altura",
        "sec-relationships": "Relação entre a Altura, a Hipotenusa e os Catetos do Triângulo",
        "sec-geomean": "Teorema da Média Geométrica e a Altura do Triângulo Retângulo",
        "sec-special": "Casos Especiais e Propriedades Importantes",
        "sec-mistakes": "Erros Comuns ao Determinar a Altura a partir das Projeções",
        "sec-applications": "Aplicações Práticas do Teorema da Altura",
        "sec-practice": "Problemas Práticos com Respostas",
        "sec-related": "Explorar Calculadoras Relacionadas de Triângulos Retângulos",
        "sec-faq": "Perguntas Frequentes",
        "sec-conclusion": "Uma Raiz Quadrada, Compreensão Total",
      },
      "sections": {
        "sec-intro": {
          "h2": "Calcular a Altura de um Triângulo Retângulo a partir das Projeções",
          "blocks": [
            {
              "kind": "p",
              "text": "Multiplique as duas projeções da hipotenusa e, em seguida, extraia a raiz quadrada.",
            },
            {
              "kind": "p",
              "text": "A Calculadora da Altura do Triângulo Retângulo a partir das Projeções encontra a altura de um triângulo retângulo a partir das duas projeções, [[p]] e [[q]], que a altura corta sobre a hipotenusa. Não são necessários catetos nem ângulos. Introduza a projeção [[p]] e a projeção [[q]] na mesma unidade, e a calculadora devolve a altura [[h]] com o teorema da altura:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{p \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "A fórmula funciona porque baixar a altura a partir do vértice do ângulo reto cria dois triângulos mais pequenos que são semelhantes entre si. A semelhança obriga a altura a ser a média geométrica das duas projeções. Como ilustração rápida, se [[p=9\\text{ cm}]] e [[q=16\\text{ cm}]], multiplique [[9]] por [[16]] para obter [[144]], e depois extraia a raiz quadrada para obter uma altura de [[12\\text{ cm}]].",
            },
            {
              "kind": "p",
              "text": "Digite o primeiro segmento da hipotenusa no campo Projeção [[p]] e o segundo no campo Projeção [[q]], mantendo ambos na mesma unidade. Prima Calcular para ver a altura, e Repor limpa os campos para um novo problema. O resultado traz a mesma unidade das entradas. Se conhecer os catetos do triângulo em vez disso, experimente a <a href=\"/right-triangle-altitude-calculator/\">calculadora da altura</a> feita para esse caso.",
            },
          ],
        },
        "sec-altitude": {
          "h2": "O Que É a Altura de um Triângulo Retângulo?",
          "blocks": [
            {
              "kind": "p",
              "text": "A altura de um triângulo retângulo é o segmento perpendicular traçado do vértice do ângulo reto até à hipotenusa. O seu comprimento mede a distância mais curta desse vértice à hipotenusa, porque uma perpendicular é sempre o caminho mais curto de um ponto até uma reta.",
            },
            {
              "kind": "p",
              "text": "Trace a altura e ela cai sobre a hipotenusa num ponto chamado pé da altura, geralmente identificado por D. A partir de D, a altura sobe a exatamente 90 graus até encontrar o vértice C do ângulo reto. Este encontro em ângulo reto é o que faz de CD a altura e não apenas outro segmento.",
            },
            {
              "kind": "p",
              "text": "Os principiantes por vezes confundem a altura com um dos catetos. Os catetos, AC e BC, encontram-se no ângulo reto e formam os lados exteriores do triângulo. A altura CD corre no interior do triângulo, do vértice C até ao lado AB. É um terceiro segmento, distinto, com o seu próprio comprimento [[h]], e só existe depois de a altura ser efetivamente traçada.",
            },
            {
              "kind": "p",
              "text": "A hipotenusa pode servir de base porque qualquer lado pode ser base uma vez traçada a altura correspondente, permitindo escrever a área como metade vezes a hipotenusa vezes esta altura. Traçar a altura também divide o triângulo em dois triângulos retângulos mais pequenos, ACD e CBD, que carregam as relações de semelhança por trás de cada fórmula desta página.",
            },
          ],
        },
        "sec-projections": {
          "h2": "O Que São Projeções num Triângulo Retângulo?",
          "blocks": [
            {
              "kind": "p",
              "text": "Quando a altura CD encontra a hipotenusa AB, o pé D divide AB em dois segmentos mais pequenos: AD, chamado [[p]], e DB, chamado [[q]]. Estes dois segmentos são as projeções dos catetos sobre a hipotenusa. Cada um é a sombra que um cateto projeta sobre a hipotenusa quando a luz brilha na vertical ao longo da altura.",
            },
            {
              "kind": "p",
              "text": "A projeção [[p]] fica junto ao cateto AC, e a projeção [[q]] fica junto ao cateto BC. Como são as duas partes da hipotenusa, somam-se exatamente:",
            },
            {
              "kind": "p",
              "text": "[[[p+q=c]]]",
            },
            {
              "kind": "p",
              "text": "Aqui [[c]] é a hipotenusa completa. Esta relação de soma ajuda a verificar respostas e a recuperar uma projeção em falta quando se conhecem a hipotenusa e uma projeção. Se precisar do cálculo inverso, encontrar projeções a partir dos comprimentos dos lados, a <a href=\"/right-triangle-projection-calculator/\">calculadora de projeções</a> trata dessa direção.",
            },
            {
              "kind": "p",
              "text": "Ambas as projeções têm de ser comprimentos positivos. Um valor nulo ou negativo não descreve nenhum triângulo real, apenas uma forma degenerada. E as projeções não são os catetos em si: os catetos AC e BC inclinam-se para os lados, enquanto [[p]] e [[q]] ficam deitados ao longo da hipotenusa. Confundi-los é um dos erros mais comuns dos estudantes.",
            },
          ],
          "table": {
            "headers": [
              "Medida",
              "Significado",
            ],
            "rows": [
              [
                "[[p]]",
                "Primeiro segmento da hipotenusa",
              ],
              [
                "[[q]]",
                "Segundo segmento da hipotenusa",
              ],
              [
                "[[h]]",
                "Altura perpendicular",
              ],
              [
                "[[c]]",
                "Hipotenusa completa",
              ],
              [
                "[[a]]",
                "Primeiro cateto do triângulo",
              ],
              [
                "[[b]]",
                "Segundo cateto do triângulo",
              ],
            ],
          },
        },
        "sec-formula": {
          "h2": "Fórmula da Altura do Triângulo Retângulo a partir das Projeções",
          "blocks": [
            {
              "kind": "p",
              "text": "O teorema da altura afirma:",
            },
            {
              "kind": "p",
              "text": "[[[h^2=p \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Extrair a raiz quadrada positiva de ambos os lados dá a fórmula de trabalho:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{p \\times q}]]]",
            },
            {
              "kind": "p",
              "text": "Cada símbolo tem um significado fixo. A letra [[h]] representa a altura relativa à hipotenusa, a quantidade que se pretende. As letras [[p]] e [[q]] representam as duas projeções da hipotenusa, as quantidades que se introduzem. A multiplicação une as projeções, e a raiz quadrada desfaz esse produto para devolver um comprimento.",
            },
            {
              "kind": "p",
              "text": "A multiplicação aparece porque a semelhança entre os dois triângulos pequenos produz a proporção [[\\frac{h}{p}=\\frac{q}{h}]]. Multiplicar essa proporção em cruz dá [[h^2=p\\times q]]. A raiz quadrada aparece porque [[h]] é um comprimento, e só a raiz positiva de [[h^2]] designa uma distância real.",
            },
            {
              "kind": "p",
              "text": "As unidades merecem atenção. Se [[p]] e [[q]] forem ambos medidos em centímetros, o seu produto vive em centímetros quadrados, o que está correto para um passo intermédio do tipo área. Extrair a raiz quadrada converte os centímetros quadrados de volta em centímetros simples para a altura final. É por isso que as duas entradas têm de partilhar a mesma unidade: misturar unidades corromperia o produto e a resposta. Uma forma compacta de memorizar a fórmula é que a altura é a média geométrica das duas projeções, pois a média geométrica de dois números é a raiz quadrada do seu produto.",
            },
          ],
        },
        "sec-steps": {
          "h2": "Como Calcular a Altura a partir das Projeções Passo a Passo",
          "blocks": [
            {
              "kind": "steps",
              "steps": [
                "Identifique as duas projeções da hipotenusa. Procure os segmentos em que o pé da altura divide a hipotenusa, e identifique o que fica junto ao cateto AC como [[p]] e o que fica junto ao cateto BC como [[q]].",
                "Confirme que ambas as medidas usam a mesma unidade. Se uma estiver em milímetros e a outra em centímetros, converta uma delas antes de tocar na fórmula.",
                "Multiplique [[p]] e [[q]]. O produto [[h^2]] é um valor intermédio do tipo área, por isso a sua unidade é o quadrado da unidade de entrada.",
                "Extraia a raiz quadrada positiva do produto. A raiz negativa é descartada porque um comprimento não pode ser negativo.",
                "Escreva a resposta final com a sua unidade. Um número sem unidade convida a erros mais tarde, sobretudo quando alimenta um cálculo mais longo.",
                "Verifique se a resposta é razoável. A altura fica sempre entre as duas projeções, e nunca pode exceder metade da hipotenusa.",
              ],
            },
            {
              "kind": "p",
              "text": "Aqui está o método aplicado a um exemplo completo. Suponha [[p=4\\text{ cm}]] e [[q=9\\text{ cm}]]. Primeiro multiplique: [[4\\times 9=36]], logo [[h^2=36\\text{ cm}^2]]. Depois extraia a raiz quadrada positiva:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{36}=6\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "A altura é [[6\\text{ cm}]]. Como verificação de sanidade, [[6]] fica entre as projeções [[4]] e [[9]], correspondendo ao comportamento de média geométrica descrito mais adiante neste guia.",
            },
          ],
        },
        "sec-diagram": {
          "h2": "Diagrama da Altura do Triângulo Retângulo Explicado",
          "blocks": [
            {
              "kind": "p",
              "text": "O triângulo ABC tem o ângulo reto em C. A partir de C, a altura CD desce perpendicular à hipotenusa AB, encontrando-a no pé D. O segmento AD é identificado por [[p]], DB é identificado por [[q]], e CD é identificado por [[h]], enquanto a hipotenusa AB é [[c]] e os catetos AC e BC são [[a]] e [[b]].",
            },
            {
              "kind": "p",
              "text": "Dois quadradinhos marcam os dois ângulos retos: um em C dentro do triângulo original, e outro em D onde a altura encontra a hipotenusa. A altura CD aparece como um segmento interior limpo, visualmente distinto dos dois catetos que formam a moldura exterior do triângulo.",
            },
            {
              "kind": "p",
              "text": "A altura divide ABC em dois triângulos retângulos mais pequenos, ACD e CBD, que são semelhantes entre si e ao triângulo original. Nas questões dos manuais, as projeções são muitas vezes descritas como os dois segmentos da hipotenusa, ou simplesmente como os números que ficam de cada lado do pé da altura. Identifique-as como [[p]] e [[q]] antes de calcular seja o que for.",
            },
          ],
          "image": {
            "src": "altitude-main.svg",
            "alt": "Triângulo retângulo ABC com ângulo reto em C, altura CD até à hipotenusa AB, projeções AD = [[p]] e DB = [[q]], altura CD = [[h]]",
            "caption": "A altura CD divide a hipotenusa AB nas projeções [[p]] e [[q]]; [[h]] é a média geométrica de [[p]] e [[q]].",
          },
        },
        "sec-proof": {
          "h2": "Porque É que a Fórmula da Altura Funciona? Demonstração com Triângulos Semelhantes",
          "blocks": [
            {
              "kind": "p",
              "text": "O teorema da altura não é uma regra para decorar às cegas. Decorre da semelhança dos dois triângulos que a altura cria.",
            },
            {
              "kind": "p",
              "text": "No triângulo ACD, os ângulos agudos em A e C somam 90 graus, e no triângulo grande ABC, os ângulos A e B também somam 90 graus. Logo, o ângulo em C dentro de ACD é igual ao ângulo B, e o ângulo em A é igual ao ângulo em C dentro de CBD. Os dois triângulos pequenos partilham os três ângulos, o que os torna semelhantes.",
            },
            {
              "kind": "p",
              "text": "A semelhança significa que os lados correspondentes mantêm a mesma razão. No triângulo ACD, o lado oposto ao ângulo A é a altura [[h]]. No triângulo CBD, o lado oposto ao ângulo igual em C é a projeção [[q]]. O outro par correspondente é a projeção [[p]] (oposta ao segundo ângulo agudo em ACD) sobre a altura [[h]] (oposta ao ângulo correspondente em CBD). Igualar estes dá a proporção:",
            },
            {
              "kind": "p",
              "text": "[[[\\frac{h}{p}=\\frac{q}{h}]]]",
            },
            {
              "kind": "p",
              "text": "Multiplicar a proporção em cruz transforma-a em:",
            },
            {
              "kind": "p",
              "text": "[[[h^2=p \\times q]]]",
            },
            {
              "kind": "p",
              "text": "Extrair a raiz quadrada de ambos os lados dá [[h=\\sqrt{p\\times q}]]. A equação [[h^2=p\\times q]] tem duas raízes algébricas, positiva e negativa, mas um comprimento é uma quantidade positiva, por isso só a raiz positiva descreve a altura.",
            },
          ],
          "image": {
            "src": "altitude-proof.svg",
            "alt": "Os dois triângulos retângulos mais pequenos ACD e CBD com os lados correspondentes identificados para mostrar [[\\frac{h}{p}=\\frac{q}{h}]]",
            "caption": "Os triângulos ACD e CBD são semelhantes, logo [[\\frac{h}{p}=\\frac{q}{h}]] e [[h]] ao quadrado é igual a [[p]] vezes [[q]].",
          },
        },
        "sec-examples": {
          "h2": "Exemplos Resolvidos de Altura a partir das Projeções",
          "blocks": [
            {
              "kind": "h3",
              "text": "Exemplo 1: Números Inteiros Simples",
            },
            {
              "kind": "p",
              "text": "Dados [[p=4\\text{ cm}]] e [[q=9\\text{ cm}]], substitua na fórmula:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{4 \\times 9}=\\sqrt{36}=6\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "A altura é [[6\\text{ cm}]], um número inteiro porque [[36]] é um quadrado perfeito.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 2: Projeções Iguais",
            },
            {
              "kind": "p",
              "text": "Dados [[p=5\\text{ cm}]] e [[q=5\\text{ cm}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{5 \\times 5}=\\sqrt{25}=5\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Quando as projeções são iguais, a altura iguala cada projeção: o caso do triângulo retângulo isósceles, em que a altura é exatamente metade da hipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 3: Projeções Decimais",
            },
            {
              "kind": "p",
              "text": "Dados [[p=3.6\\text{ m}]] e [[q=6.4\\text{ m}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{3.6 \\times 6.4}=\\sqrt{23.04}=4.8\\text{ m}]]]",
            },
            {
              "kind": "p",
              "text": "Os decimais nada mudam: [[23.04]] é um quadrado perfeito, logo a altura é exatamente [[4.8\\text{ m}]].",
            },
            {
              "kind": "h3",
              "text": "Exemplo 4: Projeções Desiguais",
            },
            {
              "kind": "p",
              "text": "Dados [[p=2\\text{ cm}]] e [[q=18\\text{ cm}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{2 \\times 18}=\\sqrt{36}=6\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "A altura é [[6\\text{ cm}]], e não [[10\\text{ cm}]]. Tirar a média dá a média aritmética, [[10]], mas a altura é a média geométrica, que fica mais baixa para entradas desiguais.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 5: Quadrado Não Perfeito",
            },
            {
              "kind": "p",
              "text": "Dados [[p=5\\text{ cm}]] e [[q=7\\text{ cm}]]:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{5 \\times 7}=\\sqrt{35}\\text{ cm}\\approx 5.916\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Aqui [[35]] não é um quadrado perfeito, logo a resposta exata é [[\\sqrt{35}\\text{ cm}]]. Use a aproximação [[5.916\\text{ cm}]] para o trabalho prático, mas guarde a forma exata quando a resposta alimentar cálculos posteriores.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 6: Unidades de Entrada Diferentes",
            },
            {
              "kind": "p",
              "text": "Dados [[p=40\\text{ mm}]] e [[q=9\\text{ cm}]]. As unidades diferem, por isso converta primeiro: [[40\\text{ mm}=4\\text{ cm}]]. Depois:",
            },
            {
              "kind": "p",
              "text": "[[[h=\\sqrt{4 \\times 9}=\\sqrt{36}=6\\text{ cm}]]]",
            },
            {
              "kind": "p",
              "text": "Converter primeiro é a única jogada segura: introduzir [[40]] e [[9]] diretamente dá [[\\sqrt{40\\times 9}=\\sqrt{360}]], um número errado e sem unidade.",
            },
          ],
        },
        "sec-verify": {
          "h2": "Como Verificar o Cálculo da Altura",
          "blocks": [
            {
              "kind": "h3",
              "text": "Método 1: Verificação da Média Geométrica",
            },
            {
              "kind": "p",
              "text": "Eleve a sua altura ao quadrado e compare com o produto das projeções. Os dois valores têm de coincidir. Para [[p=4]] e [[q=9]] com [[h=6]]: [[6^2=36]] e [[4\\times 9=36]]. A concordância confirma a aritmética.",
            },
            {
              "kind": "h3",
              "text": "Método 2: Relações entre a Hipotenusa e os Catetos",
            },
            {
              "kind": "p",
              "text": "Reconstrua todo o triângulo e faça uma verificação cruzada com uma segunda fórmula. Primeiro some as projeções: [[c=4+9=13]]. Depois recupere os catetos com as relações projeção-cateto: [[a=\\sqrt{p\\times c}=\\sqrt{52}\\approx 7.211]] e [[b=\\sqrt{q\\times c}=\\sqrt{117}\\approx 10.817]]. Agora verifique com [[h=ab/c]]: [[(7.211\\times 10.817)/13\\approx 78/13=6]], o que coincide. Uma <a href=\"/right-triangle-side-calculator/\">calculadora de lados</a> mantém a aritmética dos catetos arrumada enquanto verifica.",
            },
            {
              "kind": "h3",
              "text": "Método 3: Relação da Área do Triângulo",
            },
            {
              "kind": "p",
              "text": "O mesmo triângulo tem duas expressões para a sua área. Usando os catetos: Área = [[(a\\times b)/2=(7.211\\times 10.817)/2\\approx 39]]. Usando a hipotenusa e a altura: Área = [[(c\\times h)/2=(13\\times 6)/2=39]]. Ambas as expressões concordam, o que confirma independentemente que [[h=6]]. A ferramenta <a href=\"/right-triangle-area-from-altitude-calculator/\">área a partir da altura</a> assenta nesta mesma relação.",
            },
          ],
        },
        "sec-relationships": {
          "h2": "Relação entre a Altura, a Hipotenusa e os Catetos do Triângulo",
          "blocks": [
            {
              "kind": "p",
              "text": "Cinco fórmulas ligam as seis partes identificadas. A tabela abaixo resume o que cada uma encontra e do que precisa.",
            },
            {
              "kind": "p",
              "text": "As quatro primeiras fórmulas precisam de pelo menos uma projeção. Vêm dos triângulos semelhantes que a altura cria, por isso aplicam-se apenas quando a altura é traçada a partir do vértice do ângulo reto. A quinta fórmula, [[h=ab/c]], não precisa de projeções: vem de igualar as duas expressões da área, e funciona sempre que os catetos e a hipotenusa são conhecidos.",
            },
            {
              "kind": "p",
              "text": "Esta é a diferença prática entre as duas calculadoras de altura deste site. Quando conhece as projeções, o teorema da altura dá [[h]] diretamente num só passo. Quando conhece os lados em vez disso, <a href=\"/right-triangle-altitude-from-sides-calculator/\">determinar a altura a partir dos lados</a> usa a via da área. Escolha a ferramenta que corresponder aos seus dados.",
            },
            {
              "kind": "p",
              "text": "Mais uma leitura útil de [[a^2=p\\times c]]: cada cateto é a média geométrica da hipotenusa e da sua projeção adjacente, espelhando como a altura é a média geométrica das duas projeções.",
            },
          ],
          "table": {
            "headers": [
              "Fórmula",
              "Encontra",
              "Precisa de",
            ],
            "rows": [
              [
                "[[c=p+q]]",
                "A hipotenusa",
                "Ambas as projeções",
              ],
              [
                "[[h^2=p\\times q]]",
                "A altura",
                "Ambas as projeções",
              ],
              [
                "[[a^2=p\\times c]]",
                "O cateto junto à projeção [[p]]",
                "A projeção [[p]] e a hipotenusa",
              ],
              [
                "[[b^2=q\\times c]]",
                "O cateto junto à projeção [[q]]",
                "A projeção [[q]] e a hipotenusa",
              ],
              [
                "[[h=ab/c]]",
                "A altura",
                "Ambos os catetos e a hipotenusa",
              ],
            ],
          },
        },
        "sec-geomean": {
          "h2": "Teorema da Média Geométrica e a Altura do Triângulo Retângulo",
          "blocks": [
            {
              "kind": "p",
              "text": "A média geométrica de dois números positivos é a raiz quadrada do seu produto. Para [[p]] e [[q]] é [[\\sqrt{p\\times q}]], que é exatamente a fórmula da altura. Dizer que a altura é a média geométrica das projeções é apenas reafirmar o teorema por outras palavras.",
            },
            {
              "kind": "p",
              "text": "A média aritmética é a média familiar: [[(p+q)/2]]. Para [[p=4]] e [[q=9]], a média geométrica é [[\\sqrt{36}=6]] enquanto a média aritmética é [[13/2=6.5]]. A altura é igual a [[6]], e não a [[6.5]], porque a proporção dos triângulos semelhantes impõe uma relação multiplicativa, e não aditiva.",
            },
            {
              "kind": "p",
              "text": "A média geométrica nunca excede a média aritmética para entradas positivas, com igualdade apenas quando [[p=q]]. É por isso que a altura é maior, em relação à hipotenusa, quando as projeções são iguais. Um retângulo de [[4]] por [[9]] e um quadrado de [[6]] por [[6]] têm a mesma área, [[36]], que é a mesma ideia desenhada como formas: a altura é o lado do quadrado cuja área iguala a do retângulo.",
            },
          ],
          "image": {
            "src": "altitude-geometric-mean.svg",
            "alt": "Retângulo de [[4]] por [[9]] e quadrado de [[6]] por [[6]] com área igual, mais uma reta numérica a comparar a média geométrica [[6]] e a média aritmética [[6.5]]",
            "caption": "Para [[p=4]] e [[q=9]], a média geométrica [[6]] (a altura) fica abaixo da média aritmética [[6.5]].",
          },
        },
        "sec-special": {
          "h2": "Casos Especiais e Propriedades Importantes",
          "blocks": [
            {
              "kind": "h3",
              "text": "Projeções Iguais",
            },
            {
              "kind": "p",
              "text": "Quando [[p=q]], a altura iguala esse valor comum: [[h=\\sqrt{p\\times p}=p]]. O pé da altura cai no ponto médio da hipotenusa, os catetos são iguais, e o triângulo é um triângulo retângulo isósceles com ângulos agudos de 45 graus, dando a altura máxima para uma hipotenusa fixa.",
            },
            {
              "kind": "h3",
              "text": "Projeções Muito Desiguais",
            },
            {
              "kind": "p",
              "text": "Quando [[p]] é minúsculo e [[q]] é enorme, a altura mantém-se modesta: [[p=1]] e [[q=100]] dão [[h=10]], muito abaixo do ponto médio das projeções. A média geométrica pesa a entrada pequena mais do que faria uma média.",
            },
            {
              "kind": "h3",
              "text": "Hipotenusa Fixa",
            },
            {
              "kind": "p",
              "text": "Mantenha a hipotenusa [[c=p+q]] constante e varie a divisão. O produto [[p\\times q]], e portanto a altura, atinge o máximo quando a divisão é par. Algebricamente, [[h\\le\\frac{p+q}{2}]], com igualdade exatamente quando [[p=q]]. Em termos simples, nenhuma altura pode exceder metade da sua hipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Projeções Nulas",
            },
            {
              "kind": "p",
              "text": "Definir [[p=0]] dá [[h=0]]: o pé da altura coincide com o vértice A, o triângulo colapsa num segmento, e não resta nenhum triângulo genuíno. Trate as projeções nulas como degeneradas, não como entrada válida da calculadora.",
            },
            {
              "kind": "h3",
              "text": "Projeções Negativas",
            },
            {
              "kind": "p",
              "text": "Uma projeção é um comprimento, e os comprimentos não podem ser negativos. Uma entrada negativa não tem significado geométrico e não produz nenhuma altura válida; o erro está a montante, na forma como o segmento foi medido.",
            },
          ],
          "image": {
            "src": "altitude-equal-vs-unequal.svg",
            "alt": "Dois triângulos retângulos com a mesma hipotenusa mas divisões de projeção diferentes a mostrar alturas diferentes",
            "caption": "Mesma hipotenusa, divisões diferentes: projeções iguais dão a altura mais alta.",
          },
        },
        "sec-mistakes": {
          "h2": "Erros Comuns ao Determinar a Altura a partir das Projeções",
          "blocks": [
            {
              "kind": "steps",
              "steps": [
                "Somar as projeções em vez de as multiplicar. A proporção dos triângulos semelhantes exige um produto: com [[p=4]] e [[q=9]], [[\\sqrt{4+9}\\approx 3.606]] está errado, enquanto [[\\sqrt{4\\times 9}=6]] está correto.",
                "Esquecer a raiz quadrada. Parar em [[h^2=36]] deixa um número do tipo área onde um comprimento deveria estar. Extraia sempre a raiz quadrada positiva para terminar.",
                "Confundir as projeções com os catetos do triângulo. Os catetos inclinam-se para fora da hipotenusa enquanto [[p]] e [[q]] ficam deitados ao longo dela; só os segmentos da hipotenusa pertencem ao teorema da altura.",
                "Misturar unidades sem converter. Com [[p=40\\text{ mm}]] e [[q=9\\text{ cm}]], converta primeiro ([[40\\text{ mm}=4\\text{ cm}]]), e depois calcule [[h=\\sqrt{4\\times 9}=6\\text{ cm}]].",
                "Introduzir medidas negativas. Uma projeção negativa não faz sentido e pode produzir resultados imaginários. Confirme que tanto [[p]] como [[q]] são positivos antes de calcular.",
                "Levar [[h^2]] adiante como [[h]] em soluções mais longas. Mantenha os rótulos direitos: [[h^2=36]] é o passo ao quadrado, [[h=6]] é a altura.",
                "Arredondar demasiado cedo. Guarde formas exatas como [[\\sqrt{35}]] o máximo possível e arredonde apenas a resposta final.",
                "Aplicar a fórmula a um triângulo não retângulo. A proporção [[\\frac{h}{p}=\\frac{q}{h}]] precisa do ângulo reto em C; sem ele, o argumento de semelhança colapsa e a fórmula não se sustenta.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Aplicações Práticas do Teorema da Altura",
          "blocks": [
            {
              "kind": "p",
              "text": "As aulas de geometria usam este teorema constantemente. Os problemas de altura testam se os alunos conseguem identificar as projeções, escolher a fórmula certa e verificar com o teorema de Pitágoras, e os exercícios dos manuais muitas vezes entregam as projeções como números simples num diagrama identificado.",
            },
            {
              "kind": "p",
              "text": "Em problemas de geometria de estilo construtivo, o teorema completa um triângulo retângulo quando só se conhecem medidas parciais. Desenhar uma treliça triangular pode fixar primeiro os segmentos da hipotenusa, com a altura a determinar a altura do pico, e as demonstrações de semelhança usam diretamente a mesma proporção [[\\frac{h}{p}=\\frac{q}{h}]].",
            },
            {
              "kind": "p",
              "text": "Esboços de topografia e engenharia por vezes modelam uma linha de visada como a altura de um triângulo retângulo, com as projeções lidas a partir de uma linha de base. Duas distâncias arbitrárias no terreno não determinam uma altura por si só; a geometria do triângulo retângulo tem de se verificar genuinamente antes de o teorema se aplicar.",
            },
            {
              "kind": "p",
              "text": "Desenhos arquitetónicos de empenas ou coberturas de placa dobrada usam as mesmas relações para recuperar uma dimensão em falta, desde que o ângulo reto esteja realmente lá.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Problemas Práticos com Respostas",
          "blocks": [
            {
              "kind": "h3",
              "text": "Problema 1: Iniciante",
            },
            {
              "kind": "p",
              "text": "As projeções de um triângulo retângulo são [[p=25\\text{ cm}]] e [[q=16\\text{ cm}]]. Determine a altura.",
            },
            {
              "kind": "h3",
              "text": "Problema 2: Iniciante-Intermédio",
            },
            {
              "kind": "p",
              "text": "Um triângulo retângulo tem projeções [[p=12\\text{ m}]] e [[q=27\\text{ m}]]. Determine a altura relativa à hipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Problema 3: Intermédio",
            },
            {
              "kind": "p",
              "text": "O pé da altura divide a hipotenusa em segmentos de [[7\\text{ in}]] e [[28\\text{ in}]]. Qual é a altura?",
            },
            {
              "kind": "h3",
              "text": "Problema 4: Decimais",
            },
            {
              "kind": "p",
              "text": "Um triângulo retângulo tem projeções [[p=2.5\\text{ ft}]] e [[q=14.4\\text{ ft}]]. Calcule a altura.",
            },
            {
              "kind": "h3",
              "text": "Problema 5: Aplicação",
            },
            {
              "kind": "p",
              "text": "Uma treliça de telhado em triângulo retângulo tem uma viga de amarração como hipotenusa. O pé da altura divide a viga de amarração em segmentos de [[3.2\\text{ m}]] e [[12.8\\text{ m}]]. Determine a altura da treliça no ponto em que cai a altura.",
            },
            {
              "kind": "h3",
              "text": "Respostas dos Problemas Práticos",
            },
            {
              "kind": "p",
              "text": "1. [[h=\\sqrt{25\\times 16}=\\sqrt{400}=20\\text{ cm}]].",
            },
            {
              "kind": "p",
              "text": "2. [[h=\\sqrt{12\\times 27}=\\sqrt{324}=18\\text{ m}]].",
            },
            {
              "kind": "p",
              "text": "3. [[h=\\sqrt{7\\times 28}=\\sqrt{196}=14\\text{ in}]].",
            },
            {
              "kind": "p",
              "text": "4. [[h=\\sqrt{2.5\\times 14.4}=\\sqrt{36}=6\\text{ ft}]].",
            },
            {
              "kind": "p",
              "text": "5. [[h=\\sqrt{3.2\\times 12.8}=\\sqrt{40.96}=6.4\\text{ m}]].",
            },
          ],
        },
        "sec-conclusion": {
          "h2": "Uma Raiz Quadrada, Compreensão Total",
          "blocks": [
            {
              "kind": "p",
              "text": "Uma raiz quadrada capta toda a ideia: a altura de um triângulo retângulo é a média geométrica das duas projeções sobre a sua hipotenusa. Multiplique [[p]] e [[q]], extraia a raiz quadrada positiva, mantenha as unidades consistentes, e a resposta está na mão.",
            },
            {
              "kind": "p",
              "text": "Por trás desse cálculo curto está um pedaço limpo de geometria. A altura cria dois triângulos semelhantes, a semelhança dá a proporção, e a proporção dá a fórmula. Quando consegue ver essa cadeia, verificar respostas, evitar erros e reconhecer projeções em novos problemas tornam-se rotina.",
            },
          ],
        },
      },
      "faqHeading": "Perguntas Frequentes",
      "faqs": [
        {
          "question": "Qual é a fórmula da altura a partir das projeções?",
          "answer": "A fórmula é [[h=\\sqrt{p\\times q}]], onde [[h]] é a altura relativa à hipotenusa e [[p]] e [[q]] são as duas projeções. Ambas as projeções têm de ser comprimentos positivos medidos na mesma unidade. Multiplique-as e depois extraia a raiz quadrada positiva. O resultado é a altura na mesma unidade das entradas.",
        },
        {
          "question": "O que são as projeções da hipotenusa?",
          "answer": "As projeções são os dois segmentos em que o pé da altura divide a hipotenusa. No triângulo ABC com o ângulo reto em C e a altura CD, o segmento AD é a projeção [[p]] e DB é a projeção [[q]]. Juntas formam a hipotenusa completa, logo [[p+q=c]]. São segmentos planos ao longo da hipotenusa, não os catetos do triângulo.",
        },
        {
          "question": "Porque é que a altura é a média geométrica das duas projeções?",
          "answer": "Porque a altura cria dois triângulos semelhantes. Nos triângulos ACD e CBD, os lados correspondentes dão a proporção [[\\frac{h}{p}=\\frac{q}{h}]]. Multiplicar em cruz produz [[h^2=p\\times q]], logo [[h=\\sqrt{p\\times q}]]. Como a média geométrica de dois números é a raiz quadrada do seu produto, a altura é exatamente a média geométrica de [[p]] e [[q]].",
        },
        {
          "question": "Posso determinar a altura sem conhecer os catetos do triângulo?",
          "answer": "Sim. O teorema da altura precisa apenas das duas projeções, por isso os catetos são entrada desnecessária. Introduza [[p]] e [[q]] na calculadora e ela devolve [[h]] diretamente. Esta é a via mais rápida quando um diagrama ou o enunciado de um problema dá os segmentos da hipotenusa. Se conhecer os catetos em vez disso, aplica-se uma fórmula diferente, [[h=ab/c]].",
        },
        {
          "question": "As duas projeções podem ter comprimentos diferentes?",
          "answer": "Sim, e geralmente têm. As projeções são quaisquer dois comprimentos positivos, iguais ou desiguais, e a fórmula trata de ambos. Com [[p=2]] e [[q=18]] a altura é [[6]], ficando entre os dois valores. Projeções iguais são simplesmente o caso especial que produz um triângulo retângulo isósceles.",
        },
        {
          "question": "O que acontece quando ambas as projeções são iguais?",
          "answer": "Quando [[p=q]], a altura iguala esse valor comum, pois [[\\sqrt{p\\times p}=p]]. O pé da altura cai no ponto médio da hipotenusa, e o triângulo torna-se um triângulo retângulo isósceles com dois catetos iguais e ângulos agudos de [[45^\\circ]]. Para uma hipotenusa fixa, esta divisão também dá a altura mais alta possível.",
        },
        {
          "question": "A altura pode ser maior do que qualquer uma das projeções?",
          "answer": "Pode exceder a projeção mais pequena. Com [[p=2]] e [[q=18]], a altura é [[6]], que é maior do que [[p=2]]. A média geométrica fica sempre entre as duas entradas, por isso a altura cai entre [[p]] e [[q]]. Nunca pode exceder a projeção maior, nem pode exceder metade da hipotenusa.",
        },
        {
          "question": "E se as projeções usarem unidades diferentes?",
          "answer": "Converta uma delas para que ambas partilhem uma unidade antes de calcular. Por exemplo, mude [[40\\text{ mm}]] para [[4\\text{ cm}]] quando a outra projeção for [[9\\text{ cm}]], e depois calcule [[h=\\sqrt{4\\times 9}=6\\text{ cm}]]. Misturar unidades sem converter corrompe o produto. A calculadora assume unidades iguais, por isso uniformize sempre primeiro.",
        },
        {
          "question": "A altura pode ser maior do que metade da hipotenusa?",
          "answer": "Não. Para quaisquer [[p]] e [[q]] positivos, a média geométrica nunca excede a média aritmética, logo [[h=\\sqrt{p\\times q}\\le\\frac{p+q}{2}=\\frac{c}{2}]]. A altura iguala exatamente metade da hipotenusa apenas quando [[p=q]]. Qualquer resultado da calculadora maior do que metade da hipotenusa sinaliza um erro de entrada ou de aritmética.",
        },
        {
          "question": "Como verifico o meu cálculo da altura?",
          "answer": "Eleve a altura ao quadrado e confirme que iguala [[p\\times q]]. Para uma verificação mais profunda, reconstrua o triângulo: [[c=p+q]], [[a=\\sqrt{p\\times c}]], [[b=\\sqrt{q\\times c}]], e depois verifique [[h=ab/c]]. Também pode comparar as duas expressões da área, [[(a\\times b)/2]] e [[(c\\times h)/2]], que têm de concordar. Se as três verificações passarem, a resposta é sólida.",
        },
        {
          "question": "O teorema da altura está relacionado com o teorema de Pitágoras?",
          "answer": "Descrevem o mesmo triângulo retângulo de ângulos diferentes. O teorema da altura vem da semelhança, enquanto o teorema de Pitágoras relaciona os três lados: [[a^2+b^2=c^2]]. Reforçam-se mutuamente: com [[p=4]] e [[q=9]], os catetos [[\\sqrt{52}]] e [[\\sqrt{117}]] satisfazem [[52+117=169=13^2]], confirmando o triângulo que o teorema da altura descreve.",
        },
        {
          "question": "Posso usar esta fórmula para um triângulo não retângulo?",
          "answer": "Não. A proporção [[\\frac{h}{p}=\\frac{q}{h}]] depende dos triângulos semelhantes criados por uma altura baixada a partir de um vértice de ângulo reto. Sem esse ângulo reto, o argumento de semelhança falha e [[h^2=p\\times q]] não se sustenta. Para triângulos gerais, use fórmulas de altura baseadas em área ou trigonométricas adequadas aos dados fornecidos.",
        },
      ],
      "relatedHeading": "Explorar Calculadoras Relacionadas de Triângulos Retângulos",
      "relatedIntro": "Estas ferramentas tratam dos cálculos vizinhos: encontrar projeções, encontrar a altura a partir dos comprimentos dos lados, e transformar uma altura numa área. Cada uma combina naturalmente com o teorema da altura desta página.",
      "relatedItems": [
        "Calculadora da Altura do Triângulo Retângulo",
        "Calculadora da Altura do Triângulo Retângulo a partir dos Lados",
        "Calculadora de Projeções do Triângulo Retângulo",
        "Calculadora da Área do Triângulo Retângulo a partir da Altura",
        "Calculadora de Lados do Triângulo Retângulo",
      ],
    },
};
