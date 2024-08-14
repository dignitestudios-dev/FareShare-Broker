import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Splash = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
    }, 1200);
  }, []);
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div class="w-full h-full  flex items-center justify-center animate one text-4xl font-bold text-[#c00000]">
        <img
          src="https://fareshare.vercel.app/assets/fareshare_logo-15fzbzBE.svg"
          alt=""
          className="w-[30%] "
        />
      </div>
    </div>
  );
};

export default Splash;
