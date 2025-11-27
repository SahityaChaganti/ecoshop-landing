// src/data/products.js
const products = [
  {
    id: "bamboo-toothbrush",
    name: "Bamboo Toothbrush",
    price: "₹249",
    description: "Sustainably grown bamboo handle with soft bristles.",
    // baseName used to build responsive filenames (see resize script)
    baseName: "bamboo-toothbrush",
    alt: "Bamboo toothbrush on neutral background",
  },
  {
    id: "reusable-bag",
    name: "Reusable Grocery Bag",
    price: "₹399",
    description: "Compact, strong, and made from recycled fabric.",
    baseName: "reusable-bag",
    alt: "Folded reusable grocery bag",
  },
  {
    id: "stainless-straw",
    name: "Stainless Steel Straw Set",
    price: "₹299",
    description: "Set of 4 straws + cleaner in a small pouch.",
    baseName: "stainless-straw",
    alt: "Stainless steel straws in pouch",
  },
  {
    id: "eco-soap",
    name: "Zero-waste Soap Bar",
    price: "₹199",
    description: "Handmade soap with natural oils, plastic-free wrap.",
    baseName: "eco-soap",
    alt: "Eco soap bar on wooden surface",
  },
];

export default products;
