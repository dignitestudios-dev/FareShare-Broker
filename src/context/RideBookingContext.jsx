import React, { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/apiInterceptor";
import io from "socket.io-client";
import { AppContext } from "./AppContext";

export const RideBookingContext = createContext();

export const RideBookingContextProvider = ({ children }) => {
  // Global Error State
  const [error, setError] = useState(false);
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

  const SOCKET_SERVER_URL = "https://backend.faresharellc.com";

  const { tab, navigate } = useContext(AppContext);

  const [vehicleType, setVehicleType] = useState(
    tab == "medical" ? "Ambulatory Services" : "Standard"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (originCoords == null && startAddress !== "") {
      setStartError("You must select a valid pickup location to continue");
    } else if (destCoords == null && endAddress !== "") {
      setEndError("You must select a valid destination location to continue");
    } else {
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
        "preRideRequest",
        JSON.stringify({
          brokerId: JSON.parse(localStorage.getItem("broker"))?._id,
          fareshareUserId: personalInfo?.fareshareUserId,
          requesterFirstName: personalInfo?.requesterFirstName,
          requesterLastName: personalInfo?.requesterLastName,
          requesterEmail: personalInfo?.requesterEmail,
          requesterContact: personalInfo?.requesterContact,
          patientFirstName: personalInfo?.patientFirstName,
          patientLastName: personalInfo?.patientLastName,
          patientMI: personalInfo?.patientMI,
          additionalRequests: personalInfo?.additionalRequests,
          originCoords: originCoords,
          destCoords: destCoords,
          vehicleType: vehicleType,
          category: tab,
          isWheelChairAccessible: isWheelChairAccessible,
          isScheduled: false,
          scheduledDate: "2024-07-20T09:00:00.000Z",
          rideDate: new Date().toISOString(),
        })
      );

      // Listen for the response from the server
      socket.on("preRideRequestResponse", (response) => {
        // Store the response in state
        console.log("ride", response);
        setStatus(response?.status);
        setData(response?.data);
        setMessage(response?.message);

        if (response?.status == "findingDriver") {
          setFind(true);

          setDestCoords({
            lat: response?.data?.origin.coordinates[1],
            lng: response?.data?.origin.coordinates[0],
          });
        }

        if (response?.status == "driverAssigned") {
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

        // socket.on("cancelRideResponse", (response) => {
        //   console.log("cancel", response);
        //   setData(response?.data);
        // });

        if (response?.status == "ReachedLocation") {
          console.log(response);
          setDestCoords({
            lat: response?.data?.destination?.coordinates[1],
            lng: response?.data?.destination?.coordinates[0],
          });
          navigate("Request a ride", "/ride/driver-arrived");
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
    if (status == "driverAssigned" || status == "ReachedLocation") {
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
      }}
    >
      {children}
    </RideBookingContext.Provider>
  );
};
