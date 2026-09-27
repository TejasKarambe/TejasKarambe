import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// IMPORTANT for GitHub Pages:
// If you deploy to https://<username>.github.io/<repo-name>/,
// set base to "/<repo-name>/" (with leading and trailing slashes).
// If you deploy to https://<username>.github.io/ (a user/org root site),
// leave base as "/".
export default defineConfig({
  plugins: [react()],
  base: "/",
});
