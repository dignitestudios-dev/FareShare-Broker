import React, { useContext, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import { WhereToIcon } from "../../../assets/export";
import OptionsCard from "../../../components/app/ride/OptionsCard";
import { AppContext } from "../../../context/AppContext";
import FindRide from "./FindRide";

const WhereTo = () => {
  const corporate = [
    {
      title: "Standard",
      label: "Estimated Fare",
      price: 20,
    },
    {
      title: "Wheelchair Accessible",
      label: "Estimated Fare",
      price: 20,
    },
    {
      title: "XL Vehicle",
      label: "Estimated Fare",
      price: 20,
    },
    {
      title: "LUX vehicle",
      label: "Estimated Fare",
      price: 20,
    },
    {
      title: "Black Lux Vehicle",
      label: "Estimated Fare",
      price: 20,
    },
  ];

  const medical = [
    {
      title: "Ambulatory Services",
      label: "Estimated Fare",
      price: 20,
    },
    {
      title: "Wheelchair Accessible",
      label: "Estimated Fare",
      price: 20,
    },
  ];

  const { navigate, tab, setTab } = useContext(AppContext);

  const [find, setFind] = useState(false);

  return (
    <div className="w-full h-auto flex p-4 flex-col gap-4">
      <div className="w-full h-12 flex items-end gap-4 justify-start">
        <button
          onClick={() => navigate("Request a ride", -1)}
          className="w-10 h-10 rounded-full border-2 border-[#c00000] text-[#c00000] flex items-center justify-center"
        >
          <IoArrowBackOutline />
        </button>
        <span className="text-3xl lg:text-4xl text-[#c00000] font-semibold">
          Where to?
        </span>
      </div>
      <div className="w-full h-auto flex justify-start items-end mt-6">
        <div className="w-full  h-full bg-white flex flex-col lg:flex-row items-end justify-center gap-2 lg:gap-3">
          <div class="w-full lg:w-[48%] ">
            <label for="from">From</label>
            <input
              type="text"
              name="from"
              id="from"
              class="h-12 border mt-1 rounded px-4 w-full bg-gray-50"
              value=""
            />
          </div>
          <div className="w-full lg:w-auto flex justify-center items-center">
            <img
              src={WhereToIcon}
              className="h-10 lg:h-12 rotate-90 lg:rotate-0 "
              alt=""
            />
          </div>
          <div class="w-full lg:w-[48%]">
            <label for="from">To</label>
            <input
              type="text"
              name="from"
              id="from"
              class="h-12 border mt-1 rounded px-4 w-full bg-gray-50"
              value=""
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-start items-start w-full gap-4 h-auto">
        <span className="text-4xl font-medium text-[#000]/[0.9]">
          Available Options
        </span>
        <div className="w-full flex flex-wrap h-auto  justify-start gap-4 ">
          {tab == "corporate"
            ? corporate.map((item, key) => {
                return (
                  <OptionsCard
                    title={item.title}
                    label={item.label}
                    price={item.price}
                    key={key}
                  />
                );
              })
            : medical.map((item, key) => {
                return (
                  <OptionsCard
                    title={item.title}
                    label={item.label}
                    price={item.price}
                    key={key}
                  />
                );
              })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 justify-start items-start w-full gap-2 mt-10 h-auto">
        <button
          onClick={() => setFind(true)}
          className="w-full  flex justify-center items-center text-white text-md px-8 font-semibold h-12 rounded-full bg-[#c00000]"
        >
          Find Ride Now
        </button>
        <button
          onClick={() =>
            navigate("Request a ride", "/ride/new-request/schedule-for-later")
          } //later
          className="w-full  flex justify-center items-center text-[#c00000] text-md px-8 font-semibold h-12 rounded-full bg-[#c00000]/[0.12]"
        >
          Schedule for later
        </button>
      </div>

      {find && <FindRide find={find} setFind={setFind} />}
    </div>
  );
};

export default WhereTo;
