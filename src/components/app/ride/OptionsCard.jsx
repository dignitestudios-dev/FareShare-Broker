import React from "react";

const OptionsCard = ({ title, label, price }) => {
  return (
    <div className="w-auto h-[120px] shadow bg-gray-100 rounded-xl border  px-8 py-4 flex flex-col justify-start items-start gap-1">
      <span className="text-2xl text-[#c00000] font-medium">{title}</span>
      <span className="text-gray-400 text-md font-normal">{label}</span>
      <span className="text-[16px] font-bold text-black">${price}</span>
    </div>
  );
};

export default OptionsCard;
