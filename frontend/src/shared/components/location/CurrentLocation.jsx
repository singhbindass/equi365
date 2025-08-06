import React, { useEffect, useState } from "react";

const CurrentLocation = () => {
  const [city, setCity] = useState("Detecting city...");

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            const data = await response.json();

            // Extract city/town/village name
            const detectedCity =
              data?.address?.city ||
              data?.address?.town ||
              data?.address?.village ||
              data?.address?.state;

            if (detectedCity) {
              setCity(detectedCity);
            } else {
              setCity("City not found");
            }
          } catch {
            setCity("Unable to detect city");
          }
        },
        () => {
          setCity("Location access denied");
        }
      );
    } else {
      setCity("Geolocation not supported");
    }
  }, []);

  return (

  <div className="fixed left-4 md:left-24 transform -translate-y-1/2 flex flex-col items-start z-50 space-y-4">

  {/* Example Items */}
   <span>📍</span>
      {city}
  
</div>
  );
};

export default CurrentLocation;
