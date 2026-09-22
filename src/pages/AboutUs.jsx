import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Target, Compass, Users, Layers, ShieldCheck, User } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { servicesData } from '../data/services';
import WhatsAppButton from '../components/WhatsAppButton';
import { DEFAULT_MESSAGES } from '../utils/whatsapp';

export default function AboutUs() {
  const approachSteps = [
    { title: '1. Understand', desc: 'Thorough discovery to comprehend your exact business workflows, bottlenecks, and goals.' },
    { title: '2. Plan', desc: 'Architecting the feature roadmap, milestone timeline, budget, and deliverables.' },
    { title: '3. Design', desc: 'Crafting clean wireframes, intuitive interfaces, and responsive user flows.' },
    { title: '4. Develop', desc: 'Writing clean, maintainable code using robust, modern engineering standards.' },
    { title: '5. Test', desc: 'Rigorous validation across browsers, device viewports, performance, and usability.' },
    { title: '6. Deliver', desc: 'Smooth production handover, deployment configuration, and clear documentation.' },
    { title: '7. Support', desc: 'Ongoing technical maintenance and updates to ensure reliable operation.' }
  ];

  const whoWeServeList = [
    'Small businesses seeking a modern, trustworthy digital presence',
    'Emerging startups building MVPs and customer portals',
    'Local businesses modernizing their booking and customer inquiries',
    'Enterprises & organizations needing custom internal software',
    'Independent professionals & consultants establishing authority',
    'Growing businesses automating repetitive operational tasks'
  ];

  return (
    <main className="py-12 md:py-20 bg-white">
      {/* Top Breadcrumb & Title (No large hero image) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-slate-200 pb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold mb-4">
            <span>Company Profile</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
            About Shreeji IT Solution
          </h1>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            A Vasad-based technology provider dedicated to creating dependable software, modern web solutions, and practical automation for growing businesses.
          </p>
        </div>

        {/* Narrative & Point-wise Sections */}
        <div className="mt-12 space-y-16">
          {/* Section 1: Our Beginning */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-600" />
              <span>Our Beginning</span>
            </h2>
            <p className="text-slate-700 leading-relaxed text-base">
              Shreeji IT Solution Pvt. Ltd. was founded in 2025 in Vasad, Gujarat by Kishan Solanki. The company was conceived with a clear, grounded purpose: to make professional IT services and modern digital development accessible, transparent, and practical for businesses that need genuine results rather than technical jargon.
            </p>
            <ul className="space-y-3 pt-2">
              <li className="flex items-start gap-3 text-slate-700 text-sm sm:text-base">
                <CheckCircle2 className="w-5 h-5 text-brand-600 mt-0.5 flex-shrink-0" />
                <span><strong>Founded in 2025:</strong> Established in Vasad, Anand district, Gujarat.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700 text-sm sm:text-base">
                <CheckCircle2 className="w-5 h-5 text-brand-600 mt-0.5 flex-shrink-0" />
                <span><strong>Accessible IT:</strong> Started with the explicit goal of making practical IT solutions accessible to businesses of all sizes.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700 text-sm sm:text-base">
                <CheckCircle2 className="w-5 h-5 text-brand-600 mt-0.5 flex-shrink-0" />
                <span><strong>Grounded Growth:</strong> Began with a single successful project and steadily expanded service capabilities to match evolving client demands.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700 text-sm sm:text-base">
                <CheckCircle2 className="w-5 h-5 text-brand-600 mt-0.5 flex-shrink-0" />
                <span><strong>Expanded Scope:</strong> Today delivering comprehensive web, mobile, desktop, UI/UX, and automation solutions.</span>
              </li>
            </ul>
          </section>

          {/* Section 2: Our Vision */}
          <section className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <Target className="w-6 h-6 text-brand-600" />
              <span>Our Vision</span>
            </h2>
            <p className="text-slate-700 leading-relaxed text-base">
              To be a trusted and pragmatic technology ally for businesses, eliminating the confusion around digital adoption and providing software that delivers tangible operational value.
            </p>
            <ul className="space-y-3 pt-1">
              <li className="flex items-start gap-3 text-slate-700 text-sm sm:text-base">
                <span className="w-2 h-2 rounded-full bg-brand-600 mt-2 flex-shrink-0" />
                <span>Help businesses use modern technology effectively to stay competitive.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700 text-sm sm:text-base">
                <span className="w-2 h-2 rounded-full bg-brand-600 mt-2 flex-shrink-0" />
                <span>Build practical, dependable, and high-performing digital solutions without unnecessary bloat.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-700 text-sm sm:text-base">
                <span className="w-2 h-2 rounded-full bg-brand-600 mt-2 flex-shrink-0" />
                <span>Make technology easier to understand, manage, and leverage for business owners.</span>
              </li>
            </ul>
          </section>

          {/* Section 3: Our Mission */}
          <section className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <Compass className="w-6 h-6 text-brand-600" />
              <span>Our Mission</span>
            </h2>
            <p className="text-slate-700 leading-relaxed text-base">
              Our mission is driven by 5 key operating pillars:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-brand-700 font-bold block text-sm mb-1">1. Understand Business Needs</span>
                <p className="text-xs sm:text-sm text-slate-600">Deeply assess actual operational requirements before writing code.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-brand-700 font-bold block text-sm mb-1">2. Build Suitable Solutions</span>
                <p className="text-xs sm:text-sm text-slate-600">Architect systems scaled to current objectives with room for smooth growth.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-brand-700 font-bold block text-sm mb-1">3. Transparent Communication</span>
                <p className="text-xs sm:text-sm text-slate-600">Honest project updates, clear scope terms, and straightforward milestone pricing.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-brand-700 font-bold block text-sm mb-1">4. Quality &amp; Usability</span>
                <p className="text-xs sm:text-sm text-slate-600">Clean codebases, responsive layouts, and intuitive interfaces anyone can use.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 sm:col-span-2">
                <span className="text-brand-700 font-bold block text-sm mb-1">5. Deliver Cost-Conscious Solutions</span>
                <p className="text-xs sm:text-sm text-slate-600">Provide high-tier digital engineering that respects client budget constraints.</p>
              </div>
            </div>
          </section>

          {/* Section 4: What We Do */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <Layers className="w-6 h-6 text-brand-600" />
                <span>What We Do</span>
              </h2>
              <Link to="/#services" className="text-sm font-semibold text-brand-600 hover:text-brand-700">
                View All Details &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {servicesData.map((svc) => (
                <div key={svc.id} className="p-5 rounded-xl border border-slate-200 bg-white hover:border-brand-300 transition-colors">
                  <h3 className="font-bold text-slate-900 text-base">{svc.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{svc.shortDescription}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: Our Approach */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-brand-600" />
              <span>Our Approach</span>
            </h2>
            <div className="space-y-3">
              {approachSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="w-8 h-8 rounded-lg bg-brand-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">{step.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 6: Who We Serve */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <Users className="w-6 h-6 text-brand-600" />
              <span>Who We Serve</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We collaborate with organizations across Gujarat and remote clients across industries seeking straightforward, reliable IT execution:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {whoWeServeList.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-100 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Founder Link & Contact CTA Box */}
          <div className="p-8 rounded-2xl bg-slate-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-xs uppercase font-semibold text-brand-400 tracking-wider">Leadership</div>
              <h3 className="text-xl font-bold mt-1">Want to know more about our founder?</h3>
              <p className="text-sm text-slate-400 mt-1">
                Learn about Kishan Solanki's vision and development philosophy.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/founder-profile"
                className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
              >
                <User className="w-4 h-4" />
                <span>Founder Profile</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/lets-talk"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-2.5 rounded-lg text-sm border border-white/20 transition-colors"
              >
                <span>Let's Talk</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <WhatsAppButton variant="floating" message={DEFAULT_MESSAGES.general} />
    </main>
  );
}
