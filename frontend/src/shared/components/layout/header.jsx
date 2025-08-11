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
  const profileRef = useRef();

  useEffect(() => {
    function handleClickOutside(e) {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const userInitials = user
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    : "";

  return (
    <header className="bg-white shadow-md w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-5">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src={`${window.location.origin}/assets/logo.jpeg`}
            alt="Logo"
            className="h-16 w-auto object-contain" // Increased from h-12
            loading="lazy"
          />
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
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

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-gray-800 hover:text-gray-900 transition font-medium text-lg tracking-wide" // Increased font size
            >
              {item.name}
            </Link>
          ))}

          {user ? (
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                className="ml-4 w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center font-semibold text-lg"
              >
                {userInitials}
              </button>
              {profileMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
                  <div className="py-2 px-4 font-semibold border-b text-gray-800">
                    {user.name}
                  </div>
                  <button
                    onClick={() => {
                      logout();
                      setProfileMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-red-50 text-red-600 font-medium"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => setLoginOpen(true)}
              className="text-gray-800 hover:underline font-medium text-lg"
            >
              Login
            </button>
          )}
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 shadow-inner">
          <ul className="flex flex-col space-y-2 p-4">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="block text-gray-800 hover:text-gray-900 font-medium text-lg"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              {user ? (
                <div className="flex items-center space-x-3">
                  <span className="text-gray-800 font-medium text-lg">
                    Hi, {user.name}
                  </span>
                  <button
                    onClick={() => {
                      logout();
                      setMenuOpen(false);
                    }}
                    className="text-red-600 hover:underline font-medium text-lg"
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
                  className="text-gray-800 hover:underline font-medium text-lg"
                >
                  Login
                </button>
              )}
            </li>
          </ul>
        </nav>
      )}

      <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
    </header>
  );
}
