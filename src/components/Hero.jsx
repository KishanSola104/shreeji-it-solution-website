import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, Terminal, Layers, Code, Zap, Download } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';
import { DEFAULT_MESSAGES } from '../utils/whatsapp';

export default function Hero() {
  return (
    <section id="home" className="relative bg-white pt-10 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
      {/* Subtle background tech pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs sm:text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse" />
              <span>Vasad, Anand &bull; Founded in 2025</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-slate-950 tracking-tight leading-[1.15]">
              Best IT Solutions &amp; Digital Services for{' '}
              <span className="text-brand-600">Growing Businesses</span>
            </h1>

            <div className="space-y-4 max-w-2xl mx-auto lg:mx-0">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                We help businesses build, improve and grow in the digital world through reliable technology solutions, modern websites, custom software, digital experiences and smart automation.
              </p>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                From idea to execution, we focus on practical solutions, transparent communication and quality development.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <Link
                to="/lets-talk"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-7 py-3.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 text-base"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="/brochure/Shreej_IT_Solution_Brochure.pdf"
                download
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 font-semibold px-6 py-3.5 rounded-lg shadow-sm hover:shadow transition-all duration-200 transform hover:-translate-y-0.5 text-base"
              >
                <Download className="w-4 h-4 text-brand-600" />
                <span>Download Brochure</span>
              </a>

              <WhatsAppButton
                message={DEFAULT_MESSAGES.hero}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-300 font-semibold px-6 py-3.5 rounded-lg transition-colors text-base"
              />
            </div>

            {/* Trust Highlights */}
            <div className="pt-6 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-600 flex-shrink-0" />
                <span>Transparent Scope</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0" />
                <span>Milestone Payments</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0" />
                <span>Post-Launch Support</span>
              </div>
            </div>
          </div>

          {/* Right Column: Professional IT Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Tech Stack Card */}
              <div className="bg-slate-950 text-white rounded-2xl p-6 sm:p-7 shadow-2xl border border-slate-800 relative z-10">
                {/* Header bar */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-slate-700" />
                    <span className="w-3 h-3 rounded-full bg-slate-700" />
                    <span className="w-3 h-3 rounded-full bg-slate-700" />
                    <span className="ml-2 text-slate-400 font-mono text-[11px]">shreeji-core-engine</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-[11px]">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>Active Deployment</span>
                  </div>
                </div>

                {/* Tech Service Badges */}
                <div className="space-y-3 font-mono text-xs">
                  <div className="bg-slate-900/90 rounded-lg p-3 border border-slate-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Code className="w-4 h-4 text-brand-400" />
                      <span className="text-slate-200">Web &amp; Custom Software</span>
                    </div>
                    <span className="text-brand-400 font-semibold text-[11px]">Clean Architecture</span>
                  </div>

                  <div className="bg-slate-900/90 rounded-lg p-3 border border-slate-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Layers className="w-4 h-4 text-brand-400" />
                      <span className="text-slate-200">Mobile &amp; Desktop Apps</span>
                    </div>
                    <span className="text-emerald-400 font-semibold text-[11px]">Multi-Platform</span>
                  </div>

                  <div className="bg-slate-900/90 rounded-lg p-3 border border-slate-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Zap className="w-4 h-4 text-brand-400" />
                      <span className="text-slate-200">AI &amp; Smart Automation</span>
                    </div>
                    <span className="text-sky-400 font-semibold text-[11px]">Practical Workflows</span>
                  </div>
                </div>

                {/* Performance Metric Showcase */}
                <div className="mt-5 pt-4 border-t border-slate-800 grid grid-cols-2 gap-3 text-center">
                  <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                    <div className="text-xs text-slate-400 font-sans">Engineering Standard</div>
                    <div className="text-base font-bold text-white font-sans mt-0.5">High Performance</div>
                  </div>
                  <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                    <div className="text-xs text-slate-400 font-sans">Business Delivery</div>
                    <div className="text-base font-bold text-brand-400 font-sans mt-0.5">Transparent Milestones</div>
                  </div>
                </div>
              </div>

              {/* Decorative subtle backdrop glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-brand-600/10 to-blue-600/10 rounded-2xl filter blur-xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
