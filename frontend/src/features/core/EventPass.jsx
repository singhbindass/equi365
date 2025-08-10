import React, { useState } from "react";

const eventPasses = [
  {
    id: 1,
    title: "Day Pass",
    price: "₹999",
    description:
      "Access to all coworking areas for one full day, including high-speed internet and amenities.",
    perks: [
      "Workspace access 9AM - 7PM",
      "High-speed WiFi",
      "Free coffee & snacks",
      "Networking opportunities",
    ],
  },
  {
    id: 2,
    title: "Weekly Pass",
    price: "₹4,499",
    description:
      "Unlimited coworking access for 7 days. Perfect for flexible work schedules.",
    perks: [
      "Workspace access 9AM - 7PM",
      "Priority desk selection",
      "Free printing credits",
      "Invitations to events",
    ],
  },
  {
    id: 3,
    title: "Monthly Pass",
    price: "₹12,999",
    description:
      "Unlimited access to all locations for a month with dedicated support.",
    perks: [
      "24/7 access",
      "Locker storage",
      "Free meeting room credits",
      "Discounts on events & services",
    ],
  },
];

export default function EventPass() {
  const [selectedPass, setSelectedPass] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});

  function validate() {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) errs.email = "Email is required";
    else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())
    )
      errs.email = "Invalid email address";
    if (!selectedPass) errs.pass = "Please select an event pass";
    return errs;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    alert(
      `Thanks, ${formData.name}! You have selected the "${selectedPass.title}" pass. We will contact you shortly.`
    );
    setFormData({ name: "", email: "", phone: "" });
    setSelectedPass(null);
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Banner */}
      <section
        className="relative h-64 md:h-96 bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <h1 className="relative text-white text-4xl md:text-5xl font-bold text-center px-4 max-w-4xl">
          Get Your Event Pass and Work Your Way
        </h1>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Event Pass Cards */}
        <div className="space-y-8">
          {eventPasses.map((pass) => (
            <div
              key={pass.id}
              onClick={() => setSelectedPass(pass)}
              className={`cursor-pointer border rounded-xl p-6 shadow-md transition-shadow hover:shadow-xl ${
                selectedPass?.id === pass.id
                  ? "border-indigo-600 shadow-lg bg-indigo-50"
                  : "border-gray-300 bg-white"
              }`}
            >
              <h2 className="text-2xl font-semibold mb-2">{pass.title}</h2>
              <p className="text-indigo-600 font-bold text-lg mb-3">
                {pass.price}
              </p>
              <p className="mb-4 text-gray-700">{pass.description}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                {pass.perks.map((perk, i) => (
                  <li key={i}>{perk}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Booking Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-3xl shadow-xl flex flex-col"
        >
          <h2 className="text-3xl font-semibold mb-6 text-gray-900 text-center">
            Book Your Event Pass
          </h2>

          {/* Pass Selection Reminder */}
          {errors.pass && (
            <p className="text-red-600 text-sm mb-4 text-center">{errors.pass}</p>
          )}

          {/* Name */}
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-1"
            >
              Full Name <span className="text-red-600">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className={`w-full border rounded-md p-3 focus:outline-none focus:ring-2 ${
                errors.name
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-indigo-600"
              }`}
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-1"
            >
              Email Address <span className="text-red-600">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={`w-full border rounded-md p-3 focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-indigo-600"
              }`}
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div className="mb-5">
            <label
              htmlFor="phone"
              className="block text-gray-700 font-medium mb-1"
            >
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 rounded-xl transition"
          >
            Book Now
          </button>
        </form>
      </section>
    </div>
  );
}
