// src/components/Footer.tsx
"use client";

import { useState, useEffect } from "react";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShowTop(window.scrollY > 300);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="bg-[#2b1b1b] text-white font-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left: Logo + Contact */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <img src="/logo_cilembu.svg" alt="Logo" className="h-14 w-auto" />
              <div>
                <h3 className="text-yellow-300 font-semibold text-lg">
                  Ma'had Daar AL-Shuffah Cilembu
                </h3>
              </div>
            </div>

            <p className="text-gray-300 text-sm max-w-sm">
              Kontak<br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.
            </p>

            <div className="flex items-center gap-3">
              {/* Replace hrefs with real links */}
              <a aria-label="Facebook" href="#" className="p-2 rounded-full bg-[#3b2a2a] hover:bg-yellow-400 transition">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.8V12h2.8V9.8c0-2.7 1.6-4.2 4-4.2 1.2 0 2.5.2 2.5.2v2.8h-1.4c-1.4 0-1.8.9-1.8 1.8V12h3l-.5 2.9h-2.5v7A10 10 0 0022 12z" /></svg>
              </a>
              <a aria-label="Instagram" href="#" className="p-2 rounded-full bg-[#3b2a2a] hover:bg-yellow-400 transition">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5.6A4.4 4.4 0 1016.4 12 4.4 4.4 0 0012 7.6zM18.6 6.3a1.03 1.03 0 11-1.03-1.03 1.03 1.03 0 011.03 1.03z" /></svg>
              </a>
              <a aria-label="YouTube" href="#" className="p-2 rounded-full bg-[#3b2a2a] hover:bg-yellow-400 transition">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M23 7a3 3 0 00-2.2-2.2C18.9 4 12 4 12 4s-6.9 0-8.8.8A3 3 0 001 7v10a3 3 0 002.2 2.2C5.1 20 12 20 12 20s6.9 0 8.8-.8A3 3 0 0023 17V7zM9.8 15.1V8.9L15.4 12l-5.6 3.1z" /></svg>
              </a>
            </div>
          </div>

          {/* Middle: Divider on md and nav links */}
          <div className="md:border-l md:border-r md:border-[#3a2a2a] md:px-8 flex flex-col md:items-center">
            <nav className="grid grid-cols-2 md:grid-cols-1 gap-2 text-sm text-gray-200">
              <a href="#beranda" className="hover:text-yellow-400">Beranda</a>
              <a href="#tentang" className="hover:text-yellow-400">Tentang</a>
              <a href="#program" className="hover:text-yellow-400">Program</a>
              <a href="#fasilitas" className="hover:text-yellow-400">Fasilitas</a>
              <a href="#aktivitas" className="hover:text-yellow-400">Aktivitas</a>
              <a href="#daftar" className="hover:text-yellow-400">Daftar</a>
            </nav>

            <div className="mt-6 md:mt-8">
              <a href="#daftar" className="inline-block border border-white rounded px-6 py-2 text-white font-semibold hover:bg-white hover:text-black transition">
                Daftar
              </a>
            </div>
          </div>

          {/* Right: Address / small info */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-yellow-300 font-semibold mb-2">Alamat</h4>
              <p className="text-gray-300 text-sm">
                Jl. Contoh No. 123, Cilembu, Bandung<br />
                Tel: (021) 123-4567
              </p>
            </div>

            <div className="mt-6 md:mt-0">
              <p className="text-gray-400 text-xs">&copy; {new Date().getFullYear()} Ma'had Daar AL-Shuffah Cilembu. All rights reserved.</p>
            </div>
          </div>
        </div>

        {/* thin rule */}
        <div className="border-t border-[#3a2a2a] mt-8 pt-6 flex items-center justify-between">
          <p className="text-gray-500 text-xs">Designed with care — kontak untuk info lebih lanjut.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm">Terms</a>
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed right-6 bottom-6 z-50 p-3 rounded-md bg-[#5b3b3b] text-white shadow-lg transition-opacity ${showTop ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </footer>
  );
}
