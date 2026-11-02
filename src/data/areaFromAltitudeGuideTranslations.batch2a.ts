// areaFromAltitudeGuideTranslations.batch2a.ts: Area From Altitude guide (Page 17) translations for pt + bn.
// Built from AREA_FROM_ALTITUDE_TRANSLATION_SCHEMA.md; follows TRANSLATION_PROMPT.md (locked 2026-10-30).
// Formulas, KaTeX markers, variable symbols and degree values are byte-identical to EN.

export const AREA_FROM_ALTITUDE_TRANSLATIONS_BATCH2A = {
  "pt": {
    "tocHeading": "Neste Guia",
    "tocItems": {
      "sec-intro": "Como calcular a área de um triângulo retângulo a partir da altura",
      "sec-understand": "Entendendo a hipotenusa e a altura",
      "sec-formula": "Fórmula da área do triângulo retângulo a partir da altura",
      "sec-steps": "Exemplo de cálculo passo a passo",
      "sec-howto": "Como usar a calculadora de área a partir da altura",
      "sec-examples": "Exemplos resolvidos: hipotenusa e altura",
      "sec-applications": "Aplicações da vida real",
      "sec-equal": "Por que as duas fórmulas de área concordam",
      "sec-geomean": "Como a altura divide um triângulo retângulo",
      "sec-max": "Altura máxima possível",
      "sec-find-altitude": "Encontrando a altura quando ela é desconhecida",
      "sec-units": "Unidades quadradas e conversões",
      "sec-mistakes": "Erros comuns",
      "sec-verify": "Como verificar sua resposta",
      "sec-compare": "Área pela altura vs. área pelos dois catetos",
      "sec-related": "Explore calculadoras de triângulo retângulo relacionadas",
      "sec-faq": "Perguntas frequentes",
      "sec-conclusion": "Conclusão"
    },
    "sections": {
      "sec-intro": {
        "h2": "Como calcular a área de um triângulo retângulo a partir da altura",
        "blocks": [
          { "kind": "p", "text": "Suponha que um triângulo retângulo tenha uma hipotenusa de 10 m, e que a distância perpendicular do vértice do ângulo reto até essa hipotenusa meça 4,8 m. Sua área segue diretamente: [[K=(10\\times4.8)/2]], [[[\\boxed{K=24\\text{ m}^2}]]]. O triângulo delimita 24 metros quadrados de superfície plana." },
          { "kind": "p", "text": "Esta calculadora existe exatamente para essa situação. Quando você conhece o lado mais longo de um triângulo retângulo, a hipotenusa [[c]], e a altura perpendicular do vértice do ângulo reto até esse lado, [[h]], os dois catetos não são necessários. A hipotenusa serve de base, a altura é sua altura perpendicular correspondente, e a área de todo triângulo é metade do produto de uma base por sua altura correspondente: [[K=ch/2]]." },
          { "kind": "p", "text": "A altura deve encontrar a hipotenusa em ângulo reto; um segmento inclinado que não seja perpendicular produz uma altura errada e uma área errada. Insira as duas medidas em unidades de comprimento compatíveis, e a calculadora retorna a área nas unidades quadradas correspondentes, com cada etapa de substituição exibida." }
        ]
      },
      "sec-understand": {
        "h2": "Entendendo a hipotenusa e a altura de um triângulo retângulo",
        "blocks": [
          { "kind": "p", "text": "Este guia usa uma notação consistente em todo o texto: [[A]] e [[B]] são os dois ângulos agudos, [[C=90^\\circ]] é o ângulo reto, o lado [[a]] está oposto ao ângulo [[A]], o lado [[b]] está oposto ao ângulo [[B]], o lado [[c]] é a hipotenusa oposta ao ângulo [[C]], [[h]] é a altura perpendicular do vértice [[C]] até a hipotenusa, encontrando-a no ponto [[D]], [[p]] e [[q]] são os segmentos da hipotenusa [[AD]] e [[DB]], e [[K]] é a área." },
          { "kind": "h3", "text": "O que é um triângulo retângulo?" },
          { "kind": "p", "text": "Um triângulo retângulo contém exatamente um ângulo de 90 graus. Seus dois catetos se encontram no ângulo reto, e a hipotenusa está oposta a ele. A hipotenusa é sempre o lado mais longo. Os outros dois ângulos são agudos, e como os três ângulos somam 180 graus, [[A+B=90^\\circ]]. Esses fatos importam porque o método da altura se apoia neles: a base deve ser a hipotenusa, e a altura deve descer do vértice do ângulo reto." },
          { "kind": "h3", "text": "O que é a hipotenusa?" },
          { "kind": "p", "text": "A hipotenusa é o lado oposto ao ângulo reto, identificado como [[c]] na calculadora. Para identificá-la em qualquer orientação, encontre o lado que não toca o marcador de canto quadrado: esse lado é a hipotenusa. Na fórmula da altura, ela desempenha o papel de base, então reconhecê-la corretamente é a primeira habilidade que esta página ensina." },
          { "kind": "h3", "text": "O que é a altura?" },
          { "kind": "p", "text": "Uma altura é um segmento perpendicular de um vértice do triângulo até a reta que contém o lado oposto. Aqui a altura [[h]] vai do vértice do ângulo reto [[C]] até a hipotenusa [[AB]] e a encontra no ponto [[D]], de modo que [[CD\\perp AB]]. É uma distância perpendicular, não simplesmente qualquer linha traçada dentro do triângulo: apenas o segmento que encontra a hipotenusa a 90 graus se qualifica." },
          { "kind": "h3", "text": "A altura é a mesma coisa que um cateto?" },
          { "kind": "p", "text": "Não. Os catetos [[a]] e [[b]] se encontram no ângulo reto original, enquanto a altura é um segmento separado desse mesmo vértice até o lado oposto. Tome um triângulo 6-8-10: [[a=6]], [[b=8]], [[c=10]]. Sua altura é [[h=(6\\times8)/10=4.8]]. Nenhum cateto mede 4,8, mas a altura até a hipotenusa é exatamente 4,8. Confundir um cateto com a altura é um dos erros mais comuns nesta página." },
          { "kind": "h3", "text": "Por que a altura cai dentro do triângulo" },
          { "kind": "p", "text": "Para um triângulo retângulo não degenerado, a perpendicular do vértice do ângulo reto pousa sobre a hipotenusa entre suas extremidades, nunca fora dela. Ela divide o triângulo original em dois triângulos retângulos menores. Esses dois triângulos compartilham as medidas dos ângulos agudos do original, o que torna os três triângulos semelhantes entre si. Essa semelhança é o motivo pelo qual a altura satisfaz relações tão elegantes, exploradas na seção da média geométrica abaixo." }
        ],
        "imgAlt": "Triângulo retângulo ABC com catetos a e b, hipotenusa c como base, altura h do vértice C ao ponto D, fórmula K = ch/2",
        "figcaption": "Anatomia do método da altura: a hipotenusa c é a base, a altura h a encontra a 90 graus no ponto D, e a área é K = ch/2."
      },
      "sec-formula": {
        "h2": "Fórmula da área do triângulo retângulo a partir da altura",
        "blocks": [
          { "kind": "p", "text": "A fórmula da área pela altura é [[[\\boxed{K=\\frac{ch}{2}}]]]. Aqui [[K]] é a área, [[c]] é a hipotenusa servindo de base, e [[h]] é a altura perpendicular à hipotenusa. Três símbolos, uma multiplicação, uma divisão por dois." },
          { "kind": "h3", "text": "Por que multiplicamos a hipotenusa pela altura?" },
          { "kind": "p", "text": "A fórmula geral da área de um triângulo é [[K=\\frac{\\text{base}\\times\\text{height}}{2}]], e a base e a altura devem ser perpendiculares entre si. Escolher a hipotenusa como base força a altura a ser a distância perpendicular até ela, que é exatamente a altura: [[\\text{base}=c]] e [[\\text{height}=h]], portanto [[K=ch/2]]. Isso vale como quer que o triângulo seja girado ou desenhado: a perpendicularidade é uma relação geométrica, não uma direção na tela, então uma hipotenusa inclinada funciona como base tão bem quanto uma horizontal." },
          { "kind": "h3", "text": "Por que o resultado é dividido por dois?" },
          { "kind": "p", "text": "Um triângulo ocupa metade do paralelogramo construído sobre a mesma base com a mesma altura perpendicular. Com [[c=10]] e [[h=4.8]], o produto [[c\\times h=48]] é a área desse paralelogramo. O triângulo é metade dele, então [[K=48/2=24]]. Informar 48 responderia a uma pergunta diferente: a área do paralelogramo completo, não a do triângulo dentro dele." },
          { "kind": "h3", "text": "Esta fórmula funciona para todo triângulo?" },
          { "kind": "p", "text": "A regra de base e altura funciona para todo triângulo, desde que a altura seja perpendicular à base escolhida. O que é especial aqui é a escolha da base: a hipotenusa de um triângulo retângulo, com a altura baixada do vértice do ângulo reto. Essa escolha traz restrições geométricas extras, como a altura nunca exceder metade da hipotenusa, que não se aplicam a triângulos gerais." },
          { "kind": "h3", "text": "Por que a fórmula não precisa dos dois catetos" },
          { "kind": "p", "text": "A área precisa de um lado e de sua altura perpendicular correspondente, nada mais. Quando [[c]] e [[h]] já são conhecidos, os catetos não acrescentam nenhuma informação nova sobre a área. A fórmula dos catetos [[K=ab/2]] é simplesmente uma rota de entrada diferente para a mesma quantidade, útil quando os dados medidos são os dois lados perpendiculares." }
        ],
        "imgAlt": "Por que a área do triângulo é metade de base vezes altura: c = 10, h = 4,8, 48 dividido por 2 dá 24 unidades quadradas",
        "figcaption": "O produto c vezes h é o retângulo completo; o triângulo preenche exatamente metade dele, por isso a fórmula divide por dois."
      },
      "sec-steps": {
        "h2": "Exemplo passo a passo do cálculo da área a partir da altura",
        "blocks": [
          { "kind": "p", "text": "Um cálculo completo, das medidas à resposta verificada, usando [[c=10\\text{ m}]] e [[h=4.8\\text{ m}]]." }
        ],
        "steps": [
          "<strong>Identifique as medidas dadas.</strong> A hipotenusa é [[c=10\\text{ m}]] e a altura perpendicular a ela é [[h=4.8\\text{ m}]]. Confirme que a altura encontra a hipotenusa em ângulo reto.",
          "<strong>Escreva a fórmula.</strong> [[K=ch/2]].",
          "<strong>Substitua as medidas.</strong> [[K=(10\\times4.8)/2]].",
          "<strong>Multiplique.</strong> [[10\\times4.8=48]], então [[K=48/2]].",
          "<strong>Divida por dois.</strong> [[[\\boxed{K=24\\text{ m}^2}]]].",
          "<strong>Interprete a resposta.</strong> O triângulo delimita 24 metros quadrados de área plana.",
          "<strong>Verifique a viabilidade.</strong> Um triângulo retângulo válido precisa de [[h\\leq c/2]]; aqui [[4.8\\leq5]], então as medidas podem descrever um triângulo retângulo real.",
          "<strong>Verifique usando os catetos.</strong> Um triângulo 6-8-10 tem a mesma hipotenusa e altura, e [[K=(6\\times8)/2=24]]. As duas rotas concordam."
        ]
      },
      "sec-howto": {
        "h2": "Como usar a calculadora de área de triângulo retângulo a partir da altura",
        "blocks": [
          { "kind": "p", "text": "A calculadora desta página precisa de exatamente duas entradas. O passo a passo abaixo segue a ordem da tela, para que um usuário iniciante possa ir de um triângulo desenhado ou medido até uma área verificada." }
        ],
        "steps": [
          "<strong>Identifique o triângulo retângulo.</strong> Confirme que um ângulo é de 90 graus; o método só se aplica a triângulos retângulos.",
          "<strong>Localize sua hipotenusa [[c]].</strong> É o lado oposto ao ângulo reto e o lado mais longo.",
          "<strong>Identifique a altura perpendicular [[h]].</strong> Ela vai do vértice do ângulo reto até a hipotenusa e a encontra a 90 graus.",
          "<strong>Meça ou obtenha os dois valores.</strong> Meça diretamente, ou calcule a altura primeiro com [[h=ab/c]] quando os catetos forem conhecidos.",
          "<strong>Insira a hipotenusa no campo Hipotenusa c.</strong>",
          "<strong>Insira a altura no campo Altura h.</strong>",
          "<strong>Selecione unidades de comprimento compatíveis.</strong> As duas entradas devem usar a mesma unidade antes de a fórmula ser aplicada.",
          "<strong>Confirme que ambos os valores são positivos.</strong> Comprimentos zero ou negativos não descrevem nenhum triângulo.",
          "<strong>Verifique se [[h]] não é maior que metade da hipotenusa.</strong> Para [[c=10]], qualquer altura acima de 5 não pode pertencer a um triângulo retângulo com essa hipotenusa.",
          "<strong>Clique em Calcular Area.</strong>",
          "<strong>Revise o resultado da área.</strong> Ele aparece em unidades quadradas correspondentes à unidade de entrada.",
          "<strong>Leia as etapas da solução exibidas.</strong> Elas mostram a fórmula, a substituição e a aritmética.",
          "<strong>Confira a visualização ao vivo.</strong> Confirme que a hipotenusa e a altura do diagrama correspondem às medidas pretendidas.",
          "<strong>Use Redefinir para um novo cálculo.</strong> Ele limpa os dois campos para que o próximo cálculo comece do zero."
        ],
        "closingParagraphs": [
          "A calculadora não pede os dois catetos nem um ângulo, porque o método da altura realmente não precisa deles."
        ]
      },
      "sec-examples": {
        "h2": "Exemplos resolvidos da área do triângulo retângulo a partir da hipotenusa e da altura",
        "blocks": [
          { "kind": "p", "text": "Quatro exemplos resolvidos desenvolvem o método a partir de triângulos familiares. Cada um calcula a altura a partir dos catetos quando necessário, aplica [[K=ch/2]] e confere com a fórmula dos catetos." },
          { "kind": "h3", "text": "Exemplo 1: Um triângulo retângulo 3-4-5" },
          { "kind": "p", "text": "Dados [[a=3]], [[b=4]], [[c=5]]. A altura é [[h=ab/c]], então [[h=(3\\times4)/5=2.4]]. A área é [[K=(5\\times2.4)/2]], [[[\\boxed{K=6\\text{ square units}}]]]. Conferindo com os catetos, [[K=(3\\times4)/2=6]]. As duas fórmulas descrevem o mesmo triângulo, então devem concordar, e concordam." },
          { "kind": "h3", "text": "Exemplo 2: Um triângulo retângulo 5-12-13" },
          { "kind": "p", "text": "Dados [[a=5]], [[b=12]], [[c=13]]. A altura é [[h=(5\\times12)/13=60/13\\approx4.61538]]. Mantendo a fração exata, [[K=(13\\times(60/13))/2]], [[[\\boxed{K=30\\text{ square units}}]]]. Manter [[60/13]] em vez de um decimal arredondado evita um erro de arredondamento precoce: o 13 cancela exatamente, deixando um 30 limpo." },
          { "kind": "h3", "text": "Exemplo 3: Um triângulo retângulo 6-8-10" },
          { "kind": "p", "text": "Dados [[c=10]] e [[h=4.8]] diretamente. Então [[K=(10\\times4.8)/2]], [[[\\boxed{K=24\\text{ square units}}]]]. Com catetos 6 e 8, [[K=(6\\times8)/2=24]], o que confirma a rota da altura." },
          { "kind": "h3", "text": "Exemplo 4: Um triângulo retângulo isósceles" },
          { "kind": "p", "text": "Dados [[c=10]] e [[h=5]]. Então [[K=(10\\times5)/2]], [[[\\boxed{K=25\\text{ square units}}]]]. Esta é a maior área que qualquer triângulo retângulo com hipotenusa 10 pode ter. A altura é igual à metade da hipotenusa somente quando os catetos são iguais, tornando cada ângulo agudo [[45^\\circ]], e nenhum triângulo retângulo válido com esta hipotenusa pode exceder 25 unidades quadradas." }
        ]
      },
      "sec-applications": {
        "h2": "Aplicações da vida real da área do triângulo retângulo a partir da altura",
        "blocks": [
          { "kind": "p", "text": "Doze situações resolvidas mostram a fórmula em diferentes escalas e em diferentes unidades. Cada uma nomeia o triângulo da cena, as duas medidas, a substituição, a área e a suposição por trás do modelo." },
          { "kind": "h3", "text": "Exemplo 1: Seção triangular de jardim" },
          { "kind": "p", "text": "Uma seção de jardim em triângulo retângulo tem um limite mais longo de 10 m, e a distância perpendicular do canto do ângulo reto até esse limite é de 4,8 m. Então [[c=10\\text{ m}]] e [[h=4.8\\text{ m}]]: [[K=(10\\times4.8)/2]], [[[\\boxed{K=24\\text{ m}^2}]]]. A seção ocupa 24 metros quadrados. Isso pressupõe que o limite seja reto e que o canto seja um ângulo reto verdadeiro." },
          { "kind": "h3", "text": "Exemplo 2: Painel triangular de compensado" },
          { "kind": "p", "text": "Um painel de compensado em triângulo retângulo tem uma hipotenusa de 1 m e uma altura perpendicular de 0,48 m: [[K=(1\\times0.48)/2]], [[[\\boxed{K=0.24\\text{ m}^2}]]]. Essa é a superfície plana de uma face, útil para estimativas de cobertura. Desperdício de corte e margens de material são considerações separadas." },
          { "kind": "h3", "text": "Exemplo 3: Janela de vidro em triângulo retângulo" },
          { "kind": "p", "text": "Um painel de vidro em triângulo retângulo tem uma hipotenusa de 1,3 m e uma altura de 0,6 m perpendicular a esse lado: [[K=(1.3\\times0.6)/2]], [[[\\boxed{K=0.39\\text{ m}^2}]]]. Esta é a área geométrica do vidro antes que a cobertura da moldura ou as margens de instalação sejam consideradas." },
          { "kind": "h3", "text": "Exemplo 4: Medindo uma seção triangular" },
          { "kind": "p", "text": "Um desenho de levantamento contém um triângulo retângulo com hipotenusa de 13 m e altura de [[60/13]] m. Mantendo a fração: [[K=(13\\times(60/13))/2]], [[[\\boxed{K=30\\text{ m}^2}]]]. O desenho representa uma seção de 30 metros quadrados. O trabalho de campo real ainda pode precisar de correções instrumentais além do plano." },
          { "kind": "h3", "text": "Exemplo 5: Medindo um azulejo triangular" },
          { "kind": "p", "text": "Um azulejo em triângulo retângulo tem uma hipotenusa de 25 cm e uma altura perpendicular de 6,72 cm: [[K=(25\\times6.72)/2]], [[[\\boxed{K=84\\text{ cm}^2}]]]. Um azulejo cobre 84 centímetros quadrados, o que ajuda a estimar de quantos azulejos uma superfície precisa. Juntas de rejunte e perdas de corte são contadas separadamente." },
          { "kind": "h3", "text": "Exemplo 6: Painel de suporte de aço" },
          { "kind": "p", "text": "Um painel de suporte plano em triângulo retângulo tem uma hipotenusa de 1,7 m com catetos de 0,8 m e 1,5 m. Sua altura é [[h=(0.8\\times1.5)/1.7=12/17]] m. Então [[K=(1.7\\times(12/17))/2]], [[[\\boxed{K=0.6\\text{ m}^2}]]]. Essa é a área geométrica do painel, não sua capacidade de carga." },
          { "kind": "h3", "text": "Exemplo 7: Painel lateral de rampa triangular" },
          { "kind": "p", "text": "Um painel lateral de rampa simplificado forma um triângulo retângulo com uma hipotenusa de 5 m e uma altura perpendicular de 2,4 m até essa hipotenusa: [[K=(5\\times2.4)/2]], [[[\\boxed{K=6\\text{ m}^2}]]]. Esta é a área plana da seção triangular lateral, não a superfície inclinada da rampa, e o cálculo não estabelece conformidade de acessibilidade." },
          { "kind": "h3", "text": "Exemplo 8: Seção de empena de telhado" },
          { "kind": "p", "text": "Uma seção de empena de telhado em triângulo retângulo tem uma hipotenusa de 6,5 m e uma altura perpendicular de [[30/13]] m: [[K=(6.5\\times(30/13))/2]], [[[\\boxed{K=7.5\\text{ m}^2}]]]. O resultado descreve o plano triangular dado pelas medidas. A área total da superfície de um telhado real é um problema de medição tridimensional separado." },
          { "kind": "h3", "text": "Exemplo 9: Terreno em triângulo retângulo" },
          { "kind": "p", "text": "Uma seção de terreno em triângulo retângulo tem uma hipotenusa de 50 m e uma altura perpendicular de 24 m: [[K=(50\\times24)/2]], [[[\\boxed{K=600\\text{ m}^2}]]]. Os limites medidos delimitam 600 metros quadrados. Um valor oficial de área ainda pode exigir verificação por levantamento." },
          { "kind": "h3", "text": "Exemplo 10: Grande terreno triangular medido" },
          { "kind": "p", "text": "Uma seção em triângulo retângulo medida tem uma hipotenusa de 100 m e uma altura perpendicular de 48 m: [[K=(100\\times48)/2]], [[[\\boxed{K=2400\\text{ m}^2}]]]. Essa é a área planar da seção triangular. Ela representa a propriedade inteira somente quando a propriedade consiste unicamente naquele triângulo." },
          { "kind": "h3", "text": "Exemplo 11: Seção triangular de vela" },
          { "kind": "p", "text": "Um projeto de vela plana em triângulo retângulo tem uma hipotenusa de 15 pés e uma altura perpendicular de 7,2 pés: [[K=(15\\times7.2)/2]], [[[\\boxed{K=54\\text{ ft}^2}]]]. Esta é a área planar da vela idealizada. Tecido curvado, costuras e margens de borda exigem consideração separada." },
          { "kind": "h3", "text": "Exemplo 12: Pequeno suporte mecânico" },
          { "kind": "p", "text": "Um suporte plano em triângulo retângulo tem uma hipotenusa de 250 mm e uma altura perpendicular de 120 mm: [[K=(250\\times120)/2]], [[[\\boxed{K=15000\\text{ mm}^2}]]]. A resposta está em milímetros quadrados porque as entradas estão em milímetros. Como [[1\\text{ cm}^2=100\\text{ mm}^2]], isso equivale a [[[\\boxed{150\\text{ cm}^2}]]]. Converter a unidade linear e converter a unidade quadrada são operações diferentes, como explica a seção de unidades." },
          { "kind": "h3", "text": "Comparação de exemplos práticos" }
        ],
        "table": {
          "headers": ["Situação", "Hipotenusa c", "Altura h", "Fórmula", "Área calculada", "Interpretação prática"],
          "rows": [
            ["Seção de jardim", "10 m", "4.8 m", "[[K=ch/2]]", "24 m²", "Superfície de plantio"],
            ["Painel de compensado", "1 m", "0.48 m", "[[K=ch/2]]", "0.24 m²", "Cobertura de material, sem desperdício"],
            ["Janela de vidro", "1.3 m", "0.6 m", "[[K=ch/2]]", "0.39 m²", "Área do vidro antes da moldura"],
            ["Desenho de levantamento", "13 m", "60/13 m", "[[K=ch/2]]", "30 m²", "Área de plano da seção"],
            ["Azulejo", "25 cm", "6.72 cm", "[[K=ch/2]]", "84 cm²", "Superfície de um azulejo"],
            ["Painel de aço", "1.7 m", "12/17 m", "[[K=ch/2]]", "0.6 m²", "Geometria, não capacidade de carga"],
            ["Painel lateral de rampa", "5 m", "2.4 m", "[[K=ch/2]]", "6 m²", "Seção lateral, não superfície da rampa"],
            ["Empena de telhado", "6.5 m", "30/13 m", "[[K=ch/2]]", "7.5 m²", "Seção transversal triangular"],
            ["Terreno", "50 m", "24 m", "[[K=ch/2]]", "600 m²", "Área delimitada, verificar por levantamento"],
            ["Terreno medido", "100 m", "48 m", "[[K=ch/2]]", "2400 m²", "Seção, não a propriedade inteira"],
            ["Seção de vela", "15 ft", "7.2 ft", "[[K=ch/2]]", "54 ft²", "Vela plana idealizada"],
            ["Suporte", "250 mm", "120 mm", "[[K=ch/2]]", "15000 mm²", "Equivale a 150 cm²"]
          ]
        },
        "imgAlt": "Quatro exemplos: jardim, painel de vidro, terreno e suporte, cada um mostrando hipotenusa c, altura h e área calculada",
        "figcaption": "A mesma fórmula em quatro escalas: jardim, painel de vidro, terreno e suporte mecânico."
      },
      "sec-equal": {
        "h2": "Por que as duas fórmulas de área do triângulo retângulo dão a mesma resposta",
        "blocks": [
          { "kind": "p", "text": "Um triângulo retângulo pode ser medido por seus dois catetos perpendiculares ou por sua hipotenusa e altura. A fórmula dos catetos é [[K=ab/2]] e a fórmula da altura é [[K=ch/2]]. Como ambas descrevem a área do mesmo triângulo, [[\\frac{ab}{2}=\\frac{ch}{2}]]. Multiplique os dois lados por dois: [[ab=ch]]. Isole [[h]]: [[[\\boxed{h=\\frac{ab}{c}}]]]. A altura é o produto dos catetos dividido pela hipotenusa, por isso as duas fórmulas nunca podem discordar em um triângulo consistente." },
          { "kind": "p", "text": "Verificação numérica: para [[a=6]], [[b=8]], [[c=10]], a altura é [[h=(6\\times8)/10=4.8]]. Pelos catetos: [[K=(6\\times8)/2=24]]. Pela altura: [[K=(10\\times4.8)/2=24]]. O mesmo triângulo, a mesma área, duas rotas." },
          { "kind": "p", "text": "Quando apenas a hipotenusa e a altura são conhecidas, a área já está fixada: não há necessidade de reconstruir os catetos primeiro. Os comprimentos dos catetos ainda podem ser recuperados a partir de [[c]] e [[h]] válidos por meio das relações de segmentos abaixo, mas isso é um cálculo separado de encontrar a área. Quando os catetos são os dados conhecidos, a <a href=\"/right-triangle-area-from-legs-calculator/\">Calculadora de área de triângulo retângulo a partir dos catetos</a> os recebe diretamente." }
        ]
      },
      "sec-geomean": {
        "h2": "Como a altura divide um triângulo retângulo",
        "blocks": [
          { "kind": "p", "text": "A altura encontra a hipotenusa em [[D]], dividindo-a nos segmentos [[AD=p]] e [[DB=q]], de modo que [[p+q=c]]. Essa divisão cria dois triângulos retângulos menores aninhados dentro do original, e suas proporções são notavelmente elegantes." },
          { "kind": "h3", "text": "Dois triângulos retângulos menores semelhantes" },
          { "kind": "p", "text": "A altura divide o triângulo original em dois triângulos retângulos menores, cada um compartilhando um ângulo agudo com o original e cada um contendo um ângulo reto. Compartilhar duas medidas de ângulo torna os três triângulos semelhantes. A semelhança é o que força as relações proporcionais limpas entre a altura, os segmentos e os catetos." },
          { "kind": "h3", "text": "O teorema da média geométrica da altura" },
          { "kind": "p", "text": "A semelhança dá [[[\\boxed{h^2=pq}]]], ou de forma equivalente [[[\\boxed{h=\\sqrt{pq}}]]]. A altura é a média geométrica dos dois segmentos da hipotenusa: seu quadrado é igual ao produto deles. Exemplo resolvido: com [[p=6.4]] e [[q=3.6]], [[c=p+q=10]], e [[h=\\sqrt{6.4\\times3.6}=\\sqrt{23.04}]], [[[\\boxed{h=4.8}]]]. A área segue: [[K=(10\\times4.8)/2]], [[[\\boxed{K=24\\text{ square units}}]]]. O teorema dos segmentos verifica uma altura medida ou calculada de outra forma." },
          { "kind": "h3", "text": "Relação entre os segmentos e os catetos" },
          { "kind": "p", "text": "A mesma semelhança produz [[b^2=cp]] e [[a^2=cq]]. Com [[c=10]], [[p=6.4]], [[q=3.6]]: [[b=\\sqrt{10\\times6.4}=\\sqrt{64}=8]] e [[a=\\sqrt{10\\times3.6}=\\sqrt{36}=6]]. O triângulo 6-8-10 original é recuperado exatamente, o que mostra quão fortemente os segmentos, a altura e os catetos estão ligados." }
        ]
      },
      "sec-max": {
        "h2": "Quão grande pode ser a altura de um triângulo retângulo?",
        "blocks": [
          { "kind": "p", "text": "Nem todo par de números positivos pode ser uma hipotenusa e uma altura. Para um triângulo retângulo válido e não degenerado, [[[\\boxed{0<h\\leq\\frac{c}{2}}]]]. A altura deve ser positiva e nunca pode exceder metade da hipotenusa." },
          { "kind": "h3", "text": "Por que a altura não pode exceder metade da hipotenusa" },
          { "kind": "p", "text": "De [[h^2=pq]] com [[p+q=c]], o produto [[pq]] é maior quando os dois segmentos são iguais, [[p=q=c/2]]. Portanto [[h^2\\leq c^2/4]], e para comprimentos positivos [[h\\leq c/2]]. Em termos simples: a altura é mais alta quando divide a hipotenusa em duas metades iguais, e mesmo assim alcança apenas metade da hipotenusa." },
          { "kind": "h3", "text": "Área máxima para uma hipotenusa fixa" },
          { "kind": "p", "text": "Como [[K=ch/2]] e [[h\\leq c/2]], a maior área possível é [[[\\boxed{K_{\\max}=\\frac{c^2}{4}}]]]. Esse máximo pertence ao triângulo retângulo isósceles, onde os dois catetos são iguais. Com [[c=10]], a altura válida mais alta é [[h_{\\max}=5]], dando [[K_{\\max}=(10\\times5)/2=25]]. Uma altura de 6 com hipotenusa de 10 é impossível para um triângulo retângulo." },
          { "kind": "h3", "text": "O que acontece se a altura for grande demais?" },
          { "kind": "p", "text": "Tome [[c=10]] e [[h=6]]: [[6>5]], então nenhum triângulo retângulo tem essas medidas. A aritmética [[(10\\times6)/2=30]] é uma área válida para algum triângulo em um contexto mais geral, mas não torna [[c=10]], [[h=6]] uma entrada válida de triângulo retângulo. Esta página não afirma que a calculadora rejeita tal entrada automaticamente; a verificação é sua." },
          { "kind": "h3", "text": "A altura pode ser igual à metade da hipotenusa?" },
          { "kind": "p", "text": "Sim. A igualdade dá o triângulo retângulo isósceles com dois catetos iguais, um triângulo válido e não degenerado. É o caso limite, não um caso quebrado." }
        ],
        "imgAlt": "Triângulo 6-8-10 com altura dividindo a hipotenusa em p = 6,4 e q = 3,6, mais triângulo isósceles na altura máxima c/2",
        "figcaption": "Esquerda: a altura é a média geométrica dos segmentos da hipotenusa. Direita: a altura mais alta possível é metade da hipotenusa, dando a área máxima."
      },
      "sec-find-altitude": {
        "h2": "Como calcular a altura quando ela é desconhecida",
        "blocks": [
          { "kind": "p", "text": "Esta calculadora recebe [[h]] como entrada, então uma altura desconhecida deve ser encontrada ou medida primeiro. Três rotas padrão cobrem os casos comuns. Quando os lados são conhecidos e a altura é a peça que falta, a <a href=\"/right-triangle-altitude-from-sides-calculator/\">Calculadora de altura de triângulo retângulo a partir dos lados</a> a calcula diretamente." },
          { "kind": "h3", "text": "Método 1: Usando os dois catetos e a hipotenusa" },
          { "kind": "p", "text": "[[[\\boxed{h=\\frac{ab}{c}}]]]. Com [[a=6]], [[b=8]], [[c=10]]: [[h=(6\\times8)/10=4.8]]." },
          { "kind": "h3", "text": "Método 2: Usando os segmentos da hipotenusa" },
          { "kind": "p", "text": "[[[\\boxed{h=\\sqrt{pq}}]]]. Com [[p=6.4]] e [[q=3.6]]: [[h=\\sqrt{23.04}=4.8]]." },
          { "kind": "h3", "text": "Método 3: Usando a área conhecida e a hipotenusa" },
          { "kind": "p", "text": "Reorganizando [[K=ch/2]] obtém-se [[[\\boxed{h=\\frac{2K}{c}}]]]. Com [[K=24]] e [[c=10]]: [[h=(2\\times24)/10=4.8]]." }
        ],
        "closingParagraphs": [
          "Estas são reorganizações matemáticas, não modos extras da calculadora: a calculadora de área a partir da altura em si continua esperando a altura como entrada."
        ]
      },
      "sec-units": {
        "h2": "Entendendo as unidades quadradas nos cálculos de área de triângulo retângulo",
        "blocks": [
          { "kind": "p", "text": "A área é bidimensional. Multiplicar dois comprimentos também multiplica suas unidades: [[\\text{m}\\times\\text{m}=\\text{m}^2]]. A unidade de área é sempre o quadrado da unidade de comprimento." },
          { "kind": "h3", "text": "Metros quadrados" },
          { "kind": "p", "text": "Com [[c=10\\text{ m}]] e [[h=4.8\\text{ m}]], [[K=24\\text{ m}^2]]. Leia como 24 metros quadrados de superfície." },
          { "kind": "h3", "text": "Centímetros quadrados" },
          { "kind": "p", "text": "Com [[c=25\\text{ cm}]] e [[h=6.72\\text{ cm}]], [[K=84\\text{ cm}^2]]." },
          { "kind": "h3", "text": "Milímetros quadrados" },
          { "kind": "p", "text": "Com [[c=250\\text{ mm}]] e [[h=120\\text{ mm}]], [[K=15000\\text{ mm}^2]]." },
          { "kind": "h3", "text": "Convertendo unidades de área" },
          { "kind": "p", "text": "[[1\\text{ m}^2=10000\\text{ cm}^2]] e [[1\\text{ cm}^2=100\\text{ mm}^2]]. Uma conversão linear multiplica por 10, 100 ou 1000, mas uma conversão de área eleva esse fator ao quadrado: 100 cm em um metro se tornam [[100^2=10000]] centímetros quadrados em um metro quadrado. Converter o comprimento e converter a área são operações diferentes." },
          { "kind": "h3", "text": "E se as entradas usarem unidades diferentes?" },
          { "kind": "p", "text": "Converta primeiro, calcule depois. Uma hipotenusa em metros e uma altura em centímetros devem ser levadas a uma unidade, por exemplo 2 m e 150 cm viram 2 m e 1,5 m, antes de a fórmula ser aplicada. Unidades mistas na fórmula produzem um número sem sentido com nenhuma unidade limpa." }
        ]
      },
      "sec-mistakes": {
        "h2": "Erros comuns ao usar a fórmula da área pela altura",
        "blocks": [
          { "kind": "p", "text": "A maioria das respostas erradas nesta página vem de entradas mal rotuladas, não de aritmética ruim. Os dezoito erros abaixo cobrem quase todos." },
          { "kind": "h3", "text": "1. Usar um cateto em vez da altura" },
          { "kind": "p", "text": "A altura [[h]] desce do vértice do ângulo reto até a hipotenusa; um cateto corre ao longo da borda do triângulo. Em um triângulo 6-8-10, inserir o cateto 6 como altura dá [[(10\\times6)/2=30]] em vez de 24. Correção: a altura deve pousar sobre a hipotenusa com um marcador de ângulo reto." },
          { "kind": "h3", "text": "2. Confundir a altura com a hipotenusa" },
          { "kind": "p", "text": "Trocar [[c]] e [[h]] muda o significado do produto. Com [[c=10]] e [[h=4.8]], os números comutam na multiplicação, mas a verificação de viabilidade [[h\\leq c/2]] quebra: a entrada trocada afirma uma altura de 10 sobre uma hipotenusa de 4,8, o que é impossível. Correção: a hipotenusa é sempre o lado mais longo." },
          { "kind": "h3", "text": "3. Traçar a altura a partir do vértice errado" },
          { "kind": "p", "text": "Somente a altura do vértice do ângulo reto [[C]] se emparelha com a hipotenusa como sua base. Uma perpendicular de um vértice agudo pousa sobre um cateto, não sobre a hipotenusa, e não pertence a esta fórmula. Correção: comece no canto quadrado." },
          { "kind": "h3", "text": "4. Medir a altura em um ângulo não perpendicular" },
          { "kind": "p", "text": "Qualquer segmento não perpendicular de [[C]] até a hipotenusa é mais longo que a altura verdadeira, então a área sai grande demais. Correção: verifique o encontro de 90 graus, por construção ou com [[h=ab/c]]." },
          { "kind": "h3", "text": "5. Usar uma altura que corresponde a uma base diferente" },
          { "kind": "p", "text": "A altura até a hipotenusa se emparelha apenas com a hipotenusa. Emparelhá-la com um cateto, como em [[(8\\times4.8)/2=19.2]], mistura dois pares diferentes de base e altura. Correção: cada altura pertence a exatamente uma base." },
          { "kind": "h3", "text": "6. Esquecer de dividir por dois" },
          { "kind": "p", "text": "[[10\\times4.8=48]] é a área do paralelogramo, não a do triângulo. Correção: termine todo cálculo de base e altura com a divisão por dois." },
          { "kind": "h3", "text": "7. Multiplicar comprimentos com unidades incompatíveis" },
          { "kind": "p", "text": "Uma hipotenusa de 2 m com uma altura de 150 cm não é [[(2\\times150)/2=150]] de nada significativo. Correção: converta para uma unidade primeiro, aqui 2 m e 1,5 m, dando 1,5 m²." },
          { "kind": "h3", "text": "8. Informar a resposta em unidades lineares" },
          { "kind": "p", "text": "Uma área de 24 m² não é 24 m. Correção: escreva sempre a unidade quadrada junto ao número." },
          { "kind": "h3", "text": "9. Inserir comprimentos zero ou negativos" },
          { "kind": "p", "text": "[[c>0]] e [[h>0]] são necessários; entradas zero ou negativas não descrevem nenhum triângulo. Correção: meça novamente." },
          { "kind": "h3", "text": "10. Inserir uma altura maior que metade da hipotenusa" },
          { "kind": "p", "text": "[[c=10]], [[h=6]] viola [[h\\leq c/2]]. Correção: verifique novamente qual segmento foi medido; não era a altura perpendicular." },
          { "kind": "h3", "text": "11. Supor que todo par positivo forma um triângulo retângulo" },
          { "kind": "p", "text": "Positividade não basta; o limite da altura também deve valer. Correção: execute a verificação [[h\\leq c/2]] em cada novo par." },
          { "kind": "h3", "text": "12. Confundir a altura com o cateto vertical" },
          { "kind": "p", "text": "Em um diagrama, a altura pode parecer vertical enquanto um cateto parece inclinado, ou o contrário após uma rotação. Vertical na tela não significa nada. Correção: identifique os lados por seu papel geométrico, não por sua direção na tela." },
          { "kind": "h3", "text": "13. Arredondar a altura cedo demais" },
          { "kind": "p", "text": "Usar 4,6 para [[60/13\\approx4.61538]] e então calcular dá uma área ligeiramente errada, enquanto a fração exata cancela de forma limpa até 30. Correção: mantenha a precisão total até a resposta final." },
          { "kind": "h3", "text": "14. Supor que a hipotenusa deve ser horizontal" },
          { "kind": "p", "text": "A hipotenusa pode ficar em qualquer ângulo; a fórmula usa comprimentos, não orientações. Correção: confie nas medidas, não na rotação do desenho." },
          { "kind": "h3", "text": "15. Confundir o teorema da altura com o teorema de Pitágoras" },
          { "kind": "p", "text": "[[h^2=pq]] relaciona a altura aos segmentos da hipotenusa; [[a^2+b^2=c^2]] relaciona os três lados. Eles respondem a perguntas diferentes. Correção: combine o teorema com as quantidades que você tem." },
          { "kind": "h3", "text": "16. Usar uma altura medida de um triângulo diferente" },
          { "kind": "p", "text": "Uma altura pertence a um triângulo específico. Tomar 4,8 emprestado de um triângulo 6-8-10 para uma hipotenusa diferente dá uma área errada. Correção: cada cálculo usa as medidas do seu próprio triângulo." },
          { "kind": "h3", "text": "17. Supor que a área determina todos os comprimentos de lado" },
          { "kind": "p", "text": "Muitos triângulos retângulos diferentes compartilham uma área. Conhecer [[K=24]] não fixa [[c]] ou [[h]] individualmente. Correção: trate a área como uma equação, não como uma descrição completa." },
          { "kind": "h3", "text": "18. Tratar a área geométrica como material exato a comprar" },
          { "kind": "p", "text": "A fórmula dá a área geométrica ideal. Projetos reais precisam de desperdício, sobreposições e margens de corte por cima. Correção: adicione uma margem de projeto depois que a geometria estiver pronta." },
          { "kind": "h3", "text": "Errado versus correto: um exemplo concreto" },
          { "kind": "p", "text": "Dados [[c=10]] e [[h=4.8]], o cálculo incorreto pula a divisão por dois: [[K=10\\times4.8=48]]. Essa é a área do paralelogramo correspondente. O cálculo correto é [[K=(10\\times4.8)/2]], [[[\\boxed{K=24}]]]. Uma segunda ilustração: substituir o cateto 8 pela altura dá [[(10\\times8)/2=40]], errado porque 8 não é perpendicular à hipotenusa. A altura, e somente a altura, se emparelha com [[c]]." }
        ]
      },
      "sec-verify": {
        "h2": "Como verificar se seu cálculo de área está correto",
        "blocks": [
          { "kind": "p", "text": "Sete verificações pegam a grande maioria dos resultados ruins antes que saiam da página." },
          { "kind": "h3", "text": "Verificação 1: Entradas positivas" },
          { "kind": "p", "text": "Para um triângulo retângulo válido, [[c>0]] e [[h>0]]. Comprimentos zero ou negativos não descrevem nenhum triângulo." },
          { "kind": "h3", "text": "Verificação 2: O limite da altura" },
          { "kind": "p", "text": "Confirme [[h\\leq c/2]]. Essa única desigualdade elimina a entrada impossível mais comum, como [[c=10]] com [[h=6]]." },
          { "kind": "h3", "text": "Verificação 3: Confirme o ângulo reto" },
          { "kind": "p", "text": "A altura deve ser perpendicular à hipotenusa. Se o desenho ou a medição não puder confirmar o encontro de 90 graus, a entrada não é uma altura." },
          { "kind": "h3", "text": "Verificação 4: Unidades quadradas" },
          { "kind": "p", "text": "Entradas em metros dão metros quadrados, entradas em centímetros dão centímetros quadrados. A unidade da resposta é o quadrado da unidade de entrada, nunca a própria unidade de entrada." },
          { "kind": "h3", "text": "Verificação 5: Conferência cruzada com a fórmula dos catetos" },
          { "kind": "p", "text": "Para o triângulo 6-8-10, [[(6\\times8)/2=24]] e [[(10\\times4.8)/2=24]]. Dois métodos, um triângulo, uma resposta: a concordância é a verificação mais forte disponível." },
          { "kind": "h3", "text": "Verificação 6: A relação da média geométrica" },
          { "kind": "p", "text": "Quando os segmentos da hipotenusa são conhecidos, verifique [[h^2=pq]]: [[4.8^2=6.4\\times3.6]], [[23.04=23.04]]. Uma divergência significa que a altura, os segmentos ou a identificação do triângulo está errada." },
          { "kind": "h3", "text": "Verificação 7: Compare com a área máxima possível" },
          { "kind": "p", "text": "Para uma hipotenusa fixa, [[K\\leq c^2/4]]. Com [[c=10]], qualquer área de triângulo retângulo declarada acima de 25 unidades quadradas é impossível. Esta página não declara nada sobre o comportamento de validação da própria calculadora; a verificação é sua." }
        ]
      },
      "sec-compare": {
        "h2": "Área pela altura vs. área pelos dois catetos",
        "blocks": [
          { "kind": "p", "text": "Duas fórmulas, uma área. [[K=ab/2]] precisa dos dois catetos perpendiculares; [[K=ch/2]] precisa da hipotenusa e de sua altura. Nenhuma é mais correta; são a mesma quantidade alcançada a partir de medidas diferentes." }
        ],
        "table": {
          "headers": ["Método", "Medidas necessárias", "Vantagem principal"],
          "rows": [
            ["Área pelos catetos", "[[a]], [[b]]", "Mais simples quando os dois catetos são conhecidos"],
            ["Área pela altura", "[[c]], [[h]]", "Direta quando a hipotenusa e a altura perpendicular são conhecidas"],
            ["Área pelo ângulo", "Lados apropriados e ângulo incluído", "Útil quando um ângulo agudo é conhecido"],
            ["Área pelo inraio", "[[r]], [[s]]", "Útil em problemas de círculo inscrito e semiperímetro"]
          ]
        },
        "closingParagraphs": [
          "A área do mesmo triângulo retângulo não muda quando outro método válido é usado. Escolha a linha que corresponde aos números que você já tem em mãos; quando duas linhas estiverem disponíveis, sua concordância é uma verificação gratuita de correção."
        ]
      },
      "sec-conclusion": {
        "h2": "A hipotenusa e sua altura são tudo o que você precisa",
        "blocks": [
          { "kind": "p", "text": "O método da altura é a regra de base e altura apontada para o lado mais longo. Uma vez identificada a hipotenusa e com a altura perpendicular em mãos, a área está a uma multiplicação e uma divisão por dois de distância, sem necessidade de recuperar os catetos primeiro." },
          { "kind": "p", "text": "Sua verdadeira força é a disciplina: a perpendicularidade, o limite da altura e as relações da média geométrica transformam esboços vagos de triângulos em números verificáveis. Execute as verificações, compare com a fórmula dos catetos quando os catetos estiverem disponíveis, e a resposta conquista sua confiança." },
          { "kind": "p", "text": "Mantenha a calculadora desta página para os casos em que a hipotenusa e a altura são os dados medidos, e recorra às calculadoras de catetos, ângulo ou semiperímetro quando as medidas apontarem para outro lado." }
        ]
      }
    },
    "faqs": [
      { "question": "Qual é a fórmula da área de um triângulo retângulo usando a altura?", "answer": "A fórmula é K = ch/2, onde c é a hipotenusa e h é a altura perpendicular do vértice do ângulo reto até a hipotenusa. Multiplique os dois comprimentos e divida por dois. O resultado sai em unidades quadradas correspondentes às entradas, então entradas em metros dão metros quadrados. A altura deve encontrar a hipotenusa a 90 graus para que a fórmula se aplique." },
      { "question": "O que significa a altura h em um triângulo retângulo?", "answer": "A altura h é o segmento perpendicular do vértice C do ângulo reto até a hipotenusa, encontrando-a no ponto D. É a menor distância desse vértice até a hipotenusa e a altura que se emparelha com a hipotenusa como base. Ela não é um cateto, e não é qualquer linha traçada dentro do triângulo." },
      { "question": "A altura é a mesma coisa que um dos catetos?", "answer": "Não. Os catetos a e b formam o ângulo reto, enquanto a altura é um segmento separado desse vértice até o lado oposto. Em um triângulo 6-8-10, a altura é 4,8, que não é igual a nenhum cateto. Inserir um cateto onde a altura deveria estar é um dos erros mais comuns com esta fórmula." },
      { "question": "Por que a hipotenusa pode ser usada como base?", "answer": "Qualquer lado de um triângulo pode servir de base quando sua altura perpendicular correspondente é conhecida. Para a hipotenusa, essa altura é a altura do vértice do ângulo reto. Como os dois são perpendiculares, a regra geral de metade da base vezes a altura se aplica diretamente, dando K = ch/2." },
      { "question": "Por que dividimos o produto hipotenusa-altura por dois?", "answer": "O produto c vezes h é a área do paralelogramo construído sobre a mesma base com a mesma altura. Um triângulo preenche exatamente metade desse paralelogramo, então o produto deve ser reduzido à metade. Pular a divisão responde a outra pergunta: com c = 10 e h = 4,8, 48 é o paralelogramo enquanto 24 é o triângulo." },
      { "question": "Como encontrar a altura se os dois catetos são conhecidos?", "answer": "Use h = ab/c. Multiplique os dois catetos e divida pela hipotenusa, que você pode obter pelo teorema de Pitágoras quando necessário. Para catetos 6 e 8 com hipotenusa 10, h = 48/10 = 4,8. A calculadora de altura a partir dos lados deste site realiza exatamente esse cálculo quando os lados são conhecidos." },
      { "question": "O que é o teorema da média geométrica para a altura do triângulo retângulo?", "answer": "Ele afirma que h ao quadrado é igual a p vezes q, onde p e q são os dois segmentos que a altura corta da hipotenusa. A altura é, portanto, a média geométrica desses segmentos. Para p = 6,4 e q = 3,6, h = raiz de 23,04 = 4,8, o que também verifica uma altura encontrada de outra forma." },
      { "question": "A altura pode ser maior que metade da hipotenusa?", "answer": "Não. Para um triângulo retângulo válido, h deve satisfazer 0 < h <= c/2. A altura é mais alta quando divide a hipotenusa em metades iguais, alcançando exatamente c/2 no caso isósceles. Um valor maior, como h = 6 com c = 10, não pode pertencer a um triângulo retângulo com essa hipotenusa." },
      { "question": "Como calcular a área quando apenas a hipotenusa e a altura são conhecidas?", "answer": "Aplique K = ch/2 diretamente. Nenhuma reconstrução dos catetos é necessária porque a área já está determinada por um lado e sua altura correspondente. Por exemplo, c = 10 e h = 4,8 dão K = 24 unidades quadradas. Apenas confirme primeiro que a altura é perpendicular e não maior que metade da hipotenusa." },
      { "question": "Por que a fórmula baseada na altura dá o mesmo resultado que a fórmula dos catetos?", "answer": "Ambas calculam a área do mesmo triângulo. Igualar ab/2 a ch/2 e multiplicar por dois dá ab = ch, então h = ab/c. As duas fórmulas são algebricamente equivalentes para qualquer triângulo retângulo consistente, por isso calcular ambas é uma verificação tão forte: a concordância confirma as entradas." },
      { "question": "Quais unidades o resultado da área deve usar?", "answer": "Unidades quadradas correspondentes aos comprimentos de entrada: metros dão metros quadrados, centímetros dão centímetros quadrados, milímetros dão milímetros quadrados. Converta todas as entradas para uma unidade antes de calcular. Lembre-se de que as conversões de área elevam o fator linear ao quadrado, então um metro quadrado equivale a 10.000 centímetros quadrados." },
      { "question": "A fórmula baseada na altura pode ser usada para outros triângulos?", "answer": "A regra de base e altura de metade da base vezes a altura funciona para todo triângulo com um par perpendicular correspondente. O que é especial aqui são as restrições do triângulo retângulo: a altura deve descer do vértice do ângulo reto, e h nunca pode exceder c/2. Esses limites não se aplicam a triângulos acutângulos ou obtusângulos." }
    ],
    "faqHeading": "Perguntas frequentes",
    "relatedHeading": "Explore calculadoras de triângulo retângulo relacionadas",
    "relatedItems": [
      "Calculadora de área de triângulo retângulo",
      "Calculadora de área de triângulo retângulo a partir dos catetos",
      "Calculadora de altura de triângulo retângulo a partir dos lados",
      "Calculadora de área de triângulo retângulo a partir do semiperímetro",
      "Calculadora de área de triângulo retângulo a partir do ângulo",
      "Calculadora de perímetro de triângulo retângulo",
      "Calculadora de lados de triângulo retângulo"
    ]
  },
  "bn": {
    "tocHeading": "এই নির্দেশিকায়",
    "tocItems": {
      "sec-intro": "উচ্চতা থেকে সমকোণী ত্রিভুজের ক্ষেত্রফল কীভাবে গণনা করবেন",
      "sec-understand": "অতিভুজ ও উচ্চতা বোঝা",
      "sec-formula": "উচ্চতা থেকে সমকোণী ত্রিভুজের ক্ষেত্রফলের সূত্র",
      "sec-steps": "ধাপে ধাপে গণনার উদাহরণ",
      "sec-howto": "উচ্চতা থেকে ক্ষেত্রফল ক্যালকুলেটর কীভাবে ব্যবহার করবেন",
      "sec-examples": "কার্যোদাহরণ: অতিভুজ ও উচ্চতা",
      "sec-applications": "বাস্তব জীবনে প্রয়োগ",
      "sec-equal": "কেন দুটি ক্ষেত্রফল সূত্র একমত হয়",
      "sec-geomean": "উচ্চতা কীভাবে সমকোণী ত্রিভুজকে ভাগ করে",
      "sec-max": "সর্বোচ্চ সম্ভাব্য উচ্চতা",
      "sec-find-altitude": "উচ্চতা অজানা থাকলে তা নির্ণয়",
      "sec-units": "বর্গ একক ও রূপান্তর",
      "sec-mistakes": "সাধারণ ভুল",
      "sec-verify": "আপনার উত্তর কীভাবে যাচাই করবেন",
      "sec-compare": "উচ্চতা থেকে ক্ষেত্রফল বনাম দুটি বাহু থেকে ক্ষেত্রফল",
      "sec-related": "সম্পর্কিত সমকোণী ত্রিভুজ ক্যালকুলেটর দেখুন",
      "sec-faq": "সচরাচর জিজ্ঞাসিত প্রশ্ন",
      "sec-conclusion": "উপসংহার"
    },
    "sections": {
      "sec-intro": {
        "h2": "উচ্চতা থেকে সমকোণী ত্রিভুজের ক্ষেত্রফল কীভাবে গণনা করবেন",
        "blocks": [
          { "kind": "p", "text": "ধরুন, একটি সমকোণী ত্রিভুজের অতিভুজ 10 মি, আর সমকোণ শীর্ষ থেকে সেই অতিভুজ পর্যন্ত লম্ব দূরত্ব 4.8 মি। এর ক্ষেত্রফল সরাসরি বের হয়: [[K=(10\\times4.8)/2]], [[[\\boxed{K=24\\text{ m}^2}]]]। ত্রিভুজটি 24 বর্গমিটার সমতল পৃষ্ঠ ঘিরে রেখেছে।" },
          { "kind": "p", "text": "এই ক্যালকুলেটর ঠিক এই পরিস্থিতির জন্যই তৈরি। যখন আপনি সমকোণী ত্রিভুজের সবচেয়ে লম্বা বাহু, অতিভুজ [[c]], এবং সমকোণ শীর্ষ থেকে সেই বাহুর ওপর লম্ব উচ্চতা [[h]] জানেন, তখন দুটি বাহুর দরকার হয় না। অতিভুজ ভূমি হিসেবে কাজ করে, উচ্চতা তার সঙ্গত লম্ব উচ্চতা, আর প্রতিটি ত্রিভুজের ক্ষেত্রফল একটি ভূমি ও তার সঙ্গত উচ্চতার গুণফলের অর্ধেক: [[K=ch/2]]।" },
          { "kind": "p", "text": "উচ্চতাকে অতিভুজের সঙ্গে সমকোণে মিলতে হবে; তির্যক কোনো রেখাংশ যা লম্ব নয়, তা ভুল উচ্চতা ও ভুল ক্ষেত্রফল দেবে। দুটি মাপই সঙ্গত দৈর্ঘ্য এককে দিন, ক্যালকুলেটর সঙ্গত বর্গ এককে ক্ষেত্রফল ফেরত দেবে, প্রতিটি প্রতিস্থাপন ধাপ দেখিয়ে।" }
        ]
      },
      "sec-understand": {
        "h2": "সমকোণী ত্রিভুজের অতিভুজ ও উচ্চতা বোঝা",
        "blocks": [
          { "kind": "p", "text": "এই নির্দেশিকায় পুরো লেখাজুড়ে একটি সুসংগত প্রতীক পদ্ধতি ব্যবহার করা হয়েছে: [[A]] ও [[B]] দুটি সূক্ষ্মকোণ, [[C=90^\\circ]] সমকোণ, বাহু [[a]] কোণ [[A]]-এর বিপরীতে, বাহু [[b]] কোণ [[B]]-এর বিপরীতে, বাহু [[c]] কোণ [[C]]-এর বিপরীত অতিভুজ, [[h]] শীর্ষ [[C]] থেকে অতিভুজের ওপর লম্ব উচ্চতা যা তাকে বিন্দু [[D]]-তে ছোঁয়, [[p]] ও [[q]] অতিভুজের অংশ [[AD]] ও [[DB]], এবং [[K]] ক্ষেত্রফল।" },
          { "kind": "h3", "text": "সমকোণী ত্রিভুজ কী?" },
          { "kind": "p", "text": "সমকোণী ত্রিভুজে ঠিক একটি 90-ডিগ্রি কোণ থাকে। এর দুটি লম্ব-ভূমি বাহু সমকোণে মিলিত হয়, আর অতিভুজ তার বিপরীতে থাকে। অতিভুজ সবসময় সবচেয়ে লম্বা বাহু। অন্য দুটি কোণ সূক্ষ্ম, আর যেহেতু তিনটি কোণের যোগফল 180 ডিগ্রি, তাই [[A+B=90^\\circ]]। এই তথ্যগুলো গুরুত্বপূর্ণ, কারণ উচ্চতা পদ্ধতি এদের ওপর নির্ভর করে: ভূমি হতেই হবে অতিভুজ, আর উচ্চতাকে নামতে হবে সমকোণ শীর্ষ থেকে।" },
          { "kind": "h3", "text": "অতিভুজ কী?" },
          { "kind": "p", "text": "অতিভুজ সমকোণের বিপরীত বাহু, ক্যালকুলেটরে [[c]] দিয়ে চিহ্নিত। যেকোনো অভিমুখে এটি চিনতে হলে সেই বাহুটি খুঁজুন যা বর্গ-কোণ চিহ্নটিকে স্পর্শ করে না: সেই বাহুই অতিভুজ। উচ্চতা সূত্রে এটি ভূমির ভূমিকা পালন করে, তাই সঠিকভাবে চেনাই এই পৃষ্ঠা যে প্রথম দক্ষতা শেখায়।" },
          { "kind": "h3", "text": "উচ্চতা কী?" },
          { "kind": "p", "text": "উচ্চতা ত্রিভুজের একটি শীর্ষ থেকে বিপরীত বাহুর রেখার ওপর অঙ্কিত লম্বরেখাংশ। এখানে উচ্চতা [[h]] সমকোণ শীর্ষ [[C]] থেকে অতিভুজ [[AB]] পর্যন্ত যায় এবং তাকে বিন্দু [[D]]-তে ছোঁয়, অর্থাৎ [[CD\\perp AB]]। এটি একটি লম্ব দূরত্ব, ত্রিভুজের ভেতরে টানা যেকোনো রেখা নয়: শুধু সেই রেখাংশই যোগ্য যা অতিভুজকে 90 ডিগ্রিতে ছোঁয়।" },
          { "kind": "h3", "text": "উচ্চতা কি একটি বাহুর সমান?" },
          { "kind": "p", "text": "না। বাহু [[a]] ও [[b]] মূল সমকোণে মিলিত হয়, আর উচ্চতা সেই একই শীর্ষ থেকে বিপরীত বাহু পর্যন্ত একটি আলাদা রেখাংশ। একটি 6-8-10 ত্রিভুজ নিন: [[a=6]], [[b=8]], [[c=10]]। এর উচ্চতা [[h=(6\\times8)/10=4.8]]। কোনো বাহুই 4.8 নয়, অথচ অতিভুজের ওপর উচ্চতা ঠিক 4.8। একটি বাহুকে উচ্চতার সঙ্গে গুলিয়ে ফেলা এই পৃষ্ঠার সবচেয়ে সাধারণ ভুলগুলোর একটি।" },
          { "kind": "h3", "text": "উচ্চতা কেন ত্রিভুজের ভেতরে পড়ে" },
          { "kind": "p", "text": "অপতিত সমকোণী ত্রিভুজের ক্ষেত্রে সমকোণ শীর্ষ থেকে লম্ব অতিভুজের ওপর তার প্রান্তদ্বয়ের মাঝখানে পড়ে, কখনো বাইরে নয়। এটি মূল ত্রিভুজকে দুটি ছোট সমকোণী ত্রিভুজে ভাগ করে। সেই দুটি ত্রিভুজ মূল ত্রিভুজের সূক্ষ্মকোণগুলোর মাপ ভাগ করে নেয়, ফলে তিনটি ত্রিভুজই পরস্পর সদৃশ হয়। এই সদৃশতাই কারণ যে উচ্চতা এমন পরিপাটি সম্পর্ক মেনে চলে, যা নিচে গুণোত্তর মধ্যক অংশে আলোচনা করা হয়েছে।" }
        ],
        "imgAlt": "সমকোণী ত্রিভুজ ABC: লম্ব-ভূমি বাহু a ও b, ভূমি হিসেবে অতিভুজ c, শীর্ষ C থেকে D বিন্দুতে উচ্চতা h, সূত্র K = ch/2",
        "figcaption": "উচ্চতা পদ্ধতির গঠন: অতিভুজ c ভূমি, উচ্চতা h তাকে D বিন্দুতে 90 ডিগ্রিতে ছোঁয়, আর ক্ষেত্রফল K = ch/2।"
      },
      "sec-formula": {
        "h2": "উচ্চতা থেকে সমকোণী ত্রিভুজের ক্ষেত্রফলের সূত্র",
        "blocks": [
          { "kind": "p", "text": "উচ্চতা-ক্ষেত্রফলের সূত্র [[[\\boxed{K=\\frac{ch}{2}}]]]। এখানে [[K]] ক্ষেত্রফল, [[c]] ভূমি হিসেবে অতিভুজ, আর [[h]] অতিভুজের ওপর লম্ব উচ্চতা। তিনটি প্রতীক, একটি গুণ, একটি অর্ধেক।" },
          { "kind": "h3", "text": "অতিভুজকে উচ্চতা দিয়ে কেন গুণ করি?" },
          { "kind": "p", "text": "ত্রিভুজের ক্ষেত্রফলের সাধারণ সূত্র [[K=\\frac{\\text{base}\\times\\text{height}}{2}]], আর ভূমি ও উচ্চতা পরস্পর লম্ব হতেই হবে। অতিভুজকে ভূমি ধরলে উচ্চতাকে তার ওপর লম্ব দূরত্ব হতেই হবে, যা ঠিক উচ্চতা: [[\\text{base}=c]] ও [[\\text{height}=h]], তাই [[K=ch/2]]। ত্রিভুজ যেভাবেই ঘোরানো বা আঁকা হোক, এটি খাটে: লম্বত্ব একটি জ্যামিতিক সম্পর্ক, পর্দার দিক নয়, তাই তির্যক অতিভুজ অনুভূমিকের মতোই ভালো ভূমি হিসেবে কাজ করে।" },
          { "kind": "h3", "text": "ফলাফলকে কেন দুই দিয়ে ভাগ করা হয়?" },
          { "kind": "p", "text": "একই ভূমি ও একই লম্ব উচ্চতার ওপর নির্মিত সামান্তরিকের অর্ধেক জায়গা দখল করে ত্রিভুজ। [[c=10]] ও [[h=4.8]] হলে গুণফল [[c\\times h=48]] সেই সামান্তরিকের ক্ষেত্রফল। ত্রিভুজ তার অর্ধেক, তাই [[K=48/2=24]]। 48 জানানো অন্য প্রশ্নের উত্তর হতো: পূর্ণ সামান্তরিকের ক্ষেত্রফল, তার ভেতরের ত্রিভুজের নয়।" },
          { "kind": "h3", "text": "এই সূত্র কি প্রতিটি ত্রিভুজের জন্য কাজ করে?" },
          { "kind": "p", "text": "ভূমি-উচ্চতা নিয়ম প্রতিটি ত্রিভুজের জন্য কাজ করে, যদি উচ্চতা নির্বাচিত ভূমির ওপর লম্ব হয়। এখানে বিশেষ হলো ভূমির পছন্দ: সমকোণী ত্রিভুজের অতিভুজ, সমকোণ শীর্ষ থেকে উচ্চতা নামিয়ে। এই পছন্দ অতিরিক্ত জ্যামিতিক সীমাবদ্ধতা আনে, যেমন উচ্চতা কখনো অতিভুজের অর্ধেকের বেশি হতে পারে না, যা সাধারণ ত্রিভুজে প্রযোজ্য নয়।" },
          { "kind": "h3", "text": "সূত্রে দুটি বাহুর দরকার কেন হয় না" },
          { "kind": "p", "text": "ক্ষেত্রফলের জন্য একটি বাহু ও তার সঙ্গত লম্ব উচ্চতা দরকার, এর বেশি কিছু নয়। [[c]] ও [[h]] আগে থেকে জানা থাকলে বাহু দুটি ক্ষেত্রফল সম্পর্কে কোনো নতুন তথ্য যোগ করে না। বাহু-সূত্র [[K=ab/2]] একই রাশিতে পৌঁছানোর একটি ভিন্ন ইনপুট পথ, যা তখন কাজে লাগে যখন মাপা তথ্য দুটি লম্ব বাহু।" }
        ],
        "imgAlt": "কেন ত্রিভুজের ক্ষেত্রফল ভূমি গুণ উচ্চতার অর্ধেক: c = 10, h = 4.8, 48 কে 2 দিয়ে ভাগ করলে 24 বর্গ একক",
        "figcaption": "c গুণ h গুণফল পূর্ণ আয়তক্ষেত্র; ত্রিভুজ তার ঠিক অর্ধেক ভরে, তাই সূত্র দুই দিয়ে ভাগ করে।"
      },
      "sec-steps": {
        "h2": "উচ্চতা থেকে ক্ষেত্রফল গণনার ধাপে ধাপে উদাহরণ",
        "blocks": [
          { "kind": "p", "text": "মাপ থেকে যাচাইকৃত উত্তর পর্যন্ত একটি সম্পূর্ণ গণনা, [[c=10\\text{ m}]] ও [[h=4.8\\text{ m}]] ব্যবহার করে।" }
        ],
        "steps": [
          "<strong>দেওয়া মাপগুলো চিহ্নিত করুন।</strong> অতিভুজ [[c=10\\text{ m}]] আর তার ওপর লম্ব উচ্চতা [[h=4.8\\text{ m}]]। নিশ্চিত করুন উচ্চতা অতিভুজকে সমকোণে ছুঁয়েছে।",
          "<strong>সূত্রটি লিখুন।</strong> [[K=ch/2]]।",
          "<strong>মাপগুলো বসান।</strong> [[K=(10\\times4.8)/2]]।",
          "<strong>গুণ করুন।</strong> [[10\\times4.8=48]], তাই [[K=48/2]]।",
          "<strong>দুই দিয়ে ভাগ করুন।</strong> [[[\\boxed{K=24\\text{ m}^2}]]]।",
          "<strong>উত্তরের ব্যাখ্যা দিন।</strong> ত্রিভুজটি 24 বর্গমিটার সমতল ক্ষেত্রফল ঘিরে রেখেছে।",
          "<strong>সম্ভাব্যতা যাচাই করুন।</strong> বৈধ সমকোণী ত্রিভুজের জন্য [[h\\leq c/2]] দরকার; এখানে [[4.8\\leq5]], তাই মাপগুলো একটি বাস্তব সমকোণী ত্রিভুজ বর্ণনা করতে পারে।",
          "<strong>বাহু দিয়ে যাচাই করুন।</strong> 6-8-10 ত্রিভুজের অতিভুজ ও উচ্চতা একই, আর [[K=(6\\times8)/2=24]]। দুটি পথই একমত।"
        ]
      },
      "sec-howto": {
        "h2": "উচ্চতা থেকে সমকোণী ত্রিভুজের ক্ষেত্রফল ক্যালকুলেটর কীভাবে ব্যবহার করবেন",
        "blocks": [
          { "kind": "p", "text": "এই পৃষ্ঠার ক্যালকুলেটরের ঠিক দুটি ইনপুট দরকার। নিচের ধাপগুলো পর্দার ক্রম অনুসরণ করে, যাতে প্রথমবারের ব্যবহারকারী আঁকা বা মাপা ত্রিভুজ থেকে যাচাইকৃত ক্ষেত্রফলে পৌঁছাতে পারেন।" }
        ],
        "steps": [
          "<strong>সমকোণী ত্রিভুজটি চিহ্নিত করুন।</strong> একটি কোণ 90 ডিগ্রি তা নিশ্চিত করুন; পদ্ধতিটি শুধু সমকোণী ত্রিভুজে প্রযোজ্য।",
          "<strong>এর অতিভুজ [[c]] খুঁজুন।</strong> এটি সমকোণের বিপরীত বাহু এবং সবচেয়ে লম্বা বাহু।",
          "<strong>লম্ব উচ্চতা [[h]] চিহ্নিত করুন।</strong> এটি সমকোণ শীর্ষ থেকে অতিভুজ পর্যন্ত যায় এবং তাকে 90 ডিগ্রিতে ছোঁয়।",
          "<strong>দুটি মানই মাপুন বা সংগ্রহ করুন।</strong> সরাসরি মাপুন, অথবা বাহু জানা থাকলে প্রথমে [[h=ab/c]] দিয়ে উচ্চতা গণনা করুন।",
          "<strong>\\\"Hypotenuse c\\\" ঘরে অতিভুজের মান দিন।</strong>",
          "<strong>\\\"Altitude h\\\" ঘরে উচ্চতার মান দিন।</strong>",
          "<strong>সঙ্গত দৈর্ঘ্য একক নির্বাচন করুন।</strong> সূত্র প্রয়োগের আগে দুটি ইনপুটেরই একক এক হতে হবে।",
          "<strong>দুটি মানই ধনাত্মক তা নিশ্চিত করুন।</strong> শূন্য বা ঋণাত্মক দৈর্ঘ্য কোনো ত্রিভুজ বর্ণনা করে না।",
          "<strong>যাচাই করুন [[h]] অতিভুজের অর্ধেকের বেশি নয়।</strong> [[c=10]] হলে 5-এর বেশি যেকোনো উচ্চতা সেই অতিভুজের সমকোণী ত্রিভুজের হতে পারে না।",
          "<strong>হিসাব করুন Area-এ ক্লিক করুন।</strong>",
          "<strong>ক্ষেত্রফলের ফলাফল পর্যালোচনা করুন।</strong> এটি ইনপুট এককের সঙ্গে মিলিয়ে বর্গ এককে দেখায়।",
          "<strong>প্রদর্শিত সমাধান ধাপগুলো পড়ুন।</strong> এতে সূত্র, প্রতিস্থাপন ও পাটিগণিত দেখানো হয়।",
          "<strong>লাইভ চিত্রটি পরীক্ষা করুন।</strong> চিত্রের অতিভুজ ও উচ্চতা আপনার উদ্দিষ্ট মাপের সঙ্গে মিলছে তা নিশ্চিত করুন।",
          "<strong>নতুন গণনার জন্য রিসেট করুন ব্যবহার করুন।</strong> রিসেট করুন বোতাম দুটি ঘর মুছে দেয়, যাতে পরের গণনা পরিষ্কারভাবে শুরু হয়।"
        ],
        "closingParagraphs": [
          "ক্যালকুলেটর দুটি বাহু বা একটি কোণ চায় না, কারণ উচ্চতা পদ্ধতির সত্যিই এদের দরকার নেই।"
        ]
      },
      "sec-examples": {
        "h2": "অতিভুজ ও উচ্চতা থেকে সমকোণী ত্রিভুজের ক্ষেত্রফলের কার্যোদাহরণ",
        "blocks": [
          { "kind": "p", "text": "চারটি কার্যোদাহরণ পরিচিত ত্রিভুজ থেকে পদ্ধতিটি গড়ে তোলে। প্রতিটি প্রয়োজনে বাহু থেকে উচ্চতা গণনা করে, [[K=ch/2]] প্রয়োগ করে এবং বাহু-সূত্রের সঙ্গে মিলিয়ে দেখে।" },
          { "kind": "h3", "text": "উদাহরণ 1: একটি 3-4-5 সমকোণী ত্রিভুজ" },
          { "kind": "p", "text": "দেওয়া আছে [[a=3]], [[b=4]], [[c=5]]। উচ্চতা [[h=ab/c]], তাই [[h=(3\\times4)/5=2.4]]। ক্ষেত্রফল [[K=(5\\times2.4)/2]], [[[\\boxed{K=6\\text{ square units}}]]]। বাহু দিয়ে যাচাই করলে [[K=(3\\times4)/2=6]]। দুটি সূত্রই একই ত্রিভুজ বর্ণনা করে, তাই এদের একমত হতেই হবে, এবং হয়েছে।" },
          { "kind": "h3", "text": "উদাহরণ 2: একটি 5-12-13 সমকোণী ত্রিভুজ" },
          { "kind": "p", "text": "দেওয়া আছে [[a=5]], [[b=12]], [[c=13]]। উচ্চতা [[h=(5\\times12)/13=60/13\\approx4.61538]]। সঠিক ভগ্নাংশ রেখে [[K=(13\\times(60/13))/2]], [[[\\boxed{K=30\\text{ square units}}]]]। বৃত্তায়িত দশমিকের বদলে [[60/13]] রাখলে আগাম বৃত্তায়নের ভুল এড়ানো যায়: 13 ঠিকভাবে কাটা যায়, ফলে পরিষ্কার 30 থাকে।" },
          { "kind": "h3", "text": "উদাহরণ 3: একটি 6-8-10 সমকোণী ত্রিভুজ" },
          { "kind": "p", "text": "সরাসরি দেওয়া আছে [[c=10]] ও [[h=4.8]]। তাহলে [[K=(10\\times4.8)/2]], [[[\\boxed{K=24\\text{ square units}}]]]। বাহু 6 ও 8 হলে [[K=(6\\times8)/2=24]], যা উচ্চতা-পথ নিশ্চিত করে।" },
          { "kind": "h3", "text": "উদাহরণ 4: একটি সমদ্বিবাহু সমকোণী ত্রিভুজ" },
          { "kind": "p", "text": "দেওয়া আছে [[c=10]] ও [[h=5]]। তাহলে [[K=(10\\times5)/2]], [[[\\boxed{K=25\\text{ square units}}]]]। অতিভুজ 10 হলে যেকোনো সমকোণী ত্রিভুজের এটাই সর্বোচ্চ ক্ষেত্রফল। বাহু দুটি সমান হলেই উচ্চতা অতিভুজের অর্ধেকের সমান হয়, প্রতিটি সূক্ষ্মকোণ [[45^\\circ]] হয়, আর এই অতিভুজের কোনো বৈধ সমকোণী ত্রিভুজ 25 বর্গ এককের বেশি হতে পারে না।" }
        ]
      },
      "sec-applications": {
        "h2": "উচ্চতা থেকে সমকোণী ত্রিভুজের ক্ষেত্রফলের বাস্তব প্রয়োগ",
        "blocks": [
          { "kind": "p", "text": "বারোটি সমাধানকৃত পরিস্থিতি বিভিন্ন স্কেল ও বিভিন্ন এককে সূত্রটি দেখায়। প্রতিটি দৃশ্যের ত্রিভুজ, দুটি মাপ, প্রতিস্থাপন, ক্ষেত্রফল এবং মডেলের পেছনের অনুমানের নাম দেয়।" },
          { "kind": "h3", "text": "উদাহরণ 1: ত্রিভুজাকার বাগানের অংশ" },
          { "kind": "p", "text": "একটি সমকোণী ত্রিভুজাকার বাগানের অংশের সবচেয়ে লম্বা সীমানা 10 মি, আর সমকোণ কোণা থেকে সেই সীমানা পর্যন্ত লম্ব দূরত্ব 4.8 মি। তাই [[c=10\\text{ m}]] ও [[h=4.8\\text{ m}]]: [[K=(10\\times4.8)/2]], [[[\\boxed{K=24\\text{ m}^2}]]]। অংশটি 24 বর্গমিটার জায়গা দখল করে। এতে ধরে নেওয়া হয়েছে সীমানা সোজা এবং কোণাটি প্রকৃত সমকোণ।" },
          { "kind": "h3", "text": "উদাহরণ 2: ত্রিভুজাকার প্লাইউড প্যানেল" },
          { "kind": "p", "text": "একটি সমকোণী ত্রিভুজাকার প্লাইউড প্যানেলের অতিভুজ 1 মি ও লম্ব উচ্চতা 0.48 মি: [[K=(1\\times0.48)/2]], [[[\\boxed{K=0.24\\text{ m}^2}]]]। এটি একটি পৃষ্ঠের সমতল ক্ষেত্রফল, কভারেজ অনুমানে কাজে লাগে। কাটার অপচয় ও উপাদানের বাড়তি আলাদা বিবেচনা।" },
          { "kind": "h3", "text": "উদাহরণ 3: সমকোণী ত্রিভুজাকার কাচের জানালা" },
          { "kind": "p", "text": "একটি সমকোণী ত্রিভুজাকার কাচের প্যানেলের অতিভুজ 1.3 মি ও সেই বাহুর ওপর লম্ব উচ্চতা 0.6 মি: [[K=(1.3\\times0.6)/2]], [[[\\boxed{K=0.39\\text{ m}^2}]]]। ফ্রেমের আচ্ছাদন বা স্থাপনের বাড়তি ধরার আগে এটি জ্যামিতিক কাচের ক্ষেত্রফল।" },
          { "kind": "h3", "text": "উদাহরণ 4: ত্রিভুজাকার অংশের জরিপ" },
          { "kind": "p", "text": "একটি জরিপ অঙ্কনে অতিভুজ 13 মি ও উচ্চতা [[60/13]] মি-এর সমকোণী ত্রিভুজ আছে। ভগ্নাংশ রেখে: [[K=(13\\times(60/13))/2]], [[[\\boxed{K=30\\text{ m}^2}]]]। অঙ্কনটি 30 বর্গমিটার অংশের প্রতিনিধিত্ব করে। বাস্তব মাঠ-কাজে পরিকল্পনার বাইরে যন্ত্র-সংশোধনের দরকার হতে পারে।" },
          { "kind": "h3", "text": "উদাহরণ 5: ত্রিভুজাকার টাইল মাপা" },
          { "kind": "p", "text": "একটি সমকোণী ত্রিভুজাকার টাইলের অতিভুজ 25 সেমি ও লম্ব উচ্চতা 6.72 সেমি: [[K=(25\\times6.72)/2]], [[[\\boxed{K=84\\text{ cm}^2}]]]। একটি টাইল 84 বর্গসেন্টিমিটার ঢাকে, যা একটি পৃষ্ঠে কতগুলো টাইল দরকার তা অনুমানে সাহায্য করে। গ্রাউটের ফাঁক ও কাটার ক্ষতি আলাদাভাবে গণনা করা হয়।" },
          { "kind": "h3", "text": "উদাহরণ 6: ইস্পাতের সাপোর্ট প্যানেল" },
          { "kind": "p", "text": "একটি সমতল সমকোণী ত্রিভুজাকার সাপোর্ট প্যানেলের অতিভুজ 1.7 মি, বাহু 0.8 মি ও 1.5 মি। এর উচ্চতা [[h=(0.8\\times1.5)/1.7=12/17]] মি। তাহলে [[K=(1.7\\times(12/17))/2]], [[[\\boxed{K=0.6\\text{ m}^2}]]]। এটি প্যানেলের জ্যামিতিক ক্ষেত্রফল, এর ভারবহন ক্ষমতা নয়।" },
          { "kind": "h3", "text": "উদাহরণ 7: ত্রিভুজাকার র‍্যাম্পের পার্শ্ব প্যানেল" },
          { "kind": "p", "text": "সরলীকৃত র‍্যাম্পের পার্শ্ব প্যানেল অতিভুজ 5 মি ও সেই অতিভুজের ওপর লম্ব উচ্চতা 2.4 মি-এর সমকোণী ত্রিভুজ গঠন করে: [[K=(5\\times2.4)/2]], [[[\\boxed{K=6\\text{ m}^2}]]]। এটি ত্রিভুজাকার পার্শ্ব অংশের সমতল ক্ষেত্রফল, ঢালু র‍্যাম্প পৃষ্ঠের নয়, আর গণনাটি প্রবেশযোগ্যতা-সম্মতি প্রতিষ্ঠা করে না।" },
          { "kind": "h3", "text": "উদাহরণ 8: ছাদের গেবল অংশ" },
          { "kind": "p", "text": "একটি সমকোণী ত্রিভুজাকার ছাদের গেবল অংশের অতিভুজ 6.5 মি ও লম্ব উচ্চতা [[30/13]] মি: [[K=(6.5\\times(30/13))/2]], [[[\\boxed{K=7.5\\text{ m}^2}]]]। ফলাফল মাপগুলো দিয়ে দেওয়া ত্রিভুজাকার সমতল বর্ণনা করে। বাস্তব ছাদের মোট পৃষ্ঠক্ষেত্রফল একটি আলাদা ত্রিমাত্রিক মাপের সমস্যা।" },
          { "kind": "h3", "text": "উদাহরণ 9: সমকোণী ত্রিভুজাকার জমির প্লট" },
          { "kind": "p", "text": "একটি সমকোণী ত্রিভুজাকার জমির অংশের অতিভুজ 50 মি ও লম্ব উচ্চতা 24 মি: [[K=(50\\times24)/2]], [[[\\boxed{K=600\\text{ m}^2}]]]। মাপা সীমানা 600 বর্গমিটার ঘিরে রেখেছে। একটি সরকারি ক্ষেত্রফলের সংখ্যার জন্য তবু জরিপ যাচাইয়ের দরকার হতে পারে।" },
          { "kind": "h3", "text": "উদাহরণ 10: বড় ত্রিভুজাকার জরিপ প্লট" },
          { "kind": "p", "text": "জরিপকৃত সমকোণী ত্রিভুজাকার অংশের অতিভুজ 100 মি ও লম্ব উচ্চতা 48 মি: [[K=(100\\times48)/2]], [[[\\boxed{K=2400\\text{ m}^2}]]]। এটি ত্রিভুজাকার অংশের সমতল ক্ষেত্রফল। সম্পত্তি শুধু সেই ত্রিভুজ নিয়ে গঠিত হলেই এটি পুরো সম্পত্তির প্রতিনিধিত্ব করে।" },
          { "kind": "h3", "text": "উদাহরণ 11: ত্রিভুজাকার পালের অংশ" },
          { "kind": "p", "text": "একটি সমতল সমকোণী ত্রিভুজাকার পালের নকশায় অতিভুজ 15 ফুট ও লম্ব উচ্চতা 7.2 ফুট: [[K=(15\\times7.2)/2]], [[[\\boxed{K=54\\text{ ft}^2}]]]। এটি আদর্শ পালের সমতল ক্ষেত্রফল। বাঁকা কাপড়, সেলাই ও কিনারার বাড়তির জন্য আলাদা বিবেচনা দরকার।" },
          { "kind": "h3", "text": "উদাহরণ 12: ছোট যান্ত্রিক ব্র্যাকেট" },
          { "kind": "p", "text": "একটি সমতল সমকোণী ত্রিভুজাকার ব্র্যাকেটের অতিভুজ 250 মিমি ও লম্ব উচ্চতা 120 মিমি: [[K=(250\\times120)/2]], [[[\\boxed{K=15000\\text{ mm}^2}]]]। ইনপুট মিলিমিটারে বলে উত্তর বর্গমিলিমিটারে। যেহেতু [[1\\text{ cm}^2=100\\text{ mm}^2]], এটি [[[\\boxed{150\\text{ cm}^2}]]]-এর সমান। রৈখিক একক রূপান্তর ও বর্গ একক রূপান্তর ভিন্ন ক্রিয়া, যেমন একক অংশে ব্যাখ্যা করা হয়েছে।" },
          { "kind": "h3", "text": "ব্যবহারিক উদাহরণের তুলনা" }
        ],
        "table": {
          "headers": ["পরিস্থিতি", "অতিভুজ c", "উচ্চতা h", "সূত্র", "গণনাকৃত ক্ষেত্রফল", "ব্যবহারিক ব্যাখ্যা"],
          "rows": [
            ["বাগানের অংশ", "10 m", "4.8 m", "[[K=ch/2]]", "24 m²", "রোপণের পৃষ্ঠ"],
            ["প্লাইউড প্যানেল", "1 m", "0.48 m", "[[K=ch/2]]", "0.24 m²", "উপাদান কভারেজ, অপচয় ছাড়া"],
            ["কাচের জানালা", "1.3 m", "0.6 m", "[[K=ch/2]]", "0.39 m²", "ফ্রেমের আগের কাচের ক্ষেত্রফল"],
            ["জরিপ অঙ্কন", "13 m", "60/13 m", "[[K=ch/2]]", "30 m²", "অংশের পরিকল্পনা ক্ষেত্রফল"],
            ["টাইল", "25 cm", "6.72 cm", "[[K=ch/2]]", "84 cm²", "একটি টাইলের পৃষ্ঠ"],
            ["ইস্পাত প্যানেল", "1.7 m", "12/17 m", "[[K=ch/2]]", "0.6 m²", "জ্যামিতি, ভারবহন ক্ষমতা নয়"],
            ["র‍্যাম্পের পার্শ্ব প্যানেল", "5 m", "2.4 m", "[[K=ch/2]]", "6 m²", "পার্শ্ব অংশ, র‍্যাম্প পৃষ্ঠ নয়"],
            ["ছাদের গেবল", "6.5 m", "30/13 m", "[[K=ch/2]]", "7.5 m²", "ত্রিভুজাকার প্রস্থচ্ছেদ"],
            ["জমির প্লট", "50 m", "24 m", "[[K=ch/2]]", "600 m²", "ঘেরা ক্ষেত্রফল, জরিপে যাচাই করুন"],
            ["জরিপ প্লট", "100 m", "48 m", "[[K=ch/2]]", "2400 m²", "অংশ, পুরো সম্পত্তি নয়"],
            ["পালের অংশ", "15 ft", "7.2 ft", "[[K=ch/2]]", "54 ft²", "আদর্শ সমতল পাল"],
            ["ব্র্যাকেট", "250 mm", "120 mm", "[[K=ch/2]]", "15000 mm²", "150 cm²-এর সমান"]
          ]
        },
        "imgAlt": "চারটি উদাহরণ: বাগান, কাচের প্যানেল, জমির প্লট ও ব্র্যাকেট, প্রতিটিতে অতিভুজ c, উচ্চতা h ও গণনাকৃত ক্ষেত্রফল",
        "figcaption": "চারটি স্কেলে একই সূত্র: বাগান, কাচের প্যানেল, জমির প্লট ও যান্ত্রিক ব্র্যাকেট।"
      },
      "sec-equal": {
        "h2": "কেন সমকোণী ত্রিভুজের দুটি ক্ষেত্রফল সূত্র একই উত্তর দেয়",
        "blocks": [
          { "kind": "p", "text": "একটি সমকোণী ত্রিভুজ তার দুটি লম্ব বাহু দিয়ে বা অতিভুজ ও উচ্চতা দিয়ে মাপা যায়। বাহু-সূত্র [[K=ab/2]] আর উচ্চতা-সূত্র [[K=ch/2]]। যেহেতু দুটোই একই ত্রিভুজের ক্ষেত্রফল বর্ণনা করে, তাই [[\\frac{ab}{2}=\\frac{ch}{2}]]। দুই পাশকে দুই দিয়ে গুণ করুন: [[ab=ch]]। [[h]]-এর জন্য সমাধান করুন: [[[\\boxed{h=\\frac{ab}{c}}]]]। উচ্চতা বাহু দুটির গুণফলকে অতিভুজ দিয়ে ভাগ করলে পাওয়া যায়, তাই সামঞ্জস্যপূর্ণ ত্রিভুজে দুটি সূত্র কখনো অমত করতে পারে না।" },
          { "kind": "p", "text": "সংখ্যায় যাচাই: [[a=6]], [[b=8]], [[c=10]] হলে উচ্চতা [[h=(6\\times8)/10=4.8]]। বাহু দিয়ে: [[K=(6\\times8)/2=24]]। উচ্চতা দিয়ে: [[K=(10\\times4.8)/2=24]]। একই ত্রিভুজ, একই ক্ষেত্রফল, দুটি পথ।" },
          { "kind": "p", "text": "শুধু অতিভুজ ও উচ্চতা জানা থাকলে ক্ষেত্রফল ইতিমধ্যে নির্ধারিত: আগে বাহু পুনর্গঠনের দরকার নেই। বৈধ [[c]] ও [[h]] থেকে বাহুর দৈর্ঘ্য তবু নিচের অংশ-সম্পর্ক দিয়ে পুনরুদ্ধার করা যায়, কিন্তু সেটি ক্ষেত্রফল নির্ণয় থেকে আলাদা গণনা। বাহুই যখন জানা তথ্য, তখন <a href=\"/right-triangle-area-from-legs-calculator/\">লম্ব-ভূমি থেকে সমকোণী ত্রিভুজের ক্ষেত্রফল ক্যালকুলেটর</a> সরাসরি সেগুলো নেয়।" }
        ]
      },
      "sec-geomean": {
        "h2": "উচ্চতা কীভাবে সমকোণী ত্রিভুজকে ভাগ করে",
        "blocks": [
          { "kind": "p", "text": "উচ্চতা অতিভুজকে [[D]]-তে ছোঁয়, তাকে অংশ [[AD=p]] ও [[DB=q]]-তে ভাগ করে, অর্থাৎ [[p+q=c]]। এই ভাগ মূল ত্রিভুজের ভেতরে বাসা বাঁধা দুটি ছোট সমকোণী ত্রিভুজ তৈরি করে, আর তাদের অনুপাত আশ্চর্যজনকভাবে পরিপাটি।" },
          { "kind": "h3", "text": "দুটি ছোট সদৃশ সমকোণী ত্রিভুজ" },
          { "kind": "p", "text": "উচ্চতা মূল ত্রিভুজকে দুটি ছোট সমকোণী ত্রিভুজে ভাগ করে, প্রতিটি মূল ত্রিভুজের সঙ্গে একটি করে সূক্ষ্মকোণ ভাগ করে নেয় এবং প্রতিটিতে একটি সমকোণ থাকে। দুটি কোণের মাপ ভাগ করে নেওয়ায় তিনটি ত্রিভুজই সদৃশ হয়। সদৃশতাই উচ্চতা, অংশ ও বাহুর মধ্যে পরিষ্কার আনুপাতিক সম্পর্ক বলবৎ করে।" },
          { "kind": "h3", "text": "উচ্চতার গুণোত্তর মধ্যক উপপাদ্য" },
          { "kind": "p", "text": "সদৃশতা দেয় [[[\\boxed{h^2=pq}]]], বা সমতুল্যভাবে [[[\\boxed{h=\\sqrt{pq}}]]]। উচ্চতা অতিভুজের দুটি অংশের গুণোত্তর মধ্যক: এর বর্গ তাদের গুণফলের সমান। কার্যোদাহরণ: [[p=6.4]] ও [[q=3.6]] হলে [[c=p+q=10]], আর [[h=\\sqrt{6.4\\times3.6}=\\sqrt{23.04}]], [[[\\boxed{h=4.8}]]]। ক্ষেত্রফল অনুসরণ করে: [[K=(10\\times4.8)/2]], [[[\\boxed{K=24\\text{ square units}}]]]। অংশ-উপপাদ্য অন্য উপায়ে মাপা বা গণনা করা উচ্চতা যাচাই করে।" },
          { "kind": "h3", "text": "অংশ ও বাহুর মধ্যে সম্পর্ক" },
          { "kind": "p", "text": "একই সদৃশতা দেয় [[b^2=cp]] ও [[a^2=cq]]। [[c=10]], [[p=6.4]], [[q=3.6]] হলে: [[b=\\sqrt{10\\times6.4}=\\sqrt{64}=8]] ও [[a=\\sqrt{10\\times3.6}=\\sqrt{36}=6]]। মূল 6-8-10 ত্রিভুজ ঠিকভাবে পুনরুদ্ধার হয়, যা দেখায় অংশ, উচ্চতা ও বাহু কত শক্তভাবে বাঁধা।" }
        ]
      },
      "sec-max": {
        "h2": "সমকোণী ত্রিভুজের উচ্চতা কত বড় হতে পারে?",
        "blocks": [
          { "kind": "p", "text": "ধনাত্মক সংখ্যার প্রতিটি জোড়া অতিভুজ ও উচ্চতা হতে পারে না। বৈধ, অপতিত সমকোণী ত্রিভুজের জন্য [[[\\boxed{0<h\\leq\\frac{c}{2}}]]]। উচ্চতা ধনাত্মক হতেই হবে এবং কখনো অতিভুজের অর্ধেকের বেশি হতে পারে না।" },
          { "kind": "h3", "text": "উচ্চতা কেন অতিভুজের অর্ধেকের বেশি হতে পারে না" },
          { "kind": "p", "text": "[[h^2=pq]] ও [[p+q=c]] থেকে গুণফল [[pq]] সবচেয়ে বড় হয় যখন দুটি অংশ সমান, [[p=q=c/2]]। তাই [[h^2\\leq c^2/4]], আর ধনাত্মক দৈর্ঘ্যের জন্য [[h\\leq c/2]]। সহজ ভাষায়: অতিভুজকে দুটি সমান অর্ধেকে ভাগ করলে উচ্চতা সবচেয়ে লম্বা হয়, আর তখনও তা অতিভুজের অর্ধেকই পৌঁছায়।" },
          { "kind": "h3", "text": "নির্দিষ্ট অতিভুজের জন্য সর্বোচ্চ ক্ষেত্রফল" },
          { "kind": "p", "text": "যেহেতু [[K=ch/2]] ও [[h\\leq c/2]], সর্বোচ্চ সম্ভাব্য ক্ষেত্রফল [[[\\boxed{K_{\\max}=\\frac{c^2}{4}}]]]। এই সর্বোচ্চ সমদ্বিবাহু সমকোণী ত্রিভুজের, যেখানে দুটি বাহু সমান। [[c=10]] হলে সর্বোচ্চ বৈধ উচ্চতা [[h_{\\max}=5]], ফলে [[K_{\\max}=(10\\times5)/2=25]]। অতিভুজ 10 হলে উচ্চতা 6 সমকোণী ত্রিভুজের জন্য অসম্ভব।" },
          { "kind": "h3", "text": "উচ্চতা বেশি বড় হলে কী হয়?" },
          { "kind": "p", "text": "[[c=10]] ও [[h=6]] নিন: [[6>5]], তাই এই মাপের কোনো সমকোণী ত্রিভুজ নেই। পাটিগণিত [[(10\\times6)/2=30]] আরও সাধারণ প্রেক্ষাপটে কোনো ত্রিভুজের জন্য বৈধ ক্ষেত্রফল, কিন্তু এটি [[c=10]], [[h=6]]-কে বৈধ সমকোণী-ত্রিভুজ ইনপুট করে না। এই পৃষ্ঠা দাবি করে না যে ক্যালকুলেটর স্বয়ংক্রিয়ভাবে এমন ইনপুট বাতিল করে; যাচাই আপনারই করতে হবে।" },
          { "kind": "h3", "text": "উচ্চতা কি অতিভুজের অর্ধেকের সমান হতে পারে?" },
          { "kind": "p", "text": "হ্যাঁ। সমতা দুটি সমান বাহুর সমদ্বিবাহু সমকোণী ত্রিভুজ দেয়, একটি বৈধ অপতিত ত্রিভুজ। এটি সীমা-ক্ষেত্র, ভাঙা ক্ষেত্র নয়।" }
        ],
        "imgAlt": "6-8-10 ত্রিভুজ, উচ্চতা অতিভুজকে p = 6.4 ও q = 3.6-এ ভাগ করেছে, সঙ্গে সর্বোচ্চ উচ্চতা c/2-এর সমদ্বিবাহু ত্রিভুজ",
        "figcaption": "বামে: উচ্চতা অতিভুজের অংশগুলোর গুণোত্তর মধ্যক। ডানে: সর্বোচ্চ সম্ভাব্য উচ্চতা অতিভুজের অর্ধেক, যা সর্বোচ্চ ক্ষেত্রফল দেয়।"
      },
      "sec-find-altitude": {
        "h2": "উচ্চতা অজানা থাকলে তা কীভাবে গণনা করবেন",
        "blocks": [
          { "kind": "p", "text": "এই ক্যালকুলেটর [[h]]-কে ইনপুট হিসেবে নেয়, তাই অজানা উচ্চতাকে প্রথমে খুঁজে বের করতে বা মাপতে হবে। তিনটি মানক পথ সাধারণ ক্ষেত্রগুলো কভার করে। বাহু জানা থাকলে আর উচ্চতাই অনুপস্থিত অংশ হলে, <a href=\"/right-triangle-altitude-from-sides-calculator/\">বাহু থেকে সমকোণী ত্রিভুজের উচ্চতা ক্যালকুলেটর</a> সরাসরি তা গণনা করে।" },
          { "kind": "h3", "text": "পদ্ধতি 1: দুটি বাহু ও অতিভুজ ব্যবহার" },
          { "kind": "p", "text": "[[[\\boxed{h=\\frac{ab}{c}}]]]। [[a=6]], [[b=8]], [[c=10]] হলে: [[h=(6\\times8)/10=4.8]]।" },
          { "kind": "h3", "text": "পদ্ধতি 2: অতিভুজের অংশ ব্যবহার" },
          { "kind": "p", "text": "[[[\\boxed{h=\\sqrt{pq}}]]]। [[p=6.4]] ও [[q=3.6]] হলে: [[h=\\sqrt{23.04}=4.8]]।" },
          { "kind": "h3", "text": "পদ্ধতি 3: জানা ক্ষেত্রফল ও অতিভুজ ব্যবহার" },
          { "kind": "p", "text": "[[K=ch/2]]-কে সাজিয়ে পাওয়া যায় [[[\\boxed{h=\\frac{2K}{c}}]]]। [[K=24]] ও [[c=10]] হলে: [[h=(2\\times24)/10=4.8]]।" }
        ],
        "closingParagraphs": [
          "এগুলো গাণিতিক পুনর্বিন্যাস, ক্যালকুলেটরের বাড়তি মোড নয়: উচ্চতা-থেকে-ক্ষেত্রফল ক্যালকুলেটর নিজে তবু উচ্চতাকেই ইনপুট হিসেবে আশা করে।"
        ]
      },
      "sec-units": {
        "h2": "সমকোণী ত্রিভুজের ক্ষেত্রফল গণনায় বর্গ একক বোঝা",
        "blocks": [
          { "kind": "p", "text": "ক্ষেত্রফল দ্বিমাত্রিক। দুটি দৈর্ঘ্য গুণ করলে তাদের এককও গুণ হয়: [[\\text{m}\\times\\text{m}=\\text{m}^2]]। ক্ষেত্রফলের একক সবসময় দৈর্ঘ্য এককের বর্গ।" },
          { "kind": "h3", "text": "বর্গমিটার" },
          { "kind": "p", "text": "[[c=10\\text{ m}]] ও [[h=4.8\\text{ m}]] হলে [[K=24\\text{ m}^2]]। একে 24 বর্গমিটার পৃষ্ঠ হিসেবে পড়ুন।" },
          { "kind": "h3", "text": "বর্গসেন্টিমিটার" },
          { "kind": "p", "text": "[[c=25\\text{ cm}]] ও [[h=6.72\\text{ cm}]] হলে [[K=84\\text{ cm}^2]]।" },
          { "kind": "h3", "text": "বর্গমিলিমিটার" },
          { "kind": "p", "text": "[[c=250\\text{ mm}]] ও [[h=120\\text{ mm}]] হলে [[K=15000\\text{ mm}^2]]।" },
          { "kind": "h3", "text": "ক্ষেত্রফলের একক রূপান্তর" },
          { "kind": "p", "text": "[[1\\text{ m}^2=10000\\text{ cm}^2]] ও [[1\\text{ cm}^2=100\\text{ mm}^2]]। রৈখিক রূপান্তর 10, 100 বা 1000 দিয়ে গুণ করে, কিন্তু ক্ষেত্রফলের রূপান্তর সেই গুণনীয়কের বর্গ করে: এক মিটারে 100 সেমি এক বর্গমিটারে [[100^2=10000]] বর্গসেন্টিমিটার হয়। দৈর্ঘ্য রূপান্তর ও ক্ষেত্রফল রূপান্তর ভিন্ন ক্রিয়া।" },
          { "kind": "h3", "text": "ইনপুটগুলো ভিন্ন এককে হলে কী হবে?" },
          { "kind": "p", "text": "আগে রূপান্তর করুন, তারপর গণনা করুন। মিটারে অতিভুজ ও সেন্টিমিটারে উচ্চতাকে একটি এককে আনতে হবে, উদাহরণস্বরূপ সূত্র প্রয়োগের আগে 2 মি ও 150 সেমি হয় 2 মি ও 1.5 মি। সূত্রে মিশ্র একক কোনো পরিষ্কার একক ছাড়া অর্থহীন সংখ্যা তৈরি করে।" }
        ]
      },
      "sec-mistakes": {
        "h2": "উচ্চতা-ক্ষেত্রফল সূত্র ব্যবহারে সাধারণ ভুল",
        "blocks": [
          { "kind": "p", "text": "এই পৃষ্ঠার বেশিরভাগ ভুল উত্তর ভুল লেবেলের ইনপুট থেকে আসে, খারাপ পাটিগণিত থেকে নয়। নিচের আঠারোটি ভুল প্রায় সবটাই কভার করে।" },
          { "kind": "h3", "text": "1. উচ্চতার বদলে একটি বাহু ব্যবহার" },
          { "kind": "p", "text": "উচ্চতা [[h]] সমকোণ শীর্ষ থেকে অতিভুজে নামে; একটি বাহু ত্রিভুজের কিনারা বরাবর চলে। 6-8-10 ত্রিভুজে বাহু 6-কে উচ্চতা হিসেবে দিলে 24-এর বদলে [[(10\\times6)/2=30]] পাওয়া যায়। সংশোধন: উচ্চতাকে সমকোণ-চিহ্নসহ অতিভুজের ওপর পড়তে হবে।" },
          { "kind": "h3", "text": "2. উচ্চতাকে অতিভুজের সঙ্গে গুলিয়ে ফেলা" },
          { "kind": "p", "text": "[[c]] ও [[h]] অদলবদল করলে গুণফলের অর্থ বদলে যায়। [[c=10]] ও [[h=4.8]] হলে গুণে সংখ্যাগুলো বিনিময় হয়, কিন্তু সম্ভাব্যতা-যাচাই [[h\\leq c/2]] ভেঙে যায়: অদলবদল করা এন্ট্রি 4.8 অতিভুজে 10 উচ্চতা দাবি করে, যা অসম্ভব। সংশোধন: অতিভুজ সবসময় সবচেয়ে লম্বা বাহু।" },
          { "kind": "h3", "text": "3. ভুল শীর্ষ থেকে উচ্চতা টানা" },
          { "kind": "p", "text": "শুধু সমকোণ শীর্ষ [[C]] থেকে উচ্চতাই ভূমি হিসেবে অতিভুজের সঙ্গে জোড়া বাঁধে। সূক্ষ্ম শীর্ষ থেকে লম্ব একটি বাহুর ওপর পড়ে, অতিভুজের ওপর নয়, এবং এই সূত্রে এর জায়গা নেই। সংশোধন: বর্গ কোণা থেকে শুরু করুন।" },
          { "kind": "h3", "text": "4. অ-লম্ব কোণে উচ্চতা মাপা" },
          { "kind": "p", "text": "[[C]] থেকে অতিভুজ পর্যন্ত যেকোনো অ-লম্ব রেখাংশ প্রকৃত উচ্চতার চেয়ে লম্বা, তাই ক্ষেত্রফল বেশি বের হয়। সংশোধন: গঠন দিয়ে বা [[h=ab/c]] দিয়ে 90-ডিগ্রি মিলন যাচাই করুন।" },
          { "kind": "h3", "text": "5. ভিন্ন ভূমির সঙ্গে মিলিয়ে এমন উচ্চতা ব্যবহার" },
          { "kind": "p", "text": "অতিভুজের ওপর উচ্চতা শুধু অতিভুজের সঙ্গেই জোড়া বাঁধে। একটি বাহুর সঙ্গে জোড়া বাঁধলে, যেমন [[(8\\times4.8)/2=19.2]]-তে, দুটি ভিন্ন ভূমি-উচ্চতা জোড়া মিশে যায়। সংশোধন: প্রতিটি উচ্চতা ঠিক একটি ভূমির।" },
          { "kind": "h3", "text": "6. দুই দিয়ে ভাগ করতে ভুলে যাওয়া" },
          { "kind": "p", "text": "[[10\\times4.8=48]] সামান্তরিকের ক্ষেত্রফল, ত্রিভুজের নয়। সংশোধন: প্রতিটি ভূমি-উচ্চতা গণনা অর্ধেক করা দিয়ে শেষ করুন।" },
          { "kind": "h3", "text": "7. অসঙ্গত এককের দৈর্ঘ্য গুণ করা" },
          { "kind": "p", "text": "2 মি অতিভুজ ও 150 সেমি উচ্চতা [[(2\\times150)/2=150]] কোনো অর্থপূর্ণ কিছুর নয়। সংশোধন: প্রথমে একটি এককে রূপান্তর করুন, এখানে 2 মি ও 1.5 মি, ফলে 1.5 মি²।" },
          { "kind": "h3", "text": "8. রৈখিক এককে উত্তর জানানো" },
          { "kind": "p", "text": "24 মি² ক্ষেত্রফল 24 মি নয়। সংশোধন: সংখ্যার সঙ্গে সবসময় বর্গ একক লিখুন।" },
          { "kind": "h3", "text": "9. শূন্য বা ঋণাত্মক দৈর্ঘ্য দেওয়া" },
          { "kind": "p", "text": "[[c>0]] ও [[h>0]] আবশ্যক; শূন্য বা ঋণাত্মক ইনপুট কোনো ত্রিভুজ বর্ণনা করে না। সংশোধন: আবার মাপুন।" },
          { "kind": "h3", "text": "10. অতিভুজের অর্ধেকের বেশি উচ্চতা দেওয়া" },
          { "kind": "p", "text": "[[c=10]], [[h=6]] [[h\\leq c/2]] লঙ্ঘন করে। সংশোধন: কোন রেখাংশ মাপা হয়েছিল তা আবার যাচাই করুন; সেটি লম্ব উচ্চতা ছিল না।" },
          { "kind": "h3", "text": "11. ধরে নেওয়া প্রতিটি ধনাত্মক জোড়া সমকোণী ত্রিভুজ গঠন করে" },
          { "kind": "p", "text": "ধনাত্মকতা যথেষ্ট নয়; উচ্চতার সীমাও মানতে হবে। সংশোধন: প্রতিটি নতুন জোড়ায় [[h\\leq c/2]] যাচাই চালান।" },
          { "kind": "h3", "text": "12. উচ্চতাকে উল্লম্ব বাহুর সঙ্গে গুলিয়ে ফেলা" },
          { "kind": "p", "text": "চিত্রে উচ্চতা উল্লম্ব দেখাতে পারে, আবার একটি বাহু তির্যক দেখাতে পারে, বা ঘোরানোর পর উল্টোও হতে পারে। পর্দায় উল্লম্ব মানেই কিছু নয়। সংশোধন: জ্যামিতিক ভূমিকা দিয়ে বাহু চিনুন, পর্দার দিক দিয়ে নয়।" },
          { "kind": "h3", "text": "13. উচ্চতাকে খুব আগে বৃত্তায়ন করা" },
          { "kind": "p", "text": "[[60/13\\approx4.61538]]-এর জন্য 4.6 ব্যবহার করে গণনা করলে সামান্য ভুল ক্ষেত্রফল পাওয়া যায়, অথচ সঠিক ভগ্নাংশ পরিষ্কারভাবে 30-এ কাটা যায়। সংশোধন: চূড়ান্ত উত্তর পর্যন্ত পূর্ণ নির্ভুলতা রাখুন।" },
          { "kind": "h3", "text": "14. ধরে নেওয়া অতিভুজকে অনুভূমিক হতেই হবে" },
          { "kind": "p", "text": "অতিভুজ যেকোনো কোণে থাকতে পারে; সূত্র দৈর্ঘ্য ব্যবহার করে, অভিমুখ নয়। সংশোধন: অঙ্কনের ঘূর্ণন নয়, মাপগুলোকে বিশ্বাস করুন।" },
          { "kind": "h3", "text": "15. উচ্চতা-উপপাদ্যকে পিথাগোরাসের উপপাদ্যের সঙ্গে গুলিয়ে ফেলা" },
          { "kind": "p", "text": "[[h^2=pq]] উচ্চতাকে অতিভুজের অংশের সঙ্গে সম্পর্কিত করে; [[a^2+b^2=c^2]] তিনটি বাহুকে সম্পর্কিত করে। এরা ভিন্ন প্রশ্নের উত্তর দেয়। সংশোধন: আপনার হাতে থাকা রাশির সঙ্গে উপপাদ্য মেলান।" },
          { "kind": "h3", "text": "16. ভিন্ন ত্রিভুজ থেকে মাপা উচ্চতা ব্যবহার" },
          { "kind": "p", "text": "একটি উচ্চতা একটি নির্দিষ্ট ত্রিভুজের। 6-8-10 ত্রিভুজ থেকে 4.8 ধার করে ভিন্ন অতিভুজে ব্যবহার করলে ভুল ক্ষেত্রফল পাওয়া যায়। সংশোধন: প্রতিটি গণনা নিজের ত্রিভুজের মাপ ব্যবহার করে।" },
          { "kind": "h3", "text": "17. ধরে নেওয়া ক্ষেত্রফল প্রতিটি বাহুর দৈর্ঘ্য নির্ধারণ করে" },
          { "kind": "p", "text": "অনেক ভিন্ন সমকোণী ত্রিভুজ একটি ক্ষেত্রফল ভাগ করে নেয়। [[K=24]] জানা [[c]] বা [[h]]-কে পৃথকভাবে নির্ধারণ করে না। সংশোধন: ক্ষেত্রফলকে একটি সমীকরণ হিসেবে ধরুন, পূর্ণ বর্ণনা হিসেবে নয়।" },
          { "kind": "h3", "text": "18. জ্যামিতিক ক্ষেত্রফলকে কেনার সঠিক উপাদান ধরা" },
          { "kind": "p", "text": "সূত্র আদর্শ জ্যামিতিক ক্ষেত্রফল দেয়। বাস্তব প্রকল্পে এর ওপরে অপচয়, ওভারল্যাপ ও কাটার বাড়তি দরকার। সংশোধন: জ্যামিতি শেষ হলে প্রকল্পের মার্জিন যোগ করুন।" },
          { "kind": "h3", "text": "ভুল বনাম সঠিক: একটি সুনির্দিষ্ট উদাহরণ" },
          { "kind": "p", "text": "[[c=10]] ও [[h=4.8]] দেওয়া থাকলে ভুল গণনা অর্ধেক করা এড়িয়ে যায়: [[K=10\\times4.8=48]]। এটি সঙ্গত সামান্তরিকের ক্ষেত্রফল। সঠিক গণনা [[K=(10\\times4.8)/2]], [[[\\boxed{K=24}]]]। দ্বিতীয় দৃষ্টান্ত: উচ্চতার জায়গায় বাহু 8 বসালে [[(10\\times8)/2=40]] পাওয়া যায়, ভুল কারণ 8 অতিভুজের ওপর লম্ব নয়। উচ্চতা, এবং শুধু উচ্চতাই, [[c]]-এর সঙ্গে জোড়া বাঁধে।" }
        ]
      },
      "sec-verify": {
        "h2": "আপনার ক্ষেত্রফল গণনা সঠিক কিনা কীভাবে যাচাই করবেন",
        "blocks": [
          { "kind": "p", "text": "সাতটি যাচাই খারাপ ফলাফলের বড় অংশই পৃষ্ঠা ছাড়ার আগে ধরে ফেলে।" },
          { "kind": "h3", "text": "যাচাই 1: ধনাত্মক ইনপুট" },
          { "kind": "p", "text": "বৈধ সমকোণী ত্রিভুজের জন্য [[c>0]] ও [[h>0]]। শূন্য বা ঋণাত্মক দৈর্ঘ্য কোনো ত্রিভুজ বর্ণনা করে না।" },
          { "kind": "h3", "text": "যাচাই 2: উচ্চতার সীমা" },
          { "kind": "p", "text": "[[h\\leq c/2]] নিশ্চিত করুন। এই একক অসমতা সবচেয়ে সাধারণ অসম্ভব ইনপুট বাতিল করে, যেমন [[c=10]]-এর সঙ্গে [[h=6]]।" },
          { "kind": "h3", "text": "যাচাই 3: সমকোণ নিশ্চিত করুন" },
          { "kind": "p", "text": "উচ্চতাকে অতিভুজের ওপর লম্ব হতেই হবে। অঙ্কন বা মাপ 90-ডিগ্রি মিলন নিশ্চিত করতে না পারলে ইনপুটটি উচ্চতা নয়।" },
          { "kind": "h3", "text": "যাচাই 4: বর্গ একক" },
          { "kind": "p", "text": "মিটার ইনপুট বর্গমিটার দেয়, সেন্টিমিটার ইনপুট বর্গসেন্টিমিটার দেয়। উত্তরের একক ইনপুট এককের বর্গ, ইনপুট একক নিজে কখনো নয়।" },
          { "kind": "h3", "text": "যাচাই 5: বাহু-সূত্র দিয়ে ক্রস-চেক" },
          { "kind": "p", "text": "6-8-10 ত্রিভুজের জন্য [[(6\\times8)/2=24]] ও [[(10\\times4.8)/2=24]]। দুটি পদ্ধতি, একটি ত্রিভুজ, একটি উত্তর: সম্মতিই সবচেয়ে শক্ত যাচাই।" },
          { "kind": "h3", "text": "যাচাই 6: গুণোত্তর মধ্যক সম্পর্ক" },
          { "kind": "p", "text": "অতিভুজের অংশ জানা থাকলে [[h^2=pq]] যাচাই করুন: [[4.8^2=6.4\\times3.6]], [[23.04=23.04]]। অমিল মানে উচ্চতা, অংশ বা ত্রিভুজ-চিহ্নিতকরণে ভুল।" },
          { "kind": "h3", "text": "যাচাই 7: সর্বোচ্চ সম্ভাব্য ক্ষেত্রফলের সঙ্গে তুলনা" },
          { "kind": "p", "text": "নির্দিষ্ট অতিভুজের জন্য [[K\\leq c^2/4]]। [[c=10]] হলে 25 বর্গ এককের বেশি যেকোনো দাবিকৃত সমকোণী-ত্রিভুজ ক্ষেত্রফল অসম্ভব। এই পৃষ্ঠা ক্যালকুলেটরের নিজস্ব যাচাই-আচরণ সম্পর্কে কোনো দাবি করে না; যাচাই আপনারই করতে হবে।" }
        ]
      },
      "sec-compare": {
        "h2": "উচ্চতা থেকে ক্ষেত্রফল বনাম দুটি বাহু থেকে ক্ষেত্রফল",
        "blocks": [
          { "kind": "p", "text": "দুটি সূত্র, একটি ক্ষেত্রফল। [[K=ab/2]]-এর দুটি লম্ব বাহু দরকার; [[K=ch/2]]-এর অতিভুজ ও তার উচ্চতা দরকার। কোনোটিই বেশি সঠিক নয়; ভিন্ন মাপ থেকে পৌঁছানো একই রাশি এরা।" }
        ],
        "table": {
          "headers": ["পদ্ধতি", "প্রয়োজনীয় মাপ", "প্রধান সুবিধা"],
          "rows": [
            ["বাহু থেকে ক্ষেত্রফল", "[[a]], [[b]]", "দুটি বাহু জানা থাকলে সবচেয়ে সরল"],
            ["উচ্চতা থেকে ক্ষেত্রফল", "[[c]], [[h]]", "অতিভুজ ও লম্ব উচ্চতা জানা থাকলে সরাসরি"],
            ["কোণ থেকে ক্ষেত্রফল", "উপযুক্ত বাহু ও অন্তর্ভুক্ত কোণ", "সূক্ষ্মকোণ জানা থাকলে কাজে লাগে"],
            ["অন্তর্ব্যাসার্ধ থেকে ক্ষেত্রফল", "[[r]], [[s]]", "অন্তর্বৃত্ত ও অর্ধপরিসীমা সমস্যায় কাজে লাগে"]
          ]
        },
        "closingParagraphs": [
          "অন্য বৈধ পদ্ধতি ব্যবহার করলে একই সমকোণী ত্রিভুজের ক্ষেত্রফল বদলায় না। হাতে থাকা সংখ্যার সঙ্গে মিলিয়ে সারি বেছে নিন; দুটি সারি পাওয়া গেলে তাদের সম্মতি বিনামূল্যে সঠিকতা-যাচাই।"
        ]
      },
      "sec-conclusion": {
        "h2": "অতিভুজ ও তার উচ্চতাই আপনার যা দরকার",
        "blocks": [
          { "kind": "p", "text": "উচ্চতা-পদ্ধতি সবচেয়ে লম্বা বাহুর দিকে তাক করা ভূমি-উচ্চতা নিয়ম। অতিভুজ চিহ্নিত হয়ে লম্ব উচ্চতা হাতে এলে ক্ষেত্রফল একটি গুণ ও একটি অর্ধেক-করার দূরত্বে, আগে বাহু পুনরুদ্ধারের দরকার ছাড়াই।" },
          { "kind": "p", "text": "এর আসল শক্তি শৃঙ্খলা: লম্বত্ব, উচ্চতার সীমা ও গুণোত্তর মধ্যক সম্পর্ক অস্পষ্ট ত্রিভুজ-স্কেচকে যাচাইযোগ্য সংখ্যায় রূপান্তর করে। যাচাইগুলো চালান, বাহু হাতে থাকলে বাহু-সূত্রের সঙ্গে তুলনা করুন, আর উত্তর তার বিশ্বাস অর্জন করবে।" },
          { "kind": "p", "text": "অতিভুজ ও উচ্চতা যখন মাপা তথ্য, তখন এই পৃষ্ঠার ক্যালকুলেটর রাখুন, আর মাপ অন্য দিকে ইঙ্গিত করলে বাহু, কোণ বা অর্ধপরিসীমা ক্যালকুলেটরের দিকে যান।" }
        ]
      }
    },
    "faqs": [
      { "question": "উচ্চতা ব্যবহার করে সমকোণী ত্রিভুজের ক্ষেত্রফলের সূত্র কী?", "answer": "সূত্রটি K = ch/2, যেখানে c অতিভুজ এবং h সমকোণ শীর্ষ থেকে অতিভুজের ওপর লম্ব উচ্চতা। দুটি দৈর্ঘ্য গুণ করে দুই দিয়ে ভাগ করুন। ফলাফল ইনপুটের সঙ্গে মিলিয়ে বর্গ এককে আসে, তাই মিটার ইনপুট বর্গমিটার দেয়। সূত্র প্রযোজ্য হতে হলে উচ্চতাকে অতিভুজকে 90 ডিগ্রিতে ছুঁতে হবে।" },
      { "question": "সমকোণী ত্রিভুজে উচ্চতা h বলতে কী বোঝায়?", "answer": "উচ্চতা h সমকোণ শীর্ষ C থেকে অতিভুজের ওপর লম্ব রেখাংশ, যা তাকে D বিন্দুতে ছোঁয়। এটি সেই শীর্ষ থেকে অতিভুজ পর্যন্ত সবচেয়ে ছোট দূরত্ব এবং সেই উচ্চতা যা ভূমি হিসেবে অতিভুজের সঙ্গে জোড়া বাঁধে। এটি কোনো বাহু নয়, আর ত্রিভুজের ভেতরে টানা যেকোনো রেখাও নয়।" },
      { "question": "উচ্চতা কি বাহুগুলোর একটির সমান?", "answer": "না। বাহু a ও b সমকোণ গঠন করে, আর উচ্চতা সেই শীর্ষ থেকে বিপরীত বাহু পর্যন্ত একটি আলাদা রেখাংশ। 6-8-10 ত্রিভুজে উচ্চতা 4.8, যা কোনো বাহুর সমান নয়। উচ্চতার জায়গায় বাহু দিলে এই সূত্রে সবচেয়ে সাধারণ ভুলগুলোর একটি হয়, তাই সবসময় যাচাই করুন কোন রেখাংশটি সত্যিই লম্ব।" },
      { "question": "অতিভুজকে ভূমি হিসেবে কেন ব্যবহার করা যায়?", "answer": "সঙ্গত লম্ব উচ্চতা জানা থাকলে ত্রিভুজের যেকোনো বাহুই ভূমি হিসেবে কাজ করতে পারে। অতিভুজের ক্ষেত্রে সেই উচ্চতা সমকোণ শীর্ষ থেকে উচ্চতা। দুটি পরস্পর লম্ব বলে অর্ধেক ভূমি গুণ উচ্চতার সাধারণ নিয়ম সরাসরি প্রযোজ্য হয়, ফলে K = ch/2। এই সরলতা উচ্চতা-পদ্ধতিকে সবচেয়ে সরাসরি গণনা করে তোলে।" },
      { "question": "অতিভুজ-উচ্চতা গুণফলকে কেন দুই দিয়ে ভাগ করি?", "answer": "c গুণ h গুণফল একই ভূমি ও একই উচ্চতার ওপর নির্মিত সামান্তরিকের ক্ষেত্রফল। ত্রিভুজ সেই সামান্তরিকের ঠিক অর্ধেক ভরে, তাই গুণফলকে অর্ধেক করতেই হবে। ভাগ এড়িয়ে গেলে অন্য প্রশ্নের উত্তর হয়: c = 10 ও h = 4.8 হলে 48 সামান্তরিক, আর 24 ত্রিভুজ।" },
      { "question": "দুটি বাহু জানা থাকলে উচ্চতা কীভাবে বের করবেন?", "answer": "h = ab/c ব্যবহার করুন। দুটি বাহু গুণ করে অতিভুজ দিয়ে ভাগ করুন, প্রয়োজনে পিথাগোরাসের উপপাদ্য থেকে অতিভুজ পেতে পারেন। বাহু 6 ও 8 এবং অতিভুজ 10 হলে h = 48/10 = 4.8। বাহু জানা থাকলে এই সাইটের বাহু-থেকে-উচ্চতা ক্যালকুলেটর ঠিক এই গণনাই করে।" },
      { "question": "সমকোণী-ত্রিভুজ উচ্চতার গুণোত্তর মধ্যক উপপাদ্য কী?", "answer": "এতে বলা হয় h-এর বর্গ p গুণ q-এর সমান, যেখানে p ও q অতিভুজ থেকে উচ্চতা যে দুটি অংশ কাটে। তাই উচ্চতা সেই অংশগুলোর গুণোত্তর মধ্যক। p = 6.4 ও q = 3.6 হলে h = 23.04-এর বর্গমূল = 4.8, যা অন্য উপায়ে পাওয়া উচ্চতাও যাচাই করে।" },
      { "question": "উচ্চতা কি অতিভুজের অর্ধেকের বেশি হতে পারে?", "answer": "না। বৈধ সমকোণী ত্রিভুজের জন্য h-কে 0 < h <= c/2 মানতে হবে। অতিভুজকে সমান দুই অর্ধেকে ভাগ করলে উচ্চতা সবচেয়ে লম্বা হয়, সমদ্বিবাহু ক্ষেত্রে ঠিক c/2 পৌঁছায়। এর বেশি মান, যেমন c = 10-এ h = 6, সেই অতিভুজের সমকোণী ত্রিভুজের হতে পারে না।" },
      { "question": "শুধু অতিভুজ ও উচ্চতা জানা থাকলে ক্ষেত্রফল কীভাবে গণনা করবেন?", "answer": "সরাসরি K = ch/2 প্রয়োগ করুন। বাহু পুনর্গঠনের দরকার নেই, কারণ একটি বাহু ও তার সঙ্গত উচ্চতা দিয়েই ক্ষেত্রফল নির্ধারিত। উদাহরণস্বরূপ, c = 10 ও h = 4.8 হলে K = 24 বর্গ একক। শুধু আগে নিশ্চিত করুন উচ্চতা লম্ব এবং অতিভুজের অর্ধেকের বেশি নয়।" },
      { "question": "উচ্চতা-ভিত্তিক সূত্র বাহু-সূত্রের মতো একই ফলাফল কেন দেয়?", "answer": "দুটোই একই ত্রিভুজের ক্ষেত্রফল গণনা করে। ab/2-কে ch/2-এর সমান ধরে দুই দিয়ে গুণ করলে ab = ch পাওয়া যায়, তাই h = ab/c। যেকোনো সামঞ্জস্যপূর্ণ সমকোণী ত্রিভুজের জন্য দুটি সূত্র বীজগাণিতিকভাবে সমতুল্য, তাই দুটোই গণনা করা এমন শক্ত যাচাই: সম্মতি ইনপুট নিশ্চিত করে।" },
      { "question": "ক্ষেত্রফলের ফলাফলে কোন একক ব্যবহার করা উচিত?", "answer": "ইনপুট দৈর্ঘ্যের সঙ্গে মিলিয়ে বর্গ একক: মিটার বর্গমিটার দেয়, সেন্টিমিটার বর্গসেন্টিমিটার দেয়, মিলিমিটার বর্গমিলিমিটার দেয়। গণনার আগে সব ইনপুট একটি এককে রূপান্তর করুন। মনে রাখবেন, ক্ষেত্রফলের রূপান্তর রৈখিক গুণনীয়কের বর্গ করে, তাই এক বর্গমিটার 10,000 বর্গসেন্টিমিটারের সমান। ভুল এককে রূপান্তর করা এই পৃষ্ঠার একটি সাধারণ ভুল।" },
      { "question": "উচ্চতা-ভিত্তিক সূত্র কি অন্য ত্রিভুজে ব্যবহার করা যায়?", "answer": "সঙ্গত লম্ব জোড়াসহ অর্ধেক ভূমি গুণ উচ্চতার ভূমি-উচ্চতা নিয়ম প্রতিটি ত্রিভুজে কাজ করে। এখানে বিশেষ হলো সমকোণী-ত্রিভুজের সীমাবদ্ধতা: উচ্চতাকে সমকোণ শীর্ষ থেকে নামতে হবে, আর h কখনো c/2-এর বেশি হতে পারে না। এই সীমা সূক্ষ্মকোণী বা স্থূলকোণী ত্রিভুজে প্রযোজ্য নয়।" }
    ],
    "faqHeading": "সচরাচর জিজ্ঞাসিত প্রশ্ন",
    "relatedHeading": "সম্পর্কিত সমকোণী ত্রিভুজ ক্যালকুলেটর দেখুন",
    "relatedItems": [
      "সমকোণী ত্রিভুজের ক্ষেত্রফল ক্যালকুলেটর",
      "লম্ব-ভূমি থেকে সমকোণী ত্রিভুজের ক্ষেত্রফল ক্যালকুলেটর",
      "বাহু থেকে সমকোণী ত্রিভুজের উচ্চতা ক্যালকুলেটর",
      "অর্ধপরিসীমা থেকে সমকোণী ত্রিভুজের ক্ষেত্রফল ক্যালকুলেটর",
      "কোণ থেকে সমকোণী ত্রিভুজের ক্ষেত্রফল ক্যালকুলেটর",
      "সমকোণী ত্রিভুজের পরিসীমা ক্যালকুলেটর",
      "সমকোণী ত্রিভুজের বাহু ক্যালকুলেটর"
    ]
  }
};
