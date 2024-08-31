import React from "react";
import { MdOutlinePending } from "react-icons/md";
import { VscOpenPreview } from "react-icons/vsc";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RiProgress2Line } from "react-icons/ri";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import GoogleMaps from "../../components/app/ride/GoogleMaps";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import io from "socket.io-client";
import { useParams } from "react-router-dom";

const SOCKET_SERVER_URL = "https://backend.faresharellc.com";

const TrackRideDetail = () => {
  const { id } = useParams();
  const { navigate } = useContext(AppContext);
  const [isCancelOpen, setIsCancelOpen] = useState(false);
  const { originCoords } = useContext(AppContext);
  const [ride, setRide] = useState([]);

  const loadingArr = [1, 2, 3];
  const [loading, setLoading] = useState(false);
  const [origin, setOrigin] = useState({ lat: 0, lng: 0 });
  const [dest, setDest] = useState({ lat: 0, lng: 0 });
  const [status, setStatus] = useState(null);

  useEffect(() => {
    setLoading(true);
    const socket = io(SOCKET_SERVER_URL);
    socket.on("connect", () => {
      console.log("Socket connected:", socket.id);
    });

    socket.on("connect_error", (err) => {
      console.error("Connection error:", err);
    });

    socket.on("disconnect", (reason) => {
      console.warn("Socket disconnected:", reason);
    });

    socket.emit(
      "getRideBroker",
      JSON.stringify({
        brokerId: JSON.parse(localStorage.getItem("broker"))?._id,
        rideId: id,
      })
    );

    // Listen for the response from the server
    socket.on("getRideBrokerResponse", (response) => {
      // Store the response in state
      setLoading(false);
      if (response) {
        setStatus(response?.status);
        console.log(response);
        setRide(response?.data);

        response?.status == "reachedDestination"
          ? setOrigin({
              lat: response?.data?.origin?.coordinates[1]
                ? response?.data?.origin?.coordinates[1]
                : 0,
              lng: response?.data?.origin?.coordinates[0]
                ? response?.data?.origin?.coordinates[0]
                : 0,
            })
          : response?.data?.driverId !== null &&
            response?.status == "driverAssigned"
          ? setOrigin({
              lat: response?.data?.driverId?.currentLocation?.coordinates[1]
                ? response?.data?.driverId?.currentLocation?.coordinates[1]
                : 0,
              lng: response?.data?.driverId?.currentLocation?.coordinates[0]
                ? response?.data?.driverId?.currentLocation?.coordinates[0]
                : 0,
            })
          : response?.data?.driverId !== null &&
            response?.status == "reachedLocation"
          ? setOrigin({
              lat: response?.data?.driverId?.currentLocation?.coordinates[1]
                ? response?.data?.driverId?.currentLocation?.coordinates[1]
                : 0,
              lng: response?.data?.driverId?.currentLocation?.coordinates[0]
                ? response?.data?.driverId?.currentLocation?.coordinates[0]
                : 0,
            })
          : response?.data?.driverId !== null &&
            response?.status == "inProgress"
          ? setOrigin({
              lat: response?.data?.driverId?.currentLocation?.coordinates[1]
                ? response?.data?.driverId?.currentLocation?.coordinates[1]
                : 0,
              lng: response?.data?.driverId?.currentLocation?.coordinates[0]
                ? response?.data?.driverId?.currentLocation?.coordinates[0]
                : 0,
            })
          : setOrigin({
              lat: response?.data?.origin?.coordinates[1]
                ? response?.data?.origin?.coordinates[1]
                : 0,
              lng: response?.data?.origin?.coordinates[0]
                ? response?.data?.origin?.coordinates[0]
                : 0,
            });

        response?.status == "reachedDestination"
          ? setDest({
              lat: response?.data?.destination?.coordinates[1]
                ? response?.data?.destination?.coordinates[1]
                : 0,
              lng: response?.data?.destination?.coordinates[0]
                ? response?.data?.destination?.coordinates[0]
                : 0,
            })
          : response?.status == "driverAssigned" &&
            response?.data?.driverId !== null
          ? setDest({
              lat: response?.data?.origin?.coordinates[1]
                ? response?.data?.origin?.coordinates[1]
                : 0,
              lng: response?.data?.origin?.coordinates[0]
                ? response?.data?.origin?.coordinates[0]
                : 0,
            })
          : response?.status == "reachedLocation" &&
            response?.data?.driverId !== null
          ? setDest({
              lat: response?.data?.destination?.coordinates[1]
                ? response?.data?.destination?.coordinates[1]
                : 0,
              lng: response?.data?.destination?.coordinates[0]
                ? response?.data?.destination?.coordinates[0]
                : 0,
            })
          : response?.status == "inProgress" &&
            response?.data?.driverId !== null
          ? setDest({
              lat: response?.data?.destination?.coordinates[1]
                ? response?.data?.destination?.coordinates[1]
                : 0,
              lng: response?.data?.destination?.coordinates[0]
                ? response?.data?.destination?.coordinates[0]
                : 0,
            })
          : setDest({
              lat: response?.data?.destination?.coordinates[1]
                ? response?.data?.destination?.coordinates[1]
                : 0,
              lng: response?.data?.destination?.coordinates[0]
                ? response?.data?.destination?.coordinates[0]
                : 0,
            });

        response?.data?.driverId !== null
          ? setOrigin({
              lat: response?.data?.driverId?.currentLocation?.coordinates[1]
                ? response?.data?.driverId?.currentLocation?.coordinates[1]
                : 0,
              lng: response?.data?.driverId?.currentLocation?.coordinates[0]
                ? response?.data?.driverId?.currentLocation?.coordinates[0]
                : 0,
            })
          : setOrigin({
              lat: response?.data?.origin?.coordinates[1]
                ? response?.data?.origin?.coordinates[1]
                : 0,
              lng: response?.data?.origin?.coordinates[0]
                ? response?.data?.origin?.coordinates[0]
                : 0,
            });

        // response?.data?.driverId !== null
        //   ? setDest({
        //       lat: response?.data?.origin?.coordinates[1]
        //         ? response?.data?.origin?.coordinates[1]
        //         : 0,
        //       lng: response?.data?.origin?.coordinates[0]
        //         ? response?.data?.origin?.coordinates[0]
        //         : 0,
        //     })
        //   : setDest({
        //       lat: response?.data?.destination?.coordinates[1]
        //         ? response?.data?.destination?.coordinates[1]
        //         : 0,
        //       lng: response?.data?.destination?.coordinates[0]
        //         ? response?.data?.destination?.coordinates[0]
        //         : 0,
        //     });
      }
    });

    // Cleanup: Disconnect socket when component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    console.log(origin);
    console.log(dest);
  }, [origin, dest]);

  useEffect(() => {
    if (
      status == "driverAssigned" ||
      status == "ReachedLocation" ||
      status == "inProgress"
    ) {
      const socket = io(SOCKET_SERVER_URL);
      socket.on("connect", () => {
        console.log("Socket connected:", socket.id);
      });

      socket.on("connect_error", (err) => {
        console.error("Connection error:", err);
      });

      socket.on("disconnect", (reason) => {
        console.warn("Socket disconnected:", reason);
      });

      socket.emit(
        "updateLocation",
        JSON.stringify({
          driverId: ride?.data?.driverId?.id,
          rideId: ride?.data?._id,
          currentLocation: [
            ride?.data?.driverId?.currentLocation?.coordinates[1],
            ride?.data?.driverId?.currentLocation?.coordinates[0],
          ],
        })
      );
      console.log("ride", ride);
      console.log(
        JSON.stringify({
          driverId: ride?.data?.driverId?.id,
          rideId: ride?.data?._id,
          currentLocation: [
            ride?.data?.driverId?.currentLocation?.coordinates[1],
            ride?.data?.driverId?.currentLocation?.coordinates[0],
          ],
        })
      );

      // Listen for the response from the server
      socket.on("updateLocationResponse", (response) => {
        // Store the response in state
        if (response?.success) {
          console.log("update", response);

          setOrigin({
            lat: response?.data?.coordinates[1],
            lng: response?.data?.coordinates[0],
          });
        }
      });

      // Cleanup: Disconnect socket when component unmounts
      return () => {
        socket.disconnect();
      };
    }
  }, [status, ride]);

  return (
    <div className="w-[calc(100%+2rem)] h-full -m-4  flex flex-col justify-start items-start">
      <div className="w-full p-4 h-auto flex gap-6 justify-between items-start">
        <div className="w-auto flex flex-col gap-1 justify-start items-start">
          <h3 className="text-xl font-semibold text-gray-900">
            Requester Information
          </h3>
          <span className="text-2xl font-bold text-[#c00000]">Jane Doe</span>
        </div>
        <div className="w-auto flex flex-col justify-start items-start">
          <span className="flex text-lg text-gray-900 font-semibold justify-start items-center gap-2">
            <span className="">Estimated Fare:</span>
            <span className="text-[#c00000]">${ride?.estimatedFare}</span>
          </span>
        </div>
      </div>

      <div className="w-full border-y grid grid-cols-3 justify-start items-start">
        <div className="w-full px-6 py-4 lg:col-span-1 border-r flex flex-col gap-4 justify-start items-start ">
          <span className="text-xl font-bold text-gray-900">Timeline</span>
          <ul
            role="list"
            class="w-auto flex flex-col items-start justify-center"
          >
            <li>
              <div class="relative pb-8 color-drip-container">
                <span
                  class=" bg-gray-200 absolute top-4 left-4 -ml-px h-full w-0.5 "
                  aria-hidden="true"
                >
                  <span className="anim"></span>
                </span>
                <div class="relative flex space-x-3">
                  <div>
                    <span class="h-8 w-8 rounded-full bg-[#c00000] text-white text-lg flex items-center justify-center">
                      <MdOutlinePending />
                    </span>
                  </div>
                  <div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                      <p class="text-sm text-gray-500">Pending</p>
                    </div>
                    <div class="whitespace-nowrap text-right text-sm text-gray-500">
                      <time datetime="2020-09-20">08:00 PM</time>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="relative pb-8">
                <span
                  class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                ></span>
                <div class="relative flex space-x-3">
                  <div>
                    <span class="h-8 w-8 rounded-full bg-gray-200 text-gray-600 text-lg  flex items-center justify-center ">
                      <VscOpenPreview />
                    </span>
                  </div>
                  <div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                      <p class="text-sm text-gray-500">In-review</p>
                    </div>
                    <div class="whitespace-nowrap text-right text-sm text-gray-500">
                      <time datetime="2020-09-22">08:02 PM</time>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="relative pb-8">
                <span
                  class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                ></span>
                <div class="relative flex space-x-3">
                  <div>
                    <span class="h-8 w-8 rounded-full bg-gray-200 text-gray-600 text-lg  flex items-center justify-center ">
                      <IoMdCheckmarkCircleOutline />
                    </span>
                  </div>
                  <div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                      <p class="text-sm text-gray-500">Confirmed</p>
                    </div>
                    <div class="whitespace-nowrap text-right text-sm text-gray-500">
                      <time datetime="2020-09-28">08:04 PM</time>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="relative pb-8">
                <span
                  class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                ></span>
                <div class="relative flex space-x-3">
                  <div>
                    <span class="h-8 w-8 rounded-full bg-gray-200 text-gray-600 text-lg  flex items-center justify-center ">
                      <RiProgress2Line />
                    </span>
                  </div>
                  <div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                      <p class="text-sm text-gray-500">In-progress</p>
                    </div>
                    <div class="whitespace-nowrap text-right text-sm text-gray-500">
                      <time datetime="2020-09-30">08:04 PM</time>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="relative pb-8">
                <div class="relative flex space-x-3">
                  <div>
                    <span class="h-8 w-8 rounded-full bg-gray-200 text-gray-600 text-lg  flex items-center justify-center ">
                      <IoCheckmarkDoneCircleOutline />
                    </span>
                  </div>
                  <div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                      <p class="text-sm text-gray-500">Completed</p>
                    </div>
                    <div class="whitespace-nowrap text-right text-sm text-gray-500">
                      <time datetime="2020-10-04">N/A</time>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="w-full lg:col-span-2 flex flex-col justify-start items-start gap-4">
          <div className="w-full border-b px-6 py-4 flex flex-col gap-4 justify-start items-start">
            <span className="text-xl font-bold text-gray-900">
              Client's Information
            </span>

            <div className="w-full  h-auto flex flex-col justify-start items-start gap-1">
              <div className="w-full flex justify-between items-start">
                <span className="w-1/2 text-[#c00000] text-sm font-semibold">
                  Name:
                </span>
                <span className="w-1/2 text-gray-700 text-sm font-medium">
                  {ride?.userId?.firstName && ride?.userId?.firstName}{" "}
                  {ride?.userId?.lastName && ride?.userId?.lastName}
                </span>
              </div>
              <div className="w-full flex justify-between items-start">
                <span className="w-1/2 text-[#c00000] text-sm font-semibold">
                  Pickup Location:
                </span>
                <span className="w-1/2 text-gray-700 text-sm font-medium">
                  {ride?.originAddress ? ride?.originAddress : "N/A"}
                </span>
              </div>
              <div className="w-full flex justify-between items-start">
                <span className="w-1/2 text-[#c00000] text-sm font-semibold">
                  Dropoff Location:
                </span>
                <span className="w-1/2 text-gray-700 text-sm font-medium">
                  {ride?.destinationAddress ? ride?.destinationAddress : "N/A"}
                </span>
              </div>
              <div className="w-full flex justify-between items-start">
                <span className="w-1/2 text-[#c00000] text-sm font-semibold">
                  Additional Request:
                </span>
                <span className="w-1/2 text-gray-700 text-sm font-medium">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
                  repudiandae.
                </span>
              </div>
            </div>
          </div>
          <div className="w-full  px-6 py-4 flex flex-col gap-4 justify-start items-start">
            <span className="text-xl font-bold text-gray-900">
              Driver's Information
            </span>

            <div className="w-full  h-auto flex flex-col justify-start items-start gap-1">
              <div className="w-full flex justify-between items-start">
                <span className="w-1/2 text-[#c00000] text-sm font-semibold">
                  Name:
                </span>
                <span className="w-1/2 text-gray-700 text-sm font-medium">
                  {ride?.driverId?.firstName
                    ? ride?.driverId?.firstName
                    : "N/A"}{" "}
                  {ride?.driverId?.lastName ? ride?.driverId?.lastName : "N/A"}
                </span>
              </div>
              <div className="w-full flex justify-between items-start">
                <span className="w-1/2 text-[#c00000] text-sm font-semibold">
                  Contact:
                </span>
                <span className="w-1/2 text-gray-700 text-sm font-medium">
                  {ride?.driverId?.phoneNo ? ride?.driverId?.phoneNo : "N/A"}
                </span>
              </div>
              <div className="w-full flex justify-between items-start">
                <span className="w-1/2 text-[#c00000] text-sm font-semibold">
                  Car Model:
                </span>
                <span className="w-1/2 text-gray-700 text-sm font-medium">
                  {ride?.vehicleId?.vehicleMake
                    ? ride?.vehicleId?.vehicleMake
                    : "N/A"}{" "}
                  {ride?.vehicleId?.vehicleName
                    ? ride?.vehicleId?.vehicleName
                    : "N/A"}{" "}
                </span>
              </div>
              <div className="w-full flex justify-between items-start">
                <span className="w-1/2 text-[#c00000] text-sm font-semibold">
                  Car License Plate No.:
                </span>
                <span className="w-1/2 text-gray-700 text-sm font-medium">
                  {ride?.vehicleId?.plateNumber
                    ? ride?.vehicleId?.plateNumber
                    : "N/A"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full   rounded-3xl p-4 ">
        <GoogleMaps
          // origin={{
          //   lat: ride?.driverId?.currentLocation?.coordinates[1],
          //   lng: ride?.driverId?.currentLocation?.coordinates[0],
          // }}
          destination={dest}
          origin={origin}
        />
      </div>
    </div>
  );
};

export default TrackRideDetail;
