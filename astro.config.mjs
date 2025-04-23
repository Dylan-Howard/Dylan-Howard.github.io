import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  site: "https://dylan-howard.github.io",
  integrations: [compress(), sitemap()],
});
