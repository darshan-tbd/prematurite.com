'use client';

import React from 'react';
import { Mail, AlertTriangle, ShieldAlert } from 'lucide-react';
import ContactForm from '@/components/ui/ContactForm';
import InquiryForm from '@/components/ui/InquiryForm';
import DisclaimerBox from '@/components/ui/DisclaimerBox';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/animation/ScrollReveal';
import companyData from '@/data/company.json';

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16 md:space-y-24" id="contact-page">
      
      {/* 1. HERO SECTION */}
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <ScrollReveal direction="up">
          <span className="text-xs md:text-sm font-sans font-bold tracking-widest uppercase text-brand-coral">
            Get in Touch
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-extrabold text-brand-deep mt-2 tracking-tight">
            Contact & Support
          </h1>
          <p className="text-brand-brown text-base md:text-lg leading-relaxed mt-4">
            Connect with our team to request print guides, suggest educational topics, or send general site inquiries.
          </p>
        </ScrollReveal>
      </section>

      {/* 2. EMERGENCY ALIGNMENT NOTE */}
      <section className="bg-red-50 border border-red-200 rounded-3xl p-6 md:p-8 shadow-soft">
        <div className="flex items-start space-x-4">
          <div className="bg-red-100 p-3 rounded-2xl text-red-600 flex-shrink-0">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div className="space-y-2">
            <h3 className="font-display font-bold text-red-900 text-base md:text-lg">
              Critical Emergency Medical Notice
            </h3>
            <p className="text-red-800 text-sm leading-relaxed">
              Prematurite Digital Health provides educational and informational content only. We do not provide clinical treatment, diagnoses, online prescriptions, or medical emergency consultations. **For urgent or emergency medical situations, please contact your nearest hospital, pediatrician, neonatologist, or emergency service immediately.**
            </p>
          </div>
        </div>
      </section>

      {/* 3. DETAILS & FORMS GRID */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Contact Info Column */}
        <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
          <div className="bg-brand-white border border-brand-coral/15 rounded-3xl p-6 md:p-8 shadow-soft space-y-6">
            <h3 className="font-display font-bold text-brand-deep text-lg border-b border-brand-coral/10 pb-3">
              Contact Details
            </h3>

            <ul className="space-y-4 text-brand-brown text-sm">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-brand-coral mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-brand-deep block font-display">Email Address</strong>
                  <a href={`mailto:${companyData.email}`} className="hover:text-brand-coral">
                    {companyData.email}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Forms Column */}
        <div className="lg:col-span-8 space-y-12">
          {/* Main Contact Form */}
          <div className="bg-brand-white border border-brand-coral/15 rounded-3xl p-6 md:p-8 shadow-soft">
            <h3 className="font-display font-bold text-brand-deep text-xl border-b border-brand-coral/10 pb-3 mb-6">
              General Contact Form
            </h3>
            <ContactForm />
          </div>

          {/* Quick Inquiry Form */}
          <InquiryForm />
        </div>
      </section>

      {/* NEW CONTENT: INQUIRY RESOLUTION & HELPLINE FAQs */}
      <section className="bg-brand-rose/10 border border-brand-coral/15 rounded-3xl p-6 md:p-8 space-y-6 animate-fade-in">
        <ScrollReveal direction="up" className="space-y-2 text-center max-w-3xl mx-auto">
          <span className="text-xs md:text-sm font-sans font-bold tracking-widest uppercase text-brand-coral">
            Inquiry Guidance
          </span>
          <h2 className="text-xl md:text-3xl font-display font-extrabold text-brand-deep">
            How We Handle Your Queries & Feedback
          </h2>
          <p className="text-brand-brown text-sm leading-relaxed">
            Please read these guidelines to understand the scope of our helpline communications.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <div className="space-y-4">
            <h3 className="font-display font-bold text-brand-deep text-base">
              Queries We Respond To:
            </h3>
            <ul className="space-y-3 text-xs md:text-sm text-brand-brown">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-coral flex-shrink-0 mt-1.5 mr-2" />
                <span>**Resource Requests:** Inquiries regarding printable milestone checklists, sanitization logs, and feeding schedules.</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-coral flex-shrink-0 mt-1.5 mr-2" />
                <span>**Educational Suggestions:** Requests for new topics, terms, or calculators that our editorial team should cover.</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-coral flex-shrink-0 mt-1.5 mr-2" />
                <span>**Technical Support:** Help regarding website display bugs, PDF downloads, or form submission errors.</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-display font-bold text-brand-deep text-base text-red-700">
              Queries We Strictly Reject:
            </h3>
            <ul className="space-y-3 text-xs md:text-sm text-brand-brown">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0 mt-1.5 mr-2" />
                <span className="text-red-900 font-medium">**Clinical Diagnoses:** E.g., "My baby weighs 1.5kg, are they breathing normally?"</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0 mt-1.5 mr-2" />
                <span className="text-red-900 font-medium">**Medication Adjustments:** Requests regarding drug dosages, brand names, or formula changes.</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0 mt-1.5 mr-2" />
                <span className="text-red-900 font-medium">**Emergency Advice:** Queries during infant respiratory pauses or temperature drop emergencies. Contact hospitals immediately instead.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. DISCLAIMER BOX */}
      <section className="max-w-3xl mx-auto">
        <DisclaimerBox />
      </section>

    </div>
  );
}
