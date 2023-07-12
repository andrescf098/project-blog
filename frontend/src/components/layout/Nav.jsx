import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../../styles/navbar.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import LoginBar from "./Loginbar";
import { GlobalStateContext } from "../../context";
import SearchBar from "./SearchBar";

const Nav = () => {
  const context = useContext(GlobalStateContext);

  const showLogin = () => {
    context.setShowLoginBar((current) => !current);
  };
  const searchHandler = (e) => {
    context.setSearchData(e.target.value);
    context.setShowLoginBar(false);
  };
  const showSearch = () => {
    context.setShowSearch((current) => !current);
    context.setSearchData("");
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
          <li className="nav-search">
            {context.showSearch && (
              <input type="text" onChange={searchHandler} />
            )}

            <FontAwesomeIcon onClick={showSearch} icon={faMagnifyingGlass} />
          </li>
          <li onClick={showLogin}>
            <FontAwesomeIcon icon={faUser} />
          </li>
        </ul>
      </div>
      {context.showLoginBar && <LoginBar />}
      {context.showSearch && <SearchBar />}
    </nav>
  );
};

export default Nav;
