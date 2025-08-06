import LocationCard from "../amenities/components/LocationCard";

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
            <h1>Home Page</h1>
            <LocationCard location=  {location}/>
        </div>
        
    )
}

