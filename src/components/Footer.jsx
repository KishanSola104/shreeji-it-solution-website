import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Linkedin, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import logoImg from '../assets/logo/logo.png';
import { navLinks, footerServices, companyLinks, contactInfo } from '../data/navigation';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLinkClick = (e, href) => {
    if (href.startsWith('/#')) {
      const targetId = href.replace('/#', '');
      if (location.pathname === '/') {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        navigate(href);
      }
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Column 1: Company Branding & Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3 bg-white/5 p-2.5 rounded-lg border border-white/10 hover:border-white/20 transition-colors">
              <img
                src={logoImg}
                alt="Shreeji IT Solution Pvt. Ltd."
                className="h-10 w-auto object-contain brightness-105"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div>
                <span className="block font-bold text-white text-lg tracking-tight">Shreeji IT Solution</span>
                <span className="block text-xs uppercase tracking-wider text-brand-400 font-medium">Pvt. Ltd.</span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {contactInfo.tagline}
            </p>

            <div className="pt-2 space-y-2 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-400 mt-1 flex-shrink-0" />
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <a href={`tel:${contactInfo.phoneRaw}`} className="hover:text-white transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={contactInfo.companyLinkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 hover:border-brand-500 hover:text-white text-xs font-medium text-slate-300 transition-all"
                aria-label="Connect with Shreeji IT Solution on LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5 text-brand-400" />
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-white transition-colors block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <Link to="/lets-talk" className="hover:text-white transition-colors block py-0.5">
                  Let's Talk
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {footerServices.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    onClick={(e) => handleLinkClick(e, service.href)}
                    className="hover:text-white transition-colors block py-0.5"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              {companyLinks.map((company) => (
                <li key={company.name}>
                  <Link
                    to={company.href}
                    className="hover:text-white transition-colors block py-0.5"
                  >
                    {company.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom sub-footer */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {contactInfo.foundedYear}&ndash;{currentYear} {contactInfo.companyName} All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/terms-and-conditions" className="hover:text-slate-400 transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/about-us" className="hover:text-slate-400 transition-colors">
              About Us
            </Link>
            <Link to="/lets-talk" className="hover:text-slate-400 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
