import React, { useEffect, useState } from "react";
import { FaCar, FaCarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import CancelRideModal from "../../../components/app/ride/CancelRideModal";

const FindRide = ({ find, setFind, data, message }) => {
  const navigate = useNavigate();
  const [gotRide, setGotRide] = useState(false);

  useEffect(() => {
    if (message == "Taking longer than expected. Still looking for driver") {
      setFind(false);
    }
    console.log(message);
  }, [message, data]);

  // For now the state is changing after five seconds but after backend is implemented we'll only change it if we've got a driver

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`w-screen h-screen fixed top-0 left-0 bg-black/40 flex items-center flex-col gap-5 justify-center transition-all duration-500 ${
        find ? "scale-1" : "scale-0"
      }`}
    >
      <div
        className={`w-full lg:w-[30rem] p-10 h-auto bg-white rounded-3xl flex items-center flex-col gap-5 justify-center `}
      >
        <div className="w-[344px] animate-pulse h-[344px] rounded-full bg-[#c00000]/[0.06] flex items-center justify-center">
          <div className="w-[262px] h-[262px] rounded-full bg-[#c00000]/[0.08] flex items-center justify-center">
            <div className="w-[198px]  h-[198px] rounded-full bg-[#c00000]/[0.08] flex items-center justify-center">
              <FaCarAlt className="text-[#c00000] text-7xl" />
            </div>
          </div>
        </div>
        <span className="text-5xl font-bold text-[#000]/[0.8]">
          Finding Ride
        </span>
        <button
          onClick={() => setIsOpen(true)}
          className="w-52 h-12 rounded-full bg-gray-100 text-md transition-all duration-150 hover:bg-[#c00000] hover:text-white text-[#000]/[0.8] flex items-center justify-center font-bold"
        >
          Cancel
        </button>
        {isOpen && (
          <CancelRideModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setFind={setFind}
          />
        )}
      </div>
    </div>
  );
};

export default FindRide;
