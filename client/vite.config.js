import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  publicDir: "public",
  server: {
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
  plugins: [react(), tailwindcss()],
});
