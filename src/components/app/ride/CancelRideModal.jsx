import React, { useContext, useRef } from "react";
import { AppContext } from "../../../context/AppContext";
import io from "socket.io-client";

const SOCKET_SERVER_URL = "https://backend.faresharellc.com";

const CancelRideModal = ({ isOpen, setIsOpen, id, rideID, setUpdate }) => {
  const cancelRef = useRef();

  const closeModal = (e) => {
    if (cancelRef.current && !cancelRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const { setError } = useContext(AppContext);

  const cancelRide = (e, id, rideID) => {
    e.preventDefault();
    console.log(rideID, id);
    if (id && rideID) {
      const socket = io(SOCKET_SERVER_URL);
      socket.on("connect", () => {
        console.log("Socket connected:", socket.id);
      });

      socket.on("connect_error", (err) => {
        console.error("Connection error:", err);
      });

      socket.on("disconnect", (reason) => {
        console.warn("Socket disconnected:", reason);
      });

      socket.emit(
        "cancelRideBroker",
        JSON.stringify({
          fareshareUserId: id,
          brokerId: JSON.parse(localStorage.getItem("broker"))?._id,
          rideId: rideID,
        })
      );

      // Listen for the response from the server
      socket.on("cancelRideBrokerResponse", (response) => {
        // Store the response in state
        console.log("cancel", response);
        if (response?.success == true) {
          // setUpdate((prev) => !prev);
        } else {
          setError(response?.message);
        }
      });

      // Cleanup: Disconnect socket when component unmounts
      return () => {
        socket.disconnect();
      };
    }
  };

  const { navigate } = useContext(AppContext);
  return (
    <div
      id="cancel-ride"
      onClick={closeModal}
      className={`fixed top-0 left-0 z-[1000] ${
        isOpen ? "flex" : "hidden"
      } w-screen h-screen justify-center items-center px-2 md:px-0 bg-[#000]/[0.46]`}
    >
      <div
        ref={cancelRef}
        className="w-auto h-auto bg-white p-6 rounded-3xl flex gap-6 flex-col items-start justify-center "
      >
        <div className="w-auto flex flex-col justify-start items-start gap-2">
          <h1 className="text-[26px] font-bold text-black">Cancel Ride</h1>
          <span className="text-[#4b4a4a] font-normal text-[16px]">
            Are you sure you want to cancel ride?
          </span>
        </div>
        <div className="w-full h-8 flex items-center justify-end gap-1 mt-2 px-2">
          <button
            onClick={(e) => {
              cancelRide(e, id, rideID);
            }}
            className="text-white bg-[#c00000] hover:bg-[#c00000d7] w-auto px-4 py-1 rounded-full text-sm font-medium"
          >
            Yes
          </button>
          <button
            onClick={() => {
              setIsOpen(false);
            }}
            className="text-gray-900 bg-gray-100 hover:bg-gray-200 w-auto px-6 py-1 rounded-full text-sm font-medium"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default CancelRideModal;
