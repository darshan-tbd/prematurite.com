'use client';

import React from 'react';
import { Home, Thermometer, Wind, ShieldAlert, Heart, Calendar } from 'lucide-react';
import Button from '@/components/ui/Button';
import DisclaimerBox from '@/components/ui/DisclaimerBox';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/animation/ScrollReveal';

export default function PrematureBabyCarePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16 md:space-y-24" id="baby-care-page">
      
      {/* 1. HERO SECTION */}
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <ScrollReveal direction="up">
          <span className="text-xs md:text-sm font-sans font-bold tracking-widest uppercase text-brand-coral">
            Educational Guide
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-extrabold text-brand-deep mt-2 tracking-tight">
            Premature Baby Care at Home
          </h1>
          <p className="text-brand-brown text-base md:text-lg leading-relaxed mt-4">
            Practical, evidence-based guidelines to help parents adjust their home environment, prevent infections, and track infant comfort safely.
          </p>
        </ScrollReveal>
      </section>

      {/* 2. THE CORE AREAS */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <ScrollReveal direction="right" className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-display font-extrabold text-brand-deep">
            Transitioning to Home Care
          </h2>
          <p className="text-brand-brown text-sm md:text-base leading-relaxed">
            Transitioning a premature baby from the hospital neonatal ward to home is a major developmental milestone, but it requires changes in your daily routines. Because premature babies have had less time to build up their immune defenses and body fat, their tolerance for environmental changes is lower than that of full-term infants.
          </p>
          <p className="text-brand-brown text-sm md:text-base leading-relaxed">
            Parents must focus on three primary pillars of home care: maintaining warm room temperatures, enforcing strict hand hygiene, and setting up a quiet nursery that supports deep sleep.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="left" className="bg-brand-rose/40 rounded-3xl p-8 border border-brand-coral/15 space-y-6">
          <div className="flex items-start space-x-3">
            <Thermometer className="w-6 h-6 text-brand-coral flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-display font-bold text-brand-deep text-base">Thermal Preservation</h3>
              <p className="text-brand-brown text-xs md:text-sm mt-1">
                Maintain room temperatures between 22 and 24 degrees Celsius. Keep cribs away from open windows and drafts. Check core temperature by feeling the back of the neck.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Wind className="w-6 h-6 text-brand-coral flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-display font-bold text-brand-deep text-base">Air Quality Control</h3>
              <p className="text-brand-brown text-xs md:text-sm mt-1">
                Ensure the home is completely smoke-free. Avoid aerosols, perfumes, and strong chemical cleaners in the nursery, as these irritate preterm respiratory passages.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. PRACTICAL CHECKLIST */}
      <section className="bg-brand-white border border-brand-coral/15 rounded-3xl p-8 md:p-12 shadow-soft space-y-8">
        <ScrollReveal direction="up">
          <SectionHeading
            subtitle="Home Management"
            title="Step-by-Step Care Guidelines"
            centered={false}
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-brand-brown text-sm md:text-base leading-relaxed">
          <div className="space-y-4">
            <h3 className="font-display font-bold text-brand-deep text-base">
              1. Enforce Strict Hygiene
            </h3>
            <p>
              Preterm infants are highly vulnerable to common viruses. Enforce hand sanitizing or soap washing from the wrist to the elbow for all primary caregivers before touching the baby. Clean diaper changing mats and feeding items thoroughly after each use.
            </p>
            <h3 className="font-display font-bold text-brand-deep text-base">
              2. Restrict Visitors and Outings
            </h3>
            <p>
              Limit visits to close family members during the first month at home. Ask guests who are unwell, even with a mild cold, to postpone visits. Avoid crowded public spaces, shopping centers, or public transport until cleared by your pediatrician.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-display font-bold text-brand-deep text-base">
              3. Support Safe Sleep
            </h3>
            <p>
              Place your baby on their back on a firm, flat mattress in their own crib. Do not place pillows, bumpers, stuffed toys, or loose, heavy blankets in the crib. Dress the baby in warm, breathable sleeping sacks or layers to preserve body warmth.
            </p>
            <h3 className="font-display font-bold text-brand-deep text-base">
              4. Coordinate Feedings and Logs
            </h3>
            <p>
              Maintain a detailed log of feeding times, volumes (if bottle-feeding), and the duration of nursing sessions. Count daily wet and dirty diapers. Preterm infants should typically wet at least six diapers in twenty-four hours once home.
            </p>
          </div>
        </div>
      </section>

      {/* 4. NEW CONTENT: AIR QUALITY & DIAPER OBSERVATION CHECKLISTS */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ScrollReveal direction="right" className="bg-brand-rose/40 border border-brand-coral/15 rounded-3xl p-6 md:p-8 space-y-6">
          <h3 className="font-display font-bold text-brand-deep text-lg md:text-xl">
            Nursery Air Quality & Safety Standards
          </h3>
          <p className="text-brand-brown text-xs md:text-sm leading-relaxed">
            Preterm lungs are extremely sensitive to microscopic particles. Maintain these environmental parameters:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs md:text-sm">
              <thead>
                <tr className="border-b border-brand-coral/20 text-brand-deep font-bold">
                  <th className="py-2">Parameter</th>
                  <th className="py-2">Standard Target</th>
                  <th className="py-2">Actionable Care Guide</th>
                </tr>
              </thead>
              <tbody className="text-brand-brown divide-y divide-brand-coral/10">
                <tr>
                  <td className="py-2 font-semibold text-brand-deep">Humidity</td>
                  <td className="py-2">40% - 60%</td>
                  <td className="py-2">Prevents airway drying; use a cool-mist humidifier in dry regions.</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold text-brand-deep">Air Filtration</td>
                  <td className="py-2">HEPA Grade</td>
                  <td className="py-2">Keeps space free of fine dust particles and pollen. Clean filters monthly.</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold text-brand-deep">Chemicals</td>
                  <td className="py-2">Zero Residue</td>
                  <td className="py-2">Do not spray bug repellents or aerosol perfumes in or near the room.</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold text-brand-deep">Ventilation</td>
                  <td className="py-2">Indirect Draft</td>
                  <td className="py-2">Open windows slightly when ambient temperature permits, avoiding direct drafts.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="left" className="bg-brand-white border border-brand-coral/15 rounded-3xl p-6 md:p-8 shadow-soft space-y-6">
          <h3 className="font-display font-bold text-brand-deep text-lg md:text-xl">
            Diaper Log & Hydration Checklist
          </h3>
          <p className="text-brand-brown text-xs md:text-sm leading-relaxed">
            Diaper counts are the best indicator of infant hydration. Observe these baseline checks:
          </p>
          <ul className="space-y-3">
            <li className="text-brand-brown text-xs md:text-sm border-b border-brand-coral/10 pb-2">
              <strong className="text-brand-deep block">Wet Diapers (Minimum 6):</strong> A healthy preterm infant should wet at least six diapers in twenty-four hours. Diapers should feel heavy and contain pale or clear urine.
            </li>
            <li className="text-brand-brown text-xs md:text-sm border-b border-brand-coral/10 pb-2">
              <strong className="text-brand-deep block">Stool Observations:</strong> Preterm stools shift gradually from dark green to soft mustard-yellow. Any black tarry stool (after early weeks), mucus, or red tint requires pediatric review.
            </li>
            <li className="text-brand-brown text-xs md:text-sm">
              <strong className="text-brand-deep block">Urate Crystals Check:</strong> Reddish or brick-dust colored dust on diapers indicates urate crystals, which can be an early indicator of mild dehydration. Report this to your doctor immediately.
            </li>
          </ul>
        </ScrollReveal>
      </section>

      {/* NEW CONTENT: PRETERM SKIN & BATHING PROTOCOLS */}
      <section className="bg-brand-white border border-brand-coral/15 rounded-3xl p-8 md:p-12 shadow-soft grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fade-in">
        <div className="lg:col-span-7 space-y-6">
          <ScrollReveal direction="right">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-coral/10 text-brand-coral border border-brand-coral/25">
              Skin Care Standards
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-extrabold text-brand-deep mt-2">
              Preterm Skin Hygiene & Sponge Bath Protocols
            </h2>
            <p className="text-brand-brown text-sm md:text-base leading-relaxed mt-4">
              Preterm infants have an immature skin barrier that is thinner and more permeable than full-term skin. It absorbs topically applied chemicals rapidly and is highly vulnerable to friction, breakdown, and subsequent infection.
            </p>
            <p className="text-brand-brown text-sm md:text-base leading-relaxed">
              Traditional daily tub baths and vigorous oil massages should be avoided until your pediatrician explicitly clears them. In the early weeks at home, limit cleaning to warm sponge baths (sponge-cleaning only the diaper area and skin folds) two to three times a week.
            </p>
          </ScrollReveal>
        </div>

        <div className="lg:col-span-5 bg-brand-rose/20 rounded-2xl p-6 border border-brand-coral/10 space-y-4">
          <ScrollReveal direction="left" className="space-y-4">
            <h3 className="font-display font-bold text-brand-deep text-base">
              Bathing Safety Checklist
            </h3>
            <ul className="space-y-3 text-xs md:text-sm text-brand-brown">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-coral flex-shrink-0 mt-1.5 mr-2" />
                <span>**Water Temp:** Use lukewarm water between 37.0°C and 37.5°C. Check with a bath thermometer.</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-coral flex-shrink-0 mt-1.5 mr-2" />
                <span>**Draft Prevention:** Bathe in a closed room with fans and AC turned off to block cold drafts.</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-coral flex-shrink-0 mt-1.5 mr-2" />
                <span>**Soap Selection:** Use only pH-neutral, dye-free, unscented liquid cleansers approved by your doctor.</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-coral flex-shrink-0 mt-1.5 mr-2" />
                <span>**Pat Dry:** Pat the skin dry with a soft sterile cotton cloth; do not rub skin folds.</span>
              </li>
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* NEW CONTENT: TUMMY TIME & SAFE PLAY POSITIONING */}
      <section className="bg-brand-rose/20 rounded-3xl p-8 border border-brand-coral/15 space-y-6 animate-fade-in">
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs md:text-sm font-sans font-bold tracking-widest uppercase text-brand-coral">
            Physical Positioning
          </span>
          <h2 className="text-2xl md:text-3xl font-display font-extrabold text-brand-deep">
            Supervised Tummy Time & Positioning Protocols
          </h2>
          <p className="text-brand-brown text-sm leading-relaxed">
            While safe sleep guidelines strictly require placing your baby on their back in their own crib, supervised tummy time is critical for muscle growth in the neck, shoulders, and trunk.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-brand-white border border-brand-coral/10 rounded-2xl p-6 space-y-2 shadow-soft">
            <h3 className="font-display font-bold text-brand-deep text-base">
              Timing and Duration
            </h3>
            <p className="text-brand-brown text-xs md:text-sm leading-relaxed">
              Start tummy time only after your baby's umbilical stump has fallen off and they have stabilized at home. Begin with brief sessions of **2 to 3 minutes, twice daily**, and gradually increase as they build muscle strength.
            </p>
          </div>

          <div className="bg-brand-white border border-brand-coral/10 rounded-2xl p-6 space-y-2 shadow-soft">
            <h3 className="font-display font-bold text-brand-deep text-base">
              Safe Tummy-Time Methods
            </h3>
            <p className="text-brand-brown text-xs md:text-sm leading-relaxed">
              Perform tummy time on a clean, firm, flat blanket on the floor. You can also place the baby chest-to-chest on your body while semi-reclined. Never leave the baby unattended, and stop immediately if they show signs of fatigue or breathing effort.
            </p>
          </div>
        </div>
      </section>

      {/* 5. INTERNAL LINKS & CTAs */}
      <section className="space-y-8 max-w-3xl mx-auto text-center">
        <ScrollReveal direction="up" className="space-y-6">
          <DisclaimerBox />
          <h3 className="font-display font-bold text-brand-deep text-lg md:text-xl">
            Want to learn more about feeding or growth tracking?
          </h3>
          <p className="text-brand-brown text-xs md:text-sm">
            Read our dedicated guides explaining feeding cue observation and how to use corrected age calculations to track physical growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/feeding-nutrition/" variant="primary" id="baby-care-feeding-link">
              Explore Feeding & Nutrition
            </Button>
            <Button href="/growth-milestones/" variant="outline" id="baby-care-milestones-link">
              Explore Milestone Tracking
            </Button>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}
