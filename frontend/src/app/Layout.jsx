// app/Layout.tsx
import { Outlet } from "react-router-dom";
import Header from "../shared/components/layout/header";
import Footer from "../shared/components/layout/footer";
import FlashBanner from "../shared/components/FlashBanner";
import CurrentLocation from "../shared/components/location/currentLocation";


export default function Layout() {
  {
  return (

<main className="grid grid-rows-[auto,auto,auto,auto,auto] w-full mr-8 p-0">
  <section className="row-start-1 flex justify-between  p-1">
    
    {/* Banner Center */}
    <div className="flex-1 flex justify-center">
      <FlashBanner />
    </div>

    {/* Current Location Right */}
    <div className="flex justify-end">
      <CurrentLocation />
    </div>

  </section>

   <section className="row-start-2 ">
    
    {/* Banner Center */}
    <div className="flex-1">
      <Header />
    </div>

    
  </section>

  <section className="row-start-3">
    
    {/* Banner Center */}
    <main>
          <Outlet /> {/* Nested routes render here */}
   </main>

  </section>

   <section className="row-start-4">
    
    {/* Banner Center */}
    <div className="flex-1">
      <Footer />
    </div>

    
  </section>
   

</main>


  );
     
  
}
}
