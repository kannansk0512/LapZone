import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token");
  const [mobileOpen, setMobileOpen] = useState(false);

  const Logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const isActive = (path) => location.pathname === path;

  const guestLinks = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Shop" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  const authLinks = [
    { to: "/", label: "Home" },
    { to: "/shop", label: "Shop" },
    { to: "/add_product", label: "Add Product" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  const navLinks = token ? authLinks : guestLinks;

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12 flex justify-between items-center h-16">

        {/* ── Logo ── */}
        <Link
          to="/"
          className="font-extrabold text-2xl tracking-tight select-none text-white"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Lap<span className="text-yellow-300">Zone</span>
        </Link>

        {/* ── Desktop Nav Links ── */}
        <ul className="hidden md:flex items-center gap-7 list-none">
          {navLinks.map(({ to, label }) => (
            <li key={label}>
              <Link
                to={to}
                className={`text-sm font-medium transition-colors duration-200 relative group ${
                  isActive(to) ? "text-white" : "text-white/60 hover:text-white"
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-yellow-300 rounded-full transition-all duration-200 ${
                    isActive(to) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* ── Right Side ── */}
        <div className="hidden md:flex items-center gap-4">
          {!token ? (
            <>
              <Link
                to="/login"
                className="text-sm font-medium text-white border border-white/20 hover:border-white/50 hover:bg-white/5 px-5 py-2 rounded-lg transition-all duration-200"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-sm font-medium bg-yellow-300 text-black px-5 py-2 rounded-lg hover:bg-yellow-400 hover:scale-[1.02] transition-all duration-200"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
              {/* Cart */}
              <Link
                to="/cart"
                aria-label="Cart"
                className="relative w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 transition-all duration-200 text-white"
              >
                <FaShoppingCart className="text-base" />
                {/* Uncomment when cart count is ready: */}
                {/* <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-yellow-300 text-black text-[9px] font-bold rounded-full flex items-center justify-center">3</span> */}
              </Link>

              {/* Profile */}
              <Link
                to="/profile"
                aria-label="Profile"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 transition-all duration-200 text-white"
              >
                <FaUserCircle className="text-lg" />
              </Link>

              {/* Divider */}
              <div className="w-px h-5 bg-white/10" />

              {/* Logout */}
              <button
                onClick={Logout}
                className="text-sm font-medium text-red-400 hover:text-white hover:bg-red-500 border border-red-500/40 hover:border-red-500 px-4 py-2 rounded-lg transition-all duration-200"
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          className="md:hidden text-white hover:text-yellow-300 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiX className="text-2xl" /> : <HiMenuAlt3 className="text-2xl" />}
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-white/5 bg-[#0d0d15] px-6 py-5 flex flex-col gap-1">
          {navLinks.map(({ to, label }) => (
            <Link
              key={label}
              to={to}
              onClick={() => setMobileOpen(false)}
              className={`text-sm font-medium px-3 py-2.5 rounded-lg transition-all duration-200 ${
                isActive(to)
                  ? "text-yellow-300 bg-yellow-300/10"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              {label}
            </Link>
          ))}

          <div className="border-t border-white/5 mt-3 pt-4 flex flex-col gap-2">
            {!token ? (
              <>
                <Link
                  to="/login"
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-center text-white border border-white/15 px-5 py-2.5 rounded-lg hover:bg-white/5 transition-all duration-200"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-center bg-yellow-300 text-black px-5 py-2.5 rounded-lg hover:bg-yellow-400 transition-all duration-200"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <div className="flex items-center justify-between">
                <div className="flex gap-3">
                  <Link
                    to="/cart"
                    onClick={() => setMobileOpen(false)}
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white hover:text-yellow-300 transition-all"
                  >
                    <FaShoppingCart />
                  </Link>
                  <Link
                    to="/profile"
                    onClick={() => setMobileOpen(false)}
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white hover:text-yellow-300 transition-all"
                  >
                    <FaUserCircle className="text-lg" />
                  </Link>
                </div>
                <button
                  onClick={() => { setMobileOpen(false); Logout(); }}
                  className="text-sm font-medium text-red-400 border border-red-500/30 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-200"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;