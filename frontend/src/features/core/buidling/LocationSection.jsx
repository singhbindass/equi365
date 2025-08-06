import React from "react";

const LocationSection = () => {
  return (
    <section
      id="location"
      className="w-full bg-white py-20 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-12"
    >
      {/* Building Image */}
      <div className="md:w-1/2 w-full">
        <img
          src="/images/building.jpg" // Place your image in /public/images
          alt="Company Building"
          className="rounded-2xl shadow-lg w-full h-80 object-cover"
        />
      </div>

      {/* Location Details */}
      <div className="md:w-1/2 w-full text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Visit Our Office</h2>
        <p className="text-gray-600 mb-4 leading-relaxed">
          We are located in the heart of the city, easily accessible via major
          transport routes. Our modern office is designed to welcome clients and
          partners in a comfortable environment.
        </p>

        <p className="text-lg font-medium text-gray-800 mb-6">
          123 Main Street, Business District, New York, USA
        </p>

        {/* Call to Action */}
        <a
          href="https://maps.google.com/?q=123+Main+Street+New+York"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
        >
          View on Map
        </a>
      </div>
    </section>
  );
};

export default LocationSection;
