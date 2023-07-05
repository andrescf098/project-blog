import { NavLink } from "react-router-dom";
import "../../../styles/login-bar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export const Loginbar = () => {
  return (
    <div className="login-bar">
      <ul>
        <li>
          <NavLink to="/login">
            <span>
              <FontAwesomeIcon icon={faCircleUser} />
            </span>
            Login
          </NavLink>
        </li>
        <div className="login-bar-separator"></div>
        <li>
          <NavLink to="/sign-up">
            <span>
              <FontAwesomeIcon icon={faPenToSquare} />
            </span>
            Sign up
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
