import { Wifi, Car, Users } from "lucide-react";

const amenityIcons = { wifi: Wifi, parking: Car, meeting: Users };

export default function LocationCard({ location }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-all p-6">
      <h2 className="text-xl font-semibold mb-2">{location.name}</h2>
      <p className="text-sm text-gray-500 mb-4">{location.address}</p>

      <div className="grid grid-cols-3 gap-3 mb-4">
        {location.amenities.map((amenity) => {
          const Icon = amenityIcons[amenity.icon];
          return (
            <div
              key={amenity.id}
              className={`flex flex-col items-center p-3 rounded-xl ${
                amenity.available
                  ? "bg-green-50 border border-green-200"
                  : "bg-gray-50 border border-gray-200 opacity-50"
              }`}
            >
              <Icon
                className={`w-5 h-5 mb-1 ${
                  amenity.available ? "text-green-600" : "text-gray-400"
                }`}
              />
              <span className="text-xs font-medium">{amenity.name}</span>
            </div>
          );
        })}
      </div>

      <button className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition">
        View Details
      </button>
    </div>
  );
}