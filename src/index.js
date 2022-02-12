import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./components/App";
import { ContextProvider } from "./context/AppContext";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
