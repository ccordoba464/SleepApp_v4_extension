import "./App.css";
import settings from "../public/icons/gear-solid.svg";
import cloud from "../public/icons/cloud-solid.svg";

import { useState } from "react";

import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Settings from "./components/Settings/Settings.jsx";

function App() {
  const [currentView, setCurrentView] = useState("dashboard");

  // Function to change view
  const changeView = viewName => {
    setCurrentView(viewName);
  };

  return (
    <div className="extensionContainer">
      <header className="header">
        <div className="websiteTitle" onClick={() => changeView("dashboard")}>
          <img src={cloud} alt="" className="headerIcon" />
          <h1 className="h1">Z³-Wellness</h1>
        </div>

        <img
          src={settings}
          alt=""
          className="headerIcon"
          onClick={() => changeView("settings")}
        />
      </header>

      {currentView === "dashboard" && <Dashboard />}
      {currentView === "settings" && <Settings />}
    </div>
  );
}

export default App;
