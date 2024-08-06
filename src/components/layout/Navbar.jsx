import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { IoMenuOutline } from "react-icons/io5";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Navbar = () => {
  const { navigate } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full h-14 border-b flex justify-between lg:justify-end items-center px-4">
      <button className="text-2xl block lg:hidden">
        <IoMenuOutline />
      </button>
      <div className="w-auto flex gap-3 justify-start items-center">
        <img
          src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.1.1828858886.1716668774&semt=ais_user"
          alt="user"
          className="w-9 h-9 rounded-full"
        />
        <div className="w-auto h-auto flex flex-col justify-start items-start relative">
          <h3 className="text-md leading-tight font-semibold text-[#191919]">
            Jane Doe
          </h3>
          <h3 className="text-xs font-medium text-[#191919]">
            janedoe@gmail.com
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
          } absolute top-16 right-2 bg-white divide-y divide-gray-100 rounded-lg shadow `}
        >
          <ul
            class="py-2 w-full text-sm  text-gray-700 "
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <button
                onClick={() => navigate("Home", "/login")}
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
