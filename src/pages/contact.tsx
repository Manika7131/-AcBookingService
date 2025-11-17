"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { motion, MotionProps } from "framer-motion";
import { HTMLAttributes, FormHTMLAttributes, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format, parse } from "date-fns";

// Wrapper components
type MotionDivProps = HTMLAttributes<HTMLDivElement> & MotionProps;
const MotionDiv = (props: MotionDivProps) => <motion.div {...props} />;

type MotionFormProps = FormHTMLAttributes<HTMLFormElement> & MotionProps;
const MotionForm = (props: MotionFormProps) => <motion.form {...props} />;

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [loading, setLoading] = useState(false);
  const services = ["Installation", "Repair", "AMC", "Emergency Service"];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    if (name === "name") {
      const onlyLetters = value.replace(/[0-9]/g, "");
      setFormData({ ...formData, name: onlyLetters });
    } else if (name === "phone") {
      const onlyDigits = value.replace(/\D/g, "");
      setFormData({ ...formData, phone: onlyDigits });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // ✅ FIXED TYPE FOR onChangeRaw
  const handleDateChangeRaw = (
    event?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>
  ) => {
    if (event) {
      const input = (event.target as HTMLInputElement).value;
      setFormData((prev) => ({ ...prev, date: input }));

      if (/^\d{4}-\d{2}-\d{2}$/.test(input)) {
        const parsed = parse(input, "yyyy-MM-dd", new Date());
        if (!isNaN(parsed.getTime())) {
          setSelectedDate(parsed);
        }
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d+$/;
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

    if (
      !formData.name ||
      !formData.email ||
      !emailRegex.test(formData.email) ||
      !formData.phone ||
      !phoneRegex.test(formData.phone) ||
      !formData.service ||
      (formData.date && !dateRegex.test(formData.date))
    ) {
      alert("Please fill out all required fields with valid data.");
      return;
    }

    const whatsappNumber = "918838485805";
    const msgLines = [
      "New AC Booking Request:",
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email}`,
      `Service: ${formData.service}`,
      formData.date ? `Date: ${formData.date}` : "",
      formData.message ? `Message: ${formData.message}` : "",
    ];
    const msg = msgLines.filter(Boolean).join("\n");
    const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;

    alert("Redirecting to WhatsApp...");
    window.open(waUrl, "_blank");

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      message: "",
    });
    setSelectedDate(null);
  };

  return (
    <>
      <Navbar />
      <header
        className="text-white py-12 text-center"
        style={{ backgroundColor: "#59677c" }}
      >
        <h1 className="text-3xl font-bold select-none">Contact Us</h1>
        <p className="text-gray-200 mt-2 text-sm">
          Reach out for AC installation, repair, or service bookings.
        </p>
      </header>

      <main className="py-12 bg-gray-50">
        <div className="container-xxl grid lg:grid-cols-2 gap-10 px-6 sm:px-10">
          <MotionDiv
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-2xl font-bold">Get in Touch</h2>
            <p className="text-gray-700">
              Call or WhatsApp:{" "}
              <a
                href="tel:+918838485805"
                className="text-indigo-600 font-semibold hover:underline"
              >
                +91 88384 85805
              </a>
            </p>
            <a
              href="https://wa.me/918838485805"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-3 rounded-md shadow-md transition transform hover:scale-105"
            >
              💬 Chat on WhatsApp
            </a>
            <p className="text-gray-600 leading-relaxed">
              Prefer sending a message? Fill out the form below — we’ll get back
              to you promptly.
            </p>
          </MotionDiv>

          <MotionForm
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-lg flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              inputMode="numeric"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition [appearance:textfield]"
              style={{ MozAppearance: "textfield" }}
            />

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition"
            >
              <option value="">Select Service</option>
              {services.map((srv) => (
                <option key={srv} value={srv}>
                  {srv}
                </option>
              ))}
            </select>

            <DatePicker
              selected={selectedDate}
              onChange={(date: Date | null) => {
                setSelectedDate(date);
                setFormData({
                  ...formData,
                  date: date ? format(date, "yyyy-MM-dd") : "",
                });
              }}
              onChangeRaw={handleDateChangeRaw}
              dateFormat="yyyy-MM-dd"
              placeholderText="YYYY-MM-DD"
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-600 transition"
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
            />

            <textarea
              name="message"
              placeholder="Additional Details"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition"
            />

            <button
              type="submit"
              disabled={loading}
              className={`${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#0a2857] hover:bg-[#59677c]"
              } text-white font-semibold px-5 py-3 rounded-md shadow-md transition transform hover:scale-105`}
            >
              {loading ? "Submitting..." : "Submit Request"}
            </button>
          </MotionForm>
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}