'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronRight, CheckSquare, Printer, ShieldAlert } from 'lucide-react';
import Button from '@/components/ui/Button';
import DisclaimerBox from '@/components/ui/DisclaimerBox';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/animation/ScrollReveal';

export default function DoctorQuestionsChecklist() {
  const [activeTab, setActiveTab] = useState('nicu');

  const categories = [
    { id: 'nicu', name: 'Birth & NICU' },
    { id: 'feeding', name: 'Feeding & Nutrition' },
    { id: 'breathing', name: 'Breathing & Respiratory' },
    { id: 'milestones', name: 'Growth & Milestones' },
    { id: 'discharge', name: 'Discharge Prep' },
    { id: 'followup', name: 'Follow-up Visits' },
    { id: 'referrals', name: 'Specialist Referrals' },
    { id: 'emergency', name: 'Emergency Signs' },
    { id: 'home', name: 'Home Care' }
  ];

  const questionsMap = {
    nicu: [
      'What specific gestational age category does our baby fall into?',
      'What core equipment (e.g. CPAP, phototherapy) is currently supporting our baby?',
      'How are our baby\'s vital signs progressing on the monitor?',
      'Can we practice containment holds or skin-to-skin kangaroo care today?',
      'Who are the primary contact neonatologists and nurses for daily rounds?'
    ],
    feeding: [
      'How many milliliters of milk is our baby currently receiving per feed?',
      'What is the daily schedule for gavage tube feeds?',
      'Are human milk fortifiers (HMF) recommended for our expressed breast milk?',
      'What early hunger cues should we look for before attempting oral feeds?',
      'How do we transition safely from gavage tubes to direct breastfeeding at home?'
    ],
    breathing: [
      'Is our baby breathing independently, or are they receiving respiratory support?',
      'What is the current oxygen saturation (SpO2) target range for our baby?',
      'What signs of respiratory distress (e.g. grunting, retractions) should we know?',
      'Are there any specific lung development medications prescribed?',
      'What home air hygiene precautions are required to protect our baby\'s lungs?'
    ],
    milestones: [
      'What is our baby\'s corrected age calculation based on their due date?',
      'Which growth chart (WHO or Fenton) is being used to track weight?',
      'What catch-up growth curve progress should we look for in the early months?',
      'What motor milestones are expected in the next month at their corrected age?',
      'When should developmental screenings (hearing, vision, motor) be scheduled?'
    ],
    discharge: [
      'What weight threshold must our baby reach before discharge is approved?',
      'How many consecutive days must they maintain body temperature in an open crib?',
      'What basic home care skills do we need to demonstrate to the nurses?',
      'Will any portable oxygen or medical monitors be required at home?',
      'Who coordinates the final discharge papers and prescriptions?'
    ],
    followup: [
      'How many days after discharge should the first pediatric visit be scheduled?',
      'What is the recommended immunization schedule for our preterm infant?',
      'Which clinical values (weight, length, head circumference) will be checked?',
      'Do we need to bring our daily diaper and feeding logs to the clinic?',
      'Which pediatric specialists or follow-up clinics do we need to consult?'
    ],
    emergency: [
      'What core body temperature indicates a fever or hypothermia?',
      'How many respirations per minute indicate rapid breathing?',
      'What chest movements indicate retractions or respiratory struggle?',
      'What skin color changes (paleness, grayness, lip blues) require emergency care?',
      'What is the nearest emergency hospital equipped for preterm infants?'
    ],
    home: [
      'What room temperature range is recommended for our baby\'s nursery?',
      'How many layers of clothing should the baby wear compared to adults?',
      'How many wet and dirty diapers should we expect in a twenty-four hour period?',
      'What visitor restrictions and hand hygiene protocols must we enforce?',
      'How do we sanitize diaper changing surfaces and feeding items safely?'
    ],
    referrals: [
      'Has our baby been screened for Retinopathy of Prematurity (ROP), and when is the next ophthalmology follow-up scheduled?',
      'Has a newborn hearing screening (OAE/AABR audiology test) been completed before discharge?',
      'Are early intervention occupational or physical therapy consults recommended to monitor motor progress?',
      'Does our baby require follow-up visits with a pediatric cardiologist or pulmonologist?',
      'Who coordinates the referral bookings and sends clinical summaries to these specialists?'
    ]
  };

  const activeQuestions = questionsMap[activeTab] || [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16" id="checklist-page">
      
      {/* 1. HERO SECTION */}
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <ScrollReveal direction="up">
          <span className="text-xs md:text-sm font-sans font-bold tracking-widest uppercase text-brand-coral">
            Educational Checklist
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-extrabold text-brand-deep mt-2 tracking-tight">
            Doctor Questions Checklist
          </h1>
          <p className="text-brand-brown text-base md:text-lg leading-relaxed mt-4">
            A practical, structured guide to help parents prepare questions for neonatologists, pediatricians, and care teams during hospital rounds and clinic visits.
          </p>
        </ScrollReveal>
      </section>

      {/* 2. TABBED CHECKLIST SYSTEM */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-4 bg-brand-rose/40 rounded-3xl p-5 border border-brand-coral/15 space-y-2 lg:sticky lg:top-24">
          <h3 className="font-display font-bold text-brand-deep text-sm md:text-base px-3 mb-3">
            Select Category
          </h3>
          <nav className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible pb-3 lg:pb-0 gap-1" aria-label="Checklist categories">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`w-full text-left px-4 py-3 rounded-xl font-display text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center justify-between ${
                  activeTab === cat.id
                    ? 'bg-brand-coral text-brand-white shadow-soft'
                    : 'text-brand-deep hover:bg-brand-rose hover:text-brand-coral'
                }`}
                aria-selected={activeTab === cat.id}
                role="tab"
              >
                <span>{cat.name}</span>
                <ChevronRight className={`w-4 h-4 hidden lg:block ${activeTab === cat.id ? 'text-brand-white' : 'text-brand-coral'}`} />
              </button>
            ))}
          </nav>
        </div>

        {/* Questions Panel */}
        <div className="lg:col-span-8 bg-brand-white border border-brand-coral/15 rounded-3xl p-6 md:p-8 shadow-soft">
          <ScrollReveal direction="none" className="space-y-6">
            <div className="flex items-center justify-between border-b border-brand-coral/10 pb-4">
              <h3 className="font-display font-bold text-brand-deep text-lg md:text-xl">
                {categories.find((c) => c.id === activeTab)?.name} Questions
              </h3>
              <button
                onClick={() => window.print()}
                className="inline-flex items-center text-xs font-display font-bold text-brand-coral hover:text-brand-salmon cursor-pointer focus:outline-none"
                aria-label="Print questions"
                id="print-checklist-btn"
              >
                <Printer className="w-4 h-4 mr-1.5" />
                Print List
              </button>
            </div>

            <ul className="space-y-4">
              {activeQuestions.map((q, idx) => (
                <li key={idx} className="flex items-start space-x-3 bg-brand-rose/20 rounded-2xl p-4 border border-brand-coral/10 hover:border-brand-coral/25 transition-all duration-200">
                  <div className="mt-0.5 text-brand-coral">
                    <CheckSquare className="w-5 h-5 flex-shrink-0" />
                  </div>
                  <p className="text-brand-deep text-sm md:text-base font-medium leading-relaxed">
                    {q}
                  </p>
                </li>
              ))}
            </ul>

            <div className="bg-brand-rose/40 rounded-2xl p-4 border border-brand-coral/10 text-brand-brown text-xs md:text-sm leading-relaxed">
              <strong>Tip:</strong> Keep a dedicated notebook to record the answers given by your clinical team. Writing down the names of doctors, nurses, and specific dosage quantities helps reduce daily parenting confusion.
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. MEDICAL DISCLAIMER BOX */}
      <section className="max-w-3xl mx-auto">
        <DisclaimerBox />
      </section>

    </div>
  );
}
