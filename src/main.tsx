import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import Container from "./components/build/Container";
import "./style/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Container>
    <App />
  </Container>
);
