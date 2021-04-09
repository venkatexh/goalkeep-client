import "./sass/login.scss";
import AuthHeader from "../components/AuthHeader";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className={"login-page"}>
      <AuthHeader />
      <LoginForm />
    </div>
  );
};

export default Login;
