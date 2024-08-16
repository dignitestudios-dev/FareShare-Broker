import React, { useEffect, useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import api from "../api/apiInterceptor";

const AppLayout = ({ page }) => {
  // Broker:
  const [broker, setBroker] = useState(null);

  const getBroker = async () => {
    const broker = await api.get("/broker");
    localStorage.setItem("broker", JSON.stringify(broker?.data?.data));
  };

  useEffect(() => {
    getBroker();
  }, []);
  return (
    <div className="w-screen bg-white h-screen flex justify-start items-start relative">
      <Sidebar />
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
