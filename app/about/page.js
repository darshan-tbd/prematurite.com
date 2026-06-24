'use client';

import React from 'react';
import { Heart, Compass, Shield, Award, Users } from 'lucide-react';
import Button from '@/components/ui/Button';
import DisclaimerBox from '@/components/ui/DisclaimerBox';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/animation/ScrollReveal';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16 md:space-y-24" id="about-page">
      
      {/* 1. HERO SECTION */}
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <ScrollReveal direction="up">
          <span className="text-xs md:text-sm font-sans font-bold tracking-widest uppercase text-brand-coral">
            About Us
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-extrabold text-brand-deep mt-2 tracking-tight">
            Educating and Supporting Indian Families Since 2003
          </h1>
          <p className="text-brand-brown text-base md:text-lg leading-relaxed mt-4">
            Prematurite Digital Health is an education-first platform dedicated to translating complex neonatal medicine into simple, comforting, and actionable guidelines for parents of preterm infants.
          </p>
        </ScrollReveal>
      </section>

      {/* 2. HISTORY & POSITIONING */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <ScrollReveal direction="right">
          <h2 className="text-2xl md:text-3xl font-display font-extrabold text-brand-deep">
            A Digital Identity Rooted in Prematurity Awareness
          </h2>
          <p className="text-brand-brown text-sm md:text-base leading-relaxed mt-4">
            Our domain, prematurite.com, has carried a focused digital presence since April twenty-six, 2003. Shaped into a modern educational resource for premature baby care, we represent over two decades of online history dedicated to promoting early infant health awareness in India.
          </p>
          <p className="text-brand-brown text-sm md:text-base leading-relaxed mt-3">
            In India, premature birth represents a significant public health challenge, impacting millions of families annually. By providing parent-focused digital guides on NICU transitions, feeding coordination, corrected age calculations, and hygiene protocols, we empower families to participate confidently in their infant's care.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="left" className="bg-brand-rose/40 rounded-3xl p-8 border border-brand-coral/15 space-y-6">
          <h3 className="font-display font-bold text-brand-deep text-lg">
            Responsible Health Communication
          </h3>
          <p className="text-brand-brown text-sm leading-relaxed">
            We hold a strict policy regarding medical writing. We do not diagnose conditions, prescribe medications, or recommend specific medical treatments. Instead, we advocate for structural care hygiene, detailed observation logs, and proactive pediatrician collaboration.
          </p>
          <DisclaimerBox className="bg-brand-white/80" />
        </ScrollReveal>
      </section>

      {/* 3. MISSION, VISION, & VALUES */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ScrollReveal direction="up" delay={0.1} className="bg-brand-white border border-brand-coral/15 rounded-3xl p-6 md:p-8 shadow-soft text-center space-y-4">
          <div className="bg-brand-coral/10 p-3 rounded-2xl w-12 h-12 flex items-center justify-center text-brand-coral mx-auto">
            <Heart className="w-6 h-6" />
          </div>
          <h3 className="font-display font-bold text-brand-deep text-lg">Our Mission</h3>
          <p className="text-brand-brown text-sm leading-relaxed">
            To provide Indian families with clear, accessible, and scientifically grounded educational resources that make premature baby care stress-free and supportive.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2} className="bg-brand-white border border-brand-coral/15 rounded-3xl p-6 md:p-8 shadow-soft text-center space-y-4">
          <div className="bg-brand-coral/10 p-3 rounded-2xl w-12 h-12 flex items-center justify-center text-brand-coral mx-auto">
            <Compass className="w-6 h-6" />
          </div>
          <h3 className="font-display font-bold text-brand-deep text-lg">Our Vision</h3>
          <p className="text-brand-brown text-sm leading-relaxed">
            To see every preterm infant in India receive optimal home care through educated, emotionally supported, and empowered parent networks.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3} className="bg-brand-white border border-brand-coral/15 rounded-3xl p-6 md:p-8 shadow-soft text-center space-y-4">
          <div className="bg-brand-coral/10 p-3 rounded-2xl w-12 h-12 flex items-center justify-center text-brand-coral mx-auto">
            <Shield className="w-6 h-6" />
          </div>
          <h3 className="font-display font-bold text-brand-deep text-lg">Our Core Values</h3>
          <p className="text-brand-brown text-sm leading-relaxed">
            We are committed to absolute medical verification, parent-centered empathy, clean design accessibility, and structural support alignment.
          </p>
        </ScrollReveal>
      </section>

      {/* NEW CONTENT: DOMAIN HISTORY TIMELINE */}
      <section className="space-y-12">
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs md:text-sm font-sans font-bold tracking-widest uppercase text-brand-coral">
            Our Journey
          </span>
          <h2 className="text-2xl md:text-4xl font-display font-extrabold text-brand-deep">
            Chronology of prematurite.com (2003 - 2026)
          </h2>
          <p className="text-brand-brown text-sm md:text-base leading-relaxed">
            For over two decades, our domain has maintained a dedicated online path, evolving alongside modern neonatology.
          </p>
        </ScrollReveal>

        <div className="relative border-l border-brand-coral/30 ml-4 md:ml-12 pl-6 md:pl-10 space-y-8 max-w-4xl mx-auto">
          {/* Milestone 1 */}
          <div className="relative">
            <div className="absolute -left-[25px] md:-left-[41px] top-1.5 bg-brand-coral w-4 h-4 rounded-full border-4 border-brand-white shadow-soft" />
            <h3 className="font-display font-bold text-brand-deep text-base md:text-lg">
              April 2003 — Domain Registration
            </h3>
            <p className="text-brand-brown text-xs md:text-sm leading-relaxed mt-1">
              prematurite.com was registered, establishing a dedicated online resource focused on raising early awareness of premature birth and neonatal care in the digital space.
            </p>
          </div>

          {/* Milestone 2 */}
          <div className="relative">
            <div className="absolute -left-[25px] md:-left-[41px] top-1.5 bg-brand-coral w-4 h-4 rounded-full border-4 border-brand-white shadow-soft" />
            <h3 className="font-display font-bold text-brand-deep text-base md:text-lg">
              September 2010 — First Educational Guide Launch
            </h3>
            <p className="text-brand-brown text-xs md:text-sm leading-relaxed mt-1">
              Expanded our digital footprint by publishing clear, parent-focused articles explaining standard incubator operations and medical terms to reduce family anxiety.
            </p>
          </div>

          {/* Milestone 3 */}
          <div className="relative">
            <div className="absolute -left-[25px] md:-left-[41px] top-1.5 bg-brand-coral w-4 h-4 rounded-full border-4 border-brand-white shadow-soft" />
            <h3 className="font-display font-bold text-brand-deep text-base md:text-lg">
              November 2018 — Mobile Care Resources Initiative
            </h3>
            <p className="text-brand-brown text-xs md:text-sm leading-relaxed mt-1">
              Re-engineered content layouts to ensure high compatibility with mobile browsers, enabling parents in hospital waiting rooms to read quick care guides easily.
            </p>
          </div>

          {/* Milestone 4 */}
          <div className="relative">
            <div className="absolute -left-[25px] md:-left-[41px] top-1.5 bg-brand-coral w-4 h-4 rounded-full border-4 border-brand-white shadow-soft" />
            <h3 className="font-display font-bold text-brand-deep text-base md:text-lg">
              March 2024 — Digital Health Tool Integrations
            </h3>
            <p className="text-brand-brown text-xs md:text-sm leading-relaxed mt-1">
              Began developing digital tools like gestational age calculators, corrected milestone planners, and sanitization check sheets to support structural parenting.
            </p>
          </div>

          {/* Milestone 5 */}
          <div className="relative">
            <div className="absolute -left-[25px] md:-left-[41px] top-1.5 bg-brand-coral w-4 h-4 rounded-full border-4 border-brand-white shadow-soft" />
            <h3 className="font-display font-bold text-brand-deep text-base md:text-lg">
              June 2026 — Fully Responsive Next.js Web App
            </h3>
            <p className="text-brand-brown text-xs md:text-sm leading-relaxed mt-1">
              Deployed a modern, high-speed, animation-rich static Next.js platform, compiling 45 static routes with complete parent checklists and interactive math simulators.
            </p>
          </div>
        </div>
      </section>

      {/* NEW CONTENT: VERIFICATION & SOURCING STANDARDS */}
      <section className="bg-brand-rose/40 rounded-3xl p-8 md:p-12 border border-brand-coral/15 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-fade-in">
        <ScrollReveal direction="right" className="space-y-4">
          <span className="text-xs md:text-sm font-sans font-bold tracking-widest uppercase text-brand-coral block">
            Quality Assurance
          </span>
          <h2 className="text-2xl font-display font-extrabold text-brand-deep">
            Verification & Sourcing Standards
          </h2>
          <p className="text-brand-brown text-sm leading-relaxed">
            To ensure parent safety and accuracy, we maintain strict editorial boundaries. Every article, milestone chart, and care guide published on prematurite.com goes through our thorough validation protocol before publication.
          </p>
          <p className="text-brand-brown text-sm leading-relaxed">
            We cross-reference all descriptions with updated guidelines from major pediatric and neonatal health institutions. We rewrite complex clinical jargon into supportive, Indian English phrasing, matching the cultural and logistical context of Indian households.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="left" className="bg-brand-white border border-brand-coral/10 rounded-2xl p-6 md:p-8 space-y-4 shadow-soft">
          <h3 className="font-display font-bold text-brand-deep text-base">
            Content Validation Checklist
          </h3>
          <ul className="space-y-3 text-xs md:text-sm text-brand-brown">
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-coral flex-shrink-0 mt-1.5 mr-2" />
              <span>Cross-checked with WHO Preterm Birth Management Protocols.</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-coral flex-shrink-0 mt-1.5 mr-2" />
              <span>Aligned with the Indian Academy of Pediatrics (IAP) Guidelines.</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-coral flex-shrink-0 mt-1.5 mr-2" />
              <span>Verifies zero clinical recommendations, treatment plans, or prescription text.</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-coral flex-shrink-0 mt-1.5 mr-2" />
              <span>Enforces visible pediatric contact warnings across all sections.</span>
            </li>
          </ul>
        </ScrollReveal>
      </section>

      {/* 4. EDUCATIONAL APPROACH */}
      <section className="bg-brand-rose/20 rounded-3xl p-8 md:p-12 border border-brand-coral/15">
        <ScrollReveal direction="up">
          <SectionHeading
            subtitle="Pedagogy"
            title="Our Educational Approach"
            centered={false}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-brand-brown text-sm md:text-base leading-relaxed">
            <div className="space-y-4">
              <p>
                <strong>Simplified Medical Concepts:</strong> We break down complex terms like cardiorespiratory monitoring, corrected gestational age, and bronchopulmonary dysplasia into clear, parent-friendly descriptions without diluting the core safety message.
              </p>
              <p>
                <strong>Actionable Checklists:</strong> We provide structured tables and checklists for pediatric follow-ups, home sanitation, and thermal tracking, giving parents clear tasks to perform.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                <strong>Empathetic and Positive Tone:</strong> We avoid fear-based framing, recognizing that parents are already experiencing emotional strain. Our content is written to build parenting confidence and calm reassurance.
              </p>
              <p>
                <strong>Pediatrician-Centric Structure:</strong> Every educational guide ends with clear directives on when to contact a qualified medical professional, ensuring parents always loop in their clinical team.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 5. CONTACT CTA */}
      <section className="text-center space-y-6">
        <ScrollReveal direction="up">
          <h2 className="text-2xl md:text-3xl font-display font-extrabold text-brand-deep">
            Have questions about our resources?
          </h2>
          <p className="text-brand-brown text-sm md:text-base max-w-xl mx-auto">
            Our team is committed to developing new educational guides, sheets, and trackers. Contact us if you have suggestions or questions.
          </p>
          <div className="pt-4">
            <Button href="/contact/" id="about-contact-btn">
              Get in Touch
            </Button>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
