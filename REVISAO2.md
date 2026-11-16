# REVISAO2: ciclo didático, simulação e 3D

Plano de revisão da plataforma "Processos básicos da cognição", tomando como referência as demos educacionais de iamtechartist.com. Data: 16/11/2026. **Nenhum código foi alterado.** Nada aqui deve ser executado antes da aprovação do docente.

Este arquivo se chama `REVISAO2.md` porque já existe um `REVISAO.md` na pasta: é o plano anterior, ainda em execução, com as decisões já tomadas (conteúdo só a partir de `aulas/`, resultados só no navegador do estudante, sem build). Preferi não sobrescrever. Os dois planos se somam; onde há conflito, está indicado na seção 8.

---

## Andamento

- **16/11/2026: etapa 1 aprovada e feita** (A1, A2, A5, S1, T1, M1), em commit local. `PB.explicar` (o estudante escreve a própria explicação antes de ver a do material) em 10 atividades; `PB.caso` com 6 casos para levar à aula (2 por módulo, escritos a partir dos slides); pausa das tarefas cronometradas quando a aba do navegador fica oculta; folha de resultados mostra explicações e casos.
- **Pedido do docente em 16/11/2026:** as questões não devem ficar todas em rolagem. `PB.quiz` passou a mostrar uma questão de cada vez (revisão e classificações), com "Próxima" depois da devolutiva e "Rever todas" no final.
- **16/11/2026: etapa 2 aprovada e feita** (A3, A4, S2, S5, T2, M2, E1), em commit local. `PB.sim` (estado, função única de derivação, valores escritos vindos da mesma função) e `PB.desafio` (meta conferida contra o resultado). Desafios: enfraquecer a ilusão mudando a figura (Sensação); busca do T que não dependa do número de letras, trocando os distratores (Atenção); fazer a recência sumir com 30 s de contagem, em lista nova (Memória); de raiva a outra emoção mudando uma única avaliação, com as regras da simulação escritas na página (Emoção). A transdução passou a mostrar a taxa de disparos em número, vinda da mesma função que desenha.
- Fora do que estava previsto: a segunda lista de 15 palavras do desafio de Memória é minha (palavras comuns sem relação entre si), como já era a primeira.
- D1 e D2 ficam aprovadas na prática pela etapa 1. D3 a D6 seguem abertas.

---

## 0. Resumo

1. A plataforma tem hoje dois grupos de módulos. **Três foram refeitos** a partir dos slides (Sensação e percepção, Atenção, Memória) e já cobrem prever, testar e conferir, com dados do próprio estudante. **Seis continuam no formato antigo** (Linguagem, Pensamento, Emoção, Cognição social, Evolução, Desenvolvimento): o estudante clica e lê, e quase nada é calculado.
2. Do ciclo pedido (prever, assistir, testar, explicar, desafio, transferência), as etapas que **faltam em toda a plataforma** são três: **explicar com as próprias palavras** (hoje a explicação é entregue pronta), **desafio** (uma meta a atingir mexendo em parâmetros) e **transferência** (um caso novo, fora do experimento). São as de maior ganho e menor esforço, porque não pedem conteúdo novo de aula nem 3D.
3. **3D ajuda em poucos lugares**, e convém dizer isso com clareza: a maior parte do conteúdo são experimentos comportamentais (tempo de resposta, ilusões, listas de palavras), em que o estímulo precisa ser plano e controlado. O 3D vale onde o objeto de estudo é espacial: constância de forma, pistas de profundidade, rotação mental com sólidos, e a localização de estruturas no encéfalo. Todos esses casos saem com primitivas do Three.js, sem modelo externo.
4. Em robustez, os três módulos novos estão razoáveis; os seis antigos não têm pausa, não seguem o padrão de abas acessíveis e têm alvos de clique que não funcionam por teclado. Não há WebGL em nenhuma página hoje, então o fallback só passa a importar se o 3D entrar.

---

## 1. A referência: o que as demos fazem

Consultei o site em 16/11/2026: a página de demos e, por dentro, a demo "How Planes Fly" (capa, sumário e uma lição). O restante vem das descrições que o próprio site dá de cada demo. Não percorri as dez lições nem as outras demos, e não consegui ver as animações rodando (o navegador de teste não anima em segundo plano).

O que se observa:

- **Formato de livro com capítulos curtos.** Dez lições por tema, cada uma com um parágrafo de texto ao lado de um modelo que funciona. "Every drawing in it is a working model."
- **Uma regra de interação única e visível:** "Anything orange can be touched". O estudante sabe o que pode mexer sem ler instrução.
- **Cada lição termina em perguntas**, e o capítulo termina em um teste.
- **O modelo é a explicação.** Na lição de sustentação, o texto diz o que observar na fumaça ("Watch the smoke behind the wing"), e o desenho mostra. As descrições de outras demos falam em "predict, test and prove" e em "an experiment you run".
- **Tudo roda no navegador**, em uma única tela cheia de WebGL, com tela de carregamento e opção de entrar sem som.

O que **não** convém copiar:

- **Todo o texto fica dentro do canvas.** Leitor de tela não lê, o navegador não traduz, não dá para selecionar nem ampliar a fonte. Aqui o texto deve continuar em HTML, com o 3D como figura dentro da página.
- **Tela cheia e carga pesada.** A demo abre com barra de carregamento. Para estudante com celular e dados móveis, o 3D deve ser carregado só quando a seção for aberta, e a página deve funcionar sem ele.
- **O ciclo de seis etapas** (prever, assistir, testar, explicar, desafio, transferência) é o critério que você me passou. Usei-o como régua. Não verifiquei se cada demo do site cumpre as seis.

---

## 2. Diagnóstico por módulo

"Calcula" quer dizer: existe uma conta feita a partir do que o estudante fez ou ajustou. "Tabela" quer dizer: o resultado é um texto ou valor fixo, escolhido conforme o botão clicado.

### 2.1 Módulos já refeitos

| Módulo | O que o estudante faz | O que é calculado de fato |
|---|---|---|
| **Sensação e percepção** | Prevê (2 vezes); classifica 25 itens em 4 atividades; ajusta 12 vezes três ilusões; responde o que vê em 3 figuras; mexe em duas réguas da transdução; alterna 5 animais; responde 8 questões. | Erro médio de ajuste por ilusão, em % (dados do estudante). Acertos das classificações e do quiz. Na transdução: a forma da onda e a taxa de disparos saem das réguas, por regra do autor (ilustração). No Umwelt: filtros de cor fixos por animal (tabela). |
| **Atenção** | Prevê (3 vezes); classifica 23 itens em 4 atividades; faz 52 telas de busca visual; faz 44 tentativas de Stroop; acha a mudança em 2 rodadas; responde 8 questões. | Tempo médio por condição, com exclusão de antecipações e valores extremos; aumento do tempo por letra na busca (inclinação); efeito Stroop com sinal; taxa de erro por condição; ciclos até achar a mudança. Tudo com dados do estudante. |
| **Memória** | Prevê (5 vezes); envia estímulos no simulador do modelo modal; faz blocos de letras, amplitude de dígitos, lista de palavras, recordação livre; classifica 6 situações; responde 8 questões. | Letras lembradas em ordem, amplitude, reconhecimento da isca, acertos por posição na lista: dados do estudante. O simulador do modelo modal é uma regra probabilística do autor com três réguas (ilustração). |

### 2.2 Módulos no formato antigo

| Módulo | O que o estudante faz | O que é calculado de fato |
|---|---|---|
| **Linguagem** | Desliga um nível da "esteira" e clica em Processar; clica em dois botões de leitura; monta uma frase com 5 palavras e escolhe um perfil de afasia; responde 1 pergunta de compreensão; escolhe 1 de 5 metáforas. | Quase nada. A esteira devolve uma frase fixa por nível desligado (tabela). A afasia aplica duas regras de substituição sobre as 5 palavras (tira artigos, ou troca por palavras inventadas). O atlas é tabela. Nenhum dado do estudante é medido ou guardado. |
| **Pensamento** | Faz 30 tentativas de rotação mental; classifica 12 palavras (é ave ou não); responde 5 situações de viés. | Rotação: tempo médio por ângulo, com gráfico (dados do estudante, sem treino, sem exclusão de extremos, resposta só por clique). Tipicidade: tempo médio de aves típicas e atípicas (4 itens por condição). Vieses: a resposta do estudante **não é usada**; o texto revelado é o mesmo para qualquer resposta. |
| **Emoção** | Mexe em 4 réguas e 1 seletor e lê a emoção resultante; escolhe 1 de 5 estratégias de regulação; mexe em 1 régua de "escopo"; memoriza 8 palavras e reconhece; responde 2 dilemas; escolhe a leitura de 4 situações ambíguas. | Avaliação: uma função de regras (se relevância baixa, indiferença; se ruim e atribuído a outro, raiva; etc.). Regulação: tabela (cada estratégia tem um número fixo de "afeto negativo"). Escopo: a régua só muda a opacidade dos quadrados. Memória: conta acertos de 4 emocionais e 4 neutras (quase sempre teto). Viés: conta leituras de ameaça em 4 itens. |
| **Cognição social** | Escolhe cenário e modo e clica em Tentar; faz a tarefa de seguir o olhar (sem número fixo de tentativas); avança a história de Sally e Anne e responde; liga e desliga 3 botões de empatia. | Seguir o olhar: tempo médio com olhar válido e inválido (dados do estudante, sem bloco balanceado). O resto é tabela: a animação do tronco, o quadro de dimensões e o texto das empatias são fixos por combinação de botões. |
| **Evolução** | Responde 5 perguntas de múltipla escolha; arrasta uma régua por 5 hominídeos. | Conta acertos. A régua mostra volume craniano e um texto por espécie (tabela). |
| **Desenvolvimento** | Arrasta uma régua por 5 fases da vida; arrasta uma régua de idade sobre duas curvas. | Interpola duas curvas ilustrativas para a idade escolhida e classifica cada uma em alta, média ou mais baixa. As curvas são desenhadas pelo autor, sem base numérica de estudo. |

**Leitura do diagnóstico.** Nos módulos antigos, a maior parte do que parece simulação é tabela de consulta com aparência de modelo. O risco didático é o estudante atribuir à ciência um número que foi escolhido para a tela (por exemplo, "suprimir deixa 70% de afeto negativo"). Onde for tabela, convém mostrar como tabela, ou trocar por algo que o estudante mede.

---

## 3. Ciclo didático: o que cada módulo cobre

Como li cada etapa:

- **Prever:** o estudante registra uma previsão antes de ver o resultado.
- **Assistir:** vê o fenômeno acontecer em uma demonstração conduzida, antes de mexer.
- **Testar:** mexe em algo ou faz a tarefa, e o resultado depende do que ele fez.
- **Explicar:** formula a explicação com as próprias palavras antes de receber a do material.
- **Desafio:** tem uma meta a atingir (fazer o efeito sumir, inverter, chegar a um valor).
- **Transferência:** aplica a ideia a um caso novo, diferente do experimento.

| Módulo | Prever | Assistir | Testar | Explicar | Desafio | Transferência |
|---|---|---|---|---|---|---|
| Sensação e percepção | sim | parcial (demonstrações) | sim | **não** (explicação pronta) | **não** | parcial (6 questões de aplicação) |
| Atenção | sim | **não** | sim | **não** | **não** | parcial (6 questões de aplicação) |
| Memória | sim | parcial (simulador) | sim | **não** | **não** | parcial (5 questões de aplicação) |
| Linguagem | **não** | sim | parcial (monta a frase) | **não** | **não** | **não** |
| Pensamento | **não** (só nos vieses, sem registro) | **não** | sim (rotação, tipicidade) | **não** | **não** | **não** |
| Emoção | **não** | parcial | parcial (réguas com regra fixa) | **não** | **não** | **não** |
| Cognição social | **não** | sim (Sally e Anne) | parcial (seguir o olhar) | **não** | **não** | **não** |
| Evolução | **não** | **não** | parcial (quiz) | **não** | **não** | **não** |
| Desenvolvimento | **não** | sim | **não** | **não** | **não** | **não** |

Três observações:

1. **Explicar e desafio não existem em lugar nenhum.** O bloco "O que isso mostra" entrega a explicação logo depois do resultado. É a diferença mais clara em relação à referência, em que o estudante é levado a observar e concluir.
2. **Assistir é fraco nos módulos novos por escolha de desenho:** fui direto ao experimento. Uma demonstração curta antes (por exemplo, duas telas de busca comentadas) ajudaria quem nunca fez tarefa de tempo de resposta.
3. **Transferência hoje vive só nas questões de múltipla escolha.** Falta um caso aberto, para levar à aula.

---

## 4. Simulação: há uma única função de estado?

O critério: os parâmetros que o estudante altera formam um estado; **uma função** recebe esse estado e devolve tudo o que a tela mostra (desenho e números). Se o desenho e o número são calculados em lugares diferentes, podem divergir.

| Onde | Situação | Problema |
|---|---|---|
| Sensação, transdução | Parcial. `desenhar()` lê as réguas e calcula a onda e a taxa de disparos; `leituras()` lê as mesmas réguas e escreve os rótulos. | Duas funções derivam do mesmo estado. A taxa de disparos (2 a 40 por segundo) existe só no desenho; a tela não mostra o número. |
| Sensação, ilusões | Sim. O valor da régua desenha a figura e é o que entra na média. | Nenhum. |
| Sensação, Umwelt | Não se aplica: tabela de filtros por animal. | Não há parâmetro contínuo. |
| Atenção, busca e Stroop | Sim. A lista de tentativas é o estado; `PB.rt.resumo` devolve as médias que alimentam colunas, gráfico e folha de resultados. | O estudante não altera parâmetros (número de itens, tipo de distrator). É experimento, e não simulação. |
| Memória, modelo modal | Não. O estado está espalhado entre a lista de itens, as réguas e contadores atualizados à mão a cada evento. | Contadores e desenho são atualizados em pontos diferentes do código. |
| Emoção, avaliação | Sim, e é o melhor exemplo da casa: `pick()` recebe os 5 parâmetros e devolve nome, cor e justificativa. | A função é uma árvore de regras com limiares arbitrários (45, 55, 40). O estudante não vê as regras. |
| Emoção, regulação e escopo | Não: tabela e efeito visual. | O número mostrado não vem de modelo. |
| Desenvolvimento, curvas | Sim: `interp()` alimenta o ponto no gráfico e o texto. | As curvas são ilustrativas. |
| Linguagem, Cognição social, Evolução | Não há simulação: tabelas. | Ver seção 2.2. |

**Proposta.** Um utilitário pequeno em `comum.js`, `PB.sim`, que formaliza o padrão que já funciona em `pick()`:

```
PB.sim({
  estado: { intensidade: 50, frequencia: 40 },   // o que o estudante altera
  derivar: e => ({ taxa: 2 + e.intensidade * 0.38, cor: ... }),  // função pura: única fonte de valores
  desenhar: (e, d, dt) => { ... },               // lê só "d" (o derivado)
  mostrar: { taxa: '#tr-taxa' }                  // os mesmos valores, em texto, na página
})
```

Com isso, o número que aparece escrito é obrigatoriamente o mesmo que move o desenho, a função `derivar` pode ser testada em `teste.html`, e o desafio (seção 6) tem contra o que conferir a meta. Onde o modelo for regra do autor, a tela continua avisando "ilustração".

---

## 5. 3D: onde ajuda e onde 2D basta

Critério: 3D ajuda quando **a propriedade a entender é espacial** (forma, profundidade, ponto de vista, localização) e o estudante ganha ao mudar o ponto de vista. Em estímulo de experimento, 3D atrapalha: acrescenta variação de luz e perspectiva que o experimento precisa controlar.

### 5.1 Onde o 3D ajuda

| Módulo | Conteúdo | Por que 3D | Geometria procedural (primitivas do Three.js) |
|---|---|---|---|
| Sensação e percepção | **Constância de forma** (a porta que abre) | A aula pede exatamente isto: girar a porta e comparar a forma projetada com a forma percebida. Em 2D não há como girar. | Porta: `BoxGeometry` fina, girando em um eixo; moldura: três `BoxGeometry`. Ao lado, em 2D, o contorno projetado (os quatro cantos passados pela câmera) desenhado como trapézio, com a razão entre os lados em número. |
| Sensação e percepção | **Pistas de profundidade** | O estudante move a câmera e vê cada pista aparecer e sumir: paralelas convergem, textura afina, um objeto oclui outro. Com duas câmeras lado a lado, vê a disparidade binocular. | Chão: `PlaneGeometry` com textura quadriculada gerada em `CanvasTexture`; trilhos: dois `BoxGeometry` longos; objetos iguais em distâncias diferentes: `CylinderGeometry`; névoa: `Fog` (perspectiva aérea). |
| Sensação e percepção | **Constância de tamanho e Ponzo em cena** | Mostra que a ilusão de Ponzo é a constância de tamanho aplicada a um desenho plano: duas barras iguais na imagem correspondem a tamanhos diferentes na cena. | Mesma cena dos trilhos, com duas `BoxGeometry` e uma régua que mede tamanho na cena e tamanho na imagem. |
| Pensamento | **Rotação mental com sólidos** | O experimento original de Shepard e Metzler usa figuras de cubos em 3D. Hoje a tarefa usa a letra R girada no plano, que é outra versão. | Cada figura: 10 `BoxGeometry` unidos em quatro braços em ângulo reto, gerados por uma lista de coordenadas; o par é a mesma figura girada ou a sua imagem espelhada. Imagem estática por tentativa (sem animação), para não contaminar o tempo de resposta. |
| Sensação, Linguagem, Emoção, Cognição social | **Onde ficam as estruturas no encéfalo** (vias ventral e dorsal; Broca e Wernicke; amígdala e pré-frontal) | Localização é espacial, e o estudante confunde lado, lobo e profundidade em figura plana. | Encéfalo esquemático: hemisférios como `SphereGeometry` deformada por escala, cerebelo e tronco como esferas e cilindro menores; regiões como manchas (`SphereGeometry` pequena, cor emissiva) e vias como `TubeGeometry` sobre uma curva. É um esquema, e a tela deve dizer isso. Um componente único, reutilizado nos quatro módulos. |
| Evolução | **Volume craniano na linhagem** | Volume é grandeza de três dimensões; a barra horizontal de hoje representa 450 e 1.400 cm³ como comprimentos, o que distorce a comparação. | Uma `SphereGeometry` por espécie, com raio calculado a partir do volume (raio proporcional à raiz cúbica), lado a lado. Dispensa modelo de crânio. |

### 5.2 Onde 2D basta (e 3D atrapalharia)

| Conteúdo | Motivo |
|---|---|
| Busca visual, Stroop, cegueira à mudança, seguir o olhar | Estímulo plano e controlado; qualquer perspectiva ou sombra vira variável estranha no tempo de resposta. |
| Müller-Lyer, Ebbinghaus, Kanizsa, Hermann, THE CAT, Gestalt | São figuras planas por definição. O efeito depende do desenho exato. |
| Listas de palavras, amplitude de dígitos, blocos de letras | Conteúdo verbal. |
| Classificações e questões | Texto. |
| Detecção de sinais, modelos de gargalo, processos controlados e automáticos | Relações lógicas; um diagrama 2D mostra melhor. |
| Avaliação e regulação da emoção, metáforas, esteira da linguagem | Não há objeto espacial. |
| Sally e Anne | A cena 2D já mostra o que importa (quem viu o quê). |
| Curvas de inteligência fluida e cristalizada | Gráfico de duas linhas. |
| Transdução (onda e disparos) | Sinal ao longo do tempo: 2D é a representação padrão. Um olho ou uma cóclea em 3D seria anatomia, que a aula não cobra. |
| Modelo modal da memória | Diagrama de caixas. |

### 5.3 Como o Three.js entra sem quebrar as regras do projeto

- **Sem build e sem backend:** o Three.js é carregado como módulo ES, por `<script type="module">` com `import`. Proponho guardar uma cópia fixa do arquivo na pasta (`vendor/three.module.min.js`, algumas centenas de KB), em vez de depender de CDN: funciona na rede da universidade e não muda sem aviso. Conferir o tamanho exato e a licença (MIT) na hora de baixar.
- **Carregamento sob demanda:** o módulo só é importado quando o estudante abre a seção com 3D (`import()` dinâmico). As páginas continuam leves para quem não abre.
- **Texto fora do canvas:** enunciado, rótulos, valores e explicação ficam em HTML. O canvas é uma figura com `role="img"` e descrição.
- **Um utilitário comum,** `PB.tres(el, montar)`: cria cena, câmera e renderizador; liga a animação ao `PB.anim` (que já pausa com a aba oculta); limita `devicePixelRatio` a 2; trata `resize`; e cai no fallback se não houver WebGL.
- **Modelos externos (Meshy, GLB) ficam para depois,** e só se um esquema procedural se mostrar insuficiente em sala.

---

## 6. Robustez

| Item | Situação hoje | O que fazer |
|---|---|---|
| **Pausa com aba oculta** | Sensação: sim (`PB.anim`). Memória: o simulador confere a visibilidade a cada 1,5 s. Atenção: não há animação contínua; os experimentos param ao trocar de aba **interna**, mas não ao ocultar a aba do navegador (o relógio continua, e a tentativa em curso sai com tempo inflado, que em geral cai na exclusão de extremos). Módulos antigos: Pensamento e Cognição social pausam ao trocar de aba interna; os demais não têm o que pausar. | Nos experimentos com tempo de resposta, cancelar a tentativa em curso em `visibilitychange` e reapresentar ao voltar. É uma mudança só, em `PB.rt.medir`. |
| **Movimento reduzido** | `estilos.css` tem regra geral para `prefers-reduced-motion`, que zera animações e transições de CSS; `PB.anim` desenha um quadro só. Fora disso: as ondas do morcego no Umwelt são animação SVG (não é CSS) e não param; a cegueira à mudança pisca por natureza (tem aviso e só começa por clique). | Parar as animações SVG quando o modo estiver ativo. Na cegueira à mudança, manter o aviso e acrescentar a frase "esta atividade depende de imagens que piscam". No 3D: sem rotação automática; o estudante gira por régua ou botões. |
| **Fallback sem WebGL** | Não se aplica hoje (nenhuma página usa WebGL). | Para cada cena 3D, um desenho 2D equivalente em SVG, que já serve de descrição acessível, e a mesma régua controlando os dois. Detectar por tentativa de criar o contexto; se falhar, mostrar o SVG e uma linha de aviso. A atividade (previsão, medida, questões) não pode depender do 3D. |
| **Celular** | Layout responsivo e alvos de toque maiores (`pointer: coarse`). Experimentos novos aceitam toque nos botões. Pontos fracos: as ilusões pedem tela larga (a página avisa); a busca visual tem campo de 300 px de altura com 16 letras de 26 px, apertado em tela de 360 px; os módulos antigos têm linhas de botões que quebram mal e alvos em `div` (palavras da memória emocional). | Testar as três tarefas de tempo em um celular real (não fiz). No 3D: girar por arrasto horizontal apenas, para não brigar com a rolagem da página; teto de resolução; nada de tela cheia obrigatória. |
| **Teclado e leitor de tela** | Módulos novos: abas com `role="tab"`, regiões `aria-live`, respostas por tecla. Módulos antigos: abas com `aria-pressed`, nenhuma região `aria-live`, devolutiva só por cor em vários pontos. | Já previsto no `REVISAO.md` (4.4). Entra junto com a migração de cada módulo. |
| **Sem JavaScript ou com erro de script** | A página fica só com os textos de definição. | Aceitável para este projeto. Registrar no `CLAUDE.md`. |

---

## 7. Mudanças propostas, por ganho didático e esforço

Esforço: **P** (até meio dia de trabalho meu, um arquivo), **M** (um a dois dias, mexe em `comum.js` e em páginas), **G** (vários dias, componente novo com fallback e testes). Ganho: avaliação minha, a discutir.

### 7.1 Infraestrutura comum (vem primeiro, porque as outras dependem dela)

| # | Mudança | Ganho | Esforço | Depende de |
|---|---|---|---|---|
| A1 | **Etapa "explicar":** depois do resultado e antes de "O que isso mostra", um campo curto: "Em uma ou duas frases, por que você acha que saiu assim?". A resposta vai para a folha de resultados (o campo `texto` já existe no formato) e só então a explicação do material aparece. Novo `PB.explicar(el, {pergunta})`. | Alto | P | nada |
| A2 | **Etapa "transferência":** ao fim de cada parte, um caso novo e aberto ("Onde isso aparece em...?"), com resposta escrita que vai para a folha, para discutir em sala. Sem correção automática. | Alto | P (código) + redação dos casos | casos escritos a partir de `aulas/` |
| A3 | **`PB.sim`** (seção 4): estado, função pura de derivação, desenho e valores em texto vindos da mesma função. Com teste em `teste.html`. | Médio (é o que torna A4 possível) | M | nada |
| A4 | **Etapa "desafio":** `PB.desafio(el, {meta, conferir})`, que acompanha o estado de uma simulação ou o resultado de um experimento e avisa quando a meta foi atingida. | Alto | M | A3 |
| A5 | **Pausa em `visibilitychange`** nas tarefas de tempo de resposta. | Baixo (qualidade da medida) | P | nada |
| A6 | **`PB.tres`** e a cópia local do Three.js, com fallback em SVG. | Nenhum sozinho; habilita os itens 3D | M | decisão D3 |

### 7.2 Por módulo

Ordenado, dentro de cada módulo, do maior ganho por esforço para o menor.

**Sensação e percepção**

| # | Mudança | Ganho | Esforço |
|---|---|---|---|
| S1 | Explicar (A1) depois das ilusões e das demonstrações; transferência (A2) com o caso do vestido ou do design de interfaces, que estão nos slides. | Alto | P |
| S2 | **Desafio nas ilusões:** "ajuste a figura até a ilusão ficar o mais fraca possível". O estudante mexe no ângulo das pontas (Müller-Lyer), na inclinação dos trilhos (Ponzo) e no tamanho dos círculos vizinhos (Ebbinghaus), e refaz 2 ajustes para medir. Usa o motor de ajuste que já existe. | Alto | M |
| S3 | **Porta em 3D** (constância de forma), com o trapézio projetado ao lado e previsão antes: "com a porta a 60 graus, a borda mais distante terá que fração da altura da mais próxima?". | Alto | G |
| S4 | **Cena de profundidade em 3D**, com câmera móvel; a classificação de pistas passa a ser feita sobre a cena (o estudante liga e desliga cada pista e diz qual sumiu). Inclui Ponzo como constância de tamanho. | Alto | G |
| S5 | Transdução em `PB.sim`: mostrar a taxa de disparos em número, vinda da mesma função que desenha. | Médio | P |
| S6 | Assistir: uma tentativa comentada antes dos 12 ajustes. | Baixo | P |

**Atenção**

| # | Mudança | Ganho | Esforço |
|---|---|---|---|
| T1 | Explicar (A1) depois da busca e do Stroop; transferência (A2) com celular ao dirigir e revista de bagagem, que estão nos slides. | Alto | P |
| T2 | **Desafio na busca:** "monte uma busca do T em que o número de letras quase não pese". O estudante troca os distratores (por exemplo, T entre O) e refaz um bloco curto. Mostra que o que decide é a relação entre alvo e distratores, ponto que a aula levanta com a teoria da semelhança. | Alto | M |
| T3 | **Detecção de sinais como tarefa:** hoje só há classificação. Uma tarefa curta de detectar um sinal fraco, em duas rodadas com instruções diferentes ("não deixe passar nenhum" e "só responda se tiver certeza"), mostrando os quatro resultados do próprio estudante e o critério mudando. É o "detectar é decidir" da aula, vivido. | Alto | M |
| T4 | Assistir: duas telas de busca comentadas antes do treino. | Baixo | P |
| T5 | Stroop com resposta falada: não proponho. Exigiria microfone e reconhecimento de voz. | (fora) | |

**Memória**

| # | Mudança | Ganho | Esforço |
|---|---|---|---|
| M1 | Explicar (A1) depois de cada experimento; transferência (A2) com "como você estudaria para a prova a partir disto", que está nos slides. | Alto | P |
| M2 | **Desafio na posição serial:** refazer a lista com 30 s de contagem antes de recordar e ver a recência sumir (Glanzer e Cunitz, que está na aula). Hoje esse resultado é só contado no texto. | Alto | M |
| M3 | Simulador do modelo modal em `PB.sim`, com contadores derivados do estado. | Médio | M |

**Pensamento** (ainda no formato antigo; conteúdo depende dos slides)

| # | Mudança | Ganho | Esforço |
|---|---|---|---|
| P1 | Migrar para o padrão: previsão, `PB.rt` com treino e teclado, resultado registrado, questões. Na galeria de vieses, **registrar a resposta** e mostrar as duas versões (âncora alta e baixa; ganho e perda), como já apontava o `REVISAO.md`. | Alto | M, depois dos slides |
| P2 | **Rotação mental com sólidos de cubos** (3D procedural), mantendo a letra R como treino. Gráfico de tempo por ângulo com a reta ajustada e a inclinação em ms por grau. | Alto | G |
| P3 | Desafio: "estime quanto tempo você levaria a 120 graus" antes de medir esse ângulo, a partir da própria reta. | Médio | P, depois de P2 |

**Linguagem** (formato antigo)

| # | Mudança | Ganho | Esforço |
|---|---|---|---|
| L1 | Trocar a esteira e a dupla rota (tabelas) por tarefas medidas, se a aula as cobrir: decisão lexical (palavra ou não palavra) com palavras frequentes, raras e pseudopalavras, que dá ao estudante a diferença entre as duas rotas no próprio tempo de resposta. | Alto | M, depois dos slides |
| L2 | Afasia: manter como demonstração, com previsão antes ("o que você espera que mude na fala?") e explicação escrita. Sem linguagem de diagnóstico. | Médio | P |
| L3 | Encéfalo esquemático 3D para Broca e Wernicke (componente comum). | Médio | G (compartilhado com S, E, C) |
| L4 | Metáforas: virar classificação (dada a expressão, qual metáfora?). | Médio | P |

**Emoção** (formato antigo)

| # | Mudança | Ganho | Esforço |
|---|---|---|---|
| E1 | Avaliação: **mostrar as regras** da função e inverter a tarefa em desafio: "chegue a culpa mudando só um parâmetro a partir de raiva". É a simulação mais próxima do padrão da referência, e hoje o estudante só passeia pelas réguas. | Alto | P |
| E2 | Regulação e escopo: tirar os números inventados. Regulação vira classificação (situação, estratégia, momento em que age). | Médio | P |
| E3 | Memória emocional: lista maior e tarefa distratora antes do teste, como já previa o `REVISAO.md`. | Médio | M |
| E4 | Viés de interpretação e CBM: decisão pendente do `REVISAO.md` (2.5). Não mexer antes dela. | (pendente) | |

**Cognição social** (formato antigo)

| # | Mudança | Ganho | Esforço |
|---|---|---|---|
| C1 | Seguir o olhar com bloco balanceado, treino, `PB.rt` e previsão. | Alto | M |
| C2 | Sally e Anne: previsão registrada antes do último passo e explicação escrita ("por que a resposta 'na caixa' está errada?"). | Alto | P |
| C3 | Comparador de intencionalidade e três empatias: são tabelas; viram classificação de situações. | Médio | P |

**Evolução e Desenvolvimento** (temas transversais)

| # | Mudança | Ganho | Esforço |
|---|---|---|---|
| V1 | Evolução: volumes como esferas em 3D (ou, sem 3D, como círculos de área proporcional) e previsão antes ("qual espécie tinha o maior volume?"). | Médio | P em 2D, M em 3D |
| V2 | Desenvolvimento: as curvas são ilustrativas. Ou se trocam por dados de um estudo citável, ou a página passa a dizer com destaque que é um esquema. Previsão antes: "aos 60 anos, qual das duas está mais alta?". | Médio | P |

### 7.3 Ordem sugerida de execução

| Etapa | O que entra | Por quê |
|---|---|---|
| 1 | A1, A2, A5; depois S1, T1, M1 | Fecha "explicar" e "transferência" nos três módulos que já têm conteúdo aprovado. Maior ganho, menor esforço, sem 3D. |
| 2 | A3, A4; depois S2, T2, M2, E1, S5 | Fecha "desafio". A partir daqui, os três módulos refeitos cobrem o ciclo inteiro. |
| 3 | T3, C1, C2, P1 | Mais tarefas medidas onde hoje há tabela. P1 e C1 dependem dos slides de cada módulo. |
| 4 | A6; depois S3 (a porta) como piloto de 3D | Um caso só, o mais alinhado à aula, para testar em sala: carga, celular, fallback. |
| 5 | S4, P2, encéfalo esquemático (L3 e afins), V1 | Só se o piloto da etapa 4 valer a pena em sala. |

---

## 8. Decisões que cabem ao docente

- **D1. O ciclo de seis etapas substitui o paradigma aprovado?** O `REVISAO.md` (2.2) fixou "prever, experimentar com os próprios dados, conferir, revisar". As seis etapas incluem as quatro e acrescentam assistir, explicar e desafio. Proposta: adotar as seis como padrão e atualizar o `CLAUDE.md` na Fase 7.
- **D2. Respostas abertas (explicar e transferência).** Ficam só na folha de resultados do estudante, sem correção automática, para discutir em sala. Isso muda a dinâmica da aula: alguém precisa ler ou comentar. Confirmar se é esse o uso.
- **D3. Three.js entra no projeto?** É a primeira dependência externa. Proposta: sim, como arquivo local, só nos casos da seção 5.1, começando pela porta. A alternativa sem 3D para a porta é um desenho 2D com régua de ângulo, que entrega a maior parte do ganho.
- **D4. Encéfalo esquemático.** Um esquema feito de esferas não é anatomia. Decidir se um esquema assumido serve, ou se vale esperar um modelo anatômico (Meshy, GLB), que o `CLAUDE.md` já previa.
- **D5. Tabelas com aparência de simulação** (regulação da emoção, escopo, esteira da linguagem, comparador de intencionalidade, curvas do desenvolvimento). Proposta: converter em classificação ou marcar como esquema. Decidir caso a caso quando os slides de cada módulo chegarem.
- **D6. Conteúdo.** Continua valendo: nenhuma questão, caso de transferência ou meta de desafio é escrita sem base em `aulas/`. Para Pensamento, Linguagem, Emoção, Cognição social e os dois temas, as mudanças de conteúdo esperam os slides; as de estrutura (A1 a A5) podem ser preparadas antes.

---

## 9. Limites desta revisão

- Da referência, vi por dentro uma demo e uma lição. As demais afirmações vêm das descrições do próprio site.
- Não testei nenhuma página em celular real nem com leitor de tela.
- Os tamanhos de esforço são estimativas minhas, sem medir.
- A avaliação de ganho didático é um julgamento, e não um dado: vale confrontar com o que você observa em sala.
- Os seis módulos antigos foram lidos no código, mas não refeitos; o diagnóstico descreve o que o código faz hoje.
