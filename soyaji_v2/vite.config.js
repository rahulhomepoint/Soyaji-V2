import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: ["c9df4be37c1a.ngrok-free.app"],
  },
  plugins: [react(), tailwindcss()],
});
