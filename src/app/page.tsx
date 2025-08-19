import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Facility from '@/components/Facility';
import Footer from '@/components/Footer';
import { About } from '@/components/About';

export default function HomePage() {
  return (
    <>
      {/* Navbar */}
      <header>
        <Navbar />
      </header>
      {/* Hero Section */}
      <main>
        <Hero />
        <Facility />
        <Footer />
      </main>
        {/* About Section */}
        <About />
      </>
  )}
