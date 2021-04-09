import { combineReducers } from "redux";
import { loggedUser } from "./auth/loggedUser";

const reducer = combineReducers({
  loggedUser,
});

const rootReducer = (state, action) => {
  if (action.type === "USER_LOGOUT") {
    state = undefined;
  }

  return reducer(state, action);
};

export default rootReducer;
