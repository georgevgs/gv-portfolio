import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://vagdas.eu",
  vite: {
    plugins: [tailwindcss()],
  },
  output: "static",
  adapter: vercel(),
});
