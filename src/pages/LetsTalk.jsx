import React from 'react';
import { Phone, Mail, MapPin, Linkedin, MessageCircle, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import WhatsAppButton from '../components/WhatsAppButton';
import { contactInfo } from '../data/navigation';
import { DEFAULT_MESSAGES } from '../utils/whatsapp';

export default function LetsTalk() {
  return (
    <main className="py-12 md:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title & Intro */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold mb-3">
            <span>Direct Inquiry</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
            Let&apos;s Start Your Project
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Tell us about your idea, business or project requirements. We&apos;ll use the information to understand what you need and discuss the next steps.
          </p>
        </div>

        {/* 2-Column Spacious Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Contact Details & Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-5">
              <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                Contact Details
              </h2>

              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600 flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-semibold text-slate-500 block">Call Directly</span>
                    <a
                      href={`tel:${contactInfo.phoneRaw}`}
                      className="text-base font-bold text-slate-900 hover:text-brand-600 transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600 flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-semibold text-slate-500 block">Email Inquiries</span>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-base font-bold text-slate-900 hover:text-brand-600 transition-colors break-all"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600 flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-semibold text-slate-500 block">Office Location</span>
                    <span className="text-sm font-semibold text-slate-900 block">
                      {contactInfo.address}
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp CTA */}
              <div className="pt-2">
                <WhatsAppButton
                  message={DEFAULT_MESSAGES.contact}
                  className="w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white py-3 rounded-lg text-sm font-semibold shadow-sm"
                />
              </div>
            </div>

            {/* What to expect card */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-600" />
                <span>What Happens Next?</span>
              </h3>
              <ol className="space-y-3 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-brand-700">1.</span>
                  <span>We evaluate your specifications and technical scope.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-brand-700">2.</span>
                  <span>We schedule a direct call or message exchange to clarify details.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-brand-700">3.</span>
                  <span>You receive a clear scope outline, timeline, and quote.</span>
                </li>
              </ol>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-700">Official Company Profile</span>
              <a
                href={contactInfo.companyLinkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-700 hover:text-brand-900"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn Page</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>

      <WhatsAppButton variant="floating" message={DEFAULT_MESSAGES.contact} />
    </main>
  );
}
