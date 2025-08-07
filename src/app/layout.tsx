import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam",
  subsets: ["latin"],
  weight: ["400","800"]
});

export const metadata: Metadata = {
  title: "Ma'had Daar AL-Shuffah Cilembu",
  description: "brick by brick",
  icons: "/logo_cilembu.svg"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${beVietnamPro.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
