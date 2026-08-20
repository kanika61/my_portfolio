# Kanika Prajapati — Portfolio

A single-page, no-build-step portfolio site. Pure HTML/CSS/JS (no frameworks,
no dependencies) — open `index.html` directly or deploy anywhere.

## Structure
- `index.html` — all page content/sections
- `style.css` — design system (warm terracotta/gold palette pulled from your photo) + all styling
- `script.js` — custom cursor, 3D tilt on hero photo + project cards, scroll reveals, count-up stats
- `assets/kanika-hero.jpg` — your hero photo (optimized for web)
- `assets/Kanika_Prajapati_Resume.pdf` — downloadable from the "Download résumé" button

## Run locally
Just open `index.html` in a browser. For a local dev server (recommended so relative paths behave):

```
cd portfolio
python3 -m http.server 8000
# visit http://localhost:8000
```

## Deploy (free, in ~2 minutes)
**Netlify (easiest):** go to app.netlify.com/drop and drag the whole `portfolio` folder in.

**Vercel:**
```
npm i -g vercel
cd portfolio
vercel
```

**GitHub Pages:**
1. Push this folder to a GitHub repo.
2. Repo Settings → Pages → set source to the `main` branch root.
3. Your site is live at `https://<username>.github.io/<repo>`.

## Customize
- Swap colors in the `:root` block at the top of `style.css`.
- Edit any section's copy directly in `index.html` — it's plain markup, no build step needed.
- Replace `assets/kanika-hero.jpg` with a different photo any time (keep it portrait-oriented for the hero layout).
