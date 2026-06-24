'use client';

import React from 'react';
import { Home, LogIn, Calendar, Users, ShieldAlert, Heart } from 'lucide-react';
import Button from '@/components/ui/Button';
import DisclaimerBox from '@/components/ui/DisclaimerBox';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/animation/ScrollReveal';

export default function PostDischargeCarePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16 md:space-y-24" id="post-discharge-page">
      
      {/* 1. HERO SECTION */}
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <ScrollReveal direction="up">
          <span className="text-xs md:text-sm font-sans font-bold tracking-widest uppercase text-brand-coral">
            Educational Guide
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-extrabold text-brand-deep mt-2 tracking-tight">
            Post-Discharge Home Care
          </h1>
          <p className="text-brand-brown text-base md:text-lg leading-relaxed mt-4">
            A comprehensive checklist to help parents transition their baby from the NICU to home, manage visitors, and schedule pediatric follow-up visits.
          </p>
        </ScrollReveal>
      </section>

      {/* 2. THE TRANSITION */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <ScrollReveal direction="right" className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-display font-extrabold text-brand-deep">
            Bringing Your Preterm Baby Home
          </h2>
          <p className="text-brand-brown text-sm md:text-base leading-relaxed">
            Leaving the hospital marks the successful completion of the NICU phase, but it marks the start of a highly vigilant care phase at home. A preterm baby's lungs, gut, and immune systems are still maturing, meaning home environments must be managed carefully.
          </p>
          <p className="text-brand-brown text-sm md:text-base leading-relaxed">
            Parents must structure their schedules around clinical follow-up appointments, prepare baby-safe nurseries, log feeding parameters daily, and maintain strict boundary controls regarding who interacts with the baby.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="left" className="bg-brand-rose/40 rounded-3xl p-8 border border-brand-coral/15 space-y-4">
          <h3 className="font-display font-bold text-brand-deep text-lg">
            Essential Discharge Criteria
          </h3>
          <p className="text-brand-brown text-sm leading-relaxed">
            Prior to discharge, the neonatal team typically verifies that the baby:
          </p>
          <ul className="space-y-2 text-xs md:text-sm text-brand-brown">
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-coral flex-shrink-0 mt-1.5 mr-2" />
              <span>Maintains body temperature in an open crib.</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-coral flex-shrink-0 mt-1.5 mr-2" />
              <span>Takes all feeds orally (breast or bottle) without breathing stress.</span>
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-coral flex-shrink-0 mt-1.5 mr-2" />
              <span>Shows steady daily weight gain.</span>
            </li>
          </ul>
        </ScrollReveal>
      </section>

      {/* 3. HOME CHECKLIST */}
      <section className="bg-brand-white border border-brand-coral/15 rounded-3xl p-8 md:p-12 shadow-soft space-y-8">
        <ScrollReveal direction="up">
          <SectionHeading
            subtitle="Home Management"
            title="The Post-Discharge Care Checklist"
            centered={false}
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-brand-brown text-sm md:text-base leading-relaxed">
          <div className="space-y-4">
            <h3 className="font-display font-bold text-brand-deep text-base">
              Nursery Setup & Heat Control
            </h3>
            <p>
              Keep the room between 22 and 24 degrees Celsius. Use a room thermometer to track fluctuations. Dress the baby in layers (one more than what adults find comfortable). Place cribs away from AC units or direct drafts.
            </p>
            <h3 className="font-display font-bold text-brand-deep text-base">
              Enforcing Boundary Control
            </h3>
            <p>
              Enforce strict rules: restrict visits to immediate family members for the first 4 to 6 weeks. Require everyone who enters the nursery to wash hands to the elbows. Do not take the baby to crowded markets or public gatherings.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-display font-bold text-brand-deep text-base">
              Scheduling Follow-up Checkups
            </h3>
            <p>
              The first pediatric follow-up is typically scheduled within 2 to 4 days of discharge. These checkups allow the pediatrician to monitor growth percentiles, adjust supplements, check breathing patterns, and plan future vaccines.
            </p>
            <h3 className="font-display font-bold text-brand-deep text-base">
              Daily Feed & Diaper logs
            </h3>
            <p>
              Keep detailed logs of feeding times, volumes, and durations. Track wet and dirty diapers. A decline in wet diapers (fewer than six in twenty-four hours) is an indicator of dehydration that requires medical review.
            </p>
          </div>
        </div>
      </section>

      {/* 4. NEW CONTENT: SANITATION CODE & VISITOR SCREENINGS */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ScrollReveal direction="right" className="bg-brand-rose/40 border border-brand-coral/15 rounded-3xl p-6 md:p-8 space-y-6">
          <h3 className="font-display font-bold text-brand-deep text-lg md:text-xl">
            Home Sanitation Code of Conduct
          </h3>
          <p className="text-brand-brown text-xs md:text-sm leading-relaxed">
            Maintaining room hygiene minimizes exposure risks during early infancy:
          </p>
          <ul className="space-y-3">
            <li className="text-brand-brown text-xs md:text-sm border-b border-brand-coral/10 pb-2">
              <strong className="text-brand-deep block font-display">Primary Caregiver Attire:</strong> Keep dedicated indoor clothes for nursing. Change out of outdoor clothes immediately when returning from visits.
            </li>
            <li className="text-brand-brown text-xs md:text-sm border-b border-brand-coral/10 pb-2">
              <strong className="text-brand-deep block font-display">Toy and Fabric Hygiene:</strong> Wash infant bedding, clothes, and wraps in mild, fragrance-free detergents at sixty degrees Celsius. Avoid soft fabrics that gather dust in the nursery.
            </li>
            <li className="text-brand-brown text-xs md:text-sm">
              <strong className="text-brand-deep block font-display">Device Sanitization:</strong> Frequently clean keys, phones, and handles with sanitizer wipes, as these items collect surface bacteria daily.
            </li>
          </ul>
        </ScrollReveal>

        <ScrollReveal direction="left" className="bg-brand-white border border-brand-coral/15 rounded-3xl p-6 md:p-8 shadow-soft space-y-6">
          <h3 className="font-display font-bold text-brand-deep text-lg md:text-xl">
            Visitor Screening Checklist
          </h3>
          <p className="text-brand-brown text-xs md:text-sm leading-relaxed">
            Parents should screen anyone entering the household. Ask these screening questions:
          </p>
          <div className="space-y-4">
            <div className="border-b border-brand-coral/10 pb-2.5">
              <strong className="text-brand-deep text-sm block">1. Do you have any active symptoms?</strong>
              <p className="text-brand-brown text-xs">Verify the absence of coughing, sneezing, sore throat, fever, runny nose, or digestive issues during the past forty-eight hours.</p>
            </div>
            <div className="border-b border-brand-coral/10 pb-2.5">
              <strong className="text-brand-deep text-sm block">2. Have you had recent exposure?</strong>
              <p className="text-brand-brown text-xs">Confirm the visitor has not been in close contact with anyone diagnosed with contagious viral respiratory conditions (e.g. RSV, influenza).</p>
            </div>
            <div>
              <strong className="text-brand-deep text-sm block">3. Hand Sanitation Agreement</strong>
              <p className="text-brand-brown text-xs">Require visitors to wash hands from fingertips to elbows with antiseptic soap before sitting near or interacting with the infant.</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* NEW CONTENT: VISITOR LOG & SANITIZATION CHECK SHEET */}
      <section className="bg-brand-white border border-brand-coral/15 rounded-3xl p-8 md:p-12 shadow-soft grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fade-in">
        <div className="lg:col-span-7 space-y-6">
          <ScrollReveal direction="right">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-coral/10 text-brand-coral border border-brand-coral/25">
              Sanitization Tools
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-extrabold text-brand-deep mt-2">
              Visitor Sanitization & Access Log Template
            </h2>
            <p className="text-brand-brown text-sm md:text-base leading-relaxed mt-4">
              To systematically protect your preterm infant from seasonal respiratory syncytial virus (RSV) and influenza, we recommend keeping a physical visitor log. Hang a simple clipboard by the front door with sanitizer and entry requirements.
            </p>
            <p className="text-brand-brown text-sm md:text-base leading-relaxed">
              This structured boundaries log serves as a friendly, non-negotiable reminder for visiting relatives. Having visitors register their name, time of entry, hand wash confirmation, and lack of cold symptoms prevents social awkwardness and enforces safety standards.
            </p>
          </ScrollReveal>
        </div>

        <div className="lg:col-span-5 bg-brand-rose/20 rounded-2xl p-6 border border-brand-coral/10 space-y-4">
          <ScrollReveal direction="left" className="space-y-4">
            <h3 className="font-display font-bold text-brand-deep text-base">
              Entry Access Requirements
            </h3>
            <ul className="space-y-2 text-xs md:text-sm text-brand-brown">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-coral flex-shrink-0 mt-1.5 mr-2" />
                <span>**Sanitize Outerwear:** Remove shoes and jackets outside the main living area.</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-coral flex-shrink-0 mt-1.5 mr-2" />
                <span>**Surgical Masks:** Provide disposable surgical masks for anyone sitting within two meters.</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-coral flex-shrink-0 mt-1.5 mr-2" />
                <span>**Hands and Arms:** Wash up to the elbows for at least 20 seconds with soap.</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-coral flex-shrink-0 mt-1.5 mr-2" />
                <span>**No Direct Contact:** Visitors should not touch the infant's face or hands directly.</span>
              </li>
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* NEW CONTENT: WEEKLY WEIGHT GAIN LOG */}
      <section className="bg-brand-rose/20 rounded-3xl p-8 border border-brand-coral/15 space-y-6 animate-fade-in">
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs md:text-sm font-sans font-bold tracking-widest uppercase text-brand-coral">
            Growth Monitoring
          </span>
          <h2 className="text-2xl md:text-3xl font-display font-extrabold text-brand-deep">
            Weekly Weight Gain & Hydration Log
          </h2>
          <p className="text-brand-brown text-sm leading-relaxed">
            Preterm growth should be tracked consistently at home using a digital baby scale. Set a specific day and time each week to record progress.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-brand-white border border-brand-coral/10 rounded-2xl p-6 space-y-2 shadow-soft">
            <h3 className="font-display font-bold text-brand-deep text-base">
              Weight Gain Expectations
            </h3>
            <p className="text-brand-brown text-xs md:text-sm leading-relaxed">
              Once discharged, a healthy preterm infant should gain approximately **15 to 30 grams per day** (about 100 to 200 grams per week). Growth values will fluctuate, but a downward trend or flat weight for two consecutive weeks requires a pediatrician consultation.
            </p>
          </div>

          <div className="bg-brand-white border border-brand-coral/10 rounded-2xl p-6 space-y-2 shadow-soft">
            <h3 className="font-display font-bold text-brand-deep text-base">
              Weight Logging Conditions
            </h3>
            <p className="text-brand-brown text-xs md:text-sm leading-relaxed">
              To ensure accuracy, weigh the baby naked (no diaper or clothing) at the same time in the morning, ideally before their first feed. Always use the same digital baby scale and write down the numbers in a growth book.
            </p>
          </div>
        </div>
      </section>

      {/* 5. EMERGENCY WARNINGS & CTAS */}
      <section className="space-y-6">
        <ScrollReveal direction="up" className="max-w-3xl mx-auto space-y-6 text-center">
          <DisclaimerBox />
          <h3 className="font-display font-bold text-brand-deep text-lg md:text-xl">
            Identifying Critical Warning Signs
          </h3>
          <p className="text-brand-brown text-xs md:text-sm">
            Immediately contact emergency services or your pediatrician if your baby has a fever, breathes rapidly, shows chest retractions, has blue skin discoloration, refuses multiple feeds, or is unusually difficult to wake.
          </p>
          <div className="pt-2">
            <Button href="/doctor-questions-checklist/" variant="outline" id="post-discharge-checklist-btn">
              Explore Discharge Questions Checklist
            </Button>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
