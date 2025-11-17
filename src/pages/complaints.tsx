"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



interface Complaint {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  created_at?: string; // PHP backend uses created_at
}

export default function ComplaintsPage() {
  const [complaints, setComplaints] = useState<Complaint[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        // ✅ Replace with your actual domain
        const res = await fetch("https://localhost:8080/api/contacts/all.php");

        if (!res.ok) throw new Error("Failed to fetch complaints");

        const data = await res.json();
        setComplaints(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchComplaints();
  }, []);

  return (
    <>
      <Navbar />

      <main className="min-h-[85vh] bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-3xl p-8">
          <h1 className="text-3xl font-bold text-[#0a2857] text-center mb-8">
            Registered Complaints
          </h1>

          {loading && (
            <p className="text-center text-gray-500 text-lg">Loading...</p>
          )}

          {error && (
            <p className="text-center text-red-500 font-semibold">{error}</p>
          )}

          {!loading && !error && complaints.length === 0 && (
            <p className="text-center text-gray-600">
              No complaints found in the database.
            </p>
          )}

          {!loading && complaints.length > 0 && (
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-[#0a2857] text-white">
                    <th className="px-4 py-3 text-left">#</th>
                    <th className="px-4 py-3 text-left">Name</th>
                    <th className="px-4 py-3 text-left">Email</th>
                    <th className="px-4 py-3 text-left">Phone</th>
                    <th className="px-4 py-3 text-left">Message</th>
                    <th className="px-4 py-3 text-left">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {complaints.map((c, index) => (
                    <tr
                      key={c.id}
                      className="border-b hover:bg-gray-100 transition"
                    >
                      <td className="px-4 py-3">{index + 1}</td>
                      <td className="px-4 py-3 font-medium text-gray-800">
                        {c.name}
                      </td>
                      <td className="px-4 py-3 text-gray-700">{c.email}</td>
                      <td className="px-4 py-3 text-gray-700">{c.phone}</td>
                      <td className="px-4 py-3 text-gray-700">{c.message}</td>
                      <td className="px-4 py-3 text-gray-600">
                        {c.created_at
                          ? new Date(c.created_at).toLocaleString()
                          : "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
