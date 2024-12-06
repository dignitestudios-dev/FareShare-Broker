import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/apiInterceptor";
import { useEffect } from "react";
import { onMessageListener } from "../firebase/messages";
import getFCMToken from "../firebase/getFcmToken";
import axios from "axios";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const testUrl = "";
  const prodUrl = "https://backend.faresharellc.com";

  const [activeLink, setActiveLink] = useState("Home");
  const [tab, setTab] = useState("corporate");
  const [requestOpen, setRequestOpen] = useState(false);

  const push = useNavigate();
  const navigate = (name, url) => {
    push(url);
    setActiveLink(name);
    if (url !== "/ride/new-request/info") {
      setRequestOpen(false);
    }
  };

  // Global Error State
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  // notifications:
  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({ title: "", body: "" });
  const [isTokenFound, setTokenFound] = useState(false);

  // Send fcm to backend:
  const fetchToken = async () => {
    // const token = await getFCMToken(setTokenFound);
    const authToken = localStorage.getItem("token");
    if (!authToken) {
      setError("Un authorized | Please relogin.");
      navigate("Login", "/login");
    } else if (authToken) {
      return;
      // const headers = {
      //   Authorization: `Bearer ${authToken}`,
      // };
      // axios
      //   .post(
      //     `${prodUrl}/auth/updateFCM`,
      //     {
      //       fcmToken: token,
      //     },
      //     { headers }
      //   )
      //   .then((response) => {})
      //   .catch((err) => {
      //     setError(err?.response?.data?.message);
      //   });
    }

    // You can send this token to your server or use it as needed
  };

  onMessageListener()
    .then((payload) => {
      setShow(true);
      setNotification({
        title: payload.notification.title,
        body: payload.notification.body,
      });
    })
    .catch((err) => console.log("failed: ", err));

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
        requestOpen,
        setRequestOpen,
        success,
        setSuccess,
        show,
        notification,
        isTokenFound,
        fetchToken,
        setShow,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
