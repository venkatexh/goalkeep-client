import "./sass/authHeader.scss";

const AuthHeader = () => {
  return (
    <div className={"auth-header"}>
      <div className={"brand"}>GoalKeep</div>
      <div className={"moto"}>We help you manage your tasks like a pro.</div>
      <div className={"tag"}>Never fall behind.</div>
    </div>
  );
};

export default AuthHeader;
