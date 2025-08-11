import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import mockFetch from "../../mock/mockFetch";
import ISelect from "./ui/component/select";

function IconButton({ onClick, disabled, icon: Icon }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center w-12 h-12 rounded-full shadow-md
        bg-white/80 backdrop-blur-md text-gray-700
        hover:bg-white/90 hover:shadow-lg
        focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2
        transition-all duration-300 ease-in-out
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      <Icon size={22} />
    </button>
  );
}

export default function LocationSelector({ onSearch }) {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    mockFetch("/api/countries").then(setCountries);
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      mockFetch(`/api/states?countryId=${selectedCountry}`).then(setStates);
      setSelectedState("");
      setCities([]);
      setSelectedCity("");
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedState) {
      mockFetch(`/api/cities?stateId=${selectedState}`).then(setCities);
      setSelectedCity("");
    }
  }, [selectedState]);

  const handleSearch = () => {
    const locationData = {
      country: selectedCountry,
      state: selectedState,
      city: selectedCity,
    };
    if (onSearch) {
      onSearch(locationData);
    } else {
      console.log("Searching for:", locationData);
    }
  };

  const isSearchDisabled = !selectedCountry || !selectedState || !selectedCity;

  return (
  <div className="flex items-center justify-center w-full absolute top-[20%] left-1/2 transform -translate-x-1/2 px-4">
    <div>
      
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg text-center">
        Find Your Workspace
      </h2>

      {/* Dropdown Row */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-center w-full">
        <div className="flex-1 min-w-[200px] max-w-[240px] w-full">
          <ISelect
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            options={countries}
       className="border-2 border-black rounded-lg 
             bg-white text-gray-900 shadow-lg 
             focus:border-black focus:ring-0"
          />
        </div>

        <div className="flex-1 min-w-[200px] max-w-[240px] w-full">
          <ISelect
            id="state"
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            disabled={!states.length}
            options={states}
            placeholder="Select State"
          className="border-2 border-black rounded-lg 
             bg-white text-gray-900 shadow-lg 
             focus:border-black focus:ring-0"
          />
        </div>

        <div className="flex-1 min-w-[200px] max-w-[240px] w-full">
          <ISelect
            id="city"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            disabled={!cities.length}
            options={cities}
            placeholder="Select City"
            className="border-2 border-black rounded-lg 
             bg-white text-gray-900 shadow-lg 
             focus:border-black focus:ring-0"
          />
        </div>

        <IconButton
          onClick={handleSearch}
          disabled={isSearchDisabled}
          icon={Search}
        />
      </div>
    </div>
  </div>
);
}
