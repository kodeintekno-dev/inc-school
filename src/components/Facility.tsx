"use client";

import Image from "next/image";

export default function Facility() {
  return (
    <section
      id="facility"
      className="bg-[#332020] text-white py-12 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 grid md:grid-cols-2 items-stretch w-full h-full">
        {/* Text block (make it full height) */}
        <div className="bg-[#572C2D] p-8 flex flex-col justify-center h-full">
          <h2
            className="text-[#EDCB71] font-extrabold text-3xl sm:text-4xl mb-6 uppercase leading-tight"
          >
            SARANA PRASARANA
          </h2>
          <p className="mb-8 text-sm sm:text-base leading-relaxed">
            Ma&apos;had Daar AL-Shuffah Cilembu menyediakan berbagai sarana dan fasilitas pendukung untuk menunjang kenyamanan dan efektivitas proses pembelajaran para santri.
          </p>
          <button
            aria-label="Lebih lanjut"
            className="self-start border border-white bg-transparent text-white font-semibold px-6 py-2 rounded transition-colors duration-300 hover:bg-white hover:text-[#332020]"
          >
            lebih lanjut &rarr;
          </button>
        </div>

        {/* Image block (make it full height and scale image) */}
        <div className="overflow-hidden h-full ">
          <Image
            src="/f-sect.png" // Replace with your actual image path
            alt="Lapangan sekolah"
            width={800}
            height={450}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
