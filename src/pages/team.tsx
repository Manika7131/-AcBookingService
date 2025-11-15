import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const team = [
  { name: "Ramesh", role: "Senior Technician", img: "/assets/team/member1.png" },
  { name: "Priya", role: "Service Manager", img: "/assets/team/member2.png" }
];

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <header className="bg-primary text-white py-12">
        <div className="container-xxl">
          <h1 className="text-3xl font-bold">Our Team</h1>
        </div>
      </header>

      <main className="py-12">
        <div className="container-xxl grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((m) => (
            <div key={m.name} className="bg-white p-6 rounded shadow text-center">
              <img src={m.img} alt={m.name} className="mx-auto h-28 w-28 object-cover rounded-full mb-4" />
              <h4 className="font-semibold">{m.name}</h4>
              <p className="text-sm text-muted">{m.role}</p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
