/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "node:path";

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@views": path.resolve(__dirname, "src/views"),
      "@constants": path.resolve(__dirname, "src/constants"),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/setupTests.ts"],
    // MUI imports react-transition-group via an extensionless directory path
    // that Node's native ESM resolver rejects; inline it so Vite resolves it.
    server: { deps: { inline: ["@mui/material"] } },
  },
});
