import React from "react";
import LocationCard from "../../amenities/components/LocationCard";

const LocationSection = ({location}) => {
  return (
   <section
  id="location"
  className="w-[100%] py-8 px-0 flex flex-col md:flex-row items-start gap-4 lg:gap-8 border"
>
      {/* Building Image */}
      <div className="md:w-1/2 w-full ">
        <img
          src="/assets/comp.jpg"
          alt="Company Building"
          className="rounded-2x1 shadow-lg w-full h-64 sm:h-72 lg:h-[22rem] object-cover"
        />
      </div>

      {/* Location Details */}
      <div className="md:w-1/2 w-full text-left">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
          Visit Our Office
        </h2>
        <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base lg:text-lg">              
              <LocationCard location={location} />
        </p>
  
       {/* <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base lg:text-lg">
          We are located in the heart of the city, easily accessible via major
          transport routes. Our modern office is designed to welcome clients and
          partners in a comfortable environment.
        </p>

        <p className="text-base sm:text-lg font-medium text-gray-800 mb-6">
          123 Main Street, Business District, New York, USA
        </p>

        
        <a
          href="https://maps.google.com/?q=123+Main+Street+New+York"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 sm:px-6 sm:py-3 rounded-lg transition-colors"
        >
          View on Map
        </a>*/}
      </div>
    </section>
  );
};

export default LocationSection;
