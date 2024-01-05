import "./styles.css";

import ReactDOM from "react-dom/client";
import App from "./App";
import ModeProvider from "./contexts/ModeProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ModeProvider>
    <App />
  </ModeProvider>
);
