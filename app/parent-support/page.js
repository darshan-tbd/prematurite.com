'use client';

import React from 'react';
import { Heart, Users, ShieldAlert, Award } from 'lucide-react';
import Button from '@/components/ui/Button';
import DisclaimerBox from '@/components/ui/DisclaimerBox';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/animation/ScrollReveal';

export default function ParentSupportPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16 md:space-y-24" id="parent-support-page">
      
      {/* 1. HERO SECTION */}
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <ScrollReveal direction="up">
          <span className="text-xs md:text-sm font-sans font-bold tracking-widest uppercase text-brand-coral">
            Educational Guide
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-extrabold text-brand-deep mt-2 tracking-tight">
            Parent Mental and Emotional Support
          </h1>
          <p className="text-brand-brown text-base md:text-lg leading-relaxed mt-4">
            Understanding caregiver stress, managing anxiety, and finding supportive, practical coping strategies for you and your family.
          </p>
        </ScrollReveal>
      </section>

      {/* 2. THE EMOTIONAL JOURNEY */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <ScrollReveal direction="right" className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-display font-extrabold text-brand-deep">
            Managing Caregiver Stress
          </h2>
          <p className="text-brand-brown text-sm md:text-base leading-relaxed">
            Preterm delivery is a sudden event that often leaves parents feeling unprepared and overwhelmed. Navigating the hospital environment, monitoring alarms, and adjusting to demanding home care schedules can cause significant emotional strain.
          </p>
          <p className="text-brand-brown text-sm md:text-base leading-relaxed">
            It is common to experience worry, confusion, or physical exhaustion. Understanding that these feelings are a normal physiological response to stress is the first step. Protecting your own well-being is vital for supporting your baby's development.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="left" className="bg-brand-rose/40 rounded-3xl p-8 border border-brand-coral/15 space-y-4">
          <h3 className="font-display font-bold text-brand-deep text-lg">
            Supporting Families Empathically
          </h3>
          <p className="text-brand-brown text-xs md:text-sm leading-relaxed">
            Our educational materials help families manage anxiety by replacing uncertainty with structured information. When parents understand how incubator monitors function or how to calculate corrected milestones, their confidence increases, reducing overall stress.
          </p>
          <DisclaimerBox className="bg-brand-white/80" />
        </ScrollReveal>
      </section>

      {/* 3. COPING STRATEGIES */}
      <section className="bg-brand-white border border-brand-coral/15 rounded-3xl p-8 md:p-12 shadow-soft space-y-8">
        <ScrollReveal direction="up">
          <SectionHeading
            subtitle="Coping Methods"
            title="Practical Coping Strategies"
            centered={false}
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-brand-brown text-sm md:text-base leading-relaxed">
          <div className="space-y-4">
            <h3 className="font-display font-bold text-brand-deep text-base">
              Share Caregiving Duties
            </h3>
            <p>
              Avoid putting all monitoring and holding responsibilities on a single parent. Divide care duties and schedule shifts for checkups, diaper logs, and feeding sessions. Ensuring both parents get regular rest is critical for infant safety.
            </p>
            <h3 className="font-display font-bold text-brand-deep text-base">
              Involve Partners in KMC
            </h3>
            <p>
              Fathers and partners can practice skin-to-skin Kangaroo Mother Care. Paternal KMC provides thermal regulation, heart rate stabilization, and soothing benefits, while offering the mother valuable time to rest or express breast milk.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-display font-bold text-brand-deep text-base">
              Educate Extended Family Members
            </h3>
            <p>
              Share clear guidelines on nursery sanitation, visitor rules, and temperature control with grandparents and helpers. Aligning caregiving expectations reduces household conflict and ensures a consistent, quiet nursery environment.
            </p>
            <h3 className="font-display font-bold text-brand-deep text-base">
              Seek Clinical Mental Support
            </h3>
            <p>
              Caring for a preterm baby is emotionally demanding. Seek guidance from qualified counselors, mental health professionals, or medical teams if you experience severe anxiety, persistent sadness, insomnia, or an inability to cope with daily caregiving.
            </p>
          </div>
        </div>
      </section>

      {/* 4. NEW CONTENT: BURNOUT CHECKS & SHIFT ROUTINES */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ScrollReveal direction="right" className="bg-brand-rose/40 border border-brand-coral/15 rounded-3xl p-6 md:p-8 space-y-6">
          <h3 className="font-display font-bold text-brand-deep text-lg md:text-xl">
            Caregiver Burnout Self-Assessment
          </h3>
          <p className="text-brand-brown text-xs md:text-sm leading-relaxed">
            Parenting in early weeks is demanding. Review these psychological warning indicators of caregiver fatigue:
          </p>
          <ul className="space-y-3">
            <li className="text-brand-brown text-xs md:text-sm border-b border-brand-coral/10 pb-2">
              <strong className="text-brand-deep block font-display">Persistent Hypervigilance:</strong> Inability to sleep even when the infant is resting quietly, caused by constant checking of breathing or monitors.
            </li>
            <li className="text-brand-brown text-xs md:text-sm border-b border-brand-coral/10 pb-2">
              <strong className="text-brand-deep block font-display">Emotional Withdrawal:</strong> Feeling disconnected, numb, or experiencing severe guilt regarding your caregiving capacity.
            </li>
            <li className="text-brand-brown text-xs md:text-sm">
              <strong className="text-brand-deep block font-display">Physical Exhaustion:</strong> Headaches, brain fog, or persistent muscle tension that interferes with safe caregiving tasks.
            </li>
          </ul>
          <p className="text-[10px] text-brand-brown/70 leading-relaxed italic">
            Tip: Acknowledge these signs without guilt. Stepping away for brief rests supports your baby\'s well-being.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="left" className="bg-brand-white border border-brand-coral/15 rounded-3xl p-6 md:p-8 shadow-soft space-y-6">
          <h3 className="font-display font-bold text-brand-deep text-lg md:text-xl">
            Partner Night Shift Framework
          </h3>
          <p className="text-brand-brown text-xs md:text-sm leading-relaxed">
            Organizing sleep shifts between partners reduces exhaustion. Implement this standard shift split:
          </p>
          <div className="space-y-4">
            <div className="border-b border-brand-coral/10 pb-2">
              <strong className="text-brand-deep text-sm block">First Shift (09:00 PM to 02:00 AM):</strong>
              <p className="text-brand-brown text-xs">One partner manages all feeding logs, diaper changes, and comforting. The other partner sleeps in a separate quiet room to get uninterrupted rest.</p>
            </div>
            <div className="border-b border-brand-coral/10 pb-2">
              <strong className="text-brand-deep text-sm block">Second Shift (02:00 AM to 07:00 AM):</strong>
              <p className="text-brand-brown text-xs">Partners swap roles. The rested partner takes over bedside logs and feeds, allowing the other to get consecutive hours of sleep.</p>
            </div>
            <div>
              <strong className="text-brand-deep text-sm block">Supportive Handover:</strong>
              <p className="text-brand-brown text-xs">Spend five minutes during transitions to review the written feed volume and wet diaper log, ensuring continuity without stress.</p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* NEW CONTENT: MENTAL HEALTH CAREGIVER CHECKLIST */}
      <section className="bg-brand-white border border-brand-coral/15 rounded-3xl p-8 md:p-12 shadow-soft grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fade-in">
        <div className="lg:col-span-7 space-y-6">
          <ScrollReveal direction="right">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-coral/10 text-brand-coral border border-brand-coral/25">
              Self-Care Tools
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-extrabold text-brand-deep mt-2">
              Mental Health Checklist for Primary Caregivers
            </h2>
            <p className="text-brand-brown text-sm md:text-base leading-relaxed mt-4">
              It is easy to focus entirely on the baby and neglect your own physical and mental wellness. We encourage primary caregivers to use this daily checklist to maintain health and prevent emotional burnout.
            </p>
            <p className="text-brand-brown text-sm md:text-base leading-relaxed">
              Print this list or keep it as a reminder in the nursery. Remember: an emotionally stable, rested parent is better equipped to recognize infant hunger cues, maintain strict sanitation, and coordinate with the pediatric care team.
            </p>
          </ScrollReveal>
        </div>

        <div className="lg:col-span-5 bg-brand-rose/20 rounded-2xl p-6 border border-brand-coral/10 space-y-4">
          <ScrollReveal direction="left" className="space-y-4">
            <h3 className="font-display font-bold text-brand-deep text-base">
              Daily Wellness Checklist
            </h3>
            <ul className="space-y-3 text-xs md:text-sm text-brand-brown">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-coral flex-shrink-0 mt-1.5 mr-2" />
                <span><strong>Rest Routine:</strong> Get at least 4 to 5 hours of continuous, uninterrupted sleep in a 24-hour cycle.</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-coral flex-shrink-0 mt-1.5 mr-2" />
                <span><strong>Hydration & Meals:</strong> Eat three balanced meals and drink plenty of fluids to support physical energy.</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-coral flex-shrink-0 mt-1.5 mr-2" />
                <span><strong>Mindful Break:</strong> Spend 10 to 15 minutes in quiet reflection or breathing exercises away from monitors.</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-coral flex-shrink-0 mt-1.5 mr-2" />
                <span><strong>Share Logs:</strong> Transfer diaper and feeding logs to your partner to release mental tracking pressure.</span>
              </li>
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* NEW CONTENT: EXTENDED FAMILY SUPPORT */}
      <section className="bg-brand-rose/20 rounded-3xl p-8 border border-brand-coral/15 space-y-6 animate-fade-in">
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs md:text-sm font-sans font-bold tracking-widest uppercase text-brand-coral">
            Family Alignment
          </span>
          <h2 className="text-2xl md:text-3xl font-display font-extrabold text-brand-deep">
            How Extended Families Can Productively Support Parents
          </h2>
          <p className="text-brand-brown text-sm leading-relaxed">
            In Indian households, support from grandparents, aunts, and uncles is invaluable, but their care ideas must align with preterm safety standards.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-brand-white border border-brand-coral/10 rounded-2xl p-6 space-y-2 shadow-soft">
            <h3 className="font-display font-bold text-brand-deep text-base">
              Non-Contact Support Chores
            </h3>
            <p className="text-brand-brown text-xs md:text-sm leading-relaxed">
              Family members can help by taking charge of household sanitization, cooking nutritious meals, managing grocery deliveries, washing infant linen, and coordinating logistics for pediatric visits. This lets parents focus on feeding and skin-to-skin care.
            </p>
          </div>

          <div className="bg-brand-white border border-brand-coral/10 rounded-2xl p-6 space-y-2 shadow-soft">
            <h3 className="font-display font-bold text-brand-deep text-base">
              Respecting Isolation Boundaries
            </h3>
            <p className="text-brand-brown text-xs md:text-sm leading-relaxed">
              Help enforce visitor limits. Remind well-wishing friends that the baby's immune system is still developing. Support the parents in declining social gatherings, and encourage visitors to wait until the child reaches three months corrected age.
            </p>
          </div>
        </div>
      </section>

      {/* 5. ACTIONS & CTAS */}
      <section className="space-y-6 text-center max-w-3xl mx-auto">
        <ScrollReveal direction="up" className="space-y-6">
          <h2 className="text-2xl font-display font-extrabold text-brand-deep">
            Explore Fictional Parent Scenarios
          </h2>
          <p className="text-brand-brown text-sm md:text-base">
            Read our educational parent stories detailing how Indian families managed anxiety, divided night shifts, and communicated with neonatologists during the NICU transition.
          </p>
          <div className="flex justify-center gap-4">
            <Button href="/parent-stories/" id="support-stories-btn">
              Read Parent Stories
            </Button>
            <Button href="/contact/" variant="outline" id="support-contact-btn">
              Send an Inquiry
            </Button>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
