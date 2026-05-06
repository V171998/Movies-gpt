import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Allow JSX syntax in .js files
      include: /\.(js|jsx|ts|tsx)$/
    }),
    tailwindcss(),
  ],
});
