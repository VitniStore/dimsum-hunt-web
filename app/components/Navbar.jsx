"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="/dimsum-bg.jpg"
              alt="Dimsum Hunt Logo"
              className="h-10 w-10 object-cover rounded-full"
            />
            <span className="font-bold text-xl text-[#00bfa5] tracking-wide">
              DIMSUM HUNT
            </span>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-6 font-medium">
            <Link href="/" className="hover:text-[#00bfa5] transition-colors">
              Beranda
            </Link>
            <Link href="/proses" className="hover:text-[#00bfa5] transition-colors">
              Proses Pembuatan
            </Link>
            <Link href="/menu" className="hover:text-[#00bfa5] transition-colors">
              Menu
            </Link>
            <Link href="/kontak" className="hover:text-[#00bfa5] transition-colors">
              Kontak / Order
            </Link>
            <Link href="/feedback" className="hover:text-[#00bfa5] transition-colors">
              Feedback
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 py-3 space-y-3 font-medium">
          <Link href="/" className="block hover:text-[#00bfa5]" onClick={() => setIsOpen(false)}>
            Beranda
          </Link>
          <Link href="/proses" className="block hover:text-[#00bfa5]" onClick={() => setIsOpen(false)}>
            Proses Pembuatan
          </Link>
          <Link href="/menu" className="block hover:text-[#00bfa5]" onClick={() => setIsOpen(false)}>
            Menu
          </Link>
          <Link href="/kontak" className="block hover:text-[#00bfa5]" onClick={() => setIsOpen(false)}>
            Kontak / Order
          </Link>
          <Link href="/feedback" className="block hover:text-[#00bfa5]" onClick={() => setIsOpen(false)}>
            Feedback
          </Link>
        </div>
      )}
    </nav>
  );
}
