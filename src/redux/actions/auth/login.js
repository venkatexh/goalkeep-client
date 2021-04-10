import Axios from "axios";
import hostHeader from "../../../config/hostHeader";
import actionTypes from "../../actionTypes";

export const login = (credentials) => async (dispatch) => {
  Axios.post(`${hostHeader.url}/api/auth/signin`, credentials)
    .then((res) => dispatch({ type: "LOGIN", payload: res.data }))
    .then((err) => {
      console.log(err);
    });
};
