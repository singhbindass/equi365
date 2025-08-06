import { useState } from "react";

export default function OnePageLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
  
      <header className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo */}
     <h1 className="text-2xl font-bold text-red-500">My Website</h1>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-gray-200">Home</a>
            <a href="#about" className="hover:text-gray-200">About</a>
            <a href="#contact" className="hover:text-gray-200">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {/* Hamburger Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <nav className="md:hidden bg-blue-500 px-4 pb-4 space-y-2">
            <a
              href="#home"
              className="block hover:text-gray-200"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="block hover:text-gray-200"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="block hover:text-gray-200"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-6">
        <section id="home" className="py-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Welcome!</h2>
          <p className="text-lg md:text-xl text-gray-700">
            This is a responsive one-page layout with Tailwind CSS and React.
          </p>
        </section>

        <section
          id="about"
          className="py-20 text-center bg-gray-100 rounded-xl my-10"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">About Us</h2>
          <p className="text-gray-700 max-w-xl mx-auto">
            We build modern web solutions using React and Tailwind for fast and
            beautiful designs.
          </p>
        </section>

        <section id="contact" className="py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-700">Email us at example@email.com</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-4 mt-auto">
        <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
        <Footer />
      </footer>
    </div>
  );
}
