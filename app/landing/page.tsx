"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 font-sans">
      {/* Bagian Kiri */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col justify-center items-start px-6 md:px-16 bg-gray-50 order-2 md:order-1 h-screen md:h-screen"
      >
        <p className="text-sm text-[#00bfa5] uppercase tracking-widest mb-3 font-semibold">
          Selamat Datang
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Dimsum Hunt
        </h1>
        <p className="mt-4 text-gray-700 text-base md:text-lg max-w-md leading-relaxed">
          Rasakan cita rasa dimsum autentik yang dibuat dengan bahan pilihan
          terbaik, diolah secara higienis, dan disajikan dengan cinta.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => router.push("/home")}
          className="mt-6 px-6 py-3 md:px-8 md:py-4 bg-black text-white rounded-full hover:bg-[#00bfa5] hover:shadow-lg transition-all duration-300 text-sm md:text-lg font-medium"
        >
          Mulai Jelajah
        </motion.button>
      </motion.div>

      {/* Bagian Kanan */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative order-1 md:order-2 h-64 md:h-screen"
      >
        <img
          src="/7.jpg"
          alt="Dimsum Hunt Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/30 to-transparent md:from-black/20"></div>
      </motion.div>
    </div>
  );
}
