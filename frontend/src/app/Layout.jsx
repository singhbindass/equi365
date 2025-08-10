import { Outlet } from "react-router-dom";
import Header from "../shared/components/layout/header";
import Footer from "../shared/components/layout/footer";
import FlashBanner from "../shared/components/FlashBanner";
import CurrentLocation from "../shared/components/location/currentLocation";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col w-full">

      {/* Banner - full width fixed at top with enough padding */}
      <header className="fixed inset-x-0 top-0 z-50">
        <FlashBanner />
      </header>

      {/* Current Location - fixed top-right with padding, min width and height */}
      <div className="fixed top-3 right-4 z-60 min-w-[180px] min-h-[40px]">
        <CurrentLocation />
      </div>

      {/* Spacer to offset fixed header height (adjust this to match banner height) */}
      <div className="h-14 sm:h-16"></div>

      {/* Main content container */}
      <div className="flex-grow flex flex-col max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header below banner */}
        <header className="mb-4">
          <Header />
        </header>

        {/* Main nested routes content */}
        <main className="flex-grow">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="mt-8">
          <Footer />
        </footer>

      </div>
    </div>
  );
}
