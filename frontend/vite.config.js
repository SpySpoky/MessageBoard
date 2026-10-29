import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    // Requests to /api go to the Express backend
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
})
