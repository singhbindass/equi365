import React, { useState, useEffect } from "react";
import mockFetch from '../../mock/mockFetch';
/* -------------------- COMPONENT -------------------- */
export default function LocationSelector() {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  // Load countries initially
  useEffect(() => {
    mockFetch("/api/countries").then(setCountries);
  }, []);

  // Load states when country changes
  useEffect(() => {
    if (selectedCountry) {
      mockFetch(`/api/states?countryId=${selectedCountry}`).then(setStates);
      setSelectedState("");
      setCities([]);
      setSelectedCity("");
    }
  }, [selectedCountry]);

  // Load cities when state changes
  useEffect(() => {
    if (selectedState) {
      mockFetch(`/api/cities?stateId=${selectedState}`).then(setCities);
      setSelectedCity("");
    }
  }, [selectedState]);

  return (
    <div className="flex flex-col md:flex-row gap-4 w-full max-w-3xl mx-auto p-4">
      {/* Country Select */}
      <select
        className="flex-1 border border-gray-300 p-2 rounded-lg bg-white focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
      >
        <option value="">Select Country</option>
        {countries.map((country) => (
          <option key={country.id} value={country.id}>
            {country.name}
          </option>
        ))}
      </select>

      {/* State Select */}
      <select
        className="flex-1 border border-gray-300 p-2 rounded-lg bg-white focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
        value={selectedState}
        onChange={(e) => setSelectedState(e.target.value)}
        disabled={!states.length}
      >
        <option value="">Select State</option>
        {states.map((state) => (
          <option key={state.id} value={state.id}>
            {state.name}
          </option>
        ))}
      </select>

      {/* City Select */}
      <select
        className="flex-1 border border-gray-300 p-2 rounded-lg bg-white focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
        disabled={!cities.length}
      >
        <option value="">Select City</option>
        {cities.map((city) => (
          <option key={city.id} value={city.id}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
}
