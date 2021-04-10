import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TabsNav from "../components/nav/TabsNav";
import HeaderNav from "../components/nav/HeaderNav";
import "./sass/home.scss";
import GoalCard from "../components/cards/GoalCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllGoals } from "../redux/actions/goals/fetchAllGoals";

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedNav, setSelectedNav] = useState(0);

  const dispatch = useDispatch();

  const state = useSelector(({ loggedUser, allGoals }) => ({
    loggedUser,
    allGoals,
  }));

  const { loggedUser, allGoals } = state;

  useEffect(() => {
    dispatch(fetchAllGoals(loggedUser.id));
  }, []);

  const handleTabSelection = (tab) => {
    setSelectedTab(tab);
  };

  const renderFirstTab = () => {
    return (
      <div className={"all-tab"}>
        <div className={"content-nav"}>
          <button
            className={`nav-btn ${selectedNav === 0 ? "btn-selected" : ""}`}
            onClick={() => setSelectedNav(0)}
          >
            Ongoing
          </button>
          <button
            className={`nav-btn ${selectedNav === 1 ? "btn-selected" : ""}`}
            onClick={() => setSelectedNav(1)}
          >
            Pending
          </button>
          <button
            className={`nav-btn ${selectedNav === 2 ? "btn-selected" : ""}`}
            onClick={() => setSelectedNav(2)}
          >
            Completed
          </button>
          <div className={"create-goal-container"}>
            <Link to={"/goal/new"}>
              <button className={"create-goal"}>New Goal</button>
            </Link>
          </div>
        </div>
        {selectedNav === 0 ? (
          <div className={"all-cards-container"}>
            {allGoals.map((goal) => (
              <GoalCard key={goal.id} goal={goal} />
            ))}
          </div>
        ) : selectedNav === 1 ? (
          <div className={"all-cards-container"}>
            <GoalCard />
            <GoalCard />
            <GoalCard />
          </div>
        ) : (
          <div className={"all-cards-container"}>
            <GoalCard />
            <GoalCard />
            <GoalCard />
            <GoalCard />
          </div>
        )}
      </div>
    );
  };

  const renderSecondTab = () => {};

  const renderThirdTab = () => {};

  const tabToRender = () => {
    if (selectedTab === 0) {
      return renderFirstTab();
    }
    if (selectedTab === 1) {
      return renderSecondTab();
    }
    if (selectedTab === 2) {
      return renderThirdTab();
    }
  };

  return (
    <div className={"home"}>
      <HeaderNav />
      <TabsNav selectedTab={selectedTab} setTab={handleTabSelection} />
      {tabToRender()}
    </div>
  );
};

export default Home;
