import React from 'react';
import { Info } from 'lucide-react';
import SectionHeading from './SectionHeading';
import PricingCard from './PricingCard';
import { pricingPlans, pricingDisclaimer } from '../data/pricing';

export default function PricingSection() {
  return (
    <section id="plans" className="py-16 md:py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Packages &amp; Pricing"
          title="Simple &amp; Transparent Plans"
          subtitle="Flexible options for businesses at different stages. If your requirements are different, we can discuss a custom solution."
        />

        {/* 4 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 items-stretch">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* Pricing Disclaimer */}
        <div className="mt-12 max-w-4xl mx-auto bg-white rounded-xl p-4 sm:p-5 border border-slate-200 shadow-sm flex items-start gap-3 text-xs sm:text-sm text-slate-600">
          <Info className="w-5 h-5 text-brand-600 mt-0.5 flex-shrink-0" />
          <div>
            <strong className="text-slate-900 font-semibold block mb-0.5">Important Pricing Disclaimer:</strong>
            <p>{pricingDisclaimer}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
