"use client";
import Navbar from "../components/Navbar";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram } from "react-icons/fa";
import { SiShopee, SiGrab, SiGooglestreetview } from "react-icons/si";

export default function KontakPage() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 text-black min-h-screen flex flex-col">
      <Navbar />

      <section className="mt-[90px] max-w-5xl mx-auto px-6 py-12 flex-grow">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#00bfa5] tracking-wide">
          Pesan & Hubungi Kami
        </h2>

        {/* Link Order Online */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-8 mb-16">
          {/* Shopee */}
          <a
            href="https://shopee.co.id/universal-link/now-food/shop/21744467?deep_and_deferred=1&shareChannel=copy_link"
            target="_blank"
            className="flex flex-col items-center p-8 bg-gradient-to-b from-orange-50 to-orange-100 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <SiShopee className="text-orange-500 text-6xl mb-3" />
            <span className="font-semibold text-lg">Shopee</span>
          </a>

          {/* GoFood */}
          <a
            href="https://gofood.link/a/Mu1kqgj"
            target="_blank"
            className="flex flex-col items-center p-8 bg-gradient-to-b from-red-50 to-red-100 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <SiGooglestreetview className="text-red-500 text-6xl mb-3" />
            <span className="font-semibold text-lg">GoFood</span>
          </a>

          {/* GrabFood */}
          <a
            href="https://r.grab.com/g/2-1-6-C7DBCZEJTYTWWA"
            target="_blank"
            className="flex flex-col items-center p-8 bg-gradient-to-b from-green-50 to-green-100 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <SiGrab className="text-green-600 text-6xl mb-3" />
            <span className="font-semibold text-lg">GrabFood</span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/dimsumhunt.vitni?igsh=N3Nueml4NnBrdGFo"
            target="_blank"
            className="flex flex-col items-center p-8 bg-gradient-to-b from-pink-50 to-pink-100 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <FaInstagram className="text-pink-500 text-6xl mb-3" />
            <span className="font-semibold text-lg">Instagram</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/6285129267339"
            target="_blank"
            className="flex flex-col items-center p-8 bg-gradient-to-b from-green-50 to-green-100 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <FaPhoneAlt className="text-green-500 text-6xl mb-3" />
            <span className="font-semibold text-lg">WhatsApp</span>
          </a>
        </div>

        {/* Google Maps */}
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-5 flex items-center gap-2 text-gray-800">
            <FaMapMarkerAlt className="text-[#00bfa5]" /> Lokasi Kami
          </h3>
          <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6217495379283!2d106.67720059999999!3d-6.1813538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f9fc0b2264db%3A0xd66f4abc59c1a0d9!2sVitniStore!5e0!3m2!1sid!2sid!4v1754860618680!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
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
}
