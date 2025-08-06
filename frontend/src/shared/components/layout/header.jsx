// shared/components/Header.tsx
import { Link } from "react-router-dom";
import CurrentLocation from "../location/currentLocation";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Amenities", path: "/amenities" },
  { name: "Help", path: "/help" },
];

export default function Header() {


  return (

  <header className="fixed top-10 md:top-14 left-0 w-[95%] md:w-[90%] ml-[2.5%] md:ml-[5%] shadow-md z-40 rounded-lg">
      <div className="flex flex-col items-center md:flex-row md:justify-between md:items-center p-4">
        {/* Current Location */}
        <h1 className="text-2xl font-bold">My Website</h1>
        <nav className="flex gap-6 hidden md:flex space-x-6">      
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`hover:text-gray-200`}
            >
              {item.name}
            </Link>

          ))}
      </nav>
   
    
      </div>
    </header>  
  );
}
