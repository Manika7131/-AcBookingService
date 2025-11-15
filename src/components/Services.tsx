"use client";

const services = [
  { title: "AC Installation", icon: "/assets/team/member3.jpg" },
  { title: "AC Repair", icon: "/assets/team/member1.jpg" },
  { title: "Annual Maintenance", icon: "/assets/team/member4.jpg" },
  { title: "Gas Refill", icon: "/assets/team/member2.jpg" },
  { title: "Emergency Support", icon: "/assets/team/member5.png" },
  { title: "Duct Cleaning", icon: "/assets/team/member6.jpg" }, // Added sixth service
];

export default function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold mb-10 text-center text-gray-800">
          Our Services
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => {
            // Center the entire content vertically for these two
            const centerContent =
              s.title === "Gas Refill" || s.title === "Emergency Support";

            return (
              <div
                key={s.title}
                className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-500 flex flex-col ${
                  centerContent ? "justify-center" : ""
                }`}
              >
                {/* Image Section */}
                <div className="relative w-full h-48 overflow-hidden group">
                  <img
                    src={s.icon}
                    alt={s.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                </div>

                {/* Text Content */}
                <div
                  className={`p-6 text-center ${
                    centerContent ? "flex flex-col justify-center" : ""
                  }`}
                >
                  <h4 className="font-semibold text-gray-800 text-lg">
                    {s.title}
                  </h4>
                  <p className="text-sm text-gray-600 mt-2">
                    Expert service with warranty and quality parts.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}