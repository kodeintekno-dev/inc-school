import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
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
      </main>
        {/* About Section */}
        <About />
      </>
  )}
