import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import path from 'path'
import { SITE_URL } from './site.config.mjs'

// Injects the deployed URL into index.html and adds the Google Search Console
// verification meta tag only when GOOGLE_SITE_VERIFICATION is set.
function siteMetaPlugin() {
  return {
    name: 'site-meta',
    transformIndexHtml(html) {
      const token = process.env.GOOGLE_SITE_VERIFICATION
      return html
        .replaceAll('%SITE_URL%', SITE_URL)
        .replace(
          '%GOOGLE_VERIFICATION%',
          token ? `<meta name="google-site-verification" content="${token}" />` : '',
        )
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    siteMetaPlugin(),
    // Compress and strip metadata from every image that ends up in the
    // build (imported assets + anything in /public), so the site ships
    // web-sized WebP/AVIF-friendly files instead of 2–9 MB originals.
    ViteImageOptimizer({
      test: /\.(jpe?g|png|gif|tiff|webp|avif|svg)$/i,
      includePublic: true,
      logStats: true,
      png: {
        quality: 80,
        compressionLevel: 9,
      },
      jpeg: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
      webp: {
        quality: 80,
        lossless: false,
        nearLossless: false,
      },
      avif: {
        quality: 70,
        lossless: false,
      },
      svg: {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                // keep the favicon's viewBox intact
                removeViewBox: false,
              },
            },
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
