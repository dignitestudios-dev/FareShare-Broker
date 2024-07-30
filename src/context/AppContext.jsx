import React, { createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const testUrl = "";
  const prodUrl = "";
  return (
    <AppContext.Provider value={{ testUrl, prodUrl }}>
      {children}
    </AppContext.Provider>
  );
};
