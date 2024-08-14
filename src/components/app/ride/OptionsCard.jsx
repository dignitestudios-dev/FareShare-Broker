import React from "react";

const OptionsCard = ({ title, label, price }) => {
  return (
    <div className="group transition-all duration-200 cursor-pointer w-auto h-[120px] shadow bg-gray-100 hover:bg-[#c00000] rounded-xl border  px-8 py-4 flex flex-col justify-start items-start gap-1">
      <span className="text-2xl text-[#c00000] group-hover:text-white font-medium">
        {title}
      </span>
      <span className="text-gray-400 group-hover:text-gray-200 text-md font-normal">
        {label}
      </span>
      <span className="text-[16px] font-bold text-black group-hover:text-white">
        ${price}
      </span>
    </div>
  );
};

export default OptionsCard;
