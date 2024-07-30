import React from "react";

const AuthLayout = ({ page }) => {
  return (
    <div className="w-full h-auto lg:h-screen flex flex-col lg:flex-row items-start">
      <div className="w-full lg:w-1/2 bg-white  h-full">{page}</div>
      <div className="w-full lg:w-1/2 h-full">
        <div class="w-full h-full bg-gray-50 flex items-center justify-center animate one text-4xl font-bold text-[#c00000]">
          <span>F</span>
          <span>A</span>
          <span>R</span>
          <span>E</span> &nbsp;
          <span>S</span>
          <span>H</span>
          <span>A</span>
          <span>R</span>
          <span className="last">E</span>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
