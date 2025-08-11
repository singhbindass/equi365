import { useState } from "react";
import {
  Wifi, Coffee, Car, Users, Briefcase, Printer, Zap, Utensils,
  X, User, Mail, Phone, MessageSquare
} from "lucide-react";

export default function AmenitiesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const amenities = [
    { icon: <Wifi className="w-8 h-8 text-amber-600" />, title: "High-Speed WiFi", description: "Stay connected with reliable, lightning-fast internet throughout our spaces." },
    { icon: <Coffee className="w-8 h-8 text-amber-600" />, title: "Complimentary Coffee & Tea", description: "Enjoy fresh coffee and a variety of teas to keep you energized all day." },
    { icon: <Car className="w-8 h-8 text-amber-600" />, title: "Parking", description: "Convenient on-site parking for members and visitors." },
    { icon: <Users className="w-8 h-8 text-amber-600" />, title: "Meeting Rooms", description: "Book fully equipped meeting spaces for client calls, team syncs, or workshops." },
    { icon: <Briefcase className="w-8 h-8 text-amber-600" />, title: "Private Offices", description: "Secure, quiet spaces for focused work and private conversations." },
    { icon: <Printer className="w-8 h-8 text-amber-600" />, title: "Printing & Scanning", description: "Access professional-grade printing and scanning facilities." },
    { icon: <Zap className="w-8 h-8 text-amber-600" />, title: "24/7 Access", description: "Work on your schedule with secure, round-the-clock access." },
    { icon: <Utensils className="w-8 h-8 text-amber-600" />, title: "Kitchen & Dining", description: "Fully stocked kitchens and comfortable dining spaces for breaks." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      {/* Hero Section */}
      <header className="py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">Amenities</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600">
          Designed to make your workday seamless, productive, and enjoyable.
        </p>
      </header>

      {/* Amenities Grid */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {amenities.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="bg-white border-t border-gray-200 py-12 px-6 text-center">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Experience Our Amenities</h3>
        <p className="text-gray-600 mb-6">
          Have a question or want to know more? Send us an enquiry!
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-block bg-gradient-to-r from-amber-400 to-yellow-300 text-gray-800 font-semibold px-6 py-3 rounded-lg shadow hover:shadow-xl hover:scale-105 transform transition"
        >
          Enquire Now
        </button>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50 p-4">
          <div className="w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-slideUp bg-white border border-gray-200">
            
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-amber-300 to-yellow-200 p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">Customer Enquiry</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-700 hover:text-gray-900 transition"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4">
              <div className="flex items-center bg-gray-50 rounded-lg p-3 border border-gray-200">
                <User className="text-gray-500 mr-3" />
                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-transparent flex-1 outline-none"
                />
              </div>
              <div className="flex items-center bg-gray-50 rounded-lg p-3 border border-gray-200">
                <Mail className="text-gray-500 mr-3" />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-transparent flex-1 outline-none"
                />
              </div>
              <div className="flex items-center bg-gray-50 rounded-lg p-3 border border-gray-200">
                <Phone className="text-gray-500 mr-3" />
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="bg-transparent flex-1 outline-none"
                />
              </div>
              <div className="flex items-start bg-gray-50 rounded-lg p-3 border border-gray-200">
                <MessageSquare className="text-gray-500 mr-3 mt-1" />
                <textarea
                  placeholder="Your Message"
                  rows={3}
                  className="bg-transparent flex-1 outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-400 to-yellow-300 text-gray-800 font-semibold py-3 rounded-lg shadow-md hover:scale-105 transform transition"
              >
                Submit Enquiry
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
