# Processos básicos da cognição — guia do projeto

Ferramenta web interativa para alunos de 2º período de Psicologia (UFAL) **visualizarem e experimentarem** os processos psicológicos básicos. Serve de apoio à disciplina Processos Psicológicos Básicos (docente: Gabriel Fortes). Autoria: Gabriel Fortes (+ Leonardo Soares e Silva no eixo xdG lab).

## O que é / objetivo
- Não é um cérebro 3D anatômico; o "hub" é a **esteira de processamento da informação**: cada processo é uma página navegável.
- Cada módulo deixa o aluno **manipular os componentes do processo e ver, na hora, o que muda** (paradigma "modelo manipulável", não "teste/quiz").

## Stack e arquitetura
- **HTML/CSS/JS puro, estático, sem build.** 1 página por módulo + `index.html` (home) + `estilos.css` (compartilhado). Hospedagem: GitHub Pages.
- Repo: `gabrielfortes-xdglab/processos-cognitivos`, branch `main` (commit/push só quando pedido).
- Páginas: `sensacao-percepcao`, `atencao`, `memoria`, `linguagem`, `pensamento`, `emocao`, `cognicao-social` (7 processos) + `evolucao-cognicao`, `desenvolvimento-cognitivo` (2 temas transversais).
- **Nunca codar por cima de um módulo pronto**: cada módulo é seu próprio arquivo.

## Padrão de cada módulo
- Fluxo **conceito → experimento**. Abas via `.subnav` quando há partes.
- `.def` = definição; `.why` (“O que isso mostra”) ancora cada atividade; `.how` = instrução curta “como fazer”.
- Sempre **fontes reais citadas** (`.sources`) e **caveats** de simplificação quando couber.
- Cada página linka `estilos.css` e tem um `<style>` inline que **aliasa nomes de variáveis** (`--text-accent:var(--teal)`, `--surface-1:var(--bg-soft)`, etc.) para reaproveitar código; manter esses nomes de var.

## Visual (definido no overhaul de front-end)
- Tema **escuro quente em camadas** (não preto chapado): tokens em `estilos.css` (`--bg/--bg-soft/--card/--raised/--line`, glow radial no `body`).
- **Cor + ícone por módulo**: classes `.m-<modulo>` definem `--accent`/`--accent-bg` (usadas na home; pendente levar para dentro das páginas).
- Tipografia: **Newsreader** (títulos, serifada) + **IBM Plex Sans** (corpo). Acento teal; âmbar para temas/avisos.

## Armadilhas técnicas (importante)
- As **visualizações em canvas foram feitas para fundo escuro**; não migrar para tema claro sem adaptar os traços (ficariam invisíveis).
- **`requestAnimationFrame` pausa no preview headless** (`document.hidden`): animações não avançam ali, mas rodam no navegador real. Verificar lógica por **DOM/eval**, não por pixels do canvas. `setTimeout`/`setInterval` rodam normalmente.
- **Screenshot do preview falha (imagem “sliver”) em páginas altas**; a home e viewport curto funcionam.
- **Modelos 3D (Meshy → GLB → `<model-viewer>`)**: `.glb` não carrega por `file://` (bloqueio); testar via servidor/Pages. Colocar em `modelos/`.

## Fluxo de trabalho / verificação
- Rodar via **servidor local** (preview), não `file://`, quando for testar de verdade.
- Preferir **verificação por DOM (`preview_eval`)** dado o ponto do rAF acima.
- Preferências do usuário (Gabriel): explicar cada passo; **não usar travessão (—) para pausa/aposto** (usar parênteses, dois-pontos, ponto-e-vírgula); PT-BR.

## Estado atual
- **Completo**: 7 processos + 2 temas, todos navegáveis pela home, visual unificado.
- **Pendências/ideias**: publicar no GitHub Pages; levar cor+ícone do módulo para dentro de cada página; passe de acessibilidade (`aria-live` nos resultados, rótulos de canvas, contraste); modelos 3D via Meshy; opcional extrair nav/JS/aliases compartilhados para reduzir duplicação.
