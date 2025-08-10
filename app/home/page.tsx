import React from "react";
import Navbar from "../components/Navbar";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram } from "react-icons/fa";

const TentangKami: React.FC = () => {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <Navbar />

      {/* Banner */}
      <section className="mt-[64px] relative">
        <img
          src="/banner.jpg"
          alt="Banner Dimsum Hunt"
          className="w-full h-64 md:h-80 object-cover"
        />
      </section>

      {/* Tentang Kami */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-sm font-bold text-[#ff9800] uppercase tracking-wider">
          Tentang Kami
        </h3>
        <div className="w-16 h-1 bg-[#ff9800] mt-1 mb-4"></div>
        <h1 className="text-3xl md:text-4xl font-bold text-[#00bfa5]">
          Dimsum Hunt
        </h1>
        <p className="mt-6 text-gray-700 leading-relaxed text-lg">
          <strong>Dimsum Hunt</strong> hadir sebagai destinasi kuliner yang
          memadukan cita rasa autentik dengan sentuhan modern. Kami percaya,
          setiap sajian bukan sekadar makanan, tetapi sebuah pengalaman yang
          menghidupkan kenangan dan menciptakan kebahagiaan.  
          <br /><br />
          Dengan bahan-bahan segar pilihan dan proses pembuatan yang
          mengutamakan kebersihan serta kualitas, setiap dimsum yang kami
          sajikan dibuat dengan penuh ketelitian dan dedikasi. Rasakan harmoni
          antara kelembutan tekstur, kelezatan rasa, dan aroma yang menggoda
          dalam setiap gigitan.  
          <br /><br />
          Bersama Dimsum Hunt, kami mengajak Anda untuk menikmati
          perjalanan rasa yang tak terlupakan — dari dapur kami, langsung ke
          hati Anda.
        </p>
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
    <li><a href="/feedback" className="hover:text-[#ffcc00] transition">Feedback</a></li>
    <li><a href="/kontak" className="hover:text-[#ffcc00] transition">Kontak / Order</a></li>
  </ul>
</div>

        </div>
        <p className="text-center text-sm mt-6 text-gray-300">
          © {new Date().getFullYear()} Dimsum Hunt. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default TentangKami;
