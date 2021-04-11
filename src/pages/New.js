import "./sass/new.scss";
import HeaderNav from "../components/nav/HeaderNav";
import { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from "react-redux";
import Axios from "axios";
import hostHeader from "../config/hostHeader";
import { useHistory } from "react-router";
import cross from "../../src/assets/images/cross.svg";
import bullet from "../../src/assets/images/bullet.svg";
import add from "../../src/assets/images/add.svg";

const New = () => {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [finishDate, setFinishDate] = useState(new Date());
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [noTitle, setNoTitle] = useState(false);
  const [noTask, setNoTask] = useState(false);

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
    setNoTitle(false);
    setTitle(e.target.value);
  };

  const handleTaskChange = (e) => {
    setNoTask(false);
    setTask(e.target.value);
  };

  const handleTaskAddition = () => {
    if (task.length === 0 || !task.trim()) {
      setNoTask(true);
    } else {
      setTaskList((prev) => [...prev, task]);
      setTask("");
    }
  };

  const handleRemoveTask = (e) => {
    let toRemove = e.target.parentElement.parentElement.textContent;
    setTaskList(taskList.filter((task) => task !== toRemove));
  };

  const handleCreateGoal = () => {
    if (title.length === 0 || !title.trim()) {
      setNoTitle(true);
    } else {
      const goal = {
        title,
        startDate,
        finishDate,
        tasks: taskList,
      };
      createNewGoal(goal);
    }
  };

  const createNewGoal = (goal) => {
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
            className={`title-input ${noTitle ? "no-input" : ""}`}
            placeholder={"title"}
            value={title}
            onChange={handleTitleChange}
          />
          <div className={"date-container"}>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              minDate={new Date()}
              customInput={<CustomDateInput />}
            />
            <div className={"label"}>When do you want to start?</div>
          </div>

          <div className={"date-container"}>
            <DatePicker
              selected={finishDate}
              onChange={(date) => setFinishDate(date)}
              minDate={new Date()}
              customInput={<CustomDateInput />}
            />
            <div className={"label"}>When do you want to finish?</div>
          </div>

          <div className={"label"}>What are the tasks under this goal?</div>
          <div className={"semi-label"}>
            For example, "The Songlines" is one of ten books.
          </div>
          <div className={"add-task-container"}>
            <input
              className={`task-input ${noTask ? "no-input" : ""}`}
              placeholder={"task"}
              value={task}
              onChange={handleTaskChange}
            />
            <button className={"add-task-btn"} onClick={handleTaskAddition}>
              <img className={"add-icon"} src={add} alt={""} />
              Add
            </button>
          </div>
          <div>
            {taskList.map((task) => (
              <div key={task} className={"task-list-task"}>
                <div className={"task"}>
                  <div className={"task-text"}>
                    <img className={"bullet"} src={bullet} alt={""} />
                    {task}
                  </div>
                  <div>
                    <img
                      className={"remove-task"}
                      src={cross}
                      alt={""}
                      onClick={handleRemoveTask}
                    />
                  </div>
                </div>
                <div className={"task-underline"}>{""}</div>
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
