import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../../styles/navbar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Loginbar } from "../pages/login/Login-bar";

export const Nav = () => {
  const [showLoginBar, setShowLoginBar] = useState(false);

  const showLogin = () => {
    setShowLoginBar((current) => !current);
  };

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

          <li>
            <NavLink to="/article">My articles</NavLink>
          </li>
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
      {showLoginBar && <Loginbar />}
    </nav>
  );
};
