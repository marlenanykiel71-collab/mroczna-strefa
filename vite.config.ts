// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually:
//   tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro, componentTagger, env, aliases…
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// The Lovable sandbox forces the Cloudflare Nitro preset, which is
// incompatible with TanStack Start's prerender preview server. Enable the
// static/prerender build only in CI (GitHub Actions sets NITRO_PRESET=static
// and there is no LOVABLE_SANDBOX / SANDBOX env var).
const isSandbox = !!process.env.LOVABLE_SANDBOX || !!process.env.SANDBOX;
const isStatic = process.env.NITRO_PRESET === "static" && !isSandbox;

export default defineConfig({
  nitro: isStatic
    ? {
        preset: "static",
        output: { dir: "dist", serverDir: "dist/server", publicDir: "dist/client" },
      }
    : undefined,
  tanstackStart: isStatic
    ? {
        prerender: { enabled: true, crawlLinks: true },
        pages: [{ path: "/" }],
      }
    : {},
});
