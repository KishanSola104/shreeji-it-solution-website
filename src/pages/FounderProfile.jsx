import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, ArrowRight, ArrowUpRight, MessageSquare, ChevronDown, ChevronUp, MapPin, Calendar, Building, Sparkles } from 'lucide-react';
import founderPhoto from '../assets/images/Founder_Photo.png';
import WhatsAppButton from '../components/WhatsAppButton';
import { contactInfo } from '../data/navigation';
import { DEFAULT_MESSAGES } from '../utils/whatsapp';

export default function FounderProfile() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <main className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-10 pb-6 border-b border-slate-200">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold mb-3">
            <span>Leadership &bull; Founder Profile</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
            Kishan Solanki
          </h1>
          <p className="mt-2 text-base sm:text-lg text-brand-700 font-medium">
            Founder &bull; Shreeji IT Solution Pvt. Ltd.
          </p>
        </div>

        {/* 2-Column Layout on Desktop, Stacked on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start max-w-5xl mx-auto">
          {/* Left Column: Founder Information */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-700 text-base leading-relaxed">
              <p>
                <strong className="text-slate-950 font-bold">Kishan Solanki</strong> is the founder of <strong className="text-slate-950 font-semibold">Shreeji IT Solution Pvt. Ltd.</strong>, an IT services company headquartered in Vasad, Anand, Gujarat. Established in 2025, the company was born out of Kishan&apos;s passion for technology and software craftsmanship.
              </p>
              <p>
                With a strong technical and software development foundation, Kishan focuses on engineering dependable, functional digital solutions tailored to the real operational needs of growing businesses, startups, and local organizations.
              </p>
              <p>
                His engineering philosophy prioritizes clarity, code quality, and straightforward business value over unnecessary technical complexity. He believes modern software should simplify workflows, streamline customer touchpoints, and respect project budgets.
              </p>

              {/* Expandable "Read More" section */}
              {isExpanded && (
                <div className="space-y-4 pt-2 text-slate-700 text-base leading-relaxed border-t border-slate-100 animate-fadeIn">
                  <h3 className="text-lg font-bold text-slate-900">
                    Philosophy &amp; Focus Areas
                  </h3>
                  <p>
                    Kishan actively follows innovations in web platforms, modern JavaScript ecosystems, responsive UI architecture, and practical operational automation. He approaches every project collaboratively&mdash;taking the time to understand business context rather than pushing generic templates.
                  </p>
                  <p>
                    Under his leadership, Shreeji IT Solution maintains transparent milestone-based engagements, open communication lines, and a strong commitment to long-term client support.
                  </p>
                </div>
              )}
            </div>

            {/* Read More / Read Less Toggle */}
            <div>
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-800 transition-colors"
                aria-expanded={isExpanded}
              >
                <span>{isExpanded ? 'Read Less' : 'Read More'}</span>
                {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>

            {/* Quick Facts */}
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-sm">
              <div className="flex items-center gap-2.5 text-slate-700">
                <Building className="w-4 h-4 text-brand-600 flex-shrink-0" />
                <span>Founder: Shreeji IT Solution Pvt. Ltd.</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700">
                <Calendar className="w-4 h-4 text-brand-600 flex-shrink-0" />
                <span>Founded Company: 2025</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700">
                <MapPin className="w-4 h-4 text-brand-600 flex-shrink-0" />
                <span>Location: Vasad, Anand, Gujarat</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700">
                <Sparkles className="w-4 h-4 text-brand-600 flex-shrink-0" />
                <span>Focus: Practical Digital Solutions</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <a
                href={contactInfo.founderLinkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0A66C2] hover:bg-[#004182] text-white font-semibold px-5 py-2.5 rounded-lg text-sm shadow-sm transition-all duration-150 transform hover:-translate-y-0.5"
              >
                <Linkedin className="w-4 h-4 fill-current" />
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <Link
                to="/lets-talk"
                className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-5 py-2.5 rounded-lg text-sm shadow-sm transition-colors"
              >
                <span>Discuss a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Founder Photo */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-md">
              <div className="overflow-hidden rounded-xl bg-white border border-slate-200/80 aspect-[4/5] flex items-center justify-center">
                <img
                  src={founderPhoto}
                  alt="Kishan Solanki - Founder of Shreeji IT Solution Pvt. Ltd."
                  className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              <div className="mt-4 text-center">
                <h3 className="text-lg font-bold text-slate-900">Kishan Solanki</h3>
                <p className="text-xs sm:text-sm text-slate-500">Founder &bull; Software Developer</p>
                <p className="text-xs text-brand-700 font-medium mt-0.5">Shreeji IT Solution Pvt. Ltd.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WhatsAppButton variant="floating" message={DEFAULT_MESSAGES.general} />
    </main>
  );
}
