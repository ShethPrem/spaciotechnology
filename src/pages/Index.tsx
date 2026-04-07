import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SearchBar from '@/components/SearchBar';
import FeaturedListings from '@/components/FeaturedListings';
import SpaceTypes from '@/components/SpaceTypes';
import CityExplorer from '@/components/CityExplorer';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import HowItWorks from '@/components/HowItWorks';
import AppSection from '@/components/AppSection';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <SearchBar />
      <FeaturedListings />
      <SpaceTypes />
      <CityExplorer />
      <Testimonials />
      <Pricing />
      <HowItWorks />
      <AppSection />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Index;