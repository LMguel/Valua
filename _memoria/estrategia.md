# Estratégia

> O que importa agora. Prioridades, metas, prazos.
> O Claude usa isso pra decidir o que sugerir primeiro e o que adiar.
> Atualize sempre que as prioridades mudarem.

## Fase

Lançamento da presença digital. Site: primeira rodada de polimento visual concluída em 2026-08-21. Instagram: conta criada, ainda sem posts — próximo passo é criar os primeiros carrosséis.

## Prioridade principal

Conseguir presença digital pra ser visto — hoje a Valuá só tem clientes por boca a boca. Duas frentes:
1. **Site — em andamento.** Feito em 2026-08-21: logo aplicado (header/rodapé/splash, versão `identidade/valua.logo.png` com fundo transparente), hero da home redesenhado (texto cortado pra kicker + h1 direto, foto do cais com overlay escuro só na base em vez do borrão claro por cima inteiro, texto branco), fotos do portfólio (`portfolio.html` e o carrossel de "Sobre") corrigidas pra `object-fit: cover` com cantos arredondados consistentes (antes tinham tarjas cor de areia por causa de `contain`). Padrão a repetir no resto do site: foto vívida + texto enxuto.
2. **Instagram — próximo passo.** Ainda sem nenhum post. Vou abrir outro chat pra gerar os primeiros carrosséis com a skill `/carrossel`. Contexto pra esse trabalho:
   - Fotos reais de obra já existem em `assets/img/portfolio/<categoria>/` (reforma, demolição, reparos-telhado, piscina, pequenos-reparos) — usar essas fotos reais no lugar de gerar foto por IA sempre que fizer sentido (o design-guide não tem chave de API de geração de imagem configurada ainda, e foto real da obra é mais autêntica pro tom da marca).
   - `identidade/design-guide.md` e `_memoria/preferencias.md` já estão preenchidos com a paleta/tipografia real do site e o tom de voz — a skill `/carrossel` lê os dois antes de criar qualquer visual.
   - Como ainda não existe post publicado, não há "última capa" pra alternar (primeira publicação livre).

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
