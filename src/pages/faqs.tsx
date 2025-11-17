"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function FAQPage() {
  return (
    <>
      <Navbar />

      {/* Header */}
      <header
        className="text-white text-center py-12 w-full"
        style={{ backgroundColor: "#0a2857" }}
      >
        <h1 className="text-3xl font-bold">Frequently Asked Questions (FAQ)</h1>
        <p className="text-gray-200 mt-2 text-sm">
          Common queries about our AC repair, installation, and maintenance services
        </p>
      </header>

      {/* FAQ Content */}
      <main className="bg-gray-50 py-16 w-full">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200 leading-relaxed">
            <h2 className="text-2xl font-bold mb-6 text-[#0a2857]">General Questions</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  1. What services does SKR AC Booking provide?
                </h3>
                <p className="text-gray-600">
                  We provide AC installation, repair, maintenance, gas refilling, and shifting services
                  for both residential and commercial customers. All services are handled by trained
                  professionals using genuine tools and materials.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  2. How can I book an AC service?
                </h3>
                <p className="text-gray-600">
                  You can book directly from our website or contact our support team via phone or WhatsApp.
                  After booking, our team confirms the schedule and assigns a technician near your location.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  3. Do you offer same-day service?
                </h3>
                <p className="text-gray-600">
                  Yes, same-day service is available based on your area and technician availability.
                  Emergency services are always prioritized for faster assistance.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  4. Do your services come with a warranty?
                </h3>
                <p className="text-gray-600">
                  Yes. We offer a 30-day service warranty for all AC repair and maintenance work. 
                  If an issue reoccurs within this period, we fix it again at no additional cost.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  5. What AC brands do you service?
                </h3>
                <p className="text-gray-600">
                  We handle all major AC brands such as LG, Samsung, Voltas, Daikin, Carrier, Whirlpool,
                  Blue Star, and many others.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  6. What are your operating hours?
                </h3>
                <p className="text-gray-600">
                  Our service hours are from 8:00 AM to 8:00 PM, Monday through Sunday. 
                  Online bookings can be made 24/7 through our website.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  7. Do you offer annual maintenance contracts (AMC)?
                </h3>
                <p className="text-gray-600">
                  Yes, we provide affordable AMC plans for households, offices, and commercial properties.
                  AMC customers enjoy priority service and scheduled preventive maintenance.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  8. What payment options do you accept?
                </h3>
                <p className="text-gray-600">
                  We accept UPI, debit/credit cards, online transfers, and cash payments. 
                  All digital transactions receive an instant e-receipt for your records.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  9. How can I reach your support team?
                </h3>
                <p className="text-gray-600">
                  You can contact our support team anytime via email at{" "}
                  <a
                    href="mailto:support@skracbooking.com"
                    className="text-[#0a2857] underline"
                  >
                    support@skracbooking.com
                  </a>{" "}
                  or by phone at <strong>+91 98765 43210</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Contact CTA */}
      <section
        className="text-white py-12 text-center w-full"
        style={{ backgroundColor: "#59677c" }}
      >
        <h2 className="text-2xl font-bold mb-3">Still have questions?</h2>
        <p className="text-gray-200 mb-6">
          Our team is here to help you with all your AC service needs.
        </p>
        <a
          href="/contact"
          className="bg-white text-[#0a2857] font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition"
        >
          Contact Us →
        </a>
      </section>

      <Footer />
    </>
  );
}
