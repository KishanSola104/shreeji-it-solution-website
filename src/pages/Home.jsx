import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import PricingSection from '../components/PricingSection';
import FAQSection from '../components/FAQSection';
import HowItWorks from '../components/HowItWorks';
import ContactSection from '../components/ContactSection';
import WhatsAppButton from '../components/WhatsAppButton';
import { DEFAULT_MESSAGES } from '../utils/whatsapp';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <PricingSection />
      <FAQSection />
      <HowItWorks />
      <ContactSection />
      <WhatsAppButton variant="floating" message={DEFAULT_MESSAGES.hero} />
    </main>
  );
}
