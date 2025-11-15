"use client";

import Image from "next/image";

const items = [
  {
    name: "Service",
    text: "Quick and professional — fixed my AC the same day.",
    img: "/assets/team/member1.jpg",
  },
  {
    name: "Gas Filling",
    text: "Affordable AMC plan and friendly technicians.",
    img: "/assets/team/member2.jpg",
  },
  {
    name: "Maintenance",
    text: "Highly recommended — reliable service.",
    img: "/assets/team/member3.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">
          Our Recent Works
        </h3>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.name}
              className="bg-white rounded-2xl shadow-md overflow-hidden text-center hover:shadow-lg transition-all duration-500"
            >
              <div className="relative w-full h-56 overflow-hidden group">
                <Image
                  src={it.img}
                  alt={it.name}
                  fill
                  className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="p-6">
                <p className="text-gray-600 text-sm md:text-base italic mb-3 leading-relaxed">
                  “{it.text}”
                </p>
                <h5 className="font-semibold text-gray-800 text-lg">
                  {it.name}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
