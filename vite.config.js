import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // CAMBIO CLAVE: Usamos './' para rutas relativas.
  // Esto funciona en cualquier subcarpeta (como /JUSTICE/) automáticamente.
  base: "./", 
})