import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import { AppContextProvider } from "./context/AppContext.jsx";
import { RideBookingContextProvider } from "./context/RideBookingContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <RideBookingContextProvider>
          <App />
        </RideBookingContextProvider>
      </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
