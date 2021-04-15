import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./src/components/app";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
