'use client';

import React from 'react';
import { AlertTriangle, ShieldAlert, Heart, Calendar } from 'lucide-react';
import Button from '@/components/ui/Button';
import ScrollReveal from '@/components/animation/ScrollReveal';

export default function MedicalDisclaimerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-8 animate-fade-in" id="disclaimer-page">
      
      <ScrollReveal direction="up" className="space-y-4">
        <div className="bg-brand-coral/10 p-3 rounded-full w-12 h-12 flex items-center justify-center text-brand-coral">
          <AlertTriangle className="w-8 h-8" />
        </div>
        <h1 className="text-3xl md:text-5xl font-display font-extrabold text-brand-deep tracking-tight">
          Medical Disclaimer
        </h1>
        <p className="text-brand-brown text-sm">Last Updated: June 23, 2026</p>
        <div className="h-1 w-12 bg-brand-coral rounded-full mt-4" />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.1} className="prose prose-stone text-brand-brown text-sm md:text-base leading-relaxed space-y-6">
        
        {/* Callout box */}
        <div className="bg-red-50 border border-red-200 rounded-3xl p-6 md:p-8">
          <h2 className="font-display font-bold text-red-900 text-lg mb-2">
            No Medical Advice Provided
          </h2>
          <p className="text-red-800">
            **Prematurite Digital Health provides educational and informational content only. The information on this website (prematurite.com) is not a substitute for professional medical advice, diagnosis, or treatment.**
          </p>
        </div>

        <p>
          Always seek the advice of your pediatrician, neonatologist, or other qualified healthcare provider with any questions you may have regarding a medical condition or the health and development of your infant.
        </p>

        <h2 className="font-display font-bold text-brand-deep text-lg md:text-xl mt-6">
          1. Limitation of Educational Content
        </h2>
        <p>
          The materials on this website, including articles, check-lists, trackers, logs, calculators, and guides, are intended to raise awareness and support parent education about premature baby care. They do not constitute clinical guidelines, diagnostic results, medical prescriptions, or clinical authority.
        </p>
        <p>
          Never disregard professional medical advice or delay seeking it because of something you have read on prematurite.com.
        </p>

        <h2 className="font-display font-bold text-brand-deep text-lg md:text-xl mt-6">
          2. Clinical Emergency Protocol
        </h2>
        <p>
          If you believe your baby is experiencing a medical emergency, do not search this website or write messages. **Contact your nearest hospital, pediatrician, neonatologist, or emergency medical service immediately.**
        </p>
        <p>
          Prematurite Digital Health is not an emergency hospital, clinical practice, or diagnostic service. We do not provide real-time consultations or emergency triage.
        </p>

        <h2 className="font-display font-bold text-brand-deep text-lg md:text-xl mt-6">
          3. Absolute Release of Liability
        </h2>
        <p>
          By utilizing our educational guides and checklists, you acknowledge that Prematurite Digital Health, its editorial team, and partners are not responsible or liable for any decisions made based on this content. All home care adjustments, feeding coordinate schedules, and growth milestone tracks should be reviewed and approved by your pediatrician.
        </p>

        <h2 className="font-display font-bold text-brand-deep text-lg md:text-xl mt-6">
          4. Educational Alignment with Professional Guidelines
        </h2>
        <p>
          Our resources are modeled around established neonatology educational guides, including protocols published by the World Health Organization (WHO) and the Indian Academy of Pediatrics (IAP). These guidelines are compiled strictly for parent literacy and general awareness. They do not constitute custom medical directives and must never override local, primary pediatrician orders or specific hospital discharge summaries.
        </p>

        <div className="pt-6 border-t border-brand-coral/10 text-center">
          <Button href="/contact/" id="disclaimer-contact-btn">
            Contact Editorial Team
          </Button>
        </div>

      </ScrollReveal>
    </div>
  );
}
