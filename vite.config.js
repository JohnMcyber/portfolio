import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// A custom domain (cdjohn.com) is served at the site root, not under
// /portfolio/, so base must be '/'. See public/CNAME for the domain
// GitHub Pages will serve.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
