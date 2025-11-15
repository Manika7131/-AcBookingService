"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <>
      <Navbar />

      {/* Header */}
      <header
        className="text-white text-center py-12 w-full"
        style={{ backgroundColor: "#59677c" }}
      >
        <h1 className="text-3xl font-bold">Terms and Conditions</h1>
        <p className="text-gray-200 mt-2 text-sm">
          Please read these terms carefully before using our services
        </p>
      </header>

      {/* Terms Content */}
      <main className="bg-gray-50 py-16 w-full">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200 leading-relaxed">
            <h2 className="text-2xl font-bold mb-6 text-[#0a2857]">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600 mb-8">
              By accessing and using the SKR AC Booking website and services, you agree
              to comply with and be bound by these Terms and Conditions. If you do not
              agree with any part of these terms, you must not use our website or services.
            </p>

            <h2 className="text-2xl font-bold mb-6 text-[#0a2857]">
              2. Services Overview
            </h2>
            <p className="text-gray-600 mb-8">
              SKR AC Booking provides air conditioning installation, repair, gas refilling,
              and maintenance services through verified and trained professionals. Our goal
              is to ensure reliable, safe, and efficient service delivery to all customers.
            </p>

            <h2 className="text-2xl font-bold mb-6 text-[#0a2857]">
              3. Booking and Payments
            </h2>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>All bookings must be made through our website or official contact channels.</li>
              <li>Payment can be made through UPI, debit/credit card, online transfer, or cash.</li>
              <li>Full payment is required upon service completion unless agreed otherwise.</li>
              <li>Digital invoices or receipts will be provided for online payments.</li>
            </ul>

            <h2 className="text-2xl font-bold mb-6 text-[#0a2857]">
              4. Cancellation and Refund Policy
            </h2>
            <p className="text-gray-600 mb-8">
              Customers can cancel or reschedule their bookings at least 2 hours before
              the scheduled appointment time. Refunds will be processed if the service has
              not yet been delivered. Partial refunds or reschedules may apply in cases
              of technician assignment or material preparation.
            </p>

            <h2 className="text-2xl font-bold mb-6 text-[#0a2857]">
              5. Service Warranty
            </h2>
            <p className="text-gray-600 mb-8">
              We provide a 30-day warranty for all AC repair and maintenance services.
              The warranty covers workmanship issues only and does not include external
              damages, misuse, or natural wear and tear. Replacement parts may carry
              separate manufacturer warranties.
            </p>

            <h2 className="text-2xl font-bold mb-6 text-[#0a2857]">
              6. User Responsibilities
            </h2>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Provide accurate information during booking and communication.</li>
              <li>Ensure technician safety and access to the work area.</li>
              <li>Do not misuse or duplicate any service-related content or data.</li>
              <li>Comply with all safety instructions given by our technicians.</li>
            </ul>

            <h2 className="text-2xl font-bold mb-6 text-[#0a2857]">
              7. Limitation of Liability
            </h2>
            <p className="text-gray-600 mb-8">
              SKR AC Booking shall not be held responsible for indirect, incidental, or
              consequential damages resulting from service delays, third-party errors,
              or unforeseen circumstances beyond our control.
            </p>

            <h2 className="text-2xl font-bold mb-6 text-[#0a2857]">
              8. Privacy and Data Protection
            </h2>
            <p className="text-gray-600 mb-8">
              We respect your privacy. All customer data is collected and processed as
              per our{" "}
              <a href="/privacy" className="text-[#0a2857] underline">
                Privacy Policy
              </a>
              . Your personal details will never be shared or sold to any third party.
            </p>

            <h2 className="text-2xl font-bold mb-6 text-[#0a2857]">
              9. Modifications to Terms
            </h2>
            <p className="text-gray-600 mb-8">
              SKR AC Booking reserves the right to update these Terms and Conditions
              at any time without prior notice. Users are encouraged to review this
              page regularly for any changes.
            </p>

            <h2 className="text-2xl font-bold mb-6 text-[#0a2857]">
              10. Contact Information
            </h2>
            <p className="text-gray-600">
              For any questions or concerns about these Terms and Conditions, please
              contact us at:
            </p>
            <p className="text-gray-600 mt-2">
              📧 <strong>Email:</strong>{" "}
              <a
                href="mailto:support@skracbooking.com"
                className="text-[#0a2857] underline"
              >
                support@skracbooking.com
              </a>
              <br />
              📞 <strong>Phone:</strong> +91 88384 85805
            </p>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <section
        className="text-white py-12 text-center w-full"
        style={{ backgroundColor: "#0a2857" }}
      >
        <h2 className="text-2xl font-bold mb-3">Thank You for Choosing SKR AC Booking</h2>
        <p className="text-gray-200 mb-6">
          Your trust and satisfaction are our top priorities.
        </p>
        <a
          href="/contact"
          className="bg-white text-[#0a2857] font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition"
        >
          Contact Support →
        </a>
      </section>

      <Footer />
    </>
  );
}
