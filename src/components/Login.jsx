import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const redirect = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const userData = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    setError("");

    // 🔥 SIMPLE DEMO VALIDATION
    if (!user.username || !user.password) {
      setError("Please fill all fields");
      return;
    }

    // 🔥 FAKE LOGIN SUCCESS
    localStorage.setItem("token", "demo_token");

    alert("Login successful 🚀");

    redirect("/");
  };

  return (
    <div className="bg-[#0a0a0f] min-h-screen flex items-center justify-center text-white px-4">

      {/* 🔥 CARD */}
      <div className="w-full max-w-md bg-[#111118] border border-white/10 rounded-2xl p-8 shadow-xl">

        {/* HEADER */}
        <div className="text-center mb-8">
          <p className="text-yellow-300 text-xs tracking-[0.2em] uppercase mb-2">
            Welcome Back
          </p>
          <h2 className="text-3xl font-extrabold">
            Login to LapZone
          </h2>
          <p className="text-white/50 text-sm mt-2">
            Access your account and continue shopping
          </p>
        </div>

        {/* ERROR */}
        {error && (
          <p className="text-red-400 text-sm text-center mb-4">
            {error}
          </p>
        )}

        {/* FORM */}
        <div className="space-y-5">

          {/* USERNAME */}
          <div>
            <label className="text-sm text-white/50">
              Username
            </label>
            <input
              type="text"
              name="username"
              onChange={userData}
              placeholder="Enter your username"
              className="w-full mt-2 p-3 rounded-lg bg-white/5 border border-white/10 text-white outline-none focus:border-yellow-300/50"
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="text-sm text-white/50">
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={userData}
              placeholder="Enter your password"
              className="w-full mt-2 p-3 rounded-lg bg-white/5 border border-white/10 text-white outline-none focus:border-yellow-300/50"
            />
          </div>

          {/* BUTTON */}
          <button
            onClick={handleLogin}
            className="w-full bg-yellow-300 text-black py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            Login
          </button>

        </div>

        {/* FOOTER */}
        <div className="mt-6 text-center text-sm text-white/50">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-yellow-300 hover:underline">
            Sign up
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Login;