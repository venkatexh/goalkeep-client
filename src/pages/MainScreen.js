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
        <Route exact path={"/home"} component={Home} />
      </Switch>
    );
  };

  const routesToReturn = () => {
    if (state.loggedUser) {
      return sessionRoutes();
    } else {
      return nonSessionRoutes();
    }
  };

  return <Router>{routesToReturn()}</Router>;
};

export default MainScreen;
