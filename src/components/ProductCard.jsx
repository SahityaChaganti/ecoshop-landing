// src/components/ProductCard.jsx
import React from "react";
import clsx from "clsx";

export default function ProductCard({ product }) {
  const { baseName, name, price, description, alt } = product;

  // Image widths we will provide (320, 640, 1024)
  const urls = {
    avif: `/images/${baseName}-640.avif`,
    webp320: `/images/${baseName}-320.webp`,
    webp640: `/images/${baseName}-640.webp`,
    webp1024: `/images/${baseName}-1024.webp`,
    placeholder: `/images/${baseName}-placeholder.jpg`, // very small blurry jpg (optional)
  };

  return (
    <article className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 group">
      <a
        href="#"
        className="block rounded-t-2xl overflow-hidden focus:outline-none focus-visible:ring-4 focus-visible:ring-green-200"
        aria-label={`View ${name}`}
      >
        <div className="w-full aspect-[4/3] bg-gray-100">
          <picture>
            {/* AVIF preferred when available */}
            <source type="image/avif" srcSet={urls.avif} />
            <source
              type="image/webp"
              srcSet={`${urls.webp320} 320w, ${urls.webp640} 640w, ${urls.webp1024} 1024w`}
            />
            <img
              src={urls.webp640}
              srcSet={`${urls.webp320} 320w, ${urls.webp640} 640w, ${urls.webp1024} 1024w`}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              alt={alt}
              loading="lazy"
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
              style={{
                backgroundImage: `url(${urls.placeholder})`,
                backgroundSize: "cover",
              }}
            />
          </picture>
        </div>
      </a>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="mt-1 text-sm text-gray-600">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-green-700 font-medium">{price}</span>
          <button
            className={clsx(
              "inline-flex items-center gap-2 px-3 py-2 text-sm rounded-md",
              "border border-green-700 text-green-700 hover:bg-green-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-200"
            )}
            aria-label={`Add ${name} to cart`}
            onClick={(e) => {
              e.preventDefault();
              // placeholder action: open modal / add to cart
              alert(`Add ${name} — demo only`);
            }}
          >
            Add
          </button>
        </div>
      </div>
    </article>
  );
}
