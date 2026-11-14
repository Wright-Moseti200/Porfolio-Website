# Getting indexed by Google

The technical work is already in place. What remains is telling Google the site
exists — that happens once, in Search Console.

## What is already done in this repo

| Signal | Where |
| --- | --- |
| Crawlable `robots.txt` with `Sitemap:` line | generated from `site.config.mjs` → `public/robots.txt` |
| `sitemap.xml` with the live URL and `lastmod` | generated → `public/sitemap.xml` |
| `<meta name="robots" content="index, follow, max-image-preview:large">` | `index.html` |
| Canonical URL | `index.html` (`%SITE_URL%` token) |
| Open Graph + Twitter card image (1200×630) | `public/og.jpg` |
| JSON-LD: `Person`, `WebSite`, `ProfilePage`, `ItemList` | `index.html` |
| Semantic `header` / `nav` / `main` / `footer`, h1 → h2 → h3 | React components |
| Descriptive `alt` text on every image | `src/lib/site.js` + pages |
| Fast LCP (eager, high-priority portrait), lazy images | `src/pages/hero.jsx`, project cards |
| Mobile-friendly, no horizontal overflow | verified at 375 px |
| `llm.txt` summary for AI crawlers | `public/llm.txt` |

## Step 1 — set the real domain

Edit `site.config.mjs`:

```js
export const SITE_URL = 'https://your-real-domain.com';
```

That single value is injected into the canonical link, Open Graph tags, JSON-LD,
`robots.txt` and `sitemap.xml` at build time. You can also set the `SITE_URL`
environment variable in Netlify/Vercel instead of editing the file.

## Step 2 — deploy

```bash
npm run build     # regenerates robots.txt + sitemap.xml, then builds
```

Deploy the `dist/` folder. Confirm these return 200 in a browser:

- `https://your-domain/`
- `https://your-domain/robots.txt`
- `https://your-domain/sitemap.xml`

## Step 3 — verify the site in Google Search Console

1. Go to <https://search.google.com/search-console> and add a **URL-prefix**
   property for your domain.
2. Choose **HTML tag** verification and copy the `content` value from the tag
   Google gives you.
3. Set it as an environment variable for the build:

   ```bash
   GOOGLE_SITE_VERIFICATION=your-token-here npm run build
   ```

   or add `GOOGLE_SITE_VERIFICATION` in your host's build environment
   variables. The build injects
   `<meta name="google-site-verification" content="…">` into the page.
4. Deploy and click **Verify**.

DNS verification also works if you prefer not to rebuild.

## Step 4 — submit the sitemap

In Search Console → **Indexing → Sitemaps**, submit:

```
https://your-domain/sitemap.xml
```

Then use **URL Inspection → Request indexing** on the homepage. First
crawls usually take a few days; indexing can take 1–3 weeks for a new domain.

## Step 5 — after launch

- Add the site link to your GitHub profile, LinkedIn, and any project READMEs —
  backlinks are the biggest ranking factor for a personal site.
- Keep `llm.txt` and project descriptions up to date; the JSON-LD `ItemList`
  is generated from the project data.
- Re-run `npm run build` after content changes so `lastmod` in the sitemap
  updates.
- Check **Search Console → Enhancements** to confirm the Person/ProfilePage
  structured data is valid.
