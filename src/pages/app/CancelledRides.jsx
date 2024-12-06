import React, { useContext, useEffect, useState } from "react";
import io from "socket.io-client";
import { AppContext } from "../../context/AppContext";

const SOCKET_SERVER_URL = "https://backend.faresharellc.com";

const CancelledRides = () => {
  const { navigate } = useContext(AppContext);
  const [isCancelOpen, setIsCancelOpen] = useState(false);
  const [rides, setRides] = useState([]);
  const loadingArr = [1, 2, 3];
  const [loading, setLoading] = useState(false);

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
      "getRidesCancelledBroker",
      JSON.stringify({
        brokerId: JSON.parse(localStorage.getItem("broker"))?._id,
        status: "Cancelled",
      })
    );

    // Listen for the response from the server
    socket.on("getRidesCancelledBrokerResponse", (response) => {
      console.log(response);
      // Store the response in state
      setLoading(false);
      setRides(response?.data);
    });

    // Cleanup: Disconnect socket when component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);

  // pagination related data:

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(rides?.length / itemsPerPage);

  const currentData = rides?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
    return status
      ? status.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase()
      : status;
  };

  return (
    <div>
      <div className="w-full overflow-x-auto rounded-2xl border  border-gray-300 bg-gray-50   ">
        <div class="w-full h-14 px-4 flex justify-between items-center">
          <span class="text-lg  text-[#c00000] font-semibold">
            Cancelled Rides
          </span>
        </div>
        {!loading && rides?.length == 0 && (
          <div className="w-full border-t border-collapse h-auto flex items-center justify-center">
            <div className="w-full h-[80vh] py-6 flex flex-col  border-t items-center border-collapse justify-center">
              <img src={"/no-data.png"} alt="no-data" className="w-48" />
              <span className="text-gray-700 text-xl font-bold">
                No Data Available
              </span>
            </div>
          </div>
        )}
        {loading && (
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
        )}

        {!loading && rides?.length > 0 && (
          <>
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
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300 border-t border-[#c00000]">
                {!loading &&
                  rides?.length > 0 &&
                  currentData?.map((ride, key) => {
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

                        <td className="py-4">
                          <span
                            className={`inline-flex items-center justify-center px-2 h-6 min-w-[100px] max-w-full overflow-hidden text-ellipsis whitespace-nowrap capitalize ${getStatusStyles(
                              ride?.rideId?.status
                            )} hover:opacity-80 rounded-full text-xs`}
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
                            className="text-[#c00000] inline-flex items-center justify-center px-2 h-6 min-w-[100px] max-w-full overflow-hidden text-ellipsis whitespace-nowrap capitalize font-semibold"
                          >
                            View More
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}
      </div>
      {!loading && rides?.length > 0 && (
        <nav
          class="flex items-center  justify-end mt-2 -space-x-px"
          aria-label="Pagination"
        >
          <button
            type="button"
            onClick={() =>
              goToPage(currentPage > 1 ? currentPage - 1 : currentPage)
            }
            class="min-h-[38px] min-w-[38px] py-2 bg-gray-50 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-xl last:rounded-e-xl border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none "
            aria-label="Previous"
          >
            <svg
              class="shrink-0 size-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m15 18-6-6 6-6"></path>
            </svg>
            <span class="hidden sm:block">Previous</span>
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              type="button"
              key={i}
              onClick={() => goToPage(i + 1)}
              class={`min-h-[38px] min-w-[38px]  flex hover:bg-gray-100 justify-center items-center  text-gray-800 ${
                currentPage === i + 1
                  ? " border bg-[#c00000] text-white hover:bg-[#c00000] "
                  : "border bg-gray-50"
              }    py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg focus:outline-none  disabled:opacity-50 disabled:pointer-events-none `}
              aria-current="page"
            >
              {i + 1}
            </button>
          ))}
          <button
            type="button"
            onClick={() =>
              goToPage(currentPage < totalPages ? currentPage + 1 : currentPage)
            }
            class="min-h-[38px] min-w-[38px] py-2 bg-gray-50 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-xl last:rounded-e-xl border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none "
            aria-label="Next"
          >
            <span class="hidden sm:block">Next</span>
            <svg
              class="shrink-0 size-3.5"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </button>
        </nav>
      )}
    </div>
  );
};

export default CancelledRides;
