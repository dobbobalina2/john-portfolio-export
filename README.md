# John Kenny portfolio

Next.js portfolio for John Kenny’s AI/ML, computer vision, and software engineering work.

## Run locally

```sh
npm ci
npm run dev -- --hostname 127.0.0.1 --port 3012
```

Open http://127.0.0.1:3012. For a production preview, run `npm run build`, then
`npm run start -- --hostname 127.0.0.1 --port 3012`. The existing `next/font/google`
setup fetches Space Grotesk and IBM Plex Mono at build time, so the initial build needs network access.

## Edit content

- `src/lib/portfolio.js`: profile, skills, experience, project summaries and evaluation scope.
- `src/app/portfolio/page.jsx`: AI/ML project notes and selected software projects.
- `src/app/about/page.jsx`: resume-based career history and skills.
- `public/resume/John_Kenny_AI_ML_Resume.docx`: exact supplied resume, served as a download.

The home and contact pages use direct email links. There is no contact submission service.
Do not present a successful send unless a real delivery service confirms it.

The older NFT interface demo remains at `/portfolio/project` as a separate demo.

## Project wiki

See [content sources and editorial rules](docs/content-sources.md) for the source of
public claims, distinctions between experiments and releases, and update guidance.
See [visual direction](docs/visual-direction.md) for the portfolio's typography,
color, layout, and accessibility conventions.

Build output belongs in the ignored `.next/` directory, never in commits.
This update is intended for local review; pushing or deploying is a separate action.
