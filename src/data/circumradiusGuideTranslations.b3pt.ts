// circumradiusGuideTranslations.bpt.ts: Right Triangle Circumradius
// Guide (Page 35 of 45) translation.
export const CIRCUMR_B3_PT = {
  "pt": {
      "tocHeading": "Conteúdo do Guia",
      "tocItems": {
        "sec-intro": "Calculadora de Circunraio de Triângulo Retângulo",
        "sec-calculate": "Calcular o Circunraio de um Triângulo Retângulo",
        "sec-what-circumradius": "O Que É o Circunraio de um Triângulo Retângulo?",
        "sec-circumcircle": "O Que É o Circuncírculo na Geometria do Triângulo Retângulo?",
        "sec-formula": "Fórmula do Circunraio do Triângulo Retângulo",
        "sec-why-diameter": "Por Que a Hipotenusa É o Diâmetro do Circuncírculo?",
        "sec-circumcenter": "O Que É o Circuncentro de um Triângulo Retângulo?",
        "sec-how-to-use": "Como Usar a Calculadora de Circunraio de Triângulo Retângulo",
        "sec-step-example": "Exemplo Passo a Passo para Encontrar o Circunraio",
        "sec-diagram": "Diagrama do Circuncírculo do Triângulo Retângulo Explicado",
        "sec-proof": "Por Que a Fórmula do Circunraio Funciona?",
        "sec-thales": "Entendendo o Teorema de Tales e o Circuncírculo",
        "sec-examples": "Exemplos Resolvidos de Cálculo do Circunraio de Triângulo Retângulo",
        "sec-legs-known": "Como Encontrar o Circunraio Quando os Dois Catetos São Conhecidos",
        "sec-diameter": "Relação Entre Circunraio e Diâmetro",
        "sec-vs-inradius": "Circunraio vs. Inraio de um Triângulo Retângulo",
        "sec-pythagoras": "Relação Entre o Circunraio e o Teorema de Pitágoras",
        "sec-verify": "Como Verificar o Cálculo do Circunraio",
        "sec-properties": "Propriedades Importantes do Circunraio em Triângulos Retângulos",
        "sec-mistakes": "Erros Comuns ao Calcular o Circunraio",
        "sec-applications": "Aplicações Práticas do Circunraio",
        "sec-practice": "Problemas de Prática com Respostas",
        "sec-related": "Explore Calculadoras Relacionadas de Triângulo Retângulo",
        "sec-faq": "Perguntas Frequentes",
      },
      "sections": {
        "sec-intro": {
          "h2": "Calculadora de Circunraio de Triângulo Retângulo",
          "blocks": [
            {
              "kind": "p",
              "text": "Encontre o circunraio de um triângulo retângulo em uma divisão: divida a hipotenusa ao meio.",
            },
            {
              "kind": "p",
              "text": "O circunraio é o raio do círculo que passa por todos os três vértices do triângulo, chamado circuncírculo. A hipotenusa c é o lado oposto ao ângulo reto, e é a única medida de que esta calculadora precisa, porque a hipotenusa também é o diâmetro do circuncírculo. A fórmula é [[R = \\frac{c}{2}]], onde [[R]] é o circunraio e [[c]] é a hipotenusa completa.",
            },
            {
              "kind": "p",
              "text": "Por exemplo, se [[c = 10]] cm, então [[R = \\frac{10}{2} = 5]] cm. Esses 5 cm são a distância do centro do circuncírculo até cada vértice do triângulo. A mesma distância alcança o vértice A, o vértice B e o vértice C, e é exatamente isso que faz o círculo passar pelos três.",
            },
          ],
        },
        "sec-calculate": {
          "h2": "Calcular o Circunraio de um Triângulo Retângulo",
          "blocks": [
            {
              "kind": "p",
              "text": "A calculadora desta página tem um campo de entrada, para a hipotenusa c. A hipotenusa é o lado oposto ao ângulo reto, e também é o lado mais longo do triângulo. Meça-a de uma ponta à outra, na unidade que você estiver usando, e digite esse único número.",
            },
            {
              "kind": "p",
              "text": "A hipotenusa sozinha basta porque o circunraio não depende de mais nada. É por isso que a calculadora não precisa de uma segunda ou terceira entrada.",
            },
            {
              "kind": "p",
              "text": "Digite um comprimento positivo. Uma hipotenusa zero ou negativa não descreve nenhum triângulo real, e a calculadora não tem nada sensato para dividir ao meio. Mantenha a unidade consistente com o seu problema: se c está em centímetros, a resposta está em centímetros, e se c está em metros, a resposta está em metros.",
            },
            {
              "kind": "p",
              "text": "Clique em Calcular Circunraio R para ver o resultado, e use Redefinir para limpar o campo antes de um novo problema. Leia a resposta como um raio, não como um diâmetro. Se a calculadora mostrar 5 cm para uma hipotenusa de 10 cm, o círculo completo mede 10 cm de um lado ao outro, e 5 cm é a distância do seu centro até a sua borda.",
            },
          ],
        },
        "sec-what-circumradius": {
          "h2": "O Que É o Circunraio de um Triângulo Retângulo?",
          "blocks": [
            {
              "kind": "p",
              "text": "O circunraio de um triângulo retângulo é o raio do seu circuncírculo, o círculo traçado por todos os três vértices. Considere o triângulo ABC com o ângulo reto em C. Trace um círculo que passe exatamente por A, B e C. A distância do centro desse círculo até qualquer um dos três vértices é o circunraio, escrito [[R]].",
            },
            {
              "kind": "p",
              "text": "O centro do círculo é chamado circuncentro, escrito [[O]]. Em um triângulo retângulo, [[O]] fica no ponto médio da hipotenusa AB. Como [[O]] é o centro, as distâncias de [[O]] até os três vértices são todas iguais, então [[AO = BO = CO = R]]. Um único número, [[R]], descreve as três distâncias ao mesmo tempo.",
            },
            {
              "kind": "p",
              "text": "Um exemplo simples torna isso concreto. Em um triângulo 6-8-10, a hipotenusa é 10 cm, então o circunraio é 5 cm. O centro fica a 5 cm de A, a 5 cm de B e a 5 cm de C. Os catetos, 6 cm e 8 cm, são lados do triângulo, não raios, e nenhum deles é igual ao circunraio aqui.",
            },
          ],
          "image": {
            "src": "circumradius-main-circumcircle.svg",
            "alt": "Triângulo retângulo ABC dentro do seu circuncírculo, com o centro O no ponto médio da hipotenusa AB",
            "caption": "Triângulo ABC dentro do seu circuncírculo: O é o centro, e AO, BO e CO são cada um igual a R.",
          },
        },
        "sec-circumcircle": {
          "h2": "O Que É o Circuncírculo na Geometria do Triângulo Retângulo?",
          "blocks": [
            {
              "kind": "p",
              "text": "Um circuncírculo é um círculo que passa por todos os vértices de um polígono. Para um triângulo, isso significa que o círculo passa pelos três cantos, e nada mais é exigido dele. Todo triângulo tem exatamente um circuncírculo, porque três pontos não colineares determinam um único círculo.",
            },
            {
              "kind": "p",
              "text": "Em um triângulo retângulo, o circuncírculo tem uma forma especial. O triângulo cabe dentro do círculo com a sua hipotenusa estendida em linha reta pelo meio, de um lado do círculo ao outro. O terceiro vértice, o vértice do ângulo reto C, fica sobre o círculo entre eles. Nenhuma parte do triângulo sai para fora do círculo, e o círculo é o menor que pode passar pelos três vértices.",
            },
            {
              "kind": "p",
              "text": "O circuncírculo é diferente do círculo inscrito. O círculo inscrito fica dentro do triângulo e toca os três lados por dentro. O circuncírculo envolve o triângulo e o toca apenas nos três vértices. Confundir os dois círculos é a fonte mais comum de confusão nesta página, e a seção de comparação abaixo os coloca lado a lado.",
            },
          ],
        },
        "sec-formula": {
          "h2": "Fórmula do Circunraio do Triângulo Retângulo",
          "blocks": [
            {
              "kind": "p",
              "text": "A fórmula do circunraio de um triângulo retângulo é curta o bastante para memorizar de relance:",
            },
            {
              "kind": "p",
              "text": "[[[R = \\frac{c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Aqui [[R]] é o circunraio, o raio do circuncírculo, e [[c]] é a hipotenusa completa, o lado oposto ao ângulo reto. A fórmula diz: pegue a hipotenusa e divida-a por dois.",
            },
            {
              "kind": "p",
              "text": "O cálculo tem dois passos. Primeiro, identifique a hipotenusa corretamente. É o lado oposto ao ângulo reto, e é sempre o lado mais longo. Segundo, divida o seu comprimento por dois. Não há quadrado, nem raiz quadrada, nem uma segunda medida a encontrar antes, desde que a hipotenusa já seja conhecida.",
            },
            {
              "kind": "p",
              "text": "A razão pela qual a divisão funciona é que a hipotenusa é o diâmetro do circuncírculo. Um raio é sempre metade de um diâmetro, então [[R = \\frac{D}{2}]], onde [[D]] é o diâmetro. Em um triângulo retângulo [[D = c]], então a substituição dá [[R = \\frac{c}{2}]]. A fórmula é na verdade a conhecida relação entre raio e diâmetro, aplicada a um diâmetro que por acaso é um lado do triângulo.",
            },
            {
              "kind": "p",
              "text": "Para um triângulo qualquer, que não seja necessariamente retângulo, o circunraio segue a fórmula [[R = \\frac{abc}{4A}]], onde [[a]], [[b]] e [[c]] são os três lados e [[A]] é a área do triângulo. Para um triângulo retângulo, ela se simplifica para [[R = \\frac{c}{2}]], porque a área é [[A = \\frac{ab}{2}]]. Use a fórmula geral apenas para triângulos que não são retângulos.",
            },
          ],
        },
        "sec-why-diameter": {
          "h2": "Por Que a Hipotenusa É o Diâmetro do Circuncírculo?",
          "blocks": [
            {
              "kind": "p",
              "text": "Esta é a ideia em torno da qual toda a página gira, então merece uma análise cuidadosa. Considere o triângulo retângulo ABC com o ângulo reto em C, e seja [[O]] o ponto médio da hipotenusa AB. A afirmação é que [[O]] está igualmente distante dos três vértices, o que o torna o centro do circuncírculo, e que AB, passando por [[O]] com as duas pontas no círculo, é um diâmetro.",
            },
            {
              "kind": "p",
              "text": "O fato principal é a propriedade do ponto médio de um triângulo retângulo: o ponto médio da hipotenusa está igualmente distante dos três vértices. Em símbolos, [[OA = OB = OC]]. Como [[O]] é o ponto médio de AB, [[OA]] e [[OB]] são cada um metade da hipotenusa, então [[OA = OB = \\frac{c}{2}]].",
            },
            {
              "kind": "p",
              "text": "Por que [[OC]] é igual à metade da hipotenusa? Uma forma de ver isso é completar o retângulo. Desenhe uma cópia do triângulo ABC girada meia volta em torno de [[O]], de modo que os dois triângulos juntos formem um retângulo com AB como uma diagonal. As diagonais de um retângulo são iguais e se cortam ao meio, então [[OC = \\frac{c}{2}]] também.",
            },
            {
              "kind": "p",
              "text": "Uma vez estabelecido que [[OA = OB = OC]], o resto segue. Um círculo com centro em [[O]] e raio [[\\frac{c}{2}]] passa por A, B e C, então é o circuncírculo, [[O]] é o circuncentro, e [[\\frac{c}{2}]] é o circunraio. Como A e B são pontas opostas de uma linha que passa pelo centro, AB é um diâmetro, então [[AB = 2R]], que é [[c = 2R]] e, portanto, [[R = \\frac{c}{2}]].",
            },
          ],
          "image": {
            "src": "circumradius-hypotenuse-diameter.svg",
            "alt": "Hipotenusa AB mostrada como o diâmetro do circuncírculo, com AO e OB iguais a R",
            "caption": "A hipotenusa AB é o diâmetro: AO e OB são cada um igual a R, e AB é igual a 2R.",
          },
        },
        "sec-circumcenter": {
          "h2": "O Que É o Circuncentro de um Triângulo Retângulo?",
          "blocks": [
            {
              "kind": "p",
              "text": "O circuncentro de um triângulo é o ponto igualmente distante dos três vértices, e é o centro do circuncírculo. Ele é encontrado onde as mediatrizes dos lados se encontram.",
            },
            {
              "kind": "p",
              "text": "Para um triângulo retângulo, as mediatrizes se encontram em um ponto que você pode encontrar sem desenhá-las: o ponto médio da hipotenusa. Divida AB ao meio e você tem o circuncentro [[O]]. Dividir qualquer um dos catetos ao meio dá uma linha que passa pelo mesmo ponto, o que é uma verificação útil quando você está construindo o centro com compasso e régua.",
            },
            {
              "kind": "p",
              "text": "O circuncentro fica sobre a própria hipotenusa, exatamente no meio dela. Essa é a característica especial dos triângulos retângulos. Em um triângulo acutângulo, os três ângulos são menores que 90 graus e o circuncentro fica dentro do triângulo. O triângulo retângulo é o caso limite, com o centro sobre a fronteira do triângulo, no seu lado mais longo.",
            },
            {
              "kind": "p",
              "text": "O circuncentro não é o vértice do ângulo reto. O vértice C é um ponto do círculo, a uma distância [[R]] de [[O]], enquanto [[O]] é o centro. Confundir os dois é um erro comum, porque C é o canto mais chamativo do triângulo. Lembre-se de que o centro deve estar igualmente distante de A, B e C, e C não está igualmente distante de A e B, a menos que o triângulo seja isósceles de uma maneira específica, então C não pode ser o centro em geral.",
            },
          ],
          "image": {
            "src": "circumradius-circumcenter.svg",
            "alt": "Circuncentro O no ponto médio da hipotenusa, igualmente distante dos três vértices",
            "caption": "O é o ponto médio de AB, com OA, OB e OC todos iguais a R.",
          },
        },
        "sec-how-to-use": {
          "h2": "Como Usar a Calculadora de Circunraio de Triângulo Retângulo",
          "blocks": [
            {
              "kind": "p",
              "text": "Nove passos curtos levam você de um triângulo rotulado a uma resposta verificada. Os catetos não são necessários em nenhum momento, porque só a hipotenusa determina o circunraio.",
            },
            {
              "kind": "steps",
              "steps": [
                "Identifique o triângulo retângulo no seu problema e confirme que ele tem um ângulo reto.",
                "Localize o ângulo reto, geralmente marcado com um pequeno quadrado no vértice C.",
                "Identifique o lado oposto ao ângulo reto; esse lado é a hipotenusa c.",
                "Confirme que esse lado é o lado mais longo do triângulo. Se não for, rotule o diagrama novamente antes de continuar.",
                "Selecione a unidade apropriada e converta todas as medidas para que usem essa unidade.",
                "Digite o comprimento da hipotenusa no campo Hipotenusa c.",
                "Clique em Calcular Circunraio R e leia o resultado.",
                "Verifique o resultado: ele deve ser positivo, estar na mesma unidade que c, e ser exatamente a metade de c.",
                "Use Redefinir ao iniciar outro cálculo.",
              ],
            },
            {
              "kind": "p",
              "text": "Se o seu problema der os dois catetos em vez da hipotenusa, encontre c primeiro com o teorema de Pitágoras, [[c = \\sqrt{a^2 + b^2}]], e depois digite esse valor. A <a href=\"/right-triangle-side-calculator/\">calculadora de lados de triângulo retângulo</a> pode encontrar a hipotenusa que falta para você, e a seção sobre catetos abaixo apresenta um exemplo completo.",
            },
          ],
        },
        "sec-step-example": {
          "h2": "Exemplo Passo a Passo para Encontrar o Circunraio",
          "blocks": [
            {
              "kind": "p",
              "text": "Use [[c = 10]] cm. Os três passos abaixo mostram todo o cálculo, sem pular nada.",
            },
            {
              "kind": "steps",
              "steps": [
                "Escreva a fórmula: [[R = \\frac{c}{2}]].",
                "Substitua o valor conhecido: [[R = \\frac{10}{2}]].",
                "Divida: [[R = 5]] cm.",
              ],
            },
            {
              "kind": "p",
              "text": "A resposta 5 cm significa que o circuncírculo tem um raio de 5 cm. O seu centro, o ponto médio da hipotenusa, fica a 5 cm de cada vértice do triângulo, e o círculo passa pelos três vértices. O diâmetro do círculo é 10 cm, o mesmo que a hipotenusa.",
            },
            {
              "kind": "p",
              "text": "Verifique a resposta com a relação do diâmetro, [[2R = c]]. Dobrar o raio dá [[2 \\times 5 = 10]] cm, que corresponde exatamente à hipotenusa. Se dobrar a sua resposta não devolver a hipotenusa com a qual você começou, a divisão deu errado em algum lugar, e a verificação detecta isso na hora.",
            },
          ],
          "image": {
            "src": "circumradius-example-c10.svg",
            "alt": "Exemplo resolvido com hipotenusa de 10 cm e circunraio de 5 cm dentro do circuncírculo",
            "caption": "Exemplo resolvido: c = 10 cm dá R = 5 cm, e 2 vezes 5 cm é igual a 10 cm.",
          },
        },
        "sec-diagram": {
          "h2": "Diagrama do Circuncírculo do Triângulo Retângulo Explicado",
          "blocks": [
            {
              "kind": "p",
              "text": "O diagrama mostra o triângulo ABC com o ângulo reto em C. O lado AC é o cateto a, o lado BC é o cateto b, e o lado AB é a hipotenusa c. O ponto [[O]] marca o ponto médio de AB, e um círculo com centro em [[O]] passa por A, B e C.",
            },
            {
              "kind": "p",
              "text": "Leia o diagrama nesta ordem. Comece em A, siga pelo cateto a até C, depois pelo cateto b até B, e volte pela hipotenusa de B até A, passando por [[O]] no caminho. Os segmentos de [[O]] até A, B e C são todos raios, cada um rotulado [[R]].",
            },
            {
              "kind": "p",
              "text": "O segmento AB passa pelo centro [[O]] e tem as duas pontas no círculo, que é a definição de um diâmetro. É por isso que AB é desenhado como uma linha reta no meio do círculo, em vez de como uma corda deslocada para um lado. O ângulo reto em C fica sobre o próprio círculo, que é o quadro que o teorema de Tales descreve.",
            },
          ],
        },
        "sec-proof": {
          "h2": "Por Que a Fórmula do Circunraio Funciona?",
          "blocks": [
            {
              "kind": "p",
              "text": "A demonstração usa o ponto médio da hipotenusa e o fato de que ele está igualmente distante dos três vértices. Seja [[M]] o ponto médio de AB no triângulo retângulo ABC, com o ângulo reto em C. Então [[AM = BM = \\frac{c}{2}]] pela definição de ponto médio. O passo que precisa de demonstração é [[MA = MB = MC]], a afirmação de que a terceira distância corresponde às duas primeiras.",
            },
            {
              "kind": "p",
              "text": "Uma forma simples de mostrar isso é estender a mediana CM até um ponto D de modo que [[MD = MC]], e ligar D a A e B. O quadrilátero ACBD tem as diagonais AB e CD que se cortam ao meio em [[M]], então é um paralelogramo. O seu ângulo em C é um ângulo reto, e um paralelogramo com um ângulo reto é um retângulo, então ACBD é um retângulo.",
            },
            {
              "kind": "p",
              "text": "As diagonais de um retângulo são iguais, então [[CD = AB = c]]. Como [[M]] divide CD ao meio, [[MC = \\frac{CD}{2} = \\frac{c}{2}]]. Isso corresponde a [[MA]] e [[MB]], então [[MA = MB = MC = \\frac{c}{2}]]. O ponto [[M]] está igualmente distante de A, B e C, o que o torna o circuncentro, e a distância comum [[\\frac{c}{2}]] é o circunraio. Portanto, [[R = \\frac{c}{2}]].",
            },
          ],
        },
        "sec-thales": {
          "h2": "Entendendo o Teorema de Tales e o Circuncírculo",
          "blocks": [
            {
              "kind": "p",
              "text": "O teorema de Tales afirma que um ângulo subtendido por um diâmetro em um ponto do círculo é um ângulo reto. Na figura, AB é um diâmetro de um círculo e C é qualquer ponto do círculo diferente de A ou B. Então o ângulo ACB é 90 graus. O teorema recebeu o nome de Tales de Mileto, a quem se atribui a primeira demonstração conhecida dele.",
            },
            {
              "kind": "p",
              "text": "O recíproco é o que esta página usa: se um triângulo tem um ângulo reto, a sua hipotenusa pode ser tratada como o diâmetro de um círculo que passa pelos três vértices. Considere o triângulo ABC com o ângulo C igual a 90 graus. O recíproco diz que C fica no círculo de diâmetro AB, então esse círculo é o circuncírculo do triângulo, e o seu raio é a metade de AB.",
            },
            {
              "kind": "p",
              "text": "As duas direções juntas dão um teste completo. Um ponto C no círculo de diâmetro AB sempre dá um ângulo reto em C, e um ângulo reto em C sempre coloca C nesse círculo.",
            },
            {
              "kind": "p",
              "text": "O teorema também explica a posição do circuncentro. O centro do círculo é o ponto médio do seu diâmetro, e o diâmetro é a hipotenusa, então o centro é o ponto médio da hipotenusa. Nada mais sobre o triângulo precisa ser conhecido. É por isso que a calculadora pede apenas um número.",
            },
          ],
          "image": {
            "src": "circumradius-thales-theorem.svg",
            "alt": "Diagrama do teorema de Tales com o diâmetro AB e o ponto C no círculo formando um ângulo reto",
            "caption": "Teorema de Tales: AB é o diâmetro, C está no círculo, e o ângulo C é 90 graus.",
          },
        },
        "sec-examples": {
          "h2": "Exemplos Resolvidos de Cálculo do Circunraio de Triângulo Retângulo",
          "blocks": [
            {
              "kind": "h3",
              "text": "Exemplo 1: Número Inteiro Básico",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 10]] cm, a fórmula dá [[R = \\frac{10}{2} = 5]] cm. O circuncírculo tem um diâmetro de 10 cm e um raio de 5 cm, e o seu centro é o ponto médio da hipotenusa, a 5 cm de cada vértice.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 2: Medida Maior",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 24]] m, [[R = \\frac{24}{2} = 12]] m. Números maiores não mudam nada no método: divida a hipotenusa ao meio e mantenha a unidade. Um círculo de 24 m de um lado ao outro tem um raio de 12 m.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 3: Medida Decimal",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 7.5]] cm, [[R = \\frac{7.5}{2} = 3.75]] cm. Uma hipotenusa decimal dá um circunraio decimal, o que é normal. Verifique dobrando: [[2 \\times 3.75 = 7.5]] cm, que devolve a hipotenusa.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 4: Hipotenusa Ímpar",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 13]] cm, [[R = \\frac{13}{2} = 6.5]] cm. Um número inteiro ímpar dividido ao meio dá um número terminado em .5. Este é o triângulo 5-12-13, cujos catetos são 5 cm e 12 cm, pois [[5^2 + 12^2 = 25 + 144 = 169 = 13^2]].",
            },
            {
              "kind": "h3",
              "text": "Exemplo 5: Medida em Milímetros",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 180]] mm, [[R = \\frac{180}{2} = 90]] mm. Unidades pequenas funcionam da mesma forma, e manter a unidade em milímetros o tempo todo evita qualquer conversão. Em centímetros, a mesma resposta é 9 cm, pois 90 mm equivalem a 9 cm.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 6: Medida Fracionária",
            },
            {
              "kind": "p",
              "text": "Dados [[c = \\frac{15}{2}]] ft, [[R = \\frac{15/2}{2} = \\frac{15}{4}]] ft, que é 3.75 ft. Dividir por 2 significa multiplicar o denominador por 2, então o denominador cresce de 2 para 4. A forma decimal, 3.75 ft, é a mesma resposta escrita de outro modo.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 7: Unidades Diferentes",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 1.2]] m, [[R = \\frac{1.2}{2} = 0.6]] m. Convertendo para centímetros, 0.6 m equivale a 60 cm, porque 1 m é 100 cm. Qualquer uma das unidades está correta, mas a resposta deve indicar qual ela usa.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 8: Medida Decimal Grande",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 125.6]] m, [[R = \\frac{125.6}{2} = 62.8]] m. Dobrar 62.8 devolve 125.6, o que confirma a divisão.",
            },
          ],
        },
        "sec-legs-known": {
          "h2": "Como Encontrar o Circunraio Quando os Dois Catetos São Conhecidos",
          "blocks": [
            {
              "kind": "p",
              "text": "A calculadora desta página pede a hipotenusa, mas muitos problemas dão os dois catetos. Nesse caso, encontre a hipotenusa primeiro com o teorema de Pitágoras, e depois divida-a ao meio. Os dois passos se combinam em uma fórmula, [[R = \\frac{\\sqrt{a^2 + b^2}}{2}]], onde [[a]] e [[b]] são os catetos.",
            },
            {
              "kind": "p",
              "text": "Use [[a = 6]] cm e [[b = 8]] cm. Primeiro eleve os dois catetos ao quadrado e some: [[a^2 + b^2 = 36 + 64 = 100]]. Depois tire a raiz quadrada para obter a hipotenusa: [[c = \\sqrt{100} = 10]] cm. Depois divida-a ao meio: [[R = \\frac{10}{2} = 5]] cm.",
            },
            {
              "kind": "p",
              "text": "A <a href=\"/pythagorean-theorem-calculator/\">calculadora do teorema de Pitágoras</a> encontra uma hipotenusa desconhecida a partir de dois catetos, que é o mesmo primeiro passo usado aqui. A <a href=\"/right-triangle-area-calculator/\">calculadora de área de triângulo retângulo</a> usa os mesmos dois catetos de outra forma, calculando [[A = \\frac{ab}{2}]], que é 24 centímetros quadrados para o triângulo 6-8-10.",
            },
          ],
        },
        "sec-diameter": {
          "h2": "Relação Entre Circunraio e Diâmetro",
          "blocks": [
            {
              "kind": "p",
              "text": "Raio e diâmetro descrevem o mesmo círculo de duas maneiras. O diâmetro [[D]] é a distância em linha reta através do círculo passando pelo seu centro, e o raio [[R]] é a distância do centro até a borda, então [[D = 2R]] e [[R = \\frac{D}{2}]]. Dobrar um raio dá o diâmetro, e dividir um diâmetro ao meio dá o raio.",
            },
            {
              "kind": "p",
              "text": "Para um triângulo retângulo, o diâmetro tem uma segunda identidade: ele é igual à hipotenusa. A hipotenusa se estende pelo circuncírculo de um lado ao outro, passando pelo centro, então [[D = c]]. Combinar as duas relações dá [[c = 2R]] e [[R = \\frac{c}{2}]], que é a fórmula na qual esta página se baseia.",
            },
            {
              "kind": "p",
              "text": "Um exemplo numérico mantém os três comprimentos claros. Em um triângulo com [[c = 18]] cm, o diâmetro é [[D = 18]] cm e o circunraio é [[R = 9]] cm. A hipotenusa, 18 cm, e o diâmetro, 18 cm, são a mesma linha medida em dois papéis, enquanto o raio, 9 cm, é a metade dessa linha.",
            },
          ],
        },
        "sec-vs-inradius": {
          "h2": "Circunraio vs. Inraio de um Triângulo Retângulo",
          "blocks": [
            {
              "kind": "p",
              "text": "O circunraio e o inraio são os dois raios de um triângulo retângulo, e descrevem dois círculos diferentes. O circunraio [[R]] é o raio do circuncírculo, que passa pelos três vértices. O inraio [[r]] é o raio do círculo inscrito, que fica dentro do triângulo e toca os três lados. Um círculo envolve o triângulo, o outro fica dentro dele.",
            },
            {
              "kind": "p",
              "text": "Para um triângulo retângulo, o circunraio é [[R = \\frac{c}{2}]], enquanto o inraio é [[r = \\frac{a + b - c}{2}]], onde [[a]] e [[b]] são os catetos e [[c]] é a hipotenusa. O circunraio precisa apenas da hipotenusa; o inraio precisa dos três lados, porque o quanto o círculo inscrito se encaixa depende da forma do triângulo, não apenas do seu lado mais longo.",
            },
            {
              "kind": "p",
              "text": "Os centros também diferem. O circuncentro é o ponto médio da hipotenusa, na fronteira do triângulo. O incentro fica dentro do triângulo, onde as bissetrizes dos ângulos se encontram, a uma distância [[r]] de cada lado.",
            },
            {
              "kind": "p",
              "text": "Use o triângulo 6-8-10 para ver a diferença em números. O circunraio é [[R = \\frac{10}{2} = 5]] cm, e o inraio é [[r = \\frac{6 + 8 - 10}{2} = \\frac{4}{2} = 2]] cm.",
            },
            {
              "kind": "p",
              "text": "Para problemas sobre o círculo inscrito, use a <a href=\"/right-triangle-inradius-calculator/\">calculadora de inraio de triângulo retângulo</a>, que aplica [[r = \\frac{a + b - c}{2}]] diretamente. A <a href=\"/right-triangle-radius-calculator/\">calculadora de raio de triângulo retângulo</a> cobre os dois raios em uma página quando você precisa compará-los.",
            },
          ],
          "table": {
            "headers": [
              "Recurso",
              "Circunraio R",
              "Inraio r",
            ],
            "rows": [
              [
                "Círculo",
                "Circuncírculo",
                "Círculo inscrito",
              ],
              [
                "Posição",
                "Ao redor do triângulo",
                "Dentro do triângulo",
              ],
              [
                "Contato",
                "Passa pelos vértices",
                "Tangente aos lados",
              ],
              [
                "Fórmula do triângulo retângulo",
                "c/2",
                "(a+b-c)/2",
              ],
              [
                "Centro",
                "Circuncentro",
                "Incentro",
              ],
            ],
          },
          "image": {
            "src": "circumradius-vs-incircle.svg",
            "alt": "Circuncírculo passando pelos vértices ao lado do círculo inscrito tocando os lados, triângulo 6-8-10",
            "caption": "Circuncírculo (R = 5 cm) ao redor do triângulo, círculo inscrito (r = 2 cm) dentro dele, triângulo 6-8-10.",
          },
        },
        "sec-pythagoras": {
          "h2": "Relação Entre o Circunraio e o Teorema de Pitágoras",
          "blocks": [
            {
              "kind": "p",
              "text": "O teorema de Pitágoras afirma que, em um triângulo retângulo, [[a^2 + b^2 = c^2]], onde [[a]] e [[b]] são os catetos e [[c]] é a hipotenusa. É a ligação entre os catetos e a hipotenusa, e, através da hipotenusa, também é uma ligação com o circunraio.",
            },
            {
              "kind": "p",
              "text": "Como [[R = \\frac{c}{2}]], e o teorema dá [[c = \\sqrt{a^2 + b^2}]], a substituição dá [[R = \\frac{\\sqrt{a^2 + b^2}}{2}]]. Essa fórmula combinada encontra o circunraio a partir dos dois catetos em um só passo, sem escrever a hipotenusa separadamente. É o mesmo cálculo em dois passos da seção sobre catetos, escrito como uma única expressão.",
            },
            {
              "kind": "p",
              "text": "Verifique com o triângulo 6-8-10. Os catetos dão [[\\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10]] cm para a hipotenusa, e dividir ao meio dá [[R = 5]] cm. O teorema de Pitágoras fornece a hipotenusa, e a fórmula do circunraio a divide ao meio.",
            },
          ],
        },
        "sec-verify": {
          "h2": "Como Verificar o Cálculo do Circunraio",
          "blocks": [
            {
              "kind": "p",
              "text": "Quatro verificações independentes detectam quase todos os erros. Faça pelo menos uma em cada resposta, e as quatro quando o problema for importante. O exemplo abaixo usa o triângulo 6-8-10, com [[c = 10]] cm e [[R = 5]] cm, o tempo todo.",
            },
            {
              "kind": "h3",
              "text": "Verificação 1: Relação do Diâmetro",
            },
            {
              "kind": "p",
              "text": "Dobre o circunraio e compare com a hipotenusa: [[2R = c]]. Aqui [[2 \\times 5 = 10]] cm, o que corresponde exatamente a c. Se dobrar a sua resposta não devolver a hipotenusa, a divisão por dois deu errado.",
            },
            {
              "kind": "h3",
              "text": "Verificação 2: Relação do Ponto Médio",
            },
            {
              "kind": "p",
              "text": "O circuncentro deve ficar no meio da hipotenusa. Meça de qualquer uma das pontas da hipotenusa até o centro: cada metade deve ser igual a [[R]]. Aqui cada metade é 5 cm, o que corresponde ao circunraio. Um centro que não está no ponto médio não é o circuncentro.",
            },
            {
              "kind": "h3",
              "text": "Verificação 3: Distâncias Iguais",
            },
            {
              "kind": "p",
              "text": "Verifique [[OA = OB = OC = R]]. O centro deve estar à mesma distância dos três vértices. No triângulo 6-8-10, cada distância é 5 cm. Se a distância até o vértice do ângulo reto for diferente da distância até as pontas da hipotenusa, o centro ou o raio está errado.",
            },
            {
              "kind": "h3",
              "text": "Verificação 4: Teorema de Pitágoras",
            },
            {
              "kind": "p",
              "text": "Quando os catetos são conhecidos, verifique [[a^2 + b^2 = c^2]] e compare a hipotenusa resultante com [[2R]]. Aqui [[6^2 + 8^2 = 36 + 64 = 100 = 10^2]], então [[c = 10]] cm, e [[2R = 10]] cm concorda. Esta verificação testa o triângulo inteiro, então detecta erros de rotulagem que a primeira verificação pode deixar passar.",
            },
          ],
        },
        "sec-properties": {
          "h2": "Propriedades Importantes do Circunraio em Triângulos Retângulos",
          "blocks": [
            {
              "kind": "p",
              "text": "Nove propriedades seguem diretamente de [[R = \\frac{c}{2}]]. Cada uma também serve como uma verificação rápida de uma nova resposta.",
            },
            {
              "kind": "list",
              "items": [
                "O circunraio é exatamente a metade da hipotenusa, [[R = \\frac{c}{2}]], sem nenhuma aproximação.",
                "A hipotenusa é o diâmetro do circuncírculo, então [[D = c]] e [[c = 2R]].",
                "O circuncentro fica no ponto médio da hipotenusa, no lado mais longo do triângulo.",
                "O circunraio é sempre positivo para um triângulo não degenerado, pois a hipotenusa é um comprimento positivo.",
                "O circunraio é igual à metade da hipotenusa, e como a hipotenusa é o lado mais longo, o circunraio é menor que a hipotenusa. Se ele é maior ou menor que um dado cateto depende do triângulo: em um triângulo 6-8-10, [[R = 5]] cm é menor que o cateto de 8 cm, enquanto em um triângulo 5-12-13, [[R = 6.5]] cm é maior que o cateto de 5 cm.",
                "Aumentar a hipotenusa aumenta o circunraio proporcionalmente, porque [[R]] é a metade de [[c]].",
                "Dobrar a hipotenusa dobra o circunraio: se [[c]] se torna [[2c]], então [[R]] se torna [[c]].",
                "Os catetos não são necessários quando a hipotenusa já é conhecida; a fórmula usa apenas [[c]].",
                "Os três vértices estão igualmente distantes do circuncentro, com [[AO = BO = CO = R]].",
              ],
            },
          ],
        },
        "sec-mistakes": {
          "h2": "Erros Comuns ao Calcular o Circunraio",
          "blocks": [
            {
              "kind": "steps",
              "steps": [
                "Digitar um cateto em vez da hipotenusa: dividir um cateto ao meio dá metade de um cateto, não o circunraio. Em um triângulo 6-8-10, dividir 6 cm ao meio dá 3 cm, enquanto o circunraio verdadeiro é 5 cm.",
                "Esquecer de dividir por dois: informar a hipotenusa como resposta dá o diâmetro, não o raio. Com [[c = 10]] cm, a resposta é 5 cm, não 10 cm.",
                "Tratar a hipotenusa como o raio: este é o mesmo erro visto da outra direção. A hipotenusa abrange toda a largura do círculo, então é o diâmetro, e o raio é a sua metade.",
                "Confundir circunraio com inraio: o inraio de um triângulo 6-8-10 é 2 cm, enquanto o circunraio é 5 cm. Os dois círculos são diferentes, e as suas fórmulas também são diferentes.",
                "Confundir o circuncentro com o vértice do ângulo reto: o circuncentro é o ponto médio da hipotenusa, não o vértice C. O vértice C é um ponto do círculo, a uma distância [[R]] do centro.",
                "Supor que o centro está sempre dentro de um triângulo: em um triângulo retângulo, o circuncentro fica sobre a hipotenusa, e em um triângulo obtusângulo ele fica fora.",
                "Usar a fórmula em um triângulo qualquer: [[R = \\frac{c}{2}]] vale apenas para triângulos retângulos. Para um triângulo qualquer, use [[R = \\frac{abc}{4A}]], onde [[A]] é a área.",
                "Misturar unidades de medida: uma hipotenusa em metros e uma resposta informada em centímetros diferem por um fator de 100. Converta primeiro, depois divida ao meio.",
                "Usar valores zero ou negativos para a hipotenusa: um comprimento não pode ser zero nem negativo em um triângulo real. Uma entrada zero ou negativa significa que a medida está errada.",
                "Confundir diâmetro e raio: o diâmetro é o dobro do raio. Se a sua resposta é o dobro do valor esperado, você provavelmente informou [[D]] em vez de [[R]].",
                "Supor que o circuncírculo toca os três lados: o circuncírculo passa pelos vértices e toca o triângulo apenas nesses três pontos. O círculo que toca os lados é o círculo inscrito.",
                "Esquecer que o círculo passa pelos três vértices: os três devem estar sobre ele, e é exatamente isso que [[OA = OB = OC]] garante.",
              ],
            },
          ],
        },
        "sec-applications": {
          "h2": "Aplicações Práticas do Circunraio",
          "blocks": [
            {
              "kind": "p",
              "text": "O uso mais direto é o dever de casa de geometria e o trabalho em sala de aula, onde os problemas de circunraio testam se os alunos conseguem identificar a hipotenusa e aplicar [[R = \\frac{c}{2}]] em vez de recorrer a uma fórmula mais complicada. Os exercícios de construção de círculos usam a mesma ideia: dado um triângulo retângulo, desenhe o seu circuncírculo dividindo a hipotenusa ao meio e ajustando um compasso para esse raio.",
            },
            {
              "kind": "p",
              "text": "O desenho técnico usa a relação quando um triângulo retângulo deve ser colocado dentro de uma moldura circular ou quando um arco circular deve passar por três pontos dados. A modelagem geométrica e a geometria analítica usam o mesmo fato para colocar o circuncentro de um triângulo no ponto médio da sua hipotenusa.",
            },
            {
              "kind": "p",
              "text": "Os professores usam o tema como uma aula de ligação entre triângulos e círculos, porque é um dos primeiros lugares onde os dois assuntos se encontram. O teorema de Tales, a propriedade do ponto médio e a relação entre raio e diâmetro aparecem todos em uma única figura, então o circunraio é uma forma compacta de revisá-los juntos.",
            },
          ],
        },
        "sec-practice": {
          "h2": "Problemas de Prática com Respostas",
          "blocks": [
            {
              "kind": "p",
              "text": "Tente resolver os seis problemas no papel antes de ler as respostas. Nenhum dos valores repete os exemplos resolvidos, e cada solução é apresentada por completo abaixo.",
            },
            {
              "kind": "h3",
              "text": "Problema 1: Número Inteiro Básico",
            },
            {
              "kind": "p",
              "text": "Um triângulo retângulo tem hipotenusa [[c = 26]] cm. Encontre o circunraio [[R]].",
            },
            {
              "kind": "h3",
              "text": "Problema 2: Hipotenusa Decimal",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 9.4]] m, encontre o circunraio [[R]] em metros.",
            },
            {
              "kind": "h3",
              "text": "Problema 3: Medida Fracionária",
            },
            {
              "kind": "p",
              "text": "Dados [[c = \\frac{9}{4}]] ft, encontre [[R]] como fração, depois como decimal.",
            },
            {
              "kind": "h3",
              "text": "Problema 4: Conversão de Unidades",
            },
            {
              "kind": "p",
              "text": "Um triângulo retângulo tem hipotenusa [[c = 240]] cm. Encontre o circunraio em metros.",
            },
            {
              "kind": "h3",
              "text": "Problema 5: Encontrar a Hipotenusa a Partir de Dois Catetos",
            },
            {
              "kind": "p",
              "text": "Um triângulo retângulo tem catetos [[a = 9]] cm e [[b = 12]] cm. Encontre a hipotenusa, depois o circunraio.",
            },
            {
              "kind": "h3",
              "text": "Problema 6: Circunraio ou Inraio?",
            },
            {
              "kind": "p",
              "text": "Um triângulo retângulo tem catetos de 5 cm e 12 cm e hipotenusa de 13 cm. Encontre o circunraio [[R]] e o inraio [[r]], e diga a qual círculo cada um pertence.",
            },
            {
              "kind": "h3",
              "text": "Respostas dos Problemas de Prática",
            },
            {
              "kind": "p",
              "text": "Resposta 1: [[R = \\frac{26}{2} = 13]] cm. Verificação: [[2 \\times 13 = 26]] cm.",
            },
            {
              "kind": "p",
              "text": "Resposta 2: [[R = \\frac{9.4}{2} = 4.7]] m. Verificação: [[2 \\times 4.7 = 9.4]] m.",
            },
            {
              "kind": "p",
              "text": "Resposta 3: [[R = \\frac{9/4}{2} = \\frac{9}{8}]] ft, que é 1.125 ft. Dividir por 2 dobra o denominador de 4 para 8.",
            },
            {
              "kind": "p",
              "text": "Resposta 4: [[R = \\frac{240}{2} = 120]] cm, e 120 cm equivalem a 1.2 m, pois 100 cm são 1 m.",
            },
            {
              "kind": "p",
              "text": "Resposta 5: [[c = \\sqrt{9^2 + 12^2} = \\sqrt{81 + 144} = \\sqrt{225} = 15]] cm, depois [[R = \\frac{15}{2} = 7.5]] cm.",
            },
            {
              "kind": "p",
              "text": "Resposta 6: O circunraio pertence ao circuncírculo, [[R = \\frac{13}{2} = 6.5]] cm, e o inraio pertence ao círculo inscrito, [[r = \\frac{5 + 12 - 13}{2} = \\frac{4}{2} = 2]] cm. O circuncírculo passa pelos vértices; o círculo inscrito toca os lados.",
            },
          ],
        },
      },
      "relatedHeading": "Explore Calculadoras Relacionadas de Triângulo Retângulo",
      "relatedIntro": "Cada calculadora abaixo trata de uma tarefa específica de triângulo retângulo, então escolha a ferramenta que corresponde à medida que você precisa encontrar.",
      "relatedItems": [
        "Calculadora de Raio de Triângulo Retângulo",
        "Calculadora de Inraio de Triângulo Retângulo",
        "Calculadora de Lados de Triângulo Retângulo",
        "Calculadora de Área de Triângulo Retângulo",
        "Calculadora do Teorema de Pitágoras",
      ],
      "faqHeading": "Perguntas Frequentes",
      "faqs": [
        {
          "question": "Qual é a fórmula do circunraio de um triângulo retângulo?",
          "answer": "A fórmula é [[R = \\frac{c}{2}]], onde [[R]] é o circunraio e [[c]] é a hipotenusa. Identifique o lado oposto ao ângulo reto e depois divida o seu comprimento por dois. Por exemplo, uma hipotenusa de 10 cm dá um circunraio de 5 cm.",
        },
        {
          "question": "Por que a hipotenusa é o diâmetro do circuncírculo?",
          "answer": "O ponto médio da hipotenusa está igualmente distante dos três vértices, então é o circuncentro. A hipotenusa passa por esse centro com as duas pontas no círculo, que é a definição de um diâmetro. Dividi-la ao meio, portanto, dá o raio.",
        },
        {
          "question": "Onde fica o circuncentro de um triângulo retângulo?",
          "answer": "O circuncentro fica no ponto médio da hipotenusa, no lado mais longo do triângulo. Ele está igualmente distante dos três vértices, com [[AO = BO = CO = R]]. Não é o vértice do ângulo reto, que é um ponto do círculo.",
        },
        {
          "question": "O que significa circunraio?",
          "answer": "Circunraio significa o raio do circuncírculo, o círculo que passa pelos três vértices do triângulo. É a distância do circuncentro até qualquer vértice. Em um triângulo retângulo, é igual à metade da hipotenusa.",
        },
        {
          "question": "Preciso dos dois catetos para calcular o circunraio?",
          "answer": "Não. Só a hipotenusa basta, porque [[R = \\frac{c}{2}]]. Os catetos só são necessários quando a hipotenusa é desconhecida; nesse caso, encontre-a primeiro com [[c = \\sqrt{a^2 + b^2}]] e depois divida-a ao meio. É por isso que esta calculadora pede apenas um valor, e isso mantém cada cálculo curto e simples.",
        },
        {
          "question": "O circunraio é a metade da hipotenusa?",
          "answer": "Sim, sempre, para um triângulo retângulo. A hipotenusa é o diâmetro do circuncírculo, e um raio é a metade de um diâmetro, então [[R = \\frac{c}{2}]]. Dobrar o circunraio sempre devolve a hipotenusa. Por exemplo, uma hipotenusa de 14 cm dá um circunraio de 7 cm, e dobrar 7 cm devolve 14 cm.",
        },
        {
          "question": "Circunraio é o mesmo que inraio?",
          "answer": "Não. O circunraio é o raio do círculo que passa pelos vértices, [[R = \\frac{c}{2}]], enquanto o inraio é o raio do círculo dentro do triângulo que toca os seus lados, [[r = \\frac{a + b - c}{2}]]. Em um triângulo 6-8-10, eles são 5 cm e 2 cm.",
        },
        {
          "question": "O circuncentro pode ficar fora de um triângulo?",
          "answer": "Sim, para um triângulo obtusângulo, o circuncentro fica fora. Para um triângulo acutângulo, ele fica dentro. Um triângulo retângulo é o caso limite: o seu circuncentro fica sobre a hipotenusa, exatamente no seu ponto médio. Então o centro nunca fica dentro da região triangular de um triângulo retângulo, mas também nunca fica fora do triângulo.",
        },
        {
          "question": "Como o teorema de Tales se relaciona com o circunraio?",
          "answer": "O teorema de Tales diz que um ângulo subtendido por um diâmetro é um ângulo reto, e o seu recíproco diz que a hipotenusa de um triângulo retângulo é um diâmetro. Isso faz do ponto médio da hipotenusa o centro e da metade da hipotenusa o raio.",
        },
        {
          "question": "Posso encontrar o circunraio usando os dois catetos?",
          "answer": "Sim. Primeiro encontre a hipotenusa com [[c = \\sqrt{a^2 + b^2}]], depois divida-a ao meio: [[R = \\frac{\\sqrt{a^2 + b^2}}{2}]]. Para os catetos 6 cm e 8 cm, a hipotenusa é 10 cm e o circunraio é 5 cm. Use os mesmos dois passos para qualquer par de catetos, e verifique o resultado com o teste do diâmetro.",
        },
        {
          "question": "O que acontece se a hipotenusa dobrar?",
          "answer": "O circunraio também dobra, porque [[R]] é a metade de [[c]]. Se uma hipotenusa de 10 cm dá [[R = 5]] cm, uma hipotenusa de 20 cm dá [[R = 10]] cm. A relação é diretamente proporcional, então triplicar a hipotenusa também triplica o circunraio.",
        },
        {
          "question": "O circuncírculo passa pelos três vértices?",
          "answer": "Sim. Essa é a definição de um circuncírculo: um círculo que passa por todos os vértices do triângulo. Em um triângulo retângulo, o centro é o ponto médio da hipotenusa e cada vértice fica exatamente a [[R]] dele.",
        },
      ],
    },
};
