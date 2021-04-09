import "../sass/goalCard.scss";
import { useState } from "react";

const GoalCard = () => {
  const [showToolBar, setShowToolBar] = useState(false);

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
      <div className={"goal-title"}>Trip to Australia</div>
      <div className={"date-range"}>24th May 2020 - 31st May 2020</div>
      <div className={"todo-list"}>
        <div>&#8226;&nbsp;Go scuba diving</div>
        <div>&#8226;&nbsp;Visit the Sydney Harbor bridge</div>
        <div>&#8226;&nbsp;Visit the Sydney Harbor bridge</div>
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
