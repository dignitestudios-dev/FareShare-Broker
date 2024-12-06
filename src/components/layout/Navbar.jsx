import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { IoMenuOutline, IoNotificationsOutline } from "react-icons/io5";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { navigate, setActiveLink, activeLink } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full h-14 bg-gray-50 border-b flex justify-between lg:justify-end items-center px-4">
      <button className="text-2xl block lg:hidden">
        <IoMenuOutline />
      </button>
      <div className="w-auto flex gap-3 justify-start items-center">
        <button
          onClick={() => navigate("Notifications", "/notifications")}
          className={`w-[32px] h-[32px] group  rounded-lg transition-all duration-300 flex items-center justify-center ${
            activeLink == "Notifications"
              ? "bg-[#c00000] text-white"
              : "bg-gray-200 text-gray-700"
          } hover:bg-[#c00000]  p-1 relative`}
        >
          <IoNotificationsOutline className=" group-hover:text-white  text-xs w-full h-full" />
        </button>
        <div className="w-auto h-auto flex flex-col justify-start items-start relative">
          <h3 className="text-md leading-tight font-semibold text-[#191919]">
            {JSON.parse(localStorage?.getItem("broker")).accountHandlerName}
          </h3>
          <h3 className="text-xs font-medium text-[#191919]">
            {JSON.parse(localStorage?.getItem("broker")).email}
          </h3>
        </div>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="w-6 h-6 text-gray-400 rounded-full flex items-center justify-center border"
        >
          <RxCaretDown />
        </button>
        <div
          class={`w-32 z-10 ${
            isOpen ? "block" : "hidden"
          } absolute top-16 right-2 bg-white border divide-y divide-gray-100 rounded-lg shadow `}
        >
          <ul
            class="py-2 w-full text-sm  text-gray-700 "
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("broker");
                  navigate("Home", "/login");
                }}
                class="w-full px-4 py-1 hover:bg-gray-100 "
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
