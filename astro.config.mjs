import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  vite: {
    resolve: {
      alias: {
        '@': '/src',  // Esto le dice a Vite que "@" apunte a la carpeta "src"
      },
    },
  },
});