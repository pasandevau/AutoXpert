/**
 * Stops Vite from walking up to C:\postcss.config.js (machine-level), which
 * references tailwindcss and breaks this project. Tailwind is applied via
 * @tailwindcss/vite in the Lovable TanStack config — no PostCSS plugins needed here.
 */
export default {
  plugins: {},
};
