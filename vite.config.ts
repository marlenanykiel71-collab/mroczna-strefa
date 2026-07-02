// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually:
//   tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro, componentTagger, env, aliases…
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// A prerender-based static export is not viable in the Lovable sandbox
// (Cloudflare preset is forced) nor reliably in CI (server-entry shape
// mismatch). The static gh-pages deploy uses a hand-rolled `public/index.html`
// instead — it is copied verbatim into `dist/client/` on every build, so the
// TanStack Start / Nitro configuration stays untouched.
export default defineConfig({});
