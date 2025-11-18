"use client";
import Link from "next/link";

// Social PNG icons
const socialIcons = [
  { src: "/icons/facebook.png", alt: "Facebook", href: "#" },
  { src: "/icons/twitter.png", alt: "Twitter", href: "#" },
  { src: "/icons/instagram.png", alt: "Instagram", href: "#" },
];

// Contact PNG icons
const contactIcons = [
  { src: "/icons/call.png", alt: "Call", value: "+91 88384 85805" },
  { src: "/icons/mail.png", alt: "Mail", value: "support@skracservices.com" },
  { src: "/icons/clock.png", alt: "Hours", value: "Mon - Sat: 9am - 8pm" },
];

// Quick Links
const quickLinks = [
  { label: "Services", href: "/services" },

  { label: "Contact", href: "/contact" },
  { label: "FAQs", href: "/faqs" },
];

export default function Footer() {
  return (
    <footer className="bg-[#59677c] text-gray-100 select-none w-full">
      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-10">
        
        {/* Company Info */}
        <div className="col-span-1 md:col-span-1">
          <h4 className="text-2xl font-bold mb-3 text-white">SKR AC SERVICES</h4>
          <p className="text-sm leading-relaxed text-white/80">
            Reliable AC installation, repairs & AMC services across residential and
            commercial areas. Fast, trusted, and professional solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div className="col-span-1 md:col-span-1">
          <h5 className="font-semibold mb-3 text-white">Quick Links</h5>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="hover:text-[#0a2857] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="col-span-1 md:col-span-1">
          <h5 className="font-semibold mb-3 text-white">Contact</h5>
          <ul className="space-y-3 text-sm">
            {contactIcons.map((contact) => (
              <li key={contact.alt} className="flex items-center gap-2">
                <img
                  src={contact.src}
                  alt={contact.alt}
                  className="w-5 h-5 object-contain"
                />
                <span>{contact.value}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Map + Social Icons */}
        <div className="col-span-1 md:col-span-2 flex flex-col md:flex-row md:gap-6">
          
          {/* Map */}
          <div className="flex-1 mb-6 md:mb-0">
            <h5 className="font-semibold mb-3 text-white">Location</h5>
            <div className="w-full h-48 md:h-40 rounded-lg overflow-hidden border border-white/30 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15544.991872442295!2d80.1837168633019!3d13.083464954895904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52654819c5bd77%3A0x3bf7bfa0311be116!2sSKR%20REFRIGERATION!5e0!3m2!1sen!2sin!4v1761202621316!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, outline: "none" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SKR REFRIGERATION Location"
                className="focus:outline-none"
              ></iframe>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex-1">
            <h5 className="font-semibold mb-3 text-white">Follow Us</h5>
            <div className="grid grid-cols-3 gap-4">
              {socialIcons.map((icon) => (
                <a
                  key={icon.alt}
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 bg-[#0a2857] rounded-lg shadow hover:bg-[#59677c] transition-transform hover:scale-110"
                >
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    className="w-6 h-6 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/30 bg-[#0a2857]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 py-4 flex flex-col sm:flex-row justify-between items-center text-xs text-white gap-3 text-center">
          <p>© {new Date().getFullYear()} SKR AC SERVICES  All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/terms" className="hover:text-[#59677c] transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-[#59677c] transition-colors">Privacy & Policy</Link>
           
          </div>
        </div>
      </div>
    </footer>
  );
}
