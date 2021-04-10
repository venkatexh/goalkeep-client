import Axios from "axios";
import hostHeader from "../../../config/hostHeader";
import actionTypes from "../../actionTypes";

export const fetchAllGoals = (userId) => async (dispatch) => {
  Axios.get(`${hostHeader.url}/api/user/${userId}/goals`)
    .then((res) => dispatch({ type: actionTypes.ALL_GOALS, payload: res.data }))
    .catch((err) => {
      console.log(err);
    });
};
