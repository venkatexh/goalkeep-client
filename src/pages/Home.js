import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TabsNav from "../components/nav/TabsNav";
import HeaderNav from "../components/nav/HeaderNav";
import "./sass/home.scss";
import GoalCard from "../components/cards/GoalCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllGoals } from "../redux/actions/goals/fetchAllGoals";
import Axios from "axios";
import hostHeader from "../config/hostHeader";

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedNav, setSelectedNav] = useState(0);
  const [refresh, setRefresh] = useState(false);
  const dispatch = useDispatch();

  const state = useSelector(({ loggedUser, allGoals }) => ({
    loggedUser,
    allGoals,
  }));

  const currentGoals = [];
  const pendingGoals = [];
  const completedGoals = [];
  const starredGoals = [];
  const trashedGoals = [];

  const { loggedUser, allGoals } = state;

  useEffect(() => {
    dispatch(fetchAllGoals(loggedUser.id));
  }, [dispatch, loggedUser.id, refresh]);

  const handleTabSelection = (tab) => {
    setSelectedTab(tab);
  };

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  const segregateGoals = (goals) => {
    let currDate = new Date();
    goals.forEach((goal) => {
      if (goal.starred && !goal.trashed) {
        starredGoals.push(goal);
      }
      if (goal.trashed) {
        trashedGoals.push(goal);
      }
      if (goal.completed && !goal.starred && !goal.trashed) {
        completedGoals.push(goal);
      } else if (new Date(goal.finishDate) < currDate) {
        pendingGoals.push(goal);
      } else if (!goal.completed && !goal.starred && !goal.trashed) {
        currentGoals.push(goal);
      }
    });
  };

  const updateCategory = (id, body) => {
    Axios.put(
      `${hostHeader.url}/api/user/${state.loggedUser.id}/goals/${id}`,
      body
    )
      .then((res) => {
        handleRefresh();
      })
      .catch((err) => {
        console.log(err);
      });
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
            {currentGoals.map((goal) => (
              <GoalCard
                handleCategoryChange={updateCategory}
                key={goal._id}
                goal={goal}
              />
            ))}
          </div>
        ) : selectedNav === 1 ? (
          <div className={"all-cards-container"}>
            {pendingGoals.map((goal) => (
              <GoalCard
                key={goal._id}
                goal={goal}
                handleCategoryChange={updateCategory}
              />
            ))}
          </div>
        ) : (
          <div className={"all-cards-container"}>
            {completedGoals.map((goal) => (
              <GoalCard
                key={goal._id}
                goal={goal}
                handleCategoryChange={updateCategory}
              />
            ))}
          </div>
        )}
      </div>
    );
  };

  const renderSecondTab = () => {
    return (
      <>
        {starredGoals.length > 0 ? (
          <div className={"starred-cards-container"}>
            {starredGoals.map((goal) => (
              <GoalCard key={goal._id} goal={goal} />
            ))}
          </div>
        ) : (
          <div className={"empty-message"}>
            <div>Whoa! Looks so empty here.</div>
          </div>
        )}
      </>
    );
  };

  const renderThirdTab = () => {
    return (
      <>
        {trashedGoals.length > 0 ? (
          <div className={"starred-cards-container"}>
            {trashedGoals.map((goal) => (
              <GoalCard key={goal._id} goal={goal} />
            ))}
          </div>
        ) : (
          <div className={"empty-message"}>
            <div>Whoa! Looks so empty here.</div>
          </div>
        )}
      </>
    );
  };

  const tabToRender = () => {
    segregateGoals(allGoals);
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
