import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
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
