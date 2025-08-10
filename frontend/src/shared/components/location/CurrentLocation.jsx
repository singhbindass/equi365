import React, { useEffect, useState } from "react";

const CurrentLocation = () => {
  const [city, setCity] = useState(null);
  const [countryCode, setCountryCode] = useState(null);
  const [time, setTime] = useState(new Date());
  const [status, setStatus] = useState("detecting"); // detecting, success, error

  // Helper: fetch city & country from coordinates
  const fetchCityCountry = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
      );
      if (!response.ok) throw new Error("Network response not OK");
      const data = await response.json();
      const detectedCity =
        data?.address?.city ||
        data?.address?.town ||
        data?.address?.village ||
        data?.address?.state;
      const detectedCountryCode = data?.address?.country_code;

      if (detectedCity) {
        setCity(detectedCity);
        setCountryCode(detectedCountryCode?.toUpperCase() || null);
        setStatus("success");
      } else {
        setCity("City not found");
        setStatus("error");
      }
    } catch (error) {
      setCity("Unable to detect city");
      setStatus("error");
    }
  };

  // Detect city & country via geolocation
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchCityCountry(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          setCity("Location access denied");
          setStatus("error");
        }
      );
    } else {
      setCity("Geolocation not supported");
      setStatus("error");
    }
  }, []);

  // Update clock every second
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Format date/time with Intl for consistency & localization
  const formattedDate = time.toLocaleDateString(undefined, {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const formattedTime = time.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

 return (
  <section
    aria-live="polite"
    aria-label="Current city and local time"
    className="inline-flex items-center gap-3 rounded-md border border-gray-300 bg-white px-4 py-2 shadow-sm max-w-full min-w-[160px] min-h-[40px]"
    role="region"
  >
    {/* Flag */}
    {countryCode ? (
      <img
        src={`https://flagcdn.com/w40/${countryCode.toLowerCase()}.png`}
        alt={`${countryCode} flag`}
        className="h-6 w-9 rounded-sm object-cover flex-shrink-0"
        loading="lazy"
        onError={(e) => (e.currentTarget.style.display = "none")}
      />
    ) : (
      <div className="h-6 w-9 bg-gray-200 rounded-sm animate-pulse" />
    )}

    <div className="flex flex-col min-w-[120px] leading-tight">
      <span
        className={`font-semibold text-gray-900 ${
          status === "error" ? "italic text-red-600" : ""
        }`}
      >
        {city || "Detecting city..."}
      </span>
      <time
        dateTime={time.toISOString()}
        className="text-gray-600 font-mono text-xs"
      >
        {formattedDate} &bull; {formattedTime}
      </time>
    </div>
  </section>
);

};

export default CurrentLocation;
