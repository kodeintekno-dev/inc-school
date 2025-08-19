"use client";
import { useState } from "react";
import Image from "next/image";

const programs = [
  {
    id: 1,
    img: "/images/program1.jpg",
    title: "Program Pertama",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "#",
  },
  {
    id: 2,
    img: "/images/program2.jpg",
    title: "Program Kedua",
    desc: "Deskripsi program kedua yang sangat menarik dan bermanfaat.",
    link: "#",
  },
  {
    id: 3,
    img: "/images/program3.jpg",
    title: "Program Ketiga",
    desc: "Deskripsi program ketiga yang fokus pada pengembangan keterampilan.",
    link: "#",
  },
  {
    id: 4,
    img: "/images/program4.jpg",
    title: "Program Keempat",
    desc: "Deskripsi program Keempat yang fokus pada pengembangan keterampilan.",
    link: "#",
  },
];

export default function Program() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % programs.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + programs.length) % programs.length);
  };

  return (
    <section
      className="font-['Be_Vietnam_Pro'] bg-[#332020] text-white px-4 md:px-12 lg:px-90"
      style={{ paddingTop: "242px", paddingBottom: "242px" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Title & Description */}
        <div className="mb-15 flex flex-col gap-1 items-left">
          <h2 className="text-[#D9C47C] text-2xl md:text-3xl font-bold ">
            Program <br /> Kami
          </h2>
          <p className="mt-2 text-sm md:text-base max-w-xl">
            Ma’had Daar Al-Shuffah Cilembu menyelenggarakan beragam program
            pembelajaran dan pembinaan yang dirancang untuk meningkatkan
            pemahaman dan kedisiplinan santri.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center">
          {/* Desktop Carousel */}
          <div className="hidden md:flex w-full items-center">
            {/* Prev Button */}
            <div className="flex flex-col-reverse items-center gap-5 mr-25">
            <button
              onClick={prevSlide}
              className="cursor-pointer p-3 border border-white bg-[#332020] bg-opacity-80 hover:bg-[#D9C47C] hover:text-black transition-all duration-300"
              style={{ top: "50%", transform: "translateY(-50%)" }}
              aria-label="Previous"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="cursor-pointer p-3 border border-white bg-[#332020] bg-opacity-80 hover:bg-[#D9C47C] hover:text-black transition-all duration-300"
              style={{ top: "50%", transform: "translateY(-50%)" }}
              aria-label="Next"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
            </div>
            {/* Carousel Items */}
            <div className="flex overflow-hidden">
              {programs
                .slice(currentIndex, currentIndex + 3)
                .concat(
                  currentIndex + 3 > programs.length
                    ? programs.slice(0, (currentIndex + 3) % programs.length)
                    : []
                )
                .map((program) => (
                  <div
                    key={program.id}
                    className="relative group overflow-hidden shadow-lg bg-[#221313] h-120 min-w-0"
                  >
                    <Image
                      src={program.img}
                      alt={program.title}
                      width={500}
                      height={400}
                      className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
                      <h3 className="text-lg font-bold">{program.title}</h3>
                      <p className="text-sm mt-2">{program.desc}</p>
                      <a
                        href={program.link}
                        className="mt-3 inline-flex items-center text-sm font-semibold border-b border-white hover:translate-x-1 transition-transform"
                      >
                        {program.title}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-4 h-4 ml-2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25L21 12l-3.75 3.75M21 12H3"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
            </div>
  
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden relative w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {programs.map((program) => (
                <div
                  key={program.id}
                  className="min-w-full relative group overflow-hidden rounded-lg bg-[#221313]"
                >
                  <Image
                    src={program.img}
                    alt={program.title}
                    width={500}
                    height={400}
                    className="w-full h-140 object-cover"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-opacity-30 opacity-100 p-4 flex flex-col justify-end">
                    <h3 className="text-lg font-bold">{program.title}</h3>
                    <p className="text-sm mt-2">{program.desc}</p>
                    <a
                      href={program.link}
                      className="mt-3 inline-flex items-center text-sm font-semibold border-b border-white"
                    >
                      {program.title}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4 ml-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
            {/* Navigation Buttons */}
            <div className="flex items-center justify-center mt-10 px-2 gap-5">
              <button
                onClick={prevSlide}
                className="p-3 border border-white bg-[#332020] bg-opacity-80 hover:bg-[#D9C47C] hover:text-black transition-all duration-300"
              >
                {/* Left Arrow SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="p-3 border border-white bg-[#332020] bg-opacity-80 hover:bg-[#D9C47C] hover:text-black transition-all duration-300"
              >
                {/* Right Arrow SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
