'use client';

import React, { useState } from 'react';
import { Briefcase, Heart } from 'lucide-react';
import JobCard from '@/components/ui/JobCard';
import CareerForm from '@/components/ui/CareerForm';
import DisclaimerBox from '@/components/ui/DisclaimerBox';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/animation/ScrollReveal';
import careersData from '@/data/careers.json';

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setIsFormOpen(true);
  };

  const handleFormClose = () => {
    setSelectedJob(null);
    setIsFormOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16 md:space-y-24" id="careers-page">
      
      {/* 1. HERO SECTION */}
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <ScrollReveal direction="up">
          <span className="text-xs md:text-sm font-sans font-bold tracking-widest uppercase text-brand-coral">
            Join Our Team
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-extrabold text-brand-deep mt-2 tracking-tight">
            Careers at Prematurite
          </h1>
          <p className="text-brand-brown text-base md:text-lg leading-relaxed mt-4">
            Help us develop and scale India's premium parent education platform for premature baby care and neonatal health awareness.
          </p>
        </ScrollReveal>
      </section>

      {/* 2. CAREER INTRODUCTION */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <ScrollReveal direction="right" className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-display font-extrabold text-brand-deep">
            Work with Purpose
          </h2>
          <p className="text-brand-brown text-sm md:text-base leading-relaxed">
            At Prematurite Digital Health, we believe that clear, compassionate health education can transform the experience of families navigating preterm birth. Our remote team works to research clinical guides, write supportive articles, design intuitive interfaces, and build responsive applications.
          </p>
          <p className="text-brand-brown text-sm md:text-base leading-relaxed">
            If you are passionate about digital health education, neonatal care awareness, or public health communications, explore our active job openings below.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="left" className="bg-brand-rose/40 rounded-3xl p-6 border border-brand-coral/15 space-y-4">
          <h3 className="font-display font-bold text-brand-deep text-base">
            Our Working Culture
          </h3>
          <ul className="space-y-2 text-xs md:text-sm text-brand-brown">
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-coral flex-shrink-0 mt-1.5 mr-2" />
              <span>100% remote flexibility with team members across India.</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-coral flex-shrink-0 mt-1.5 mr-2" />
              <span>Collaborative workflows combining design, engineering, and health communication.</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-coral flex-shrink-0 mt-1.5 mr-2" />
              <span>A shared commitment to medical accuracy, verification, and parent empathy.</span>
            </li>
          </ul>
        </ScrollReveal>
      </section>

      {/* 3. OPENINGS LIST */}
      <section className="space-y-10">
        <ScrollReveal direction="up">
          <SectionHeading
            subtitle="Job Opportunities"
            title="Explore Active Openings"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {careersData.map((job, index) => (
            <ScrollReveal key={job.id} direction="up" delay={index * 0.05}>
              <JobCard job={job} onApply={handleApplyClick} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* NEW CONTENT: CANDIDATE EVALUATION & INTERVIEW MILESTONES */}
      <section className="bg-brand-rose/20 border border-brand-coral/15 rounded-3xl p-6 md:p-8 space-y-6 animate-fade-in">
        <ScrollReveal direction="up" className="space-y-2 text-center max-w-3xl mx-auto">
          <span className="text-xs md:text-sm font-sans font-bold tracking-widest uppercase text-brand-coral">
            Hiring Process
          </span>
          <h2 className="text-xl md:text-3xl font-display font-extrabold text-brand-deep">
            Our Recruitment Journey & Evaluation Framework
          </h2>
          <p className="text-brand-brown text-sm leading-relaxed">
            We maintain a thorough 3-step evaluation path to ensure all team members align with our medical accuracy and empathetic writing values.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="bg-brand-white border border-brand-coral/10 rounded-2xl p-5 space-y-2 shadow-soft">
            <span className="text-xs font-sans font-bold text-brand-coral uppercase block">Stage 1: Portfolio & Verification Review</span>
            <p className="text-brand-brown text-xs md:text-sm leading-relaxed">
              We check your writing portfolio for experience with health literacy, structured copywriting style guidelines, or public health communications.
            </p>
          </div>
          <div className="bg-brand-white border border-brand-coral/10 rounded-2xl p-5 space-y-2 shadow-soft">
            <span className="text-xs font-sans font-bold text-brand-coral uppercase block">Stage 2: Writing & Boundary Assessment</span>
            <p className="text-brand-brown text-xs md:text-sm leading-relaxed">
              Candidates complete a remote copywriting exercise translating a clinical pediatric abstract into a clear, parent-friendly guide.
            </p>
          </div>
          <div className="bg-brand-white border border-brand-coral/10 rounded-2xl p-5 space-y-2 shadow-soft">
            <span className="text-xs font-sans font-bold text-brand-coral uppercase block">Stage 3: Cultural & Purpose Fit Review</span>
            <p className="text-brand-brown text-xs md:text-sm leading-relaxed">
              A video conversation outlining our remote workflow, family-centric ethics, and strict compliance with our non-clinical disclaimer limits.
            </p>
          </div>
        </div>
      </section>

      {/* NEW CONTENT: FUTURE OPENINGS & VOLUNTEER REGISTRY */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-brand-white border border-brand-coral/15 rounded-3xl p-6 md:p-8 shadow-soft animate-fade-in">
        <ScrollReveal direction="right" className="space-y-4">
          <h3 className="font-display font-bold text-brand-deep text-lg md:text-xl">
            Volunteer & Intern Registry
          </h3>
          <p className="text-brand-brown text-xs md:text-sm leading-relaxed">
            Are you a student in public health, nursing, or communication design? We plan to open virtual internship and volunteer research programs in late 2026. Registered interns will help draft directory resources and sanitize checklist files under editorial supervision.
          </p>
        </ScrollReveal>
        <ScrollReveal direction="left" className="bg-brand-rose/40 rounded-2xl p-6 border border-brand-coral/10 text-center space-y-3">
          <h4 className="font-display font-bold text-brand-deep text-sm md:text-base">
            Express Your Interest Early
          </h4>
          <p className="text-brand-brown text-xs">
            Send an email to **careers@prematurite.com** with your academic focus area. We will keep your registry file active for future openings.
          </p>
        </ScrollReveal>
      </section>

      {/* 4. CAREER APPLICATION FORM MODAL */}
      <CareerForm
        job={selectedJob}
        isOpen={isFormOpen}
        onClose={handleFormClose}
      />

      {/* 5. DISCLAIMER */}
      <section className="max-w-3xl mx-auto">
        <DisclaimerBox />
      </section>

    </div>
  );
}
