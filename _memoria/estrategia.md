# Estratégia

> O que importa agora. Prioridades, metas, prazos.
> O Claude usa isso pra decidir o que sugerir primeiro e o que adiar.
> Atualize sempre que as prioridades mudarem.

## Fase

Lançamento da presença digital. Site: primeira rodada de polimento visual concluída em 2026-08-21. Instagram: conta criada, ainda sem posts — dois carrosséis já produzidos e prontos, faltando decidir a ordem de publicação e postar.

## Prioridade principal

Conseguir presença digital pra ser visto — hoje a Valuá só tem clientes por boca a boca. Duas frentes:
1. **Site — em andamento.** Feito em 2026-08-21: logo aplicado (header/rodapé/splash, versão `identidade/valua.logo.png` com fundo transparente), hero da home redesenhado (texto cortado pra kicker + h1 direto, foto do cais com overlay escuro só na base em vez do borrão claro por cima inteiro, texto branco), fotos do portfólio (`portfolio.html` e o carrossel de "Sobre") corrigidas pra `object-fit: cover` com cantos arredondados consistentes (antes tinham tarjas cor de areia por causa de `contain`). Padrão a repetir no resto do site: foto vívida + texto enxuto.
2. **Instagram — 2 carrosséis prontos, nenhum publicado ainda.**
   - `marketing/instagram/demolicao/` — carrossel sobre demolição (5 slides), feito em 2026-08-21/22. Fotos de obra real (demolição de píer em Angra dos Reis).
   - `marketing/instagram/reforma-comercial-cais/` — carrossel sobre reforma comercial + obra de cais (5 slides), feito em 2026-08-22, usando fotos reais em `imagens/reforma/` (antes/depois de um bistrô + cais pronto).
   - **Decisão pendente:** qual publicar primeiro. Concluímos junto com o usuário que **demolição não deveria ser o primeiro post** de uma conta zerada — é serviço de menor recorrência e as fotos são mais "brutas". Sugestão combinada: abrir com um post institucional (quem é a Valuá, CREA, área de atuação) ou com reforma residencial (maior recorrência, mais fácil de qualquer pessoa se identificar — também é a prioridade #1 do calendário editorial em `marketing/seo/05-estrategia-conteudo.md`), e só depois publicar reforma comercial/cais e demolição.
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
