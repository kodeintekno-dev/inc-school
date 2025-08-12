import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Facility from '@/components/Facility';
import Footer from '@/components/Footer';

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
    </>
  );
}
