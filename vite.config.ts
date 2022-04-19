import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      css: path.resolve(__dirname, "./src/css"),
      components: path.resolve(__dirname, "./src/components"),
    },
  },
});
