# REVISAO.md: revisão pedagógica e de código da plataforma "Processos básicos da cognição"

Repositório: `gabrielfortes-xdglab/processos-cognitivos` (commit `21fed01`, branch `main`).
Data da revisão: 14/11/2026.
Para quem é este arquivo: quem for implementar as mudanças no repositório (Claude Code) e o docente (Gabriel), que decide os pontos da seção 2.

Como a revisão foi feita: leitura do texto das nove páginas e do código-fonte (HTML, CSS e JS de cada módulo). Nada foi executado em navegador. Os bugs da seção 4 foram identificados por leitura do código e devem ser reproduzidos antes da correção.

---

## 0. Como usar este arquivo

1. Ler as seções 1 a 3 antes de tocar em qualquer arquivo.
2. Não começar nada da seção 5 (conteúdo por módulo) sem os materiais das aulas na pasta `aulas/` (ver 2.1). As questões e os experimentos novos saem do que é ensinado na disciplina. Sem esse material, parar e pedir.
3. Seguir a ordem de fases da seção 6. A Fase 1 (bugs) não depende de decisão nenhuma e pode começar imediatamente.
4. O padrão novo de módulo (seção 3) é implementado primeiro só em `memoria.html`. Só replicar nos outros depois que o Gabriel aprovar o piloto.
5. Valem as regras do `CLAUDE.md` do repositório: HTML/CSS/JS puro, sem build; um arquivo por módulo; commit e push só quando pedido; explicar cada passo; não usar travessão; PT-BR; verificar por DOM, e não por pixels de canvas.
6. Uma regra do `CLAUDE.md` muda com esta revisão e precisa ser atualizada lá: o paradigma atual é "modelo manipulável, não teste/quiz". A proposta aqui mantém os modelos manipuláveis que funcionam e acrescenta previsão, experimento com dados do estudante e questões de revisão. Ver 2.2.

---

## 1. Diagnóstico

O docente não usou a plataforma em 2026 porque ela não serviu nem para revisar conteúdo nem para explorar o objeto de cada unidade. A leitura do código confirma cinco causas.

**1.1 A conclusão vem pronta.** Os blocos `.why` ("O que isso mostra") são texto fixo no HTML, visíveis desde o carregamento e iguais para qualquer coisa que o estudante faça. Não há pergunta a responder antes da atividade.

**1.2 As respostas do estudante são descartadas.** Em várias atividades o estudante responde, mas o código não usa a resposta:
- `pensamento.html`, galeria de vieses: os botões "mais" e "menos" da ancoragem têm `onclick=()=>{}`; em disponibilidade, representatividade e enquadramento, os dois botões chamam a mesma função `rv()`, que mostra o mesmo texto.
- `memoria.html`, jogo "Estudar para a prova": a estratégia escolhida não muda o procedimento de estudo (só "associar" acrescenta um rótulo). O "veredito" é um texto fixo por estratégia e não tem relação com o desempenho do estudante.
- `cognicao-social.html`, três empatias, e `emocao.html`, avaliação e regulação: a saída é uma tabela de regras escrita pelo autor (`pick()`, `STRATS[].neg`).

**1.3 Dois tipos de atividade com valor diferente.** As atividades em que o estudante é sujeito de um experimento e gera dados (Stroop, amplitude de dígitos, DRM, rotação mental, tipicidade, seguir o olhar, memória emocional) são as que têm potencial. As de réguas com regra fixa (rastreador de atenção, fluxo da memória, avaliação da emoção, esteira da linguagem, intencionalidade) ensinam a regra do simulador.

**1.4 Não há prática de recuperação.** Só "Que tipo de memória é?" (`memoria.html`, M3b) funciona como questão de revisão. Nenhum módulo termina com questões.

**1.5 Não há ligação com a disciplina nem saída.** Nenhum módulo indica objetivos, capítulo de referência ou aula correspondente. Nenhum resultado é guardado: não há `localStorage`, exportação nem impressão. O estudante termina sem nada para levar à aula.

---

## 2. Decisões que cabem ao docente

Registrar a resposta de cada item neste arquivo antes da fase indicada.

**2.1 Materiais das aulas (antes da Fase 3).** Colocar em `aulas/` os slides ou roteiros de cada unidade e a bibliografia usada (os capítulos de Sternberg e de Eysenck e Keane, mais os textos complementares). Indicar aqui a correspondência módulo e aula e o que cada aula cobre que a plataforma não cobre.

**2.2 Paradigma (antes da Fase 2).** Aprovar a mudança de "modelo manipulável, não teste/quiz" para "prever, experimentar com os próprios dados, conferir, revisar". Se não aprovar as questões de revisão, cortar o item 3.2.5 e a Fase 3b.

> **Decisão do docente (14/11/2026):** aprovado, incluindo as questões de revisão.

**2.3 Onde ficam os resultados (antes da Fase 2).** O site é estático e não tem servidor. Opções:
- (a) `localStorage` no navegador do estudante, mais uma página `resultados.html` com botão de imprimir e de copiar. Sem coleta de dados pelo docente. É a recomendada.
- (b) igual a (a), mais um código curto de resultados que o estudante cola em um formulário externo do docente, para agregar a turma.
- (c) nenhuma persistência.
Qualquer opção: não pedir nome, matrícula nem e-mail na plataforma.

> **Decisão do docente (14/11/2026):** opção (a).

**2.4 Simuladores de réguas (antes da Fase 4).** Para cada um, decidir entre manter como ilustração curta, converter em tarefa (ver seção 5) ou remover: rastreador de atenção, fluxo da memória, espaço de trabalho, esteira da linguagem, simulador de afasia, comparador de intencionalidade, avaliação da emoção, regulação, escopo atencional.

**2.5 Afirmações a conferir na literatura (antes da Fase 3).** Quatro trechos fazem afirmações mais fortes do que o revisor conseguiu sustentar sem consulta. O docente decide a redação:
- `emocao.html`, parte 4: "Reconhecer e modificar esses vieses (CBM) ajuda a reduzir sintomas" e "reduzindo o viés e os sintomas". As meta-análises sobre CBM devem ser conferidas antes de manter o texto nessa forma.
- `cognicao-social.html`, linha 169 (ressonância e neurônios-espelho): falta ressalva sobre a controvérsia em humanos.
- `memoria.html`, linha 253: "Sem agrupar, passamos de ~4 com dificuldade". A tarefa é amplitude de dígitos, cuja média clássica fica perto de 7. O limite de cerca de 4 de Cowan se refere a blocos em condições que impedem ensaio e agrupamento. A frase mistura as duas coisas.
- `pensamento.html`, disponibilidade: a comparação entre mortes por vacas e por tubarões está sem fonte.

**2.6 Uso em avaliação.** Se as questões de revisão vão contar nota (o que mudaria os requisitos de registro) ou são só estudo. A recomendação é só estudo.

---

## 3. Estrutura proposta

### 3.1 Arquivos

```
index.html
estilos.css                 (existente; recebe os estilos dos blocos novos)
comum.js                    (novo; ver 3.3)
resultados.html             (novo; folha de resultados do estudante)
<modulo>.html               (9 arquivos existentes)
dados/questoes-<modulo>.js  (novo; um por módulo; só dados)
aulas/                      (materiais do docente; referência de conteúdo)
REVISAO.md
CLAUDE.md                   (atualizar: paradigma, estrutura, padrão de módulo)
```

Continua sem build e sem dependência externa além das fontes. `comum.js` e os arquivos de `dados/` entram por `<script src>` antes do script inline de cada página.

### 3.2 Padrão de cada módulo

Cada página passa a ter, nesta ordem:

1. **Cabeçalho do módulo** (`.modhead`): o que o estudante deve conseguir fazer ao final (2 a 4 objetivos, tirados da aula), capítulo de referência e aula correspondente. Texto fornecido por `aulas/`.
2. **Partes** (as abas `.subnav` atuais), cada uma com: definição curta (`.def`); atividade.
3. **Atividade no formato prever, fazer, conferir:**
   - `.predict`: uma pergunta de previsão com 2 a 4 opções, antes da atividade. A resposta é registrada e não é corrigida nesse momento.
   - a atividade em si, com botão "Começar" explícito (ver bug 4.1.1).
   - resultado do estudante ao lado do resultado esperado da literatura (`.expected`), com a previsão que ele fez.
   - `.why` passa a ficar oculto até a atividade ser concluída. O texto atual pode ser reaproveitado, revisado para comentar o resultado obtido (por exemplo: "seu efeito foi de X ms; o efeito típico é positivo").
4. **Fontes** (`.sources`), como hoje.
5. **Revisão** (`.quiz`), ao final da página: 5 a 8 questões de `dados/questoes-<modulo>.js`, com devolutiva por alternativa. Pelo menos duas questões de aplicação a um caso.
6. **Link para a folha de resultados.**

### 3.3 `comum.js`

Hoje cada página repete o código de abas, as funções `mean`, `shuf`, `g`, o bloco de aliases de variáveis CSS e a navegação. `comum.js` deve expor um objeto único (sugestão: `window.PB`) com:

- `PB.tabs(ids)`: abas, incluindo `role="tablist"`, `aria-selected` e navegação por setas. Substitui o trecho "TABS" de 8 páginas. Deve disparar um evento ao trocar de aba, para pausar atividades.
- `PB.rt`: utilitário de tempo de reação. Inicia o relógio no quadro em que o estímulo é pintado (`requestAnimationFrame` seguido de `performance.now()`), aceita resposta por teclado e por botão, e devolve `{rt, correta}`. Regras fixas: descarta tentativas de treino; exclui RT menor que 200 ms e maior que 3 desvios-padrão acima da média do estudante; exige número mínimo de tentativas válidas por condição antes de mostrar média.
- `PB.stats`: `media`, `mediana`, `dp`, `embaralhar` (Fisher-Yates; o `sort` com `Math.random` usado hoje deve sair).
- `PB.predict(el, {pergunta, opcoes})`: renderiza a previsão e devolve a escolha.
- `PB.quiz(el, questoes)`: renderiza a revisão, com devolutiva e contagem.
- `PB.store`: grava e lê resultados (`localStorage`, com `try/catch` e funcionamento normal se indisponível). Chave por módulo e atividade. Guarda: data, previsão, medidas resumidas, acertos do quiz.
- `PB.anim(loopFn, el)`: laço de animação que pausa com `document.hidden`, quando o elemento sai da tela (`IntersectionObserver`) e quando `prefers-reduced-motion` está ativo.
- `PB.announce(el, texto)`: escreve em região `aria-live="polite"`.

Os aliases de variáveis CSS repetidos no `<style>` de cada página (`--text-accent`, `--surface-1` etc.) vão para `estilos.css`.

### 3.4 Formato de `dados/questoes-<modulo>.js`

```js
window.PB_QUESTOES = window.PB_QUESTOES || {};
window.PB_QUESTOES.memoria = [
  {
    id: "mem-01",
    tipo: "conceito",            // "conceito" | "aplicacao"
    aula: "Memória 1",           // de onde vem o conteúdo
    enunciado: "...",
    opcoes: ["...", "...", "...", "..."],
    correta: 2,
    devolutiva: ["por que a opção 0 está errada", "...", "por que a 2 está certa", "..."]
  }
];
```

Regras: toda questão cita a aula de origem; nenhuma questão sobre conteúdo que não esteja em `aulas/`; devolutiva para cada alternativa; sem "todas as anteriores".

### 3.5 `resultados.html`

Lê `PB.store` e mostra, por módulo: previsões feitas, medidas de cada experimento ao lado do valor esperado, acertos da revisão. Botões: imprimir (CSS de impressão com fundo claro) e copiar como texto. Botão de apagar dados. Aviso de que os dados ficam só no navegador do estudante.

---

## 4. Revisão de código

Resposta curta: precisa de revisão. Há bugs que invalidam medidas, e eles devem ser corrigidos antes de qualquer mudança pedagógica, porque o padrão novo (mostrar os dados do estudante) depende dessas medidas.

### 4.1 Bugs (Fase 1)

**4.1.1 O relógio da primeira tentativa começa no carregamento da página.** Três tarefas de tempo de reação chamam a primeira tentativa no fim do script, sem botão de início:
- `pensamento.html` linha 165: `draw(); next();` (rotação mental)
- `pensamento.html` linha 185: `... show();` (tipicidade, em aba oculta)
- `cognicao-social.html` linha 238: `draw(); next();` (seguir o olhar, em aba oculta)

O RT da primeira tentativa inclui o tempo de leitura das instruções ou o tempo até o estudante abrir a aba. Na tipicidade há 4 itens por condição, então uma tentativa de vários segundos domina a média. Correção: botão "Começar", relógio só após o clique, e pausa ao trocar de aba.

**4.1.2 Segundo `setInterval` no jogo de memória.** `memoria.html` linhas 258 a 266: os botões de estratégia continuam ativos durante o estudo. Um segundo clique chama `study()` de novo e cria outro intervalo sem limpar o primeiro. O primeiro dispara `test()`, e o segundo dispara `test()` outra vez no meio da prova, sorteando outra lista. Correção: guardar o identificador do intervalo, limpar ao reiniciar, desabilitar os botões durante estudo e prova.

**4.1.3 A isca do DRM aparece na tela durante o estudo.** `memoria.html` linha 265 mostra `Estude (tema: <tema>)`. Em duas das três listas o tema é igual à isca (`tema:'frio', isca:'frio'`; `tema:'doce', isca:'doce'`). O estudante vê a palavra e depois ela é contada como falsa memória. Na terceira lista (`sono` e `dormir`) o tema exibido já sugere a isca. Correção: não mostrar o tema.

**4.1.4 O efeito Stroop negativo é escondido.** `atencao.html` linha 309: `eff=Math.max(0,mi-mc)`. Se o estudante for mais rápido nas incongruentes, a tela mostra "+0 ms". Mostrar o valor real.

**4.1.5 Médias com zero tentativas válidas aparecem como "0 ms".** Funções `mean` em `atencao.html`, `pensamento.html` e `cognicao-social.html` devolvem 0 para lista vazia, e esse 0 é exibido como tempo. Mostrar "sem dados suficientes".

**4.1.6 Rotação mental desbalanceada.** `pensamento.html` linha 148: o ângulo é sorteado entre 8 valores e depois reduzido a 5 magnitudes com `Math.min(a,360-a)`. As magnitudes 45, 90 e 135 saem com o dobro da frequência de 0 e 180. O sorteio é independente a cada tentativa, sem bloco balanceado, e não há número definido de tentativas. Correção: bloco balanceado (por exemplo, 5 magnitudes × normal e espelhada × 3 repetições), ordem embaralhada, fim definido.

**4.1.7 Travessões no texto visível.** O `CLAUDE.md` proíbe, e há ocorrências: `sensacao-percepcao.html` (15), `linguagem.html` (7), `cognicao-social.html` (2), `memoria.html` (2), `emocao.html` (1), `pensamento.html` (1). Inclui texto gerado por JS (por exemplo `cognicao-social.html` linha 268 e as legendas de `sensacao-percepcao.html` linha 281 em diante).

### 4.2 Validade das medidas (Fase 2, junto com `PB.rt`)

- **Resposta só por clique.** Em Stroop, rotação, tipicidade e olhar, o RT inclui o deslocamento do mouse até o botão, e no Stroop os quatro botões ficam a distâncias diferentes. Acrescentar resposta por teclado (teclas fixas, indicadas na tela) e manter os botões para toque.
- **Poucas tentativas.** Stroop: 6 congruentes e 6 incongruentes (`atencao.html` linha 297). Tipicidade: 4 típicas e 4 atípicas. Mínimos sugeridos: Stroop 20 por condição mais 4 de treino; tipicidade 10 por condição; olhar 20 por condição.
- **Sem treino e sem exclusão de valores extremos.** Ver regras de `PB.rt` em 3.3.
- **Tipicidade sem controle de itens.** `galinha` está como atípica, mas é palavra muito frequente; os itens não estão pareados por extensão nem familiaridade. Rever a lista com uma norma de tipicidade em português, se houver, ou declarar a limitação na tela.
- **Amplitude de dígitos.** `memoria.html`, M2b: os dígitos aparecem todos de uma vez, por `max(1400, len*650)` ms. O procedimento padrão é um dígito por vez, cerca de um por segundo. Erro volta para 3, sem segunda tentativa no mesmo tamanho. Ajustar para apresentação sequencial e duas tentativas por tamanho.
- **Ancoragem e enquadramento.** A condição é sorteada por estudante (`R()<0.5`), então um estudante vê só uma versão e não há efeito para observar individualmente. Opções: tratar como demonstração de turma (cada estudante registra condição e resposta, e o docente compara em sala) ou mostrar ao estudante o resultado típico de cada condição depois da resposta. Em qualquer caso, registrar a resposta.
- **Memória emocional.** `emocao.html`, M3b: 4 palavras por condição, reconhecimento imediato após 6 s. Com tão poucos itens, o resultado é quase sempre teto. Aumentar a lista e inserir tarefa distratora curta antes do teste.

### 4.3 Desempenho

- `atencao.html` linhas 228 a 278: o laço `requestAnimationFrame` roda sem parar desde o carregamento, mesmo com o estudante em outra parte da página. A cada quadro escreve estilo em 15 elementos, incluindo `filter: grayscale()` em 14, e atualiza 7 textos. Usar `PB.anim`, escrever rótulos só quando o valor muda e trocar `filter` por opacidade ou cor.
- `sensacao-percepcao.html` linhas 239 a 241: a cada quadro o código redefine `canvas.width` e `canvas.height` (o que realoca o buffer) e chama `getComputedStyle`. Redimensionar só em `resize` (com `devicePixelRatio`) e ler a cor uma vez.
- `memoria.html`, M1: `setInterval` de 1500 ms sem fim. Pausar com a aba oculta.
- Nenhuma página respeita `prefers-reduced-motion`.

### 4.4 Acessibilidade

- Elementos clicáveis que são `div` sem foco nem teclado: células da cegueira à mudança (`atencao.html` linha 328), palavras da prova do DRM (`memoria.html`), palavras da memória emocional (`emocao.html`). Trocar por `button` ou acrescentar `tabindex`, `role` e teclado.
- Não há nenhuma região `aria-live`. Resultados, devolutivas e contagens mudam sem aviso a leitor de tela.
- Os dois `canvas` de `sensacao-percepcao.html` não têm texto alternativo.
- Abas usam `aria-pressed` em botões; o padrão correto é `role="tab"` com `aria-selected` (resolver em `PB.tabs`).
- Devolutiva só por cor (verde e vermelho) em várias atividades. Acrescentar texto ou ícone.
- Stroop depende de distinguir vermelho e verde. Avisar na instrução e oferecer paleta alternativa.
- Conferir contraste de `--ink-dim` (`#83948f`) sobre `--bg` em textos pequenos (`.dim`, `.sources`).

### 4.5 Manutenção

- Um `<script>` inline por página, de 44 a 174 linhas, com linhas muito longas (várias instruções por linha). Ao tocar em uma função, reformatar a função.
- 394 atributos `style="..."` inline nas páginas, além de `style.cssText` em JS. Mover para classes em `estilos.css` à medida que cada módulo for refeito. Não fazer uma passada só para isso.
- HTML montado por concatenação e `innerHTML` (84 ocorrências). Hoje todo o conteúdo é constante do próprio arquivo, então não há risco de injeção. Com `PB.store`, qualquer valor lido do `localStorage` deve entrar por `textContent`.
- Navegação (`.pipeline`) copiada em 10 arquivos. Pode ficar como está (site pequeno e estático) ou ser gerada por `comum.js`. Baixa prioridade.
- Não há nenhum teste. Sugestão mínima: um arquivo `teste.html` que carrega `comum.js` e verifica `PB.stats` e as regras de exclusão de `PB.rt` com dados fixos.
- Histórico com um único commit. A partir daqui, um commit por item desta revisão, com o número do item na mensagem.

---

## 5. Mudanças por módulo

Para cada módulo: onde mexer, o que fazer, e quando considerar pronto. Tudo que diz "conforme `aulas/`" depende de 2.1.

### 5.1 `memoria.html` (piloto)

| Onde | Mudança |
|---|---|
| topo da página | Acrescentar `.modhead` (3.2.1). |
| `#m1`, "Empurre a informação pelo sistema" | Decisão 2.4. Se mantiver: previsão antes ("com atenção baixa e ensaio alto, onde a maior parte se perde?"), e `.why` só depois de N estímulos. |
| `#m2`, "Vagas limitadas e competição" | Decisão 2.4. É a atividade mais fraca do módulo (cliques que enchem uma lista). Candidata a remoção. |
| `#m2`, "Amplitude da memória de trabalho" | Corrigir procedimento (4.2). Previsão: "quantos dígitos você acha que consegue?". Ao final: amplitude do estudante, com e sem agrupamento, ao lado do valor típico. Corrigir a frase da linha 253 (2.5). |
| `#m3`, "Estudar para a prova" | Corrigir bugs 4.1.2 e 4.1.3. Separar em duas atividades: (a) DRM propriamente dito, com lista maior, sem tema visível, e resultado "você reconheceu a isca? Em estudos clássicos, a isca é reconhecida com frequência próxima à das palavras estudadas"; (b) estratégias de estudo como questão de revisão, e não como jogo, já que o jogo não mede o efeito da estratégia. |
| `#m3`, novo | Curva de posição serial: lista de 15 palavras, recordação livre por digitação ou marcação, gráfico de acerto por posição. |
| `#m3`, "Que tipo de memória é?" | Manter. Migrar para `PB.quiz`. |
| fim da página | `.quiz` com questões de `dados/questoes-memoria.js`. |

Pronto quando: nenhum resultado aparece antes de o estudante fazer a atividade; cada experimento mostra dado próprio ao lado do esperado; a folha de resultados lista o que foi feito; bugs 4.1.2 e 4.1.3 não se reproduzem; a página é utilizável só com teclado.

### 5.2 `atencao.html`

| Onde | Mudança |
|---|---|
| "Componentes neurocognitivos" (linha 42) | A tabela de substratos e neurotransmissores não tem atividade. Manter só se a aula cobra; nesse caso, virar questão de revisão. |
| "Experimente" (linha 75), rastreador | Decisão 2.4. Mistura cinco construtos em um laço com regra do autor. Se mantiver, reduzir a duas réguas (distração e controle inibitório) e corrigir desempenho (4.3). |
| Teste de Stroop (linha 131) | Aplicar 4.1.4, 4.1.5 e 4.2. Previsão antes. Resultado: média por condição, efeito com sinal, taxa de erro por condição. |
| novo | Tarefa de pistas de Posner (pista válida, inválida e neutra) para orientação. Substitui a tentativa de representar "orientação" no rastreador. |
| novo | Busca visual: alvo por traço e por conjunção, com 4, 8 e 16 itens; gráfico de RT por número de itens. |
| Cegueira à mudança (linha 142) | Manter. Registrar número de ciclos com e sem piscada e mostrar os dois. Células viram `button`. Manter o aviso de fotossensibilidade. |
| painel "Teste sua atenção" | Os testes estão escondidos atrás de um botão. Passam a ser o conteúdo principal, em abas, como nos outros módulos. |

### 5.3 `sensacao-percepcao.html`

| Onde | Mudança |
|---|---|
| `#m1`, transdução | Manter como ilustração. Corrigir desempenho (4.3) e texto alternativo dos canvas. Previsão simples antes da régua de intensidade. |
| `#m2`, Umwelt | Manter, mais curto. Trocar a fonte "Wikipedia (dog olfaction)" (linhas 188 e 281) por fonte primária ou de revisão. |
| novo, parte de psicofísica | Limiar diferencial: comparar dois estímulos (comprimento de linha ou brilho) em vários níveis de base, estimar a fração de Weber do estudante. |
| novo, parte de percepção | Hoje o módulo não tem percepção além do Umwelt. Acrescentar, conforme `aulas/`: ilusão com ajuste mensurável (Müller-Lyer: o estudante ajusta uma linha até parecer igual, e o erro é registrado); figuras ambíguas e efeito de contexto (processamento descendente); princípios de organização (Gestalt) como classificação de exemplos. |
| travessões | 15 ocorrências (4.1.7). |

### 5.4 `linguagem.html`

| Onde | Mudança |
|---|---|
| `#m1`, esteira | Decisão 2.4. Se mantiver: inverter a tarefa. Mostrar uma produção com falha e pedir que o estudante indique o nível afetado. |
| `#m1`, duas rotas | Virar experimento: nomear ou decidir sobre palavras regulares, irregulares e pseudopalavras, com RT por tipo. |
| `#m2`, afasias | Decisão 2.4. Manter a ressalva já existente. Inverter: dado um trecho de fala, o estudante classifica o perfil e justifica por fluência, gramática e compreensão. |
| `#m3`, atlas de metáforas | Hoje é leitura. O estudante recebe expressões embaralhadas e atribui cada uma à metáfora conceitual. |
| novo | Decisão lexical com priming semântico (pares relacionados e não relacionados). |
| novo | Frases de labirinto (garden path), com leitura palavra a palavra e tempo por palavra. |

### 5.5 `pensamento.html`

| Onde | Mudança |
|---|---|
| `#m1`, rotação mental | Aplicar 4.1.1, 4.1.6 e 4.2. Resultado: gráfico de RT por ângulo e a inclinação estimada (ms por grau). |
| `#m2`, tipicidade | Aplicar 4.1.1 e 4.2. Rever itens. |
| `#m3`, galeria de vieses | Registrar todas as respostas (1.2). Ancoragem: usar a estimativa digitada e mostrar a distância até a âncora vista. Enquadramento e ancoragem: ver 4.2. Acrescentar fonte para disponibilidade (2.5). |
| novo | Tarefa de seleção de Wason: versão abstrata e versão com regra social, uma após a outra, com comparação de acerto. |
| novo | Um problema de insight com registro de tempo e de resolução. |
| ligação com aula | Conferir com a aula de julgamento e decisão em `aulas/` quais vieses e exemplos são usados em sala, e alinhar. |

### 5.6 `emocao.html`

| Onde | Mudança |
|---|---|
| `#m1`, avaliação | Decisão 2.4. Inverter: vinheta curta, e o estudante marca o padrão de avaliação (responsável, controle, certeza) e a emoção esperada. A função `pick()` vira o gabarito. |
| `#m2`, regulação | Inverter: situação e resposta de uma pessoa, e o estudante identifica a estratégia e o ponto da linha do tempo. Os valores `neg` de `STRATS` são números do autor sem fonte; remover a barra ou indicar fonte. |
| `#m3`, escopo | Decisão 2.4. Régua que apaga quadrados; candidata a remoção. |
| `#m3`, memória emocional | Aplicar 4.2. |
| `#m3`, dilema moral | Manter. Registrar as duas respostas e mostrar o padrão típico. |
| `#m4`, viés de interpretação | Redação de 2.5. A devolutiva "Quanto mais leituras de ameaça, mais forte o viés" não deve soar como avaliação do estudante: quatro itens não medem viés. Acrescentar aviso de que é demonstração do paradigma. O "modo treino (CBM)" deve dizer que mostra como é o procedimento, sem prometer efeito. |

### 5.7 `cognicao-social.html`

| Onde | Mudança |
|---|---|
| `#m1`, intencionalidade | Decisão 2.4. Hoje é clicar e ver. Alternativa: descrições de comportamentos (de crianças e de primatas, tiradas dos estudos citados) para classificar em individual ou compartilhada. |
| `#m2`, seguir o olhar | Aplicar 4.1.1 e 4.2. Previsão antes. |
| `#m2`, Sally-Anne | É trivial para adultos. Manter como apresentação do paradigma e acrescentar tarefa de adulto: falsa crença de segunda ordem ou tarefa do diretor. |
| `#m3`, ressonância | Ressalva de 2.5. |
| `#m3`, três empatias | Substituir as chaves liga e desliga por casos curtos para classificar. |
| ligação com aula | Conferir com `aulas/` a relação com o trabalho em grupo da unidade. |

### 5.8 `evolucao-cognicao.html`

| Onde | Mudança |
|---|---|
| `#m1`, jogo | Cada desafio tem resposta única definida pelo autor. Depois de cada resposta, perguntar: "que evidência distinguiria uma adaptação de um subproduto neste caso?". Entra como questão aberta para levar à aula (campo de texto salvo na folha de resultados). |
| `#m2`, encefalização | Previsão antes ("qual espécie tinha o maior volume?"). |

### 5.9 `desenvolvimento-cognitivo.html`

| Onde | Mudança |
|---|---|
| `#m1`, linha da vida | Previsão por fase (uma afirmação verdadeira ou falsa antes de mostrar o cartão). |
| `#m2`, fluida e cristalizada | Pedir que o estudante marque onde acha que cada curva tem seu pico, antes de mostrar o gráfico. |
| prioridade | A mais baixa. |

### 5.10 `index.html`

- Trocar a frase de abertura para descrever o uso novo (prever, experimentar, conferir, revisar).
- Acrescentar link para `resultados.html` e uma linha por módulo indicando a aula correspondente.
- Acrescentar orientação curta de uso: antes da aula, depois da aula, antes da prova.

---

## 6. Ordem de execução

| Fase | O que | Depende de | Verificação |
|---|---|---|---|
| 1 | Bugs 4.1.1 a 4.1.7 | nada | Reproduzir cada bug antes; conferir por DOM depois. Um commit por bug. |
| 2 | `comum.js`, `resultados.html`, estilos dos blocos novos, `teste.html` | 2.2, 2.3 | `teste.html` passa; nenhuma página existente quebra. |
| 3a | Piloto em `memoria.html` (5.1) | 2.1 (aulas de memória), 2.4, 2.5 | Critério de pronto de 5.1. Parar e pedir aprovação do docente. |
| 3b | Questões de revisão dos demais módulos | 2.1, aprovação de 3a | Toda questão cita aula de origem. |
| 4 | Replicar o padrão: `pensamento`, `atencao`, `cognicao-social`, `emocao`, `linguagem`, `sensacao-percepcao` | aprovação de 3a, 2.4 | Mesmo critério de 5.1, por módulo. |
| 5 | Experimentos novos (Posner, busca visual, Weber, Müller-Lyer, Wason, priming, labirinto, posição serial) | 2.1 | Cada um com bloco balanceado, treino, regras de `PB.rt`. |
| 6 | Temas transversais, `index.html`, acessibilidade restante (4.4), desempenho (4.3) | fases anteriores | Navegação completa só por teclado; `prefers-reduced-motion` respeitado. |
| 7 | Atualizar `CLAUDE.md` | tudo | Paradigma, estrutura e padrão de módulo descritos como ficaram. |

Em 2027 a plataforma será usada em sala com monitores da disciplina. As fases 3b e 5 podem ser divididas com eles: redação de questões, roteiros de atividade por módulo e teste dos experimentos com a turma.

---

## 7. O que não fazer

- Não escrever questões nem textos de conteúdo a partir de conhecimento geral de manual. A referência é `aulas/`.
- Não aplicar o padrão novo nos nove módulos antes da aprovação do piloto.
- Não introduzir framework, empacotador nem dependência de execução.
- Não coletar dado pessoal nem enviar dados a servidor.
- Não apresentar nenhum resultado individual em linguagem de diagnóstico ou de traço ("você tem viés", "sua atenção é baixa").
- Não manter atividade em que a resposta do estudante é ignorada. Ou a resposta é usada, ou o botão sai.
- Não migrar para tema claro (os canvas foram feitos para fundo escuro), exceto no CSS de impressão de `resultados.html`.
- Não reescrever um módulo inteiro em um commit só.
