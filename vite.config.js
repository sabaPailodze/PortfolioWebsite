import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (
              id.includes("react") ||
              id.includes("react-dom") ||
              id.includes("react-responsive")
            ) {
              return "react-vendor";
            }
            if (id.includes("axios")) {
              return "axios";
            }
            if (id.includes("lodash")) {
              return "lodash";
            }
            if (id.includes("three") || id.includes("@react-three")) {
              return "three-vendor";
            }
            return "vendor";
          }
        },
      },
    },
  },
});
