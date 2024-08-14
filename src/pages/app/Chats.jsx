import React from "react";
import { BsSend } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import ChatSidebar from "../../components/app/chats/ChatSidebar";

export const Chats = () => {
  return (
    <div className="w-full flex h-full flex-row justify-between bg-white">
      <div className="w-full h-full px-5 flex flex-col justify-between">
        <div className="flex flex-col mt-5 h-full overflow-y-auto">
          <div className="flex justify-end mb-4">
            <div className="mr-2 py-3 px-4 bg-gray-300 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-gray-800">
              Welcome to group everyone !
            </div>
            <img
              src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.1.1828858886.1716668774&semt=ais_user"
              className="object-cover h-8 w-8 rounded-full"
              alt=""
            />
          </div>
          <div className="flex justify-start mb-4">
            <img
              src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.1.1828858886.1716668774&semt=ais_user"
              className="object-cover h-8 w-8 rounded-full"
              alt=""
            />
            <div className="ml-2 py-3 px-4 bg-[#c00000] rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              at praesentium, aut ullam delectus odio error sit rem. Architecto
              nulla doloribus laborum illo rem enim dolor odio saepe,
              consequatur quas?
            </div>
          </div>
          <div className="flex justify-end mb-4">
            <div>
              <div className="mr-2 py-3 px-4 bg-gray-300 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-gray-800">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Magnam, repudiandae.
              </div>

              <div className="mt-4 mr-2 py-3 px-4 bg-gray-300 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Debitis, reiciendis!
              </div>
            </div>
            <img
              src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.1.1828858886.1716668774&semt=ais_user"
              className="object-cover h-8 w-8 rounded-full"
              alt=""
            />
          </div>
          <div className="flex justify-start mb-4">
            <img
              src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.1.1828858886.1716668774&semt=ais_user"
              className="object-cover h-8 w-8 rounded-full"
              alt=""
            />
            <div className="ml-2 py-3 px-4 bg-[#c00000] rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
              happy holiday guys!
            </div>
          </div>
        </div>
        <div className="py-5 w-full flex justify-center items-center gap-2">
          <input
            className="w-[94%] shadow-md py-3 px-4 border outline-none focus:border-[#c00000] rounded-full"
            type="text"
            placeholder="Type your message here..."
          />
          <button className="w-12 h-12 shadow-md rounded-full bg-[#c00000] hover:opacity-95 text-xl text-white flex items-center justify-center font-medium">
            <BsSend />
          </button>
        </div>
      </div>
      <ChatSidebar />
    </div>
  );
};
