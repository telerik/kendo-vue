import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
  plugins: [vue(), vueJsx()],

  server: {
    port: 3030,
    host: "localhost",
  },

  build: {
    outDir: "dist",
    commonjsOptions: { transformMixedEsModules: true },
    chunkSizeWarningLimit: 4096,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("/node_modules/cldr-")) {
            return "cldr";
          }
          if (id.includes("/node_modules/@progress/kendo-charts")) {
            return "kendo-charts";
          }
          if (id.includes("/node_modules/")) {
            return "vendor";
          }
        },
      },
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
      },
    },
  },
});
