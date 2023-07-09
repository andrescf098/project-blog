import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../../styles/navbar.css";
import { NavLink } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Loginbar } from "../pages/login/Login-bar";
import { GlobalStateContext } from "../../context";
import { loginVerficiation } from "../../helpers/sessionUtils";

export const Nav = () => {
  const context = useContext(GlobalStateContext);

  const showLogin = () => {
    context.setShowLoginBar((current) => !current);
    console.log(context.showLoginBar);
  };
  useEffect(() => {
    loginVerficiation(context);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <p>PERSONAL BLOG</p>
      </div>
      <div className="nav-section">
        <ul className="nav-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          {context.login && (
            <>
              <li>
                <NavLink to="/my-articles">My articles</NavLink>
              </li>
              <li>
                <NavLink to="/create">Create article</NavLink>
              </li>
            </>
          )}
        </ul>
        <ul className="nav-options">
          <li>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </li>
          <li onClick={showLogin}>
            <FontAwesomeIcon icon={faUser} />
          </li>
        </ul>
      </div>
      {context.showLoginBar && <Loginbar />}
    </nav>
  );
};
