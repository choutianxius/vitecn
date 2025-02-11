import path from "path";
import { defineConfig } from "vite";
import reactPlugin from "@vitejs/plugin-react";
import tailwindcssPlugin from "@tailwindcss/vite";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    reactPlugin({
      babel: {
        plugins: [["babel-plugin-react-compiler", {}]],
      },
    }),
    tailwindcssPlugin(),
  ],
});
