export default function About() {
  return (
    <section className="py-12 bg-lightbg">
      <div className="container-xxl grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">Welcome to SKR AC Booking</h2>
          <p className="text-muted mb-4">We specialize in residential and commercial AC services: installation, service, gas refill, and annual maintenance contracts (AMC). Our certified technicians ensure quick and reliable repairs.</p>
          <ul className="space-y-2">
            <li>✓ Certified technicians</li>
            <li>✓ Genuine spare parts</li>
            <li>✓ Affordable AMC packages</li>
          </ul>
        </div>
        <div className="rounded overflow-hidden">
          <img src="/assets/about-tab.jpg" alt="About SKR" className="w-full h-64 object-cover rounded" />
        </div>
      </div>
    </section>
  );
}
