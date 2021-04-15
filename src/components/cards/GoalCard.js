import "../sass/goalCard.scss";
import { useState } from "react";
import moment from "moment";
import star from "../../../src/assets/images/star.svg";
import view from "../../../src/assets/images/view.svg";
import edit from "../../../src/assets/images/edit.svg";
import trash from "../../../src/assets/images/trash.svg";
import checked from "../../../src/assets/images/checked.svg";
import { useHistory } from "react-router";

const GoalCard = (props) => {
  const [showToolBar, setShowToolBar] = useState(false);
  const [cardClickDisabled, setCardClickDisabled] = useState(false);

  const history = useHistory();

  const { _id, title, startDate, finishDate, tasks } = props.goal;

  const handleHoverIn = () => {
    setShowToolBar(true);
    setCardClickDisabled(true);
  };

  const handleHoverOut = () => {
    setShowToolBar(false);
    setCardClickDisabled(false);
  };

  const handleCardClick = () => {
    if (cardClickDisabled) {
    } else {
      console.log("clicked");
    }
  };

  const handleStarClick = () => {
    const goal = {
      starred: true,
    };
    props.handleCategoryChange(_id, goal);
  };

  const handleRemoveClick = () => {
    const goal = {
      trashed: true,
    };
    props.handleCategoryChange(_id, goal);
  };

  const handleEditClick = () => {
    history.push(`/goal/edit/${_id}`);
  };
  const handleViewClick = () => {};

  const handleCheckedClick = () => {
    const goal = {
      completed: true,
    };
    props.handleCategoryChange(_id, goal);
  };

  return (
    <div
      className={"goal-card"}
      onMouseEnter={handleHoverIn}
      onMouseLeave={handleHoverOut}
      onClick={handleCardClick}
    >
      <div className={"goal-title"}>{title}</div>
      <div className={"date-range"}>
        {moment(startDate).format("Do MMM YYYY")} -&nbsp;
        {moment(finishDate).format("Do MMM YYYY")}
      </div>
      <div className={"todo-list"}>
        {tasks.map((task) => (
          <div key={task.task}>
            &#8226;&nbsp;
            {task.task.length > 35
              ? `${task.task.substring(0, 35)} . .`
              : task.task}
          </div>
        ))}
      </div>
      <div className={"progress-bars"}>
        <div className={"progress-time"} style={{ width: `%` }}>
          {""}
        </div>
        <div className={"progress-task"}>{""}</div>
      </div>
      {showToolBar ? (
        <div className={"tool-bar"}>
          <div>
            <img
              className={"tool-icon"}
              src={star}
              alt={""}
              onClick={handleStarClick}
            />
          </div>
          <div>
            <img
              className={"tool-icon"}
              src={edit}
              alt={""}
              onClick={handleEditClick}
            />
          </div>
          <div>
            <img
              className={"tool-icon"}
              src={trash}
              alt={""}
              onClick={handleRemoveClick}
            />
          </div>
          <div>
            <img
              className={"tool-icon"}
              src={view}
              alt={""}
              onClick={handleViewClick}
            />
          </div>
          <div>
            <img
              className={"tool-icon"}
              src={checked}
              alt={""}
              onClick={handleCheckedClick}
            />
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default GoalCard;
