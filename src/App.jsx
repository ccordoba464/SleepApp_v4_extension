import "./App.css";
import settings from "../public/icons/gear-solid.svg";
import cloud from "../public/icons/cloud-solid.svg";
import { Routes, Route, Link } from "react-router-dom";

import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Settings from "./components/Settings/Settings.jsx";

function App() {
  return (
    <>
      <div className="extensionContainer">
        <header className="header">
          <Link to="/" className="websiteTitle">
            <img src={cloud} alt="" className="headerIcon" />
            <h1 className="h1">Z³-Wellness</h1>
          </Link>

          <Link to="/settings">
            <img src={settings} alt="" className="headerIcon" />
          </Link>
        </header>

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route />
        </Routes>
        {/* <div className="logBtnContainer">
          <div className="logBtn">
            <h2 className="h2">Going to sleep?</h2>
            <input
              type="datetime-local"
              id="wake-time"
              name="wake-time"
            ></input>
          </div>
          <div className="logBtn">
            <h2 className="h2">Waking up?</h2>

            <input
              type="datetime-local"
              id="wake-time"
              name="wake-time"
            ></input>
          </div>
        </div> */}
        {/* <div className="circleMenu">
          <CircleView>
            <CircleList>
              <li>
                <HomeIcon
                  spanID={"sleepIcon_h"}
                  iconClass={"iconImages_h sleepIconImg"}
                  iconInfo={"Log Your Sleep"}
                />
              </li>
              <li>
                <a>
                  <HomeIcon
                    spanID={"reportIcon_h"}
                    iconClass={"iconImages_h reportIconImg"}
                    iconInfo={"Personal Report"}
                  />
                </a>
              </li>
              <li>
                <HomeIcon
                  spanID={"logIcon_h"}
                  iconClass={"iconImages_h logIconImg_h"}
                  iconInfo={"Log Your Exercise, Caffeine, Stress, Water & Mood"}
                />
              </li>
              <li>
                <HomeIcon
                  spanID={"mindIcon_h"}
                  iconClass={"iconImages_h mindIconImg_h"}
                  iconInfo={"Mindfulness Modules"}
                />
              </li>
              <li>
                <HomeIcon
                  spanID={"perIcon"}
                  iconClass={"iconImages_h perIconImg"}
                  iconInfo={"Personality Test"}
                />
              </li>
              <li className="noevents">
                <HomeIcon
                  spanID={"bedIcon"}
                  iconClass={"iconImages_h bedIconImg"}
                  iconInfo={"Your Bedtime Routine"}
                />
              </li>
            </CircleList>
          </CircleView>
        </div> */}
      </div>
    </>
  );
}

export default App;
