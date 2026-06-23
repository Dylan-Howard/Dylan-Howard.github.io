import sitemap from "@astrojs/sitemap";
import { defineConfig } from 'astro/config';
import compress from "astro-compress";
import mdx from '@astrojs/mdx';

import cloudflare from "@astrojs/cloudflare";

// Exclude any pages that shouldn't be indexed
const sitemapConfig = {
  filter: (page) => !page.includes('/404'),
}

export default defineConfig({
  compressHTML: true,
  site: "https://dylanlhoward.com",

  integrations: [
    compress(),
    sitemap(sitemapConfig),
    mdx()],

  // build: {
  //   inlineStylesheets: 'auto',
  // },
  // image: {
  //   service: {
  //     entrypoint: 'astro/assets/services/sharp'
  //   }
  // }
  output: 'static',

  adapter: cloudflare()
});