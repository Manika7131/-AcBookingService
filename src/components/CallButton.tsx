import { JSX } from "react";
import { FaPhoneAlt } from "react-icons/fa";

export default function callbutton(): JSX.Element {
  return (
    <a
      href="tel:+918838485805"
      aria-label="Call us"
      title="Call us"
      className="
        fixed bottom-6 right-6 z-[9999]
        w-16 h-16 rounded-full
        bg-blue-600 flex items-center justify-center
        shadow-lg hover:shadow-2xl
        transition-transform duration-300 hover:scale-110
      "
    >
      <FaPhoneAlt className="text-white text-2xl pointer-events-none" />
    </a>
  );
}