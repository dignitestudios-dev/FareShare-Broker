import React, { useState, useEffect, useContext, useRef } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Polyline,
  MarkerF,
} from "@react-google-maps/api";
import { decode } from "@mapbox/polyline";
import { AppContext } from "../../../context/AppContext";
import { RideBookingContext } from "../../../context/RideBookingContext";
import useSmoothMarkerAnimation from "./useSmoothMarkerAnimation"; // Import the custom hook

const GoogleMaps = ({ origin, destination }) => {
  const { setError } = useContext(AppContext);
  const { rideOrder } = useContext(RideBookingContext);
  const [path, setPath] = useState([]);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_KEY,
    libraries: ["places"],
  });

  const mapRef = useRef(null);
  const driverMarkerRef = useRef(null);
  const [driverPosition, setDriverPosition] = useState(origin);

  useSmoothMarkerAnimation(
    mapRef.current,
    driverMarkerRef.current,
    driverPosition,
    origin
  );

  useEffect(() => {
    if (origin && destination && isLoaded) {
      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(
        {
          origin: origin,
          destination: destination,
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (response, status) => {
          if (status === "OK") {
            if (response.routes && response.routes.length > 0) {
              const route = response.routes[0];
              const encodedPolyline = route.overview_polyline;
              if (encodedPolyline) {
                try {
                  const decodedPath = decode(encodedPolyline);
                  setPath(
                    decodedPath.map((point) => ({
                      lat: point[0],
                      lng: point[1],
                    }))
                  );
                } catch (error) {
                  setError("Error decoding polyline:", error);
                }
              } else {
                setError("Encoded polyline is missing in the response.");
              }
            } else {
              setError("No routes found in the response.");
            }
          } else {
            console.error("Directions request failed due to status: " + status);
          }
        }
      );
    }
  }, [origin, destination, isLoaded, setError]);

  return isLoaded ? (
    <div style={{ width: "100%", height: "400px", borderRadius: "20px" }}>
      <GoogleMap
        mapContainerStyle={{
          width: "100%",
          height: "100%",
          borderRadius: "20px",
        }}
        center={origin}
        zoom={18}
        options={{
          styles: [
            {
              featureType: "landscape",
              elementType: "geometry",
              stylers: [{ hue: "#c00000" }, { saturation: 50 }],
            },
          ],
        }}
        onLoad={(map) => (mapRef.current = map)}
      >
        {path.length > 0 && (
          <Polyline
            path={path}
            options={{
              strokeColor: "#c00000",
              strokeOpacity: 0.8,
              strokeWeight: 5,
            }}
          />
        )}
        <MarkerF
          ref={driverMarkerRef}
          icon={{
            url: "/driver.png",
            scaledSize: new window.google.maps.Size(40, 40),
          }}
          position={driverPosition}
        />
        <MarkerF
          position={destination}
          icon={{
            url: rideOrder === "pickup" ? "/pickup.png" : "/destination.png",
            scaledSize: new window.google.maps.Size(
              rideOrder === "pickup" ? 30 : 20,
              rideOrder === "pickup" ? 30 : 20
            ),
          }}
        />
      </GoogleMap>
    </div>
  ) : null;
};

export default GoogleMaps;
