import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Blue-Visuals/',   // <--- GANZ WICHTIG
  plugins: [react()],
})
