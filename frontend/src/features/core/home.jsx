import LocationSelector from "../../shared/components/LocationSelector";
import ResponsiveOverlay from "../../shared/components/ResponsiveOverlay";
import ImageSlider from "../../shared/components/ui/component/slider";
import LocationCard from "../amenities/components/LocationCard";
import LocationSection from "../core/buidling/LocationSection";
import MapEmbed from "./buidling/MapEmbed";
import WhyChooseSection from "./YourWhyChooseSectionHere";
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


const images = [
  "https://picsum.photos/400/300",
  "https://picsum.photos/seed/picsum/400/300",
  "https://source.unsplash.com/random/800x600?technology",
];

export default function Home( ) {
    return (      
        <div>
            
            <main className="flex-grow">
           
             <ResponsiveOverlay/>
               <WhyChooseSection />
             <div className="flex flex-row items-start gap-6">
                <LocationSection location={location}/>
             </div>

            </main>                        
        </div>        
    )
}

