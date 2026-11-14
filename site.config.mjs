// Single source of truth for the deployed URL.
// Change this one value (or set the SITE_URL env var at build time) and the
// canonical link, Open Graph tags, JSON-LD, robots.txt and sitemap.xml all
// follow automatically.
export const SITE_URL = (process.env.SITE_URL || 'https://wrightgichana.netlify.app').replace(
  /\/+$/,
  '',
);

export const SITE_NAME = 'Wright Gichana';
export const SITE_TITLE = 'Wright Gichana — Full-Stack Developer in Nairobi';
export const SITE_DESCRIPTION =
  'Full-stack web developer in Nairobi building fast, accessible websites and web apps with React, Node.js, Express and MongoDB. Available for hire.';
