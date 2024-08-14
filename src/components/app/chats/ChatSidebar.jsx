import React from "react";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import api from "../../../api/apiInterceptor";
import { useEffect } from "react";

const ChatSidebar = () => {
  // Chat Rooms:
  const [chatRooms, setChatRooms] = useState(null);

  const getChatRooms = async () => {
    const chatRooms = await api.get("/chat");
    console.log(chatRooms);
  };

  useEffect(() => {
    getChatRooms();
  }, []);
  return (
    <div className="hidden lg:flex flex-col h-full overflow-y-auto lg:w-2/5 border-l ">
      <div className="py-5 px-3 w-full flex justify-center items-center gap-2">
        <input
          className="w-[90%] shadow-md h-10 px-4 border outline-none focus:border-[#c00000] rounded-full"
          type="text"
          placeholder="Search"
        />
        <button className="w-9 h-9 shadow-md rounded-full bg-[#c00000] hover:opacity-95 text-lg text-white flex items-center justify-center font-medium">
          <FiSearch />
        </button>
      </div>
      <div className="w-full h-20 hover:bg-[#c00000]/[0.05] cursor-pointer border-b px-3 hidden lg:flex justify-start items-center gap-2">
        <span className="w-auto h-auto relative">
          <img
            src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.1.1828858886.1716668774&semt=ais_user"
            className="w-10 h-10 rounded-full shadow-sm"
          />
          <span className="w-3 h-3 rounded-full bg-green-500 shadow-md absolute bottom-0 right-0" />
        </span>
        <div className="w-auto flex flex-col justify-start items-start">
          <h3 className="text-sm font-semibold">Jason Armstrong</h3>
          <h3 className="text-xs text-gray-700 font-semibold">
            jasonmarvel@gmail.com
          </h3>
        </div>
        <button className="w-16 h-6 rounded-full bg-[#c00000] flex items-center justify-center text-white text-xs ml-auto font-medium">
          Delete
        </button>
      </div>
      <div className="w-full h-20 hover:bg-[#c00000]/[0.05] cursor-pointer border-b px-3 hidden lg:flex justify-start items-center gap-2">
        <span className="w-auto h-auto relative">
          <img
            src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.1.1828858886.1716668774&semt=ais_user"
            className="w-10 h-10 rounded-full shadow-sm"
          />
          <span className="w-3 h-3 rounded-full bg-green-500 shadow-md absolute bottom-0 right-0" />
        </span>
        <div className="w-auto flex flex-col justify-start items-start">
          <h3 className="text-sm font-semibold">Jason Armstrong</h3>
          <h3 className="text-xs text-gray-700 font-semibold">
            jasonmarvel@gmail.com
          </h3>
        </div>
        <button className="w-16 h-6 rounded-full bg-[#c00000] flex items-center justify-center text-white text-xs ml-auto font-medium">
          Delete
        </button>
      </div>
      <div className="w-full h-20 hover:bg-[#c00000]/[0.05] cursor-pointer border-b px-3 hidden lg:flex justify-start items-center gap-2">
        <span className="w-auto h-auto relative">
          <img
            src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.1.1828858886.1716668774&semt=ais_user"
            className="w-10 h-10 rounded-full shadow-sm"
          />
          <span className="w-3 h-3 rounded-full bg-green-500 shadow-md absolute bottom-0 right-0" />
        </span>
        <div className="w-auto flex flex-col justify-start items-start">
          <h3 className="text-sm font-semibold">Jason Armstrong</h3>
          <h3 className="text-xs text-gray-700 font-semibold">
            jasonmarvel@gmail.com
          </h3>
        </div>
        <button className="w-16 h-6 rounded-full bg-[#c00000] flex items-center justify-center text-white text-xs ml-auto font-medium">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ChatSidebar;
