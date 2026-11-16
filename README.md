# pliniomartos.dev — Portfolio

Personal portfolio for **Plinio Hernandez Martos** (BEng Software Engineering student, Edinburgh).
Static HTML, CSS and vanilla JavaScript — no build step, no bundler, no external JS dependencies.

## Structure

- `index.html` — Homepage (Hero, About, Featured projects, Education, Technical skills, Experience, Contact)
- `projects/sustain-energy.html` — HND Graded Unit project page
- `projects/ec-cinema.html` — HNC final project page (links to the public `cinema-hnc` repo)
- `projects/bus-network.html` — BEng desktop route-planner project page
- `projects/ai-ml-modules.html` — BEng Python AI / ML coursework page
- `404.html` — Custom not-found page for GitHub Pages
- `css/styles.css` — Light/dark theme tokens, layout, components and responsive styles
- `js/main.js` — Accessible mobile navigation, optional light/dark theme toggle and footer year
- `assets/Plinio_Hernandez_Martos_CV.pdf` — Downloadable CV
- `assets/favicon.svg` — Site icon
- `assets/screenshots/` — Directory for future project screenshots
- `CNAME` — Custom domain (`pliniomartos.dev`)
- `robots.txt` & `sitemap.xml` — Search engine directives for `https://pliniomartos.dev`

## Local preview

Open `index.html` in a browser, or serve the site root locally:

```bash
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Replacing screenshot placeholders

The homepage cards and project detail pages currently use styled `.shot` window placeholders. When you are ready to add real screenshots:

1. Save screenshots (suggested ~1600×1000 or 1600×900 PNG/WebP) under `assets/screenshots/` using these exact filenames:
   - `assets/screenshots/sustain-energy.png`
   - `assets/screenshots/ec-cinema.png`
   - `assets/screenshots/bus-network.png`
   - `assets/screenshots/ai-ml-modules.png`
2. On `index.html`, replace the `<div class="shot ...">...</div>` inside each `.project-card` with:

   ```html
   <img class="shot-img"
        src="assets/screenshots/ec-cinema.png"
        alt="EC Cinema booking interface showing film listings and checkout"
        width="1600" height="1000"
        loading="lazy">
   ```

3. On each `projects/*.html` page, replace the `<div class="shot shot--lg ...">...</div>` inside `.detail-shot` with:

   ```html
   <img class="shot-img shot-img--lg"
        src="../assets/screenshots/ec-cinema.png"
        alt="EC Cinema booking interface showing film listings and checkout"
        width="1600" height="900">
   ```

## Deploy on GitHub Pages (with Cloudflare DNS)

1. Create a public GitHub repository — preferably a user site repo named `pliniomartos.github.io` (or a project repo; relative paths are used throughout so both work).
2. Push the contents of this folder to the `main` branch so `index.html` sits at the repository root (not inside a nested `portfolio/` folder).
3. In the GitHub repository go to **Settings → Pages**:
   - Source: **Deploy from a branch**
   - Branch: `main`, folder: `/ (root)`
   - Custom domain: `pliniomartos.dev` (matches the existing `CNAME` file)
4. In **Cloudflare DNS** for `pliniomartos.dev`, configure the required records as **DNS-only (grey cloud)** — do **not** proxy them through Cloudflare (orange cloud interferes with GitHub Pages TLS verification):

   | Type | Name | Target / IPv4 | Proxy status |
   |------|------|---------------|--------------|
   | `A` | `@` | `185.199.108.153` | DNS-only (grey cloud) |
   | `A` | `@` | `185.199.109.153` | DNS-only (grey cloud) |
   | `A` | `@` | `185.199.110.153` | DNS-only (grey cloud) |
   | `A` | `@` | `185.199.111.153` | DNS-only (grey cloud) |
   | `CNAME` | `www` | `pliniomartos.github.io` | DNS-only (grey cloud) |

   *(Optional IPv6 `AAAA` records for `@`: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`, also DNS-only.)*

5. Once DNS has propagated and GitHub issues the TLS certificate, tick **Enforce HTTPS** in **Settings → Pages**.

## Updating the CV download

Replace `assets/Plinio_Hernandez_Martos_CV.pdf` using the exact same filename so all download links remain valid.

## Privacy notes

- No phone number is included anywhere on the site.
- Only `https://github.com/pliniomartos/cinema-hnc` is linked publicly.
- Sustain Energy, Bus Network App and AI / ML modules remain private and state **Code available on request**.
