// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually:
//   tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro, componentTagger, env, aliases…
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { writeFileSync, existsSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";
import type { Plugin } from "vite";

// The Lovable sandbox forces the Cloudflare Nitro preset (incompatible with
// prerender). CI (GitHub Actions) sets NITRO_PRESET=static to produce a plain
// static site with index.html at the root.
const isSandbox = !!process.env.LOVABLE_SANDBOX || !!process.env.SANDBOX;
const isStatic = process.env.NITRO_PRESET === "static" && !isSandbox;

// TanStack Start's prerender preview server imports `dist/server/server.js`,
// but Nitro writes `dist/server/index.mjs`. Drop a tiny shim after every
// bundle write so the prerender step can load it.
const serverEntryShim = (): Plugin => ({
  name: "gh-pages-server-entry-shim",
  writeBundle() {
    const dir = resolve(process.cwd(), "dist/server");
    const src = resolve(dir, "index.mjs");
    const dst = resolve(dir, "server.js");
    if (!existsSync(src)) return;
    mkdirSync(dir, { recursive: true });
    writeFileSync(dst, `export { default } from "./index.mjs";\n`);
  },
});

export default defineConfig({
  vite: isStatic ? { plugins: [serverEntryShim()] } : undefined,
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
