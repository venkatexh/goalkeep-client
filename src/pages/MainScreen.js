import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import New from "../pages/New";
import Edit from "../pages/Edit";
import View from "../pages/View";

import { loggedUser } from "../redux/reducers/auth/loggedUser";

const MainScreen = () => {
  const state = useSelector(({ loggedUser }) => ({ loggedUser }));

  const nonSessionRoutes = () => {
    return (
      <Switch>
        <Route exact path={"/"}>
          <Redirect to={"/login"} />
        </Route>
        <Route exact path={"/login"} component={Login} />
        <Route exact path={"/signup"} component={Signup} />
        <Redirect to={"/"} />
      </Switch>
    );
  };

  const sessionRoutes = () => {
    return (
      <Switch>
        <Route exact path={"/"}>
          <Redirect to={"/home"} />
        </Route>
        <Route exact path={"/home"} component={Home} />
        <Route exact path={"/goal/new"} component={New} />
        <Route exact path={"/goal/edit/:goal_id"} component={Edit} />
        <Route exact path={"/goal/view/:goal_id"} component={View} />
        <Redirect to={"/"} />
      </Switch>
    );
  };

  const routesToReturn = () => {
    if (sessionStorage.getItem("loggedUser")) {
      return sessionRoutes();
    } else {
      return nonSessionRoutes();
    }
  };

  return <Router>{routesToReturn()}</Router>;
};

export default MainScreen;
