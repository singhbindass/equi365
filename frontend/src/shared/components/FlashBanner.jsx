import React from "react";

const FlashBanner = () => {
  return (
    <div className=" inset-x-0 top-0 bg-yellow-10 text-center text-gray-900 font-medium z-50 py-2 px-4 shadow-md max-w-full box-border">
      🎉 Special Offer: Get 20% off on all services this week only!
      <a
        href="#offer"
        className="underline font-semibold ml-2 hover:text-gray-800"
      >
        Learn More
      </a>
    </div>
  );
};

export default FlashBanner;
