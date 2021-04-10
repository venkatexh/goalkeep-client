import { useState } from "react";
import "../sass/loginForm.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/auth/login";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [noEmail, setNoEmail] = useState(false);
  const [noPassword, setNoPassword] = useState(false);

  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setNoEmail(false);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setNoPassword(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setNoEmail(true);
    } else if (!password) {
      setNoPassword(true);
    } else {
      const user = {
        email,
        password,
      };
      dispatch(login(user));
    }
  };

  return (
    <div className={"login-form-container"}>
      <div className={"form-banner"}>Already with us? Login now.</div>
      <form className={"login-form"} onSubmit={handleFormSubmit}>
        <input
          className={`login-input ${noEmail ? "no-input" : ""}`}
          type={"email"}
          value={email}
          placeholder={"email"}
          onChange={handleEmailChange}
        />
        <input
          className={`login-input ${noPassword ? "no-input" : ""}`}
          type={"password"}
          value={password}
          placeholder={"password"}
          onChange={handlePasswordChange}
        />
        <input className={"login-submit"} type={"submit"} value={"Login"} />
      </form>
      <div className={"to-signup"}>
        <div>New here?&nbsp;</div>
        <Link to={"/signup"}>Signup</Link>
      </div>
    </div>
  );
};

export default LoginForm;
