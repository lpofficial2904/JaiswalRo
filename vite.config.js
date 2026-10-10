import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const netlifySpaFallback = {
  name: 'netlify-spa-fallback',
  apply: 'build',
  generateBundle() {
    this.emitFile({
      type: 'asset',
      fileName: '_redirects',
      source: '/* /index.html 200\n',
    })
  },
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), netlifySpaFallback],
  server: {
    host: '0.0.0.0',
    hmr: {
      host: 'localhost',
      protocol: 'ws',
      clientPort: 5173,
    },
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
      '/health': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
})
