import React from "react";

const OptionsCard = ({
  title,
  label,
  price,
  vehicleType,
  setVehicleType,
  setIsWheelChairAccessible,
}) => {
  return (
    <button
      type="button"
      onClick={() => {
        if (title == "Wheelchair Accessible") {
          setVehicleType(title);

          setIsWheelChairAccessible(true);
        } else {
          setVehicleType(title);
          setIsWheelChairAccessible(false);
        }
      }}
      className={`group transition-all duration-200 cursor-pointer w-auto h-[120px] shadow  hover:bg-[#c00000] rounded-xl border  px-8 py-4 flex flex-col justify-start items-start gap-1 ${
        vehicleType == title ? "bg-[#c00000]" : "bg-gray-100"
      }`}
    >
      <span
        className={`text-2xl ${
          vehicleType == title ? "text-white" : "text-[#c00000]"
        } group-hover:text-white font-medium`}
      >
        {title}
      </span>
      <span
        className={` ${
          vehicleType == title ? "text-gray-200" : "text-gray-400"
        } group-hover:text-gray-200 text-md font-normal`}
      >
        {label}
      </span>
      <span
        className={`text-[16px] font-bold text-black ${
          vehicleType == title ? "text-white" : "text-[#c00000]"
        } group-hover:text-white`}
      >
        ${price}
      </span>
    </button>
  );
};

export default OptionsCard;
