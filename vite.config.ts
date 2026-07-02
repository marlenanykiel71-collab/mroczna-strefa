// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually:
//   tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro, componentTagger, env, aliases…
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { writeFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

// The Lovable sandbox forces the Cloudflare Nitro preset (incompatible with
// prerender). The CI GitHub Actions workflow sets NITRO_PRESET=static to
// produce a plain static site with an index.html at the root.
const isStatic = process.env.NITRO_PRESET === "static";

// Nitro writes the server bundle as `dist/server/index.mjs`, but TanStack
// Start's prerender preview plugin imports `dist/server/server.js` (derived
// from the default `server` input name + `.js`). This tiny plugin drops a
// shim after the server build finishes so the preview server can load it.
const serverEntryShim = () => ({
  name: "gh-pages-server-entry-shim",
  applyToEnvironment(env: { name: string }) {
    return env.name === "server";
  },
  closeBundle() {
    const dir = resolve(process.cwd(), "dist/server");
    const src = resolve(dir, "index.mjs");
    const dst = resolve(dir, "server.js");
    if (existsSync(src) && !existsSync(dst)) {
      writeFileSync(dst, `export { default } from "./index.mjs";\n`);
    }
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
