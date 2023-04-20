import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "blank-plataform",
      remotes: {
        TodoListApp: "http://localhost:3001/assets/todoList.js",
      },
      shared: ["react", "react-dom", 'react-redux', '@reduxjs/toolkit'],
    }),
  ],
  build: {
    //   modulePreload: false,
    target: "esnext",
    //   minify: false,
  },
});
