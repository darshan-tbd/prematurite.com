'use client';

import React from 'react';
import { Heart, Activity } from 'lucide-react';
import ServiceCard from '@/components/ui/ServiceCard';
import DisclaimerBox from '@/components/ui/DisclaimerBox';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/animation/ScrollReveal';
import servicesData from '@/data/services.json';

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16 md:space-y-24" id="services-page">
      
      {/* 1. HERO SECTION */}
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <ScrollReveal direction="up">
          <span className="text-xs md:text-sm font-sans font-bold tracking-widest uppercase text-brand-coral">
            Educational Services
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-extrabold text-brand-deep mt-2 tracking-tight">
            Educational Topics & Care Guides
          </h1>
          <p className="text-brand-brown text-base md:text-lg leading-relaxed mt-4">
            Prematurite Digital Health provides evidence-based educational materials covering premature baby care, NICU support, feeding awareness, and growth monitoring.
          </p>
        </ScrollReveal>
      </section>

      {/* 2. GRID OF 12 SERVICES */}
      <section className="space-y-10">
        <ScrollReveal direction="up">
          <SectionHeading
            subtitle="Topic Directories"
            title="Browse Our 12 Core Education Programs"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ScrollReveal key={service.slug} direction="up" delay={index * 0.05}>
              <ServiceCard service={service} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* NEW CONTENT: EDUCATIONAL SERVICE FRAMEWORK */}
      <section className="bg-brand-rose/20 rounded-3xl p-8 md:p-12 border border-brand-coral/15 space-y-8 animate-fade-in">
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs md:text-sm font-sans font-bold tracking-widest uppercase text-brand-coral">
            Educational Design
          </span>
          <h2 className="text-2xl md:text-3xl font-display font-extrabold text-brand-deep">
            Our Digital Health Education Framework
          </h2>
          <p className="text-brand-brown text-sm leading-relaxed">
            All 12 core care topics are structured using a specific educational framework to ensure optimal learning outcomes for families.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-brand-white border border-brand-coral/10 rounded-2xl p-6 space-y-3 shadow-soft">
            <h3 className="font-display font-bold text-brand-deep text-base">
              Target Caregiver Audience
            </h3>
            <p className="text-brand-brown text-xs md:text-sm leading-relaxed">
              Designed specifically for parents, grandparents, and immediate home caregivers in India who are navigating the transition from intensive hospital settings to home environments.
            </p>
          </div>
          <div className="bg-brand-white border border-brand-coral/10 rounded-2xl p-6 space-y-3 shadow-soft">
            <h3 className="font-display font-bold text-brand-deep text-base">
              Accessible Formats
            </h3>
            <p className="text-brand-brown text-xs md:text-sm leading-relaxed">
              Delivered through mobile-first text, searchable directory grids, printable question sheets, and offline-compatible log calculators to fit into busy hospital routines.
            </p>
          </div>
          <div className="bg-brand-white border border-brand-coral/10 rounded-2xl p-6 space-y-3 shadow-soft">
            <h3 className="font-display font-bold text-brand-deep text-base">
              Cognitive Stress Reduction
            </h3>
            <p className="text-brand-brown text-xs md:text-sm leading-relaxed">
              Focuses on building confidence and reducing anxiety by explaining complex medical terms simply and providing actionable boundaries logs and checklists.
            </p>
          </div>
        </div>
      </section>

      {/* 3. MEDICAL DISCLAIMER & SUPPORT POSITIONING */}
      <section className="space-y-6 max-w-3xl mx-auto">
        <DisclaimerBox />
        <ScrollReveal direction="up" className="text-center pt-4">
          <p className="text-brand-brown text-xs md:text-sm max-w-xl mx-auto mb-6">
            Our topics are developed under the advice of clinical guidelines. We do not provide clinical diagnostics, treatment formulas, or online prescriptions. Please consult your pediatrician for all baby care decisions.
          </p>
        </ScrollReveal>
      </section>

    </div>
  );
}
