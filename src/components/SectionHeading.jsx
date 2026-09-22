import React from 'react';

export default function SectionHeading({
  tag,
  title,
  subtitle,
  center = true,
  dark = false,
  className = ''
}) {
  return (
    <div className={`mb-12 md:mb-16 ${center ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {tag && (
        <span
          className={`inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-3 ${
            dark
              ? 'bg-blue-900/60 text-blue-300 border border-blue-700/50'
              : 'bg-brand-50 text-brand-700 border border-brand-200'
          }`}
        >
          {tag}
        </span>
      )}
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight ${
          dark ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            dark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
