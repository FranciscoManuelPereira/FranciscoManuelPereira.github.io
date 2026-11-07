// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://franciscomanuelpereira.github.io',
  integrations: [sitemap()],
  build: {
    // Keep CSS in external files so the Content-Security-Policy can forbid inline styles.
    inlineStylesheets: 'never',
  },
  markdown: {
    // Shiki writes inline style attributes, which style-src 'self' would block.
    syntaxHighlight: false,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
