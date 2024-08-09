import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const testUrl = "";
  const prodUrl = "";

  const [activeLink, setActiveLink] = useState("Home");
  const [tab, setTab] = useState("");
  const push = useNavigate();
  const navigate = (name, url) => {
    push(url);
    setActiveLink(name);
  };

  // Global Error State
  const [error, setError] = useState(false);
  return (
    <AppContext.Provider
      value={{
        testUrl,
        prodUrl,
        navigate,
        activeLink,
        setActiveLink,
        tab,
        setTab,
        error,
        setError,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
