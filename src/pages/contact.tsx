// paste this file in place of your current ContactPage file (you already have SweetAlert2 installed)
"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { motion } from "framer-motion";
import { useState } from "react";
import Swal from "sweetalert2";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const services = ["Installation", "Repair", "AMC", "Emergency Service"];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // --- UPDATED handleSubmit: sends to backend, then opens WhatsApp web with prefilled message
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.service) {
      Swal.fire({
        icon: "warning",
        title: "Missing Fields",
        text: "Please fill out all required fields before submitting.",
        confirmButtonColor: "#0a2857",
      });
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // successful saved in backend
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Your request has been submitted successfully.",
          confirmButtonColor: "#0a2857",
        });

        // build the WhatsApp message
        const whatsappNumber = "919629188489"; // country code 91 + 9629188489
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

        // open WhatsApp Web / App in new tab/window with prefilled message
        const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;
        window.open(waUrl, "_blank");

        // reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          date: "",
          message: "",
        });
      } else {
        const err = await response.text();
        Swal.fire({
          icon: "error",
          title: "Submission Failed",
          text: err || "Something went wrong. Please try again later.",
          confirmButtonColor: "#0a2857",
        });
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      Swal.fire({
        icon: "error",
        title: "Server Unreachable",
        text: "Please ensure your backend is running on port 8080.",
        confirmButtonColor: "#0a2857",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <header className="text-white py-12 text-center" style={{ backgroundColor: "#59677c" }}>
        <h1 className="text-3xl font-bold select-none">Contact Us</h1>
        <p className="text-gray-200 mt-2 text-sm">Reach out for AC installation, repair, or service bookings.</p>
      </header>

      <main className="py-12 bg-gray-50">
        <div className="container-xxl grid lg:grid-cols-2 gap-10 px-6 sm:px-10">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold">Get in Touch</h2>
            <p className="text-gray-700">Call or WhatsApp: <a href="tel:+918838485805" className="text-indigo-600 font-semibold hover:underline">+91 88384 85805</a></p>
            <a href="https://wa.me/918838485805" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-3 rounded-md shadow-md transition transform hover:scale-105">💬 Chat on WhatsApp</a>
            <p className="text-gray-600 leading-relaxed">Prefer sending a message? Fill out the form below — we’ll get back to you promptly.</p>
          </motion.div>

          <motion.form initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg flex flex-col gap-4">
            <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition" />
            <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition" />
            <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition" />
            <select name="service" value={formData.service} onChange={handleChange} required className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition">
              <option value="">Select Service</option>
              {services.map((srv) => (<option key={srv} value={srv}>{srv}</option>))}
            </select>
            <input type="date" name="date" value={formData.date} onChange={handleChange} className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition" />
            <textarea name="message" placeholder="Additional Details" value={formData.message} onChange={handleChange} rows={4} className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition" />
            <button type="submit" disabled={loading} className={`${loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#0a2857] hover:bg-[#59677c]"} text-white font-semibold px-5 py-3 rounded-md shadow-md transition transform hover:scale-105`}>{loading ? "Submitting..." : "Submit Request"}</button>
          </motion.form>
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
