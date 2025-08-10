import { FaHandshake, FaWifi, FaGlobe, FaUsers } from "react-icons/fa";

function WhyChooseSection() {
  const features = [
    {
      title: "Flexible Plans",
      description:
        "Work how you want — choose from hot desks, private offices, or enterprise solutions that adapt to your needs.",
      icon: <FaHandshake className="text-blue-600 w-10 h-10" />
    },
    {
      title: "Premium Amenities",
      description:
        "High-speed WiFi, modern meeting rooms, artisan coffee, and fully equipped kitchens are all included.",
      icon: <FaWifi className="text-blue-600 w-10 h-10" />
    },
    {
      title: "Global Network",
      description:
        "Access hundreds of inspiring workspaces in major cities worldwide with one membership.",
      icon: <FaGlobe className="text-blue-600 w-10 h-10" />
    },
    {
      title: "Thriving Community",
      description:
        "Collaborate with like-minded professionals and expand your network across industries.",
      icon: <FaUsers className="text-blue-600 w-10 h-10" />
    }
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Designed to make your workday seamless, productive, and enjoyable.
            We blend flexibility, premium amenities, and a vibrant global
            community to help you thrive.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="bg-blue-50 p-5 rounded-full mb-6 flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseSection;
