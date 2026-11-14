/* Questões de revisão do módulo Memória. Só dados (formato em REVISAO.md, 3.4).
   Todo o conteúdo vem dos slides das aulas Memória 1 e Memória 2
   (texto-base: Gazzaniga, Heatherton e Halpern, Ciência psicológica, cap. 7).
   Regras: toda questão cita a aula de origem; devolutiva para cada alternativa;
   sem "todas as anteriores". */
window.PB_QUESTOES = window.PB_QUESTOES || {};

window.PB_QUESTOES.memoria = [
  {
    id: "mem-01",
    tipo: "conceito",
    aula: "Memória 1 (memória sensorial, Sperling, 1960)",
    enunciado: "No experimento de Sperling, uma matriz de letras aparece por 1/20 de segundo e um tom indica qual fileira relatar. Com o tom imediato, quase toda a fileira sinalizada era relatada. O que esse resultado mostra?",
    opcoes: [
      "Que só três ou quatro letras chegam a ser registradas.",
      "Que a matriz inteira ficou disponível por um instante e se esvaiu rapidamente.",
      "Que a memória de longo prazo guarda a matriz como uma fotografia.",
      "Que o tom ajuda a codificar a fileira antes de a matriz aparecer."
    ],
    correta: 1,
    devolutiva: [
      "Essa era a aparência do relato total: as pessoas relatavam 3 ou 4 letras, mas diziam ter visto todas. O relato parcial mostrou que havia mais disponível do que dava tempo de relatar.",
      "Como o tom vem depois de a matriz desaparecer, a pessoa não sabe antes qual fileira será pedida. Se consegue relatar quase qualquer fileira, a matriz inteira estava disponível. Após cerca de 1 s, o desempenho caía ao nível do relato total.",
      "O traço em questão é sensorial (memória icônica) e dura menos de 1 s. Não é um registro de longo prazo.",
      "O tom vem depois que a matriz some. Ele não pode orientar a codificação; só indica o que relatar do traço que ainda persiste."
    ]
  },
  {
    id: "mem-02",
    tipo: "conceito",
    aula: "Memória 1 (demonstração das três letras: Brown, 1958; Peterson e Peterson, 1959)",
    enunciado: "Você lê três letras (X C J), conta de 3 em 3 para trás em voz alta por cerca de 18 segundos e depois tenta escrever as letras. A recordação costuma ser baixa. Qual é a explicação dada na aula?",
    opcoes: [
      "Três letras ultrapassam a capacidade da memória de trabalho.",
      "As letras nunca foram codificadas, porque foram lidas uma única vez.",
      "Contar impede o ensaio, e a memória de trabalho mantém a informação enquanto ela é ensaiada.",
      "As letras ficaram na memória sensorial, que dura menos de 1 segundo."
    ],
    correta: 2,
    devolutiva: [
      "Três letras ficam abaixo do limite (cerca de 4 blocos). O problema aqui não é capacidade.",
      "As letras foram atendidas e entraram na memória de trabalho. Sem a contagem, você as escreveria sem dificuldade.",
      "A contagem ocupa o sistema e impede a repetição das letras. Sem ensaio, a informação se mantém por 20 a 30 s no máximo. Nuance da aula: a perda cresce ao longo das tentativas, o que aponta também para interferência.",
      "O que é atendido passa da memória sensorial para a memória de trabalho. As letras foram lidas com atenção, então já tinham avançado."
    ]
  },
  {
    id: "mem-03",
    tipo: "aplicacao",
    aula: "Memória 1 (capacidade em blocos: Miller, 1956; Cowan, 2001; Chase e Simon, 1973)",
    enunciado: "Uma estudante estrangeira, recém-chegada, que não conhece UFAL, CNPq nem PIBIC, vê a sequência U F A L U S P C N P Q P I B I C T C C por 5 segundos. Comparada a um estudante da UFAL, o que se espera?",
    opcoes: [
      "O mesmo desempenho, porque a capacidade da memória de trabalho é igual para todos.",
      "Desempenho melhor, porque ela não se distrai com o significado das siglas.",
      "Desempenho pior, porque ela não tem no longo prazo o conhecimento que permite formar os blocos.",
      "Desempenho pior, porque a memória sensorial dela é mais curta."
    ],
    correta: 2,
    devolutiva: [
      "O limite é parecido, mas ele é contado em blocos. Quem forma blocos maiores guarda mais letras com o mesmo limite.",
      "O significado é justamente o que ajuda: ele transforma 19 itens soltos em 5 blocos.",
      "Blocos dependem do longo prazo: você só agrupa UFAL se já sabe o que é UFAL. É o mesmo padrão do xadrez: com peças em posições aleatórias, a vantagem dos mestres desaparece.",
      "Nada na situação envolve diferença de memória sensorial. A diferença está no conhecimento prévio que permite agrupar."
    ]
  },
  {
    id: "mem-04",
    tipo: "conceito",
    aula: "Memória 1 (efeito de posição serial: Glanzer e Cunitz, 1966)",
    enunciado: "Na recordação livre de uma lista, as primeiras e as últimas palavras são mais lembradas. O que acontece quando há 30 segundos de distração antes de recordar, e o que isso sustenta?",
    opcoes: [
      "A primazia desaparece e a recência permanece: as primeiras palavras estavam na memória de trabalho.",
      "A recência desaparece e a primazia permanece: a manipulação afeta só uma parte da curva, o que sustenta dois componentes.",
      "As duas desaparecem: a distração apaga a lista inteira.",
      "Nada muda: a posição serial não depende do intervalo."
    ],
    correta: 1,
    devolutiva: [
      "É o contrário. As primeiras palavras recebem mais ensaio e chegam ao longo prazo; por isso resistem à distração.",
      "As últimas palavras ainda estavam na memória de trabalho no momento do teste, e a distração as desloca. As primeiras já tinham chegado ao longo prazo. Limite registrado na aula: há recência também no longo prazo (a última aula, os presidentes mais recentes).",
      "A primazia permanece. O efeito da distração é seletivo, e é esse efeito seletivo que interessa como evidência.",
      "O intervalo preenchido com distração muda a curva: elimina a recência."
    ]
  },
  {
    id: "mem-05",
    tipo: "aplicacao",
    aula: "Memória 1 (dupla dissociação H.M. e K.F.; amnésia retrógrada e anterógrada)",
    enunciado: "Depois de uma cirurgia, uma pessoa conversa normalmente e lembra da infância e da família, mas esquece a conversa em cerca de um minuto e não retém o que acontece desde a operação. Que padrão é esse?",
    opcoes: [
      "Amnésia retrógrada: perda das memórias formadas antes da lesão.",
      "Padrão anterógrado, como o de H.M.: memória de trabalho preservada e formação de novas memórias de longo prazo comprometida.",
      "O padrão de K.F.: memória de trabalho reduzida a 1 ou 2 itens, com longo prazo preservado.",
      "Falha de atenção: a pessoa não codifica porque não presta atenção."
    ],
    correta: 1,
    devolutiva: [
      "Na retrógrada, as memórias antigas ficam inacessíveis. Aqui a infância e a família estão preservadas.",
      "É o caso de H.M., após a remoção de partes dos lobos temporais mediais, incluindo o hipocampo. Precisão da aula: H.M. também teve alguma perda retrógrada para os anos imediatamente anteriores à cirurgia.",
      "K.F. mostra o padrão inverso: extensão de 1 a 2 itens na memória de trabalho, lembrando bem dos eventos do dia a dia. É o par que forma a dupla dissociação.",
      "A pessoa conversa normalmente, o que exige manter e manipular informação. A memória de trabalho está funcionando; o que falha é formar memórias novas de longo prazo."
    ]
  },
  {
    id: "mem-06",
    tipo: "aplicacao",
    aula: "Memória 1 (como estudar: Karpicke e Blunt, 2011; Roediger e Karpicke, 2006)",
    enunciado: "Uma colega releu o capítulo quatro vezes e diz que domina o conteúdo. Pelo que a aula apresentou, qual orientação tem melhor apoio?",
    opcoes: [
      "Reler mais uma vez na véspera, porque a sensação de domínio indica que o conteúdo está retido.",
      "Fazer um mapa conceitual consultando o livro, porque organizar supera qualquer outra estratégia.",
      "Fechar o material, escrever o que lembra, conferir e repetir dias depois, com intervalos crescentes.",
      "Estudar na mesma sala da prova, porque o contexto é o fator que mais pesa."
    ],
    correta: 2,
    devolutiva: [
      "Reler dá sensação de domínio porque reconhecer é mais fácil que recordar, e a prova costuma pedir recordação.",
      "No estudo de Karpicke e Blunt (2011), a prática de recuperação superou o estudo repetido e os mapas conceituais. Os mapas continuam úteis para organizar, especialmente se forem feitos de memória.",
      "É o ciclo sugerido na aula: a prática de recuperação usa o mesmo caminho que a prova vai exigir, e o espaçamento obriga a recuperar quando a informação já está menos acessível.",
      "O efeito do contexto existe (especificidade da codificação), mas a aula registra que o ganho de estudar na sala da prova é pequeno perto do ganho de praticar recuperação."
    ]
  },
  {
    id: "mem-07",
    tipo: "aplicacao",
    aula: "Memória 2 (atribuição errada da fonte; efeito da falsa fama: Jacoby et al., 1989)",
    enunciado: "Você lê uma lista de nomes desconhecidos. No dia seguinte, ao ver um desses nomes, tem a impressão de que é de alguém famoso. Em qual das falhas descritas por Schacter isso se encaixa?",
    opcoes: [
      "Bloqueio: a informação está temporariamente inacessível.",
      "Transitoriedade: a informação se perdeu com o tempo.",
      "Atribuição errada da fonte: a familiaridade permanece e a origem se perde.",
      "Persistência: a lembrança volta sem ser convocada."
    ],
    correta: 2,
    devolutiva: [
      "No bloqueio (ponta da língua), você sabe que sabe e não consegue acessar. Aqui o acesso acontece; o erro está na origem atribuída.",
      "O nome não se perdeu: ele continua familiar. O que se perdeu foi de onde vem essa familiaridade.",
      "Familiaridade e origem são julgamentos separados. O sistema entrega o primeiro com facilidade e o segundo com esforço.",
      "Persistência é o que não se apaga e retorna com carga emocional, como no TEPT. Não é o caso."
    ]
  },
  {
    id: "mem-08",
    tipo: "aplicacao",
    aula: "Memória 2 (testemunho ocular: Wells et al., 1998)",
    enunciado: "Semanas depois de um crime, uma testemunha afirma ter certeza absoluta do reconhecimento que fez. Ela soube que outra testemunha escolheu a mesma pessoa. O que a aula permite dizer sobre essa certeza?",
    opcoes: [
      "Ela indica precisão: quanto maior a confiança, mais correta a identificação.",
      "Ela não é boa medida de precisão: a confiança cresce depois, e só é informativa quando registrada na identificação inicial, antes de qualquer retorno.",
      "Ela mostra que a lembrança foi bem consolidada por causa da emoção do evento.",
      "Ela deve ser desconsiderada, porque testemunhas oculares sempre erram."
    ],
    correta: 1,
    devolutiva: [
      "Testemunhas erradas costumam ser tão confiantes quanto as corretas.",
      "Saber que outra testemunha escolheu a mesma pessoa aumenta a certeza, mesmo em identificação falsa. Por isso a recomendação é registrar a confiança no momento da identificação.",
      "Lembranças de eventos marcantes são vívidas e ditas com confiança, mas vividez e confiança não garantem precisão.",
      "A aula não diz isso. Diz que a confiança tardia não mede precisão e lista procedimentos que reduzem o erro (quem aplica não sabe quem é o suspeito, avisar que o autor pode não estar presente, gravar o procedimento)."
    ]
  }
];

/* Atividade "Que tipo de memória é?" (aula Memória 1, atividade 4).
   A página monta as alternativas e as devolutivas a partir destas definições. */
window.PB_QUESTOES.memoria_tipos = {
  aula: "Memória 1 (tipos de memória de longo prazo, atividade 4)",
  categorias: [
    { id: "epi", nome: "Episódica", def: "eventos vividos, com tempo e lugar (memória explícita)" },
    { id: "sem", nome: "Semântica", def: "fatos e conceitos (memória explícita)" },
    { id: "proc", nome: "Procedimentos", def: "habilidades e hábitos (memória implícita)" },
    { id: "cond", nome: "Condicionamento", def: "associação entre estímulos (memória implícita)" },
    { id: "pre", nome: "Pré-ativação", def: "exposição prévia que facilita e dá familiaridade (memória implícita)" }
  ],
  itens: [
    { id: "tipo-01", texto: "Lembrar onde você estava no dia do 7 a 1.", cat: "epi", porque: "É um evento vivido, com tempo e lugar." },
    { id: "tipo-02", texto: "Digitar a senha do celular sem pensar nos números.", cat: "proc", porque: "É uma habilidade que aparece no desempenho, sem recordação consciente de cada passo." },
    { id: "tipo-03", texto: "Sentir enjoo com o cheiro de uma comida que já te fez mal.", cat: "cond", porque: "É uma associação aprendida entre estímulos (aversão ao sabor)." },
    { id: "tipo-04", texto: "Achar que um nome é de alguém famoso só porque você o leu ontem.", cat: "pre", porque: "A exposição prévia deixou familiaridade sem lembrança da origem: é o efeito da falsa fama." },
    { id: "tipo-05", texto: "Saber o nome da sua primeira professora.", cat: "sem", porque: "Hoje é um fato que você sabe sem lembrar quando aprendeu. Vale a discussão: a informação nasceu de experiências vividas. Episódios tendem a se tornar semânticos com o tempo, e a fronteira é gradual." },
    { id: "tipo-06", texto: "Reconhecer 'cama' mais rápido logo depois de ler 'travesseiro'.", cat: "pre", porque: "Ler uma palavra facilitou o processamento de outra associada, sem recordação consciente." }
  ]
};
