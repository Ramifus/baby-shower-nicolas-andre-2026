// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // hace falta para que las etiquetas og: salgan con URL absoluta
  site: "https://baby-shower-nicolas-andre-2026.vercel.app",
  vite: {
    plugins: [tailwindcss()]
  }
});