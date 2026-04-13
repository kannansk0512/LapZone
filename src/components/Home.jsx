import React from "react";
import { Link } from "react-router-dom";
import LapImage from "../assets/laptop7.png";
import Products from "./Products";

const Home = () => {
  return (
    <div className="bg-[#0a0a0f] text-white overflow-x-hidden">

      {/* ── HERO SECTION ── */}
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-20 relative">

          {/* Glow blob */}
          <div
            className="absolute -top-24 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(245,197,24,0.10) 0%, transparent 70%)" }}
          />

          {/* ── LEFT: Text Content ── */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 bg-yellow-300/10 border border-yellow-300/30 text-yellow-300 text-xs font-medium px-4 py-1.5 rounded-full tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-300" />
              2025 Models Now In Stock
            </div>

            {/* Heading */}
            <h1
              className="text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight mb-5"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Your Next Laptop<br />
              Starts at{" "}
              <span className="text-yellow-300">LapZone</span>
            </h1>

            {/* Subtext */}
            <p className="text-white/50 text-lg leading-relaxed max-w-xl mb-8 font-light">
              From student essentials to pro workstations — curated, trusted,
              and always delivered at the best price.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                to="/shop/"
                className="bg-yellow-300 text-black font-medium px-8 py-3.5 rounded-xl hover:bg-yellow-400 hover:-translate-y-0.5 transition-all duration-200"
              >
                Browse All Laptops
              </Link>
              <Link
                to="/shop/"
                className="border border-white/20 text-white font-medium px-8 py-3.5 rounded-xl hover:border-white/60 hover:bg-white/5 transition-all duration-200"
              >
                View Deals
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-10">
              {[
                { num: "500+", label: "Models available" },
                { num: "12k+", label: "Happy customers" },
                { num: "4.9★", label: "Avg. rating" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    className="text-2xl font-extrabold"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {s.num}
                  </div>
                  <div className="text-xs text-white/40 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Featured Card ── */}
          <div className="flex justify-center mt-10 lg:mt-0">
            <div className="relative w-full max-w-[400px] bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border border-white/10 rounded-3xl p-6 overflow-hidden">
              {/* Top shimmer line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-300 to-transparent" />

              {/* Laptop Image */}
              <div className="flex justify-center mb-6">
                <img
                  src={LapImage}
                  alt="Featured Laptop"
                  className="w-56 h-auto drop-shadow-2xl"
                />
              </div>

              {/* Price Row */}
              <div className="flex justify-between items-end mb-4">
                <div>
                  <p className="text-xs text-white/40 mb-1">Featured Pick</p>
                  <div className="flex items-baseline gap-2">
                    <span
                      className="text-3xl font-extrabold text-yellow-300"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      ₹89,999
                    </span>
                    <span className="text-sm text-white/30 line-through">₹1,09,999</span>
                  </div>
                </div>
                <span className="bg-yellow-300/15 text-yellow-300 text-xs font-semibold px-3 py-1.5 rounded-lg tracking-wide">
                  18% OFF
                </span>
              </div>

              {/* Spec Chips */}
              <div className="flex gap-2 flex-wrap">
                {[
                  ["Intel i7", "13th Gen"],
                  ["16 GB", "RAM"],
                  ["512 GB", "NVMe SSD"],
                ].map(([val, label]) => (
                  <div
                    key={label}
                    className="bg-white/5 rounded-lg px-3 py-2 text-xs text-white/50"
                  >
                    <span className="block text-white font-semibold text-sm">{val}</span>
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── BRAND STRIP ── */}
        <div className="border-t border-white/5 py-6">
          <p className="text-xs text-white/25 tracking-[0.15em] uppercase mb-4">Trusted Brands</p>
          <div className="flex gap-8 flex-wrap items-center">
            {["Apple", "Dell", "Lenovo", "HP", "ASUS", "MSI", "Acer", "Samsung"].map((b) => (
              <span
                key={b}
                className="font-extrabold text-lg text-white/20 hover:text-white/60 transition-colors duration-200 cursor-default"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* ── WHY LAPZONE FEATURES ── */}
        <div className="py-20">
          <p className="text-xs text-yellow-300 tracking-[0.15em] uppercase font-medium mb-3">Why LapZone</p>
          <div className="flex justify-between items-end flex-wrap gap-4 mb-12">
            <h2
              className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Built for Buyers<br />Who Know Better
            </h2>
            <p className="text-white/40 text-base leading-relaxed max-w-md font-light">
              We don't just sell laptops. We guide you to the right one — with
              expert curation, honest specs, and zero pressure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "🛡️", title: "Genuine Products", desc: "Every laptop is sourced directly from authorized distributors. 100% original, with full manufacturer warranty." },
              { icon: "⚡", title: "Fast Delivery", desc: "Same-day dispatch across Kerala. Pan-India shipping in 2–4 business days with real-time tracking." },
              { icon: "💬", title: "Expert Support", desc: "Not sure which laptop to buy? Our tech advisors are available 7 days a week to help you choose right." },
              { icon: "💳", title: "Easy EMI Options", desc: "0% EMI on all major credit cards. Flexible payment plans starting from ₹2,999/month." },
              { icon: "🔁", title: "Hassle-Free Returns", desc: "10-day easy return policy. No questions asked. If you're not satisfied, we make it right — fast." },
              { icon: "🏆", title: "Best Price Guarantee", desc: "Found it cheaper elsewhere? We'll match it. Our price-match promise keeps your wallet happy." },
            ].map((f) => (
              <div
                key={f.title}
                className="bg-[#111118] border border-white/7 rounded-2xl p-7 hover:border-yellow-300/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-yellow-300/10 rounded-xl flex items-center justify-center text-xl mb-5">
                  {f.icon}
                </div>
                <h3
                  className="font-bold text-base mb-2"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {f.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed font-light">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PRODUCTS SECTION ── */}
      <Products />

      {/* ── CTA BANNER ── */}
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12 pb-24">
        <div className="relative bg-gradient-to-br from-[#1a1a0a] to-[#1a1a2e] border border-yellow-300/20 rounded-3xl p-10 lg:p-14 flex flex-col lg:flex-row justify-between items-center gap-8 overflow-hidden">
          <div className="absolute -right-10 -top-10 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(245,197,24,0.07), transparent 70%)" }} />
          <div className="text-center lg:text-left">
            <h2
              className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-3"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Not Sure Which Laptop<br />Is Right For You?
            </h2>
            <p className="text-white/40 font-light">
              Take our 60-second quiz and get a personalized recommendation.
            </p>
          </div>
          <div className="flex gap-4 flex-wrap justify-center">
            <Link
              to="/shop/"
              className="bg-yellow-300 text-black font-medium px-8 py-3.5 rounded-xl hover:bg-yellow-400 hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap"
            >
              Take the Quiz
            </Link>
            <Link
              to="/shop/"
              className="border border-white/20 text-white font-medium px-8 py-3.5 rounded-xl hover:border-white/50 hover:bg-white/5 transition-all duration-200 whitespace-nowrap"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;