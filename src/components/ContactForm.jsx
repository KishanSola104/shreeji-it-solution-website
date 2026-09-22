import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, Mail } from 'lucide-react';
import { submitContactForm } from '../utils/email';

const servicesList = [
  'Web Development & SEO',
  'App Development',
  'Desktop Application Development',
  'UI/UX Design',
  'Custom Software Development',
  'AI & Operational Automation',
  'Other / Custom Requirement'
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: servicesList[0],
    message: '',
    _honey: '' // Anti-spam honeypot
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [fallbackMailto, setFallbackMailto] = useState('');

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.phone && !/^[0-9+\s\-()]{7,20}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Project Description is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Project Description must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent submission if honeypot is filled (bot detection)
    if (formData._honey) {
      return;
    }

    if (!validate()) return;

    setStatus('loading');
    setErrorMessage('');
    setFallbackMailto('');

    try {
      const result = await submitContactForm(formData);

      if (result.success) {
        setStatus('success');
        setSuccessMessage(
          result.message ||
          'Thank you! Your message has been submitted successfully. We will get back to you soon.'
        );
        // Reset form data after successful delivery
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: servicesList[0],
          message: '',
          _honey: ''
        });
      } else {
        setStatus('error');
        setErrorMessage(result.error || 'Submission could not be completed at this time.');
        if (result.mailtoUrl) {
          setFallbackMailto(result.mailtoUrl);
        }
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMessage('A network error occurred. Please try again or reach out directly.');
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
      {status === 'success' ? (
        <div className="text-center py-8 space-y-4 animate-fadeIn">
          <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center border border-emerald-100">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Message Submitted!</h3>
          <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto leading-relaxed">
            {successMessage}
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setStatus('idle');
                setSuccessMessage('');
              }}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold bg-brand-600 text-white hover:bg-brand-700 transition-colors shadow-sm"
            >
              Send Another Message
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          {/* Honeypot field for bot/spam protection (hidden from humans) */}
          <input
            type="text"
            name="_honey"
            value={formData._honey}
            onChange={handleChange}
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          {/* Error Notice with Mailto Fallback */}
          {status === 'error' && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs sm:text-sm text-red-800 space-y-2">
              <div className="flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 mt-0.5 text-red-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold">{errorMessage}</p>
                  <p className="mt-1 text-slate-600">
                    You can contact us directly at <a href="mailto:shreejiitsolution120@gmail.com" className="font-semibold underline text-brand-700">shreejiitsolution120@gmail.com</a> or use the direct mail button below.
                  </p>
                </div>
              </div>

              {fallbackMailto && (
                <div className="pt-2 border-t border-red-200/60">
                  <a
                    href={fallbackMailto}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-red-300 font-semibold text-xs text-red-900 hover:bg-red-100/50"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Send via Your Email Client</span>
                  </a>
                </div>
              )}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* 1. Full Name */}
            <div>
              <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Kishan Solanki"
                aria-required="true"
                aria-invalid={!!errors.name}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 transition-colors ${
                  errors.name ? 'border-red-400 bg-red-50/20' : 'border-slate-300 focus:border-brand-600'
                }`}
              />
              {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
            </div>

            {/* 2. Email Address */}
            <div>
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@company.com"
                aria-required="true"
                aria-invalid={!!errors.email}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 transition-colors ${
                  errors.email ? 'border-red-400 bg-red-50/20' : 'border-slate-300 focus:border-brand-600'
                }`}
              />
              {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* 3. Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                aria-invalid={!!errors.phone}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 transition-colors ${
                  errors.phone ? 'border-red-400 bg-red-50/20' : 'border-slate-300 focus:border-brand-600'
                }`}
              />
              {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
            </div>

            {/* 4. Company / Business Name */}
            <div>
              <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                Company / Business Name <span className="text-slate-400 font-normal lowercase">(optional)</span>
              </label>
              <input
                id="company"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your Business or Firm"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-brand-600 text-sm text-slate-900"
              />
            </div>
          </div>

          {/* 5. Service Interested In */}
          <div>
            <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
              Service Interested In
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-brand-600 text-sm text-slate-900 bg-white"
            >
              {servicesList.map((svc) => (
                <option key={svc} value={svc}>
                  {svc}
                </option>
              ))}
            </select>
          </div>

          {/* 6. Project Description */}
          <div>
            <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
              Project Description <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your idea, requirements, scope, or timeline..."
              aria-required="true"
              aria-invalid={!!errors.message}
              className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 transition-colors resize-y ${
                errors.message ? 'border-red-400 bg-red-50/20' : 'border-slate-300 focus:border-brand-600'
              }`}
            />
            {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-6 py-3.5 rounded-lg shadow-sm transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed text-sm sm:text-base mt-2"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Sending Message...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>

         
        </form>
      )}
    </div>
  );
}
