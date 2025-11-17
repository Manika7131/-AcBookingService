"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Swal from "sweetalert2";
import { useRouter } from "next/router"; // ✅ Correct for Pages Router


export default function AdminPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password.");
      Swal.fire({
        icon: "warning",
        title: "Missing Fields",
        text: "Please enter both email and password.",
        confirmButtonColor: "#0a2857",
      });
      return;
    }

    if (email === "admin@skr.com" && password === "admin123") {
      Swal.fire({
        icon: "success",
        title: "Welcome, Admin!",
        text: "Login Successful!",
        confirmButtonColor: "#0a2857",
        timer: 1200,
        showConfirmButton: false,
      });

      // ✅ Redirect after success
      setTimeout(() => {
        router.push("/complaints");
      }, 1300);
    } else {
      setError("Invalid credentials. Try again.");
      Swal.fire({
        icon: "error",
        title: "Access Denied",
        text: "Invalid credentials. Please try again.",
        confirmButtonColor: "#0a2857",
      });
    }
  };

  return (
    <>
      <Navbar />

      <main
        className="flex justify-center items-center min-h-[85vh] w-full px-4"
        style={{
          background: "linear-gradient(145deg, #dfe6ed, #f3f7fb)",
        }}
      >
        <div className="relative bg-[#e0e5ec] p-10 rounded-3xl shadow-[10px_10px_20px_#babec4,-10px_-10px_20px_#ffffff] w-full max-w-md text-center border border-gray-200/40">
          <div className="relative flex justify-center mb-8">
            <div className="p-3 rounded-full bg-[#e0e5ec] shadow-[6px_6px_12px_#babec4,-6px_-6px_12px_#ffffff]">
              <img
                src="/assets/skr-logo.png"
                alt="SKR Logo"
                className="w-24 h-24 object-contain"
              />
            </div>
          </div>

          <h2 className="text-3xl font-extrabold text-[#0a2857] mb-8">
            Admin Login
          </h2>

          {error && (
            <div className="bg-red-100 text-red-700 text-sm p-3 rounded-md mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-left">
              <label className="block font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="admin@skr.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#e0e5ec] shadow-[inset_6px_6px_12px_#babec4,inset_-6px_-6px_12px_#ffffff] focus:outline-none text-gray-800"
              />
            </div>

            <div className="text-left">
              <label className="block font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#e0e5ec] shadow-[inset_6px_6px_12px_#babec4,inset_-6px_-6px_12px_#ffffff] focus:outline-none text-gray-800"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#0a2857] to-[#1d4d91] shadow-[6px_6px_12px_#babec4,-6px_-6px_12px_#ffffff] hover:scale-[1.02] transition-transform duration-200"
            >
              Login
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
}
