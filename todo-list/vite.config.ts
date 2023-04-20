import federate from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federate({
      name: "todoListApp",
      filename: "todoList.js", // output
      exposes: {
        "./TodoList": "./src/pages/todo-list",
        "./TodoStore": "./src/store",
      },
      shared: ["react", "react-dom", 'react-redux', '@reduxjs/toolkit'],
    }),
  ],
  build: {
    // modulePreload: false,
    target: "esnext",
    // minify: false,
    cssCodeSplit: false, // allow css to be inlined in js, so that it can be shared
  },
});
