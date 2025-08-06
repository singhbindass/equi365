// shared/components/Header.tsx
import { Link } from "react-router-dom";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Amenities", path: "/amenities" },
  { name: "Help", path: "/help" },
];

export default function Header() {


  return (
    <header className="flex items-center justify-between bg-blue-700 text-white px-6 h-16 shadow-md">
      <h1 className="text-2xl font-bold">MyCompany</h1>
      <nav className="flex gap-6">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`hover:text-yellow-300`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
