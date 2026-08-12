import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    // Com páginas em subpastas, imports relativos viram '../../..'.
    // O alias mantém todo import absoluto a partir de src/.
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 5173,
    // A API Go ainda não tem CORS configurado. O proxy faz o browser enxergar
    // tudo na mesma origem em desenvolvimento, então não há preflight.
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
})
