import React, { useEffect, useState } from "react";

const CurrentCityClock = () => {
  const [city, setCity] = useState("Detecting city...");
  const [countryCode, setCountryCode] = useState(null);
  const [time, setTime] = useState(new Date());

  // Detect city & country
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

            const detectedCity =
              data?.address?.city ||
              data?.address?.town ||
              data?.address?.village ||
              data?.address?.state;

            const detectedCountryCode = data?.address?.country_code;

            setCity(detectedCity || "City not found");
            setCountryCode(detectedCountryCode?.toUpperCase() || null);
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

  // Update clock every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = time.toLocaleDateString();
  const formattedTime = time.toLocaleTimeString();

  return (
    <div className="flex items-center gap-1 p-0 border rounded-md shadow-sm bg-white">
      {
      countryCode && (
        <img
          src={`https://flagcdn.com/w40/${countryCode.toLowerCase()}.png`}
          alt={countryCode}
         className="h-5 w-8 object-cover rounded-sm"
        />
      )}
      <div className="flex flex-col leading-tight text-xs">
        <span className="font-semibold">{city}</span>
        <span className=" text-gray-600 font-semibold">
          {formattedDate} • {formattedTime}
        </span>
      </div>
    </div>
  );
};

export default CurrentCityClock;
