'use client';

import React from 'react';
import { Shield, ShieldAlert, Heart, Calendar, HelpCircle, Activity } from 'lucide-react';
import Button from '@/components/ui/Button';
import DisclaimerBox from '@/components/ui/DisclaimerBox';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/animation/ScrollReveal';

export default function NICUJourneyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16 md:space-y-24" id="nicu-journey-page">
      
      {/* 1. HERO SECTION */}
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <ScrollReveal direction="up">
          <span className="text-xs md:text-sm font-sans font-bold tracking-widest uppercase text-brand-coral">
            Educational Guide
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-extrabold text-brand-deep mt-2 tracking-tight">
            Understanding the NICU Journey
          </h1>
          <p className="text-brand-brown text-base md:text-lg leading-relaxed mt-4">
            An educational guide to help parents navigate the Neonatal Intensive Care Unit, understand equipment, and prepare for discharge.
          </p>
        </ScrollReveal>
      </section>

      {/* 2. THE NICU ENVIRONMENT */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <ScrollReveal direction="right" className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-display font-extrabold text-brand-deep">
            Navigating the Neonatal Unit
          </h2>
          <p className="text-brand-brown text-sm md:text-base leading-relaxed">
            The Neonatal Intensive Care Unit (NICU) is a highly specialized hospital environment designed to support babies born early or requiring focused medical care. Seeing your baby surrounded by medical devices, tubes, and alarms can be emotionally challenging.
          </p>
          <p className="text-brand-brown text-sm md:text-base leading-relaxed">
            Learning about the supportive equipment, understanding basic terminology, and collaborating with the neonatal nursing staff help reduce stress. Your active presence is a vital part of your baby's recovery process.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="left" className="bg-brand-rose/40 rounded-3xl p-8 border border-brand-coral/15 space-y-4">
          <h3 className="font-display font-bold text-brand-deep text-lg">
            Common NICU Terms Explained
          </h3>
          <ul className="space-y-3">
            <li className="text-brand-brown text-xs md:text-sm">
              <strong className="text-brand-deep block">Incubator:</strong> A clear, closed crib that provides a warm, humidified, and clean environment to help the baby maintain their body temperature.
            </li>
            <li className="text-brand-brown text-xs md:text-sm">
              <strong className="text-brand-deep block">Cardiorespiratory Monitor:</strong> Leads placed on the baby's chest that track heart rate and respiratory patterns continuously.
            </li>
            <li className="text-brand-brown text-xs md:text-sm">
              <strong className="text-brand-deep block">Oxygen Saturation (SpO2):</strong> A small sensor on the hand or foot that measures oxygen levels in the blood.
            </li>
            <li className="text-brand-brown text-xs md:text-sm">
              <strong className="text-brand-deep block">Gavage Feeding Tube:</strong> A small tube passed through the nose or mouth to deliver breast milk directly to the stomach.
            </li>
          </ul>
        </ScrollReveal>
      </section>

      {/* 3. PARENTAL ROLE & INVOLVEMENT */}
      <section className="bg-brand-white border border-brand-coral/15 rounded-3xl p-8 md:p-12 shadow-soft space-y-8">
        <ScrollReveal direction="up">
          <SectionHeading
            subtitle="Parental Role"
            title="How to Stay Involved Daily"
            centered={false}
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-brand-brown text-sm md:text-base leading-relaxed">
          <div className="space-y-4">
            <h3 className="font-display font-bold text-brand-deep text-base">
              1. Practice containment touch
            </h3>
            <p>
              Premature infants can be overstimulated by stroking or constant movement. Instead, place one warm, clean hand still on their head and the other still on their body or feet. This is called a containment hold and helps them feel secure.
            </p>
            <h3 className="font-display font-bold text-brand-deep text-base">
              2. Talk or sing softly
            </h3>
            <p>
              Preterm babies recognize their parents' voices from the womb. Speaking quietly, reading, or humming near the incubator supports their cognitive development and helps soothe their heart rate.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-display font-bold text-brand-deep text-base">
              3. Provide expressed milk
            </h3>
            <p>
              Breast milk contains protective antibodies tailored to the needs of preterm infants. Work with the hospital lactation team to express and store milk, which can be delivered through the feeding tube.
            </p>
            <h3 className="font-display font-bold text-brand-deep text-base">
              4. Prepare for discharge requirements
            </h3>
            <p>
              Discharge planning begins early. Coordinate with the clinical team to learn how to administer scheduled vitamins, check baby temperature, monitor feeding volumes, and set up pediatric appointments.
            </p>
          </div>
        </div>
      </section>

      {/* 4. DISCHARGE CHECKLIST INTRO */}
      <section className="bg-brand-rose/20 rounded-3xl p-8 md:p-12 border border-brand-coral/15 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 space-y-4">
          <ScrollReveal direction="right">
            <h2 className="text-2xl font-display font-extrabold text-brand-deep">
              Transitioning Home: Discharge Basics
            </h2>
            <p className="text-brand-brown text-sm md:text-base leading-relaxed">
              Before the neonatologist approves discharge, your baby must demonstrate the ability to maintain body temperature in an open crib, feed successfully (breast or bottle) without respiratory distress, and gain weight consistently. Parents will receive training on basic home care routines.
            </p>
          </ScrollReveal>
        </div>
        <div className="lg:col-span-4 flex justify-center lg:justify-end">
          <ScrollReveal direction="left">
            <Button href="/post-discharge-care/" id="nicu-discharge-btn">
              Explore Home Transition
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. NEW CONTENT: NICU ALARM DICTIONARY & TEAM MATRIX */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ScrollReveal direction="right" className="bg-brand-white border border-brand-coral/15 rounded-3xl p-6 md:p-8 shadow-soft space-y-6">
          <h3 className="font-display font-bold text-brand-deep text-lg md:text-xl">
            NICU Monitor Alarm Dictionary
          </h3>
          <p className="text-brand-brown text-xs md:text-sm leading-relaxed">
            Monitor alarms are highly sensitive. Understanding standard alert tones helps reduce parent stress:
          </p>
          <div className="space-y-4">
            <div className="border-b border-brand-coral/10 pb-2.5">
              <strong className="text-brand-deep text-sm block">Apnea Warning:</strong>
              <p className="text-brand-brown text-xs">Triggers when the monitor detects a breathing pause lasting longer than fifteen to twenty seconds. Nurses check if this is a shallow breath or requires a gentle tactile stimulation.</p>
            </div>
            <div className="border-b border-brand-coral/10 pb-2.5">
              <strong className="text-brand-deep text-sm block">Bradycardia Alert (Brady):</strong>
              <p className="text-brand-brown text-xs">Triggers if the infant's heart rate drops below the target range. In preterm infants, heart rates drop temporarily during feeding or deep sleep, usually recovering spontaneously.</p>
            </div>
            <div>
              <strong className="text-brand-deep text-sm block">Desaturation Alert (Desat):</strong>
              <p className="text-brand-brown text-xs">Triggers when blood oxygen saturation levels drop below the target percentage set by your neonatologist. Sensors shifting or loose tape often cause mock alerts.</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="left" className="bg-brand-rose/40 border border-brand-coral/15 rounded-3xl p-6 md:p-8 space-y-6">
          <h3 className="font-display font-bold text-brand-deep text-lg md:text-xl">
            Neonatal Care Team Matrix
          </h3>
          <p className="text-brand-brown text-xs md:text-sm leading-relaxed">
            Understanding who comprises the hospital care team helps you direct your questions correctly:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs md:text-sm">
              <thead>
                <tr className="border-b border-brand-coral/20 text-brand-deep font-bold">
                  <th className="py-2">Role</th>
                  <th className="py-2">Responsibilities</th>
                </tr>
              </thead>
              <tbody className="text-brand-brown divide-y divide-brand-coral/10">
                <tr>
                  <td className="py-2 font-semibold text-brand-deep">Neonatologist</td>
                  <td className="py-2">A pediatrician with specialized training leading the infant's overall clinical diagnostics and medical plans.</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold text-brand-deep">NICU Staff Nurse</td>
                  <td className="py-2">Handles direct hourly bedside observations, feeds, hygiene updates, and coordinates parent touch activities.</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold text-brand-deep">Lactation Consultant</td>
                  <td className="py-2">Assists mothers with early breast milk expression, pumping schedules, and future tube-to-oral feeding paths.</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold text-brand-deep">Respiratory Therapist</td>
                  <td className="py-2">Manages the ventilators, CPAP devices, nasal oxygen cannulas, and monitors respiratory lung development values.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </section>

      {/* NEW CONTENT: NICU FEEDING TUBES AND LINES */}
      <section className="bg-brand-white border border-brand-coral/15 rounded-3xl p-8 md:p-12 shadow-soft grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fade-in">
        <div className="lg:col-span-7 space-y-6">
          <ScrollReveal direction="right">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-coral/10 text-brand-coral border border-brand-coral/25">
              Support Systems
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-extrabold text-brand-deep mt-2">
              NICU Intravenous Lines & Feeding Tubes Explained
            </h2>
            <p className="text-brand-brown text-sm md:text-base leading-relaxed mt-4">
              To support growth and deliver medications, clinical teams use specialized lines and tubes. Seeing these on a small baby can be overwhelming. Understanding their design helps families feel more informed:
            </p>
            <ul className="space-y-4 text-brand-brown text-xs md:text-sm">
              <li>
                <strong className="text-brand-deep block">Nasogastric (NG) and Orogastric (OG) Tubes:</strong>
                A soft, thin tube inserted through the nose (NG) or mouth (OG) directly into the stomach. These bypass the need to suck or swallow, letting your baby receive expressed breast milk safely.
              </li>
              <li>
                <strong className="text-brand-deep block">PICC Lines (Peripherally Inserted Central Catheters):</strong>
                A long, thin catheter inserted into a vein in the arm or leg and threaded to a larger vein near the heart. It delivers concentrated nutrition (TPN) and medications safely without repeated needle sticks.
              </li>
              <li>
                <strong className="text-brand-deep block">Peripheral IV Lines:</strong>
                Temporary plastic catheters inserted in small hand, foot, or scalp veins to deliver fluids, electrolytes, or antibiotics directly.
              </li>
            </ul>
          </ScrollReveal>
        </div>

        <div className="lg:col-span-5 bg-brand-rose/20 rounded-2xl p-6 border border-brand-coral/10 space-y-4">
          <ScrollReveal direction="left" className="space-y-4">
            <h3 className="font-display font-bold text-brand-deep text-base">
              Discharge Readiness Checklist
            </h3>
            <p className="text-brand-brown text-xs">
              Before the medical team clears your baby for home transition, the infant must achieve these key milestones:
            </p>
            <ul className="space-y-2 text-xs md:text-sm text-brand-brown">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-coral flex-shrink-0 mt-1.5 mr-2" />
                <span>**Temp Stability:** Maintain body temperature (36.5°C - 37.4°C) in an open crib for 24-48 hours.</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-coral flex-shrink-0 mt-1.5 mr-2" />
                <span>**Oral Feeding:** Take all feeds by breast or bottle without breathing effort or bradycardia events.</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-coral flex-shrink-0 mt-1.5 mr-2" />
                <span>**Weight Gain:** Gain weight consistently (typically 15-20g per day per kg) for several days.</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-coral flex-shrink-0 mt-1.5 mr-2" />
                <span>**Apnea Clearance:** No recent apnea/bradycardia events requiring physical stimulation.</span>
              </li>
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. DISCLAIMER & QUESTIONS */}
      <section className="space-y-6">
        <ScrollReveal direction="up" className="max-w-3xl mx-auto space-y-6 text-center">
          <DisclaimerBox />
          <h3 className="font-display font-bold text-brand-deep text-lg md:text-xl mt-6">
            Prepare for Doctor Conversations
          </h3>
          <p className="text-brand-brown text-xs md:text-sm">
            Read our structured lists of questions covering breathing equipment, feeding coordinates, and discharge parameters to ask your neonatologist or pediatrician during rounds.
          </p>
          <div className="pt-2">
            <Button href="/doctor-questions-checklist/" variant="outline" id="nicu-questions-btn">
              Review Doctor Questions
            </Button>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
