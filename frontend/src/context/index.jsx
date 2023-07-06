import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [showLoginBar, setShowLoginBar] = useState(false);
  return (
    <GlobalStateContext.Provider
      value={{
        login,
        setLogin,
        admin,
        setAdmin,
        showLoginBar,
        setShowLoginBar,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

GlobalStateProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
