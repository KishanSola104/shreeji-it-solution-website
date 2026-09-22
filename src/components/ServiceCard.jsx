import React from 'react';
import { Globe, Smartphone, Monitor, Layout, Code2, Cpu, ArrowRight } from 'lucide-react';

const iconMap = {
  Globe,
  Smartphone,
  Monitor,
  Layout,
  Code2,
  Cpu
};

export default function ServiceCard({ service, onSelect }) {
  const IconComponent = iconMap[service.icon] || Code2;

  return (
    <div
      onClick={() => onSelect(service)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(service);
        }
      }}
      className="group bg-white rounded-2xl p-7 border border-slate-200 hover:border-brand-300 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between text-left cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:outline-none"
    >
      <div>
        <div className="w-12 h-12 rounded-xl bg-brand-50 group-hover:bg-brand-600 transition-colors duration-200 flex items-center justify-center text-brand-600 group-hover:text-white mb-6">
          <IconComponent className="w-6 h-6 transition-colors duration-200" />
        </div>

        <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors duration-150">
          {service.title}
        </h3>

        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
          {service.shortDescription}
        </p>
      </div>

      <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-brand-600 group-hover:text-brand-700">
        <span>Learn More</span>
        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-150" />
      </div>
    </div>
  );
}
