# luiscardena.com

Personal site and SDET consulting homepage for Luis Cardeña.

Static site built with [Astro](https://astro.build) and Tailwind CSS v4, deployed
to GitHub Pages. Every page is pre-rendered HTML, so it loads fast and search
engines can read all of it.

---

## Running it locally

Requires **Node 22.23.4 or newer** (there's an `.nvmrc`):

```bash
nvm use          # picks up .nvmrc
npm install
npm run dev      # http://localhost:4321
```

| Command           | What it does                           |
| ----------------- | -------------------------------------- |
| `npm run dev`     | Dev server with hot reload             |
| `npm run build`   | Production build into `dist/`          |
| `npm run preview` | Serve the built `dist/` locally        |
| `npm run check`   | Type-check the Astro components        |

---

## Editing the content

**Almost everything lives in one file: [`src/data/site.ts`](src/data/site.ts).**
Services, case studies, the experience timeline, projects, FAQ, the pain-point
ticker and your contact details are all plain arrays in there. Change the text,
save, and the pages update. You should rarely need to touch a component.

### Things still marked TODO

These are deliberately left blank. Each one degrades gracefully — the link
either falls back to email or hides itself entirely, so nothing 404s while
it's unset.

| Field in `site.ts` | What to do |
| --- | --- |
| `booking` | Create a free [Cal.com](https://cal.com) link and paste it. Until then, "Book a call" opens an email instead. |
| `intakeForm` | A Google Form / Tally / Typeform URL for project briefs. Falls back to email. |
| `resume` | Put a PDF at `public/luis-cardena-sdet.pdf`, then set this to `/luis-cardena-sdet.pdf`. While empty, the download links are hidden. |
| `services[].price` | Each service has an empty `price`. Fill them in and the figure renders; leave blank and it shows "ask for a quote". |

### A note on client confidentiality

Every employer and client is described **by sector, never by name** — see the
`caseStudies` and `experience` arrays. Nothing is named, including the
open-source work, so that no single entry stands out as the one being hidden.
If you add a case study, keep to that pattern.

Your own builds carry `personal: true`, which renders a "Personal project"
badge instead of "Confidential". Use it for anything you built in your own
time, so it can never be mistaken for client work.

---

## How the pages are built

```
src/
├─ data/site.ts          ← all content lives here
├─ layouts/Base.astro    ← <head>, SEO meta, JSON-LD, nav + footer
├─ components/
│  ├─ Nav.astro          ← sticky header with mobile menu
│  ├─ Footer.astro
│  ├─ Section.astro      ← section wrapper; pass as="h1" for a page's main heading
│  ├─ PainPoints.astro   ← the "what teams call me about" list
│  ├─ ProjectCard.astro  ← renders without a link when a repo is private
│  ├─ CtaBlock.astro     ← the four calls to action
│  └─ FaqList.astro
└─ pages/
   ├─ index.astro        ├─ work.astro      ├─ contact.astro
   ├─ services.astro     ├─ projects.astro  └─ 404.astro
   └─ about.astro
```

**One `<h1>` per page.** The page's opening `<Section>` passes `as="h1"`;
every other heading is an `<h2>`. Keep it that way — it matters for search.

### Design

Light, clean, high-contrast: white paper, near-black text, a single
deep-green accent (`--color-accent`). All colour and type tokens are defined
in `src/styles/global.css` under `@theme` — change them there, not in
component classes. There is deliberately no monospace type and no dark mode;
the palette is tuned for recruiters and hiring managers reading quickly,
rather than for a developer audience.

**Type** is IBM Plex Sans for text and IBM Plex Serif for headlines — chosen
because it carries engineering precision without the terminal cliché, and
because it is not the Inter + Instrument Serif pairing every template now
ships. Two alternate presets (Schibsted Grotesk; Fraunces + Public Sans) are
documented in the `@theme` block of `global.css`. Swapping one means changing
two CSS variables and the Google Fonts href in `src/layouts/Base.astro`.
Note that the display scale is tuned to Plex Serif's width — a narrower face
will want `--text-mega` raised again.

### Availability mode

`availability` at the top of `src/data/site.ts` is a single switch
(`"discreet" | "open"`) controlling every signal about whether you're looking
for work: the hero label, the primary button wording, the nav button, closing
sections and one FAQ entry. Leave it on `"discreet"` while you're in a role.

### The projects page pulls live data

`src/pages/projects.astro` fetches your repo list from the GitHub API **at build
time** to add star counts and last-updated dates. If GitHub is unreachable or
rate-limits the runner, it logs a warning and renders the curated list from
`site.ts` instead, so the build never fails because of it.

A repo marked `private: true` renders as a card with a "Private" badge and no
link. Flip it to `false` once the repo is public.

---

## Deploying

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes it to GitHub Pages.

**One-time setup:** in the repo, go to **Settings → Pages → Build and
deployment**, and set **Source** to **GitHub Actions**. (Not "Deploy from a
branch" — that's the old way and won't run the workflow.)

### The custom domain

The site is already configured for **luiscardena.com**: `public/CNAME`,
`astro.config.mjs`, `public/robots.txt` and the `domain` constant at the top
of `src/data/site.ts` all point at it, and the contact address is derived as
`info@luiscardena.com`.

**Two things must be true before you deploy this**, or the site will be
unreachable and the contact address will bounce:

1. `luiscardena.com` is registered, with DNS pointing at GitHub Pages —
   four `A` records for the apex (`185.199.108.153`, `.109.153`, `.110.153`,
   `.111.153`), plus a `CNAME` on `www` to `luisecm.github.io`. Then set the
   custom domain in **Settings → Pages** and tick **Enforce HTTPS**.
2. `info@luiscardena.com` receives mail. A forward to your Outlook address
   from the registrar is enough and usually free.

Not ready yet? Set `domain` in `src/data/site.ts` back to
`"luisecm.github.io"`, delete `public/CNAME`, and revert the two URLs in
`astro.config.mjs` and `public/robots.txt`. The contact address follows the
`domain` constant, so it reverts with it.

---

## SEO, already wired up

- Pre-rendered static HTML on every route
- Canonical URLs, Open Graph and Twitter card meta
- `Person` and `ProfessionalService` JSON-LD structured data
- `sitemap-index.xml` generated at build, referenced from `robots.txt`
- Social preview image at `public/og.png` (1200×630)

`public/og-source.svg` is the editable source for that preview image. After
changing it, regenerate the PNG with:

```bash
qlmanage -t -s 1200 -o . public/og-source.svg
sips -c 630 1200 og-source.svg.png --out public/og.png
rm og-source.svg.png
```

The SVG is deliberately a 1200×1200 square with the artwork centred in a
1200×630 band, because `qlmanage` only renders square thumbnails — the crop then
lands exactly on the artwork.

---

## Getting found

The site is built to rank, but a static site alone won't bring traffic. The
things that actually move it:

1. **Point your profiles at it.** GitHub profile README and the website
   field on your GitHub bio.
2. **Submit the sitemap** to [Google Search Console](https://search.google.com/search-console)
   — this is the single highest-value thing to do after launch.
3. **Write.** A `/notes` or `/blog` section on the problems in the FAQ (flaky
   tests, mobile automation, CI speed) is what earns search traffic over time.
   Those are real queries people search for.
4. **Add analytics** if you want to see what's working —
   [Plausible](https://plausible.io) or [Umami](https://umami.is) are
   privacy-friendly and need one script tag in `Base.astro`.
