import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CancelRideModal from "../../../components/app/ride/CancelRideModal";
import GoogleMaps from "../../../components/app/ride/GoogleMaps";
import { RideBookingContext } from "../../../context/RideBookingContext";

const DriverArriving = () => {
  const navigate = useNavigate();
  const { originCoords, destCoords, created, data } =
    useContext(RideBookingContext);
  useEffect(() => {
    console.log("origin", originCoords);
    console.log("dest", destCoords);
    console.log(data);
    created == null && navigate("/ride/new-request/info");
  }, []);

  const [isCancelOpen, setIsCancelOpen] = useState(false);
  return (
    <div className="w-full h-auto flex flex-col justify-start items-start gap-4">
      <div className="w-full h-auto flex justify-between items-end">
        <div className="w-auto flex flex-col justify-start items-start ">
          <button
            onClick={() => navigate(-1)}
            class=" text-lg  text-[#c00000] font-medium flex gap-1 justify-start items-center"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="48"
                d="M328 112L184 256l144 144"
              ></path>
            </svg>
            <span>Back to Home</span>
          </button>
          <h3 className="ml-5 text-xl font-semibold text-gray-800">
            The Driver is on the Way!
          </h3>
        </div>

        <button class="w-auto px-2 lg:px-4 h-10 flex gap-1 items-center justify-center rounded-xl font-medium text-sm  text-white bg-[#c00000]">
          <span>+</span>Request Another
        </button>
      </div>

      <div className="w-full h-auto flex flex-col justify-start items-start gap-3 bg-gray-50 rounded-3xl p-5">
        <div className="w-full h-auto flex justify-between items-center">
          <div class="flex gap-3 justify-start items-center w-auto h-auto">
            <div class="w-14 h-14 rounded-full bg-gray-100">
              <img
                src={data?.driverId?.profilePicture}
                alt="driver's_profile_picture"
                class="w-full h-full rounded-full"
              />
            </div>
            <div class="w-auto h-auto flex flex-col ">
              <span class="text-lg font-bold leading-5 text-[#000]/[0.8]">
                {data?.driverId?.firstName} {data?.driverId?.lastName}
              </span>
              <span class="text-md capitalize font-medium text-gray-500">
                {data?.vehicleId?.vehicleMake}-{data?.vehicleId?.vehicleName}
              </span>
            </div>
          </div>
          <div class=" bg-[#c00000] py-2 px-4 rounded-lg flex gap-2 justify-start items-center">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="text-xl text-[#fff]"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M408 48H104a72.08 72.08 0 00-72 72v192a72.08 72.08 0 0072 72h24v64a16 16 0 0026.25 12.29L245.74 384H408a72.08 72.08 0 0072-72V120a72.08 72.08 0 00-72-72zM160 248a32 32 0 1132-32 32 32 0 01-32 32zm96 0a32 32 0 1132-32 32 32 0 01-32 32zm96 0a32 32 0 1132-32 32 32 0 01-32 32z"></path>
            </svg>
            <button class="text-sm flex items-start justify-start font-medium text-[#fff]">
              Chat Now
            </button>
          </div>
        </div>
        <div className="w-full h-auto flex justify-start gap-16 items-center">
          <div class="w-auto flex flex-col  justify-start items-start">
            <span class="text-lg font-semibold text-[#000]/[0.8]">
              License Number
            </span>
            <span class="text-md font-medium text-gray-500 ">
              {data?.driverId?.driverLicenseNumber}
            </span>
          </div>

          <div class="w-auto flex flex-col  justify-start items-start">
            <span class="text-lg font-semibold text-[#000]/[0.8]">
              Plate Number
            </span>
            <span class="text-md font-medium text-gray-500 ">
              {data?.vehicleId?.plateNumber}
            </span>
          </div>
        </div>
      </div>

      <div class="w-full h-[40vh] rounded-3xl bg-gray-400">
        <GoogleMaps destination={destCoords} origin={originCoords} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 justify-start items-start w-full gap-2  h-auto">
        <button className="w-full  flex justify-center items-center text-white text-md px-8 font-semibold h-12 rounded-full bg-[#c00000]">
          Meet Your Driver
        </button>
        <button
          onClick={() => setIsCancelOpen(true)} //later
          className="w-full  flex justify-center items-center text-[#c00000] text-md px-8 font-semibold h-12 rounded-full bg-[#c00000]/[0.12]"
        >
          Cancel Ride
        </button>

        {isCancelOpen && (
          <CancelRideModal isOpen={isCancelOpen} setIsOpen={setIsCancelOpen} />
        )}
      </div>
    </div>
  );
};

export default DriverArriving;