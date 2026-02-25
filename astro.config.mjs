import sitemap from "@astrojs/sitemap";
import { defineConfig } from 'astro/config';
import compress from "astro-compress";
import mdx from '@astrojs/mdx';

// Exclude any pages that shouldn't be indexed
const sitemapConfig = {
  filter: (page) => !page.includes('/404'),
}

export default defineConfig({
  compressHTML: true,
  site: "https://dylan-howard.github.io",
  integrations: [
    compress(),
    sitemap(sitemapConfig),
    mdx()],
  output: 'static',
  // build: {
  //   inlineStylesheets: 'auto',
  // },
  // image: {
  //   service: {
  //     entrypoint: 'astro/assets/services/sharp'
  //   }
  // }
});
