import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../app/authentication/AuthContext";
import LoginModal from "../../../app/authentication/LoginModal";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Meeting Room", path: "/meeting" },
  { name: "Day Pass", path: "/dayPass" },
  { name: "Virtual Office", path: "/virtual" },
  { name: "Event Pass", path: "/event" },
  { name: "Amenities", path: "/amenities" },
  { name: "Help", path: "/help" },
  { name: "Contact Us", path: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  // Close profile menu on click outside
  const profileRef = useRef();
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Simple user initials for avatar if no image
  const userInitials = user
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    : "";

  return (
    <header className="bg-white shadow-md w-full z-40">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-2">
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
        <nav className="hidden md:flex items-center space-x-6 relative">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-gray-700 hover:text-blue-600 font-medium whitespace-nowrap"
            >
              {item.name}
            </Link>
          ))}

          {user ? (
            <div className="relative" ref={profileRef}>
              {/* Profile icon */}
              <button
                onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                className="ml-4 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold text-lg focus:outline-none"
                aria-label="User menu"
              >
                {userInitials}
              </button>

              {/* Dropdown submenu */}
              {profileMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg z-50">
                  <div className="py-2 px-4 text-gray-800 font-semibold border-b">
                    {user.name}
                  </div>
                  <button
                    onClick={() => {
                      logout();
                      setProfileMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-red-100 text-red-600 font-semibold"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => setLoginOpen(true)}
              className="text-blue-600 hover:underline font-semibold"
            >
              Login
            </button>
          )}
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

            <li>
              {user ? (
                <div className="flex items-center space-x-3">
                  <span className="text-gray-700 font-semibold">Hi, {user.name}</span>
                  <button
                    onClick={() => {
                      logout();
                      setMenuOpen(false);
                    }}
                    className="text-red-600 hover:underline font-semibold"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    setLoginOpen(true);
                    setMenuOpen(false);
                  }}
                  className="text-blue-600 hover:underline font-semibold w-full text-left"
                >
                  Login
                </button>
              )}
            </li>
          </ul>
        </nav>
      )}

      {/* Login Modal */}
      <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
    </header>
  );
}
