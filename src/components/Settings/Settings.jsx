import "./Settings.styles.css";
import Switch from "@mui/material/Switch";

export default function Settings() {
  return (
    <>
      <a
        href="https://sleepwebapp.wpi.edu/settings"
        target="_blank"
        rel="noreferrer"
        className="settingsBtn"
      >
        ALL SETTINGS
      </a>

      <div className="settingsContainer">
        <div className="section">
          <div className="title">NOTIFICATIONS</div>
        </div>
        <div className="section">
          <div className="text">Notify me when it is time to sleep</div>
          <Switch />
        </div>
        <div className="section">
          <div className="text">Notify me when ...</div>
          <Switch />
        </div>
        <div className="section">
          <div className="text">Notify me when ...</div>
          <Switch />
        </div>
      </div>
    </>
  );
}
