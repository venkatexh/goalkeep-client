import "./sass/new.scss";
import HeaderNav from "../components/nav/HeaderNav";
import { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from "react-redux";
import Axios from "axios";
import hostHeader from "../config/hostHeader";
import { useHistory } from "react-router";

const New = () => {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [finishDate, setFinishDate] = useState(new Date());
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const state = useSelector(({ loggedUser }) => ({
    loggedUser,
  }));

  const history = useHistory();

  const CustomDateInput = forwardRef(({ value, onClick }, ref) => (
    <button className="custom-date" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleTaskAddition = () => {
    setTaskList((prev) => [...prev, task]);
    setTask("");
    console.log(taskList);
  };

  const handleCreateGoal = () => {
    const goal = {
      title,
      startDate,
      finishDate,
      tasks: taskList,
    };
    createNewGoal(goal);
  };

  const createNewGoal = (goal) => {
    console.log(state);
    Axios.post(`${hostHeader.url}/api/user/${state.loggedUser.id}/goals`, goal)
      .then((res) => {
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={"new-goal"}>
      <HeaderNav />
      <div className={"page-banner"}>Create a new goal</div>
      <div className={"new-goal-container"}>
        <div className={"form"}>
          <div className={"label"}>What should we call your goal?</div>
          <div className={"semi-label"}>Take "Read ten books" for example.</div>
          <input
            className={"title-input"}
            placeholder={"title"}
            value={title}
            onChange={handleTitleChange}
          />
          <div className={"date-container"}>
            <div className={"label"}>When do you want to start?</div>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              popperPlacement={"bottom-end"}
              customInput={<CustomDateInput />}
            />
          </div>
          <div className={"date-container"}>
            <div className={"label"}>When do you want to finish?</div>
            <DatePicker
              selected={finishDate}
              onChange={(date) => setFinishDate(date)}
              customInput={<CustomDateInput />}
            />
          </div>
          <div className={"label"}>What are the tasks under this goal?</div>
          <div className={"semi-label"}>
            For example, "The Songlines" is one of ten books.
          </div>
          <div className={"add-task-container"}>
            <input
              className={"task-input"}
              placeholder={"task"}
              value={task}
              onChange={handleTaskChange}
            />
            <button className={"add-task-btn"} onClick={handleTaskAddition}>
              Add
            </button>
          </div>
          <div>
            {taskList.map((task) => (
              <div key={task} className={"task-list-task"}>
                {task}
              </div>
            ))}
          </div>
          <div className={"create-btn-container"}>
            <button className={"create-goal-btn"} onClick={handleCreateGoal}>
              Create new goal!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
