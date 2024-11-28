import React, { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/apiInterceptor";
import io from "socket.io-client";
import { AppContext } from "./AppContext";

export const RideBookingContext = createContext();

export const RideBookingContextProvider = ({ children }) => {
  // Global Error State
  const [personalInfo, setPersonalInfo] = useState(null);
  const [find, setFind] = useState(false);
  const [originCoords, setOriginCoords] = useState(null);
  const [destCoords, setDestCoords] = useState(null);
  const [data, setData] = useState(null);
  const [message, setMessage] = useState(null);
  const [status, setStatus] = useState(null);
  const [startAddress, setStartAddress] = useState("");
  const [startError, setStartError] = useState(false);
  const [endAddress, setEndAddress] = useState("");
  const [endError, setEndError] = useState(false);
  const [coordinates, setCoordinates] = useState(null);
  const [isWheelChairAccessible, setIsWheelChairAccessible] = useState(false);
  const [created, setCreated] = useState(null);
  const [rideOrder, setRideOrder] = useState("pickup");
  const [cancelRides, setCancelRides] = useState({ id: null, rideID: null });
  const [isScheduled, setIsScheduled] = useState(false);
  const [locationInfo, setLocationInfo] = useState(null);
  const [scheduledDate, setScheduledDate] = useState(null);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [completeSuccess, setCompleteSuccess] = useState(false);
  const [types, setTypes] = useState(null);
  const [typesLoading, setTypesLoading] = useState(false);

  const SOCKET_SERVER_URL = "https://backend.faresharellc.com";

  const { tab, navigate, setSuccess, setError, error } = useContext(AppContext);

  const [vehicleType, setVehicleType] = useState("Standard");

  const [rideLoading, setRideLoading] = useState(false);
  const [timer, setTimer] = useState(180);

  let timerInterval = null;

  const startTimer = (socket) => {
    timerInterval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(timerInterval);
          setFind(false);
          setError(
            "Unfortunately, there is no driver available in your region."
          );
          socket.disconnect(); // No ride found
          return 0;
        }
        return prev - 1;
      });
    }, 1000); // Update every second
  };

  const endTimer = () => {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null; // Reset timerInterval
    }
    setFind(false);
    setTimer(180); // Optionally reset the timer
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (originCoords == null || destCoords == null) {
      setError("You must select pickup and destination address.");
    } else if (originCoords == null && startAddress !== "") {
      setStartError("You must select a valid pickup location to continue");
    } else if (destCoords == null && endAddress !== "") {
      setEndError("You must select a valid destination location to continue");
    } else if (typesLoading || types == null) {
      setEndError(
        "Please wait untill we calculate your fares & show you available ride options."
      );
    } else {
      setRideLoading(true);
      const socket = io(SOCKET_SERVER_URL);
      socket.on("connect", () => {
        setStartAddress("");
        setOriginCoords(null);
        setEndAddress("");
        setDestCoords(null);
        console.log("Socket connected:", socket.id);
      });

      socket.on("connect_error", (err) => {
        setFind(false);
        setRideLoading(false);
        console.error("Connection error:", err);
      });

      socket.on("disconnect", (reason) => {
        setRideLoading(false);
        setFind(false);
        console.warn("Socket disconnected:", reason);
      });

      socket.emit(
        "preRideRequest",
        JSON.stringify({
          brokerId: JSON.parse(localStorage.getItem("broker"))?._id,
          fareshareUserId:
            personalInfo?.fareshareUserId == ""
              ? null
              : personalInfo?.fareshareUserId,
          requesterFirstName: personalInfo?.requesterFirstName,
          requesterLastName: personalInfo?.requesterLastName,
          requesterEmail: personalInfo?.requesterEmail,
          requesterContact: personalInfo?.requesterContact,
          patientFirstName: personalInfo?.patientFirstName,
          patientLastName: personalInfo?.patientLastName,
          patientMI:
            personalInfo?.patientMI == "" ? null : personalInfo?.patientMI,
          additionalRequests: personalInfo?.additionalRequests,
          originCoords: originCoords,
          destCoords: destCoords,
          vehicleType: vehicleType,
          category: tab,
          isWheelChairAccessible: isWheelChairAccessible,
          isScheduled: isScheduled,
          scheduledDate: isScheduled ? scheduledDate : new Date().toISOString(),
          rideDate: new Date().toISOString(),
        })
      );

      // Listen for the response from the server
      socket.on("preRideRequestResponse", (response) => {
        if (response?.success == false) {
          setRideLoading(false);
          setError(response?.message);
        }
        // Store the response in state
        console.log("ride", response);
        setStatus(response?.status);
        setData(response?.data);
        setMessage(response?.message);

        if (isScheduled && response?.success) {
          setOpenConfirm(true);
          socket.disconnect();
        }

        setCancelRides({
          id: response?.data?.fareshareUserId?.id,
          rideID: response?.data?.rideId?.id,
        });
        if (response?.status == "findingDriver") {
          startTimer(socket);
          setRideLoading(false);
          setFind(true);

          setDestCoords({
            lat: response?.data?.origin.coordinates[1],
            lng: response?.data?.origin.coordinates[0],
          });
        }

        if (response?.status == "driverAssigned") {
          if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null; // Reset timerInterval
          }
          setTimer(180);
          setSuccess("Driver is assigned and is on the way.");
          setRideOrder("pickup");
          navigate("Request a ride", "/ride/driver-arriving");
          setFind(false);
          console.log({
            lat: response?.data?.driverId?.currentLocation?.coordinates[1],
            lng: response?.data?.driverId?.currentLocation?.coordinates[0],
          });
          setDestCoords({
            lat: response?.data?.origin?.coordinates[1],
            lng: response?.data?.origin?.coordinates[0],
          });
          setOriginCoords({
            lat: response?.data?.driverId?.currentLocation?.coordinates[1],
            lng: response?.data?.driverId?.currentLocation?.coordinates[0],
          });
        }

        if (response?.status == "ReachedLocation") {
          setRideLoading(false);
          setSuccess("Driver has reached the pickup point.");
          setRideOrder("destination");
          setFind(false);
          setDestCoords({
            lat: response?.data?.destination?.coordinates[1],
            lng: response?.data?.destination?.coordinates[0],
          });
          navigate("Request a ride", "/ride/driver-arrived");
        }
        if (response?.status == "inProgress") {
          setFind(false);
          setSuccess(
            "Ride has been started. The driver will take the customer to the destination."
          );
        }

        if (response?.status == "reachedDestination") {
          socket.disconnect();
          setSuccess("Congratulation! Customer reached destination.");
          setCompleteSuccess("Congratulation! Customer reached destination.");
          setFind(false);
        }
        if (response?.status == "cancel") {
          endTimer();
          socket.disconnect();
          setError("Unfortunately! the ride was cancelled.");
          setFind(false);
          navigate("Home", "/home");
        }
      });

      // Cleanup: Disconnect socket when component unmounts
      return () => {
        socket.disconnect();
        clearInterval(startTimer);
      };
    }
  };

  const [cancelLoading, setCancelLoading] = useState(false);
  const cancelRide = (e) => {
    e.preventDefault();
    console.log(cancelRides?.id, cancelRides?.rideID);
    if (cancelRides?.id && cancelRides?.rideID) {
      console.log(
        JSON.stringify({
          fareshareUserId: cancelRides?.id,
          brokerId: JSON.parse(localStorage.getItem("broker"))?._id,
          rideId: cancelRides?.rideID,
        })
      );
      const socket = io(SOCKET_SERVER_URL);
      socket.on("connect", () => {
        setCancelLoading(true);

        console.log("Socket connected:", socket.id);
      });

      socket.on("connect_error", (err) => {
        setCancelLoading(false);

        console.error("Connection error:", err);
      });

      socket.on("disconnect", (reason) => {
        setCancelLoading(false);

        console.warn("Socket disconnected:", reason);
      });

      socket.emit(
        "cancelRideBroker",
        JSON.stringify({
          fareshareUserId: cancelRides?.id,
          brokerId: JSON.parse(localStorage.getItem("broker"))?._id,
          rideId: cancelRides?.rideID,
        })
      );

      // Listen for the response from the server
      socket.on("cancelRideBrokerResponse", (response) => {
        // Store the response in state
        console.log("cancel", response);
        if (response?.success == false) {
          setCancelLoading(false);
          setError(response?.message);
        }
        if (response?.success == true) {
          setCancelLoading(false);
          setFind(false);
          setSuccess("Ride Cancelled Successfully.");
          navigate("Home", "/home");
          // setUpdate((prev) => !prev);
        }
      });

      // Cleanup: Disconnect socket when component unmounts
      return () => {
        socket.disconnect();
      };
    }
  };

  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCompleteSuccess(false);
    }, 2000);
  }, [completeSuccess]);

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
          driverId: data?.driverId?.id,
          rideId: data?._id,
          currentLocation: [
            data?.driverId?.currentLocation?.coordinates[1],
            data?.driverId?.currentLocation?.coordinates[0],
          ],
        })
      );

      // Listen for the response from the server
      socket.on("updateLocationResponse", (response) => {
        // Store the response in state

        if (response?.success) {
          console.log("update", response);

          setCoordinates({
            lat: response?.data?.coordinates[1],
            lng: response?.data?.coordinates[0],
          });
          setOriginCoords({
            lat: response?.data?.coordinates[1],
            lng: response?.data?.coordinates[0],
          });
        }
      });

      // Cleanup: Disconnect socket when component unmounts
      return () => {
        socket.disconnect();
      };
    } else {
      setCoordinates({
        lat: data?.driverId?.currentLocation?.coordinates[1],
        lng: data?.driverId?.currentLocation?.coordinates[0],
      });

      setOriginCoords({
        lat: data?.driverId?.currentLocation?.coordinates[1],
        lng: data?.driverId?.currentLocation?.coordinates[0],
      });
    }
  }, [status, data]);

  return (
    <RideBookingContext.Provider
      value={{
        personalInfo,
        setPersonalInfo,
        setError,
        error,
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
        startAddress,
        setStartAddress,
        endAddress,
        setEndAddress,
        startError,
        setStartError,
        endError,
        setEndError,
        handleSubmit,
        coordinates,
        setCoordinates,
        isWheelChairAccessible,
        setIsWheelChairAccessible,
        vehicleType,
        setVehicleType,
        setCreated,
        created,
        rideOrder,
        setRideOrder,
        rideLoading,
        setRideLoading,
        cancelRide,
        cancelRides,
        cancelLoading,
        isScheduled,
        setIsScheduled,
        locationInfo,
        setLocationInfo,
        scheduledDate,
        openConfirm,
        setOpenConfirm,
        setScheduledDate,
        completeSuccess,
        setCompleteSuccess,
        types,
        setTypes,
        typesLoading,
        setTypesLoading,
      }}
    >
      {children}
    </RideBookingContext.Provider>
  );
};
