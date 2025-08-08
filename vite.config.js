import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/my-portfolio/',
  plugins: [react()],
  build: {
    outDir: 'docs',  // Changed from 'dist' to 'docs'
    assetsDir: 'assets',
    sourcemap: false
  },
  server: {
    port: 3000,
    open: true
  }
})