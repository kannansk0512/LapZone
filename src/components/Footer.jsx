import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0f] border-t border-white/5 text-white">

      <div className="max-w-[1300px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div>
            <Link
              to="/"
              className="font-extrabold text-2xl tracking-tight text-white inline-block"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Lap<span className="text-yellow-300">Zone</span>
            </Link>
            <p className="text-sm text-white/40 leading-relaxed font-light mt-4">
              LapZone offers the latest laptops with cutting-edge technology at
              competitive prices. Your trusted destination for premium devices.
            </p>

            <div className="flex gap-3 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white/50 hover:text-yellow-300 hover:border-yellow-300/30 hover:bg-yellow-300/5 transition-all duration-200"
              >
                <FaFacebook className="text-base" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white/50 hover:text-yellow-300 hover:border-yellow-300/30 hover:bg-yellow-300/5 transition-all duration-200"
              >
                <FaTwitter className="text-base" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white/50 hover:text-yellow-300 hover:border-yellow-300/30 hover:bg-yellow-300/5 transition-all duration-200"
              >
                <FaInstagram className="text-base" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white/50 hover:text-yellow-300 hover:border-yellow-300/30 hover:bg-yellow-300/5 transition-all duration-200"
              >
                <FaYoutube className="text-base" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-sm font-semibold text-white tracking-widest uppercase mb-5"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-white/45 hover:text-yellow-300 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-yellow-300 transition-colors duration-200" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-sm text-white/45 hover:text-yellow-300 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-yellow-300 transition-colors duration-200" />
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-white/45 hover:text-yellow-300 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-yellow-300 transition-colors duration-200" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-white/45 hover:text-yellow-300 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-yellow-300 transition-colors duration-200" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4
              className="text-sm font-semibold text-white tracking-widest uppercase mb-5"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Categories
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/shop" className="text-sm text-white/45 hover:text-yellow-300 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-yellow-300 transition-colors duration-200" />
                  Gaming Laptops
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-sm text-white/45 hover:text-yellow-300 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-yellow-300 transition-colors duration-200" />
                  Business Laptops
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-sm text-white/45 hover:text-yellow-300 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-yellow-300 transition-colors duration-200" />
                  Student Laptops
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-sm text-white/45 hover:text-yellow-300 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-yellow-300 transition-colors duration-200" />
                  MacBooks
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-sm text-white/45 hover:text-yellow-300 transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-yellow-300 transition-colors duration-200" />
                  Budget Picks
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="text-sm font-semibold text-white tracking-widest uppercase mb-5"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MdEmail className="text-yellow-300 text-base mt-0.5 shrink-0" />
                <a
                  href="mailto:support@lapzone.com"
                  className="text-sm text-white/45 hover:text-white transition-colors duration-200"
                >
                  support@lapzone.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MdPhone className="text-yellow-300 text-base mt-0.5 shrink-0" />
                <a
                  href="tel:+919876543211"
                  className="text-sm text-white/45 hover:text-white transition-colors duration-200"
                >
                  +91 9876543211
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MdLocationOn className="text-yellow-300 text-base mt-0.5 shrink-0" />
                <span className="text-sm text-white/45 leading-relaxed">
                  123 LapZone St., Kerala, India
                </span>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-xs text-white/30 mb-2 uppercase tracking-widest">
                Stay Updated
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-white/5 border border-white/10 text-white text-sm px-3 py-2 rounded-lg outline-none focus:border-yellow-300/50 placeholder:text-white/20 transition-colors duration-200"
                />
                <button className="bg-yellow-300 text-black text-sm font-semibold px-3 py-2 rounded-lg hover:bg-yellow-400 transition-colors duration-200">
                  →
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} LapZone. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/" className="text-xs text-white/25 hover:text-white/60 transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/" className="text-xs text-white/25 hover:text-white/60 transition-colors duration-200">
              Terms of Service
            </Link>
            <Link to="/" className="text-xs text-white/25 hover:text-white/60 transition-colors duration-200">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;