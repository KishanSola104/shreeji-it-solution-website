import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, User, Building2, Target, Cpu } from 'lucide-react';
import SectionHeading from './SectionHeading';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          {/* Left: Professional Text */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              tag="About Company"
              title="About Shreeji IT Solution"
              subtitle="Practical IT and digital solutions built around real business objectives."
              center={false}
              className="mb-6 md:mb-8"
            />

            <div className="space-y-4 text-slate-700 leading-relaxed text-base">
              <p>
                <strong className="text-slate-900 font-semibold">Shreeji IT Solution Pvt. Ltd.</strong> is a Vasad-based IT solution provider serving businesses, organizations, and growing enterprises across Gujarat and beyond. Founded in 2025 by <strong className="text-slate-900 font-semibold">Kishan Solanki</strong>, our company began with a simple vision: to make reliable technology and digital solutions accessible, practical, and dependable for businesses of different sizes.
              </p>
              <p>
                What started with a single focused project has grown into an evolving technology partner specializing in web development, application development, UI/UX design, custom software, SEO, and AI-powered operational automation.
              </p>
              <p>
                Our philosophy is straightforward: we do not build software for the sake of complexity. We take time to understand the genuine needs of your business, identify opportunities for operational efficiency, and deliver technology solutions that are reliable, scalable, and cost-effective.
              </p>
              <p className="text-slate-900 font-medium">
                We believe that good technology should solve real business problems, reduce friction, and provide a strong digital foundation for long-term growth.
              </p>
            </div>

            {/* Quick action buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/about-us"
                className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-5 py-2.5 rounded-lg shadow-sm transition-all duration-150 transform hover:-translate-y-0.5 text-sm"
              >
                <span>Read More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/founder-profile"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-semibold px-5 py-2.5 rounded-lg shadow-sm transition-colors text-sm"
              >
                <User className="w-4 h-4 text-brand-600" />
                <span>About Founder</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right: Clean Corporate Tech Graphic Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-md space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Shreeji IT Solution Pvt. Ltd.</h3>
                  <p className="text-xs text-slate-500">Corporate Overview &bull; Vasad, Gujarat</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-xs text-slate-500 block">Established</span>
                  <span className="text-base font-bold text-slate-900 mt-0.5 block">2025</span>
                  <span className="text-xs text-slate-500">Founded by Kishan Solanki</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-xs text-slate-500 block">Headquarters</span>
                  <span className="text-base font-bold text-slate-900 mt-0.5 block">Vasad, Anand</span>
                  <span className="text-xs text-slate-500">Gujarat &ndash; 388305</span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Core Company Commitments
                </div>
                <ul className="space-y-2.5 text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 mt-0.5 flex-shrink-0" />
                    <span>Clear scope definitions before development begins</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 mt-0.5 flex-shrink-0" />
                    <span>Transparent 30 / 30 / 40 milestone payment terms</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 mt-0.5 flex-shrink-0" />
                    <span>Focus on practical utility over hype and buzzwords</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 mt-0.5 flex-shrink-0" />
                    <span>Direct, human communication throughout the project</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
