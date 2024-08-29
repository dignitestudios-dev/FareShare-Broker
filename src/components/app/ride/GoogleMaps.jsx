import { useState, useEffect, useContext } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Polyline,
  MarkerF,
} from "@react-google-maps/api";
import { decode } from "@mapbox/polyline";
import { AppContext } from "../../../context/AppContext";

const GoogleMaps = ({ origin, destination }) => {
  const { setError } = useContext(AppContext);
  const [path, setPath] = useState([]);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_KEY,
    libraries: ["places"],
  });

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
  }, [origin, destination, isLoaded]);

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
      >
        {path.length > 0 && (
          <Polyline
            path={path}
            options={{
              strokeColor: "#c00000", // Red color
              strokeOpacity: 0.8,
              strokeWeight: 3,
            }}
          />
        )}
        <MarkerF
          icon={{
            url: "/driver.png",
            scaledSize: new window.google.maps.Size(40, 40), // Adjust width and height here
          }}
          position={origin}
        />
        <MarkerF
          position={destination}
          icon={{
            url: "/destination.png",
            scaledSize: new window.google.maps.Size(40, 40), // Adjust width and height here
          }}
        />
      </GoogleMap>
    </div>
  ) : null;
};

export default GoogleMaps;
