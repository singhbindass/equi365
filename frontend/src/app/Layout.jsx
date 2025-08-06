// app/Layout.tsx
import { Outlet } from "react-router-dom";
import Header from "../shared/components/layout/header";
import Footer from "../shared/components/layout/footer";



export default function Layout() {
  
  return (
    <div className="flex flex-col h-screen">
      <div className="h-[5%]">
        <Header />
      </div>
      <main className="h-[90%] overflow-y-auto bg-gray-50 p-6">
        <Outlet /> {/* Nested routes render here */}
      </main>
      <div className="h-[5%]">
        <Footer />
      </div>
    </div>
  
  );
}
