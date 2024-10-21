import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RideBookingContext } from "../../../context/RideBookingContext";
import GoogleMaps from "../../../components/app/ride/GoogleMaps";
import RideCompletionSuccess from "../../../components/app/ride/RideCompletionSuccess";

const DriverArrived = () => {
  const navigate = useNavigate();
  const {
    originCoords,
    destCoords,
    created,
    data,
    completeSuccess,
    setCompleteSuccess,
  } = useContext(RideBookingContext);
  useEffect(() => {
    console.log("origin", originCoords);
    console.log("dest", destCoords);
    console.log(data);
    created == null && navigate("/ride/new-request/info");
  }, []);

  return (
    <div className="w-full h-auto flex flex-col justify-start items-start gap-4">
      <div className="w-full h-auto flex justify-between items-end">
        <div className="w-auto flex flex-col justify-start items-start ">
          <button
            onClick={() => navigate(-1)}
            class=" text-lg  text-[#c00000] font-medium flex gap-1 justify-start items-center"
            href="/home/"
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
            The Driver has reached the pickup point!
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
            <button
              onClick={() => navigate("/chats")}
              class="text-sm flex items-start justify-start font-medium text-[#fff]"
            >
              Chat Now
            </button>
          </div>
        </div>
        <div className="w-full h-auto flex justify-between gap-16 items-center">
          <div className="w-1/2 flex justify-start gap-5 items-center">
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

          <div class="flex w-1/3  h-auto items-center gap-2 justify-end">
            <div class="w-2/3 bg-gray-300 relative h-[2px] rounded-full">
              <span
                style={{
                  width:
                    data?.driverId == null
                      ? "0%"
                      : `${data.driverId?.preferrability * 100}%`,
                }}
                class="bg-[#c00000] z-10 absolute top-0 left-0 h-[2px] rounded-full"
              ></span>
            </div>
            <div class="flex justify-end items-end gap-2 w-auto h-auto">
              <span class="text-[#c00000] text-md md:text-xl font-semibold">
                {data?.driverId?.preferrability * 100}%
              </span>
            </div>
          </div>
        </div>

        <div className="w-full h-auto flex justify-between gap-16 items-center">
          <div className="w-auto flex justify-start items-start gap-2">
            <div class="w-32 h-28">
              <img
                src={data?.vehicleId?.vehicleImageFront}
                alt="car image"
                class="w-full h-full rounded-xl"
              />
            </div>
            <div class="w-32 h-28">
              <img
                src={data?.vehicleId?.vehicleImageBack}
                alt="car image"
                class="w-full h-full rounded-xl"
              />
            </div>
            <div class="w-32 h-28">
              <img
                src={data?.vehicleId?.vehicleImageInteriorBack}
                alt="car image"
                class="w-full h-full rounded-xl"
              />
            </div>
            <div class="w-32 h-28">
              <img
                src={data?.vehicleId?.vehicleImageInteriorFront}
                alt="car image"
                class="w-full h-full rounded-xl"
              />
            </div>
            <div class="w-32 h-28">
              <img
                src={data?.vehicleId?.vehicleImagePassengerSide}
                alt="car image"
                class="w-full h-full rounded-xl"
              />
            </div>
          </div>
          <div class="w-1/2 h-20 flex items-center gap-5 justify-end">
            <div class="w-auto h-full flex justify-start gap-2 items-center">
              <div class="w-8 h-full flex items-center justify-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  class="text-4xl text-[#c00000]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M499.99 176h-59.87l-16.64-41.6C406.38 91.63 365.57 64 319.5 64h-127c-46.06 0-86.88 27.63-103.99 70.4L71.87 176H12.01C4.2 176-1.53 183.34.37 190.91l6 24C7.7 220.25 12.5 224 18.01 224h20.07C24.65 235.73 16 252.78 16 272v48c0 16.12 6.16 30.67 16 41.93V416c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h256v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-54.07c9.84-11.25 16-25.8 16-41.93v-48c0-19.22-8.65-36.27-22.07-48H494c5.51 0 10.31-3.75 11.64-9.09l6-24c1.89-7.57-3.84-14.91-11.65-14.91zm-352.06-17.83c7.29-18.22 24.94-30.17 44.57-30.17h127c19.63 0 37.28 11.95 44.57 30.17L384 208H128l19.93-49.83zM96 319.8c-19.2 0-32-12.76-32-31.9S76.8 256 96 256s48 28.71 48 47.85-28.8 15.95-48 15.95zm320 0c-19.2 0-48 3.19-48-15.95S396.8 256 416 256s32 12.76 32 31.9-12.8 31.9-32 31.9z"></path>
                </svg>
              </div>
              <div class="w-full h-full flex flex-col  justify-center items-start gap-0">
                <span class="text-xl text-black font-bold">
                  {data?.driverId?.ridesCompleted}
                </span>
                <span class="text-gray-700 text-md font-semibold">
                  Rides completed
                </span>
              </div>
            </div>
            <div class="w-auto h-full flex justify-start gap-2 items-center">
              <div class="w-8 h-full flex items-center justify-center">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-4xl text-[#c00000]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m4 4 7.07 17 2.51-7.39L21 11.07z"></path>
                </svg>
              </div>
              <div class="w-full h-full flex flex-col justify-center items-start gap-0">
                <span class="text-xl text-black font-bold">
                  {data?.driverId?.milesTravelled} miles
                </span>
                <span class="text-gray-700 text-md font-semibold">
                  Distance Travelled
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full h-auto rounded-3xl bg-gray-400">
        <GoogleMaps destination={destCoords} origin={originCoords} />
      </div>

      {completeSuccess && (
        <RideCompletionSuccess
          isOpen={completeSuccess}
          setIsOpen={setCompleteSuccess}
        />
      )}

      <div className="grid grid-cols-1  justify-start items-start w-full gap-2  h-auto">
        <button
          onClick={() => navigate(`/ride/ride-detail/${data?._id}`)}
          className="w-full  flex justify-center items-center text-[#c00000] text-md px-8 font-semibold h-12 rounded-full bg-[#c00000]/[0.12]"
        >
          Track Ride
        </button>
      </div>
    </div>
  );
};

export default DriverArrived;
