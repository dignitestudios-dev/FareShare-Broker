import React, { useEffect, useState } from "react";
import { BsSend } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import ChatSidebar from "../../components/app/chats/ChatSidebar";
import { db } from "../../firebase/firebase";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  addDoc,
  Timestamp,
} from "firebase/firestore";
import { NoData } from "../../assets/export";

export const Chats = () => {
  const [chatRoom, setChatRoom] = useState(null);
  const [messages, setMessages] = useState([]);
  const [messageLoading, setMessageLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function sendMessage(chatRoomId, messageText, e) {
    e.preventDefault();
    try {
      // Reference to the messages collection inside the specific chat room
      const docRef = collection(db, "chats", chatRoomId, "messages");

      // Add a new message to the collection
      await addDoc(docRef, {
        text: messageText,
        createdAt: Timestamp.now(),
        // Add other fields such as senderId, recipientId, etc. if needed
      });
      setMessage("");
    } catch (e) {
      console.error("Error adding message: ", e);
    }
  }

  useEffect(() => {
    if (chatRoom !== null) {
      try {
        setMessageLoading(true);

        const docRef = collection(db, "chats", chatRoom, "messages");

        const orderedQuery = query(docRef, orderBy("createdAt"));

        const unsubscribe = onSnapshot(orderedQuery, (querySnapshot) => {
          const documentsArray = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          console.log("messages", documentsArray);

          setMessages(documentsArray);

          setMessageLoading(false);
        });

        return () => {
          unsubscribe();
        };
      } catch (err) {
        console.log(err);
      }
    }
  }, [chatRoom]);

  return (
    <div className="w-full  h-full grid grid-cols-4 justify-between bg-white">
      <div className="w-full h-full col-span-3 grid grid-cols-3 justify-start items-start">
        {chatRoom == null && (
          <div className="w-full h-full col-span-3 flex flex-col justify-between">
            <div className="w-full h-full flex flex-col items-center justify-center">
              <img src={NoData} alt="" className="w-96" />
              <span className="text-xl font-bold text-gray-700">
                Start New Conversation
              </span>
            </div>
          </div>
        )}
        {chatRoom && messages?.length == 0 && (
          <div className="w-full h-full col-span-3 flex flex-col justify-between">
            <div className="w-full h-full flex flex-col items-center justify-center">
              <img src={NoData} alt="" className="w-96" />
              <span className="text-xl font-bold text-gray-700">
                Start New Conversation
              </span>
            </div>
            <form
              onSubmit={(e) => sendMessage(chatRoom, message, e)}
              className=" w-full flex px-4 justify-center items-center gap-2"
            >
              <input
                className="w-full  shadow-md py-3 px-4 border outline-none focus:border-[#c00000] rounded-full"
                type="text"
                placeholder="Type your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                onClick={() => {
                  sendMessage(chatRoom, message);
                }}
                className="w-12 h-12 shadow-md rounded-full bg-[#c00000] hover:opacity-95 text-xl text-white flex items-center justify-center font-medium"
              >
                <BsSend />
              </button>
            </form>
          </div>
        )}
        {!messageLoading && messages?.length > 0 && (
          <div className="w-full h-full col-span-3 flex flex-col justify-between">
            <div className="flex flex-col  h-full overflow-y-auto">
              {messages?.map((message) => {
                if (
                  message?.uid !==
                  JSON.parse(localStorage.getItem("broker"))?._id
                ) {
                  return (
                    <div
                      key={message?.uid}
                      className="mr-4 flex justify-end mb-4"
                    >
                      <div className=" py-3 px-4 bg-[#c00000] rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                        {message?.text}
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={message?.uid}
                      className="flex ml-4 justify-start mb-4"
                    >
                      <div className=" py-3 px-4 bg-gray-200 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-gray-800">
                        {message?.text}
                      </div>
                    </div>
                  );
                }
              })}
            </div>
            <form
              onSubmit={(e) => sendMessage(chatRoom, message, e)}
              className="px-4 w-full flex justify-center items-center gap-2"
            >
              <input
                className="w-full shadow-md py-3 px-4 border outline-none focus:border-[#c00000] rounded-full"
                type="text"
                placeholder="Type your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                onClick={() => {
                  sendMessage(chatRoom, message);
                }}
                className="w-12 h-12 shadow-md rounded-full bg-[#c00000] hover:opacity-95 text-xl text-white flex items-center justify-center font-medium"
              >
                <BsSend />
              </button>
            </form>
          </div>
        )}
      </div>

      <ChatSidebar setChatRoom={setChatRoom} chatRoom={chatRoom} />
    </div>
  );
};
