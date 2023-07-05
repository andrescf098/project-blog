import { NavLink, useNavigate } from "react-router-dom";
import "../../../styles/login.css";
import { useForm } from "../../../hooks/useForm";
import { fetchHelper } from "../../../helpers/fetchHelper";
import { global } from "../../../helpers/global";
import { useState } from "react";

export const Login = () => {
  const { state, send } = useForm({});
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    send(e);
    try {
      const URI = global.url + "auth/login";
      const { data } = await fetchHelper(URI, "POST", state);
      setError(false);
      if (
        parseInt(data.statusCode) == 404 ||
        parseInt(data.statusCode) == 401
      ) {
        setError(true);
      }
      localStorage.setItem("token", data.token);
      navigate("/");
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="login">
      {error && (
        <div className="login-error">
          <p>Invalid email or password</p>
        </div>
      )}
      <div className="login-container">
        <h1>LOGIN</h1>
        <div className="login-separator"></div>
        <form className="login-form" onSubmit={loginHandler}>
          <input type="text" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <NavLink to="/sign-up">Forgot your password?</NavLink>
          <input
            type="submit"
            name="signIn"
            value="Sign in"
            className="btn-login"
          />
        </form>
      </div>
      <p>
        Do not have an account? <NavLink to="/sign-up">Sign up</NavLink>
      </p>
    </div>
  );
};
