import react from "@vitejs/plugin-react";
import { codeInspectorPlugin } from "code-inspector-plugin";
import { resolve } from "path";
import { defineConfig } from "vite";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    codeInspectorPlugin({
      bundler: "vite",
    }),
  ],
  define: {
    VITE_API_HOST: JSON.stringify(process.env.VITE_API_HOST)
  },
  server: {
    host: "0.0.0.0",
    port: 3001,
  },
  resolve: {
    alias: {
      "@/": `${resolve(__dirname, "src")}/`,
    },
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "app.[hash].js",
        chunkFileNames: "assets/chunk-vendors.[hash].js",
        assetFileNames: "assets/[name].[hash][extname]",
      },
    },
  },
});
