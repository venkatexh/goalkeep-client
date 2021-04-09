import { useState } from "react";
import { Link } from "react-router-dom";
import "../sass/signupForm.scss";

const SignupForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [noFirstName, setNoFirstName] = useState(false);
  const [noLastName, setNoLastName] = useState(false);
  const [noEmail, setNoEmail] = useState(false);
  const [noPassword, setNoPassword] = useState(false);
  const [noConfirmPassword, setNoConfirmPassword] = useState(false);
  const [noMatch, setNoMatch] = useState(false);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    setNoFirstName(false);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    setNoLastName(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setNoEmail(false);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setNoPassword(false);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setNoConfirmPassword(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!firstName) {
      setNoFirstName(true);
    } else if (!lastName) {
      setNoLastName(true);
    } else if (!email) {
      setNoEmail(true);
    } else if (!password) {
      setNoPassword(true);
    } else if (!confirmPassword) {
      setNoConfirmPassword(true);
    } else {
      if (password !== confirmPassword) {
        setNoMatch(true);
      } else {
        setNoMatch(false);
        signupUser();
      }
    }
  };

  const signupUser = () => {};

  return (
    <div className={"signup-form-container"}>
      <div className={"signup-banner"}>
        New here? <br />
        Signup and change your life.
      </div>
      <form className={"signup-form"} onSubmit={handleFormSubmit}>
        <input
          className={`signup-input ${noFirstName ? "no-input" : ""}`}
          type={"text"}
          value={firstName}
          placeholder={"first name"}
          onChange={handleFirstNameChange}
        />
        <input
          className={`signup-input ${noLastName ? "no-input" : ""}`}
          type={"text"}
          value={lastName}
          placeholder={"last name"}
          onChange={handleLastNameChange}
        />
        <input
          className={`signup-input ${noEmail ? "no-input" : ""}`}
          type={"email"}
          value={email}
          placeholder={"email"}
          onChange={handleEmailChange}
        />
        <input
          className={`signup-input ${noPassword ? "no-input" : ""}`}
          type={"password"}
          value={password}
          placeholder={"password"}
          onChange={handlePasswordChange}
        />
        <input
          className={`signup-input ${noConfirmPassword ? "no-input" : ""}`}
          type={"password"}
          value={confirmPassword}
          placeholder={"confirm password"}
          onChange={handleConfirmPasswordChange}
        />
        {noMatch ? (
          <div className={"no-match"}>Passwords do not match.</div>
        ) : (
          <></>
        )}
        <input className={"signup-submit"} type={"submit"} value={"Signup"} />
      </form>

      <div className={"to-login"}>
        <div>Already a member?&nbsp;</div>
        <Link to={"/login"}>Login</Link>
      </div>
    </div>
  );
};

export default SignupForm;
