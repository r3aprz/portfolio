import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  ...(command === 'serve' && {
    server: {
      allowedHosts: ['gelding-needed-equally.ngrok-free.app']
    }
  })
}))