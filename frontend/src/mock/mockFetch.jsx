import React, { useState, useEffect } from "react";

/* -------------------- MOCK DATA -------------------- */
const dummyCountries = [
  { id: 1, name: "India" },
  { id: 2, name: "USA" }
];

const dummyStates = {
  1: [
    { id: 1, name: "Karnataka" },
    { id: 2, name: "Maharashtra" }
  ],
  2: [
    { id: 3, name: "California" },
    { id: 4, name: "Texas" }
  ]
};

const dummyCities = {
  1: [
    { id: 1, name: "Bangalore" },
    { id: 2, name: "Mysore" }
  ],
  2: [
    { id: 3, name: "Mumbai" },
    { id: 4, name: "Pune" }
  ],
  3: [
    { id: 5, name: "Los Angeles" },
    { id: 6, name: "San Francisco" }
  ],
  4: [
    { id: 7, name: "Houston" },
    { id: 8, name: "Dallas" }
  ]
};

// Mock fetch to simulate API call
const mockFetch = (endpoint) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (endpoint === "/api/countries") resolve(dummyCountries);
      else if (endpoint.startsWith("/api/states")) {
        const countryId = endpoint.split("=")[1];
        resolve(dummyStates[countryId] || []);
      } else if (endpoint.startsWith("/api/cities")) {
        const stateId = endpoint.split("=")[1];
        resolve(dummyCities[stateId] || []);
      }
    }, 500); // simulate network delay
  });
};




export default  mockFetch;