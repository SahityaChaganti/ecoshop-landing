// src/components/Products.jsx
import React from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";

export default function Products() {
  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <header className="mb-8 text-center">
          <p className="text-sm uppercase tracking-wide text-green-600">
            Featured
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">
            Sustainable Essentials
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Thoughtfully sourced everyday items designed to reduce waste and
            last longer.
          </p>
        </header>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
