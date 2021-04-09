import "./sass/signup.scss";
import AuthHeader from "../components/AuthHeader";
import SignupForm from "../components/SignupForm";

const Signup = () => {
  return (
    <div className={"signup-page"}>
      <AuthHeader />
      <SignupForm />
    </div>
  );
};

export default Signup;
