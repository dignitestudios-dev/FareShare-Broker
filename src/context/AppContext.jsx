import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const testUrl = "";
  const prodUrl = "";

  const [activeLink, setActiveLink] = useState("Home");
  const [tab, setTab] = useState("medical");
  const push = useNavigate();
  const navigate = (name, url) => {
    push(url);
    setActiveLink(name);
  };
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
