import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero / Header Section */}
      <header className="bg-[#59677c] text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 select-none">
            About SKR AC Booking
          </h1>
          <p className="text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto lg:mx-0">
            Providing professional AC installation, repair, and maintenance services across residential and commercial clients with reliability, efficiency, and trust.
          </p>
        </div>
      </header>

      {/* About / Company Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
            <p className="text-gray-700 mb-4">
              SKR AC Booking has been serving customers with top-quality AC services since 2015. Our mission is to deliver reliable, affordable, and fast AC solutions with 100% customer satisfaction.
            </p>
            <p className="text-gray-700">
              We specialize in installation, repair, maintenance, and AC shifting services for both residential and commercial clients.
            </p>
          </div>
          <div>
            <img
              src="/assets/about-ac-service.jpg"
              alt="AC Service"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </section>


      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center lg:text-left grid lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="font-bold text-xl mb-2">Certified Technicians</h3>
            <p className="text-gray-600">Trained and certified professionals handling all AC services.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="font-bold text-xl mb-2">Genuine Spare Parts</h3>
            <p className="text-gray-600">We use only original parts to ensure long-lasting repairs and installations.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="font-bold text-xl mb-2">Transparent Pricing</h3>
            <p className="text-gray-600">No hidden charges — honest quotes for every service.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
<section className="py-16 bg-[#0a2857] text-white text-center">
  <h2 className="text-3xl font-bold mb-4">Ready to Book Your AC Service?</h2>
  <p className="mb-8">Fast, reliable, and professional AC services at your doorstep.</p>
  <a
    href="/contact"
    className="inline-block bg-white text-[#443733] font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300"
  >
    Book Now
  </a>
</section>


      <Footer />
      <ScrollToTop />
    </>
  );
}
