# Identidade visual

> Como a marca aparece em tudo que o MazyOS gera.
> As skills de conteúdo, carrossel e post leem esse arquivo antes de criar qualquer visual.
> Edite quando a marca evoluir.

---

## Cores

- **Fundo principal:** `#F7F5F0` (areia claro)

- **Cor de destaque / CTA:** `#16283D` (navy)

- **Texto principal:** `#16283D` (navy) / texto suave `#4B5E71`

- **Fundo alternativo / cards:** `#EEEAE0`

- **Cor proibida:** cores vibrantes/saturadas — a marca é navy + neutros de pedra, sem cor de "chamada" tipo laranja/vermelho

- **Exceção — botão de WhatsApp:** `--whatsapp:#22A959` (verde discreto, não é o verde oficial vibrante do WhatsApp) só nos botões de CTA de WhatsApp do site (`.btn.whatsapp`) e no botão flutuante, desde 2026-08-28/29. Decisão do usuário: o CTA de conversão precisava se destacar dos outros botões navy da página. Não usar esse verde em carrossel/post do Instagram — a regra de "sem cor vibrante" continua valendo pra material de marketing, essa exceção é só pro botão de contato do site. O botão "Solicitar orçamento" do hero da home é a única exceção à exceção: fica branco/areia como sempre foi, mesmo tendo a classe `whatsapp`.

Paleta completa (`assets/css/style.css` do site): `--stone:#C9C0AC`, `--stone-line:#8B8271`, `--line:rgba(22,40,61,.16)`, `--focus:#1E6FD9` (uso pontual, foco de formulário), `--whatsapp:#22A959` / `--whatsapp-dark:#1B8A48` (só CTA de WhatsApp do site).

---

## Tipografia

- **Títulos e destaques:** Century Gothic / Avenir Next / Futura (`var(--display)` no CSS) — caixa alta, letter-spacing largo

- **Corpo e texto corrido:** Helvetica Neue / Segoe UI / Roboto / Arial (`var(--body)` no CSS) — sans-serif de sistema, 17.5px, line-height 1.6. **Mudou em 2026-08-24** (era Georgia/serifada): a serifada destoava do hero full-bleed, que é todo geométrico/sans — trocado pra manter o site consistente do início ao fim e ler mais "premium moderno". A diferenciação entre título e corpo agora vem de peso/letter-spacing/caixa (títulos em `--display` com tracking largo), não mais de serifa vs. sans.

- **Peso do título:** regular/400, nunca bold pesado — a elegância vem do letter-spacing, não do peso

---

## Estilo geral

Navy geométrico + neutros de pedra/concreto. Sóbrio, técnico, sem gradientes chamativos. Sem web fonts (só fontes de sistema, por performance). Fotos reais de obra carregam o visual — pouco texto, muito espaço em branco.

---

## Elementos-chave

- Bordas: `rgba(22,40,61,.16)` (fina) / `.34` (forte)
- Border-radius dos cards: baixo (site usa cantos quase retos, ~2px)
- Botões: uppercase, letter-spacing largo, fonte display
- Sombras: `0 30px 60px -35px rgba(22,40,61,.35)` — suave, difusa

---

## O que NUNCA fazer

- Não usar cores vibrantes fora da paleta navy/pedra/areia
- Não usar fontes decorativas ou web fonts pesadas
- Não sobrecarregar de texto — o site e os posts devem ser escaneáveis rápido

---

## Logo

- **Arquivo:** `identidade/valua.logo.png`
- **Versão pra fundo escuro:** `identidade/valua.logo-light.png` — traço em `#F2EEE4` (cor "on-dark" do site), fundo transparente. Gerado a partir do PNG navy original (mesmo traço, só recolorido, sem perda de nitidez). Usado no hero da home (`.hero-logo`). Se o logo original for atualizado no futuro, regenerar esse arquivo junto (script rápido com Pillow: troca RGB mantendo o alpha).
- **Onde usar:** header (aparece só depois que rola a página, ver abaixo), footer, hero da home (grande, centralizada — ver seção "Hero da home" abaixo), slide final do carrossel (CTA), header de propostas, slides de apresentação
- **Tamanho sugerido:** altura 26-30px no header/footer, `.hero-logo` na home usa `clamp` responsivo (~240-320px de largura) — ver `.brand-img`, `.foot-brand-img`, `.hero-logo` em `assets/css/style.css`
- **Nota técnica:** o PNG foi gerado a partir do `valua.logo.jpg` original (removido), com fundo recortado para transparência via chroma-key + crop — o navy do traço foi preservado. Se o Moizes mandar uma versão vetorial/transparente oficial no futuro, substituir este arquivo.

---

## Hero da home (padrão aprovado — 2026-08-24, alinhamento ajustado em 2026-08-26)

Referência viva: `index.html` (seção `.hero.hero-full`) + `assets/css/style.css`.

- **Foto de fundo full-bleed:** ocupa 100% da primeira tela (`100dvh`), sem faixa branca no topo e sem cortar conteúdo embaixo. Imagens em `imagens/fundo/desktop.png` (paisagem, ~16:9/16:10) e `imagens/fundo/mobile.png` (retrato, ~4:5/3:4), trocadas via `<picture>`/`source media`.
- **Header flutua transparente sobre a foto** (`.site-header.hero-overlay`) — nav e botão "Orçamento" em branco, sem fundo. Só fica sólido (com a logo do header aparecendo) depois que o usuário rola a página além da altura do hero — ver toggle de scroll em `assets/js/main.js`.
- **Conteúdo do hero, alinhamento misto sobre gradiente escuro:** logo grande (clara, ver acima) → tagline em caixa alta → pill com as cidades atendidas, esses três **centralizados**; headline em 3 linhas com trechos em negrito → botão "Solicitar orçamento" em destaque → fila de 4 ícones de diferencial (obras com qualidade, gestão e planejamento, segurança e responsabilidade, compromisso com você), esses três **alinhados à esquerda**. O bloco inteiro fica ancorado mais para a base da foto (não centralizado verticalmente).
- **Sem animação de abertura:** a antiga tela de splash com logo animando (`#intro-splash`) foi removida — o hero já entrega a marca na primeira tela, não precisa de intro separada.
- Ao gerar um hero novo (outra página, campanha), reaproveitar essa estrutura antes de criar algo do zero.

---

## Observações adicionais

O nome da marca no site aparece estilizado como "VALU**À**" (com o À em cor `--stone-line`), ver `assets/css/style.css` e o `<span class="name">` repetido em todas as páginas.

---

## Padrão de carrossel Instagram (aprovado — usar como base sempre)

Referência viva: `marketing/conteudo/carrossel-demolicao-2026-08-21/carrossel.html`. Reutilizar essa estrutura (CSS + layouts) pra qualquer carrossel novo, trocando fotos e texto.

**Fundo:** branco clean (`#FFFFFF`) em todos os slides — nunca fundo escuro. Minimalista, sem elementos decorativos além dos descritos abaixo.

**Logo:**
- Slide de capa e slide de CTA final: logo centralizada horizontalmente, no topo mas não colada na borda (`top: 150px`), tamanho maior (`height: 60px`).
- Slides internos (fotos): logo discreta no **canto inferior direito** da foto, pequena (`height: 28px`), opacidade ~0.7, com leve `drop-shadow` branco pra legibilidade sobre a foto — nunca com fundo/chip atrás.

**Numeração de página (canto superior direito, nos slides com foto):** sem fundo/chip. Texto branco sutil (`rgba(255,255,255,.8)`) com `text-shadow` leve pra contraste, discreto.

**Slide de CTA final:** fundo branco com grade tipo prancheta de projeto — `repeating-linear-gradient` navy a 15% de opacidade, células de 40px, nas duas direções — mais 4 miras (crosshairs) finas nos cantos, sutis. Logo centralizada no topo (mesmo padrão da capa), headline, régua fina, botão navy sólido com ícone de WhatsApp (SVG inline) + telefone.

**Layouts internos:** fotos reais de obra (nunca IA quando existir foto real disponível), alternando full-bleed com legenda em barra inferior e split foto/texto — sempre com contador de etapa (kicker "ETAPA 0X").

**Cuidado — fotos com logo já aplicada:** algumas fotos em `imagens/reforma/` (ex: `cais-pronto.jpeg`, `cais-pronto2.jpeg`, `comercial-depois.jpeg`) já têm a marca "Valuá Engenharia" queimada na própria imagem (canto inferior direito). Nesses slides, **omitir a `.logo-discreet` do template** — senão a logo aparece duplicada (uma da foto, outra do overlay). Conferir a foto antes de aplicar o overlay padrão.
