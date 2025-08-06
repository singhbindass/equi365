import LocationSelector from "../../shared/components/LocationSelector";
import LocationCard from "../amenities/components/LocationCard";
import LocationSection from "../core/buidling/LocationSection";
import MapEmbed from "./buidling/MapEmbed";
 const location = {
    name: "Downtown Cowork",
    city: "Austin",
    state: "TX",
    address: "123 Maple St",
    amenities: [
      { id: 1, name: "WiFi", icon: "wifi", available: true },
      { id: 2, name: "Parking", icon: "parking", available: false },
      { id: 3, name: "Meeting Rooms", icon: "meeting", available: true }
    ]
  };

export default function Home( ) {
    return (      
        <div>
            
            <main className="flex-grow">
              <LocationSelector/>
              <LocationSection />
              <MapEmbed /> {/* Optional */}
            
              <LocationCard location=  {location}/>
            </main>                        
        </div>        
    )
}

