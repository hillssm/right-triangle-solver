// radiusGuideTranslations.bpt.ts: Right Triangle Radius
// Guide (Page 37 of 45) translation.
export const RADIUS_B3_PT = {
  "pt": {
      "faqHeading": "Perguntas Frequentes",
      "faqs": [
        {
          "answer": "A fórmula é [[r = \\frac{a + b - c}{2}]], em que a e b são os dois catetos e c é a hipotenusa. Some os catetos, subtraia a hipotenusa e divida por 2. Para um triângulo 6-8-10, [[r = \\frac{6 + 8 - 10}{2} = 2]] cm.",
          "question": "Qual é a fórmula do inraio de um triângulo retângulo?",
        },
        {
          "answer": "A fórmula é [[R = \\frac{c}{2}]], em que c é a hipotenusa completa. A hipotenusa é o diâmetro do círculo circunscrito, por isso a metade dela é o raio. Para uma hipotenusa de 10 cm, [[R = \\frac{10}{2} = 5]] cm.",
          "question": "Qual é a fórmula do circunraio de um triângulo retângulo?",
        },
        {
          "answer": "O inraio é o raio do círculo inscrito, o círculo dentro do triângulo que toca os três lados. O circunraio é o raio do círculo circunscrito, o círculo ao redor do triângulo que passa pelos três vértices. Em um triângulo 6-8-10, [[r = 2]] cm e [[R = 5]] cm.",
          "question": "Qual é a diferença entre inraio e circunraio?",
        },
        {
          "answer": "Você precisa dos três comprimentos dos lados: o cateto a, o cateto b e a hipotenusa c. A fórmula [[r = \\frac{a + b - c}{2}]] usa cada lado uma vez, por isso nenhum lado pode ficar de fora. Os três comprimentos também precisam formar um triângulo retângulo válido.",
          "question": "Quais medidas são necessárias para calcular o inraio?",
        },
        {
          "answer": "Em um triângulo retângulo, a hipotenusa é o diâmetro do círculo circunscrito, por isso o circunraio é simplesmente metade da hipotenusa, [[R = \\frac{c}{2}]]. Os catetos não entram no cálculo, e é por isso que uma medida basta.",
          "question": "Por que o circunraio exige apenas a hipotenusa?",
        },
        {
          "answer": "O incentro fica dentro do triângulo, no ponto onde as três bissetrizes se encontram. É o centro do círculo inscrito e fica à mesma distância, o inraio r, de cada um dos três lados.",
          "question": "Onde fica o incentro?",
        },
        {
          "answer": "Em um triângulo retângulo, o circuncentro fica no ponto médio da hipotenusa. Esse ponto está à mesma distância, o circunraio R, dos três vértices, e é por isso que o círculo circunscrito passa por cada um deles.",
          "question": "Onde fica o circuncentro?",
        },
        {
          "answer": "Não. Para um triângulo retângulo válido e não degenerado, o circunraio é sempre maior que o inraio. No triângulo 6-8-10, [[R = 5]] cm é mais que o dobro de [[r = 2]] cm. Se os seus números disserem o contrário, confira as entradas e os rótulos.",
          "question": "O inraio pode ser maior que o circunraio?",
        },
        {
          "answer": "Sim, mas apenas para triângulos retângulos. O ângulo em um semicírculo é um ângulo reto, por isso o vértice do ângulo reto fica no círculo que tem a hipotenusa como diâmetro. Isso é o teorema de Tales, e ele não vale para triângulos que não são retângulos.",
          "question": "A hipotenusa é o diâmetro do círculo circunscrito?",
        },
        {
          "answer": "Recalcule [[r = \\frac{a + b - c}{2}]] a partir dos comprimentos originais dos lados e depois confira a mesma resposta com [[r = \\frac{Area}{s}]], usando [[Area = \\frac{ab}{2}]] e [[s = \\frac{a + b + c}{2}]]. Os dois caminhos precisam dar o mesmo valor.",
          "question": "Como posso verificar o meu resultado do inraio?",
        },
        {
          "answer": "Sim. Primeiro encontre a área com [[Area = \\frac{ab}{2}]] e o semiperímetro com [[s = \\frac{a + b + c}{2}]] e depois divida: [[r = \\frac{Area}{s}]]. Para o triângulo 6-8-10, [[r = \\frac{24}{12} = 2]] cm.",
          "question": "Posso calcular o inraio usando área e semiperímetro?",
        },
        {
          "answer": "Elas medem círculos diferentes. O inraio vem de um círculo apertado dentro do triângulo, por isso depende de como os três lados se fecham ao redor dele. O circunraio vem de um círculo que passa pelos três vértices e, para um triângulo retângulo, só a hipotenusa fixa esse círculo como seu diâmetro.",
          "question": "Por que a fórmula do inraio é diferente da fórmula do circunraio?",
        },
      ],
      "relatedHeading": "Explore as Calculadoras Relacionadas de Triângulo Retângulo",
      "relatedIntro": "Cada calculadora abaixo resolve uma tarefa específica de triângulo retângulo, por isso escolha a ferramenta que corresponde às medidas que você já conhece.",
      "relatedItems": [
        "Calculadora de Inraio de Triângulo Retângulo",
        "Calculadora de Circunraio de Triângulo Retângulo",
        "Calculadora de Área de Triângulo Retângulo",
        "Calculadora de Lados de Triângulo Retângulo",
        "Calculadora de Perímetro e Semiperímetro de Triângulo Retângulo",
      ],
      "sections": {
        "sec-intro": {
          "blocks": [
            {
              "kind": "p",
              "text": "Um triângulo retângulo tem dois círculos importantes associados a ele: o círculo inscrito, que fica dentro do triângulo e toca os três lados, e o círculo circunscrito, que fica ao redor do triângulo e passa pelos três vértices. Esta calculadora encontra o raio de cada círculo, usando um modo separado para cada um.",
            },
            {
              "kind": "p",
              "text": "O inraio é [[r = \\frac{a + b - c}{2}]], em que a e b são os catetos e c é a hipotenusa. O circunraio é [[R = \\frac{c}{2}]], que precisa apenas da hipotenusa. As fórmulas diferem porque descrevem círculos diferentes.",
            },
            {
              "kind": "p",
              "text": "Tome um triângulo retângulo 6-8-10 com [[a = 6]] cm, [[b = 8]] cm e [[c = 10]] cm. O inraio é [[r = \\frac{6 + 8 - 10}{2} = 2]] cm, e o circunraio é [[R = \\frac{10}{2} = 5]] cm. O círculo inscrito é um pequeno círculo de raio 2 cm encaixado dentro do triângulo, enquanto o círculo circunscrito é um círculo bem maior de raio 5 cm que passa pelos vértices.",
            },
            {
              "kind": "p",
              "text": "A calculadora mantém os dois modos separados porque eles precisam de medidas diferentes: o modo do inraio precisa dos três comprimentos dos lados, enquanto o modo do circunraio precisa apenas da hipotenusa. Escolha o modo que corresponde às medidas que você tem.",
            },
          ],
          "h2": "Calculadora de Raio de Triângulo Retângulo",
        },
        "sec-calculate": {
          "blocks": [
            {
              "kind": "p",
              "text": "Esta página oferece dois modos de calculadora. O Modo 1 encontra o inraio, o raio do círculo dentro do triângulo. O Modo 2 encontra o circunraio, o raio do círculo ao redor do triângulo.",
            },
            {
              "kind": "h3",
              "text": "Modo 1: Calculadora de Inraio",
            },
            {
              "kind": "p",
              "text": "O modo do inraio precisa de três entradas: o cateto a, o cateto b e a hipotenusa c. Ele usa [[r = \\frac{a + b - c}{2}]]. Escolha-o quando conhecer os três comprimentos dos lados e quiser o raio do círculo inscrito.",
            },
            {
              "kind": "h3",
              "text": "Modo 2: Calculadora de Circunraio",
            },
            {
              "kind": "p",
              "text": "O modo do circunraio precisa de apenas uma entrada: a hipotenusa c. Ele usa [[R = \\frac{c}{2}]]. Escolha-o quando conhecer a hipotenusa e quiser o raio do círculo circunscrito.",
            },
            {
              "kind": "p",
              "text": "Antes de calcular, confira se todas as medidas usam a mesma unidade, por isso converta primeiro se não usarem. Depois selecione o modo, digite as medidas, clique no botão Calcular desse modo e leia o resultado na unidade que você digitou. Use Redefinir para limpar os campos antes de um novo problema.",
            },
            {
              "kind": "p",
              "text": "A página não calcula ângulos, lados desconhecidos, área ou perímetro diretamente; as calculadoras relacionadas no rodapé da página tratam desses assuntos. Se você conhece apenas a hipotenusa, pode encontrar o circunraio, mas não o inraio.",
            },
          ],
          "h2": "Calcular o Inraio ou o Circunraio de um Triângulo Retângulo",
        },
        "sec-what-inradius": {
          "blocks": [
            {
              "kind": "p",
              "text": "O inraio é o raio do círculo inscrito, o maior círculo que cabe dentro de um triângulo. Ele toca cada um dos três lados em exatamente um ponto, e é a distância do centro do círculo até qualquer lado, medida em ângulo reto com o lado.",
            },
            {
              "kind": "p",
              "text": "O centro do círculo inscrito é chamado de incentro, rotulado I, o ponto onde as três bissetrizes se encontram. Como fica sobre cada bissetriz, está à mesma distância dos três lados, e essa distância comum é o inraio r, medido perpendicularmente a cada lado.",
            },
            {
              "kind": "p",
              "text": "Em um triângulo retângulo, o incentro sempre fica dentro do triângulo, perto do ângulo reto. Para o triângulo 6-8-10, o inraio é [[r = \\frac{6 + 8 - 10}{2} = 2]] cm, por isso o círculo inscrito é um círculo de raio 2 cm centrado em I.",
            },
            {
              "kind": "p",
              "text": "Um erro comum é medir o inraio do incentro até um vértice. Essa distância é maior que r e não é um raio do círculo inscrito: o inraio sempre termina em um lado, nunca em um vértice.",
            },
          ],
          "h2": "O Que É o Inraio de um Triângulo Retângulo?",
          "image": {
            "alt": "Triângulo retângulo ABC com ângulo reto em C, círculo inscrito tocando os três lados, incentro I e inraio r mostrado perpendicular a um lado",
            "caption": "O círculo inscrito toca os três lados por dentro, com centro I e raio r = 2 cm no triângulo 6-8-10.",
            "src": "radius-incircle.svg",
          },
        },
        "sec-what-circumradius": {
          "blocks": [
            {
              "kind": "p",
              "text": "O circunraio é o raio do círculo circunscrito, o círculo que passa pelos três vértices de um triângulo. Cada vértice fica exatamente sobre o círculo, por isso a distância do centro até qualquer vértice é a mesma, e essa distância é o circunraio R.",
            },
            {
              "kind": "p",
              "text": "O centro do círculo circunscrito é chamado de circuncentro, rotulado O, o ponto onde as mediatrizes dos três lados se encontram. Ficar sobre cada mediatriz faz com que O esteja à mesma distância dos três vértices.",
            },
            {
              "kind": "p",
              "text": "Um triângulo retângulo tem um circuncentro especial: ele fica no ponto médio da hipotenusa. A hipotenusa é o diâmetro do círculo circunscrito, por isso a metade dela é o circunraio: [[R = \\frac{c}{2}]]. Para o triângulo 6-8-10, [[R = \\frac{10}{2} = 5]] cm, e o circuncentro O fica no ponto médio da hipotenusa de 10 cm.",
            },
            {
              "kind": "p",
              "text": "O circunraio é medido do circuncentro até qualquer vértice, nunca até um lado. Em um triângulo retângulo, o vértice do ângulo reto também fica sobre o círculo circunscrito: o círculo ao redor do triângulo passa pelo canto do ângulo reto também.",
            },
          ],
          "h2": "O Que É o Circunraio de um Triângulo Retângulo?",
          "image": {
            "alt": "Triângulo retângulo ABC com ângulo reto em C, círculo circunscrito passando pelos três vértices, circuncentro O no ponto médio da hipotenusa AB e circunraio R",
            "caption": "O círculo circunscrito passa pelos três vértices, com centro O no ponto médio da hipotenusa e R = 5 cm.",
            "src": "radius-circumcircle.svg",
          },
        },
        "sec-difference": {
          "blocks": [
            {
              "kind": "p",
              "text": "Os dois raios descrevem dois círculos diferentes. O círculo inscrito fica apertado dentro do triângulo e toca os lados, enquanto o círculo circunscrito envolve o triângulo e passa pelos vértices. Um círculo é pequeno e fica dentro, o outro é grande e fica fora, e seus centros ficam em lugares diferentes.",
            },
            {
              "kind": "p",
              "text": "Os centros também diferem. O incentro é o ponto de encontro das bissetrizes e fica dentro do triângulo, perto do ângulo reto. O circuncentro é o ponto de encontro das mediatrizes e fica no ponto médio da hipotenusa, na borda do triângulo.",
            },
            {
              "kind": "p",
              "text": "As entradas também diferem: o inraio precisa dos três lados, porque o círculo inscrito é moldado pela forma como os três lados se fecham ao redor dele, enquanto o circunraio precisa apenas da hipotenusa, porque só a hipotenusa fixa o círculo circunscrito como seu diâmetro. No triângulo 6-8-10, [[r = 2]] cm e [[R = 5]] cm.",
            },
            {
              "kind": "p",
              "text": "A tabela abaixo coloca a comparação em um só lugar. Leia qualquer linha para ver como a mesma característica se aplica a cada círculo e use-a como uma verificação rápida sempre que um problema mencionar um raio sem dizer qual é.",
            },
          ],
          "h2": "Diferença Entre Inraio e Circunraio",
          "image": {
            "alt": "Triângulo retângulo 6-8-10 mostrando o pequeno círculo inscrito dentro, com raio de 2 cm, e o círculo circunscrito maior ao redor, com raio de 5 cm, com incentro I e circuncentro O rotulados",
            "caption": "Mesmo triângulo, dois círculos: o círculo inscrito (r = 2 cm) dentro e o círculo circunscrito (R = 5 cm) ao redor.",
            "src": "radius-vs.svg",
          },
          "table": {
            "headers": [
              "Característica",
              "Inraio r",
              "Circunraio R",
            ],
            "rows": [
              [
                "Círculo",
                "Círculo inscrito",
                "Círculo circunscrito",
              ],
              [
                "Posição",
                "Dentro do triângulo",
                "Ao redor do triângulo",
              ],
              [
                "Contato",
                "Tangente aos três lados",
                "Passa pelos três vértices",
              ],
              [
                "Centro",
                "Incentro",
                "Circuncentro",
              ],
              [
                "Fórmula",
                "(a + b - c) / 2",
                "c / 2",
              ],
              [
                "Entradas necessárias",
                "a, b, c",
                "c",
              ],
              [
                "Medição",
                "Do centro até um lado",
                "Do centro até um vértice",
              ],
            ],
          },
        },
        "sec-inradius-formula": {
          "blocks": [
            {
              "kind": "p",
              "text": "A fórmula do inraio para um triângulo retângulo é:",
            },
            {
              "kind": "p",
              "text": "[[[r = \\frac{a + b - c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Aqui a é o primeiro cateto, b é o segundo cateto e c é a hipotenusa, o lado oposto ao ângulo reto. A fórmula precisa dos três comprimentos dos lados, porque o círculo inscrito toca os três lados e seu tamanho depende de todos eles. Deixar um lado de fora tira o sentido da resposta.",
            },
            {
              "kind": "p",
              "text": "Resolva passo a passo com o triângulo 6-8-10. Some os catetos: [[6 + 8 = 14]]. Subtraia a hipotenusa: [[14 - 10 = 4]]. Divida por 2: [[r = \\frac{4}{2} = 2]] cm. O resultado carrega a mesma unidade dos comprimentos dos lados, centímetros aqui.",
            },
            {
              "kind": "p",
              "text": "O mesmo valor vem de um caminho pela área: [[r = \\frac{Area}{s}]], em que [[s = \\frac{a + b + c}{2}]]. Para o triângulo 6-8-10, a área é 24 cm² e o semiperímetro é 12 cm, por isso [[r = \\frac{24}{12} = 2]] cm. A <a href=\"/right-triangle-area-calculator/\">calculadora de área de triângulo retângulo</a> encontra a área quando você precisar dela para esta verificação.",
            },
            {
              "kind": "p",
              "text": "Uma terceira forma, [[r = \\frac{ab}{a + b + c}]], é a mesma fórmula com outra roupagem. É a forma da área com [[Area = \\frac{ab}{2}]] e [[s = \\frac{a + b + c}{2}]] substituídos, e a seção de demonstração abaixo mostra como ela volta a simplificar para [[r = \\frac{a + b - c}{2}]].",
            },
          ],
          "h2": "Fórmula do Inraio de Triângulo Retângulo",
          "image": {
            "alt": "Triângulo retângulo com catetos a e b e hipotenusa c rotulados, mostrando a fórmula do inraio r igual a a mais b menos c sobre 2",
            "caption": "Fórmula do inraio: r = (a + b - c) / 2, usando os três comprimentos dos lados do triângulo.",
            "src": "radius-inradius-formula.svg",
          },
        },
        "sec-why-inradius": {
          "blocks": [
            {
              "kind": "p",
              "text": "A demonstração começa no incentro I. Como I está à mesma distância r dos três lados, o triângulo pode ser dividido em três triângulos menores, cada um com I como um vértice e um lado do triângulo maior como sua base.",
            },
            {
              "kind": "p",
              "text": "Cada triângulo pequeno tem altura r, por isso sua área é metade da base vezes r. As três áreas são [[\\frac{ra}{2}]], [[\\frac{rb}{2}]] e [[\\frac{rc}{2}]]. Somá-las dá a área do triângulo inteiro:",
            },
            {
              "kind": "p",
              "text": "[[[Area = \\frac{ra}{2} + \\frac{rb}{2} + \\frac{rc}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Colocar r em evidência dá [[Area = \\frac{r(a + b + c)}{2}]]. Como o semiperímetro é [[s = \\frac{a + b + c}{2}]], isso se torna a relação simples:",
            },
            {
              "kind": "p",
              "text": "[[[Area = r \\times s]]]",
            },
            {
              "kind": "p",
              "text": "Reorganizar dá [[r = \\frac{Area}{s}]]. Para um triângulo retângulo, [[Area = \\frac{ab}{2}]], por isso [[r = \\frac{ab}{a + b + c}]]. O teorema de Pitágoras termina o trabalho: como [[a^2 + b^2 = c^2]], [[(a + b)^2 - c^2 = 2ab]], por isso [[\\frac{ab}{a + b + c} = \\frac{a + b - c}{2}]]. As duas formas são o mesmo fato, visto de dois lados.",
            },
          ],
          "h2": "Por Que a Fórmula do Inraio Funciona?",
        },
        "sec-circumradius-formula": {
          "blocks": [
            {
              "kind": "p",
              "text": "A fórmula do circunraio para um triângulo retângulo é:",
            },
            {
              "kind": "p",
              "text": "[[[R = \\frac{c}{2}]]]",
            },
            {
              "kind": "p",
              "text": "Aqui R é o circunraio e c é a hipotenusa completa. A fórmula tem apenas uma entrada porque só a hipotenusa determina o círculo circunscrito: ela é o diâmetro desse círculo, e um raio é metade de um diâmetro.",
            },
            {
              "kind": "p",
              "text": "O cálculo é o mais curto deste guia. Com [[c = 10]] cm, [[R = \\frac{10}{2} = 5]] cm. O circuncentro O fica no ponto médio da hipotenusa, a 5 cm de cada vértice.",
            },
            {
              "kind": "p",
              "text": "A forma do diâmetro diz a mesma coisa ao contrário: [[c = 2R]]. Se você conhece o circunraio e precisa da hipotenusa, dobre-o. Um circunraio de 5 cm significa uma hipotenusa de 10 cm, e um circunraio de 6.5 cm significa uma hipotenusa de 13 cm.",
            },
            {
              "kind": "p",
              "text": "Este atalho pertence apenas aos triângulos retângulos. Em um triângulo sem ângulo reto, o circunraio depende dos três lados, por isso nunca leve [[R = \\frac{c}{2}]] para um deles. A <a href=\"/right-triangle-circumradius-calculator/\">calculadora de circunraio de triângulo retângulo</a> dedicada cobre este cálculo em todos os detalhes.",
            },
          ],
          "h2": "Fórmula do Circunraio de Triângulo Retângulo",
          "image": {
            "alt": "Triângulo retângulo com hipotenusa c mostrada como o diâmetro do círculo circunscrito, seu ponto médio O marcado e a fórmula R igual a c sobre 2",
            "caption": "Fórmula do circunraio: R = c / 2, com a hipotenusa como o diâmetro do círculo circunscrito.",
            "src": "radius-circumradius-formula.svg",
          },
        },
        "sec-why-diameter": {
          "blocks": [
            {
              "kind": "p",
              "text": "Tome o triângulo ABC com o ângulo reto em C e seja O o ponto médio da hipotenusa AB. A afirmação é que O é o circuncentro, à mesma distância de A, B e C. Por construção, [[AO = BO]], já que O é o ponto médio, por isso a única distância a conferir é CO.",
            },
            {
              "kind": "p",
              "text": "Trace a mediana de C até o ponto médio O. Em um triângulo retângulo, essa mediana é exatamente metade da hipotenusa, por isso [[CO = \\frac{AB}{2}]], o que faz [[AO = BO = CO]]. Assim, O é equidistante dos três vértices e é o circuncentro.",
            },
            {
              "kind": "p",
              "text": "Como AB passa por O e suas duas extremidades ficam sobre o círculo circunscrito, AB é um diâmetro desse círculo. Um diâmetro é o dobro de um raio, por isso [[AB = 2R]], que é o mesmo que [[R = \\frac{c}{2}]]. A hipotenusa ganha seu papel de diâmetro a partir do ângulo reto, e não apenas do seu comprimento.",
            },
            {
              "kind": "p",
              "text": "O teorema de Tales afirma a mesma ideia na direção oposta: qualquer ângulo inscrito em um semicírculo é um ângulo reto, por isso a hipotenusa de um triângulo retângulo precisa ser o diâmetro do círculo que passa pelos seus vértices. O diagrama abaixo mostra os dois centros de uma só vez: o incentro I dentro do triângulo e o circuncentro O no ponto médio da hipotenusa.",
            },
          ],
          "h2": "Por Que a Hipotenusa É o Diâmetro do Círculo Circunscrito?",
          "image": {
            "alt": "Triângulo retângulo mostrando o incentro I dentro do triângulo, onde as bissetrizes se encontram, e o circuncentro O no ponto médio da hipotenusa, onde as mediatrizes se encontram",
            "caption": "Dois centros diferentes: I é o ponto de encontro das bissetrizes, O é o ponto de encontro das mediatrizes.",
            "src": "radius-centers.svg",
          },
        },
        "sec-how-to-use": {
          "blocks": [
            {
              "kind": "p",
              "text": "Siga a lista para o modo de que você precisa. As duas começam com a rotulagem correta do triângulo, porque trocar um cateto pela hipotenusa é a fonte mais comum de uma resposta errada.",
            },
            {
              "kind": "h3",
              "text": "Usando o Modo do Inraio",
            },
            {
              "kind": "steps",
              "steps": [
                "Identifique o cateto a, o primeiro lado que forma o ângulo reto.",
                "Identifique o cateto b, o segundo lado que forma o ângulo reto.",
                "Identifique a hipotenusa c, o lado oposto ao ângulo reto e o lado mais longo.",
                "Selecione o modo Calculadora de Inraio.",
                "Digite os três comprimentos dos lados na mesma unidade.",
                "Selecione a unidade que corresponde às suas medidas.",
                "Clique em Calcular Inraio r.",
                "Revise o resultado e confira se ele é positivo e menor que qualquer um dos catetos.",
                "Use Redefinir ao começar outro cálculo.",
              ],
            },
            {
              "kind": "p",
              "text": "Antes de clicar em Calcular, confirme que os três comprimentos podem formar um triângulo retângulo: a hipotenusa precisa ser maior que qualquer um dos catetos, e [[a^2 + b^2]] precisa ser igual a [[c^2]].",
            },
            {
              "kind": "h3",
              "text": "Usando o Modo do Circunraio",
            },
            {
              "kind": "steps",
              "steps": [
                "Identifique a hipotenusa c, o lado oposto ao ângulo reto.",
                "Selecione o modo Calculadora de Circunraio.",
                "Digite c na unidade de sua escolha.",
                "Selecione a unidade que corresponde à sua medida.",
                "Clique em Calcular Circunraio R.",
                "Revise o resultado, que deve ser exatamente metade da hipotenusa.",
                "Use Redefinir para um novo cálculo.",
              ],
            },
            {
              "kind": "p",
              "text": "O modo do circunraio precisa de apenas uma medida porque a hipotenusa é o diâmetro do círculo circunscrito. Não digite um cateto aqui: ele é mais curto que a hipotenusa, por isso o resultado seria metade do comprimento errado.",
            },
          ],
          "h2": "Como Usar a Calculadora de Raio de Triângulo Retângulo",
        },
        "sec-step-example": {
          "blocks": [
            {
              "kind": "p",
              "text": "Use o triângulo retângulo 6-8-10 com [[a = 6]] cm, [[b = 8]] cm e [[c = 10]] cm. As duas partes abaixo encontram cada raio por vez e depois comparam os resultados.",
            },
            {
              "kind": "h3",
              "text": "Parte 1: Calcular o Inraio",
            },
            {
              "kind": "steps",
              "steps": [
                "Escreva a fórmula: [[r = \\frac{a + b - c}{2}]].",
                "Substitua os valores: [[r = \\frac{6 + 8 - 10}{2}]].",
                "Some e subtraia: [[r = \\frac{4}{2}]].",
                "Divida: [[r = 2]] cm.",
              ],
            },
            {
              "kind": "p",
              "text": "O círculo inscrito tem um raio de 2 cm. Seu centro I fica a 2 cm de cada lado, e o círculo toca os dois catetos e a hipotenusa por dentro do triângulo.",
            },
            {
              "kind": "h3",
              "text": "Parte 2: Calcular o Circunraio",
            },
            {
              "kind": "steps",
              "steps": [
                "Escreva a fórmula: [[R = \\frac{c}{2}]].",
                "Substitua o valor: [[R = \\frac{10}{2}]].",
                "Divida: [[R = 5]] cm.",
              ],
            },
            {
              "kind": "p",
              "text": "O círculo circunscrito tem um raio de 5 cm. Seu centro O é o ponto médio da hipotenusa, e o círculo passa pelos três vértices. Comparando os dois resultados, o circunraio é duas vezes e meia o inraio, o que é normal: o círculo ao redor do triângulo é bem maior que o círculo dentro dele.",
            },
            {
              "kind": "p",
              "text": "Uma verificação rápida: a área é 24 cm² e o semiperímetro é 12 cm, por isso [[r = \\frac{24}{12} = 2]] cm, coincidindo com a Parte 1, e [[2R = 2 \\times 5 = 10]] cm, coincidindo com c.",
            },
          ],
          "h2": "Exemplo Passo a Passo: Calculando os Dois Raios",
          "image": {
            "alt": "Triângulo retângulo 6-8-10 com lados 6, 8 e 10 cm, inraio de 2 cm, circunraio de 5 cm, área de 24 centímetros quadrados e semiperímetro de 12 cm",
            "caption": "Exemplo completo 6-8-10: a = 6, b = 8, c = 10, r = 2, R = 5, área 24 cm², s = 12 cm.",
            "src": "radius-complete-example.svg",
          },
        },
        "sec-examples-inradius": {
          "blocks": [
            {
              "kind": "p",
              "text": "Cada exemplo apresenta os valores dados, a substituição e a resposta final, e todos os exemplos mantêm as unidades consistentes do início ao fim. Os seis triângulos são triângulos retângulos válidos, conferidos com o teorema de Pitágoras.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 1: Triângulo Básico 3-4-5",
            },
            {
              "kind": "p",
              "text": "Dados [[a = 3]] cm, [[b = 4]] cm e [[c = 5]] cm, [[r = \\frac{3 + 4 - 5}{2} = \\frac{2}{2} = 1]] cm. Verificação: [[3^2 + 4^2 = 9 + 16 = 25 = 5^2]].",
            },
            {
              "kind": "h3",
              "text": "Exemplo 2: Triângulo 5-12-13",
            },
            {
              "kind": "p",
              "text": "Dados [[a = 5]] cm, [[b = 12]] cm e [[c = 13]] cm, [[r = \\frac{5 + 12 - 13}{2} = \\frac{4}{2} = 2]] cm. Verificação: [[5^2 + 12^2 = 25 + 144 = 169 = 13^2]].",
            },
            {
              "kind": "h3",
              "text": "Exemplo 3: Triângulo 8-15-17",
            },
            {
              "kind": "p",
              "text": "Dados [[a = 8]] cm, [[b = 15]] cm e [[c = 17]] cm, [[r = \\frac{8 + 15 - 17}{2} = \\frac{6}{2} = 3]] cm. Verificação: [[8^2 + 15^2 = 64 + 225 = 289 = 17^2]].",
            },
            {
              "kind": "h3",
              "text": "Exemplo 4: Medidas Decimais",
            },
            {
              "kind": "p",
              "text": "Dados [[a = 7.5]] cm, [[b = 10]] cm e [[c = 12.5]] cm, [[r = \\frac{7.5 + 10 - 12.5}{2} = \\frac{5}{2} = 2.5]] cm. Este é o triângulo 6-8-10 ampliado por 1.25, por isso seu inraio amplia da mesma forma. Verificação: [[7.5^2 + 10^2 = 56.25 + 100 = 156.25 = 12.5^2]].",
            },
            {
              "kind": "h3",
              "text": "Exemplo 5: Medidas Maiores",
            },
            {
              "kind": "p",
              "text": "Dados [[a = 9]] m, [[b = 12]] m e [[c = 15]] m, [[r = \\frac{9 + 12 - 15}{2} = \\frac{6}{2} = 3]] m. Este é o triângulo 3-4-5 ampliado por 3. Verificação: [[9^2 + 12^2 = 81 + 144 = 225 = 15^2]].",
            },
            {
              "kind": "h3",
              "text": "Exemplo 6: Unidades Diferentes",
            },
            {
              "kind": "p",
              "text": "Dados [[a = 0.09]] m, [[b = 0.12]] m e [[c = 0.15]] m, converta para centímetros primeiro: 9 cm, 12 cm e 15 cm. Depois [[r = \\frac{9 + 12 - 15}{2} = \\frac{6}{2} = 3]] cm. Verificação: [[9^2 + 12^2 = 81 + 144 = 225 = 15^2]].",
            },
          ],
          "h2": "Exemplos Resolvidos de Cálculo do Inraio",
        },
        "sec-examples-circumradius": {
          "blocks": [
            {
              "kind": "p",
              "text": "Cada exemplo de circunraio precisa apenas da hipotenusa, por isso cada um é uma única divisão por 2. A variedade vem das unidades e do tamanho dos números, e não do método, que nunca muda.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 1: Hipotenusa de 10 cm",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 10]] cm, [[R = \\frac{10}{2} = 5]] cm. Este é o circunraio do triângulo 6-8-10.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 2: Hipotenusa de 13 cm",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 13]] cm, [[R = \\frac{13}{2} = 6.5]] cm. Este é o circunraio do triângulo 5-12-13.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 3: Hipotenusa de 24 m",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 24]] m, [[R = \\frac{24}{2} = 12]] m.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 4: Hipotenusa de 7.5 cm",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 7.5]] cm, [[R = \\frac{7.5}{2} = 3.75]] cm. A verificação do diâmetro funciona ao contrário: [[2 \\times 3.75 = 7.5]] cm.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 5: Hipotenusa de 180 mm",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 180]] mm, [[R = \\frac{180}{2} = 90]] mm, que são 9 cm.",
            },
            {
              "kind": "h3",
              "text": "Exemplo 6: Hipotenusa de 1.2 m",
            },
            {
              "kind": "p",
              "text": "Dados [[c = 1.2]] m, [[R = \\frac{1.2}{2} = 0.6]] m, que são 60 cm.",
            },
          ],
          "h2": "Exemplos Resolvidos de Cálculo do Circunraio",
        },
        "sec-validity": {
          "blocks": [
            {
              "kind": "p",
              "text": "Uma resposta de raio só vale tanto quanto o triângulo por trás dela, por isso confira as medidas antes de calcular. Para um triângulo retângulo, os lados precisam satisfazer o teorema de Pitágoras:",
            },
            {
              "kind": "p",
              "text": "[[[a^2 + b^2 = c^2]]]",
            },
            {
              "kind": "p",
              "text": "A hipotenusa também precisa ser o lado mais longo, por isso [[c > a]] e [[c > b]]. Um cateto maior que a hipotenusa não pode pertencer a nenhum triângulo retângulo, e uma hipotenusa mais curta que um cateto significa que os lados foram rotulados errado.",
            },
            {
              "kind": "p",
              "text": "Confira o triângulo 3-4-5: [[3^2 + 4^2 = 9 + 16 = 25 = 5^2]], por isso os lados concordam, e o inraio sai positivo: [[r = \\frac{3 + 4 - 5}{2} = 1]] cm. Um triângulo retângulo válido e não degenerado sempre dá um inraio positivo, porque os catetos juntos são maiores que a hipotenusa.",
            },
            {
              "kind": "p",
              "text": "Medidas inválidas se denunciam na fórmula do inraio. Se os catetos somarem menos que a hipotenusa, r sai negativo, o que não descreve nenhum círculo real, e se somarem exatamente a hipotenusa, r é zero e o triângulo é plano. Qualquer um dos dois resultados significa que as entradas estão erradas. A <a href=\"/right-triangle-side-calculator/\">calculadora de lados de triângulo retângulo</a> pode reconstruir um lado desconhecido a partir de medidas válidas.",
            },
          ],
          "h2": "Como Verificar se as Medidas do Seu Triângulo Retângulo São Válidas",
        },
        "sec-area-relation": {
          "blocks": [
            {
              "kind": "p",
              "text": "O inraio, a área e o semiperímetro de um triângulo estão ligados por uma relação, e ela vale para qualquer triângulo, e não apenas para triângulos retângulos:",
            },
            {
              "kind": "p",
              "text": "[[[Area = r \\times s]]]",
            },
            {
              "kind": "p",
              "text": "A área mede quanto de superfície o triângulo cobre, o semiperímetro mede metade da sua fronteira, e a razão entre eles é o raio do círculo que cabe dentro.",
            },
            {
              "kind": "p",
              "text": "Para um triângulo retângulo, [[Area = \\frac{ab}{2}]], já que os dois catetos são a base e a altura, e o circunraio entra por [[c = 2R]]. No triângulo 6-8-10, a área é 24 cm², o semiperímetro é 12 cm, [[r = \\frac{24}{12} = 2]] cm e [[R = \\frac{10}{2} = 5]] cm. A altura até a hipotenusa segue o mesmo padrão: [[h = \\frac{ab}{c}]], o que dá [[h = \\frac{48}{10} = 4.8]] cm aqui.",
            },
            {
              "kind": "p",
              "text": "Os dois raios descrevem aspectos diferentes do mesmo triângulo: o inraio depende da área e do perímetro juntos, enquanto o circunraio depende apenas da hipotenusa. Nenhum dos dois pode ser encontrado só a partir da área.",
            },
          ],
          "h2": "Relação Entre Inraio, Circunraio e Área do Triângulo",
        },
        "sec-perimeter-relation": {
          "blocks": [
            {
              "kind": "p",
              "text": "O perímetro de um triângulo retângulo é [[P = a + b + c]], e o semiperímetro é metade disso, [[s = \\frac{a + b + c}{2}]]. O inraio pode ser escrito como [[r = \\frac{Area}{s}]], por isso, para uma área fixa, um semiperímetro maior significa um inraio menor.",
            },
            {
              "kind": "p",
              "text": "Use o triângulo 6-8-10: o perímetro é 24 cm, o semiperímetro é 12 cm e, com uma área de 24 cm², [[r = \\frac{24}{12} = 2]] cm. Compare com o triângulo 3-4-5: seu perímetro é 12 cm, seu semiperímetro é 6 cm, sua área é 6 cm² e [[r = \\frac{6}{6} = 1]] cm.",
            },
            {
              "kind": "p",
              "text": "O perímetro sozinho não pode determinar o inraio: dois triângulos podem ter um perímetro de 24 cm e ter áreas e inraios diferentes. Não confunda o semiperímetro com o perímetro: usar P onde s pertence cortaria a resposta pela metade. A <a href=\"/right-triangle-perimeter-semiperimeter-calculator/\">calculadora de perímetro e semiperímetro de triângulo retângulo</a> encontra os dois valores quando você precisar deles.",
            },
          ],
          "h2": "Relação Entre Inraio e Perímetro",
        },
        "sec-properties": {
          "blocks": [
            {
              "kind": "p",
              "text": "Nove propriedades seguem diretamente das duas fórmulas. Cada uma serve também como uma verificação de bom senso para uma resposta nova.",
            },
            {
              "kind": "list",
              "items": [
                "O inraio é sempre positivo em um triângulo válido e não degenerado, porque os dois catetos juntos são maiores que a hipotenusa, por isso [[a + b - c > 0]].",
                "O incentro fica dentro do triângulo, no ponto de encontro das três bissetrizes.",
                "O inraio é perpendicular a cada lado no ponto de tangência, já que um raio até uma tangente a encontra em ângulo reto.",
                "O circuncentro fica no ponto médio da hipotenusa em um triângulo retângulo, e em nenhum outro lugar.",
                "O circunraio é exatamente metade da hipotenusa, [[R = \\frac{c}{2}]], em todo triângulo retângulo.",
                "O círculo circunscrito passa pelos três vértices, incluindo o vértice do ângulo reto.",
                "O círculo inscrito é tangente aos três lados e toca cada lado em exatamente um ponto.",
                "O circunraio é maior que o inraio para um triângulo retângulo não degenerado, por isso [[R > r]] sempre vale aqui.",
                "Os dois cálculos de raio exigem medidas de entrada diferentes: o inraio precisa dos três lados, enquanto o circunraio precisa apenas da hipotenusa.",
              ],
            },
            {
              "kind": "p",
              "text": "A última propriedade é a que os alunos mais esquecem: quando um problema dá apenas a hipotenusa, o circunraio está ao alcance e o inraio não.",
            },
          ],
          "h2": "Propriedades Importantes dos Raios de Triângulo Retângulo",
        },
        "sec-mistakes": {
          "blocks": [
            {
              "kind": "p",
              "text": "Cada erro abaixo é seguido pela sua correção. A maioria tem origem na confusão entre os dois círculos, e não na aritmética.",
            },
            {
              "kind": "list",
              "items": [
                "Confundir inraio com circunraio: r pertence ao círculo dentro do triângulo, R ao círculo ao redor dele. No triângulo 6-8-10, r é 2 cm e R é 5 cm.",
                "Usar [[R = \\frac{c}{2}]] para calcular o inraio: dividir a hipotenusa pela metade dá o circunraio, e não r.",
                "Usar [[r = \\frac{a + b - c}{2}]] para calcular o circunraio: dá um número menor que nada tem a ver com o círculo que passa pelos vértices.",
                "Digitar um cateto em vez da hipotenusa no modo do circunraio: um cateto é mais curto que a hipotenusa, por isso dividi-lo pela metade dá metade do comprimento errado.",
                "Esquecer de dividir por dois na fórmula do inraio: [[a + b - c]] sozinho é o dobro do inraio. No triângulo 6-8-10, a soma é 4, mas r é 2.",
                "Esquecer de dividir por dois na fórmula do circunraio: a hipotenusa completa é o diâmetro, e não o raio. Com c = 10 cm, R é 5 cm, e não 10 cm.",
                "Digitar um triângulo inválido: se [[a^2 + b^2]] não for igual a [[c^2]], os lados não formam nenhum triângulo retângulo.",
                "Misturar unidades: centímetros para um lado e metros para outro dão uma subtração sem sentido. Converta tudo para uma unidade primeiro.",
                "Confundir o incentro com o circuncentro: o incentro fica dentro do triângulo, o circuncentro fica no ponto médio da hipotenusa.",
                "Supor que o círculo inscrito passa pelos vértices: o círculo inscrito toca os lados, e seus pontos nunca chegam a um vértice.",
                "Supor que o círculo circunscrito toca os três lados: o círculo circunscrito passa pelos vértices e não toca nenhum lado ao longo do seu comprimento.",
                "Arredondar cedo demais: mantenha a precisão total até o último passo, já que arredondar um valor intermediário desloca a resposta.",
                "Confundir raio com diâmetro: o diâmetro é o dobro do raio, por isso um circunraio de 5 cm significa um diâmetro de 10 cm, que é a hipotenusa.",
                "Usar o modo errado da calculadora: o modo do inraio precisa de três entradas e o modo do circunraio precisa de uma. Escolha o modo que corresponde às medidas que você tem.",
              ],
            },
            {
              "kind": "p",
              "text": "Se uma resposta parecer errada, confira o modo primeiro, depois os rótulos e depois as unidades. A maioria dos erros acima desaparece quando o modo certo é selecionado e a hipotenusa é identificada corretamente.",
            },
          ],
          "h2": "Erros Comuns ao Calcular Inraio e Circunraio",
        },
        "sec-applications": {
          "blocks": [
            {
              "kind": "p",
              "text": "O uso mais direto é o dever de casa e o trabalho em sala de aula de geometria, em que os problemas de raio testam se os alunos sabem distinguir o círculo inscrito do círculo circunscrito e escolher a fórmula certa para cada um. Os professores usam o triângulo 6-8-10 porque os dois raios saem como números inteiros.",
            },
            {
              "kind": "p",
              "text": "A construção de círculos é um segundo uso: desenhar um círculo inscrito precisa do incentro e do inraio, enquanto desenhar um círculo circunscrito precisa do circuncentro e do circunraio. O desenho técnico usa as mesmas ideias sempre que uma forma triangular precisa ser equipada com um furo circular ou colocada dentro de uma moldura circular.",
            },
            {
              "kind": "p",
              "text": "As demonstrações matemáticas usam os dois raios como degraus: [[Area = rs]] conecta área, perímetro e inraio em uma linha, e o teorema de Tales conecta o ângulo reto com o diâmetro do círculo circunscrito. A modelagem geométrica usa as mesmas relações para calcular folgas, como o tamanho que uma peça circular precisa ter para envolver uma peça triangular.",
            },
            {
              "kind": "p",
              "text": "Uma condição limita todas as aplicações: estas fórmulas descrevem triângulos e círculos ideais, e não medidas aproximadas de campo, por isso o trabalho prático de projeto pode precisar de tolerâncias adicionais além do raio sozinho.",
            },
          ],
          "h2": "Aplicações Práticas dos Raios de Triângulo",
        },
        "sec-practice": {
          "blocks": [
            {
              "kind": "p",
              "text": "Tente resolver os seis problemas no papel antes de ler as respostas. Nenhum dos valores repete os exemplos resolvidos, e todos os triângulos são válidos.",
            },
            {
              "kind": "h3",
              "text": "Problema 1: Encontrar o Inraio",
            },
            {
              "kind": "p",
              "text": "Um triângulo retângulo tem catetos [[a = 5]] cm e [[b = 12]] cm e hipotenusa [[c = 13]] cm. Encontre o inraio.",
            },
            {
              "kind": "h3",
              "text": "Problema 2: Encontrar o Circunraio",
            },
            {
              "kind": "p",
              "text": "Um triângulo retângulo tem hipotenusa [[c = 26]] cm. Encontre o circunraio.",
            },
            {
              "kind": "h3",
              "text": "Problema 3: Calcular os Dois Raios",
            },
            {
              "kind": "p",
              "text": "Um triângulo retângulo tem [[a = 9]] cm, [[b = 40]] cm e [[c = 41]] cm. Encontre o inraio e o circunraio.",
            },
            {
              "kind": "h3",
              "text": "Problema 4: Verificar a Validade do Triângulo",
            },
            {
              "kind": "p",
              "text": "Diz-se que um triângulo tem lados de 7 cm, 24 cm e 25 cm. Confira com o teorema de Pitágoras que ele é um triângulo retângulo e depois encontre seu inraio.",
            },
            {
              "kind": "h3",
              "text": "Problema 5: Inraio a Partir da Área e do Semiperímetro",
            },
            {
              "kind": "p",
              "text": "Um triângulo retângulo tem catetos de 8 cm e 15 cm. Encontre sua área e seu semiperímetro e depois use [[r = \\frac{Area}{s}]] para encontrar o inraio.",
            },
            {
              "kind": "h3",
              "text": "Problema 6: Identificar o Modo Correto",
            },
            {
              "kind": "p",
              "text": "Você sabe apenas que a hipotenusa de um triângulo retângulo é 18 cm. Qual modo da calculadora você pode usar, qual raio você pode encontrar e qual é o seu valor? Explique por que o outro raio não pode ser encontrado apenas com esta informação.",
            },
            {
              "kind": "h3",
              "text": "Respostas dos Problemas de Prática",
            },
            {
              "kind": "p",
              "text": "Resposta 1: [[r = \\frac{5 + 12 - 13}{2} = \\frac{4}{2} = 2]] cm.",
            },
            {
              "kind": "p",
              "text": "Resposta 2: [[R = \\frac{26}{2} = 13]] cm.",
            },
            {
              "kind": "p",
              "text": "Resposta 3: [[r = \\frac{9 + 40 - 41}{2} = \\frac{8}{2} = 4]] cm e [[R = \\frac{41}{2} = 20.5]] cm.",
            },
            {
              "kind": "p",
              "text": "Resposta 4: [[7^2 + 24^2 = 49 + 576 = 625 = 25^2]], por isso é um triângulo retângulo, e [[r = \\frac{7 + 24 - 25}{2} = \\frac{6}{2} = 3]] cm.",
            },
            {
              "kind": "p",
              "text": "Resposta 5: [[Area = \\frac{8 \\times 15}{2} = 60]] cm², [[c = 17]] cm, [[s = \\frac{8 + 15 + 17}{2} = 20]] cm, por isso [[r = \\frac{60}{20} = 3]] cm.",
            },
            {
              "kind": "p",
              "text": "Resposta 6: Use o modo do circunraio: [[R = \\frac{18}{2} = 9]] cm. O inraio não pode ser encontrado, porque [[r = \\frac{a + b - c}{2}]] precisa dos dois catetos, e muitos triângulos retângulos têm uma hipotenusa de 18 cm.",
            },
          ],
          "h2": "Problemas de Prática com Respostas",
        },
      },
      "tocHeading": "Conteúdo do Guia",
      "tocItems": {
        "sec-applications": "Aplicações Práticas dos Raios de Triângulo",
        "sec-area-relation": "Relação Entre Inraio, Circunraio e Área do Triângulo",
        "sec-calculate": "Calcular o Inraio ou o Circunraio de um Triângulo Retângulo",
        "sec-circumradius-formula": "Fórmula do Circunraio de Triângulo Retângulo",
        "sec-difference": "Diferença Entre Inraio e Circunraio",
        "sec-examples-circumradius": "Exemplos Resolvidos de Cálculo do Circunraio",
        "sec-examples-inradius": "Exemplos Resolvidos de Cálculo do Inraio",
        "sec-faq": "Perguntas Frequentes",
        "sec-how-to-use": "Como Usar a Calculadora de Raio de Triângulo Retângulo",
        "sec-intro": "Calculadora de Raio de Triângulo Retângulo",
        "sec-mistakes": "Erros Comuns ao Calcular Inraio e Circunraio",
        "sec-perimeter-relation": "Relação Entre Inraio e Perímetro",
        "sec-practice": "Problemas de Prática com Respostas",
        "sec-properties": "Propriedades Importantes dos Raios de Triângulo Retângulo",
        "sec-related": "Explore as Calculadoras Relacionadas de Triângulo Retângulo",
        "sec-step-example": "Exemplo Passo a Passo: Calculando os Dois Raios",
        "sec-validity": "Como Verificar se as Medidas do Seu Triângulo Retângulo São Válidas",
        "sec-what-circumradius": "O Que É o Circunraio de um Triângulo Retângulo?",
        "sec-what-inradius": "O Que É o Inraio de um Triângulo Retângulo?",
        "sec-why-diameter": "Por Que a Hipotenusa É o Diâmetro do Círculo Circunscrito?",
        "sec-why-inradius": "Por Que a Fórmula do Inraio Funciona?",
        "sec-inradius-formula": "Fórmula do Inraio de Triângulo Retângulo",
      },
    },
};
