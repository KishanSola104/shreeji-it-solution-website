import React from 'react';
import { Phone, Mail, MapPin, Linkedin, ArrowUpRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import ContactForm from './ContactForm';
import WhatsAppButton from './WhatsAppButton';
import { contactInfo } from '../data/navigation';
import { DEFAULT_MESSAGES } from '../utils/whatsapp';

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-50 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start">
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <SectionHeading
              tag="Direct Communication"
              title="Let's Talk About Your Project"
              subtitle="Have an idea, business requirement or project in mind? Tell us what you are looking for and our team can discuss the next steps with you."
              center={false}
              className="mb-6"
            />

            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase font-semibold text-slate-500 block">Mobile</span>
                  <a
                    href={`tel:${contactInfo.phoneRaw}`}
                    className="text-base font-bold text-slate-900 hover:text-brand-600 transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">Call or WhatsApp directly</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase font-semibold text-slate-500 block">Email</span>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-base font-bold text-slate-900 hover:text-brand-600 transition-colors break-all"
                  >
                    {contactInfo.email}
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">Prompt project response</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase font-semibold text-slate-500 block">Location</span>
                  <span className="text-base font-bold text-slate-900">
                    {contactInfo.address}
                  </span>
                  <p className="text-xs text-slate-500 mt-0.5">Gujarat, India</p>
                </div>
              </div>
            </div>

            {/* Quick Actions (WhatsApp & LinkedIn) */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <WhatsAppButton
                message={DEFAULT_MESSAGES.contact}
                className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1EBE5D] text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-sm"
              />

              <a
                href={contactInfo.companyLinkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors shadow-sm"
              >
                <Linkedin className="w-4 h-4 text-brand-600" />
                <span>Company LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
