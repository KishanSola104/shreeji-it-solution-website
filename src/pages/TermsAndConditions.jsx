import React from 'react';
import { Shield, AlertTriangle, Mail, Phone, MapPin } from 'lucide-react';
import { contactInfo } from '../data/navigation';
import WhatsAppButton from '../components/WhatsAppButton';
import { DEFAULT_MESSAGES } from '../utils/whatsapp';

export default function TermsAndConditions() {
  return (
    <main className="py-12 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title */}
        <div className="border-b border-slate-200 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold mb-3">
            <span>Business Terms</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Terms &amp; Conditions
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Operating Guidelines and Service Terms for Shreeji IT Solution Pvt. Ltd.
          </p>
        </div>

        {/* Mandatory Visible Legal Disclaimer Notice */}
        <div className="my-8 p-4 sm:p-5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-3 text-xs sm:text-sm">
          <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <strong className="block font-semibold mb-0.5">Important Legal Notice:</strong>
            <p>
              These terms are provided as a general business template and should be reviewed and adapted with qualified legal advice before being used as a binding contractual document for specific engagements.
            </p>
          </div>
        </div>

        {/* 22 Sections */}
        <div className="space-y-10 text-slate-700 text-sm sm:text-base leading-relaxed">
          {/* 1. Introduction */}
          <section className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900">1. Introduction</h2>
            <p>
              These terms govern the use of the website and engagement of IT services provided by <strong>Shreeji IT Solution Pvt. Ltd.</strong> (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;). By accessing our website or engaging our services, you agree to these standard operating conditions.
            </p>
          </section>

          {/* 2. Scope of Services */}
          <section className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900">2. Scope of Services</h2>
            <p>
              Our offerings include web development, mobile application development, desktop software, UI/UX design, custom software engineering, search engine optimization (SEO), AI and operational automation, and related technical consulting services.
            </p>
          </section>

          {/* 3. Project Requirements */}
          <section className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900">3. Project Requirements</h2>
            <p>
              The client agrees to provide clear, complete, and accurate specifications, visual assets, text copy, brand materials, and timely feedback necessary for project progression. Delays in furnishing required materials may directly shift project delivery milestones.
            </p>
          </section>

          {/* 4. Project Scope */}
          <section className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900">4. Project Scope</h2>
            <p>
              The formal written proposal or project scope document defines all deliverables included in a given engagement. Any features, pages, integrations, or adjustments outside the agreed scope will be evaluated separately and may entail additional fees and timeline adjustments.
            </p>
          </section>

          {/* 5. Payment Terms */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">5. Payment Terms</h2>
            <p>
              Unless explicitly amended in a signed service agreement, our standard project payment structure is organized around clear delivery milestones:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                <span className="font-bold text-brand-700 block text-lg">30% Advance</span>
                <p className="text-xs text-slate-600 mt-1">Due before development begins.</p>
              </div>
              <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                <span className="font-bold text-brand-700 block text-lg">30% Mid-Project</span>
                <p className="text-xs text-slate-600 mt-1">Due upon reaching the halfway milestone.</p>
              </div>
              <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                <span className="font-bold text-brand-700 block text-lg">40% Final Payment</span>
                <p className="text-xs text-slate-600 mt-1">Due before production deployment or handover.</p>
              </div>
            </div>
          </section>

          {/* 6. Payment Delays */}
          <section className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900">6. Payment Delays</h2>
            <p>
              Timely milestone payments ensure uninterrupted engineering attention. If a milestone invoice remains unpaid beyond the agreed due date, development may be paused until cleared, directly impacting estimated completion dates.
            </p>
          </section>

          {/* 7. Domain & Hosting */}
          <section className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900">7. Domain &amp; Hosting</h2>
            <p>
              Where domain registration or cloud hosting is bundled within a package, it is provided for the specified period (typically one calendar year). Subsequent renewals are separate and subject to prevailing registrar and hosting renewal fees unless explicitly renewed by the client.
            </p>
          </section>

          {/* 8. Content Responsibility */}
          <section className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900">8. Content Responsibility</h2>
            <p>
              The client is solely responsible for ensuring that all images, text, videos, logos, datasets, trademarks, and third-party materials supplied to us are legally authorized and free of copyright or trademark infringement.
            </p>
          </section>

          {/* 9. Third-Party Services */}
          <section className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900">9. Third-Party Services</h2>
            <p>
              Projects may incorporate third-party hosting, payment gateways, APIs, email delivery platforms, mapping providers, analytics tools, and libraries. Pricing revisions, terms changes, or operational outages by third-party providers remain outside our direct control.
            </p>
          </section>

          {/* 10. Revisions */}
          <section className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900">10. Revisions</h2>
            <p>
              The number of iterative revision cycles agreed upon in the project scope is included in the base package. Requests that fundamentally re-architect previously approved layouts or feature sets are billed as additional scope.
            </p>
          </section>

          {/* 11. Timeline */}
          <section className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900">11. Timeline</h2>
            <p>
              All delivery schedules are practical estimates based on project complexity, client feedback turnaround, content availability, third-party approvals, and milestone confirmations. We strive to meet all agreed target dates faithfully.
            </p>
          </section>

          {/* 12. Cancellation */}
          <section className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900">12. Cancellation</h2>
            <p>
              Either party may cancel an engagement in accordance with the specific written contract terms. Because resources and time are dedicated immediately upon project confirmation, advance payments may be non-refundable once substantial work has commenced, subject to applicable law.
            </p>
          </section>

          {/* 13. Intellectual Property */}
          <section className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900">13. Intellectual Property</h2>
            <p>
              Client-owned assets, content, and trademarks remain the property of the client. Upon receipt of full and final payment, ownership of custom deliverables transfers to the client according to the project contract. Open-source libraries and proprietary toolchains remain subject to their respective licenses.
            </p>
          </section>

          {/* 14. Portfolio Rights */}
          <section className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900">14. Portfolio Rights</h2>
            <p>
              Unless explicitly restricted in writing by the client prior to project kickoff, Shreeji IT Solution reserves the right to showcase completed non-confidential project snapshots and links in our digital portfolio.
            </p>
          </section>

          {/* 15. Confidentiality */}
          <section className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900">15. Confidentiality</h2>
            <p>
              Both parties agree to exercise reasonable professional care to protect proprietary business information, technical credentials, and trade secrets disclosed during the course of the engagement.
            </p>
          </section>

          {/* 16. Security */}
          <section className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900">16. Security</h2>
            <p>
              We implement industry-standard security best practices, sanitization, and encryption within the agreed project architecture. However, no digital system can guarantee absolute immunity from external cyber threats, malicious intrusion, or zero-day vulnerabilities.
            </p>
          </section>

          {/* 17. SEO Disclaimer */}
          <section className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900">17. SEO Disclaimer</h2>
            <p>
              While we implement clean, semantic on-page SEO best practices to maximize indexability, search engine ranking algorithms are autonomous. We do not guarantee specific numerical search rankings, incoming traffic volumes, or sales conversions.
            </p>
          </section>

          {/* 18. AI Services Disclaimer */}
          <section className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900">18. AI Services Disclaimer</h2>
            <p>
              AI-assisted features and machine learning models are probabilistic in nature and may occasionally produce imperfect or unexpected outputs. Mission-critical business workflows should incorporate appropriate human-in-the-loop oversight.
            </p>
          </section>

          {/* 19. Website Availability */}
          <section className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900">19. Website Availability</h2>
            <p>
              We cannot guarantee uninterrupted 100% uptime for external DNS servers, cloud infrastructure, or third-party web hosts beyond their service level agreements.
            </p>
          </section>

          {/* 20. Limitation of Liability */}
          <section className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900">20. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, Shreeji IT Solution Pvt. Ltd. shall not be liable for indirect, incidental, special, or consequential damages resulting from the use or inability to use our deliverables.
            </p>
          </section>

          {/* 21. Changes to Terms */}
          <section className="space-y-2">
            <h2 className="text-xl font-bold text-slate-900">21. Changes to Terms</h2>
            <p>
              We may revise these terms periodically to reflect operational, technological, or regulatory updates. Continued engagement with our services after revisions signifies acceptance of updated terms.
            </p>
          </section>

          {/* 22. Contact */}
          <section className="pt-6 border-t border-slate-200 space-y-4">
            <h2 className="text-xl font-bold text-slate-900">22. Contact Information</h2>
            <p>For questions or formal inquiries regarding these terms, please contact:</p>
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-sm text-slate-700">
              <p className="font-bold text-slate-900">{contactInfo.companyName}</p>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-600 flex-shrink-0" />
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-600 flex-shrink-0" />
                <a href={`tel:${contactInfo.phoneRaw}`} className="hover:text-brand-600">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-600 flex-shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-brand-600">
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>

      <WhatsAppButton variant="floating" message={DEFAULT_MESSAGES.general} />
    </main>
  );
}
