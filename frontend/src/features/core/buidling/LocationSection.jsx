import React from "react";
import LocationCard from "../../amenities/components/LocationCard";

const LocationSection = ({ location }) => {
  return (
    <section className="w-full bg-white py-2 px-1">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Work Location
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Designed to make your workday seamless, productive, and enjoyable.
            We combine flexibility, premium amenities, and a global community
            to help your business thrive.
          </p>
        </div>

        {/* Content Row */}
        <div className="flex flex-col md:flex-row items-start gap-6 lg:gap-12">
          {/* Building Image */}
          <div className="md:w-1/2 w-full">
            <img
              src="{`${process.env.PUBLIC_URL}/assets/comp.jpg'"
              alt="Company Building"
              className="rounded-2xl shadow-lg w-full h-72 md:h-80 lg:h-[24rem] object-cover"
            />
          </div>

          {/* Location Details */}
          <div className="md:w-1/2 w-full">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
              Visit Our Office
            </h3>
            <div className="mb-6">
              <LocationCard location={location} />
            </div>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(location.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300"
            >
              View on Map
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
