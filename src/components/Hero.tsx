"use client";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      className="relative w-full h-[80vh] sm:h-[90vh] lg:h-screen overflow-hidden select-none"
      style={{
        WebkitUserSelect: "none",
        userSelect: "none",
        WebkitTapHighlightColor: "transparent",
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <img
          src="/assets/hero-tab.png"
          alt="AC Technician"
          className="w-full h-full object-cover object-center select-none"
          draggable="false"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Centered Content */}
      <div className="relative w-full h-full flex items-center justify-center text-center px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl text-white"
        >
          {/* Heading */}
          <h1
            className="font-bold leading-tight select-none"
            style={{
              fontSize: "clamp(1.5rem, 5vw, 3.2rem)",
            }}
          >
            Professional AC Installation & Repair
          </h1>

          {/* Paragraph */}
          <p
            className="mt-3 sm:mt-5 text-white/90 mx-auto max-w-2xl select-none"
            style={{
              fontSize: "clamp(0.95rem, 2.3vw, 1.125rem)",
              lineHeight: 1.6,
            }}
          >
            SKR AC Booking delivers dependable, fast, and affordable cooling &
            heating solutions — installation, repair, AMC, and emergency
            support. Your comfort, our priority!
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
            {/* Primary Button */}
            <a
              href="/quote"
              className="inline-flex items-center justify-center text-white font-semibold rounded-md w-full sm:w-auto px-5 py-3 text-sm sm:text-base transition-shadow shadow-md select-none"
              style={{
                backgroundColor: "#0a2857",
                WebkitUserSelect: "none",
                userSelect: "none",
              }}
            >
              Book Complaints
              <FaArrowRight className="ml-2 text-sm sm:text-base pointer-events-none" />
            </a>

            {/* Secondary Button */}
            <a
              href="/services"
              className="inline-flex items-center justify-center w-full sm:w-auto px-5 py-3 rounded-md text-gray-800 font-semibold text-sm sm:text-base transition shadow-md select-none"
              style={{
                backgroundColor: "#ffffff", // Button background set to white
              }}
            >
              Our Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
