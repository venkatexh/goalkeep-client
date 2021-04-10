import { combineReducers } from "redux";
import { loggedUser } from "./auth/loggedUser";
import { allGoals } from "./goals/allGoals";

const reducer = combineReducers({
  loggedUser,
  allGoals,
});

const rootReducer = (state, action) => {
  if (action.type === "USER_LOGOUT") {
    state = undefined;
  }

  return reducer(state, action);
};

export default rootReducer;
