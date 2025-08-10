// shared/components/CustomerFooter.tsx
export default function Footer() {
  return (
   <footer className="bg-gray-800 text-gray-200 py-12">
  <div className="max-w-screen-xl mx-auto px-6 lg:flex lg:justify-between">
    {/* Branding */}
    <div className="mb-8 lg:mb-0">
      <h3 className="text-2xl font-bold">YourCowork</h3>
      <p className="mt-2 text-sm">Collaborative workspaces for modern teams</p>
    </div>

    {/* Navigation Links */}
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:gap-16 mb-8 lg:mb-0">
      <div>
        <h4 className="font-semibold mb-3">Explore</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="/about" className="hover:text-white">About</a></li>
          <li><a href="/locations" className="hover:text-white">Locations</a></li>
          <li><a href="/amenities" className="hover:text-white">Amenities</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-3">Resources</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="/blog" className="hover:text-white">Blog</a></li>
          <li><a href="/careers" className="hover:text-white">Careers</a></li>
          <li><a href="/faq" className="hover:text-white">FAQ</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-3">Legal</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
          <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
        </ul>
      </div>
    </div>

    {/* Contact & Social */}
    <div>
      <h4 className="font-semibold mb-3">Contact Us</h4>
      <p className="text-sm">123 Maple St, Austin, TX</p>
      <p className="text-sm mt-1">hello@yourcowork.com</p>
      <div className="flex space-x-4 mt-4">
        {/* Replace with your icons */}
        <a href="#" className="hover:text-white">[Facebook]</a>
        <a href="#" className="hover:text-white">[Instagram]</a>
        <a href="#" className="hover:text-white">[LinkedIn]</a>
      </div>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="mt-10 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
    &copy; {new Date().getFullYear()} YourCowork. All rights reserved.
  </div>
</footer>

  );
}
