import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { IoMenuOutline } from "react-icons/io5";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Cookies from "js-cookie";

const Navbar = () => {
  const { navigate } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full h-14 bg-gray-50 border-b flex justify-between lg:justify-end items-center px-4">
      <button className="text-2xl block lg:hidden">
        <IoMenuOutline />
      </button>
      <div className="w-auto flex gap-3 justify-start items-center">
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
