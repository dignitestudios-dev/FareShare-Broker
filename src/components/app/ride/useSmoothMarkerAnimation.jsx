import { useEffect, useRef } from "react";

const useMarkerAnimation = (
  map,
  marker,
  startPosition,
  endPosition,
  duration = 2000
) => {
  const startTime = useRef(null);

  useEffect(() => {
    if (!map || !marker) return;

    const animate = (time) => {
      if (!startTime.current) startTime.current = time;
      const elapsed = time - startTime.current;
      const progress = Math.min(elapsed / duration, 1);

      // Linear interpolation
      const lat =
        startPosition.lat + (endPosition.lat - startPosition.lat) * progress;
      const lng =
        startPosition.lng + (endPosition.lng - startPosition.lng) * progress;

      marker.setPosition(new window.google.maps.LatLng(lat, lng));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);

    // Cleanup function
    return () => {
      marker.setPosition(
        new window.google.maps.LatLng(startPosition.lat, startPosition.lng)
      );
    };
  }, [map, marker, startPosition, endPosition, duration]);
};

export default useMarkerAnimation;
