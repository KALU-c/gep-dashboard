import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import DotPattern from "./components/magicui/dot-pattern.tsx";
import { cn } from "./lib/utils.ts";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Toaster />
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)] -z-10"
        )}
      />
    </BrowserRouter>
  </React.StrictMode>
);
