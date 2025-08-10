import { Wifi, Coffee, Car, Users, Briefcase, Printer, Zap, Utensils } from "lucide-react";

export default function AmenitiesPage() {
  const amenities = [
    {
      icon: <Wifi className="w-8 h-8 text-blue-600" />,
      title: "High-Speed WiFi",
      description: "Stay connected with reliable, lightning-fast internet throughout our spaces."
    },
    {
      icon: <Coffee className="w-8 h-8 text-blue-600" />,
      title: "Complimentary Coffee & Tea",
      description: "Enjoy fresh coffee and a variety of teas to keep you energized all day."
    },
    {
      icon: <Car className="w-8 h-8 text-blue-600" />,
      title: "Parking",
      description: "Convenient on-site parking for members and visitors."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Meeting Rooms",
      description: "Book fully equipped meeting spaces for client calls, team syncs, or workshops."
    },
    {
      icon: <Briefcase className="w-8 h-8 text-blue-600" />,
      title: "Private Offices",
      description: "Secure, quiet spaces for focused work and private conversations."
    },
    {
      icon: <Printer className="w-8 h-8 text-blue-600" />,
      title: "Printing & Scanning",
      description: "Access professional-grade printing and scanning facilities."
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "24/7 Access",
      description: "Work on your schedule with secure, round-the-clock access."
    },
    {
      icon: <Utensils className="w-8 h-8 text-blue-600" />,
      title: "Kitchen & Dining",
      description: "Fully stocked kitchens and comfortable dining spaces for breaks."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Amenities</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Designed to make your workday seamless, productive, and enjoyable.
        </p>
      </header>

      {/* Amenities Grid */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {amenities.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="bg-white border-t border-gray-200 py-12 px-6 text-center">
        <h3 className="text-xl font-semibold mb-4">Experience Our Amenities</h3>
        <p className="text-gray-600 mb-6">
          Book a tour and see how our facilities can support your business needs.
        </p>
        <a
          href="/book-tour"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition-colors"
        >
          Book a Tour
        </a>
      </section>
    </div>
  );
}
