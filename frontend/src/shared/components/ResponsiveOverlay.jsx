import LocationSelector from "./LocationSelector";

export default function ResponsiveOverlay() {
  return (
    <div className="relative w-[105%] h-[70vh] sm:h-[60vh] lg:h-[65vh] overflow-hidden">
      {/* Background video (full width always) */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover sm:object-center"
        src="https://cdn.sanity.io/files/uqxwe2qj/production/acb3cdaddddd9a53c21e3b65d9ee71ce8985d157.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay for contrast */}
      

      {/* Foreground content */}
      <div className=" relative z-20 flex items-center justify-center ">
        <div className="bg-opacity-80 p-4 sm:p-4 rounded-2xl shadow-lg max-w-lg w-full text-center">
          <LocationSelector />
        </div>
      </div>
    </div>
  );
}
``