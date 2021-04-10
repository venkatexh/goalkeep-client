import { Link } from "react-router-dom";
import "../sass/headerNav.scss";
import { useSelector } from "react-redux";

const HeaderNav = () => {
  const state = useSelector(({ loggedUser }) => ({ loggedUser }));
  const { firstName } = state.loggedUser;
  return (
    <div className={"header-nav"}>
      <Link to={"/home"} className={"brand-name"}>
        <div>GoalKeep</div>
      </Link>
      <div className={"user-area"}>
        <div>
          <img alt={""} />
        </div>
        <div className={"user-name"}>{firstName}</div>
        <div className={"dropdown-icon"}></div>
      </div>
    </div>
  );
};

export default HeaderNav;
