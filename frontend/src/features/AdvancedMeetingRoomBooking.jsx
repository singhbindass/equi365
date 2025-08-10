import React, { useState, useMemo } from "react";

const allCountries = ["USA", "India", "UK"];
const allStates = {
  USA: ["California", "New York", "Texas"],
  India: ["Maharashtra", "Karnataka", "Delhi"],
  UK: ["England", "Scotland", "Wales"],
};
const allCities = {
  California: ["Los Angeles", "San Francisco"],
  NewYork: ["New York City", "Buffalo"],
  Texas: ["Houston", "Austin"],
  Maharashtra: ["Mumbai", "Pune"],
  Karnataka: ["Bangalore", "Mysore"],
  Delhi: ["New Delhi"],
  England: ["London", "Manchester"],
  Scotland: ["Edinburgh"],
  Wales: ["Cardiff"],
};

const allAmenities = ["WiFi", "Projector", "Whiteboard", "Coffee Machine"];

const roomsData = [
  {
    id: 1,
    name: "Downtown Conference Room",
    country: "USA",
    state: "California",
    city: "San Francisco",
    location: "123 Market St",
    capacity: 20,
    amenities: ["WiFi", "Projector", "Whiteboard"],
    pricePerHour: 1500,
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "City Center Meeting Room",
    country: "India",
    state: "Maharashtra",
    city: "Mumbai",
    location: "456 Marine Drive",
    capacity: 15,
    amenities: ["WiFi", "Coffee Machine"],
    pricePerHour: 1200,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Modern Meeting Room",
    country: "UK",
    state: "England",
    city: "London",
    location: "789 Oxford Street",
    capacity: 10,
    amenities: ["Projector", "Whiteboard"],
    pricePerHour: 1800,
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80",
  },
];

export default function AdvanceMeetingRoomBooking() {
  const [filters, setFilters] = useState({
    country: "",
    state: "",
    city: "",
    location: "",
    bookingType: "single", // "single" or "multi"
    startDate: "",
    endDate: "",
    time: "",
    guests: 1,
    purpose: "",
    amenities: [],
  });

  // Derived states for dependent selects
  const statesForCountry = filters.country ? allStates[filters.country] || [] : [];
  const citiesForState = filters.state ? allCities[filters.state] || [] : [];

  // Handle filter change
  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    if (name === "amenities") {
      if (checked) {
        setFilters((prev) => ({
          ...prev,
          amenities: [...prev.amenities, value],
        }));
      } else {
        setFilters((prev) => ({
          ...prev,
          amenities: prev.amenities.filter((a) => a !== value),
        }));
      }
    } else if (type === "number") {
      setFilters((prev) => ({ ...prev, [name]: +value }));
    } else {
      setFilters((prev) => ({ ...prev, [name]: value }));
    }
  }

  // Filter rooms based on filters
  const filteredRooms = useMemo(() => {
    return roomsData.filter((room) => {
      if (filters.country && room.country !== filters.country) return false;
      if (filters.state && room.state !== filters.state) return false;
      if (filters.city && room.city !== filters.city) return false;
      if (
        filters.location &&
        !room.location.toLowerCase().includes(filters.location.toLowerCase())
      )
        return false;
      if (filters.guests && room.capacity < filters.guests) return false;
      if (
        filters.amenities.length > 0 &&
        !filters.amenities.every((a) => room.amenities.includes(a))
      )
        return false;
      return true;
    });
  }, [filters]);

  return (
    <div className="min-h-screen relative flex flex-col lg:flex-row">
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          pointerEvents: "none",
          zIndex: 0,
          filter: "brightness(0.6)",
        }}
      />
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-50 pointer-events-none"
        style={{ zIndex: 0 }}
      />

      {/* Left Filters */}
      <aside className="relative z-10 bg-white bg-opacity-90 p-8 w-full lg:w-1/3 h-screen overflow-auto shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Filter Meeting Rooms</h2>

        {/* Country */}
        <label className="block mb-2 font-semibold text-gray-800">Country</label>
        <input
          list="country-list"
          name="country"
          value={filters.country}
          onChange={handleChange}
          placeholder="Select country"
          className="w-full p-3 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
          autoComplete="off"
        />
        <datalist id="country-list">
          {allCountries.map((c) => (
            <option key={c} value={c} />
          ))}
        </datalist>

        {/* State */}
        <label className="block mb-2 font-semibold text-gray-800">State</label>
        <input
          list="state-list"
          name="state"
          value={filters.state}
          onChange={handleChange}
          placeholder="Select state"
          className="w-full p-3 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
          autoComplete="off"
          disabled={!filters.country}
        />
        <datalist id="state-list">
          {statesForCountry.map((s) => (
            <option key={s} value={s} />
          ))}
        </datalist>

        {/* City */}
        <label className="block mb-2 font-semibold text-gray-800">City</label>
        <input
          list="city-list"
          name="city"
          value={filters.city}
          onChange={handleChange}
          placeholder="Select city"
          className="w-full p-3 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
          autoComplete="off"
          disabled={!filters.state}
        />
        <datalist id="city-list">
          {citiesForState.map((c) => (
            <option key={c} value={c} />
          ))}
        </datalist>

        {/* Location */}
        <label className="block mb-2 font-semibold text-gray-800">Location Address</label>
        <input
          type="text"
          name="location"
          value={filters.location}
          onChange={handleChange}
          placeholder="Enter location address"
          className="w-full p-3 border rounded mb-6 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        {/* Booking Type */}
        <label className="block mb-2 font-semibold text-gray-800">Booking Type</label>
        <div className="flex items-center gap-4 mb-6">
          <label className="inline-flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="bookingType"
              value="single"
              checked={filters.bookingType === "single"}
              onChange={handleChange}
              className="form-radio text-blue-600"
            />
            <span>Single Day</span>
          </label>
          <label className="inline-flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="bookingType"
              value="multi"
              checked={filters.bookingType === "multi"}
              onChange={handleChange}
              className="form-radio text-blue-600"
            />
            <span>Multi Day</span>
          </label>
        </div>

        {/* Dates */}
        <label className="block mb-2 font-semibold text-gray-800">
          {filters.bookingType === "single" ? "Date" : "Start Date"}
        </label>
        <input
          type="date"
          name="startDate"
          value={filters.startDate}
          onChange={handleChange}
          className="w-full p-3 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
          min={new Date().toISOString().split("T")[0]}
        />
        {filters.bookingType === "multi" && (
          <>
            <label className="block mb-2 font-semibold text-gray-800">End Date</label>
            <input
              type="date"
              name="endDate"
              value={filters.endDate}
              onChange={handleChange}
              className="w-full p-3 border rounded mb-6 focus:outline-none focus:ring-2 focus:ring-blue-600"
              min={filters.startDate || new Date().toISOString().split("T")[0]}
            />
          </>
        )}

        {/* Time */}
        <label className="block mb-2 font-semibold text-gray-800">Time</label>
        <input
          type="time"
          name="time"
          value={filters.time}
          onChange={handleChange}
          className="w-full p-3 border rounded mb-6 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        {/* Guests */}
        <label className="block mb-2 font-semibold text-gray-800">Guests</label>
        <input
          type="number"
          name="guests"
          value={filters.guests}
          onChange={handleChange}
          min={1}
          max={50}
          placeholder="Enter number of guests"
          className="w-full p-3 border rounded mb-6 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        {/* Purpose */}
        <label className="block mb-2 font-semibold text-gray-800">Purpose</label>
        <input
          type="text"
          name="purpose"
          value={filters.purpose}
          onChange={handleChange}
          placeholder="Enter purpose (optional)"
          className="w-full p-3 border rounded mb-6 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        {/* Amenities */}
        <label className="block mb-2 font-semibold text-gray-800">Amenities</label>
        <div className="flex flex-wrap gap-3 mb-8">
          {allAmenities.map((amenity) => (
            <label
              key={amenity}
              className="inline-flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="checkbox"
                name="amenities"
                value={amenity}
                checked={filters.amenities.includes(amenity)}
                onChange={handleChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="text-gray-700">{amenity}</span>
            </label>
          ))}
        </div>
      </aside>

      {/* Right results panel */}
      <main className="relative z-10 flex-1 p-8 overflow-auto bg-white bg-opacity-90">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">
          Available Meeting Rooms
        </h2>

        {filteredRooms.length === 0 ? (
          <p className="text-gray-700">No rooms match your filters.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredRooms.map((room) => (
              <div
                key={room.id}
                className="flex flex-col bg-white rounded shadow-lg overflow-hidden"
              >
                <img
                  src={room.image}
                  alt={room.name}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-semibold mb-2">{room.name}</h3>
                  <p className="text-gray-700 mb-1">
                    Location: {room.location}, {room.city}, {room.state},{" "}
                    {room.country}
                  </p>
                  <p className="text-gray-700 mb-1">Capacity: {room.capacity}</p>
                  <p className="text-gray-700 mb-3">
                    Amenities: {room.amenities.join(", ")}
                  </p>
                  <p className="text-gray-800 font-semibold mb-4">
                    Price: ₹{room.pricePerHour} / hour
                  </p>
                  <button className="mt-auto bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
