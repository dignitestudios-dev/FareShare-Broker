import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/apiInterceptor";
import { useEffect } from "react";

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

  // Broker:
  const [broker, setBroker] = useState(null);

  const getBroker = async () => {
    const broker = await api.get("/broker");
    console.log(broker);
  };

  useEffect(() => {
    getBroker();
  }, []);
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
