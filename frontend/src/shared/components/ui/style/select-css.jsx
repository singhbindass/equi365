// components/ui/selectStyles.js

export const selectWrapper = `
  flex flex-col space-y-2
`;

export const selectLabel = `
  text-sm
  font-semibold
  text-gray-800
  dark:text-gray-200
`;

export const selectBox = `
  w-full
  px-4
  py-2.5
  text-sm
  text-gray-800
  bg-white
  border
  border-gray-400
  rounded-lg
  shadow-sm

  focus:outline-none
  focus:ring-2
  focus:ring-blue-500
  focus:border-blue-500

  hover:border-gray-500
  transition
  duration-200
  ease-in-out

  dark:bg-gray-900
  dark:border-gray-600
  dark:text-gray-200
  dark:focus:ring-blue-400
  dark:focus:border-blue-400
  dark:hover:border-gray-500
`;
