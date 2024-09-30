import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

const deviceType = "tablet";
const rootElement = document.getElementById("root");

if (rootElement) {
  rootElement.className = deviceType;

  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
