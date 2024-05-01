import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "./components/Button";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Button>
      <span>Click me</span>
    </Button>
  </React.StrictMode>,
);
