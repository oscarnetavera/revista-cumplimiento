import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),  tailwindcss(),],
  base: 'https://oscarnetavera.github.io/revista-cumplimiento/',
    build: {
    chunkSizeWarningLimit: 1000 // Aumenta el límite de advertencia a 1000 KB
  }
})
