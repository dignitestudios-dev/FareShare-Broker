import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import api from "../api/apiInterceptor";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import Error from "../components/app/global/Error";
import SuccessToast from "../components/app/global/SuccessToast";

const AppLayout = ({ page }) => {
  const { setError, error, prodUrl, success, setSuccess } =
    useContext(AppContext);
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
  }, []);
  return (
    <div className="w-screen bg-white h-screen flex justify-start items-start relative">
      <Sidebar />
      {error && <Error error={error} setError={setError} />}
      {success && <SuccessToast success={success} setSuccess={setSuccess} />}
      <div className="w-full h-full lg:w-[80%] xl:w-[80%] flex flex-col justify-start items-start relative">
        <Navbar />
        <div className="w-full h-[calc(100%-3.5rem)] p-4 overflow-y-auto">
          {page}
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
