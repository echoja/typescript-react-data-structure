import codesandbox from "@gsimone/codesandbox-vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/typescript-react-data-structure/",
  plugins: [react(), codesandbox()],
});
