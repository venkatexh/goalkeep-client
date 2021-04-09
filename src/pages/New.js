import "./sass/new.scss";
import HeaderNav from "../components/nav/HeaderNav";
import { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";

const New = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [finishDate, setFinishDate] = useState(new Date());

  const CustomDateInput = forwardRef(({ value, onClick }, ref) => (
    <button className="custom-date" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  return (
    <div className={"new-goal"}>
      <HeaderNav />
      <div className={"new-goal-container"}>
        <div>What should we call your goal?</div>
        <div>Take "Read ten books" for example.</div>
        <input />
        <div>When do you want to start?</div>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          customInput={<CustomDateInput />}
        />
        <div>When do you want to finish?</div>
        <DatePicker
          selected={finishDate}
          onChange={(date) => setFinishDate(date)}
          customInput={<CustomDateInput />}
        />
        <div>What are the tasks under this goal?</div>
        <div>For example, "The Songlines" is one of ten books.</div>
        <div>
          <input />
          <button>Add</button>
        </div>
        <div></div>
        <button>Create new goal!</button>
      </div>
    </div>
  );
};

export default New;
