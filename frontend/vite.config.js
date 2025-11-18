import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Redireciona requisições iniciadas por /api para o backend em http://localhost:3001
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
        // mantém o caminho /api no destino; ajuste se o backend usar outro prefixo
        rewrite: (path) => path
      }
    }
  }
})
