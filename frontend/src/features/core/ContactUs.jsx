import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      // Send data to API or email service
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send. Please try again later.");
      }
    } catch {
      setStatus("❌ An error occurred.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Get in Touch</h1>
        <p className="mt-4 text-lg text-gray-600">
          We’d love to hear from you! Fill out the form below and our team will
          get back to you shortly.
        </p>
      </div>

      {/* Contact Info + Form */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Contact Info Card */}
        <div className="bg-white/80 backdrop-blur-lg shadow-lg rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Our Office
            </h2>
            <p className="text-gray-600 mb-4">
              123 Main Street, Business District
              <br />
              New York, NY 10001, USA
            </p>
            <p className="text-gray-600 mb-2">
              📞 <span className="font-medium">+1 (555) 123-4567</span>
            </p>
            <p className="text-gray-600 mb-6">
              ✉️ <span className="font-medium">info@company.com</span>
            </p>
          </div>

          <div className="h-64 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.905380118617!2d-74.00601508459377!3d40.71277577933007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjEuNiJX!5e0!3m2!1sen!2sus!4v1625256375321!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="bg-white/80 backdrop-blur-lg shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Send Us a Message
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Write your message..."
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
          {status && (
            <p className="mt-4 text-sm text-gray-600">{status}</p>
          )}
        </div>
      </div>
    </div>
  );
}
