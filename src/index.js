import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./root";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div
      style={{
        height: "100vh",
        background: "linear-gradient(#88bad9, #3394ce)",
      }}
    >
      <Root />
    </div>
  </React.StrictMode>
);
