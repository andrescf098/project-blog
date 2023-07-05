import { NavLink, useNavigate } from "react-router-dom";
import "../../../styles/register.css";
import { useForm } from "../../../hooks/useForm";
import { useState } from "react";
import { global } from "../../../helpers/global";
import { fetchHelper } from "../../../helpers/fetchHelper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export const Register = () => {
  const { state, changed } = useForm({});
  const [error, setError] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [internalError, setInternalError] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const registerHandler = async (e) => {
    e.preventDefault();
    setError(false);
    setInternalError(false);
    setErrorPassword(false);
    if (state.password === state.confirmPassword) {
      if (state.password.length > 8) {
        delete state["confirmPassword"];
        const body = { ...state };
        try {
          const URI = global.url + "user";
          const { data } = await fetchHelper(URI, "POST", body);
          if (
            parseInt(data.statusCode) == 404 ||
            parseInt(data.statusCode) == 401 ||
            parseInt(data.statusCode) == 400
          ) {
            setInternalError(true);
          } else {
            setSuccess(true);
            setTimeout(() => {
              navigate("/");
              setSuccess(false);
            }, 5000);
          }
        } catch (error) {
          setInternalError(true);
        }
      } else {
        setErrorPassword(true);
      }
    } else {
      setError(true);
    }
  };

  return (
    <div className="signup">
      {errorPassword && (
        <div className="signup-error">
          <p>Password must have a minimum of 8 characters</p>
        </div>
      )}
      {error && (
        <div className="signup-error">
          <p>Password and Confirm password have to that equal</p>
        </div>
      )}
      {internalError && (
        <div className="signup-error">
          <p>Internal error</p>
        </div>
      )}
      {!success && (
        <>
          <div className="signup-container">
            <h1>SIGN UP</h1>
            <div className="signup-separator"></div>
            <form className="signup-form" onSubmit={registerHandler}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={changed}
              />
              <input
                type="text"
                name="lastname"
                placeholder="Lastname"
                onChange={changed}
              />
              <input
                type="text"
                name="email"
                placeholder="Email"
                onChange={changed}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={changed}
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={changed}
              />
              <input
                type="submit"
                name="signUp"
                value="Register"
                className="btn-signup"
              />
            </form>
          </div>
          <p>
            Do you have an account? <NavLink to="/login">Sign in</NavLink>
          </p>
        </>
      )}
      {success && (
        <div className="signup-success">
          <span className="signup-success-icon">
            <FontAwesomeIcon icon={faCheck} />
          </span>
          <h1>Success</h1>
          <p>Your account has been created succesfully</p>
        </div>
      )}
    </div>
  );
};
