import HeaderNav from "../components/nav/HeaderNav";
import DatePicker from "react-datepicker";
import { forwardRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Axios from "axios";
import hostHeader from "../config/hostHeader";
import editButtonIcon from "../assets/images/editButtonIcon.svg";

const Edit = (props) => {
  const [goal, setGoal] = useState(null);
  const [dateToChange, setDateToChange] = useState(new Date());
  const [title, setTitle] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState("");
  const [newTask, setNewTask] = useState("");
  const [newTaskList, setNewTaskList] = useState([]);
  const [refresh, setRefresh] = useState(0);

  const state = useSelector(({ loggedUser, goalById }) => ({
    loggedUser,
    goalById,
  }));

  useEffect(() => {
    Axios.get(
      `${hostHeader.url}/api/user/${state.loggedUser.id}/goals/${props.match.params.goal_id}`
    ).then((res) => {
      setGoal(res.data);
      setTitle(res.data.title);
      setTaskList(res.data.tasks);
      setDateToChange(new Date(res.data.finishDate));
    });
    console.log("render");
  }, [refresh]);

  const CustomDateInput = forwardRef(({ value, onClick }, ref) => (
    <button className="custom-date" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  const handleEditTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleTaskEdit = (e) => {
    const idx = e.currentTarget.parentElement.textContent;
    setTaskList(
      taskList.splice(parseInt(idx), 1, {
        task: task,
        done: taskList[parseInt(idx)].done,
        _id: taskList[parseInt(idx)]._id,
      })
    );
    Axios.put(
      `${hostHeader.url}/api/user/${state.loggedUser.id}/goals/${props.match.params.goal_id}`,
      { tasks: taskList }
    ).then(() => {
      document.getElementById("input").value = "";
      setRefresh(refresh + 1);
    });
  };

  const handleAddNewTask = () => {
    taskList.push({ task: newTask, done: false, _id: goal._id });
    Axios.put(
      `${hostHeader.url}/api/user/${state.loggedUser.id}/goals/${props.match.params.goal_id}`,
      { tasks: taskList }
    ).then(() => {
      setNewTask("");
      setRefresh(refresh + 1);
    });
  };

  return (
    <div>
      <HeaderNav />
      <div>
        <div>Edit your goal</div>
        <div>
          <div>Need to change the title?</div>
          <input className={""} placeholder={title} />
          <div className={"date-container"}>
            <DatePicker
              selected={dateToChange}
              onChange={(date) => setDateToChange(date)}
              minDate={new Date()}
              customInput={<CustomDateInput />}
            />
            <div>Change your finish date.</div>
          </div>
          <div>Need to modify your tasks?</div>
          {taskList.map((item, idx) => (
            <div key={idx}>
              <div hidden>{idx}</div>
              <input
                id={"input"}
                placeholder={item.task}
                onChange={handleEditTaskChange}
              />
              <button onClick={handleTaskEdit}>
                <img
                  style={{ width: "10px", height: "10px" }}
                  src={editButtonIcon}
                  alt={""}
                />{" "}
              </button>
            </div>
          ))}
          <div>
            <input
              placeholder={"New task"}
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={handleAddNewTask}>Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
