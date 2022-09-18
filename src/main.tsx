import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter basename="/typescript-react-data-structure">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
