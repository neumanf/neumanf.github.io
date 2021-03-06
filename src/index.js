import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import reportWebVitals from "./reportWebVitals";

import App from "./App";
import Projects from "./routes/Projects";
import Home from "./routes/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<App child={<Home />} />}></Route>
        <Route path="/projects" element={<App child={<Projects />} />}></Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
