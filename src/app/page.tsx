import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Facility from '@/components/Facility';

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
      </main>
    </>
  );
}
