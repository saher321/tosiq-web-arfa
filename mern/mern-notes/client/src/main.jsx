import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Routes from "./routes/Routes";
import { Toaster } from "react-hot-toast";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster />
    <main className="min-h-screen bg-amber-100">
      <Routes />
    </main>
  </StrictMode>
);
