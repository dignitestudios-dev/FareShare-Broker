import React from "react";
import { BsSend } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

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
        <div className="w-full h-20 hover:bg-[#c00000]/[0.2] cursor-pointer border-b px-3 hidden lg:flex justify-start items-center gap-2">
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
        <div className="w-full h-20 hover:bg-[#c00000]/[0.2] cursor-pointer border-b px-3 hidden lg:flex justify-start items-center gap-2">
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
        <div className="w-full h-20 hover:bg-[#c00000]/[0.2] cursor-pointer border-b px-3 hidden lg:flex justify-start items-center gap-2">
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
    </div>
  );
};
