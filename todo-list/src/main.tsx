import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import App from "./pages/todo-list";
import { StoreProvider } from "./store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>
);
