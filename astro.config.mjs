import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://blog-astro-tutorialsrc.netlify.app/",
  prefetch: true,
  integrations: [preact()]
});