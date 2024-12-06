import React, { useEffect } from "react";
import { GiCancel } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const Failure = () => {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("token");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  }, []);
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-auto flex flex-col justify-center items-center gap-2 ">
        <GiCancel className="text-6xl text-red-600 " />
        <span className="text-2xl text-center font-semibold text-gray-800">
          Failed to verify your Bank Account. <br />
          Please re-signup
        </span>
      </div>
    </div>
  );
};

export default Failure;
