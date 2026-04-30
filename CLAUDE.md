# RVM.Portfolio

## Visao Geral

Portfolio pessoal de Rafael Veneroso Morici (`rvmtech.com.br`). Vitrine dos 11 projetos open-source do ecossistema portfolio + sobre, skills, experiencia, contato. Bilingue (PT-BR padrao, EN em `/en/`). Output estatico hospedado em GitHub Pages.

## Stack / Tecnologias

- **Astro 5** — gerador estatico, View Transitions nativas, i18n nativo, prefetch automatico
- **Tailwind CSS 4** — CSS-first, OKLCH, variable variants
- **Motion** — animacoes vanilla (magnetic, parallax, char reveal, IO reveal)
- **Lenis** — smooth scroll
- **Geist + Geist Mono** — variable fonts via Google Fonts
- **TypeScript strict** para `.ts` e `.astro`
- **Astro i18n nativo** — `defaultLocale: 'pt'`, `prefixDefaultLocale: false` → `/` (PT) e `/en/` (EN)
- **OKLCH** para todas as cores

## Estrutura

```
RVM.Portfolio/
├── astro.config.mjs           # config + i18n
├── package.json
├── tsconfig.json
├── CNAME                      # rvmtech.com.br (GitHub Pages)
├── public/
│   ├── CNAME                  # copia para sair em dist/
│   ├── favicon.svg
│   ├── grain.svg
│   └── img/                   # imagens do portfolio
├── src/
│   ├── pages/
│   │   ├── index.astro                  # / (PT)
│   │   ├── projects/[slug].astro        # /projects/{slug}/ (PT, dinamica)
│   │   └── en/
│   │       ├── index.astro              # /en/ (EN)
│   │       └── projects/[slug].astro    # /en/projects/{slug}/ (EN, dinamica)
│   ├── layouts/
│   │   └── Layout.astro                 # head, fonts, view transitions, i18n props
│   ├── components/
│   │   ├── Nav.astro                    # nav + lang switcher
│   │   ├── Footer.astro                 # bilingue
│   │   ├── Hero.astro                   # nome + role + floating tech cards
│   │   ├── About.astro                  # 3 paragrafos + sticky info card
│   │   ├── Skills.astro                 # grid 4 grupos
│   │   ├── Experience.astro             # timeline vertical
│   │   ├── ProjectsGrid.astro           # 11 cards com mouse-light
│   │   ├── Contact.astro                # 3 channels (email, LinkedIn, GitHub)
│   │   ├── NoiseGrain.astro
│   │   ├── AuroraOrbs.astro
│   │   └── CustomCursor.astro
│   ├── data/
│   │   ├── projects.ts                  # type-safe wrapper
│   │   ├── projects-raw.js              # 11 projetos (PT/EN, features, tech, endpoints)
│   │   ├── i18n.ts                      # type-safe wrapper
│   │   └── i18n-raw.js                  # traducoes PT/EN (nav, hero, about, info)
│   ├── styles/
│   │   └── global.css                   # tokens OKLCH + Tailwind 4
│   └── lib/
│       └── motion.ts                    # bootstrap micro-interacoes
└── .github/workflows/
    └── deploy.yml                       # build + GitHub Pages
```

## Convencoes

- **Bilingue:** todo componente que renderiza texto recebe prop `lang: 'pt' | 'en'`. Use `tr(lang, 'chave')` do `i18n.ts` pra textos.
- **Conteudo dos projetos:** editar `src/data/projects-raw.js` (campo `name`, `tagline`, `tagline_en`, `features`, `features_en`, etc.)
- **Adicionar novo projeto:** novo objeto em `PROJECTS` com slug como key. Page detail e gerada automaticamente via `getStaticPaths()`.
- **Workflow de branch:** `task-NNN` -> merge em `master`. Sem branch `dev` (portfolio estatico, baixo risco).
- **Tailwind 4 inline:** `@import "tailwindcss"` em `global.css`. Tokens em `@theme`.
- **CNAME:** ficar em `public/CNAME` para sair em `dist/CNAME` no build (GitHub Pages exige na raiz).

## Como Rodar (local)

```bash
npm install
npm run dev               # http://localhost:4321
npm run build && npm run preview
```

Requer Node 20+.

## Deploy (producao)

1. Push em `master` -> GitHub Actions
2. Job `build`: `npm ci` -> `npm run build` -> upload `dist/` como Pages artifact
3. Job `deploy`: `actions/deploy-pages@v4` publica em `rvmtech.com.br`

DNS: CNAME `rvmtech.com.br` -> `elfarrar.github.io` (Cloudflare/registro). Configurar GitHub Pages no settings do repo: Source = GitHub Actions.

## Decisoes

- **Astro com i18n nativo** — `prefixDefaultLocale: false` mantem `/` para PT (o publico principal e BR) e `/en/` so quando explicito.
- **Data em projects-raw.js mantido como JS** — preserva todo o conteudo PT+EN dos 11 projetos do portfolio antigo sem refatoracao manual. Wrapper `projects.ts` fornece tipagem.
- **GitHub Pages em vez de VPS** — portfolio nao tem dados nem backend, Pages e o caminho mais simples e gratuito. CNAME mantem o dominio proprio.
- **Mesmo design system do RVM.Site** — paleta OKLCH, Geist, motion lib copiados 1:1. Marca visual unificada entre site institucional (rvmit.com.br) e portfolio pessoal (rvmtech.com.br).
- **Project detail dinamica** — `getStaticPaths()` itera em `listProjects()` e gera 11 paginas em PT + 11 em EN no build. Sem rota dinamica em runtime.
