import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    allowedHosts: ['jorgedelgadillo.com', "portfolio-reacjsportfolio-pympdv-b19e2e-31-97-131-190.traefik.me"],
  },
})
