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

Paleta completa (`assets/css/style.css` do site): `--stone:#C9C0AC`, `--stone-line:#8B8271`, `--line:rgba(22,40,61,.16)`, `--focus:#1E6FD9` (uso pontual, foco de formulário).

---

## Tipografia

- **Títulos e destaques:** Century Gothic / Avenir Next / Futura (`var(--display)` no CSS) — caixa alta, letter-spacing largo

- **Corpo, subtítulos e botões:** Georgia / Iowan Old Style / Palatino Linotype (`var(--body)` no CSS) — serifada, transmite solidez técnica

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
- **Versão pra fundo escuro:** *(ainda não tem — avaliar se precisa de versão clara pro Instagram/fundos escuros)*
- **Onde usar:** header, footer e splash de abertura do site (já aplicado), slide final do carrossel (CTA), header de propostas, slides de apresentação
- **Tamanho sugerido:** altura 26-30px no header/footer, largura clamp(220-420px) na splash — ver `.brand-img`, `.foot-brand-img`, `.intro-logo-img` em `assets/css/style.css`
- **Nota técnica:** o PNG foi gerado a partir do `valua.logo.jpg` original (removido), com fundo recortado para transparência via chroma-key + crop — o navy do traço foi preservado. Se o Moizes mandar uma versão vetorial/transparente oficial no futuro, substituir este arquivo.

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
