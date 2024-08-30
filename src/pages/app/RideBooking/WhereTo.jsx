import React, { useContext, useState, useRef, useEffect } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { WhereToIcon } from "../../../assets/export";
import OptionsCard from "../../../components/app/ride/OptionsCard";
import { AppContext } from "../../../context/AppContext";
import FindRide from "./FindRide";
import { Autocomplete, useLoadScript } from "@react-google-maps/api";
import { personalInfoValues } from "../../../data/personalInfo";
import { RideBookingContext } from "../../../context/RideBookingContext";

const WhereTo = () => {
  const {
    find,
    setFind,
    originCoords,
    setOriginCoords,
    destCoords,
    setDestCoords,
    data,
    setData,
    message,
    setMessage,
    status,
    setStatus,
    handleSubmit,
    startAddress,
    setStartAddress,
    endAddress,
    setEndAddress,
    startError,
    setStartError,
    endError,
    setEndError,
    coordinates,
    setCoordinates,
  } = useContext(RideBookingContext);
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

  const { navigate, tab } = useContext(AppContext);
  const {
    personalInfo,
    setIsWheelChairAccessible,
    vehicleType,
    setVehicleType,
    created,
  } = useContext(RideBookingContext);
  useEffect(() => {
    created == null && navigate("Request a ride", "/ride/new-request/info");
  }, []);

  const startLocationRef = useRef();
  const endLocationRef = useRef();

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_KEY,
    libraries: ["places"],
  });

  const handleStartPlaceChanged = () => {
    const place = startLocationRef.current.getPlace();
    if (place.geometry) {
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      setStartAddress(place?.formatted_address);
      setOriginCoords([lat, lng]);
    }
  };

  const handleEndPlaceChanged = () => {
    const place = endLocationRef.current.getPlace();
    if (place.geometry) {
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      setEndAddress(place?.formatted_address);
      setDestCoords([lat, lng]);
    }
  };

  useEffect(() => {
    if (originCoords == null && startAddress !== "") {
      setStartError("You must select a valid pickup location to continue");
    } else {
      setStartError(false);
    }
  }, [startAddress]);

  useEffect(() => {
    if (destCoords == null && endAddress !== "") {
      setEndError("You must select a valid destination location to continue");
    } else {
      setEndError(false);
    }
  }, [endAddress]);

  if (!isLoaded)
    return (
      <div className="w-full h-auto flex p-4 flex-col gap-4 animate-pulse">
        <div className="w-full h-12 flex items-end gap-4 justify-start">
          <div className="w-10 h-10 rounded-full bg-gray-300"></div>
          <div className="h-8 w-1/3 bg-gray-300 rounded"></div>
        </div>
        <div className="w-full h-auto flex justify-start items-end mt-6">
          <div className="w-full h-full bg-white flex flex-col lg:flex-row items-end justify-center gap-2 lg:gap-3">
            <div className="w-full lg:w-[48%] h-12 bg-gray-300 rounded"></div>
            <div className="w-10 lg:w-12 h-12 bg-gray-300 rounded-full"></div>
            <div className="w-full lg:w-[48%] h-12 bg-gray-300 rounded"></div>
          </div>
        </div>

        <div className="flex flex-col justify-start items-start w-full gap-4 h-auto">
          <div className="h-10 w-1/3 bg-gray-300 rounded"></div>
          <div className="w-full flex flex-wrap h-auto justify-start gap-4">
            {Array(5)
              .fill()
              .map((_, index) => (
                <div
                  key={index}
                  className="w-[calc(50%-0.5rem)] h-[120px] bg-gray-300 rounded-xl"
                ></div>
              ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 justify-start items-start w-full gap-2 mt-10 h-auto">
          <div className="w-full h-12 bg-gray-300 rounded-full"></div>
          <div className="w-full h-12 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    );

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-auto flex p-4 flex-col gap-4"
    >
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
        <div className="w-full h-full bg-white flex flex-col lg:flex-row items-end justify-center gap-2 lg:gap-3">
          <Autocomplete
            className="w-full lg:w-[48%]"
            onLoad={(autocomplete) => (startLocationRef.current = autocomplete)}
            onPlaceChanged={handleStartPlaceChanged}
          >
            <div className="w-full ">
              <label htmlFor="from">From</label>
              <input
                type="text"
                name="from"
                id="from"
                className={`h-12 border mt-1 rounded px-4 w-full bg-gray-50 transition-colors duration-300 ${
                  startError ? "border-red-600 shake" : null
                }`}
                value={startAddress}
                onChange={(e) => setStartAddress(e.target.value)}
                placeholder="Select pickup location"
              />
              {startError ? (
                <p className="text-red-700 text-sm font-medium">{startError}</p>
              ) : null}
            </div>
          </Autocomplete>
          <div className="w-full lg:w-auto flex justify-center items-center">
            <img
              src={WhereToIcon}
              className="h-10 lg:h-12 rotate-90 lg:rotate-0"
              alt=""
            />
          </div>
          <Autocomplete
            className="w-full lg:w-[48%]"
            onLoad={(autocomplete) => (endLocationRef.current = autocomplete)}
            onPlaceChanged={handleEndPlaceChanged}
          >
            <div className="w-full">
              <label htmlFor="to">To</label>
              <input
                type="text"
                name="to"
                id="to"
                className={`h-12 border mt-1 rounded px-4 w-full bg-gray-50 transition-colors duration-300 ${
                  endError ? "border-red-600 shake" : null
                }`}
                value={endAddress}
                onChange={(e) => setEndAddress(e.target.value)}
                placeholder="Select destination location"
              />
              {endError ? (
                <p className="text-red-700 text-sm font-medium">{endError}</p>
              ) : null}
            </div>
          </Autocomplete>
        </div>
      </div>

      <div className="flex flex-col justify-start items-start w-full gap-4 h-auto">
        <span className="text-4xl font-medium text-[#000]/[0.9]">
          Available Options
        </span>
        <div className="w-full flex flex-wrap h-auto justify-start gap-4">
          {tab === "corporate"
            ? corporate.map((item, key) => (
                <OptionsCard
                  setIsWheelChairAccessible={setIsWheelChairAccessible}
                  setVehicleType={setVehicleType}
                  vehicleType={vehicleType}
                  title={item.title}
                  label={item.label}
                  price={item.price}
                  key={key}
                />
              ))
            : medical.map((item, key) => (
                <OptionsCard
                  setIsWheelChairAccessible={setIsWheelChairAccessible}
                  setVehicleType={setVehicleType}
                  vehicleType={vehicleType}
                  title={item.title}
                  label={item.label}
                  price={item.price}
                  key={key}
                />
              ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 justify-start items-start w-full gap-2 mt-10 h-auto">
        <button
          type="submit"
          className="w-full flex justify-center items-center text-white text-md px-8 font-semibold h-12 rounded-full bg-[#c00000]"
        >
          Find Ride Now
        </button>
        <button
          type="button"
          onClick={() =>
            navigate("Request a ride", "/ride/new-request/schedule-for-later")
          }
          className="w-full flex justify-center items-center text-[#c00000] text-md px-8 font-semibold h-12 rounded-full bg-[#c00000]/[0.12]"
        >
          Schedule for later
        </button>
      </div>

      {find && <FindRide />}
    </form>
  );
};

export default WhereTo;
