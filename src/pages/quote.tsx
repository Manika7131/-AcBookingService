import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import ScrollToTop from "@/components/ScrollToTop";

export default function QuotePage() {
  return (
    <>
      <Navbar />
      <header className="bg-primary text-white py-12">
        <div className="container-xxl">
          <h1 className="text-3xl font-bold">Get a Free Quote</h1>
        </div>
      </header>

      <main className="py-12">
        <div className="container-xxl grid md:grid-cols-2 gap-8">
          <div className="p-6 text-white bg-secondary rounded">
            <h3 className="text-2xl font-bold">Tell us about your requirement</h3>
            <p className="text-muted mt-3">We will call you back with a competitive quote.</p>
          </div>
       
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
