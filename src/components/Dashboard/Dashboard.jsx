import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Dashboard.styles.css";
import { useState } from "react";
import Sliders from "../Sliders/Sliders.jsx";

export default function Dashboard() {
  const [currValue, setCurrValue] = useState(8);

  return (
    <>
      <div className="btnContainer">
        <a
          href="https://sleepwebapp.wpi.edu/home"
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          HOME PAGE
        </a>
        <a
          href="https://sleepwebapp.wpi.edu/logging"
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          LOG YOUR DAILY STATS
        </a>
      </div>
      <div className="container">
        <div className="progressContainer">
          <div className="circleContainer">
            <CircularProgressbar
              value={70}
              text={`70%`}
              styles={buildStyles({
                textColor: "#337ab7",
                pathColor: "#337ab7",
                trailColor: "rgb(222, 232, 246)",
              })}
            />
          </div>
          <div className="avgSection">
            Avg. Sleep:
            <span className="avgValue">{currValue} hrs</span>
          </div>
        </div>
        <div className="infoContainer">
          <div className="avgGrid">
            <div className="avgSection">
              Avg. Stress Level
              <span className="avgValue">{20}</span>
            </div>
            <div className="avgSection">
              Avg. Exercise
              <span className="avgValue">{60}min</span>
            </div>
            <div className="avgSection">
              Avg. Caffeine
              <span className="avgValue">{60}mg</span>
            </div>
            <div className="avgSection">
              Avg. Water
              <span className="avgValue">{60}oz</span>
            </div>
          </div>
          <div className="avgSection">
            Most Frequent Mood:
            <span className="avgValue">Satisfied 🙂</span>
          </div>
        </div>
      </div>
      <div className="logContainer">
        <div className="logText">
          <div className="title">GOING TO SLEEP?</div>
          <div className="desc">SLEEP GOAL: 11:34PM - 7:34AM</div>
        </div>
        <a
          href="https://sleepwebapp.wpi.edu/LogSleep"
          target="_blank"
          rel="noreferrer"
        >
          <button className="trackBtn">LOG SLEEP</button>
        </a>
      </div>
      <div className="logContainer">
        <div className="logText">
          <div className="title">MINDFULNESS MODULES</div>
          <div className="desc">DISCOVER WAYS TO RELAX</div>
        </div>
        <a
          href="https://sleepwebapp.wpi.edu/mindfulnessModules"
          target="_blank"
          rel="noreferrer"
        >
          <button className="trackBtn">WIND DOWN</button>
        </a>
      </div>
      <div className="logContainer">
        <div className="logText">
          <div className="title">GETTING READY FOR BED?</div>
          <div className="desc">YOUR BEDTIME ROUTINE</div>
        </div>
        <a
          href="https://sleepwebapp.wpi.edu/bedtimeRoutine"
          target="_blank"
          rel="noreferrer"
        >
          <button className="trackBtn">BEGIN ROUTINE</button>
        </a>
      </div>
    </>
  );
}
