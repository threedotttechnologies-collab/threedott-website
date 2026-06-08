import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("react-phone-input-2")) return "phone-input";
          if (id.includes("node_modules/gsap")) return "gsap";
        },
      },
    },
  },
})
