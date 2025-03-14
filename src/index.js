import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

//import React from "react";
//import ReactDOM from "react-dom";
//import App from "./components/App";
//import "./../public/styles.css";

//ReactDOM.render(<App />, document.getElementById("root"));
