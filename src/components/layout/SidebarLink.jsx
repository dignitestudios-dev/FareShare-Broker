import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const SidebarLink = ({ data }) => {
  const { navigate, activeLink } = useContext(AppContext);
  return (
    <div
      onClick={() => navigate(data?.title, data?.url)}
      className="w-full flex items-center justify-start gap-2 h-12  "
    >
      <span
        className={`transform  w-[10px] h-[18px] ${
          activeLink === data?.title
            ? "bg text-[#fff]"
            : "bg-gray-100 text-black/40"
        } rounded-r-full`}
      ></span>
      <button
        className={`w-[90%] rounded-full h-full  transition-all duration-300 flex justify-start items-center gap-2 px-4 ${
          activeLink === data?.title
            ? "bg text-[#fff]"
            : "bg-gray-100 text-black/40"
        }  font-medium text-xl`}
      >
        <span
          className={`${
            activeLink == data?.title ? "text-white" : "text-[#c00000]"
          }`}
        >
          {data?.icon}
        </span>
        <span className="capitalize text-[13px]  leading-none font-bold ">
          {data?.title}
        </span>
      </button>
    </div>
  );
};

export default SidebarLink;
