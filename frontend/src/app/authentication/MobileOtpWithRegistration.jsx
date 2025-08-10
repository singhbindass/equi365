import React, { useState } from "react";

export default function MobileOtpWithRegistration() {
  const [step, setStep] = useState("enterMobile"); // enterMobile, enterOtp, register, loggedIn
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [isExistingUser, setIsExistingUser] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [name, setName] = useState("");

  // Replace these fake API calls with your real backend
  const api = {
    checkUser: async (mobile) => {
      // Dummy logic: numbers ending with even digit are registered users
      return { exists: parseInt(mobile.slice(-1)) % 2 === 0 };
    },
    sendOtp: async (mobile, purpose) => {
      return true;
    },
    verifyOtp: async (mobile, otp) => {
      if (otp === "123456") return { success: true };
      else return { success: false, message: "Invalid OTP" };
    },
    registerUser: async ({ mobile, name }) => {
      return { success: true };
    },
  };

  const handleMobileSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!mobile.match(/^\+\d{10,15}$/)) {
      setError("Enter mobile number in E.164 format, e.g. +12345678901");
      setLoading(false);
      return;
    }

    try {
      const { exists } = await api.checkUser(mobile);
      setIsExistingUser(exists);
      await api.sendOtp(mobile, exists ? "login" : "register");
      setStep("enterOtp");
    } catch {
      setError("Failed to send OTP");
    }
    setLoading(false);
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await api.verifyOtp(mobile, otp);
      if (res.success) {
        if (isExistingUser) {
          setStep("loggedIn");
        } else {
          setStep("register");
        }
      } else {
        setError(res.message || "OTP verification failed");
      }
    } catch {
      setError("OTP verification failed");
    }
    setLoading(false);
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!name.trim()) {
      setError("Please enter your full name");
      setLoading(false);
      return;
    }

    try {
      const res = await api.registerUser({ mobile, name });
      if (res.success) {
        setStep("loggedIn");
      } else {
        setError("Registration failed");
      }
    } catch {
      setError("Registration failed");
    }
    setLoading(false);
  };

  if (step === "loggedIn") {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-green-50 border border-green-300 rounded shadow text-center text-green-800 font-semibold">
        Welcome {isExistingUser ? "back" : name}! You are now logged in.
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg border border-gray-200">
      {step === "enterMobile" && (
        <form onSubmit={handleMobileSubmit} className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 text-center">
            Login / Register
          </h2>
          <p className="text-sm text-gray-500 text-center">
            Enter your mobile number to continue
          </p>

          <label className="block text-gray-700 font-medium" htmlFor="mobile">
            Mobile Number
          </label>
          <input
            id="mobile"
            type="tel"
            placeholder="+12345678901"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? "Sending OTP..." : "Send OTP"}
          </button>
        </form>
      )}

      {step === "enterOtp" && (
        <form onSubmit={handleOtpSubmit} className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 text-center">
            Enter OTP
          </h2>
          <p className="text-sm text-gray-500 text-center mb-4">
            We sent a 6-digit code to <strong>{mobile}</strong>
          </p>

          <label className="block text-gray-700 font-medium" htmlFor="otp">
            OTP Code
          </label>
          <input
            id="otp"
            type="text"
            maxLength={6}
            placeholder="123456"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none transition"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white font-semibold py-3 rounded-md hover:bg-green-700 transition disabled:opacity-50"
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>

          <button
            type="button"
            onClick={() => setStep("enterMobile")}
            className="w-full mt-2 text-center text-gray-600 hover:underline"
          >
            Change Mobile Number
          </button>
        </form>
      )}

      {step === "register" && (
        <form onSubmit={handleRegisterSubmit} className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 text-center">
            Complete Registration
          </h2>
          <p className="text-center text-gray-500">
            Mobile: <strong>{mobile}</strong>
          </p>

          <label className="block text-gray-700 font-medium" htmlFor="name">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your full name"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 text-white font-semibold py-3 rounded-md hover:bg-purple-700 transition disabled:opacity-50"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
      )}
    </div>
  );
}
