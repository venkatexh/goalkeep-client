import { useState } from "react";
import { Link } from "react-router-dom";
import "./sass/signupForm.scss";

const SignupForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleFormSubmit = () => {};

  return (
    <div className={"signup-form-container"}>
      <div className={"signup-banner"}>
        New here? Signup and change your life.
      </div>
      <form className={"signup-form"} onSubmit={handleFormSubmit}>
        <input
          className={"signup-input"}
          type={"text"}
          value={firstName}
          placeholder={"first name"}
          onChange={handleFirstNameChange}
        />
        <input
          className={"signup-input"}
          type={"text"}
          value={lastName}
          placeholder={"last name"}
          onChange={handleLastNameChange}
        />
        <input
          className={"signup-input"}
          type={"email"}
          value={email}
          placeholder={"email"}
          onChange={handleEmailChange}
        />
        <input
          className={"signup-input"}
          type={"password"}
          value={password}
          placeholder={"password"}
          onChange={handlePasswordChange}
        />
        <input
          className={"signup-input"}
          type={"password"}
          value={confirmPassword}
          placeholder={"confirm password"}
          onChange={handleConfirmPasswordChange}
        />
        <input className={"signup-submit"} type={"submit"} />
      </form>
      <div>
        Already a member?
        <Link to={"/login"}>Login</Link>
      </div>
    </div>
  );
};

export default SignupForm;
