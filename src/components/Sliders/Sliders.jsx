import Slider from "@mui/material/Slider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import "./Sliders.styles.css";

import { Tab } from "semantic-ui-react";

function Exercise() {
  return (
    <div className="sliderContainer">
      <Tab.Pane attached={false}>
        <Typography variant="body2" gutterBottom>
          Average Intensity
        </Typography>

        <Slider
          size="small"
          defaultValue={50}
          aria-label="Small"
          valueLabelDisplay="auto"
          step={15}
          min={0}
          max={180}
          className="slider"
        />
      </Tab.Pane>
    </div>
  );
}

function Caffeine() {
  return (
    <div className="sliderContainer">
      <Tab.Pane attached={false}>
        <Typography gutterBottom>Average Beverage Size</Typography>
        <Grid container spacing={3}></Grid>
      </Tab.Pane>

      <Slider
        size="small"
        defaultValue={50}
        aria-label="Small"
        valueLabelDisplay="auto"
        step={15}
        min={0}
        max={180}
        className="slider"
      />
    </div>
  );
}

const panes = [
  { menuItem: "Exercise", render: () => <Exercise /> },
  { menuItem: "Caffeine", render: () => <Caffeine /> },
  { menuItem: "Water", render: () => <Caffeine /> },
  { menuItem: "Mood", render: () => <Caffeine /> },
  { menuItem: "Stress", render: () => <Caffeine /> },
];

const Tabs = () => (
  <Tab
    menu={{ color: "blue", inverted: true, tabular: false }}
    panes={panes}
    defaultActiveIndex={0}
  />
);

export default Tabs;
