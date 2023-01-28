import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import reportWebVitals from "./reportWebVitals";
import en from "./translations/en.json";
import pt from "./translations/pt-br.json";

import App from "./App";
import Projects from "./routes/Projects";
import Home from "./routes/Home";
import ProjectPage from "./routes/Projects/project";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<App child={<Home />} />}></Route>
        <Route path="/projects" element={<App child={<Projects />} />}></Route>
        {(() => {
          const language = localStorage.getItem("language") || "en";
          const projects =
            language === "en" ? en.projects.data : pt.projects.data;
          return projects.map((project) => (
            <Route
              key={project.pageLink}
              path={project.pageLink}
              element={<App child={<ProjectPage project={project} />} />}
            />
          ));
        })()}
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
