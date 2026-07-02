// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually:
//   tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro, componentTagger, env, aliases…
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// The Lovable sandbox forces the Cloudflare Nitro preset (incompatible with
// prerender). The CI GitHub Actions workflow sets NITRO_PRESET=static to
// produce a plain static site with an index.html at the root.
const isStatic = process.env.NITRO_PRESET === "static";

export default defineConfig({
  nitro: isStatic
    ? {
        preset: "static",
        output: { dir: "dist", serverDir: "dist/server", publicDir: "dist/client" },
        prerender: { crawlLinks: true, routes: ["/"] },
      }
    : undefined,
  tanstackStart: isStatic
    ? {
        prerender: { enabled: true, crawlLinks: true },
        pages: [{ path: "/" }],
      }
    : {},
});
