import React, { useState } from "react";

const roomsData = [
  {
    id: 1,
    name: "Executive Meeting Room",
    country: "India",
    state: "Tamil Nadu",
    city: "Chennai",
    location: "Perungudi",
    capacity: 10,
    pricePerHour: 500,
    amenities: ["WiFi", "Projector", "Whiteboard"],
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    name: "Board Room",
    country: "India",
    state: "Karnataka",
    city: "Bangalore",
    location: "MG Road",
    capacity: 15,
    pricePerHour: 750,
    amenities: ["WiFi", "Conference Phone"],
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Small Meeting Room",
    country: "USA",
    state: "California",
    city: "San Francisco",
    location: "Downtown",
    capacity: 5,
    pricePerHour: 400,
    amenities: ["WiFi"],
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=60",
  },
];

const allAmenities = ["WiFi", "Projector", "Whiteboard", "Conference Phone"];

const timeSlots = ["Morning", "Afternoon", "Evening"];

export default function MeetingRoomBooking() {
  const [filters, setFilters] = useState({
    country: "",
    state: "",
    city: "",
    location: "",
    bookingType: "single",
    startDate: "",
    endDate: "",
    time: "",
    guests: "",
    purpose: "",
    amenities: [],
  });

  // Helper: Unique values for datalists
  const unique = (arr) => [...new Set(arr)];

  const countries = unique(roomsData.map((r) => r.country));
  const states = unique(
    roomsData.filter((r) => (filters.country ? r.country === filters.country : true)).map((r) => r.state)
  );
  const cities = unique(
    roomsData.filter((r) => (filters.state ? r.state === filters.state : true)).map((r) => r.city)
  );
  const locations = unique(
    roomsData.filter((r) => (filters.city ? r.city === filters.city : true)).map((r) => r.location)
  );

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      const newAmenities = checked
        ? [...filters.amenities, value]
        : filters.amenities.filter((a) => a !== value);
      setFilters((prev) => ({ ...prev, amenities: newAmenities }));
    } else {
      setFilters((prev) => ({ ...prev, [name]: value }));
    }
  };

  const filteredRooms = roomsData.filter((room) => {
    if (filters.country && room.country.toLowerCase() !== filters.country.toLowerCase()) return false;
    if (filters.state && room.state.toLowerCase() !== filters.state.toLowerCase()) return false;
    if (filters.city && room.city.toLowerCase() !== filters.city.toLowerCase()) return false;
    if (filters.location && room.location.toLowerCase() !== filters.location.toLowerCase()) return false;
    if (filters.guests && room.capacity < Number(filters.guests)) return false;
    if (
      filters.amenities.length > 0 &&
      !filters.amenities.every((a) => room.amenities.includes(a))
    )
      return false;
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-50">
      {/* Left filter panel */}
      <aside className="w-full lg:w-1/3 bg-white p-6 shadow-md sticky top-0 h-screen overflow-auto">
        <h2 className="text-2xl font-bold mb-6">Filter Meeting Rooms</h2>

        {/* Country with autocomplete */}
        <label className="block mb-2 font-semibold" htmlFor="country">
          Country
        </label>
        <input
          list="country-list"
          name="country"
          id="country"
          value={filters.country}
          onChange={handleChange}
          placeholder="Select or type country"
          className="w-full p-2 border rounded mb-4"
        />
        <datalist id="country-list">
          {countries.map((c) => (
            <option key={c} value={c} />
          ))}
        </datalist>

        {/* State with autocomplete */}
        <label className="block mb-2 font-semibold" htmlFor="state">
          State
        </label>
        <input
          list="state-list"
          name="state"
          id="state"
          value={filters.state}
          onChange={handleChange}
          placeholder="Select or type state"
          className="w-full p-2 border rounded mb-4"
          disabled={!filters.country}
        />
        <datalist id="state-list">
          {states.map((s) => (
            <option key={s} value={s} />
          ))}
        </datalist>

        {/* City with autocomplete */}
        <label className="block mb-2 font-semibold" htmlFor="city">
          City
        </label>
        <input
          list="city-list"
          name="city"
          id="city"
          value={filters.city}
          onChange={handleChange}
          placeholder="Select or type city"
          className="w-full p-2 border rounded mb-4"
          disabled={!filters.state}
        />
        <datalist id="city-list">
          {cities.map((c) => (
            <option key={c} value={c} />
          ))}
        </datalist>

        {/* Location with autocomplete */}
        <label className="block mb-2 font-semibold" htmlFor="location">
          Location
        </label>
        <input
          list="location-list"
          name="location"
          id="location"
          value={filters.location}
          onChange={handleChange}
          placeholder="Select or type location"
          className="w-full p-2 border rounded mb-4"
          disabled={!filters.city}
        />
        <datalist id="location-list">
          {locations.map((l) => (
            <option key={l} value={l} />
          ))}
        </datalist>

        {/* Booking Type */}
        <label className="block mb-2 font-semibold">Booking Type</label>
        <div className="flex mb-4 gap-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="bookingType"
              value="single"
              checked={filters.bookingType === "single"}
              onChange={handleChange}
              className="mr-2"
            />
            Single Day
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="bookingType"
              value="multi"
              checked={filters.bookingType === "multi"}
              onChange={handleChange}
              className="mr-2"
            />
            Multi Day
          </label>
        </div>

        {/* Dates */}
        {filters.bookingType === "single" ? (
          <>
            <label className="block mb-2 font-semibold">Date</label>
            <input
              type="date"
              name="startDate"
              value={filters.startDate}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-4"
              min={new Date().toISOString().split("T")[0]}
            />
          </>
        ) : (
          <>
            <label className="block mb-2 font-semibold">Start Date</label>
            <input
              type="date"
              name="startDate"
              value={filters.startDate}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-4"
              min={new Date().toISOString().split("T")[0]}
            />
            <label className="block mb-2 font-semibold">End Date</label>
            <input
              type="date"
              name="endDate"
              value={filters.endDate}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-4"
              min={filters.startDate || new Date().toISOString().split("T")[0]}
            />
          </>
        )}

        {/* Time Slot */}
        <label className="block mb-2 font-semibold">Time Slot</label>
        <select
          name="time"
          value={filters.time}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
        >
          <option value="">Select Time</option>
          {timeSlots.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>

        {/* Guests */}
        <label className="block mb-2 font-semibold">Number of Guests</label>
        <input
          type="number"
          name="guests"
          min={1}
          value={filters.guests}
          onChange={handleChange}
          placeholder="Enter number of guests"
          className="w-full p-2 border rounded mb-4"
        />

        {/* Purpose */}
        <label className="block mb-2 font-semibold">Purpose</label>
        <select
          name="purpose"
          value={filters.purpose}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
        >
          <option value="">Select Purpose</option>
          <option value="Interview">Interview</option>
          <option value="Presentation">Presentation</option>
          <option value="Workshop">Workshop</option>
          <option value="Training">Training</option>
        </select>

        {/* Amenities */}
        <label className="block mb-2 font-semibold">Amenities</label>
        <div className="mb-4">
          {allAmenities.map((amenity) => (
            <label key={amenity} className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                value={amenity}
                name="amenities"
                checked={filters.amenities.includes(amenity)}
                onChange={handleChange}
                className="mr-1"
              />
              {amenity}
            </label>
          ))}
        </div>
      </aside>

      {/* Right Panel - Results */}
      <main className="flex-grow p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-auto">
        {filteredRooms.length === 0 ? (
          <p className="text-gray-600 text-lg col-span-full text-center">
            No meeting rooms found with selected filters.
          </p>
        ) : (
          filteredRooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              <img
                src={room.image}
                alt={room.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-bold text-xl mb-2">{room.name}</h3>
                <p className="text-gray-700 mb-1">
                  Location: {room.location}, {room.city}, {room.state}, {room.country}
                </p>
                <p className="text-gray-700 mb-1">Capacity: {room.capacity}</p>
                <p className="text-gray-700 mb-2">
                  Price: ₹{room.pricePerHour} / hour
                </p>
                <div className="mt-auto">
                  <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </main>
    </div>
  );
}
