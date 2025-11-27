// src/App.jsx
import React from "react";
import Hero from "./components/Hero";
import Products from "./components/products";
import Navbar from "./components/Navbar";
import Highlights from "./components/Highlights";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen text-gray-800 bg-white">
      <Navbar />
      <Hero />
      <Products />
      <Highlights />
      <About />
      <Contact />
      <Footer />
      <main>{/* About, Testimonials, Newsletter etc. */}</main>
    </div>
  );
}
