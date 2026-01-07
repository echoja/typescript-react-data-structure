import codesandbox from "@gsimone/codesandbox-vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // @gsimone/codesandbox-vite-plugin v0.0.2 has ESM export issues with type: module
    // Using conditional to handle both default and named exports
    codesandbox.default ? codesandbox.default() : codesandbox(),
  ],
});
