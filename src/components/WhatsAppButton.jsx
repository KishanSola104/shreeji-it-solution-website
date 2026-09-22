import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, DEFAULT_MESSAGES } from '../utils/whatsapp';

export default function WhatsAppButton({
  message = DEFAULT_MESSAGES.general,
  children,
  className = '',
  variant = 'button', // 'button' | 'floating'
}) {
  const url = getWhatsAppUrl(message);

  if (variant === 'floating') {
    return (
      <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
          aria-label="Chat with Shreeji IT Solution on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="text-sm font-medium hidden sm:inline">WhatsApp</span>
        </a>
      </aside>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 font-medium transition-colors duration-150 ${className}`}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-4 h-4" />
      <span>{children || 'Chat on WhatsApp'}</span>
    </a>
  );
}
