import React, { useEffect, useRef, useState } from "react";
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
  const messagesEndRef = useRef(null);

  async function sendMessage(chatRoomId, messageText, e) {
    if (e?.preventDefault) {
      e.preventDefault();
    }

    const trimmedText = messageText?.trim();
    if (!chatRoomId || !trimmedText) {
      return;
    }

    try {
      const docRef = collection(db, "chats", chatRoomId, "messages");

      await addDoc(docRef, {
        text: trimmedText,
        createdAt: Timestamp.now(),
      });
      setMessage("");
    } catch (error) {
      console.error("Error adding message: ", error);
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

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, chatRoom]);

  return (
    <div className="w-full h-full min-h-0 grid grid-cols-4 justify-between bg-white">
      <div className="w-full h-full min-h-0 col-span-3 grid grid-cols-3 justify-start items-start">
        {chatRoom == null && (
          <div className="w-full  col-span-3 border-collapse h-full flex items-center justify-center">
            <div className="w-full h-full py-6 flex flex-col   items-center border-collapse justify-center">
              <img src={"/no-data.png"} alt="no-data" className="w-48" />
              <span className="text-gray-700 text-xl font-bold">
                No Chat Rooms Available
              </span>
            </div>
          </div>
        )}
        {chatRoom && messages?.length == 0 && (
          <div className="w-full h-full min-h-0 col-span-3 flex flex-col justify-between">
            <div className="w-full flex-1 min-h-0 border-t border-collapse flex items-center justify-center">
              <div className="w-full h-full py-6 flex flex-col  border-t items-center border-collapse justify-center">
                <img src={"/no-data.png"} alt="no-data" className="w-48" />
                <span className="text-gray-700 text-xl font-bold">
                  No Data Available
                </span>
              </div>
            </div>
            <form
              onSubmit={(e) => sendMessage(chatRoom, message, e)}
              className="w-full shrink-0 flex px-4 py-3 justify-center items-center gap-2 border-t bg-white"
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
          <div className="w-full h-full min-h-0 col-span-3 flex flex-col justify-between">
            <div className="flex-1 min-h-0 overflow-y-auto px-2 py-2">
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
              <div ref={messagesEndRef} />
            </div>
            <form
              onSubmit={(e) => sendMessage(chatRoom, message, e)}
              className="shrink-0 px-4 py-3 w-full flex justify-center items-center gap-2 border-t bg-white"
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
