import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const redirect = useNavigate();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const UserData = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSignup = () => {
    setError("");

    // 🔥 SIMPLE VALIDATION
    if (!user.username || !user.email || !user.password) {
      setError("Please fill all fields");
      return;
    }

    if (user.password.length < 4) {
      setError("Password must be at least 4 characters");
      return;
    }

    // 🔥 FAKE SUCCESS
    localStorage.setItem("token", "demo_token");

    alert("Registration successful 🎉");

    redirect("/");
  };

  return (
    <div className="bg-[#0a0a0f] min-h-screen flex items-center justify-center text-white px-4">

      {/* 🔥 CARD */}
      <div className="w-full max-w-md bg-[#111118] border border-white/10 rounded-2xl p-8 shadow-xl">

        {/* HEADER */}
        <div className="text-center mb-8">
          <p className="text-yellow-300 text-xs tracking-[0.2em] uppercase mb-2">
            Create Account
          </p>
          <h2 className="text-3xl font-extrabold">
            Join LapZone
          </h2>
          <p className="text-white/50 text-sm mt-2">
            Start your journey with us today
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
              onChange={UserData}
              placeholder="Enter your username"
              className="w-full mt-2 p-3 rounded-lg bg-white/5 border border-white/10 text-white outline-none focus:border-yellow-300/50"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-sm text-white/50">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              onChange={UserData}
              placeholder="Enter your email"
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
              onChange={UserData}
              placeholder="Enter your password"
              className="w-full mt-2 p-3 rounded-lg bg-white/5 border border-white/10 text-white outline-none focus:border-yellow-300/50"
            />
          </div>

          {/* BUTTON */}
          <button
            onClick={handleSignup}
            className="w-full bg-yellow-300 text-black py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            Create Account
          </button>

        </div>

        {/* FOOTER */}
        <div className="mt-6 text-center text-sm text-white/50">
          Already have an account?{" "}
          <Link to="/login" className="text-yellow-300 hover:underline">
            Login
          </Link>
        </div>

      </div>
    </div>
  );
};

export default SignUp;