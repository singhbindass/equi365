import React from "react";

export default function FlashBanner() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="w-full bg-gradient-to-r from-yellow-100 to-yellow-200 text-gray-900 shadow-lg px-4 sm:px-8 py-3 sm:py-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center sm:text-left"
      style={{ minHeight: "56px" }}
    >
      {/* Icon */}
      <span
        className="text-xl sm:text-2xl animate-bounce select-none"
        aria-hidden="true"
      >
        🎉
      </span>

      {/* Message */}
      <p className="text-sm sm:text-base font-medium">
        <span className="hidden sm:inline">Special Offer:</span> Get{" "}
        <strong className="font-semibold">20% off</strong> on all services this
        week only!
      </p>

      {/* CTA */}
      <a
        href="#offer"
        className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-4 py-1.5 rounded-lg shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-600"
      >
        Learn More
      </a>
    </div>
  );
}
