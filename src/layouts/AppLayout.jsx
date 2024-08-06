import React from "react";
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

const AppLayout = ({ page }) => {
  return (
    <div className="w-screen h-screen flex justify-start items-start relative">
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
