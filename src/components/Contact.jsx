export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-green-50">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center text-green-800">
          Get in Touch
        </h2>
        <p className="text-center text-gray-600 mt-3">
          Have a question or want to collaborate? Reach out to us!
        </p>

        {/* Form */}
        <form className="mt-10 bg-white p-8 rounded-2xl shadow">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 p-3 rounded-lg w-full"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 p-3 rounded-lg w-full"
              required
            />
          </div>

          <textarea
            placeholder="Your Message"
            rows="5"
            className="mt-6 border border-gray-300 p-3 rounded-lg w-full"
            required
          ></textarea>

          <button className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg text-lg transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
