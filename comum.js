/* comum.js: utilitários compartilhados da plataforma "Processos básicos da cognição".
   Expõe um único objeto global, window.PB. Sem dependências e sem build.
   Carregar com <script src="comum.js"></script> antes do script inline de cada página.
   Ver REVISAO.md, seção 3.3. Os testes ficam em teste.html. */
(function () {
  'use strict';
  var PB = {};

  /* ====================================================================
     PB.modulos: identificador e título de cada módulo (usado na folha de resultados)
     ==================================================================== */
  PB.modulos = [
    { id: 'sensacao-percepcao', titulo: 'Sensação e percepção' },
    { id: 'atencao', titulo: 'Atenção' },
    { id: 'memoria', titulo: 'Memória' },
    { id: 'linguagem', titulo: 'Linguagem' },
    { id: 'pensamento', titulo: 'Pensamento e raciocínio' },
    { id: 'emocao', titulo: 'Emoção' },
    { id: 'cognicao-social', titulo: 'Cognição social' },
    { id: 'evolucao-cognicao', titulo: 'Evolução da cognição' },
    { id: 'desenvolvimento-cognitivo', titulo: 'Desenvolvimento cognitivo' }
  ];

  /* ====================================================================
     PB.stats: estatística descritiva mínima
     Lista vazia devolve null (nunca 0), para a tela mostrar "sem dados suficientes".
     ==================================================================== */
  PB.stats = {
    media: function (a) {
      if (!a || !a.length) return null;
      var s = 0;
      for (var i = 0; i < a.length; i++) s += a[i];
      return s / a.length;
    },
    mediana: function (a) {
      if (!a || !a.length) return null;
      var o = a.slice().sort(function (x, y) { return x - y; });
      var m = Math.floor(o.length / 2);
      return o.length % 2 ? o[m] : (o[m - 1] + o[m]) / 2;
    },
    /* Desvio-padrão amostral (divide por n-1). Precisa de pelo menos 2 valores. */
    dp: function (a) {
      if (!a || a.length < 2) return null;
      var m = PB.stats.media(a), s = 0;
      for (var i = 0; i < a.length; i++) s += (a[i] - m) * (a[i] - m);
      return Math.sqrt(s / (a.length - 1));
    },
    /* Fisher-Yates. Devolve uma cópia; não altera a lista original. */
    embaralhar: function (a) {
      var o = a.slice();
      for (var i = o.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var t = o[i]; o[i] = o[j]; o[j] = t;
      }
      return o;
    }
  };

  /* ====================================================================
     PB.rt: tempo de reação
     Formato de uma tentativa: { rt: ms, correta: bool, cond: 'nome', treino: bool }

     Regras fixas (REVISAO.md 3.3):
       1. tentativas de treino são descartadas;
       2. RT menor que 200 ms é excluído (antecipação);
       3. RT maior que média + 3 desvios-padrão é excluído. A média e o desvio
          são os do próprio estudante, calculados dentro de cada condição, sobre
          os acertos que passaram na regra 2 (uma passada só, sem iterar);
       4. a média de uma condição só é mostrada com um número mínimo de
          tentativas válidas (padrão: 5). Abaixo disso, "suficiente" é false.
     As médias usam só acertos. A taxa de erro usa todas as tentativas que não são treino.
     ==================================================================== */
  PB.rt = {
    RT_MINIMO: 200,
    DP_MAXIMO: 3,
    MIN_VALIDAS: 5,

    /* Função pura: recebe as tentativas e devolve as válidas e as contagens de exclusão. */
    filtrar: function (tentativas) {
      var ex = { treino: 0, erros: 0, rapidas: 0, lentas: 0 };
      var porCond = {}, validas = [];
      tentativas.forEach(function (t) {
        if (t.treino) { ex.treino++; return; }
        if (!t.correta) { ex.erros++; return; }
        if (t.rt < PB.rt.RT_MINIMO) { ex.rapidas++; return; }
        var c = t.cond == null ? '' : String(t.cond);
        (porCond[c] = porCond[c] || []).push(t);
      });
      Object.keys(porCond).forEach(function (c) {
        var rts = porCond[c].map(function (t) { return t.rt; });
        var m = PB.stats.media(rts), d = PB.stats.dp(rts);
        var teto = (d === null || rts.length < 3) ? Infinity : m + PB.rt.DP_MAXIMO * d;
        porCond[c].forEach(function (t) {
          if (t.rt > teto) ex.lentas++; else validas.push(t);
        });
      });
      return { validas: validas, excluidas: ex };
    },

    /* Resumo por condição: { cond: { n, validas, media, mediana, taxaErro, suficiente } }.
       media e mediana ficam null quando não há o mínimo de tentativas válidas. */
    resumo: function (tentativas, opcoes) {
      var min = (opcoes && opcoes.minValidas) || PB.rt.MIN_VALIDAS;
      var f = PB.rt.filtrar(tentativas), r = {};
      tentativas.forEach(function (t) {
        if (t.treino) return;
        var c = t.cond == null ? '' : String(t.cond);
        r[c] = r[c] || { n: 0, erros: 0, rts: [] };
        r[c].n++;
        if (!t.correta) r[c].erros++;
      });
      f.validas.forEach(function (t) {
        r[t.cond == null ? '' : String(t.cond)].rts.push(t.rt);
      });
      Object.keys(r).forEach(function (c) {
        var x = r[c], ok = x.rts.length >= min;
        r[c] = {
          n: x.n,
          validas: x.rts.length,
          media: ok ? PB.stats.media(x.rts) : null,
          mediana: ok ? PB.stats.mediana(x.rts) : null,
          taxaErro: x.n ? x.erros / x.n : null,
          suficiente: ok
        };
      });
      return { condicoes: r, excluidas: f.excluidas };
    },

    /* Texto pronto para a tela: "512 ms" ou "sem dados suficientes". */
    formatar: function (ms) {
      return ms === null || ms === undefined || isNaN(ms) ? 'sem dados suficientes' : Math.round(ms) + ' ms';
    },

    /* Mede uma tentativa.
       opcoes = {
         mostrar: function que pinta o estímulo (obrigatória);
         teclas:  { 'f': valor, 'j': valor }   (opcional; chave = e.key em minúscula);
         botoes:  [ { el: elemento, valor: valor } ]   (opcional; para clique e toque);
         correta: valor esperado, ou função (valor) -> bool  (opcional)
       }
       O relógio começa no quadro em que o estímulo é pintado: mostrar() roda,
       e o tempo zero é lido no requestAnimationFrame seguinte. Respostas antes
       disso são ignoradas.
       Devolve uma Promise que resolve com { rt, resposta, correta }, ou com null
       se a tentativa for cancelada. A Promise tem o método cancelar(). */
    medir: function (opcoes) {
      var t0 = 0, fim, feito = false, limpar = [];
      function encerrar(v) {
        if (feito) return;
        feito = true;
        limpar.forEach(function (f) { f(); });
        fim(v);
      }
      function responder(valor) {
        if (!t0 || feito) return;
        var rt = performance.now() - t0, c = null;
        if (typeof opcoes.correta === 'function') c = !!opcoes.correta(valor);
        else if (opcoes.correta !== undefined) c = valor === opcoes.correta;
        encerrar({ rt: rt, resposta: valor, correta: c });
      }
      var p = new Promise(function (res) { fim = res; });
      p.cancelar = function () { encerrar(null); };

      if (opcoes.teclas) {
        var aoTeclar = function (e) {
          if (e.repeat || e.ctrlKey || e.metaKey || e.altKey) return;
          var alvo = e.target && e.target.tagName;
          if (alvo === 'INPUT' || alvo === 'TEXTAREA' || alvo === 'SELECT') return;
          var k = (e.key || '').toLowerCase();
          if (Object.prototype.hasOwnProperty.call(opcoes.teclas, k)) {
            e.preventDefault();
            responder(opcoes.teclas[k]);
          }
        };
        document.addEventListener('keydown', aoTeclar);
        limpar.push(function () { document.removeEventListener('keydown', aoTeclar); });
      }
      (opcoes.botoes || []).forEach(function (b) {
        var aoClicar = function () { responder(b.valor); };
        b.el.addEventListener('click', aoClicar);
        limpar.push(function () { b.el.removeEventListener('click', aoClicar); });
      });

      opcoes.mostrar();
      var zerar = function () { if (!t0) t0 = performance.now(); };
      requestAnimationFrame(zerar);
      /* Reserva: com a aba em segundo plano o requestAnimationFrame não dispara. */
      var reserva = setTimeout(zerar, 120);
      limpar.push(function () { clearTimeout(reserva); });
      return p;
    }
  };

  /* ====================================================================
     PB.store: resultados do estudante, só no navegador dele (localStorage)
     Nada é enviado a servidor e nenhum dado pessoal é pedido.
     Uma entrada por módulo e atividade. Formato sugerido de "dados":
       {
         rotulo:   'Teste de Stroop',                       (nome para a folha)
         previsao: { pergunta: '...', resposta: '...' },    (opcional)
         medidas:  [ { nome: '...', valor: '...', esperado: '...' } ],  (opcional)
         quiz:     { acertos: 4, total: 6 },                (opcional)
         texto:    'resposta aberta do estudante'           (opcional)
       }
     salvar() acrescenta o campo "data" (ISO). Se o localStorage não estiver
     disponível, tudo funciona em memória até a página ser fechada.
     ATENÇÃO: valor lido daqui entra na página por textContent, nunca por innerHTML.
     ==================================================================== */
  function criarStore(chave) {
    var memoria = {};
    function lerTudo() {
      try {
        var bruto = window.localStorage.getItem(chave);
        var o = bruto ? JSON.parse(bruto) : {};
        return o && typeof o === 'object' ? o : {};
      } catch (e) { return memoria; }
    }
    function gravarTudo(o) {
      memoria = o;
      try { window.localStorage.setItem(chave, JSON.stringify(o)); return true; }
      catch (e) { return false; }
    }
    return {
      chave: chave,
      disponivel: function () {
        try {
          window.localStorage.setItem(chave + ':t', '1');
          window.localStorage.removeItem(chave + ':t');
          return true;
        } catch (e) { return false; }
      },
      /* Mescla "dados" na entrada existente (assim a previsão e as medidas podem ser gravadas em momentos diferentes). */
      salvar: function (modulo, atividade, dados) {
        var o = lerTudo();
        o[modulo] = o[modulo] || {};
        var atual = o[modulo][atividade] || {};
        Object.keys(dados || {}).forEach(function (k) { atual[k] = dados[k]; });
        atual.data = new Date().toISOString();
        o[modulo][atividade] = atual;
        gravarTudo(o);
        return atual;
      },
      ler: function (modulo, atividade) {
        var o = lerTudo();
        if (!o[modulo]) return null;
        return atividade === undefined ? o[modulo] : (o[modulo][atividade] || null);
      },
      tudo: lerTudo,
      apagar: function () {
        memoria = {};
        try { window.localStorage.removeItem(chave); } catch (e) { /* sem armazenamento */ }
      }
    };
  }
  PB.store = criarStore('pb:v1');
  PB._criarStore = criarStore; /* usado só por teste.html */

  /* ====================================================================
     PB.announce: aviso para leitor de tela
     Escreve o texto em uma região aria-live="polite". Sem elemento, usa uma
     região global invisível.
     ==================================================================== */
  var regiaoGlobal = null;
  PB.announce = function (el, texto) {
    if (!el) {
      if (!regiaoGlobal) {
        regiaoGlobal = document.createElement('div');
        regiaoGlobal.className = 'pb-sr';
        document.body.appendChild(regiaoGlobal);
      }
      el = regiaoGlobal;
    }
    if (!el.getAttribute('aria-live')) el.setAttribute('aria-live', 'polite');
    if (!el.getAttribute('role')) el.setAttribute('role', 'status');
    el.textContent = texto;
  };

  /* ====================================================================
     PB.tabs: abas acessíveis sobre a marcação existente
     Espera botões .subnav button[data-tab="idDaSecao"] e uma seção com cada id.
     Aplica role="tablist"/"tab"/"tabpanel", aria-selected, foco itinerante e
     navegação por setas, Home e End. Ao trocar, dispara em document o evento
     "pb:tab" com detail = id da aba aberta (as atividades usam isso para pausar).
     ==================================================================== */
  PB.tabs = function (raiz) {
    var nav = (raiz || document).querySelector('.subnav');
    if (!nav) return null;
    var botoes = Array.prototype.slice.call(nav.querySelectorAll('button[data-tab]'));
    var paineis = botoes.map(function (b) { return document.getElementById(b.dataset.tab); });
    nav.setAttribute('role', 'tablist');
    botoes.forEach(function (b, i) {
      b.setAttribute('role', 'tab');
      b.removeAttribute('aria-pressed');
      if (!b.id) b.id = 'aba-' + b.dataset.tab;
      b.setAttribute('aria-controls', b.dataset.tab);
      if (paineis[i]) {
        paineis[i].setAttribute('role', 'tabpanel');
        paineis[i].setAttribute('aria-labelledby', b.id);
      }
    });
    function abrir(id, focar) {
      botoes.forEach(function (b, i) {
        var ativa = b.dataset.tab === id;
        b.setAttribute('aria-selected', ativa ? 'true' : 'false');
        b.tabIndex = ativa ? 0 : -1;
        if (paineis[i]) paineis[i].classList.toggle('hidden', !ativa);
        if (ativa && focar) b.focus();
      });
      document.dispatchEvent(new CustomEvent('pb:tab', { detail: id }));
    }
    botoes.forEach(function (b, i) {
      b.addEventListener('click', function () { abrir(b.dataset.tab, false); });
      b.addEventListener('keydown', function (e) {
        var alvo = null;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') alvo = (i + 1) % botoes.length;
        else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') alvo = (i - 1 + botoes.length) % botoes.length;
        else if (e.key === 'Home') alvo = 0;
        else if (e.key === 'End') alvo = botoes.length - 1;
        if (alvo === null) return;
        e.preventDefault();
        abrir(botoes[alvo].dataset.tab, true);
      });
    });
    /* Estado inicial: a aba cujo painel está visível (ou a primeira). Não dispara evento. */
    var inicial = 0;
    paineis.forEach(function (p, i) { if (p && !p.classList.contains('hidden') && inicial === 0) inicial = i; });
    botoes.forEach(function (b, i) {
      b.setAttribute('aria-selected', i === inicial ? 'true' : 'false');
      b.tabIndex = i === inicial ? 0 : -1;
    });
    return { abrir: function (id) { abrir(id, false); } };
  };

  /* ====================================================================
     PB.anim: laço de animação que sabe parar
     loopFn(dt, t) recebe o intervalo desde o quadro anterior (s, limitado a 0,05)
     e o tempo total (s). O laço só roda com a aba visível e o elemento na tela.
     Com prefers-reduced-motion ativo, desenha um único quadro e não anima.
     Devolve { parar(), retomar() }.
     ==================================================================== */
  PB.anim = function (loopFn, el) {
    var quadro = 0, ultimo = 0, total = 0, naTela = true, parado = false;
    var reduz = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    function passo(agora) {
      quadro = 0;
      var dt = ultimo ? Math.min(0.05, (agora - ultimo) / 1000) : 0;
      ultimo = agora; total += dt;
      loopFn(dt, total);
      agendar();
    }
    function agendar() {
      if (quadro || parado || reduz || document.hidden || !naTela) return;
      quadro = requestAnimationFrame(passo);
    }
    function suspender() {
      if (quadro) cancelAnimationFrame(quadro);
      quadro = 0; ultimo = 0;
    }
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) suspender(); else agendar();
    });
    if (el && 'IntersectionObserver' in window) {
      new IntersectionObserver(function (itens) {
        naTela = itens[itens.length - 1].isIntersecting;
        if (naTela) agendar(); else suspender();
      }).observe(el);
    }
    if (reduz) loopFn(0, 0); else agendar();
    return {
      parar: function () { parado = true; suspender(); },
      retomar: function () { parado = false; agendar(); },
      reduzido: reduz
    };
  };

  /* ====================================================================
     Auxiliar interno: cria elemento com classe e texto (sempre por textContent)
     ==================================================================== */
  function criar(tag, classe, texto) {
    var e = document.createElement(tag);
    if (classe) e.className = classe;
    if (texto !== undefined && texto !== null) e.textContent = texto;
    return e;
  }

  /* ====================================================================
     PB.predict: pergunta de previsão antes da atividade
     PB.predict(el, { pergunta, opcoes: ['...'], escolhida: indice (opcional) })
     Renderiza a pergunta com 2 a 4 opções. A escolha é registrada e NÃO é
     corrigida nesse momento. Devolve uma Promise que resolve com
     { indice, texto, pergunta } quando o estudante escolhe.
     ==================================================================== */
  PB.predict = function (el, cfg) {
    el.classList.add('predict');
    el.textContent = '';
    el.appendChild(criar('div', 'k', 'Antes de começar: sua previsão'));
    var perg = criar('p', 'pergunta', cfg.pergunta);
    perg.id = 'pb-prev-' + Math.random().toString(36).slice(2, 8);
    el.appendChild(perg);
    var grupo = criar('div', 'opcoes');
    grupo.setAttribute('role', 'group');
    grupo.setAttribute('aria-labelledby', perg.id);
    el.appendChild(grupo);
    var aviso = criar('div', 'registro');
    el.appendChild(aviso);
    var botoes = [];
    return new Promise(function (resolver) {
      function escolher(i, avisar) {
        botoes.forEach(function (b, j) {
          b.disabled = true;
          b.setAttribute('aria-pressed', j === i ? 'true' : 'false');
        });
        var texto = 'Previsão registrada: ' + cfg.opcoes[i] + '. Você confere depois da atividade.';
        if (avisar) PB.announce(aviso, texto); else aviso.textContent = texto;
        resolver({ indice: i, texto: cfg.opcoes[i], pergunta: cfg.pergunta });
      }
      cfg.opcoes.forEach(function (op, i) {
        var b = criar('button', null, op);
        b.type = 'button';
        b.setAttribute('aria-pressed', 'false');
        b.addEventListener('click', function () { escolher(i, true); });
        botoes.push(b);
        grupo.appendChild(b);
      });
      if (typeof cfg.escolhida === 'number' && cfg.opcoes[cfg.escolhida] !== undefined) escolher(cfg.escolhida, false);
    });
  };

  /* ====================================================================
     PB.quiz: questões de revisão com devolutiva por alternativa
     PB.quiz(el, questoes, { modulo: 'memoria', aoTerminar: function })
     Formato das questões: ver REVISAO.md 3.4 (dados/questoes-<modulo>.js).
     A devolutiva aparece em texto ("Correta" ou "Incorreta"), não só em cor.
     Com "modulo" informado, o resultado é gravado em PB.store na atividade "revisao".
     As questões aparecem uma de cada vez: depois da devolutiva surge o botão
     "Próxima"; ao final, um resumo com a opção de rever todas. Para a lista
     inteira de uma vez (comportamento antigo), passar { sequencial: false }.
     ==================================================================== */
  PB.quiz = function (el, questoes, cfg) {
    cfg = cfg || {};
    el.classList.add('quiz');
    el.textContent = '';
    var respostas = {}, acertos = 0, feitas = 0;
    var placar = criar('div', 'placar');
    function atualizarPlacar() {
      var t = 'Respondidas: ' + feitas + ' de ' + questoes.length + '. Acertos: ' + acertos + '.';
      if (feitas) PB.announce(placar, t); else placar.textContent = t;
    }
    var seq = cfg.sequencial !== false && questoes.length > 1;
    var blocos = [], fimEl = null;
    function irPara(n) {
      blocos.forEach(function (b, i) { b.hidden = i !== n; });
      if (blocos[n]) { blocos[n].tabIndex = -1; blocos[n].focus(); }
    }
    questoes.forEach(function (q, n) {
      var bloco = criar('div', 'questao');
      blocos.push(bloco);
      if (seq) { bloco.hidden = n !== 0; bloco.appendChild(criar('div', 'progresso', 'Questão ' + (n + 1) + ' de ' + questoes.length)); }
      var avancar = null;
      if (seq) {
        avancar = criar('button', 'primary', n < questoes.length - 1 ? 'Próxima' : 'Ver resumo');
        avancar.type = 'button'; avancar.hidden = true;
        avancar.addEventListener('click', function () {
          if (n < questoes.length - 1) { irPara(n + 1); return; }
          bloco.hidden = true; fimEl.hidden = false;
          fimEl.querySelector('.texto').textContent = 'Você respondeu às ' + questoes.length + ' questões. Acertos: ' + acertos + '.';
          fimEl.tabIndex = -1; fimEl.focus();
        });
      }
      var enun = criar('p', 'enunciado', (n + 1) + '. ' + q.enunciado);
      enun.id = 'pb-q-' + (q.id || n);
      bloco.appendChild(enun);
      if (q.aula) bloco.appendChild(criar('div', 'origem', 'Conteúdo: ' + q.aula));
      var grupo = criar('div', 'opcoes');
      grupo.setAttribute('role', 'group');
      grupo.setAttribute('aria-labelledby', enun.id);
      var dev = criar('div', 'devolutiva');
      var botoes = q.opcoes.map(function (op, i) {
        var b = criar('button', null, op);
        b.type = 'button';
        b.addEventListener('click', function () {
          var certa = i === q.correta;
          botoes.forEach(function (x, j) {
            x.disabled = true;
            if (j === q.correta) x.classList.add('certa');
            if (j === i && !certa) x.classList.add('errada');
          });
          b.setAttribute('aria-pressed', 'true');
          var texto = (certa ? 'Correta. ' : 'Incorreta. ') + ((q.devolutiva && q.devolutiva[i]) || '');
          if (!certa) texto += ' Resposta correta: ' + q.opcoes[q.correta] + '. ' + ((q.devolutiva && q.devolutiva[q.correta]) || '');
          dev.classList.add(certa ? 'ok' : 'nao');
          PB.announce(dev, texto.trim());
          respostas[q.id || n] = { escolhida: i, correta: certa };
          feitas++; if (certa) acertos++;
          atualizarPlacar();
          if (avancar) avancar.hidden = false;
          if (feitas === questoes.length) {
            var res = { acertos: acertos, total: questoes.length, respostas: respostas };
            if (cfg.modulo) PB.store.salvar(cfg.modulo, 'revisao', { rotulo: 'Questões de revisão', quiz: { acertos: acertos, total: questoes.length } });
            if (cfg.aoTerminar) cfg.aoTerminar(res);
          }
        });
        grupo.appendChild(b);
        return b;
      });
      bloco.appendChild(grupo);
      bloco.appendChild(dev);
      if (avancar) { var nav = criar('div', 'nav'); nav.appendChild(avancar); bloco.appendChild(nav); }
      el.appendChild(bloco);
    });
    if (seq) {
      fimEl = criar('div', 'fim');
      fimEl.hidden = true;
      fimEl.appendChild(criar('p', 'texto', ''));
      var rever = criar('button', null, 'Rever todas as questões');
      rever.type = 'button';
      rever.addEventListener('click', function () {
        blocos.forEach(function (b) { b.hidden = false; var nv = b.querySelector('.nav'); if (nv) nv.hidden = true; });
        fimEl.hidden = true;
      });
      fimEl.appendChild(rever);
      el.appendChild(fimEl);
    }
    el.appendChild(placar);
    atualizarPlacar();
  };

  /* ====================================================================
     PB.explicar: o estudante formula a explicação antes de ler a do material
     PB.explicar(el, { pergunta (opcional), modulo, atividade })
     Mostra um campo de texto curto. Devolve uma Promise que resolve com o texto
     (ou com null, se o estudante preferir ver a explicação sem responder).
     Com "modulo" e "atividade", o texto é gravado em PB.store no campo "explicacao".
     Não há correção: a resposta serve para comparar com a explicação e levar à aula.
     ==================================================================== */
  PB.explicar = function (el, cfg) {
    cfg = cfg || {};
    el.className = 'explicar';
    el.textContent = '';
    el.appendChild(criar('div', 'k', 'Antes da explicação: a sua'));
    var id = 'pb-exp-' + Math.random().toString(36).slice(2, 8);
    var rot = criar('label', 'pergunta', cfg.pergunta || 'Em uma ou duas frases: por que você acha que o resultado saiu assim?');
    rot.htmlFor = id;
    el.appendChild(rot);
    var campo = document.createElement('textarea');
    campo.id = id; campo.rows = 3; campo.maxLength = 600;
    el.appendChild(campo);
    var linha = criar('div', 'acoes-exp');
    var ok = criar('button', 'primary', 'Registrar e ver a explicação'); ok.type = 'button';
    var pular = criar('button', null, 'Ver a explicação sem responder'); pular.type = 'button';
    linha.appendChild(ok); linha.appendChild(pular);
    el.appendChild(linha);
    var aviso = criar('div', 'registro');
    el.appendChild(aviso);
    return new Promise(function (resolver) {
      function fechar(texto) {
        campo.readOnly = true; ok.disabled = true; pular.disabled = true;
        PB.announce(aviso, texto ? 'Registrado na sua folha de resultados. Compare com a explicação abaixo.' : 'Explicação liberada abaixo.');
        resolver(texto);
      }
      ok.addEventListener('click', function () {
        var t = campo.value.trim();
        if (!t) { PB.announce(aviso, 'Escreva ao menos uma frase, ou use o outro botão.'); campo.focus(); return; }
        if (cfg.modulo && cfg.atividade) PB.store.salvar(cfg.modulo, cfg.atividade, { explicacao: t });
        fechar(t);
      });
      pular.addEventListener('click', function () { fechar(null); });
    });
  };

  /* ====================================================================
     PB.caso: caso de transferência, com resposta aberta para levar à aula
     PB.caso(el, { titulo (opcional), pergunta, modulo, chave })
     A resposta é gravada em PB.store como uma atividade própria
     ({ rotulo, pergunta, texto }) e pode ser reescrita. Sem correção automática.
     ==================================================================== */
  PB.caso = function (el, cfg) {
    el.className = 'caso';
    el.textContent = '';
    el.appendChild(criar('div', 'k', 'Para levar à aula'));
    var id = 'pb-caso-' + Math.random().toString(36).slice(2, 8);
    var rot = criar('label', 'pergunta', cfg.pergunta);
    rot.htmlFor = id;
    el.appendChild(rot);
    var campo = document.createElement('textarea');
    campo.id = id; campo.rows = 4; campo.maxLength = 1200;
    var salvo = cfg.modulo && cfg.chave ? PB.store.ler(cfg.modulo, cfg.chave) : null;
    if (salvo && typeof salvo.texto === 'string') campo.value = salvo.texto;
    el.appendChild(campo);
    var ok = criar('button', null, 'Registrar na folha de resultados'); ok.type = 'button';
    el.appendChild(ok);
    var aviso = criar('div', 'registro', salvo && salvo.texto ? 'Você já registrou uma resposta. Pode reescrever e registrar de novo.' : 'Não há resposta única. O que você escrever fica só neste navegador.');
    el.appendChild(aviso);
    ok.addEventListener('click', function () {
      var t = campo.value.trim();
      if (!t) { PB.announce(aviso, 'Escreva a sua resposta antes de registrar.'); campo.focus(); return; }
      if (cfg.modulo && cfg.chave) PB.store.salvar(cfg.modulo, cfg.chave, { rotulo: cfg.titulo || 'Para levar à aula', pergunta: cfg.pergunta, texto: t });
      PB.announce(aviso, 'Registrado. Leve a sua resposta para a discussão em sala.');
      if (cfg.aoRegistrar) cfg.aoRegistrar(t);
    });
  };

  window.PB = PB;
})();
