import "./index.css";

import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import CostProvider from "./contexts/CostProvider";
import { Toaster } from "sonner";
import AppRouter from "./AppRouter";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <NextUIProvider>
      <CostProvider>
        <AppRouter />
        <Toaster
          theme="dark"
          toastOptions={{
            duration: 1000,
          }}
        />
      </CostProvider>
    </NextUIProvider>
  </BrowserRouter>
);
