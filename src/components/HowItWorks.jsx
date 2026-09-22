import React from 'react';
import SectionHeading from './SectionHeading';
import { timelineSteps } from '../data/timeline';
import { MessageSquare, Lightbulb, Compass, FileCode2, CheckSquare2, PlayCircle, Rocket } from 'lucide-react';

const stepIcons = [
  MessageSquare,
  Lightbulb,
  Compass,
  FileCode2,
  CheckSquare2,
  PlayCircle,
  Rocket
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Subtle background tech accents */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          tag="Our Process"
          title="How It Works"
          subtitle="A clear, structured step-by-step process from our first conversation to production deployment."
          dark={true}
        />

        <div className="max-w-4xl mx-auto mt-12">
          <div className="relative">
            {/* Vertical timeline line for desktop */}
            <div className="hidden md:block absolute top-0 bottom-0 left-8 w-0.5 bg-slate-800" />

            <div className="space-y-8 md:space-y-10">
              {timelineSteps.map((step, idx) => {
                const IconComponent = stepIcons[idx] || MessageSquare;
                return (
                  <div key={step.step} className="relative flex flex-col md:flex-row items-start gap-4 md:gap-8 group">
                    {/* Step Number & Icon Badge */}
                    <div className="flex-shrink-0 z-10 flex items-center gap-3 md:gap-0">
                      <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700 flex flex-col items-center justify-center text-white shadow-lg group-hover:border-brand-500 transition-colors duration-150">
                        <IconComponent className="w-5 h-5 text-brand-400" />
                        <span className="text-[10px] font-mono uppercase text-slate-400 font-bold mt-1">
                          Step {step.step}
                        </span>
                      </div>
                      {/* Mobile title next to badge */}
                      <span className="md:hidden font-bold text-lg text-white">
                        {step.title}
                      </span>
                    </div>

                    {/* Step Details */}
                    <div className="flex-grow bg-slate-900/70 border border-slate-800 rounded-xl p-5 md:p-6 group-hover:border-slate-700 transition-colors w-full">
                      <h4 className="hidden md:block text-lg font-bold text-white mb-2">
                        {step.title}
                      </h4>
                      <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
