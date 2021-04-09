import "./sass/login.scss";
import AuthHeader from "../components/auth/AuthHeader";
import LoginForm from "../components/auth/LoginForm";

const Login = () => {
  return (
    <div className={"login-page"}>
      <AuthHeader />
      <LoginForm />
    </div>
  );
};

export default Login;
