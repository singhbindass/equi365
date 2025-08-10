import { useState } from "react";
import { Search, Mail, Phone, MessageCircle } from "lucide-react";

export default function Help() {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const faqs = [
    {
      category: "Booking",
      question: "How do I book a workspace?",
      answer:
        "Log in to your account, go to the Locations page, and select a workspace. Follow the booking steps and you'll receive a confirmation email."
    },
    {
      category: "Booking",
      question: "Can I cancel or reschedule a booking?",
      answer:
        "Yes, you can manage your bookings in the 'My Bookings' section. Click the booking you want to update and choose Cancel or Reschedule."
    },
    {
      category: "Billing",
      question: "What payment methods do you accept?",
      answer:
        "We accept major credit cards, PayPal, and bank transfers for corporate accounts."
    },
    {
      category: "Account",
      question: "How do I update my profile information?",
      answer:
        "Go to your Account Settings and update your personal details. Changes are saved instantly."
    }
  ];

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="  py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Help Center</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Find answers, get support, and explore resources to make the most of our coworking spaces.
        </p>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mt-8 relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search for answers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-lg shadow-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800"
          />
        </div>
      </header>

      {/* Quick Links */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Booking", description: "Learn how to reserve workspaces" },
          { title: "Billing", description: "Payment options & invoices" },
          { title: "Account", description: "Manage your profile & settings" },
          { title: "Facilities", description: "Wi-Fi, meeting rooms & more" }
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow hover:shadow-lg transition p-6 cursor-pointer"
          >
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg shadow-sm"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
                >
                  <span className="font-medium">{faq.question}</span>
                  <span>{openIndex === index ? "−" : "+"}</span>
                </button>
                {openIndex === index && (
                  <div className="p-4 pt-0 text-gray-600">{faq.answer}</div>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-500">No results found for "{searchTerm}".</p>
          )}
        </div>
      </section>

      {/* Contact Support */}
      <section className="bg-white border-t border-gray-200 py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-4">Still need help?</h3>
          <p className="text-gray-600 mb-8">
            Our support team is available 24/7. Choose your preferred contact method.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:support@yourcowork.com"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition-colors"
            >
              <Mail size={18} /> Email Support
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition-colors"
            >
              <Phone size={18} /> Call Us
            </a>
            <a
              href="/livechat"
              className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg shadow hover:bg-purple-700 transition-colors"
            >
              <MessageCircle size={18} /> Live Chat
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 text-center py-6 text-sm">
        © {new Date().getFullYear()} YourCowork. All rights reserved.
      </footer>
    </div>
  );
}
