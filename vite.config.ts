// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually:
//   tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro, componentTagger, env, aliases…
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Prerender is only compatible with a non-Cloudflare build. Enable it only when
// the CI GitHub Actions workflow requests a static build (NITRO_PRESET=static).
// The Lovable sandbox forces the Cloudflare preset, which is incompatible with
// the prerender preview-server plugin, so prerender must stay off there.
const enablePrerender = process.env.NITRO_PRESET === "static";

export default defineConfig({
  tanstackStart: enablePrerender
    ? {
        prerender: { enabled: true, crawlLinks: true },
        pages: [{ path: "/" }],
      }
    : {},
});
