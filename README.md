# Eruri Kiriku — Portfolio

A single-page portfolio site for **Eruri Kiriku**, private sports-car broker.
Built as a static site for hosting on **GitHub Pages**.

## File structure

```
eruri-kiriku-portfolio/
├── index.html        # the page
├── styles.css        # all styling
├── script.js         # nav + reveal animations + form
├── assets/
│   └── favicon.svg   # browser tab icon
└── README.md         # this file
```

No build step, no dependencies. Open `index.html` in a browser and it works.

## Deploy to GitHub Pages

### Option A — user/organisation site (yourname.github.io)

1. Create a new repository on GitHub named exactly `yourusername.github.io`
   (replace `yourusername` with your GitHub username).
2. Upload **the contents** of this folder (not the folder itself) to the
   repository root. The `index.html` must sit at the top of the repo.
3. Go to **Settings → Pages**. Under *Build and deployment*, set the
   source to **Deploy from a branch**, branch `main`, folder `/ (root)`,
   and save.
4. Visit `https://yourusername.github.io` — usually live within a minute.

### Option B — project site (yourname.github.io/repo-name)

1. Create a repository with any name, e.g. `eruri-portfolio`.
2. Upload the files (or push from local).
3. **Settings → Pages → Source:** `main` branch, `/ (root)`.
4. Visit `https://yourusername.github.io/eruri-portfolio/`.

### From the command line

```bash
cd eruri-kiriku-portfolio
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOURUSER/YOURREPO.git
git push -u origin main
```

Then enable Pages in repository settings as above.

## Customising

| What                | Where to change                                                          |
|---------------------|--------------------------------------------------------------------------|
| Owner name / tagline | `index.html` — search for "Eruri Kiriku"                                |
| Contact email        | `index.html` — search for "eruri@kiriku.auto"                           |
| Colours              | `styles.css` — `:root` block at the top (`--accent`, `--ink`, etc.)     |
| Cars in inventory    | `index.html` — `<section class="inventory">` block, duplicate `<article class="car">` |
| Stats numbers        | `index.html` — `<section class="stats">`                                |
| Photos               | Replace the `https://images.unsplash.com/...` URLs in `index.html`      |

### Using your own photos

1. Drop image files into the `assets/` folder.
2. Replace the Unsplash URLs in `index.html` with `assets/yourfile.jpg`.
3. Recommended size: 1200–1400 px wide, JPG/WebP, < 300 KB each.

## Notes

- The contact form does **not** send email (GitHub Pages is static-only).
  It shows a confirmation message on submit. To make it functional, point
  it at a service like [Formspree](https://formspree.io),
  [Getform](https://getform.io), or [Web3Forms](https://web3forms.com) by
  changing the `<form>` tag's `action` attribute.
- Fonts are loaded from Google Fonts; no installation needed.
- Mobile-responsive down to ~360 px wide.
- The film-grain overlay and marquee animations respect
  `prefers-reduced-motion`.

## License

Code is yours to use and modify. Photos are from Unsplash under their
[free license](https://unsplash.com/license) — swap for owned imagery
before commercial use.
