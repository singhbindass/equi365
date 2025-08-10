// src/LoginModal.js
import React, { useState } from "react";
import { useAuth } from "./AuthContext";
import MobileOtpWithRegistration from "./MobileOtpWithRegistration";
import AttractiveMobileOtpLogin from "./AttractiveMobileOtpLogin";

export default function LoginModal({ isOpen, onClose }) {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Simulate async login
    /*setTimeout(() => {
     /* const result = login(username, password);
      setLoading(false);
      if (result.success) {
        onClose();
      } else {
        setError(result.message);
      }
    }, 1000);*/
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
           {/*<MobileOtpWithRegistration/>*/}
           <AttractiveMobileOtpLogin/>
    
    </div>
    /*<div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 font-medium">Username</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            autoFocus
          />

          <label className="block mb-2 font-medium">Password</label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="text-red-600 mb-4">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <button
          onClick={onClose}
          className="mt-4 w-full text-center text-gray-600 hover:text-gray-900"
        >
          Cancel
        </button>
      </div>
      
    </div>*/
    
  );
}
