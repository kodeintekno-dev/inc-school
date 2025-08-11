// src/components/Navbar.tsx
"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent fixed w-full z-50 top-0 left-0 font-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              className="h-15  w-auto"
              src="./logo_cilembu.svg"
              alt="Logo"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a
              href="#beranda"
              className="text-white font-semibold hover:text-yellow-400"
            >
              Beranda
            </a>
            <a
              href="#tentang"
              className="text-white font-semibold hover:text-yellow-400"
            >
              Tentang
            </a>
            <a
              href="#program"
              className="text-white font-semibold hover:text-yellow-400"
            >
              Program
            </a>
            <a
              href="#fasilitas"
              className="text-white font-semibold hover:text-yellow-400"
            >
              Fasilitas
            </a>
            <a
              href="#aktivitas"
              className="text-white font-semibold hover:text-yellow-400"
            >
              Aktivitas
            </a>
            <a
              href="#daftar"
              className="border border-white rounded px-10 py-2 text-white font-semibold hover:bg-white hover:text-black transition"
            >
              Daftar
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                /* Close icon */
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mx-5 bg-[#572C2D] bg-opacity-50 rounded-xl mt-6" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            <a
              href="#beranda"
              className="block text-white font-semibold py-2 hover:text-yellow-400"
              onClick={() => setIsOpen(false)}
            >
              Beranda
            </a>
            <a
              href="#tentang"
              className="block text-white font-semibold py-2 hover:text-yellow-400"
              onClick={() => setIsOpen(false)}
            >
              Tentang
            </a>
            <a
              href="#program"
              className="block text-white font-semibold py-2 hover:text-yellow-400"
              onClick={() => setIsOpen(false)}
            >
              Program
            </a>
            <a
              href="#fasilitas"
              className="block text-white font-semibold py-2 hover:text-yellow-400"
              onClick={() => setIsOpen(false)}
            >
              Fasilitas
            </a>
            <a
              href="#aktivitas"
              className="block text-white font-semibold py-2 hover:text-yellow-400"
              onClick={() => setIsOpen(false)}
            >
              Aktivitas
            </a>
            <a
              href="#daftar"
              className="block border border-white rounded px-10 py-2 text-white font-semibold mx-auto w-max hover:bg-white hover:text-black transition"
              onClick={() => setIsOpen(false)}
            >
              Daftar
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
