"use client";
import Image from "next/image";
import { useState } from "react";

type Activity = {
  id: number;
  title: string;
  desc: string;
  img: string;
  cta?: string;
};

const activities: Activity[] = [
  {
    id: 1,
    title: "Halaqoh pagi dan malam",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
    img: "/images/aktivitas-1.jpg",
    cta: "Lebih lanjut",
  },
  {
    id: 2,
    title: "Kelas Kajian",
    desc:
      "Kegiatan kajian rutin untuk memperdalam pemahaman dengan suasana kelas yang interaktif.",
    img: "/images/aktivitas-2.jpg",
    cta: "Lebih lanjut",
  },
  {
    id: 3,
    title: "Mentoring Santri",
    desc:
      "Pendampingan personal untuk membantu perkembangan karakter dan disiplin santri.",
    img: "/images/aktivitas-3.jpg",
    cta: "Lebih lanjut",
  },
];

// Small arrow button used in both states
function ArrowSquare({
  direction = "up",
  onClick,
  className = "",
  label = "toggle",
}: {
  direction?: "up" | "down";
  onClick: () => void;
  className?: string;
  label?: string;
}) {
  const rotation = direction === "down" ? "rotate-0" : "rotate-180";
  return (
    <button
      aria-label={label}
      aria-expanded={direction === "up" ? false : true}
      onClick={onClick}
      className={`inline-flex items-center justify-center w-8 h-8 bg-[#E9BE5B] text-[#2A1A1A] rounded-sm shadow ${className}`}
    >
      {/* Chevron in a square */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        className={`w-4 h-4 transition-transform duration-300 ${rotation}`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
      </svg>
    </button>
  );
}

    function ActivityCard({
    data,
    defaultOpen = false,
    }: {
    data: Activity;
    defaultOpen?: boolean;
    }) {
    const [open, setOpen] = useState<boolean>(defaultOpen);

    return (
        <div className="w-full md:basis-1/3 md:max-w-[420px] flex-shrink-0">
        <div className="relative rounded-xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.25)] bg-[#2B1A1A]">
            {/* CLOSED STATE (image with bottom bar + arrow) */}
            <div
            className={`relative transition-transform duration-300 ${
                open ? "pointer-events-none opacity-0  inset-0" : "opacity-100"
            }`}
            >
            <div className="relative">
                {/* portrait-ish ratio to match your design */}
                <div className="w-full aspect-[3/4]">
                <Image
                    src={data.img}
                    alt={data.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                    width={800}
            height={450}
                />
                </div>

                {/* Bottom bar */}
                <div className="absolute bottom-0 left-0 w-full h-8 bg-[#6B3B3A]"></div>

                {/* Arrow (bottom-left) */}
                <ArrowSquare
                direction="up"
                onClick={() => setOpen(true)}
                className="absolute bottom-1 left-3"
                label="Buka deskripsi"
                />
            </div>
            </div>

            {/* OPEN STATE (panel with patterned header + content + arrow near top-left) */}
            <div
            className={`transition-all absolute duration-600 ${
                open ? "opacity-100 transition-transform -translate-y-60 " : "opacity-0 pointer-events-none absolute"
            }`}
            >
            {/* Patterned header */}
            <div
                className="w-full"
                style={{
                // simple subtle pattern purely via CSS (no asset)
                background:
                    "repeating-linear-gradient(45deg, rgba(255,255,255,0.2) 0 4px, rgba(255,255,255,0.1) 4px 8px)",
                }}
            />

            <div className="relative bg-[#4B2626] px-6 pb-8 pt-8">
                {/* Arrow (near top-left) */}
                <ArrowSquare
                direction="down"
                onClick={() => setOpen(false)}
                className="absolute -top-4 left-6"
                label="Tutup deskripsi"
                />

                <h3 className="text-white text-xl md:text-2xl font-semibold leading-snug">
                {data.title}
                </h3>

                <div className="mt-4 h-px w-1/2 bg-white/30" />

                <p className="mt-4  text-white/90 text-sm leading-relaxed">
                {data.desc}
                </p>

                {data.cta && (
                <a
                    href="#"
                    className="mt-6 inline-flex items-center gap-2 text-white font-medium border border-white/50 rounded px-4 py-2 hover:bg-white hover:text-[#4B2626] transition-colors duration-300"
                >
                    {data.cta}
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="w-4 h-4"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </a>
                )}
            </div>
            </div>
        </div>
        </div>
    );
    }

export default function AktivitasKami() {
  return (
    <section className="font-['Be_Vietnam_Pro'] bg-[#332020] text-white">
      <div className="mx-auto max-w-7xl px-5 md:px-15 py-12 lg:pt-20 md:py-16">
        {/* Heading + blurb */}
        <div className="flex flex-col md:flex-row md:items-start md:gap-12">
          <h2 className="text-[#D9C47C] text-3xl md:text-4xl font-extrabold md:min-w-[240px] md:leading-tight">
            Aktivitas{" "}
            <span className="block md:inline">kami</span>
          </h2>

          <p className="mt-3 md:mt-1 md:max-w-xl text-sm md:text-base text-white/90">
            Ma’had Daar Al-Shuffah Cilembu menyelenggarakan beragam program
            pembelajaran dan pembinaan yang dirancang untuk meningkatkan pemahaman
            dan kedisiplinan santri.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 flex flex-col gap-8 pb-10 lg:flex-row lg:pb-20 lg:pt-20 lg:gap-10">
          {activities.map((item, idx) => (
            <ActivityCard key={item.id} data={item} defaultOpen={idx === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
