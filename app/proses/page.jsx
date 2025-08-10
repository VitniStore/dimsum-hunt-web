"use client";
import Navbar from "../components/Navbar";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram } from "react-icons/fa";

export default function ProsesPage() {
  const prosesList = [
    { title: "Bahan Segar", desc: "Hanya bahan terbaik pilihan kami gunakan.", icon: "🥬" },
    { title: "Proses Higienis", desc: "Pembuatan dimsum sesuai standar kebersihan.", icon: "🧼" },
    { title: "Dimasak dengan Cinta", desc: "Setiap dimsum dibuat dengan penuh dedikasi.", icon: "❤️" },
  ];

  const fotoList = [
    "/foto1.jpg",
    "/foto2.jpg",
    "/foto3.jpg",
    "/foto4.jpg",
    "/foto5.jpg",
    "/foto6.jpg",
  ];

  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <Navbar />

      <section className="mt-[80px] max-w-6xl mx-auto px-6 py-12 flex-grow">
        {/* Judul */}
        <h2 className="text-3xl font-bold mb-8 text-center text-[#00bfa5]">
          Proses Pembuatan
        </h2>

        {/* 3 Kotak Proses */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {prosesList.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md p-6 text-center border border-[#00bfa5] hover:shadow-lg transition"
            >
              <div className="text-5xl">{p.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-[#00bfa5]">{p.title}</h3>
              <p className="text-gray-600 mt-2">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Galeri Foto */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-[#00bfa5] text-center">
            Galeri Dimsum
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {fotoList.map((src, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-lg shadow-md hover:scale-105 transform transition duration-300"
              >
                <img
                  src={src}
                  alt={`Proses ${idx + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#00695c] text-white py-10 mt-auto">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Info Kontak */}
          <div>
            <h2 className="text-xl font-bold">Dimsum Hunt</h2>
            <div className="mt-4 space-y-2">
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt /> Jl. Maulana Hasanudin, samping Sdit Yasir.
              </p>
              <p className="flex items-center gap-2">
                <FaPhoneAlt /> 085129267339
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope /> vitnistore1122@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <FaInstagram /> @dimsumhunt.vitni
              </p>
            </div>
          </div>

          {/* Menu Footer */}
          <div>
            <h2 className="text-xl font-bold">Navigasi</h2>
            <ul className="mt-4 space-y-2">
              <li><a href="/" className="hover:text-[#ffcc00] transition">Beranda</a></li>
              <li><a href="/proses" className="hover:text-[#ffcc00] transition">Proses Pembuatan</a></li>
              <li><a href="/menu" className="hover:text-[#ffcc00] transition">Menu</a></li>
              <li><a href="/kontak" className="hover:text-[#ffcc00] transition">Kontak / Order</a></li>
              <li><a href="/feedback" className="hover:text-[#ffcc00] transition">Feedback</a></li>
            </ul>
          </div>
        </div>
        <p className="text-center text-sm mt-6 text-gray-300">
          © {new Date().getFullYear()} Dimsum Hunt. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
