import React, { useState } from "react";

const plans = [
  {
    id: 1,
    name: "Basic Virtual Office",
    price: "₹2,999 / month",
    description:
      "Ideal for startups and freelancers needing a prestigious business address.",
    features: [
      "Business Address",
      "Mail Handling",
      "Phone Answering",
      "Limited Meeting Room Access",
    ],
  },
  {
    id: 2,
    name: "Premium Virtual Office",
    price: "₹5,999 / month",
    description:
      "For growing businesses requiring dedicated phone lines & unlimited meeting rooms.",
    features: [
      "Business Address",
      "Mail Handling",
      "Dedicated Phone Number & Answering",
      "Unlimited Meeting Room Access",
      "Virtual Receptionist",
    ],
  },
];

export default function VirtualOffice() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
  });

  const [errors, setErrors] = useState({});

  function validate() {
    let errs = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) errs.email = "Email is required";
    else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())
    )
      errs.email = "Invalid email address";
    if (!formData.plan) errs.plan = "Please select a plan";
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
    alert(`Thank you, ${formData.name}! Your inquiry has been received.`);
    setFormData({ name: "", email: "", phone: "", plan: "" });
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative h-96 bg-fixed bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <h1 className="relative text-white text-4xl md:text-5xl font-extrabold max-w-4xl text-center px-6">
          Establish Your Virtual Office with a Professional Presence
        </h1>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Info */}
        <div className="flex flex-col justify-center text-gray-800">
          <h2 className="text-4xl font-bold mb-6">Why Choose a Virtual Office?</h2>
          <p className="text-lg leading-relaxed mb-6">
            Virtual Offices provide your business with a professional address, mail
            handling services, and telephone answering without the cost of a
            physical office. Perfect for entrepreneurs, startups, and established
            companies looking to expand.
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
            <li>Prestigious business address to enhance credibility</li>
            <li>Secure mail & package handling</li>
            <li>Professional phone answering services</li>
            <li>Flexible access to meeting rooms and coworking spaces</li>
            <li>Cost-effective alternative to traditional offices</li>
          </ul>
        </div>

        {/* Right Form */}
        <div className="bg-white p-10 rounded-3xl shadow-xl flex flex-col">
          <h2 className="text-3xl font-semibold mb-8 text-center text-gray-900">
            Select Your Plan & Contact Us
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
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
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
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
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
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

            {/* Plan Selection */}
            <fieldset>
              <legend className="text-gray-700 font-semibold mb-3">
                Choose a Plan <span className="text-red-600">*</span>
              </legend>
              <div className="space-y-4">
                {plans.map((plan) => (
                  <label
                    key={plan.id}
                    htmlFor={`plan-${plan.id}`}
                    className={`flex items-start p-4 border rounded-lg cursor-pointer transition-shadow hover:shadow-lg ${
                      formData.plan === plan.name
                        ? "border-indigo-600 shadow-lg"
                        : "border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      id={`plan-${plan.id}`}
                      name="plan"
                      value={plan.name}
                      checked={formData.plan === plan.name}
                      onChange={handleChange}
                      className="mt-1 mr-4 accent-indigo-600"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">{plan.name}</h3>
                      <p className="text-indigo-600 font-bold mb-1">{plan.price}</p>
                      <p className="text-gray-700 text-sm">{plan.description}</p>
                      <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1 text-sm">
                        {plan.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </label>
                ))}
              </div>
              {errors.plan && (
                <p className="text-red-600 text-sm mt-2">{errors.plan}</p>
              )}
            </fieldset>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 rounded-xl transition"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
