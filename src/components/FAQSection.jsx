import React, { useState } from 'react';
import { ChevronDown, CheckCircle, HelpCircle, Shield, Award, Clock } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { faqsData } from '../data/faqs';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0); // First one open by default

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="why-us" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Why Us &amp; FAQs"
          title="Why Choose Shreeji IT Solution?"
          subtitle="Honest, business-first answers to common questions about working with us. No exaggerated claims, just clear communication and dependable engineering."
        />

        {/* Genuine Differentiators Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="w-10 h-10 rounded-lg bg-brand-100 flex items-center justify-center text-brand-700 mb-3">
              <Shield className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 text-base">Clear Scope Definitions</h4>
            <p className="mt-1 text-xs sm:text-sm text-slate-600">
              We define requirements upfront to avoid unexpected surprises and timeline slips.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="w-10 h-10 rounded-lg bg-brand-100 flex items-center justify-center text-brand-700 mb-3">
              <CheckCircle className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 text-base">Milestone Payments</h4>
            <p className="mt-1 text-xs sm:text-sm text-slate-600">
              Pay as progress happens: 30% advance, 30% mid-project, and 40% upon final delivery.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="w-10 h-10 rounded-lg bg-brand-100 flex items-center justify-center text-brand-700 mb-3">
              <Award className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 text-base">Practical Utility</h4>
            <p className="mt-1 text-xs sm:text-sm text-slate-600">
              Software built to solve actual day-to-day workflow bottlenecks, not vanity features.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="w-10 h-10 rounded-lg bg-brand-100 flex items-center justify-center text-brand-700 mb-3">
              <Clock className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 text-base">Transparent Timelines</h4>
            <p className="mt-1 text-xs sm:text-sm text-slate-600">
              Realistic commitments with direct founder access and regular development updates.
            </p>
          </div>
        </div>

        {/* 10 FAQ Accordions */}
        <div className="max-w-3xl mx-auto space-y-3.5">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-slate-900">
              Frequently Asked Questions
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Everything you need to know about starting an IT project with us.
            </p>
          </div>

          {faqsData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.id}
                className="border border-slate-200 rounded-xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-4.5 bg-white hover:bg-slate-50 flex items-center justify-between gap-4 transition-colors focus:outline-none focus-visible:bg-slate-50"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-slate-900 text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-brand-600 transform transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm text-slate-600 bg-slate-50/50 leading-relaxed border-t border-slate-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
