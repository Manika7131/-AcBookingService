"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
    
  ];

  return (
    <header
      className="sticky top-0 z-50 shadow-md border-b select-none"
      style={{
        backgroundColor: "#0a2857",
        WebkitUserSelect: "none",
        userSelect: "none",
        WebkitTapHighlightColor: "transparent",
      }}
    >
      <div className="w-full flex justify-between items-center h-16">
        {/* LEFT: Logo + Brand */}
        <Link
          href="/"
          className="flex items-center gap-3 pl-4 lg:pl-8 no-underline focus:outline-none"
        >
          <img
            src="/assets/hero-ac-service.png"
            alt="SKR AC Logo"
            className="h-10 w-10 object-cover rounded-full border border-gray-300 pointer-events-none select-none"
            draggable="false"
          />
          <span className="text-xl font-bold text-white select-none">
            SKR AC SERVICES
          </span>
        </Link>

        {/* RIGHT: Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6 pr-4 lg:pr-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative text-white font-semibold transition-colors duration-300 hover:text-gray-300 select-none group"
            >
              {item.label}
              {/* Underline animation */}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* RIGHT: Mobile Toggle */}
        <div className="lg:hidden pr-4">
          <button
            onClick={() => setOpen(!open)}
            className="text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  open
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ backgroundColor: "#0a2857" }}
      >
        <div className="flex flex-col px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="relative text-white font-semibold hover:text-gray-300 transition-colors duration-200 select-none"
            >
              {item.label}
              {/* Underline for mobile */}
              <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-white transition-all duration-300 hover:w-full"></span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
