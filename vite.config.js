import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['gelding-needed-equally.ngrok-free.app'] // '.ngrok-free.app' oppure all
  }
})
