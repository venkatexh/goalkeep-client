import "./sass/signup.scss";
import AuthHeader from "../components/auth/AuthHeader";
import SignupForm from "../components/auth/SignupForm";

const Signup = () => {
  return (
    <div className={"signup-page"}>
      <AuthHeader />
      <SignupForm />
    </div>
  );
};

export default Signup;
