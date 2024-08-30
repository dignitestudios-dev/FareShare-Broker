import React from "react";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import api from "../../../api/apiInterceptor";
import { useEffect } from "react";
import { NoData } from "../../../assets/export";
import { FaArrowRight } from "react-icons/fa";

const ChatSidebar = ({ chatRoom, setChatRoom }) => {
  // Chat Rooms:
  const [chatRooms, setChatRooms] = useState(null);

  const getChatRooms = async () => {
    const chatRooms = await api.get("/chat");
    setChatRooms(chatRooms?.data?.data);
    setChatRoom(chatRooms?.data?.data[0]?.chatId);
  };

  useEffect(() => {
    getChatRooms();
  }, []);
  return (
    <div className="hidden  col-span-1 lg:flex flex-col h-full overflow-y-auto  border-l ">
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
      {chatRooms == null || chatRooms?.length < 0 ? (
        <div className="w-full h-[60vh] flex border-t items-center border-collapse justify-center">
          <span className="text-xl font-bold text-gray-600">
            No Chat Rooms Available
          </span>
        </div>
      ) : (
        chatRooms?.map((room, key) => {
          return (
            <button
              type="button"
              key={key}
              onClick={() => setChatRoom(room?.chatId)}
              className={`w-full h-20 hover:bg-[#c00000]/[0.05] ${
                chatRoom == room?.chatId && "bg-[#c00000]/[0.05]"
              } cursor-pointer border-b px-3 hidden lg:flex justify-start items-center gap-2`}
            >
              <span className="w-auto h-auto bg-gray-200 p-1 rounded-full relative">
                <img
                  src={
                    room?.profile?.image
                      ? room?.profile?.image
                      : "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg&ga=GA1.1.1828858886.1716668774&semt=ais_user"
                  }
                  className="w-10 h-10  rounded-full shadow-sm"
                />
                {room?.profile?.online ? (
                  <span className="w-3 h-3 rounded-full bg-green-500 shadow-md absolute bottom-0 right-0" />
                ) : (
                  <span className="w-3 h-3 rounded-full bg-red-500 shadow-md absolute bottom-0 right-0" />
                )}
              </span>
              <div className="w-auto flex flex-col justify-start items-start">
                <h3 className="text-sm font-semibold">{room?.profile?.name}</h3>
                <h3 className="text-xs text-gray-700 font-semibold">
                  {room?.profile?.email}
                </h3>
              </div>
              <button
                className={`w-6 h-6 rounded-full ${
                  chatRoom == room?.chatId
                    ? "border-2 border-[#c00000] text-[#c00000]"
                    : "border-2 border-gray-300 text-gray-300"
                }  flex items-center justify-center  text-xs ml-auto font-normal`}
              >
                <FaArrowRight />
              </button>
            </button>
          );
        })
      )}
    </div>
  );
};

export default ChatSidebar;
