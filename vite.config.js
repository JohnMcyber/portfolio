import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base must match the GitHub repo name so built asset URLs resolve
// correctly when served from https://<username>.github.io/portfolio/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})
