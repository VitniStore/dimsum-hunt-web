"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaTimes } from "react-icons/fa";

export default function MenuPage() {
  const [selectedImg, setSelectedImg] = useState(null);

  const menuList = [
    { name: "Dimsum BBQ", img: "/menu-1.jpg" },
    { name: "Dimsum Mentai", img: "/menu-2.jpg" },
    { name: "Dimsum Menu BBQ", img: "/menu-3.jpg" },
    { name: "Dimsum Menu Mentai", img: "/menu-4.jpg" },
    { name: "Paket Nongkrong", img: "/menu-5.jpg" },
    { name: "Paket Happy Birthday", img: "/menu-6.jpg" },
  ];

  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <Navbar />

      <section className="mt-[80px] max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8 text-[#00bfa5] text-center">
          Menu Kami
        </h2>

        {/* Grid Card Menu */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {menuList.map((menu, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer"
              onClick={() => setSelectedImg(menu.img)}
            >
              <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
                <img
                  src={menu.img}
                  alt={menu.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#00bfa5]">{menu.name}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Lezat & bergizi, cocok untuk semua suasana
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal Image Preview */}
      {selectedImg && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button
            className="absolute top-6 right-6 text-white text-3xl"
            onClick={() => setSelectedImg(null)}
          >
            <FaTimes />
          </button>
          <img
            src={selectedImg}
            alt="Preview"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg object-contain"
          />
        </div>
      )}

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
