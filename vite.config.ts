// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// Netlify: NETLIFY=true during Netlify CI loads @netlify/vite-plugin-tanstack-start and skips Cloudflare build output.
// Dynamic import keeps `vite dev` working before that optional devDependency is installed locally.
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const netlifyCi = process.env.NETLIFY === "true";
const netlifyPlugins = netlifyCi
  ? [await import("@netlify/vite-plugin-tanstack-start").then((m) => m.default())]
  : [];

export default defineConfig({
  cloudflare: netlifyCi ? false : undefined,
  plugins: netlifyPlugins,
});
