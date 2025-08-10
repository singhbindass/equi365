import React, { useState, useEffect } from "react";
import mockFetch from "../../mock/mockFetch";
import ISelect from "./ui/component/select";

export default function LocationSelector() {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  // Load countries
  useEffect(() => {
    mockFetch("/api/countries").then(setCountries);
  }, []);

  // Load states
  useEffect(() => {
    if (selectedCountry) {
      mockFetch(`/api/states?countryId=${selectedCountry}`).then(setStates);
      setSelectedState("");
      setCities([]);
      setSelectedCity("");
    }
  }, [selectedCountry]);

  // Load cities
  useEffect(() => {
    if (selectedState) {
      mockFetch(`/api/cities?stateId=${selectedState}`).then(setCities);
      setSelectedCity("");
    }
  }, [selectedState]);

  return (
    <div className="rounded-xl w-full max-w-3xl mx-auto p-2">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center text-white ">
        Choose Your Location
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Country */}
        <div className="flex flex-col">         
          <ISelect
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            options={countries}
            placeholder="Select Country"
          />
       
        </div>

        {/* State */}
        <div className="flex flex-col">
          
          <ISelect
            id="state"
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            disabled={!states.length}   
            options={states}
            placeholder="Select State"        
          />  
        </div>

        {/* City */}
        <div className="flex flex-col">
         
           <ISelect
            id="city"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            disabled={!states.length}   
            options={cities}
            placeholder="Select City"        
          />  
         
        </div>
      </div>
    </div>
  );
}
