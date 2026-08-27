# Site institucional — Valuà Engenharia

Site estático (HTML/CSS/JS puro, sem build/framework) preparado para SEO, SEO local e conversão via WhatsApp. Nenhuma biblioteca externa é carregada — tudo roda com os arquivos deste projeto.

## Estrutura

```
index.html                      Home
sobre.html                      Sobre a empresa
portfolio.html                  Portfólio (imagens ilustrativas por enquanto)
contato.html                    Contato + formulário (não conectado ainda)
servicos/index.html             Hub de serviços
servicos/pier-e-deck.html
servicos/construcao.html
servicos/conservacao-e-manutencao-predial.html
servicos/demolicao.html
servicos/projetos-e-licenciamentos.html
servicos/pequenos-reparos.html
assets/css/style.css            Estilos compartilhados
assets/js/main.js               Menu, WhatsApp dinâmico, reveal on scroll, eventos GA4
sitemap.xml / robots.txt        SEO técnico
```

## O que já está pronto

- HTML semântico, um único `<h1>` por página, headings hierárquicos.
- Meta title, meta description, canonical, Open Graph e Twitter Card únicos por página.
- Dados estruturados (Schema.org): `GeneralContractor` na home, `BreadcrumbList` e `Service` em cada página de serviço, `FAQPage` nas páginas com FAQ visível.
- URLs amigáveis (`/servicos/construcao.html`, etc.).
- Sem JavaScript bloqueante, sem fontes externas, sem bibliotecas pesadas — pensado para bom desempenho e Core Web Vitals.
- Acessibilidade: skip link, foco visível, labels em formulário, `aria-current`, contraste AA na paleta.
- WhatsApp centralizado em uma única constante (`WHATSAPP_NUMBER` em `assets/js/main.js`) — todos os botões puxam desse valor.
- Ganchos de evento prontos para Google Analytics 4 via `dataLayer.push` (clique em WhatsApp, telefone, e-mail, localização, envio de formulário) — só falta instalar o GA4.

## Imagens (`assets/img/`)

Todas as fotos usadas hoje no site são bancos de imagem gratuitos do **Pexels** (uso livre, sem necessidade de atribuição, permitido para fins comerciais), baixadas para dentro do projeto — não são obras reais da Valuà. Cada uma aparece com a etiqueta visual "Imagem ilustrativa" sobre a foto e um comentário HTML no código indicando que deve ser trocada por foto real. Arquivos:

| Arquivo | Uso atual |
|---|---|
| `hero-construction.jpg` | Hero da home e da página de Construção Civil |
| `blueprint-review.jpg` | Seção "A empresa" (home) |
| `engineer-blueprint.jpg` | Sobre, Projetos Estruturais, portfólio |
| `engineers-blueprint-2.jpg` | Projetos Estruturais (galeria) |
| `plans-review.jpg` | Construção Civil (galeria) |
| `renovation-room.jpg` | Reformas Residenciais, portfólio, home |
| `renovation-home.jpg` | Reformas Residenciais (galeria) |
| `office-interior.jpg` | Reformas Comerciais, portfólio, home |
| `office-corridor.jpg` | Reformas Comerciais (galeria) |
| `site-clipboard.jpg` | Gerenciamento de Obras, portfólio |
| `helmet-whiteboard.jpg` | Gerenciamento de Obras (galeria) |
| `engineer-helmet.jpg` | Consultoria Técnica, portfólio |

Quando houver fotos reais das obras da Valuà, basta substituir o arquivo de mesmo nome em `assets/img/` (ou trocar o `src` no HTML) e remover a etiqueta "Imagem ilustrativa" (`<span class="tag">`) de cada bloco `.media-placeholder`. Todas já usam `loading="lazy"` (exceto a foto do hero, carregada com prioridade) e `alt` descritivo.

## Dados reais já preenchidos

- **Endereço**: Avenida das Caravelas, 27 — Santa Rita II, Bracuí, Angra dos Reis — RJ (`contato.html`, `sobre.html`, JSON-LD da home).
- **CNPJ**: 47.836.195/0001-78 (`contato.html`, `sobre.html`, JSON-LD da home via `taxID`).
- **Responsável técnico**: Moizes Cunha — Engenheiro Civil, CREA-RJ 2020106887 (rodapé de todas as páginas, `sobre.html`, `contato.html`, JSON-LD da home via `employee`).
- **WhatsApp**: +55 24 98161-6105, já configurado como `WHATSAPP_NUMBER` em `assets/js/main.js` — todos os botões de WhatsApp do site já funcionam de verdade.
- **Telefone de contato**: (24) 98161-6105, em `contato.html`.

## O que ainda precisa ser preenchido antes de publicar (não foi inventado)

Buscar por `TODO`, `[a inserir]`, `[a definir]` e `placeholder-note` no código. Principais pontos:

1. **Domínio real** — hoje o placeholder `https://www.valuaengenharia.com.br` está no `<title>`/canonical/OG de cada página, no `sitemap.xml` e no `robots.txt`. Substituir por todo o projeto quando o domínio for definido.
2. **E-mail** — ainda aparece como `[e-mail a definir]` em `contato.html`.
3. **Instagram** — link ainda não confirmado; o ícone existe no rodapé de todas as páginas com `href="#"` e um comentário `TODO` ao lado.
4. **Foto e trajetória de Moizes Cunha** — bloco reservado em `sobre.html` (formação detalhada, histórico profissional, foto).
5. **Mapa** — bloco reservado em `contato.html` (`Mapa a inserir`); pode ser um embed do Google Maps com o endereço já preenchido.
6. **Portfólio real** — `portfolio.html` e as seções "Exemplos de projetos" de cada serviço usam fotos de banco de imagens (ver seção "Imagens" acima), claramente marcadas como "Imagem ilustrativa". Ao substituir por fotos reais, manter `loading="lazy"` (exceto a do hero) e `alt` descritivo.
7. **Formulário de contato** — hoje é apenas visual (`contato.html` + `main.js`); precisa ser conectado a um serviço de envio real (endpoint próprio, Formspree, etc.).
8. **JSON-LD** — o comentário no `index.html` indica os campos ainda pendentes (`postalCode`, `geo`, `openingHoursSpecification`, `sameAs`). Não preencher com valor fictício.

## Próximos passos técnicos

- **Google Search Console**: verificar o domínio e enviar `sitemap.xml` assim que o site estiver no ar.
- **Google Analytics 4**: instalar o snippet do GA4 antes do `</head>` de cada página (ou via Google Tag Manager); os eventos customizados já são disparados via `dataLayer.push` em `assets/js/main.js`, então nenhum evento adicional precisa ser programado — apenas o GA4/GTM precisa "escutar" esse `dataLayer`.
- **Imagem OG** (`og:image`): falta uma imagem 1200×630 real para compartilhamento em redes sociais; hoje omitida propositalmente.
- **Favicon**: implementado como SVG embutido (sem arquivo externo). Pode ser substituído por um `.ico`/`.png` com a marca quando houver arte final.

## Preparado para crescer

- Novas páginas de serviço seguem o mesmo padrão de `servicos/*.html` (head, breadcrumb, JSON-LD `Service` + `BreadcrumbList`, corpo com "o que é / para quem / como trabalhamos / diferenciais / etapas / FAQ").
- Um blog pode ser adicionado em `/blog/` sem alterar a estrutura atual — o rodapé e o cabeçalho já estão isolados por página e podem receber um novo item de navegação.
- Páginas por cidade (ex. `/servicos/construcao-paraty.html`) podem ser criadas depois, reaproveitando o template dos serviços, quando fizer sentido para SEO local.
