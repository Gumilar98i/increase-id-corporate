import { PreferencesProvider } from '@/context/PreferencesContext';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ImpactMetrics from '@/components/ImpactMetrics';
import PillarsSection from '@/components/PillarsSection';
import InclusionBanner from '@/components/InclusionBanner';
import NewsSection from '@/components/NewsSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <PreferencesProvider>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <ImpactMetrics />
        <PillarsSection />
        <InclusionBanner />
        <NewsSection />
      </main>
      <Footer />
    </PreferencesProvider>
  );
}
