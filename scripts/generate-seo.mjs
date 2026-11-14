// Generates public/robots.txt and public/sitemap.xml from site.config.mjs so
// the crawl files always point at the domain the site is actually deployed on.
// Runs automatically via the "predev" and "prebuild" npm scripts.
import { writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE_URL } from '../site.config.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const today = new Date().toISOString().slice(0, 10);

const robots = `# https://${new URL(SITE_URL).host}/robots.txt
User-agent: *
Allow: /

# AI crawlers are welcome — a plain-language summary lives at /llm.txt
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;

writeFileSync(resolve(root, 'public/robots.txt'), robots);
writeFileSync(resolve(root, 'public/sitemap.xml'), sitemap);
console.log(`[seo] robots.txt + sitemap.xml generated for ${SITE_URL}`);
