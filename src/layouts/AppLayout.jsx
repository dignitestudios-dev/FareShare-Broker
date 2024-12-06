import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import api from "../api/apiInterceptor";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import Error from "../components/app/global/Error";
import SuccessToast from "../components/app/global/SuccessToast";
import { IoMdNotifications } from "react-icons/io";

const AppLayout = ({ page }) => {
  const {
    setError,
    error,
    prodUrl,
    success,
    setSuccess,
    activeLink,
    show,
    notification,
    fetchToken,
    setShow,
  } = useContext(AppContext);
  // Broker:
  const [broker, setBroker] = useState(null);

  const getBroker = async () => {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    axios
      .get(`${prodUrl}/broker`, { headers })
      .then((response) => {
        console.log(response);
        localStorage.setItem("broker", JSON.stringify(response?.data?.data));
      })
      .catch((error) => {
        setError(error?.response?.data?.message);
      });
  };

  useEffect(() => {
    getBroker();
    // fetchToken();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 4000);
  }, [show]);
  return (
    <div className="w-screen bg-white h-screen flex justify-start items-start relative">
      <Sidebar />
      {<Error error={error} setError={setError} />}
      {<SuccessToast success={success} setSuccess={setSuccess} />}
      {show && (
        <div
          class="min-w-64 w-72 max-w-96 fixed animate-pulse z-[100000] bottom-4 right-8 bg-white shadow border text-sm text-gray-800 rounded-2xl "
          role="alert"
          tabindex="-1"
          aria-labelledby="hs-toast-soft-color-teal-label"
        >
          <div
            id="hs-toast-soft-color-teal-label"
            class="w-full flex justify-between items-center p-4"
          >
            <div className="w-auto flex gap-3 justify-start items-center">
              <div className="w-16 h-16 rounded-full bg-[#c00000]/10 flex items-center justify-center">
                <IoMdNotifications className="text-[#c00000] text-2xl" />
              </div>

              <div className="w-[70%] flex flex-col justify-start items-start">
                <span className="font-bold">{notification?.title}</span>
                <span>{notification?.body}</span>
              </div>
            </div>
            <div class="ms-auto">
              <button
                onClick={() => setShow(false)}
                type="button"
                class="inline-flex shrink-0 justify-center items-center size-5 rounded-lg text-gray-800 opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100 "
                aria-label="Close"
              >
                <span class="sr-only">Close</span>
                <svg
                  class="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="w-full h-full lg:w-[80%] xl:w-[80%] flex flex-col justify-start items-start relative">
        <Navbar />
        <div
          className={`w-full h-[calc(100%-3.5rem)] ${
            activeLink !== "Chats" ? "p-4" : "p-0"
          } overflow-y-auto`}
        >
          {page}
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
