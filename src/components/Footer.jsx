export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo */}
        <h3 className="text-2xl font-bold">EcoShop</h3>

        {/* Links */}
        <div className="flex gap-6 text-white/80">
          <a href="#products" className="hover:text-white">
            Products
          </a>
          <a href="#about" className="hover:text-white">
            About
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-2xl text-white/80">
          <a href="#" className="hover:text-white">
            🐦
          </a>
          <a href="#" className="hover:text-white">
            📘
          </a>
          <a href="#" className="hover:text-white">
            📸
          </a>
        </div>
      </div>

      <p className="text-center text-white/70 mt-6">
        © {new Date().getFullYear()} EcoShop. All rights reserved.
      </p>
    </footer>
  );
}
