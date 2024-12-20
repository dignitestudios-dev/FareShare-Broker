import React, { useContext, useEffect, useRef } from "react";
import { FaCheck } from "react-icons/fa";
import { AppContext } from "../../../context/AppContext";
import { RideBookingContext } from "../../../context/RideBookingContext";

const RideCompletionSuccess = ({ isOpen, setIsOpen }) => {
  const modalRef = useRef();

  const { navigate } = useContext(AppContext);
  const { setCompleteSuccess } = useContext(RideBookingContext);

  useEffect(() => {
    setTimeout(() => {
      navigate("Home", "/home");
      setCompleteSuccess(false);
    }, 2000);
  });

  const toggleModal = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setCompleteSuccess(false);
    }
  };
  return (
    <div
      onClick={toggleModal}
      id="confirmed-ride-modal"
      className={`fixed top-0 left-0 ${
        isOpen ? "flex" : "hidden"
      } w-screen h-screen z-[1000]  justify-center items-center px-2 md:px-0 bg-[#000]/[0.46]`}
    >
      <div
        ref={modalRef}
        className="w-[471px] h-[320px] flex flex-col gap-4 justify-center items-center bg-white rounded-3xl"
      >
        <div className="w-[131px] h-[131px] flex items-center justify-center bg-[#c00000]/[0.10] rounded-full">
          <FaCheck className="text-2xl text-[#c00000]" />
        </div>
        <span className="w-[324px] h-auto text-center text-black text-2xl font-semibold">
          Ride has been completed!
        </span>

        <span className="text-gray-500 text-lg font-medium text-center w-[324px]">
          You are being redirected to the home page.
        </span>
      </div>
    </div>
  );
};

export default RideCompletionSuccess;
