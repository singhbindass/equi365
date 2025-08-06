import React from "react";

const FlashBanner = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full text-center text-sm md:text-base bg-yellow-100 font-medium py-2 md:py-4 px-4 md:px-8 z-50">
    
       🎉 Special Offer: Get 20% off on all services this week only! 
      
      <a
        href="#offer"
        className="underline font-semibold ml-2 hover:text-gray-800"
      >
        Learn More
      </a>
      
    </div>
    </div> 
  );
};

export default FlashBanner;
