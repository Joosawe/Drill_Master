import React from "react";
import "./Styles/stopwatch.css";

class StopwatchDisplay extends React.Component {
  render() {
    return (
      <div className={"stopwatch__display"}>
        <span className="span"> 
          {this.props.formatTime(this.props.currentTimeMin)}:
          {this.props.formatTime(this.props.currentTimeSec)}:
          {this.props.formatTime(this.props.currentTimeMs, "ms")}
        </span>
      </div>
    );
  }
}

export default StopwatchDisplay;
