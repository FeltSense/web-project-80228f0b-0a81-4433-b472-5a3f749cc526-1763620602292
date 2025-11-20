import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import AboutUsSection from '@/components/AboutUsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToActionSection from '@/components/CallToActionSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between antialiased">
      <HeroSection />
      <FeaturesSection />
      <AboutUsSection />
      <TestimonialsSection />
      <CallToActionSection />
      <Footer />
    </main>
  );
}