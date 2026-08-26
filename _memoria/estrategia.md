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
   - Essas duas mudanças de 26/08 ainda estavam **só no working tree local** (não commitadas nem deployadas) no momento desta atualização — conferir `git status` antes de assumir que já estão em produção.
   - **Site publicado em produção no Vercel**: `https://valua-engenharia.vercel.app` (domínio próprio ainda não registrado — placeholder no title/canonical/OG até lá). Deploy automático a cada `git push` na `main`.
2. **Instagram — perfil configurado, 3 carrosséis prontos, nenhum publicado ainda.**
   - Perfil @valua.engenharia: bio e link de WhatsApp com mensagem pronta configurados em 2026-08-25 (link `wa.me/5524981616105` com texto de orçamento pré-preenchido, sem acentos pra evitar bug de encoding no redirecionador do Instagram).
   - `marketing/instagram/institucional/` — carrossel institucional de apresentação (6 slides: capa, quem somos, área de atuação, responsabilidade técnica/CREA, serviços, CTA), feito em 2026-08-25. **Decidido com o usuário: este é o primeiro post, e vai ficar fixado no perfil.**
   - `marketing/instagram/demolicao/` — carrossel sobre demolição (5 slides), feito em 2026-08-21/22. Fotos de obra real (demolição de píer em Angra dos Reis).
   - `marketing/instagram/reforma-comercial-cais/` — carrossel sobre reforma comercial + obra de cais (5 slides), feito em 2026-08-22, usando fotos reais em `imagens/reforma/` (antes/depois de um bistrô + cais pronto).
   - **Ordem de publicação:** institucional primeiro (fixado), depois reforma comercial/cais, demolição por último — concluímos que demolição não deveria abrir a conta (serviço de menor recorrência, fotos mais "brutas").
   - **Padrão de pasta pra próximos carrosséis:** arquivos de trabalho (`carrossel.html`, `render.js`, fotos-fonte, `legenda.md`) ficam em `marketing/conteudo/<tipo>-<tema>-<data>/`; os PNGs finais prontos pra postar vão pra `marketing/instagram/<tema>/` (caminho simplificado, sem a data).
   - **Padrão visual do carrossel** está documentado em `identidade/design-guide.md` (seção "Padrão de carrossel Instagram") — fundo branco clean, logo centralizada e grande na capa/CTA, discreta no canto inferior direito nos slides internos, contador de página sutil sem fundo, CTA final com grade tipo prancheta de projeto. Cuidado ao usar fotos de baixa resolução (~1024x768) em layout full-bleed 1080x1350 — dá zoom/perda de qualidade; preferir o layout "solo" (foto 1080x760) ou frame contido no tamanho nativo da foto.
   - Fotos reais de obra existem em dois lugares: `assets/img/portfolio/<categoria>/` (reforma, demolição, reparos-telhado, piscina, pequenos-reparos) e `imagens/<categoria>/` (pasta renomeada pelo usuário com nomes descritivos, ex. `imagens/reforma/cais-pronto.jpeg`, `comercial-antes.jpeg` — conferir essa pasta também ao montar carrossel novo). Preferir fotos reais a gerar por IA (sem chave de API configurada, e foto real é mais autêntica).

## O que pode esperar

Setores como financeiro, RH e operações internas — não fazem parte do escopo desse workspace, que é focado 100% em presença digital e geração de leads.

## Contexto com prazo

Pendência do logo (cobrada pelo Moizes) resolvida em 2026-08-21. Sem outro prazo formal definido ainda.

## SEO — pesquisa concluída em 2026-08-21, aguardando e-mail novo do Moizes

Rodei os passos 1, 2, 4, 5, 7 e 8 do `/seo` (não dependem de conta) — tudo salvo em
`marketing/seo/`. Achados principais: a Valuá não aparece em nenhuma busca hoje, mas nenhum
concorrente local tem SEO/GMB forte (só diretórios genéricos e a Mariano & Cruz, concorrente
nacional sem presença física na região). Site já está tecnicamente bem otimizado — falta só
trocar o domínio placeholder (`valuaengenharia.com.br`) pelo domínio real quando for registrado.

Passos 3 (Google Meu Negócio) e 6 (Google Ads) estão **prontos e redigidos**, só esperando o
e-mail novo que o Moizes vai criar pra registrar domínio, GMB e Ads. Ao retomar: abrir
`marketing/seo/03-google-meu-negocio.md` e `06-google-ads.md` e seguir o passo a passo.

Ação prioritária assim que o e-mail chegar: criar o Google Meu Negócio primeiro (maior retorno
rápido, ver `02-analise-concorrencia.md`), depois registrar domínio e configurar Ads. Titularidade
de domínio/GMB/Ads deve ficar no e-mail/nome da Valuá — o usuário deste workspace entra como
gerente/administrador, não como dono (combinado com o usuário em 2026-08-21).

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

## Domínio próprio — decisão tomada em 2026-08-25, registro pendente

Definido `valuaengenharia.com.br` (não `.com` — mais confiável pro cliente local, e já era o
domínio placeholder usado na pesquisa de SEO). Registro será feito no registro.br, **em nome do
Moizes** (CPF ou CNPJ da Valuá, se tiver) — não na conta pessoal do usuário deste workspace, pra
manter a regra de titularidade combinada em 2026-08-21 (domínio/GMB/Ads no nome da empresa, usuário
como gerente). Usuário já mandou mensagem pro Moizes com o passo a passo (cadastro gov.br, comprar
o domínio, avisar quando registrar). Assim que registrar: trocar o domínio placeholder no site
(`index.html`, `sitemap.xml`, canonical/OG — ver `marketing/seo/04-otimizacao-on-page.md`) e
cadastrar no Google Search Console.
