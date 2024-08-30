import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import io from "socket.io-client";
import CancelRideModal from "../../components/app/ride/CancelRideModal";

const SOCKET_SERVER_URL = "https://backend.faresharellc.com";
const RideRequests = () => {
  const { navigate } = useContext(AppContext);
  const [isCancelOpen, setIsCancelOpen] = useState(false);
  const [rides, setRides] = useState([]);
  const [loading, setLoading] = useState(false);
  const loadingArr = [1, 2, 3];

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
      "getRidesBroker",
      JSON.stringify({
        brokerId: JSON.parse(localStorage.getItem("broker"))?._id,
        page: 1,
        limit: 50,
      })
    );

    // Listen for the response from the server
    socket.on("getRidesBrokerResponse", (response) => {
      // Store the response in state
      setLoading(false);
      setRides(response?.data);
    });

    // Cleanup: Disconnect socket when component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);
  // useEffect(() => {
  //   const socket = io(SOCKET_SERVER_URL);
  //   socket.on("connect", () => {
  //     console.log("Socket connected:", socket.id);
  //   });

  //   socket.on("connect_error", (err) => {
  //     console.error("Connection error:", err);
  //   });

  //   socket.on("disconnect", (reason) => {
  //     console.warn("Socket disconnected:", reason);
  //   });

  //   socket.emit(
  //     "getRidesBroker",
  //     JSON.stringify({
  //       brokerId: JSON.parse(localStorage.getItem("broker"))?._id,
  //       page: 1,
  //       limit: 50,
  //     })
  //   );

  //   // Listen for the response from the server
  //   socket.on("getRidesBrokerResponse", (response) => {
  //     // Store the response in state
  //     setRides(response?.data);
  //   });

  // Cleanup: Disconnect socket when component unmounts
  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);

  const formatDate = (isoDateString) => {
    const date = new Date(isoDateString);

    const day = String(date.getUTCDate()).padStart(2, "0");
    const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const year = date.getUTCFullYear();

    return `${day}/${month}/${year}`;
  };

  const getStatusStyles = (status) => {
    switch (status) {
      case "active":
      case "driverAssigned":
        return "bg-blue-500/10 border border-blue-500 text-blue-500";
      case "scheduled":
        return "bg-yellow-500/10 border border-yellow-500 text-yellow-500";
      case "completed":
      case "reachedDestination":
        return "bg-green-500/10 border border-green-500 text-green-500";
      case "cancelled":
        return "bg-red-500/10 border border-red-500 text-red-500";
      default:
        return "bg-gray-500/10 border border-gray-500 text-gray-500"; // Default style
    }
  };
  const formatStatus = (status) => {
    return status.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase();
  };
  return (
    <div className="w-full overflow-x-auto rounded-2xl border  border-gray-300 bg-white   ">
      <div class="w-full h-14 px-4 flex justify-between items-center">
        <span class="text-lg  text-[#c00000] font-semibold">Ride Requests</span>
      </div>
      {!loading && rides?.length == 0 && (
        <div className="w-full border-t border-collapse h-32 flex items-center justify-center">
          {/* <img src="" alt="" /> */}
          <span className="text-lg font-bold text-gray-800">
            No Data Available
          </span>
        </div>
      )}
      <table className="w-full border-collapse  text-left text-sm text-gray-500">
        <tbody className="divide-y divide-gray-300 border-t border-[#c00000]">
          {loading &&
            loadingArr?.map((item) => {
              return (
                <tr key={item} className="animate-pulse">
                  <td className="px-6 lg:px-4 py-4">
                    <div className="h-4 bg-gray-300 rounded w-24"></div>
                  </td>
                  <th className="px-6 lg:px-4 py-4">
                    <div className="flex gap-3">
                      <div className="text-sm">
                        <div className="h-4 bg-gray-300 rounded w-32 mb-2"></div>
                        <div className="h-4 bg-gray-300 rounded w-16"></div>
                      </div>
                    </div>
                  </th>
                  <td className="px-6 lg:px-4 py-4">
                    <div className="h-4 bg-gray-300 rounded w-40"></div>
                  </td>
                  <td className="px-6 lg:px-4 py-4">
                    <div className="h-4 bg-gray-300 rounded w-40"></div>
                  </td>
                  <td className="px-6 lg:px-4 py-4">
                    <div className="h-6 bg-gray-300 rounded-full w-20"></div>
                  </td>
                  <td className="px-6 lg:px-4 py-4">
                    <div className="h-4 bg-gray-300 rounded w-16"></div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {!loading && rides?.length > 0 && (
        <table className="w-full border-collapse  text-left text-sm text-gray-500">
          <thead className="bg-[#c00000]">
            <tr className="">
              <th
                scope="col"
                className="px-6 lg:px-4  py-4 font-medium text-white"
              >
                Date
              </th>
              <th
                scope="col"
                className="px-6 lg:px-4  py-4 font-medium text-white"
              >
                Client Info
              </th>

              <th
                scope="col"
                className="px-6 lg:px-4  py-4 font-medium text-white"
              >
                Pickup Location
              </th>

              <th
                scope="col"
                className="px-6 lg:px-4  py-4 font-medium text-white"
              >
                Dropoff Location
              </th>
              <th
                scope="col"
                className="px-6 lg:px-4  py-4 font-medium text-white"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 lg:px-4  py-4 font-medium text-white"
              ></th>
              <th
                scope="col"
                className="px-6 lg:px-4  py-4 font-medium text-white"
              ></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300 border-t border-[#c00000]">
            {!loading &&
              rides?.length > 0 &&
              rides?.map((ride, key) => {
                return (
                  <tr key={key} className="">
                    <td className="px-6 lg:px-4  py-4 text-gray-600 font-normal ">
                      {formatDate(ride?.createdAt)}
                    </td>
                    <th className="px-6 lg:px-4  flex gap-3  py-4 font-normal text-gray-900">
                      <div className="text-sm">
                        <div className="font-medium text-gray-800">
                          {ride?.patientFirstName} {ride?.patientLastName}
                        </div>
                        <div className="text-gray-600">
                          {ride?.fareshareUserId?.id
                            ? ride?.fareshareUserId?.id
                            : "N/A"}
                        </div>
                      </div>
                    </th>

                    <td className="px-6 lg:px-4 text-gray-600  py-4 capitalize">
                      {ride?.rideId?.originAddress}
                    </td>
                    <td className="px-6 lg:px-4 text-gray-600 py-4 capitalize">
                      {ride?.rideId?.destinationAddress}
                    </td>

                    <td className="px-6 lg:px-4  py-4">
                      <span
                        className={`w-auto px-2 h-6 capitalize ${getStatusStyles(
                          ride?.rideId?.status
                        )}  hover:opacity-80  rounded-full text-xs`}
                      >
                        {formatStatus(ride?.rideId?.status)}
                      </span>
                    </td>
                    <td className="px-6 lg:px-4  py-4 capitalize">
                      <button
                        onClick={() =>
                          navigate(
                            "Home",
                            `/ride/ride-detail/${ride?.rideId?.id}`
                          )
                        }
                        className="text-[#c00000] text-xs font-semibold"
                      >
                        View More
                      </button>
                    </td>
                    <td className="px-6 lg:px-4  py-4 capitalize">
                      <button
                        onClick={() => setIsCancelOpen(true)}
                        class="w-28 h-8 bg-[#c00000] flex items-center justify-center rounded-full text-xs font-semibold transition-all duration-300 text-[#fff] hover:bg-gray-800"
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
          <CancelRideModal isOpen={isCancelOpen} setIsOpen={setIsCancelOpen} />
        </table>
      )}
    </div>
  );
};

export default RideRequests;