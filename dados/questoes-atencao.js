/* Questões e classificações do módulo Atenção. Só dados (formato em REVISAO.md, 3.4).
   Base: slides "Atenção: bases cognitivas" (aulas/atencao-bases-cognitivas.pptx; Sternberg, Psicologia cognitiva, cap. 4).
   Apoio: "Atenção e Consciência" (aulas/atencao-e-consciencia.pdf), só para escuta dicótica e gorila invisível.
   Regras: toda questão cita a parte da aula de origem; devolutiva para cada alternativa;
   sem "todas as anteriores". */
window.PB_QUESTOES = window.PB_QUESTOES || {};

window.PB_QUESTOES.atencao = [
  {
    id: "at-01",
    tipo: "conceito",
    aula: "Atenção: bases cognitivas (o que é atenção)",
    enunciado: "Qual destas afirmações descreve a relação entre atenção e consciência apresentada na aula?",
    opcoes: [
      "São a mesma coisa: tudo o que recebe atenção é consciente.",
      "São conjuntos parcialmente sobrepostos: parte do processamento ativo da informação ocorre sem consciência.",
      "São independentes: a atenção trata dos sentidos, e a consciência, da memória.",
      "A consciência vem antes: só se presta atenção ao que já é consciente."
    ],
    correta: 1,
    devolutiva: [
      "A atenção inclui processos conscientes e inconscientes. Os processos automáticos, por exemplo, ocorrem em geral fora da consciência.",
      "Atenção e consciência formam conjuntos parcialmente sobrepostos. Parte do processamento ativo da informação sensorial e da informação lembrada ocorre sem consciência.",
      "A atenção processa informação vinda dos sentidos, da memória armazenada e de outros processos cognitivos. E os dois conjuntos se sobrepõem em parte.",
      "A aula não propõe essa ordem. Há processamento atencional que não chega à consciência."
    ]
  },
  {
    id: "at-02",
    tipo: "aplicacao",
    aula: "Atenção: bases cognitivas (teoria da detecção de sinais)",
    enunciado: "Na revista de bagagem de um aeroporto, deixar passar um objeto perigoso tem consequências graves. Por isso, os agentes baixam o critério para dizer \"há algo aqui\". O que se espera que aconteça?",
    opcoes: [
      "Aumentam os acertos e aumentam também os alarmes falsos.",
      "Aumentam os acertos e diminuem os alarmes falsos.",
      "Diminuem as falhas, sem nenhum custo.",
      "Nada muda: detectar depende só da sensibilidade de quem observa."
    ],
    correta: 0,
    devolutiva: [
      "Com o critério mais baixo, o agente diz \"há algo\" com menos evidência. Detecta mais objetos reais (acertos) e também manda abrir mais malas sem nada (alarmes falsos).",
      "Isso exigiria enxergar melhor, e não só mudar o critério. Mover o critério troca um tipo de erro pelo outro.",
      "As falhas diminuem, mas o custo aparece nos alarmes falsos.",
      "Detectar é decidir: a detecção depende de um critério móvel, e não só da sensibilidade."
    ]
  },
  {
    id: "at-03",
    tipo: "conceito",
    aula: "Atenção: bases cognitivas (vigilância: o experimento de Mackworth)",
    enunciado: "No experimento de Mackworth, depois de meia hora vigiando o mostrador, os participantes já deixavam de relatar um quarto dos passos duplos. Qual é a explicação apresentada na aula?",
    opcoes: [
      "Os olhos se cansam e a sensibilidade sensorial cai.",
      "Com o tempo, a pessoa fica menos disposta a arriscar um alarme falso e deixa de relatar sinais de que não tem certeza.",
      "Os participantes esquecem a instrução da tarefa.",
      "O passo duplo fica automático e deixa de exigir atenção."
    ],
    correta: 1,
    devolutiva: [
      "A queda não vem de perda de sensibilidade sensorial.",
      "O que muda é o critério: cresce a incerteza sobre o que se observou, e a pessoa passa a não relatar sinais duvidosos. O resultado é mais falhas. Vigilância é o caso em que o critério se desloca ao longo do tempo.",
      "A explicação da aula é o deslocamento do critério, e não o esquecimento da instrução.",
      "Se a detecção ficasse automática, o desempenho não cairia. Treino ajuda, mas não substitui pausas frequentes."
    ]
  },
  {
    id: "at-04",
    tipo: "aplicacao",
    aula: "Atenção: bases cognitivas (dois mecanismos de busca)",
    enunciado: "Uma tela mostra uma letra T no meio de várias letras L. Quando o número de letras L dobra, o tempo para achar o T aumenta. Quando o alvo é uma letra O no meio das mesmas letras L, dobrar o número de itens quase não muda o tempo. Como a teoria da integração de características explica a diferença?",
    opcoes: [
      "O T é menos familiar que o O.",
      "T e L têm as mesmas características; só a conjunção entre elas difere, e uni-las exige atenção, um objeto por vez.",
      "O O é maior e mais brilhante que o T.",
      "A busca do T é paralela, e a do O é serial."
    ],
    correta: 1,
    devolutiva: [
      "As duas letras são igualmente conhecidas. O que pesa é como o alvo difere dos distratores.",
      "T e L têm uma linha horizontal e uma vertical; difere só a conjunção. Unir características funciona como uma cola mental, em série, e o tempo cresce com o número de itens. O O tem um traço que os distratores não têm (a curvatura), detectado em paralelo.",
      "Tamanho e brilho não entram na explicação. O traço distintivo do O é a curvatura.",
      "É o contrário: a busca de características (O) é paralela, e a busca conjunta (T entre L) é serial."
    ]
  },
  {
    id: "at-05",
    tipo: "aplicacao",
    aula: "Atenção: bases cognitivas (efeito Stroop)",
    enunciado: "Um colega afirma: \"Com força de vontade, eu consigo desligar a leitura e nomear a cor da tinta tão rápido quanto em uma lista sem conflito\". O que a aula diz sobre isso?",
    opcoes: [
      "Ele tem razão: a leitura é um processo controlado, e basta decidir não ler.",
      "Ler é um processo automático, que não está prontamente sujeito ao controle consciente; a palavra compete com a nomeação da cor.",
      "Ele tem razão, desde que diga as cores em voz baixa.",
      "O atraso vem de um problema de visão de cores, e não da leitura."
    ],
    correta: 1,
    devolutiva: [
      "Em leitores treinados, ler exige pouco ou nenhum esforço intencional: é um processo automático.",
      "A palavra ativa uma via que compete com a nomeação da cor, e é preciso mais tempo para acumular ativação suficiente para a resposta correta. Por isso o atraso aparece mesmo quando a pessoa tenta ignorar a palavra.",
      "O volume da voz não interfere. O conflito está entre ler e nomear a cor.",
      "As cores são as mesmas nas duas listas. O que muda é o conflito com a palavra escrita."
    ]
  },
  {
    id: "at-06",
    tipo: "aplicacao",
    aula: "Atenção: bases cognitivas (do filtro aos recursos)",
    enunciado: "Uma estudante escreve um relatório sem dificuldade enquanto ouve música instrumental, mas não consegue escrever enquanto ouve um noticiário. Que proposta explica melhor a diferença?",
    opcoes: [
      "Reservatório único (Kahneman): qualquer segunda tarefa atrapalha na mesma medida.",
      "Recursos por modalidade (Navon e Gopher): o noticiário e a escrita são tarefas verbais e disputam os mesmos recursos.",
      "Filtro precoce (Broadbent): só um canal passa, então nenhuma das duas combinações seria possível.",
      "Automatização: ouvir noticiário é uma tarefa nova, e ouvir música nunca foi praticada."
    ],
    correta: 1,
    devolutiva: [
      "Com um reservatório único, o que importaria seria quanto cada tarefa exige. A diferença entre música e noticiário pede uma explicação pela natureza das tarefas.",
      "Pelo menos parte dos recursos é específica da modalidade. Ouvir música e escrever é fácil; ouvir um noticiário e escrever é difícil, porque as duas tarefas são verbais.",
      "Se a atenção fosse apenas um filtro, dividir a atenção seria impossível, e a estudante consegue escrever ouvindo música.",
      "A explicação da aula para esse exemplo está na modalidade das tarefas, e não na prática."
    ]
  },
  {
    id: "at-07",
    tipo: "aplicacao",
    aula: "Atenção: bases cognitivas (até onde a prática consegue chegar)",
    enunciado: "No estudo de Spelke, Hirst e Neisser (1976), depois de 85 sessões de treino, os participantes liam com compreensão e escreviam palavras ditadas ao mesmo tempo, tão bem quanto em cada tarefa isolada. Mesmo assim, falar ao celular ao dirigir aumenta as falhas diante do sinal vermelho. Como a aula concilia os dois resultados?",
    opcoes: [
      "A prática automatiza tarefas e permite combiná-las, mas permanece um limite: duas operações de escolher uma resposta não passam ao mesmo tempo.",
      "O estudo de Spelke estava errado: tarefas controladas nunca se combinam.",
      "Dirigir é uma tarefa que não pode ser automatizada em nenhuma medida.",
      "O problema do celular é só ter uma das mãos ocupada."
    ],
    correta: 0,
    devolutiva: [
      "Tarefas controladas podem ser automatizadas e funcionar em conjunto. O limite que permanece é o Período Refratário Psicológico: quando duas tarefas rápidas se sobrepõem, a resposta a uma delas atrasa. A prática desloca o gargalo, mas não o elimina.",
      "O resultado de Spelke e colegas mostra que a combinação é possível com prática suficiente.",
      "Boa parte de dirigir se automatiza com a prática. A falha aparece quando a conversa e o trânsito exigem escolher respostas ao mesmo tempo.",
      "A aula compara falar ao celular com ouvir rádio: o rádio não aumenta as falhas. A diferença está na exigência de responder, e não nas mãos."
    ]
  },
  {
    id: "at-08",
    tipo: "aplicacao",
    aula: "Atenção e Consciência (experimento do gorila invisível: Simons e Chabris, 1999)",
    enunciado: "Em um vídeo, as pessoas contam os passes de uma bola de basquete. Uma pessoa fantasiada de gorila atravessa o centro da cena por quase 10 segundos, e cerca de metade dos participantes não relata tê-la visto. O que esse resultado mostra?",
    opcoes: [
      "Que metade das pessoas tem um problema de visão.",
      "Que a presença de um estímulo no campo visual não garante que ele seja percebido conscientemente quando a atenção está engajada em outra tarefa.",
      "Que estímulos inesperados sempre capturam a atenção.",
      "Que os participantes viram o gorila e o esqueceram por causa do tempo."
    ],
    correta: 1,
    devolutiva: [
      "O gorila está na retina de todos. O que falta é a seleção pelo sistema atencional.",
      "É a cegueira por desatenção: visibilidade não é o mesmo que processamento consciente. Com os recursos de atenção alocados à contagem dos passes, um estímulo inesperado pode não chegar à consciência.",
      "O resultado mostra o oposto: mesmo um estímulo saliente pode passar sem ser notado.",
      "A explicação apresentada é atencional: o estímulo não chegou a ser representado conscientemente."
    ]
  }
];

/* Classificação 1: as quatro funções da atenção consciente (Quadro 4.4). */
window.PB_QUESTOES.atencao_funcoes = {
  aula: "Atenção: bases cognitivas (as quatro funções da atenção consciente)",
  categorias: [
    { id: "det", nome: "Detecção de sinais", def: "detectar o surgimento de um estímulo determinado, mantendo vigilância mesmo em longas ausências de sinal" },
    { id: "sel", nome: "Atenção seletiva", def: "escolher prestar atenção em alguns estímulos e ignorar outros" },
    { id: "div", nome: "Atenção dividida", def: "alocar os recursos disponíveis para coordenar mais de uma tarefa por vez" },
    { id: "bus", nome: "Busca", def: "procurar ativamente um alvo entre inúmeros distratores" }
  ],
  itens: [
    { id: "fun-01", texto: "Um salva-vidas observa o mar por horas, à espera de um banhista em dificuldade.", cat: "det", porque: "O sinal é raro e imprevisível, e é preciso manter a vigilância em longas ausências de sinal." },
    { id: "fun-02", texto: "Em uma festa barulhenta, você acompanha só a conversa da pessoa à sua frente.", cat: "sel", porque: "Você escolhe uma fonte e ignora as outras conversas." },
    { id: "fun-03", texto: "Você dirige e, ao mesmo tempo, conversa com quem está no banco do passageiro.", cat: "div", porque: "Os recursos são distribuídos para coordenar duas tarefas ao mesmo tempo." },
    { id: "fun-04", texto: "Na saída do estádio, você procura um amigo no meio da multidão.", cat: "bus", porque: "Há um alvo definido e muitos distratores." },
    { id: "fun-05", texto: "Um vigia noturno acompanha as câmeras de um prédio em que quase nunca acontece nada.", cat: "det", porque: "É vigilância: esperar um sinal que pode demorar a surgir." },
    { id: "fun-06", texto: "Você percorre a estante atrás de um livro de capa vermelha.", cat: "bus", porque: "Você procura ativamente um alvo entre distratores (os outros livros)." }
  ]
};

/* Classificação 2: processos controlados e automáticos; equívocos e lapsos. Cada item tem o seu par de alternativas. */
window.PB_QUESTOES.atencao_processos = {
  aula: "Atenção: bases cognitivas (processos controlados e automáticos; quando a automatização falha)",
  itens: [
    {
      id: "proc-01",
      texto: "Dirigir pela primeira vez em uma cidade que você não conhece. Que tipo de processo predomina?",
      opcoes: ["Controlado", "Automático"], correta: 0,
      devolutiva: [
        "A tarefa é nova e imprevista: exige esforço intencional, consciência e muitos recursos, um passo por vez.",
        "Processos automáticos aparecem em tarefas conhecidas, muito praticadas e estáveis. Aqui a situação é nova."
      ]
    },
    {
      id: "proc-02",
      texto: "Ler uma palavra escrita na sua língua materna. Que tipo de processo predomina?",
      opcoes: ["Controlado", "Automático"], correta: 1,
      devolutiva: [
        "Em um leitor treinado, ler exige pouco ou nenhum esforço intencional. É por isso que a palavra atrapalha no efeito Stroop.",
        "Ler é uma tarefa muito praticada: exige pouco esforço, ocorre em geral fora da consciência e consome recursos desprezíveis."
      ]
    },
    {
      id: "proc-03",
      texto: "Resolver um problema de matemática de um tipo que você nunca viu. Que tipo de processo predomina?",
      opcoes: ["Controlado", "Automático"], correta: 0,
      devolutiva: [
        "Tarefas novas e difíceis pedem processamento em série, com esforço intencional e consciência.",
        "Não houve prática que automatizasse esse procedimento. Lembre que não há dois grupos separados: com prática, procedimentos controlados se tornam parcial ou totalmente automáticos, ao longo de um contínuo."
      ]
    },
    {
      id: "proc-04",
      texto: "Você pretendia passar na farmácia na volta para casa. Com pressa, seguiu o caminho de sempre e chegou sem o remédio. Que tipo de erro é esse?",
      opcoes: ["Equívoco", "Lapso"], correta: 1,
      devolutiva: [
        "O objetivo e o meio estavam bem escolhidos (passar na farmácia). O erro foi na execução.",
        "É um erro na execução de um meio já escolhido, em um processo automático: a rotina do caminho de sempre tomou conta. É o mesmo caso do livro esquecido em casa por pressa."
      ]
    },
    {
      id: "proc-05",
      texto: "Você decidiu que não precisava revisar a matéria e foi para a prova sem estudar. Que tipo de erro é esse?",
      opcoes: ["Equívoco", "Lapso"], correta: 0,
      devolutiva: [
        "É um erro na escolha de um objetivo ou do meio para atingi-lo. Ocorre em processos controlados e intencionais.",
        "No lapso, a intenção é correta e a execução falha. Aqui a decisão é que foi ruim."
      ]
    },
    {
      id: "proc-06",
      texto: "Depois de trocar a senha do celular, você digita a senha antiga sem perceber. Que tipo de erro é esse?",
      opcoes: ["Equívoco", "Lapso"], correta: 1,
      devolutiva: [
        "Você não decidiu usar a senha antiga. A sequência automática é que se impôs.",
        "É um erro em processo automático, quando é preciso desviar de uma rotina. Uma forma de reduzir o custo dos lapsos são as funções forçadas: limitações do ambiente que dificultam ou impedem a sequência automática."
      ]
    }
  ]
};

/* Classificação 3: os quatro resultados da detecção de sinais (Quadro 4.5). */
window.PB_QUESTOES.atencao_tds = {
  aula: "Atenção: bases cognitivas (teoria da detecção de sinais)",
  categorias: [
    { id: "ac", nome: "Acerto", def: "o sinal estava presente e foi detectado" },
    { id: "fa", nome: "Falha", def: "o sinal estava presente e não foi detectado" },
    { id: "af", nome: "Alarme falso", def: "o sinal estava ausente e a pessoa disse que o detectou" },
    { id: "rc", nome: "Rejeição correta", def: "o sinal estava ausente e a pessoa não o indicou" }
  ],
  itens: [
    { id: "tds-01", texto: "Na revista de bagagem, há uma faca na mala e o agente a identifica.", cat: "ac", porque: "Sinal presente e detectado." },
    { id: "tds-02", texto: "Não há nada proibido na mala, e o agente manda abri-la por achar que viu algo.", cat: "af", porque: "Sinal ausente, e a resposta foi \"detectei\"." },
    { id: "tds-03", texto: "No experimento de Mackworth, o ponteiro dá um passo duplo e o participante não aperta o botão.", cat: "fa", porque: "O sinal (o passo duplo) estava presente e não foi relatado." },
    { id: "tds-04", texto: "Não há nada proibido na mala, e o agente a libera.", cat: "rc", porque: "Sinal ausente, e a resposta foi \"não há nada\"." },
    { id: "tds-05", texto: "O celular não vibrou, mas você teve a impressão de que vibrou e foi conferir.", cat: "af", porque: "Não havia sinal, e você respondeu como se houvesse." },
    { id: "tds-06", texto: "Há uma faca na mala, e o agente a deixa passar.", cat: "fa", porque: "Sinal presente e não detectado. Quando essa falha é grave, baixa-se o critério." }
  ]
};

/* Classificação 4: onde está o gargalo da atenção. */
window.PB_QUESTOES.atencao_gargalo = {
  aula: "Atenção: bases cognitivas (onde está o gargalo da atenção); Atenção e Consciência (escuta seletiva: Cherry, 1953)",
  categorias: [
    { id: "bro", nome: "Filtro precoce (Broadbent)", def: "só um canal passa; o resto é eliminado no nível sensorial" },
    { id: "tre", nome: "Atenuação (Treisman)", def: "o canal ignorado não é bloqueado, é enfraquecido, e sinais fortes ainda passam" },
    { id: "deu", nome: "Filtro tardio (Deutsch e Deutsch)", def: "a seleção ocorre depois da análise de significado" }
  ],
  itens: [
    { id: "gar-01", texto: "Na escuta dicótica, as pessoas notam que a voz do ouvido ignorado mudou de masculina para feminina, mas não notam que a mensagem mudou de idioma. Com que modelo esse resultado combina melhor?", cat: "bro", porque: "Passam as características físicas (a voz) e não passa o significado (o idioma): é o que se espera se a seleção ocorre antes do processamento profundo de significado." },
    { id: "gar-02", texto: "Para este modelo, o canal ignorado tem o volume baixado, e não desligado.", cat: "tre", porque: "O canal ignorado é enfraquecido, e não bloqueado." },
    { id: "gar-03", texto: "Para este modelo, todas as mensagens têm o significado analisado, e a escolha acontece só depois, perto da consciência e da resposta.", cat: "deu", porque: "No filtro tardio, a seleção vem depois da análise de significado." },
    { id: "gar-04", texto: "Um sinal forte vindo do canal ignorado chega à consciência, embora o restante desse canal não chegue. Que modelo prevê isso sem precisar analisar o significado de tudo?", cat: "tre", porque: "Na atenuação, o canal ignorado é enfraquecido, e sinais fortes ainda passam." },
    { id: "gar-05", texto: "Para este modelo, nada do significado do canal ignorado poderia influenciar a pessoa, porque esse canal é eliminado antes.", cat: "bro", porque: "No filtro precoce, só um canal passa; o resto é eliminado no nível sensorial." }
  ]
};
