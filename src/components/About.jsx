import React from "react";
import LapImage from "../assets/laptop7.png";

const About = () => {
  return (
    <div className="bg-[#0a0a0f] text-white min-h-screen">

      {/* 🔥 HERO */}
      <section className="relative py-20 text-center">

        {/* Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.25),transparent)]"></div>

        <div className="relative max-w-4xl mx-auto px-6">
          <p className="text-yellow-300 text-sm tracking-[0.2em] uppercase mb-4">
            About Us
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            We Build Experiences Around{" "}
            <span className="text-yellow-300">Technology</span>
          </h1>

          <p className="text-white/60 text-lg leading-relaxed">
            LapZone is more than just a laptop store. We deliver premium
            technology experiences that empower students, professionals,
            and creators to do their best work.
          </p>
        </div>
      </section>

      {/* 🔥 MAIN SECTION */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">
              Why Choose LapZone?
            </h2>

            <p className="text-white/60 leading-relaxed">
              At LapZone, we carefully curate the best laptops from top brands
              to ensure performance, reliability, and value. Whether you're a
              student, a developer, or a gamer, we help you find the perfect
              machine tailored to your needs.
            </p>

            <p className="text-white/60 leading-relaxed">
              Our focus is not just selling products — it's delivering a smooth,
              secure, and premium shopping experience with fast delivery and
              trusted quality.
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                ⚡ Fast Delivery
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                🔒 Secure Payment
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                💻 Top Brands
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                ⭐ Premium Quality
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative flex justify-center">
            <div className="absolute w-72 h-72 bg-indigo-500 rounded-full blur-3xl opacity-30"></div>

            <img
              src={LapImage}
              alt="Laptop"
              className="relative w-full max-w-md drop-shadow-2xl hover:scale-105 transition duration-500"
            />
          </div>

        </div>
      </section>

      {/* 🔥 STATS SECTION */}
      <section className="py-16 bg-[#111118]">
        <div className="max-w-[1000px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div>
            <h3 className="text-3xl font-bold text-yellow-300">10K+</h3>
            <p className="text-white/50 text-sm mt-2">Customers</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-yellow-300">500+</h3>
            <p className="text-white/50 text-sm mt-2">Products</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-yellow-300">5+</h3>
            <p className="text-white/50 text-sm mt-2">Years Experience</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-yellow-300">99%</h3>
            <p className="text-white/50 text-sm mt-2">Satisfaction</p>
          </div>

        </div>
      </section>

      {/* 🔥 FINAL CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Upgrade Your Laptop?
        </h2>

        <p className="text-white/50 mb-6">
          Explore our premium collection and find your perfect device today.
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

export default About;