"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Navbar from "../components/Navbar";

export default function FeedbackPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase
      .from("feedback")
      .insert([{ name, message }]);

    setLoading(false);

    if (!error) {
      setSuccess(true);
      setName("");
      setMessage("");
      setTimeout(() => setSuccess(false), 3000); // hilang setelah 3 detik
    } else {
      alert("Gagal mengirim feedback: " + error.message);
    }
  };

  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <Navbar />

      <section className="mt-[80px] max-w-5xl mx-auto px-6 py-12 w-full">
        <h2 className="text-3xl font-bold mb-6 text-[#00bfa5]">Kirim Masukan</h2>

        {success && (
          <p className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
            ✅ Terima kasih atas masukan Anda!
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow-md space-y-4 border border-[#00bfa5]"
        >
          <input
            type="text"
            placeholder="Nama Anda"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00bfa5] focus:outline-none"
          />
          <textarea
            placeholder="Pesan Anda"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#00bfa5] focus:outline-none"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-[#00bfa5] text-white px-6 py-2 rounded-lg hover:bg-[#009e8a] transition-colors disabled:opacity-50"
          >
            {loading ? "Mengirim..." : "Kirim"}
          </button>
        </form>
      </section>

      <footer className="bg-black text-white text-center py-6 mt-auto">
        <p>&copy; {new Date().getFullYear()} Dimsum Hunt. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-3">
          <a href="#" className="hover:text-[#00bfa5] transition">Instagram</a>
          <a href="#" className="hover:text-[#00bfa5] transition">Facebook</a>
          <a href="#" className="hover:text-[#00bfa5] transition">WhatsApp</a>
        </div>
      </footer>
    </div>
  );
}
