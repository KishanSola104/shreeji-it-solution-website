import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function ServiceModal({ service, onClose }) {
  const navigate = useNavigate();
  const modalRef = useRef(null);

  useEffect(() => {
    if (!service) return;

    // Prevent body scrolling
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Handle ESC key
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Focus close button on open
    const focusable = modalRef.current?.querySelector('button');
    focusable?.focus();

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  const handleStartProject = () => {
    onClose();
    navigate('/lets-talk');
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const whatsappLink = getWhatsAppUrl(service.whatsappMessage);

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm transition-opacity animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200 bg-slate-50/70">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-700">
              Service Details
            </span>
            <h2 id="service-modal-title" className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
              {service.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200/80 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-600"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
          {/* Detailed description */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
              Overview
            </h4>
            <p className="text-slate-800">
              {service.description}
            </p>
          </div>

          {/* What We Provide */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
              What We Provide
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-800 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Suitable For */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
              Suitable For
            </h4>
            <p className="text-slate-800 bg-brand-50/50 p-3 rounded-lg border border-brand-100 text-sm">
              {service.suitableFor}
            </p>
          </div>

          {/* Key Benefits */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2.5">
              Key Benefits
            </h4>
            <ul className="space-y-2">
              {service.keyBenefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-2 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer / CTAs */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-end gap-3">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={handleStartProject}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-2.5 rounded-lg text-sm shadow-sm transition-colors"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
