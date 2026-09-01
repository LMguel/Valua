# Estratégia

> O que importa agora. Prioridades, metas, prazos.
> O Claude usa isso pra decidir o que sugerir primeiro e o que adiar.
> Atualize sempre que as prioridades mudarem.

## Fase

Lançamento da presença digital. Site: primeira rodada de polimento visual concluída em 2026-08-21. Instagram: conta criada, ainda sem posts — dois carrosséis já produzidos e prontos, faltando decidir a ordem de publicação e postar.

## Prioridade principal

Conseguir presença digital pra ser visto — hoje a Valuá só tem clientes por boca a boca. Duas frentes:
1. **Site — publicado em produção.** Feito em 2026-08-21: logo aplicado (header/rodapé/splash, versão `identidade/valua.logo.png` com fundo transparente), hero da home redesenhado (texto cortado pra kicker + h1 direto, foto do cais com overlay escuro só na base em vez do borrão claro por cima inteiro, texto branco), fotos do portfólio (`portfolio.html` e o carrossel de "Sobre") corrigidas pra `object-fit: cover` com cantos arredondados consistentes (antes tinham tarjas cor de areia por causa de `contain`). Padrão a repetir no resto do site: foto vívida + texto enxuto.
   - **Hero redesenhado de novo em 2026-08-24** (mudança maior): foto full-bleed em tela cheia (`imagens/fundo/desktop.jpg`/`mobile.jpg`), header transparente flutuante, logo grande + tagline + pill de região + headline em 3 linhas + botão "Solicitar orçamento" em destaque + fileira de 4 ícones de diferencial. Fonte do corpo trocada de serifada (Georgia) pra sans-serif de sistema, pra ficar consistente com o hero. Detalhes técnicos e bugs corrigidos (cache, status bar do iPhone, nitidez da logo) na memória de sessão do Claude Code.
   - **Ajuste de alinhamento do hero em 2026-08-26**: depois de várias rodadas de ajuste fino com o usuário, o padrão final ficou: logo + tagline + pill **centralizados**, headline (3 linhas, maior) + botão "Solicitar orçamento" (mais destacado, 17px) + fileira de ícones **alinhados à esquerda**, bloco todo ancorado mais pra base da foto em vez de centralizado verticalmente. Documentado em `identidade/design-guide.md` (seção "Hero da home").
   - **Fita de fotos abaixo de "Responsável técnico" (marquee) — 2026-08-26**: continua rolando sozinha automaticamente, mas agora também é arrastável com mouse e touch (drag-to-scroll), tanto desktop quanto mobile. Implementado em JS puro (`assets/js/main.js`) com `requestAnimationFrame` + Pointer Events, sem dependência externa.
   - Todas as mudanças de 26/08 (e as seguintes) já foram commitadas e deployadas — `git status` limpo. Rodadas extras de ajuste do hero depois desta memória: posição final de `.hero-brand` (topo, centralizado) e `.hero-bottom` (base, alinhado à esquerda) via `justify-content:space-between`; logo do hero com `srcset` 1x/2x (gerado via Pillow) pra ficar nítida; correção de centralização do botão "Solicitar orçamento" no hero mobile (texto em 2 linhas não ficava centralizado entre si).
   - **Site publicado em produção no Vercel**: `https://valua-engenharia.vercel.app`. **Domínio próprio `valuaengenharia.com.br` registrado e DNS propagado em 2026-08-27** — ver seção "Domínio próprio" abaixo pra detalhes e um desvio do plano original que precisa de atenção.
   - **Reestruturação de conteúdo pedida pelo Moizes — publicada em 2026-08-28** (commit `b086add`): novo texto institucional no Sobre ("Quem somos" + "Muito além de obras e serviços"), "Área de atuação"→"Região Atendida", "Como trabalhamos"→"Metodologia de trabalho" com atendimento de emergência 7 dias, dados pessoais (Moizes/Vanusa) retirados da seção "Dados da empresa" (ficou só nome/CNPJ/endereço — o CREA no rodapé foi mantido, é exigência legal), espaço reservado pra vídeos no Sobre. **Os 6 serviços foram totalmente trocados**: Píer e Deck, Construção, Conservação e Manutenção Predial, Demolição, Projetos e Licenciamentos, Pequenos Reparos — substituindo reformas residenciais/comerciais, construção civil, projetos estruturais, gerenciamento de obras e consultoria técnica (URLs antigas redirecionadas via `vercel.json`). Home ganhou headline nova, seção "Resultado real" (antes/depois de fachada) e foto do Moizes planejando com a equipe ao lado do texto de responsabilidade técnica. Botões de orçamento e fotos de serviço com bordas arredondadas. Tudo já commitado e com push feito pro GitHub (`origin/main`) — deploy automático via Vercel deve refletir em poucos minutos.
   - **Site — trabalho de 2026-08-28 a 2026-09-01 (7 commits):** página de serviço **Piscina nova**
     (`servicos/piscina.html`) — 7º serviço, com seção própria de "Antes e depois" (estrutura em
     concreto → obra pronta) e FAQ; virou o destino correto do "Ver serviço" da categoria Piscina
     no portfólio (antes apontava errado pra Conservação e Manutenção Predial). **Portfólio
     reformulado**: cada categoria trocou o carrossel automático (1 foto girando sozinha) por uma
     grade com todas as fotos visíveis de uma vez; no mobile mostra só 3 fotos + botão "Ver mais
     fotos". **Lightbox** adicionado em todo o site (páginas de serviço e portfólio) — clicar em
     qualquer foto abre ampliada, com setas pra navegar entre as fotos do mesmo grupo. Galerias das
     páginas de serviço alargadas (escapam da coluna estreita de texto) e fotos em proporção
     paisagem (4:3) em vez do corte quase quadrado de antes; fonte do corpo das páginas de serviço
     aumentada (`.service-body` de 760px pra 960px de largura, parágrafos de 18px pra 19.5px).
     **Botão de WhatsApp com cor verde própria** (`--whatsapp:#22A959`, mais discreto que o verde
     oficial) em vez do navy padrão — só nos CTAs internos, o botão do hero da home ficou branco/
     areia como sempre foi (tem a classe `whatsapp` também, mas foi excepcionado). Fotos maiores do
     portfólio comprimidas (~1.85MB → ~1.22MB, redimensionadas pra 1000px de largura). Tudo já
     commitado e deployado (`origin/main`, sem pendência de push).
2. **Instagram — perfil configurado, 3 carrosséis prontos, nenhum publicado ainda.**
   - Perfil @valua.engenharia: bio e link de WhatsApp com mensagem pronta configurados em 2026-08-25 (link `wa.me/5524981616105` com texto de orçamento pré-preenchido, sem acentos pra evitar bug de encoding no redirecionador do Instagram).
   - `marketing/instagram/institucional/` — carrossel institucional de apresentação (6 slides: capa, quem somos, área de atuação, responsabilidade técnica/CREA, serviços, CTA), feito em 2026-08-25. **Decidido com o usuário: este é o primeiro post, e vai ficar fixado no perfil.**
   - `marketing/instagram/demolicao/` — carrossel sobre demolição (5 slides), feito em 2026-08-21/22. Fotos de obra real (demolição de píer em Angra dos Reis).
   - `marketing/instagram/reforma-comercial-cais/` — carrossel sobre reforma comercial + obra de cais (5 slides), feito em 2026-08-22, usando fotos reais em `imagens/reforma/` (antes/depois de um bistrô + cais pronto).
   - `marketing/instagram/pintura-fachadas/` — carrossel curto (3 slides: antes/depois, o que é o serviço, CTA) sobre pintura e revitalização de fachadas, feito em 2026-08-26, usando foto real antes/depois de um prédio (`imagens/Pintura e Revitalização de Fachadas/`). Ainda falta decidir onde entra na ordem de publicação.
   - **Ordem de publicação:** institucional primeiro (fixado), depois reforma comercial/cais, demolição por último — concluímos que demolição não deveria abrir a conta (serviço de menor recorrência, fotos mais "brutas"). Pintura/fachadas ainda não posicionado nessa ordem.
   - **Padrão de pasta pra próximos carrosséis:** arquivos de trabalho (`carrossel.html`, `render.js`, fotos-fonte, `legenda.md`) ficam em `marketing/conteudo/<tipo>-<tema>-<data>/`; os PNGs finais prontos pra postar vão pra `marketing/instagram/<tema>/` (caminho simplificado, sem a data).
   - **Padrão visual do carrossel** está documentado em `identidade/design-guide.md` (seção "Padrão de carrossel Instagram") — fundo branco clean, logo centralizada e grande na capa/CTA, discreta no canto inferior direito nos slides internos, contador de página sutil sem fundo, CTA final com grade tipo prancheta de projeto. Cuidado ao usar fotos de baixa resolução (~1024x768) em layout full-bleed 1080x1350 — dá zoom/perda de qualidade; preferir o layout "solo" (foto 1080x760) ou frame contido no tamanho nativo da foto.
   - Fotos reais de obra existem em dois lugares: `assets/img/portfolio/<categoria>/` (reforma, demolição, reparos-telhado, piscina, pequenos-reparos) e `imagens/<categoria>/` (pasta renomeada pelo usuário com nomes descritivos, ex. `imagens/reforma/cais-pronto.jpeg`, `comercial-antes.jpeg` — conferir essa pasta também ao montar carrossel novo). Preferir fotos reais a gerar por IA (sem chave de API configurada, e foto real é mais autêntica).

## Pendências da reestruturação de serviços (2026-08-28)

- **Foto da "casa Rodrigo e Guilherme" — resolvida em 2026-08-28.** Fotos reais da obra chegaram
  (`imagens/casa/`) e foram publicadas: hero e galeria de `servicos/construcao.html`, seção
  "Construção residencial" no portfólio, e viraram a foto principal (depois) da página nova
  `servicos/piscina.html`. Ver seção "Site — trabalho de 2026-08-28 a 2026-09-01" abaixo.
- **Segunda obra residencial (cliente diferente) — publicada em 2026-09-01.** Fotos novas em
  `imagens/novas/` (área de lazer, escada de madeira, sala, piscina) são de um cliente/projeto
  diferente da casa Rodrigo e Guilherme — confirmado com o usuário antes de publicar. Distribuídas
  nas mesmas seções (Construção residencial no portfólio e em `construcao.html`, mais uma foto na
  categoria Piscina do portfólio e em "Trabalhos realizados" de `servicos/piscina.html`), com o
  texto ajustado pra plural ("Casas entregues" / "Projetos entregues: obras residenciais") já que
  a categoria agora mostra mais de uma obra. Não foi misturada na história de "Antes e depois" da
  página de Piscina, que documenta um projeto específico.
- **Vídeo real**: a seção "Vídeos" no Sobre é só um espaço reservado (placeholder com ícone de play), sem vídeo nenhum ainda — Moizes pediu o espaço, mas não mandou material.

## O que pode esperar

Setores como financeiro, RH e operações internas — não fazem parte do escopo desse workspace, que é focado 100% em presença digital e geração de leads.

## Contexto com prazo

Pendência do logo (cobrada pelo Moizes) resolvida em 2026-08-21. Sem outro prazo formal definido ainda.

## SEO — pesquisa concluída em 2026-08-21

Rodei os passos 1, 2, 4, 5, 7 e 8 do `/seo` (não dependem de conta) — tudo salvo em
`marketing/seo/`. Achados principais: a Valuá não aparece em nenhuma busca hoje, mas nenhum
concorrente local tem SEO/GMB forte (só diretórios genéricos e a Mariano & Cruz, concorrente
nacional sem presença física na região). Site já está tecnicamente bem otimizado — o domínio
placeholder (`valuaengenharia.com.br`) virou domínio real em 2026-08-27 (coincidiu com o
placeholder, então título/canonical/OG/sitemap não precisaram mudar, só os comentários TODO
foram removidos). Falta cadastrar no Google Search Console.

Passos 3 (Google Meu Negócio) e 6 (Google Ads) estão **prontos e redigidos** em
`marketing/seo/03-google-meu-negocio.md` e `06-google-ads.md`. **Decisão em 2026-09-01: não vai
ter e-mail novo — usar `valuaengenharia@gmail.com` (o mesmo já usado no Perfil da Empresa) pra
tudo, inclusive Google Ads.** O plano original de esperar um e-mail novo do Moizes foi abandonado.

Ação prioritária: configurar o Google Ads com esse e-mail (ver `02-analise-concorrencia.md` pra
prioridade de canal). Titularidade de domínio/GMB/Ads deve ficar no e-mail/nome da Valuá — o
usuário deste workspace entra como gerente/administrador, não como dono (combinado com o usuário
em 2026-08-21) — mas ver desvio já registrado na seção "Domínio próprio" abaixo (domínio pago
pelo usuário, não pela Valuá).

**Google Search Console cadastrado e validado em 2026-08-28.** Verificação por registro TXT no
DNS do registro.br (`google-site-verification=...` em `valuaengenharia.com.br`, mesma zona onde
já estavam o `A` e o `CNAME` do site) — propagou sem o problema de demora/divergência de conta que
tinha acontecido com o domínio. Sitemap (`sitemap.xml`) enviado e indexação manual solicitada pra
home, `servicos/construcao.html`, `servicos/piscina.html` e `portfolio.html`. Confirmado por busca
nesse mesmo dia que a Valuá ainda não aparecia em nenhum resultado do Google (nem pelo nome do
domínio, nem por termos como "reforma residencial Angra dos Reis") — esperado pra um domínio com
1 dia de vida sem Search Console, não é sinal de problema técnico do site. Acompanhar em
**Páginas** no Search Console nos próximos dias/semanas pra ver a indexação subir.

## Google Perfil da Empresa — criado e validado em 2026-08-25

Conta `valuaengenharia@gmail.com` (já existia, senha recuperada). Perfil "Valuá Engenharia"
criado como Construtora, área de serviço (sem endereço público) cobrindo Angra dos Reis,
Mangaratiba e Paraty — identidade validada com sucesso (selo azul ativo, perfil visível no Maps).
Preenchido: serviços (reforma residencial/comercial, telhado, demolição, piscina), horário
(Seg-Sáb 08h-18h/12h), descrição com CREA do Moizes, telefone `(24) 98161-6105`, site (URL Vercel
provisória), 5 fotos na galeria (cais, bistrô, telhado em obra). Campo "foto da montra/exterior"
deixado em branco de propósito — Valuá não tem endereço físico próprio ainda (Moizes vai construir
escritório no futuro), e usar foto de obra de cliente ou imagem gerada por IA nesse campo viola as
diretrizes do Google (metadados de localização podem mover o pino no Maps; risco de suspensão por
foto não-autêntica do exterior). Revisar quando o escritório existir de fato.

Primeira publicação (post) feita em 2026-08-25: foto `imagens/reforma/cais-pronto2.jpeg` + texto
institucional genérico + botão "Ligar agora".

Crédito de R$ 880 em Google Ads oferecido no perfil — **decisão: não reivindicar ainda**, exige
gastar R$ 880 reais em 60 dias pra liberar o reembolso (que ainda demora até 35 dias pra cair).
Guardar pra quando houver campanha estruturada e orçamento definido pelo Moizes (ver seção Google
Ads acima).

**Próximo foco:** conseguir as primeiras avaliações reais no perfil (maior peso pra aparecer em
buscas locais nessa fase inicial) e publicar o Instagram (carrosséis já prontos, ver seção acima).
Perfil pode levar 1-2 semanas pra indexar completamente na busca do Google — normal, não é sinal
de problema a menos que persista além disso.

## Domínio próprio — registrado e no ar em 2026-08-27

`valuaengenharia.com.br` comprado e pago via Pix no registro.br **pelo usuário deste workspace**,
não pelo Moizes — **desvio da titularidade combinada em 2026-08-21** (decisão original era
domínio/GMB/Ads no nome da empresa/Moizes, usuário como gerente). Registrar esse desvio aqui pra
não esquecer; vale alinhar com o Moizes se a titularidade deveria ser transferida pra ele/CNPJ da
Valuá no futuro.

DNS configurado direto no registro.br (modo avançado → "Configurar zona DNS", não nameservers):
registro `A` `@` → `216.198.79.1` e `CNAME` `www` → `3ef9445757224831.vercel-dns-017.com.`,
apontando pro projeto na Vercel. Teve demora/dificuldade na propagação (bem mais que o normal,
possivelmente ligado a uma divergência de conta no registro.br — domínio aparecia ativo em
"MOCUN25" com a conta de acesso sendo "MOCUN24"; usuário ia mandar e-mail pro suporte deles, não
confirmado se chegou a resolver ou se propagou sozinho). DNS confirmado propagado em 2026-08-27.

Pendente: cadastrar o domínio no Google Search Console. Título/canonical/OG/sitemap já usavam esse
domínio como placeholder, então não precisaram mudar — só os comentários TODO foram removidos
(ver seção SEO acima).
