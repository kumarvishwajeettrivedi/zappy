
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import AppDownloadSection from "@/components/AppDownloadSection";
import WhatWeOffer from "@/components/whatweoffer";

import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <WhatWeOffer />
      <AppDownloadSection />
      <Footer />
    </div>
  );
};

export default Index;
