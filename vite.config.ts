import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// test
export default defineConfig({
  plugins: [react()],
  base: "/portfolio-site/" 
})
