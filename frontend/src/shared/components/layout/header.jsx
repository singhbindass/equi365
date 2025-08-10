import React, { useState } from "react";
import { Link } from "react-router-dom";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Meeting Room", path: "/menu-1" },
  { name: "Day Pass", path: "/menu-2" },
  { name: "Executive Day Pass", path: "/menu-3" },
  { name: "Virtual Office", path: "/menu-4" },
  { name: "Event Pass", path: "/menu-5" },
  { name: "Amenities", path: "/amenities" },
  { name: "Help", path: "/help-0" },
  { name: "Contact Us", path: "/help" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className=" bg-white shadow-md w-full z-40">
      <div className="max-w-7x1 mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-2">
        {/* Logo + Title */}

        <div className="h-8 md:h-8 lg:h-8 flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="/assets/logo.jpeg"
                alt="Logo"
                className="h-12 w-auto object-contain p-0 m-0"
                loading="lazy"
              />
            
            </Link>
      </div>
        {/* Hamburger button for mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 shadow-inner overflow-x-auto">
          <ul className="flex flex-col space-y-2 p-4">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="block text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
