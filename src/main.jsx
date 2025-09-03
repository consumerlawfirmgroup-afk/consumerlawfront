import * as React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { HeroUIProvider } from "@heroui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HeroUIProvider>
      <main className="dark text-foreground bg-background">
        <App />
      </main>
    </HeroUIProvider>
  </React.StrictMode>
);
