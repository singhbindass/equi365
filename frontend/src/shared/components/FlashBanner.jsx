import React from "react";

const FlashBanner = () => {
  return (
    <div
      role="region"
      aria-live="polite"
      className="w-full bg-yellow-100 text-gray-900 font-semibold shadow-md py-3 px-6 sm:py-4 sm:px-8 text-base flex justify-center items-center space-x-2"
      style={{ minHeight: "56px" }} // force min height for banner
    >
      <span className="select-none" aria-hidden="true" role="img" aria-label="Celebration">
        🎉
      </span>
      <p className="m-0">
        Special Offer: Get <strong>20% off</strong> on all services this week only!
      </p>
      <a
        href="#offer"
        className="ml-3 underline font-semibold text-gray-900 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-600 rounded"
      >
        Learn More
      </a>
    </div>
  );
};

export default FlashBanner;
