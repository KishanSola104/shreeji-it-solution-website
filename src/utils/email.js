/**
 * Frontend-only email submission utility for Shreeji IT Solution Pvt. Ltd.
 * Uses FormSubmit.co without any custom backend, Node.js, Express, PHP, or serverless functions.
 * Deployable directly on Vercel, Netlify, and GitHub Pages.
 */

export const RECIPIENT_EMAIL = 'shreejiitsolution120@gmail.com';
export const FORMSUBMIT_AJAX_ENDPOINT = `https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`;
export const FORMSUBMIT_STANDARD_ENDPOINT = `https://formsubmit.co/${RECIPIENT_EMAIL}`;

/**
 * Generates a pre-filled mailto: fallback URL containing all submitted information
 * @param {Object} formData
 * @returns {string} mailto URL
 */
export function buildMailtoUrl(formData = {}) {
  const name = formData.name?.trim() || '';
  const email = formData.email?.trim() || '';
  const phone = formData.phone?.trim() || 'Not provided';
  const company = formData.company?.trim() || 'Not provided';
  const service = formData.service || 'General Inquiry';
  const message = formData.message?.trim() || '';

  const subject = encodeURIComponent(`New Project Inquiry — Shreeji IT Solution (${name || 'Direct Inquiry'})`);
  const body = encodeURIComponent(
`New Project Inquiry — Shreeji IT Solution

Full Name:
${name}

Email:
${email}

Phone:
${phone}

Company:
${company}

Service Interested In:
${service}

Project Description:
${message}
`
  );

  return `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;
}

/**
 * Submits contact form data to FormSubmit.co from the frontend.
 * Only reports success when the FormSubmit endpoint returns a genuine 200 OK
 * and verified confirmation.
 *
 * @param {Object} formData
 * @returns {Promise<{success: boolean, message?: string, error?: string, mailtoUrl?: string}>}
 */
export async function submitContactForm(formData) {
  const mailtoFallback = buildMailtoUrl(formData);

  try {
    const payload = {
      name: formData.name?.trim() || '',
      email: formData.email?.trim() || '',
      phone: formData.phone?.trim() || 'Not provided',
      company: formData.company?.trim() || 'Not provided',
      service: formData.service || 'General Inquiry',
      message: formData.message?.trim() || '',
      // FormSubmit specific configuration fields:
      _subject: 'New Project Inquiry — Shreeji IT Solution',
      _template: 'table',
      _captcha: 'false',
      _honey: formData._honey || ''
    };

    // Primary attempt: FormSubmit AJAX endpoint
    let response = await fetch(FORMSUBMIT_AJAX_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    // Secondary attempt if AJAX endpoint failed or returned non-200
    if (!response.ok) {
      response = await fetch(FORMSUBMIT_STANDARD_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });
    }

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    const data = await response.json();

    // Verify true success from FormSubmit response
    if (data && (data.success === 'true' || data.success === true || (response.ok && data.message && !data.message.toLowerCase().includes('error')))) {
      return {
        success: true,
        message: 'Thank you! Your message has been submitted successfully. We will get back to you soon.'
      };
    }

    // If FormSubmit indicated failure in JSON response
    throw new Error(data?.message || 'FormSubmit rejected submission');
  } catch (error) {
    console.error('FormSubmit submission error:', error);
    return {
      success: false,
      error: 'Unable to submit your message right now.',
      mailtoUrl: mailtoFallback
    };
  }
}
