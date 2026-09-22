/**
 * WhatsApp integration utility
 * Direct company number: +91 96623 47518
 * WhatsApp API format: 919662347518
 */

export const WHATSAPP_PHONE = '919662347518';
export const DISPLAY_PHONE = '+91 96623 47518';

export const DEFAULT_MESSAGES = {
  general: 'Hello Shreeji IT Solution, I would like to discuss a project with your team. Please let me know how we can proceed.',
  hero: 'Hello Shreeji IT Solution, I would like to discuss a project with your team. I would like to know more about your services and pricing.',
  contact: 'Hello Shreeji IT Solution, I would like to discuss a project. Please let me know how we can proceed.',
  pricing: (planName) => `Hello Shreeji IT Solution, I am interested in the ${planName} package. Please share further details.`,
  service: (serviceTitle) => `Hello Shreeji IT Solution, I am interested in your ${serviceTitle} service. I would like to discuss my requirements and get more information.`
};

/**
 * Builds an encoded wa.me URL
 * @param {string} message - Unencoded raw text message
 * @returns {string} - wa.me URL
 */
export function getWhatsAppUrl(message = DEFAULT_MESSAGES.general) {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encoded}`;
}
