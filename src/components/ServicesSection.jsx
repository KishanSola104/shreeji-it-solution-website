import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import ServiceCard from './ServiceCard';
import ServiceModal from './ServiceModal';
import WhatsAppButton from './WhatsAppButton';
import { servicesData } from '../data/services';
import { DEFAULT_MESSAGES } from '../utils/whatsapp';

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Our Offerings"
          title="Our Services"
          subtitle="Technology solutions designed around your business needs."
        />

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelect={setSelectedService}
            />
          ))}
        </div>

        {/* Services Bottom CTA */}
        <div className="mt-16 sm:mt-20 bg-slate-950 text-white rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden shadow-xl border border-slate-800">
          <div className="max-w-2xl mx-auto relative z-10 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Have a project in mind? Let's build it together.
            </h3>
            <p className="text-slate-400 text-sm sm:text-base">
              Whether you need a new website, custom software, or business automation, we are ready to discuss practical solutions with you.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link
                to="/lets-talk"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3 rounded-lg shadow-sm transition-all duration-150 transform hover:-translate-y-0.5 text-sm sm:text-base"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <WhatsAppButton
                message={DEFAULT_MESSAGES.contact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-6 py-3 rounded-lg transition-colors text-sm sm:text-base"
              />
            </div>
          </div>

          {/* Background subtle styling */}
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-brand-600/10 rounded-full filter blur-3xl pointer-events-none" />
        </div>
      </div>

      {/* Service Modal Popup */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
}
