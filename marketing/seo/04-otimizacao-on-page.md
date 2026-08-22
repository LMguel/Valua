# Passo 4 — Otimização on-page

> Auditoria do site real em `d:\Valua` (2026-08-21). Diferente do fluxo padrão do `/seo`, aqui o
> site já nasceu com boa parte do trabalho técnico feito — este arquivo é principalmente uma
> conferência de status + o que falta, não uma reescrita do zero.

## Status geral: bem avançado

| Item técnico | Status |
|---|---|
| Title único e otimizado (keyword + local) em todas as páginas | ✅ feito |
| Meta description única com CTA implícito em todas as páginas | ✅ feito |
| H1 único por página, com keyword + localização | ✅ feito |
| Canonical tag | ✅ feito (usa domínio placeholder — ver pendência abaixo) |
| Open Graph completo (title, description, image, locale, url) | ✅ feito |
| Schema JSON-LD (`GeneralContractor`, área de atendimento, CREA, redes sociais) | ✅ feito na home; 3 blocos de schema por página de serviço |
| sitemap.xml | ✅ existe, cobre todas as páginas principais |
| robots.txt | ✅ existe, aponta pro sitemap |
| Alt text em imagens | ✅ 100% das imagens de `index.html` e `portfolio.html` têm `alt` |
| URLs amigáveis | ✅ (`/servicos/reforma-residencial.html`, sem parâmetros/IDs) |
| Mobile-friendly | Não testado neste passo — confirmar com Lighthouse/PageSpeed quando o domínio estiver no ar |

## Pendência única e crítica: domínio placeholder

Canonical, Open Graph, JSON-LD, `sitemap.xml` e `robots.txt` usam
`https://www.valuaengenharia.com.br` como placeholder — há comentários `TODO` no próprio código
(`index.html:2`, `sitemap.xml:2`) avisando disso. **Ação:** assim que o domínio real for
registrado, rodar find-and-replace desse domínio em todos os arquivos `.html`, `sitemap.xml` e
`robots.txt` antes de publicar. Se o domínio registrado for exatamente esse, nada muda; só
confirmar.

## Mapa de página → keyword principal (já implementado)

| Página | Keyword principal | Title atual |
|---|---|---|
| `index.html` | reformas e construção civil Angra dos Reis | Valuà Engenharia \| Reformas e Construção Civil em Angra dos Reis |
| `servicos/reformas-residenciais.html` | reforma residencial Angra dos Reis | Reforma Residencial em Angra dos Reis e Região \| Valuà Engenharia |
| `servicos/reformas-comerciais.html` | reforma comercial Angra dos Reis | Reforma Comercial em Angra dos Reis e Região \| Valuà Engenharia |
| `servicos/construcao-civil.html` | construção civil Angra dos Reis | Construção Civil em Angra dos Reis e Região \| Valuà Engenharia |
| `servicos/projetos-estruturais.html` | projeto estrutural Angra dos Reis | Projeto Estrutural em Angra dos Reis e Região \| Valuà Engenharia |
| `servicos/gerenciamento-de-obras.html` | gerenciamento de obras Angra dos Reis | Gerenciamento de Obras em Angra dos Reis e Região \| Valuà Engenharia |
| `servicos/consultoria-tecnica.html` | consultoria técnica / laudo / vistoria | Consultoria Técnica em Engenharia \| Valuà Engenharia |
| `portfolio.html` | portfólio de obras Angra dos Reis | Portfólio \| Valuà Engenharia — Angra dos Reis, Mangaratiba e Paraty |

Cobertura boa dos termos prioritários do passo 1 — falta apenas **reforma de telhado** e
**demolição** como páginas de serviço dedicadas (hoje aparecem só como categorias no portfólio,
não como página própria com title/H1 focado). Ver recomendação no passo 5.

## O que fica pra depois

- **PageSpeed/Core Web Vitals**: só testável com o site publicado no domínio real.
- **Google Search Console**: cadastro depende do domínio + verificação de propriedade (fica pro
  passo 3/6, quando o e-mail novo chegar).
