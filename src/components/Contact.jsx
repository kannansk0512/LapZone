import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });

    // Demo success
    alert("Message sent successfully 🚀");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="bg-[#0a0a0f] text-white min-h-screen">

      {/* 🔥 HERO */}
      <section className="relative py-20 text-center">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.25),transparent)]"></div>

        <div className="relative max-w-3xl mx-auto px-6">
          <p className="text-yellow-300 text-sm tracking-[0.2em] uppercase mb-4">
            Contact
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Get in Touch With Us
          </h1>

          <p className="text-white/60 text-lg">
            Have questions or need help choosing the right laptop?
            Our team is here to assist you.
          </p>
        </div>
      </section>

      {/* 🔥 MAIN SECTION */}
      <section className="py-16">
        <div className="max-w-[1100px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT INFO */}
          <div className="space-y-6">

            <h2 className="text-2xl font-bold">
              Let’s Talk
            </h2>

            <p className="text-white/60 leading-relaxed">
              Whether you’re looking for the perfect laptop or need support,
              we’re always ready to help. Fill out the form and we’ll get back
              to you as soon as possible.
            </p>

            {/* CONTACT CARDS */}
            <div className="space-y-4 mt-6">

              <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                📧 support@lapzone.com
              </div>

              <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                📞 +91 98765 43210
              </div>

              <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                📍 Kochi, India
              </div>

            </div>

            {/* TRUST */}
            <div className="text-sm text-white/40 mt-6">
              ✔ 24/7 Support &nbsp; ✔ Fast Response &nbsp; ✔ Trusted Service
            </div>

          </div>

          {/* RIGHT FORM */}
          <div className="bg-[#111118] border border-white/10 p-8 rounded-2xl">

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* NAME */}
              <div>
                <label className="text-sm text-white/50">
                  Your Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full mt-2 p-3 rounded-lg bg-white/5 border border-white/10 text-white outline-none focus:border-yellow-300/50"
                  required
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="text-sm text-white/50">
                  Your Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full mt-2 p-3 rounded-lg bg-white/5 border border-white/10 text-white outline-none focus:border-yellow-300/50"
                  required
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="text-sm text-white/50">
                  Your Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message..."
                  rows="4"
                  className="w-full mt-2 p-3 rounded-lg bg-white/5 border border-white/10 text-white outline-none focus:border-yellow-300/50"
                  required
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full bg-yellow-300 text-black py-3 rounded-xl font-semibold hover:scale-105 transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>
      </section>

      {/* 🔥 CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Need Help Choosing a Laptop?
        </h2>

        <p className="text-white/50 mb-6">
          Explore our collection and find the perfect device for you.
        </p>

        <a
          href="/shop"
          className="bg-yellow-300 text-black px-8 py-3 rounded-xl font-semibold hover:scale-105 transition"
        >
          Explore Products
        </a>
      </section>

    </div>
  );
};

export default Contact;