// import { defineConfig } from "vite";
// import tailwindcss from "@tailwindcss/vite";
// import react from "@vitejs/plugin-react";
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
// });

import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react")) return "react";
            if (id.includes("axios")) return "axios";
            if (id.includes("lodash")) return "lodash";
            return "vendor";
          }
        },
      },
    },
  },
});
