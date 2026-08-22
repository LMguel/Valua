# Passo 8 — GEO: aparecer em respostas de IA

## Auditoria GEO

Como confirmado no passo 1, a Valuá não aparece em nenhum resultado de busca hoje — o mesmo vale
pra IAs generativas (ChatGPT, Gemini, Perplexity): sem conteúdo indexado e sem menções externas,
não há como uma IA citar a empresa quando alguém pergunta "qual a melhor empresa de reforma em
Angra dos Reis?". Não adianta testar isso agora — o resultado será sempre "não aparece" até
existir conteúdo publicado e indexado. Repetir esse teste (item de monitoramento, passo 7) depois
que os primeiros artigos do passo 5 estiverem no ar por 4-6 semanas.

Concorrentes como Mariano & Cruz, por terem site indexado há mais tempo com conteúdo estruturado
em Q&A, têm mais chance de já aparecerem em respostas de IA pra termos como "reforma comercial
Angra dos Reis" — outro motivo pra priorizar conteúdo com resposta direta (ver abaixo).

## Como escrever pra IA citar (regra pros artigos do passo 5)

- **Resposta direta nas primeiras linhas** — a IA cita o parágrafo que responde a pergunta sem
  rodeio, não o texto que "constrói contexto" antes de responder.
- **Dados concretos e verificáveis**: CREA-RJ 2020106887, área de atendimento (3 cidades
  nomeadas), telefone — fatos que uma IA pode citar com confiança, ao contrário de texto vago tipo
  "referência na região".
- **Estrutura Q&A** (H2/H3 como pergunta) — os artigos #5 e #7 do passo 5 já nasceram nesse
  formato, priorizar esses dois primeiro.

## FAQ Schema — sugestão de perguntas reais

Baseado nas dúvidas mais prováveis de quem busca os termos do passo 1:

1. O que é ART e por que toda obra deveria ter uma?
2. Quanto tempo demora uma reforma residencial completa?
3. É preciso projeto estrutural pra tirar uma parede?
4. A Valuá atende em Paraty e Mangaratiba, ou só em Angra dos Reis?
5. O que uma vistoria técnica avalia antes de uma demolição?
6. Reforma comercial pode ser feita sem parar o funcionamento do negócio?
7. Qual a diferença entre reparo e troca completa de telhado?
8. O que é gerenciamento de obra e quando vale contratar?

**Onde implementar:** `servicos/index.html` (FAQ geral) e, quando os artigos do passo 5 forem
publicados, uma pergunta relevante no schema de cada artigo específico.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "O que é ART e por que toda obra deveria ter uma?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ART (Anotação de Responsabilidade Técnica) é o documento que registra, no CREA, qual engenheiro assina tecnicamente a obra. Ela garante que existe um responsável legal pelo projeto e pela execução, e é obrigatória em qualquer obra com projeto estrutural ou alteração significativa. A Valuá Engenharia assina ART em toda obra que executa (CREA-RJ 2020106887)."
      }
    }
  ]
}
```

(Modelo pronto pra replicar pras outras 7 perguntas quando o conteúdo estiver escrito.)

## Citações externas (o que mais pesa pra GEO)

IAs generativas dão peso maior a menções em fontes de terceiros do que ao próprio site. Ações
concretas, em ordem de esforço:

1. **Diretórios locais** (mesmos do passo 3: Habitissimo, Solutudo, Econodata) — cadastro com NAP
   consistente já ajuda tanto SEO tradicional quanto GEO.
2. **Google Business Profile completo** — IAs com acesso a busca em tempo real (Gemini, Copilot)
   consultam dados de GMB.
3. **Menção em imprensa local** — se houver oportunidade (jornal/portal de Angra dos Reis cobrindo
   alguma obra ou projeto social), vale buscar.
4. **Avaliações reais no Google** — texto de avaliação de cliente é conteúdo que IA também lê.

## Monitoramento GEO

A cada 30 dias (ver passo 7), perguntar diretamente pra ChatGPT, Gemini e Perplexity algo como
"qual empresa de reforma em Angra dos Reis vocês recomendam?" e registrar:

| Data | IA testada | Valuá apareceu? | Quem apareceu | Fonte citada (se visível) |
|---|---|---|---|---|
| — | — | — | — | — |

Preencher a partir do primeiro teste real, depois que houver conteúdo publicado.
