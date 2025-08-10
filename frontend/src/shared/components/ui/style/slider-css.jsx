// components/ui/imageSliderStyles.js
export const sliderContainer = `
  relative
  w-full               // Full width on small screens
  max-w-8xl   
  h-[60vh]
  
  overflow-hidden
   -mt-16
    bg-white max-w-3xl mx-auto p-32
`;

export const sliderTrack = `
  flex
  transition-transform
  duration-500
  ease-in-out
  h-full
`;

export const slideImage = `
  w-full
  h-full
  object-cover
  flex-shrink-0
`;

export const navButton = `
  absolute
  top-1/2
  transform
  -translate-y-1/2
  bg-white/60
  hover:bg-white/80
  text-gray-900
  text-2xl
  px-4
  py-2
  rounded-full
  shadow
  transition
  z-10
`;

export const indicatorContainer = `
  absolute
  bottom-6
  left-1/2
  transform
  -translate-x-1/2
  flex
  space-x-2
  z-10
`;

export const indicatorDot = (active) =>
  `w-3 h-3 rounded-full transition ${active ? "bg-blue-600" : "bg-gray-300"}`;
       