// app/Layout.tsx
import { Outlet } from "react-router-dom";
import Header from "../shared/components/layout/header";
import Footer from "../shared/components/layout/footer";
import FlashBanner from "../shared/components/FlashBanner";
import CurrentLocation from "../shared/components/location/currentLocation";


export default function Layout() {
  {
  return (
    <div>
      <FlashBanner /> 
        <CurrentLocation />
      
    <div className=" p-4 mx-12 
                space-x-4 h-64 min-h-screen w-full">
        
         <Header />
         <main className="flex-1 flex-col p-6">
          <Outlet /> {/* Nested routes render here */}
          </main>
          <Footer />
     </div>   
</div>
  );
     
  
}
}
