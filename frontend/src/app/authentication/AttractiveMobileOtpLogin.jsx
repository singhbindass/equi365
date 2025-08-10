import React, { useState, useRef, useEffect } from "react";
import { useAuth } from "./AuthContext";

export default function AttractiveMobileOtpLogin() {
  const { login,logout } = useAuth();
  const [isOpen, setIsOpen] = useState(true);
  const [step, setStep] = useState("enterMobile"); // enterMobile, enterOtp, register, loggedIn
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isExistingUser, setIsExistingUser] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null); // store logged in user info

  // Profile menu toggle
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const menuRef = useRef();

  // Close profile menu if click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setProfileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Dummy API mocks
  const checkUserExists = async (mobile) => {
    await new Promise((r) => setTimeout(r, 600));
    return parseInt(mobile.slice(-1)) % 2 === 0;
  };

  const sendOtp = async () => {
    await new Promise((r) => setTimeout(r, 800));
    return true;
  };

  const verifyOtp = async () => {
    await new Promise((r) => setTimeout(r, 800));
    return otp === "123456";
  };

  const registerUser = async () => {
    await new Promise((r) => setTimeout(r, 1000));
    return true;
  };

  // Handlers
  const handleMobileSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!mobile.match(/^\d{10,15}$/)) {
      setError("Please enter a valid mobile number (10-15 digits)");
      return;
    }
    setLoading(true);
    const exists = await checkUserExists(mobile);
    setIsExistingUser(exists);
    const otpSent = await sendOtp();
    setLoading(false);
    if (otpSent) setStep("enterOtp");
    else setError("Failed to send OTP, please try again.");
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const valid = await verifyOtp();
    setLoading(false);
    if (valid) {
      if (isExistingUser) {
        setStep("loggedIn");
        setLoggedInUser({ mobile, name: "User" + mobile.slice(-4) }); 
        login("user","pass");// example name for existing user
      } else setStep("register");
    } else {
      setError("Invalid OTP. Please try again.");
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!name.trim()) {
      setError("Please enter your full name");
      return;
    }
    setLoading(true);
    const registered = await registerUser();
    setLoading(false);
    if (registered) {
      setStep("loggedIn");
      setLoggedInUser({ mobile, name });
    } else setError("Registration failed, please try again.");
  };

  // Logout handler
  const handleLogout = () => {
    setLoggedInUser(null);
    setStep("enterMobile");
    setMobile("");
    setOtp("");
    setName("");
    setError("");
    setLoading(false);
    setIsExistingUser(false);
    setProfileMenuOpen(false);
    setIsOpen(true); // Show modal again if you want
  };


  useEffect(() => {
  if (loggedInUser) {
    login("user", "pass"); // safe here, after render
  }
}, [loggedInUser, login]);
  // If logged in, show profile icon + menu instead of modal
  if (loggedInUser) {
      //  login("user","pass");// example name for existing user
  /*  return (
      <div className="relative inline-block text-left" ref={menuRef}>
        <button
          onClick={() => setProfileMenuOpen((open) => !open)}
          className="flex items-center focus:outline-none"
          aria-haspopup="true"
          aria-expanded={profileMenuOpen}
        >
          <div className="h-10 w-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-semibold text-lg cursor-pointer select-none">
            {loggedInUser.name.charAt(0).toUpperCase()}
          </div>
        </button>

        {profileMenuOpen && (
          <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
            <div className="py-1">
              <div className="px-4 py-2 text-gray-800 font-semibold border-b border-gray-200">
                {loggedInUser.name}
              </div>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-100"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    );*/
  }

  // Otherwise show login modal
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-60 z-40"
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div
          className="relative w-full max-w-md bg-white rounded-xl shadow-lg p-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close modal"
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Content */}
          {step === "enterMobile" && (
            <>
              <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
                Login or Register
              </h2>
              <form onSubmit={handleMobileSubmit} className="space-y-4">
                <label
                  htmlFor="mobile"
                  className="block text-gray-700 font-medium"
                >
                  Mobile Number
                </label>
                <div className="flex rounded-md border border-gray-300 overflow-hidden">
                  <span className="inline-flex items-center px-3 bg-gray-100 text-gray-600 select-none">
                    +91
                  </span>
                  <input
                    type="tel"
                    name="mobile"
                    id="mobile"
                    maxLength={15}
                    className="flex-grow block w-full rounded-none border-0 px-3 py-2 focus:ring-indigo-500 focus:outline-none sm:text-sm"
                    placeholder="Enter mobile number"
                    value={mobile}
                    onChange={(e) =>
                      setMobile(e.target.value.replace(/\D/g, "").slice(0, 15))
                    }
                    required
                  />
                </div>
                {error && <p className="text-red-600 text-sm">{error}</p>}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-md font-semibold transition disabled:opacity-50"
                >
                  {loading ? "Sending OTP..." : "Send OTP"}
                </button>
              </form>
            </>
          )}

          {step === "enterOtp" && (
            <>
              <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
                Enter OTP
              </h2>
              <p className="text-center text-gray-600 mb-4">
                We sent a 6-digit OTP to +{mobile}
              </p>
              <form onSubmit={handleOtpSubmit} className="space-y-4">
                <input
                  type="text"
                  maxLength={6}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-indigo-500 focus:outline-none sm:text-sm"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) =>
                    setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
                  }
                  required
                />
                {error && <p className="text-red-600 text-sm">{error}</p>}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-md font-semibold transition disabled:opacity-50"
                >
                  {loading ? "Verifying..." : "Verify OTP"}
                </button>
              </form>
              <button
                onClick={() => {
                  setStep("enterMobile");
                  setOtp("");
                  setError("");
                }}
                className="mt-4 w-full text-center text-indigo-600 hover:text-indigo-800 font-medium"
              >
                Change Mobile Number
              </button>
            </>
          )}

          {step === "register" && (
            <>
              <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
                Complete Registration
              </h2>
              <p className="text-center text-gray-600 mb-4">Mobile: +{mobile}</p>
              <form onSubmit={handleRegisterSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-indigo-500 focus:outline-none sm:text-sm"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                {error && <p className="text-red-600 text-sm">{error}</p>}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-md font-semibold transition disabled:opacity-50"
                >
                  {loading ? "Registering..." : "Register"}
                </button>
              </form>
            </>
          )}

          {step === "loggedIn" && (
            <>
              <h2 className="text-2xl font-bold mb-4 text-center text-green-700">
                Welcome!
              </h2>
              <p className="text-center text-gray-700 mb-6">
                You are logged in successfully.
              </p>
              <button
                onClick={() => {
                  setIsOpen(false);
                  logout();
                  // reset all handled by loggedInUser state now
                }}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md font-semibold transition"
              >
                Close
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
