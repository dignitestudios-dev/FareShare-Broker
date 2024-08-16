import { useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Polyline,
  Marker,
} from "@react-google-maps/api";
import { useEffect } from "react";

const GoogleMaps = () => {
  const [path, setPath] = useState([
    { lat: 37.772, lng: -122.214 },
    { lat: 21.291, lng: -157.821 },
  ]);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_KEY,
  });

  // useEffect(() => {
  //   const localData = localStorage.getItem("googleMapPolyline");
  //   if (localData) {
  //     const parsedData = JSON.parse(localData);
  //     setPath(parsedData);
  //   }
  // }, []);

  const removeItem = (index) => {
    const arr = [...path];
    arr.splice(index, 1);
    setPath(arr);
    localStorage.setItem("googleMapPolyline", JSON.stringify(arr));
  };

  return isLoaded ? (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: 1200,
        }}
      >
        <div style={{ width: "100%" }}>
          <GoogleMap
            mapContainerStyle={{
              width: "100%",
              height: "400px",
              borderRadius: "20px",
            }}
            center={{ lat: 37.772, lng: -122.214 }}
            zoom={10}
          >
            {/* =====Polyline===== */}
            <Polyline
              path={path}
              options={{
                strokeColor: "#c00000",
                strokeOpacity: 1,
                strokeWeight: 3,
              }}
            />

            {/* =====Marker===== */}
            {path.map((item, i) => (
              <Marker key={i} position={item} onClick={() => removeItem(i)} />
            ))}
          </GoogleMap>
        </div>
      </div>
    </>
  ) : null;
};

export default GoogleMaps;
