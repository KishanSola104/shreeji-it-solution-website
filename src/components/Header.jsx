import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import logoImg from '../assets/logo/logo.png';
import { navLinks } from '../data/navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll detection for border shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect current section on home page
      if (location.pathname === '/') {
        const sections = ['contact', 'how-it-works', 'why-us', 'plans', 'services', 'about', 'home'];
        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 120) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Handle navigation click
  const handleNavClick = (e, href) => {
    setMobileMenuOpen(false);

    if (href.startsWith('/#')) {
      const targetId = href.replace('/#', '');
      if (location.pathname === '/') {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        // Navigating from subpage to home with hash
        navigate(href);
      }
    }
  };

  const isLinkActive = (href) => {
    if (location.pathname !== '/') {
      return false;
    }
    const sectionId = href.replace('/#', '');
    return activeSection === sectionId;
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-all duration-200 ${
        isScrolled ? 'border-b border-slate-200 shadow-sm py-3' : 'border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-brand-600 rounded-md py-1"
            aria-label="Shreeji IT Solution Pvt. Ltd. Home"
          >
            <img
              src={logoImg}
              alt="Shreeji IT Solution Pvt. Ltd."
              className="h-10 sm:h-11 w-auto object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <span className="font-bold text-lg sm:text-xl tracking-tight text-slate-900 flex flex-col leading-tight">
              <span>Shreeji IT Solution</span>
              <span className="text-[10px] font-medium tracking-wider uppercase text-brand-700">Pvt. Ltd.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
            {navLinks.map((item) => {
              const active = isLinkActive(item.href);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-150 ${
                    active
                      ? 'text-brand-700 font-semibold bg-brand-50'
                      : 'text-slate-700 hover:text-brand-700 hover:bg-slate-50'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Right side CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/lets-talk"
              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-150 transform hover:-translate-y-0.5"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu hamburger button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              to="/lets-talk"
              className="inline-flex items-center gap-1.5 bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold px-3 py-2 rounded-md"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-700 hover:text-brand-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-600"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 mt-3 pt-3 pb-4 space-y-1 animate-fadeIn">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block px-3 py-2.5 rounded-md text-base font-medium text-slate-800 hover:text-brand-700 hover:bg-slate-50"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-100">
              <Link
                to="/about-us"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-sm text-slate-600 hover:text-brand-700 hover:bg-slate-50"
              >
                About Company
              </Link>
              <Link
                to="/founder-profile"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-sm text-slate-600 hover:text-brand-700 hover:bg-slate-50"
              >
                Founder Profile
              </Link>
              <Link
                to="/terms-and-conditions"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-sm text-slate-600 hover:text-brand-700 hover:bg-slate-50"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
