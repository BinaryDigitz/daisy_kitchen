import { createRoot } from "react-dom/client";
import "./index.css";
import "./my_css.css";
import App from "./App.tsx";
import AdminProvider from "./context/AdminProvider.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <AdminProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AdminProvider>
);
