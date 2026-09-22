import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';

export default function PricingCard({ plan }) {
  const isCustom = plan.price === "Let's Discuss";

  return (
    <div
      className={`relative bg-white rounded-2xl flex flex-col justify-between transition-all duration-200 ${
        plan.isPopular
          ? 'border-2 border-brand-600 shadow-lg p-7 lg:-translate-y-2'
          : 'border border-slate-200 shadow-sm hover:shadow-md p-6 sm:p-7'
      }`}
    >
      {/* Badge for Most Popular */}
      {plan.badge && (
        <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2">
          <span className="bg-brand-600 text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
            {plan.badge}
          </span>
        </div>
      )}

      <div>
        <div className="mb-4">
          <h3 className="text-xl font-bold text-slate-950">{plan.name}</h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 min-h-[40px] leading-relaxed">
            {plan.description}
          </p>
        </div>

        <div className="py-4 my-2 border-y border-slate-100 flex items-baseline gap-2">
          <span className={`font-extrabold tracking-tight text-slate-950 ${isCustom ? 'text-2xl sm:text-3xl' : 'text-3xl sm:text-4xl'}`}>
            {plan.price}
          </span>
          <span className="text-xs text-slate-500 font-medium">
            {plan.period}
          </span>
        </div>

        {/* Feature List */}
        <div className="mt-6 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
            What's Included:
          </span>
          <ul className="space-y-2.5">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <Check className="w-4 h-4 text-brand-600 mt-0.5 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-8 pt-6 border-t border-slate-100">
        <Link
          to={plan.ctaLink}
          className={`w-full inline-flex items-center justify-center gap-2 font-semibold px-5 py-3 rounded-lg text-sm transition-all duration-150 ${
            plan.isPopular
              ? 'bg-brand-600 hover:bg-brand-700 text-white shadow-sm hover:shadow'
              : 'bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-200'
          }`}
        >
          <span>{plan.ctaText}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
