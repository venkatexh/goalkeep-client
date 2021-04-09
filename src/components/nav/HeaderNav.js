import { Link } from "react-router-dom";
import "../sass/headerNav.scss";

const HeaderNav = () => {
  return (
    <div className={"header-nav"}>
      <Link to={"/home"} className={"brand-name"}>
        <div>GoalKeep</div>
      </Link>
      <div className={"user-area"}>
        <div>
          <img alt={"profile"} />
        </div>

        <div>Username</div>
      </div>
    </div>
  );
};

export default HeaderNav;
