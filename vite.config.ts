// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually:
//   tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro, componentTagger, env, aliases…
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    // Relative asset URLs so the built site works from any subpath / FTP root.
    base: "./",
  },
  tanstackStart: {
    server: { entry: "server" },
    // Prerender all reachable routes to static HTML for GitHub Pages / FTP hosting.
    prerender: {
      enabled: true,
      crawlLinks: true,
    },
    pages: [{ path: "/" }],
  },
  // Outside a Lovable build, target Nitro's `static` preset so `bun run build`
  // (in CI) emits plain static files under `.output/public/`.
  nitro: { preset: "static" },
});
