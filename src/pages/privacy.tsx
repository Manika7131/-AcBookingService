"use client";
import { motion, MotionProps } from "framer-motion";
import { HTMLAttributes } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


// ✅ Typed wrapper for motion.section
type MotionSectionProps = HTMLAttributes<HTMLElement> & MotionProps;
const MotionSection = (props: MotionSectionProps) => <motion.section {...props} />;

export default function PrivacyPage() {
  const sections = [
    {
      title: "1. Introduction",
      text: `At SKR AC Booking, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or use our services.`,
    },
    {
      title: "2. Information We Collect",
      text: `We may collect the following types of information:
• Personal details such as name, email address, phone number, and address (when booking a service).
• Technical details like IP address, browser type, and device information.
• Any additional data you voluntarily provide through forms or feedback.`,
    },
    {
      title: "3. How We Use Your Information",
      text: `We use your information to:
• Confirm and manage your AC service bookings.
• Communicate important updates or offers.
• Improve our website and customer experience.
• Respond to your inquiries and support requests.`,
    },
    {
      title: "4. Data Protection & Security",
      text: `We implement strict security measures to protect your personal information from unauthorized access, misuse, or disclosure. Your data is stored securely and accessed only by authorized personnel.`,
    },
    {
      title: "5. Sharing Your Information",
      text: `We do not sell or rent your personal data. We may share limited information with trusted service partners or technicians solely to complete your requested services.`,
    },
    {
      title: "6. Cookies",
      text: `Our website uses cookies to enhance your browsing experience and analyze website traffic. You can disable cookies anytime through your browser settings without affecting basic site functionality.`,
    },
    {
      title: "7. Data Retention",
      text: `We retain your personal data only as long as necessary to provide services or comply with legal obligations. Once it’s no longer required, your information is securely deleted.`,
    },
    {
      title: "8. Your Rights",
      text: `You have the right to access, modify, or delete your personal information. To exercise these rights, please contact us at support@skracbooking.com.`,
    },
    {
      title: "9. Policy Updates",
      text: `We may update this Privacy Policy periodically. Any changes will be posted on this page with a revised “Last Updated” date.`,
    },
    {
      title: "10. Contact Us",
      text: `If you have questions about this Privacy Policy or how we handle your data, please contact us:
📩 Email: support@skracbooking.com
📞 Phone: +91 88384 85805`,
    },
  ];

  return (
    <>
      <Navbar />

      {/* Header */}
      <header
        className="text-white text-center py-12"
        style={{ backgroundColor: "#59677c" }}
      >
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
        <p className="text-gray-200 mt-2 text-sm">Last updated: October 2025</p>
      </header>

      {/* Main - Full Width */}
      <main className="bg-gray-50 py-16">
        {sections.map((section, i) => (
          <MotionSection
            key={i}
            className="px-6 md:px-16 lg:px-32 py-8 border-b border-gray-200 bg-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-[#0a2857] mb-3">
              {section.title}
            </h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {section.text}
            </p>
          </MotionSection>
        ))}
      </main>

      <Footer />
    </>
  );
}