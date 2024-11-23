import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      '/api': {
        changeOrigin: true,             // For virtual hosted sites
        rewrite: (path) => path.replace(/^\/api/, 'http://localhost:5000'), // Optional: rewrite API path
      },
    }
  }
})  