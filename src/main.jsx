import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./Styles/Main.scss";
import ToastProvider from "./Components/Contexts/ToastProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastProvider>
      <App />
    </ToastProvider>
  </React.StrictMode>
);
