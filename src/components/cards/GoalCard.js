import "../sass/goalCard.scss";
import { useState } from "react";
import moment from "moment";

const GoalCard = (props) => {
  const [showToolBar, setShowToolBar] = useState(false);

  const { title, startDate, finishDate, tasks } = props.goal;

  const handleHoverIn = () => {
    setShowToolBar(true);
  };

  const handleHoverOut = () => {
    setShowToolBar(false);
  };

  return (
    <div
      className={"goal-card"}
      onMouseEnter={handleHoverIn}
      onMouseLeave={handleHoverOut}
    >
      <div className={"goal-title"}>{title}</div>
      <div className={"date-range"}>
        {moment(startDate).format("Do MMM YYYY")} -{" "}
        {moment(finishDate).format("Do MMM YYYY")}
      </div>
      <div className={"todo-list"}>
        {tasks.map((task) => (
          <div>&#8226;&nbsp;{task}</div>
        ))}
      </div>
      <div className={"progress-bars"}>
        <div className={"progress-time"}>{""}</div>
        <div className={"progress-task"}>{""}</div>
      </div>
      {showToolBar ? <div className={"tool-bar"}></div> : <></>}
    </div>
  );
};

export default GoalCard;
