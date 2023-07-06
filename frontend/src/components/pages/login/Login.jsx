import { NavLink, useNavigate } from "react-router-dom";
import "../../../styles/login.css";
import { useForm } from "../../../hooks/useForm";
import { fetchHelper } from "../../../helpers/fetchHelper";
import { global } from "../../../helpers/global";
import { useContext, useState } from "react";
import { GlobalStateContext } from "../../../context";

export const Login = () => {
  const { state, changed } = useForm({});
  const [error, setError] = useState(false);
  const context = useContext(GlobalStateContext);
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const body = { ...state };
      console.log(body);
      const URI = global.url + "auth/login";
      const { data } = await fetchHelper(URI, "POST", body);
      setError(false);
      if (
        parseInt(data.statusCode) == 404 ||
        parseInt(data.statusCode) == 401
      ) {
        setError(true);
      }
      localStorage.setItem("token", data.token);
      navigate("/");
      context.setShowLoginBar(false);
      context.setLogin(true);
      console.log(context.login);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      {context.login ? (
        navigate("/")
      ) : (
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
              <NavLink
                to="/sign-up"
                onClick={() => context.setShowLoginBar(false)}
              >
                Forgot your password?
              </NavLink>
              <input
                type="submit"
                name="signIn"
                value="Sign in"
                className="btn-login"
              />
            </form>
          </div>
          <p>
            Do not have an account?{" "}
            <NavLink
              to="/sign-up"
              onClick={() => context.setShowLoginBar(false)}
            >
              Sign up
            </NavLink>
          </p>
        </div>
      )}
    </>
  );
};
