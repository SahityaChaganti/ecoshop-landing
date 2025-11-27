export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div>
          <img
            loading="lazy"
            src="https://i.imgur.com/HuXzT6x.jpeg"
            alt="Sustainability"
            className="rounded-3xl shadow-lg"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-4xl font-bold text-green-800">
            Our Mission: A Greener Planet
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            At EcoShop, we are committed to making sustainable living accessible
            for everyone. Every product we offer is carefully selected to reduce
            environmental impact and encourage a greener lifestyle.
          </p>

          <ul className="mt-6 space-y-3 text-gray-700">
            <li>✔ 100% eco-friendly & ethically sourced materials</li>
            <li>✔ Reducing plastic waste and carbon emissions</li>
            <li>✔ Supporting local and sustainable suppliers</li>
            <li>✔ Packaging that is biodegradable or reusable</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
