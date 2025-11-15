// src/components/WhatsAppButton.tsx
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918838485805"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6 z-[9999]
        w-16 h-16 rounded-full
        bg-[#25D366] flex items-center justify-center
        shadow-lg hover:shadow-2xl
        transition-transform duration-300 hover:scale-110
      "
    >
      <FaWhatsapp className="text-white text-3xl pointer-events-none" />
    </a>
  );
}
