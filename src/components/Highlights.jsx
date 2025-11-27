export default function Highlights() {
  const features = [
    {
      title: "Eco-Friendly Materials",
      desc: "Products made from recycled, biodegradable, and sustainable materials.",
      icon: "🌿",
    },
    {
      title: "Zero-Waste Packaging",
      desc: "We use compostable or reusable packaging for every product.",
      icon: "📦",
    },
    {
      title: "Carbon Neutral Delivery",
      desc: "We offset all carbon emissions from shipping and logistics.",
      icon: "🚚",
    },
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center text-green-800">
          Why Choose EcoShop?
        </h2>
        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          Designed for conscious shoppers who care about sustainability and
          quality.
        </p>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mt-12">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-green-50 p-8 rounded-2xl shadow hover:shadow-xl transition-all text-center"
            >
              <div className="text-5xl">{item.icon}</div>
              <h3 className="mt-4 text-2xl font-semibold text-green-700">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
