import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-green-700">EcoShop</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#products" className="hover:text-green-700">
            Products
          </a>
          <a href="#about" className="hover:text-green-700">
            About
          </a>
          <a href="#contact" className="hover:text-green-700">
            Contact
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu Expand */}
      {open && (
        <div className="md:hidden bg-white shadow-lg">
          <a href="#products" className="block px-6 py-3 border-b">
            Products
          </a>
          <a href="#about" className="block px-6 py-3 border-b">
            About
          </a>
          <a href="#contact" className="block px-6 py-3">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
