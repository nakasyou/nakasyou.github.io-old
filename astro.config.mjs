import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue(),
    tailwind(),
    mdx(),
    sitemap(),
  ],
  site: 'https://nakasyou.github.io',
  base: '/nakasyou.github.io-old'
});
