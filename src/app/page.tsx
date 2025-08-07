import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

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
      </main>
    </>
  );
}
