import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Dashboard.styles.css";
import { useState } from "react";

export default function Dashboard() {
  const [currValue, setCurrValue] = useState(8);

  return (
    <div className="dashboard">
      <div className="progressContainer">
        <CircularProgressbar
          value={70}
          text={`70%`}
          styles={buildStyles({
            textColor: "#337ab7",
            pathColor: "#337ab7",
            trailColor: "rgb(222, 232, 246)",
          })}
        />
        <div className="avgSection">
          Avg. Sleep:
          <span className="avgValue">{currValue} hrs</span>
        </div>
        <button className="logBtn">Log Sleep</button>
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
      </div>
    </div>
  );
}
