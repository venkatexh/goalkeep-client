import { useState } from "react";
import "./sass/loginForm.scss";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = () => {};

  return (
    <div className={"login-form-container"}>
      <div className={"form-banner"}>Already with us? Login now.</div>
      <form className={"login-form"} onSubmit={handleFormSubmit}>
        <input
          className={"login-input"}
          type={"email"}
          value={email}
          placeholder={"email"}
          onChange={handleEmailChange}
        />
        <input
          className={"login-input"}
          type={"password"}
          value={password}
          placeholder={"password"}
          onChange={handlePasswordChange}
        />
        <input className={"login-submit"} type={"submit"} />
      </form>
      <div>
        New here?
        <Link to={"/signup"}>Signup</Link>
      </div>
    </div>
  );
};

export default LoginForm;
