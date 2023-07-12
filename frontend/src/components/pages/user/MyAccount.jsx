import { NavLink, Outlet } from "react-router-dom";
import "../../../styles/myAccount.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const MyAccount = () => {
  return (
    <div className="myAccount">
      <section className="myAccount-options">
        <h1>MY ACCOUNT</h1>
        <div className="myAccount-options-separator"></div>
        <ul>
          <li>
            <NavLink to="/my-account/info">
              <span>
                <FontAwesomeIcon icon={faUser} />
              </span>
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/my-account/image">
              <span>
                <FontAwesomeIcon icon={faImage} />
              </span>
              Profile image
            </NavLink>
          </li>
          <li>
            <div className="myAccount-options-separator"></div>
          </li>
          <li>
            <NavLink to="/my-account/image">
              <span>
                <FontAwesomeIcon icon={faRightFromBracket} />
              </span>
              Logout
            </NavLink>
          </li>
        </ul>
      </section>
      <section className="myAccount-container">
        <Outlet />
      </section>
    </div>
  );
};

export default MyAccount;
