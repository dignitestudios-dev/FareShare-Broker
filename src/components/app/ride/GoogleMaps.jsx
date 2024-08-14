import React, { useState } from "react";
import { GoogleMap, useLoadScript, Autocomplete } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "300px",
  borderRadius: "10px",
};

const center = {
  lat: 37.7749, // Default center coordinates
  lng: -122.4194,
};

const GoogleMaps = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div className="w-full h-full ">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={12}
      >
        {/* Additional map elements like markers, routes, etc. */}
      </GoogleMap>
    </div>
  );
};

export default GoogleMaps;
