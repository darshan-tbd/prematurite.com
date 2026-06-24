'use client';

import React from 'react';
import Link from 'next/link';
import { Heart, ShieldAlert, Award, ArrowRight, BookOpen, Clock, Activity, Users, HelpCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import InquiryForm from '@/components/ui/InquiryForm';
import ServiceCard from '@/components/ui/ServiceCard';
import BlogCard from '@/components/ui/BlogCard';
import FAQItem from '@/components/ui/FAQItem';
import DisclaimerBox from '@/components/ui/DisclaimerBox';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/animation/ScrollReveal';
import FloatingCareObjects from '@/components/animation/FloatingCareObjects';

// Static data imports
import companyData from '@/data/company.json';
import servicesData from '@/data/services.json';
import blogData from '@/data/blog.json';
import parentStoriesData from '@/data/parentStories.json';
import faqData from '@/data/faq.json';

export default function Home() {
  // Take first 3 services, first 3 blog posts, first 3 parent stories, and first 4 FAQs for preview
  const featuredServices = servicesData.slice(0, 3);
  const featuredBlogs = blogData.slice(0, 3);
  const featuredStories = parentStoriesData.slice(0, 3);
  const featuredFAQs = faqData.slice(0, 4);

  return (
    <div className="relative overflow-hidden w-full" id="home-page">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 gradient-bg-hero overflow-hidden px-4">
        <FloatingCareObjects />
        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <ScrollReveal direction="up" delay={0.1}>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold bg-brand-coral/10 text-brand-coral border border-brand-coral/25">
                <Heart className="w-3.5 h-3.5 mr-1.5 fill-current" />
                Trustworthy Digital Health Education Since 2003
              </span>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-display font-extrabold text-brand-deep tracking-tight leading-tight">
                Premature Baby Care Awareness, <br />
                <span className="text-brand-coral">Made Clear</span> for Every Parent
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <p className="text-brand-brown text-base md:text-lg leading-relaxed max-w-2xl">
                {companyData.brandName} helps Indian families understand premature baby care, NICU journeys, feeding awareness, growth milestones, kangaroo care, and home-care basics through simple, responsible digital health education.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4} className="flex flex-wrap gap-4">
              <Button href="/resources/" variant="primary" id="hero-primary-cta">
                Explore Parent Resources
              </Button>
              <Button href="#quick-inquiry" variant="outline" id="hero-secondary-cta">
                Send an Inquiry
              </Button>
            </ScrollReveal>
          </div>

          {/* Hero Right Visual Column */}
          <div className="lg:col-span-5 relative flex justify-center">
            <ScrollReveal direction="left" delay={0.3} className="w-full max-w-sm sm:max-w-md">
              <div className="relative glass-panel rounded-3xl p-6 md:p-8 shadow-glow border border-brand-coral/25 overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-coral/10 rounded-full blur-xl" />
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-brand-coral/15 p-3 rounded-2xl text-brand-coral">
                    <Activity className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-brand-deep text-sm md:text-base">
                      Parent Journey Tracker
                    </h3>
                    <p className="text-brand-brown text-xs">Adjusted for Gestational Age</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-brand-white/80 rounded-2xl p-4 border border-brand-coral/10">
                    <h4 className="font-display font-semibold text-xs text-brand-deep mb-1">
                      NICU Phase Education
                    </h4>
                    <p className="text-brand-brown text-xs leading-relaxed">
                      Understand hospital environments and learn how to touch and interact with your infant safely.
                    </p>
                  </div>
                  <div className="bg-brand-white/80 rounded-2xl p-4 border border-brand-coral/10">
                    <h4 className="font-display font-semibold text-xs text-brand-deep mb-1">
                      Corrected Age Concept
                    </h4>
                    <p className="text-brand-brown text-xs leading-relaxed">
                      Evaluate physical growth and motor skills based on adjusted due dates rather than calendar dates.
                    </p>
                  </div>
                  <div className="bg-brand-white/80 rounded-2xl p-4 border border-brand-coral/10">
                    <h4 className="font-display font-semibold text-xs text-brand-deep mb-1">
                      Post-Discharge Prep
                    </h4>
                    <p className="text-brand-brown text-xs leading-relaxed">
                      Plan room temperature settings, sanitize visitor entry points, and log wet diaper counts.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. MEDICAL DISCLAIMER STRIP */}
      <section className="bg-brand-deep text-brand-white py-6 border-y border-brand-coral/20 px-4 relative z-20">
        <div className="max-w-7xl mx-auto flex items-center space-x-3 justify-center">
          <ShieldAlert className="w-5 h-5 text-brand-coral flex-shrink-0" />
          <p className="text-xs md:text-sm text-center leading-relaxed max-w-4xl text-brand-rose/90 font-medium">
            <strong>Important Medical Note:</strong> All content on Prematurite.com is for educational purposes only and does not replace medical advice, diagnostics, or clinical treatment from qualified pediatricians, neonatologists, or emergency services.
          </p>
        </div>
      </section>

      {/* 3. SINCE 2003 TRUST & INTRODUCTION */}
      <section className="py-16 md:py-24 bg-brand-white px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal direction="right">
              <span className="text-xs md:text-sm font-sans font-bold tracking-widest uppercase text-brand-coral">
                Domain History & Trust
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-extrabold text-brand-deep mt-2">
                A digital identity rooted in prematurity awareness since 2003
              </h2>
              <p className="text-brand-brown text-sm md:text-base leading-relaxed mt-4">
                Prematurite.com has carried a focused digital presence since 2003, now shaped into a modern educational resource for premature baby care awareness. For over two decades, this address has been dedicated to sharing helpful content. Today, we focus on delivering India's premium parent education platform for preterm infants.
              </p>
              <p className="text-brand-brown text-sm md:text-base leading-relaxed">
                Our educational material is developed strictly following established public health protocols and pediatric recommendations. Our mission is to reduce parent anxiety by translating clinical concepts into friendly, actionable guidance.
              </p>
            </ScrollReveal>
          </div>
          
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ScrollReveal direction="left" delay={0.1} className="bg-brand-rose/40 rounded-3xl p-6 border border-brand-coral/15">
              <Award className="w-8 h-8 text-brand-coral mb-4" />
              <h3 className="font-display font-bold text-brand-deep text-base mb-2">Evidence-Based Content</h3>
              <p className="text-brand-brown text-xs leading-relaxed">
                Every topic page is double-checked against verified neonatal care guidelines to ensure medical accuracy.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.2} className="bg-brand-rose/40 rounded-3xl p-6 border border-brand-coral/15">
              <Users className="w-8 h-8 text-brand-coral mb-4" />
              <h3 className="font-display font-bold text-brand-deep text-base mb-2">Family Centered</h3>
              <p className="text-brand-brown text-xs leading-relaxed">
                Written directly for parents, relatives, and home caregivers using supportive and simple vocabulary.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.3} className="bg-brand-rose/40 rounded-3xl p-6 border border-brand-coral/15">
              <BookOpen className="w-8 h-8 text-brand-coral mb-4" />
              <h3 className="font-display font-bold text-brand-deep text-base mb-2">Resource Library</h3>
              <p className="text-brand-brown text-xs leading-relaxed">
                Gain access to structured checklists, virtual telehealth logs, and developmental tracking materials.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.4} className="bg-brand-rose/40 rounded-3xl p-6 border border-brand-coral/15">
              <Clock className="w-8 h-8 text-brand-coral mb-4" />
              <h3 className="font-display font-bold text-brand-deep text-base mb-2">Scalable Tech Design</h3>
              <p className="text-brand-brown text-xs leading-relaxed">
                Built on static export technology ensuring high page load speeds and complete compatibility across devices.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. SERVICES PREVIEW SECTION */}
      <section className="py-16 md:py-24 bg-brand-rose/20 px-4 border-y border-brand-coral/10">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up">
            <SectionHeading
              subtitle="Topic Areas"
              title="Premature Baby Care Guidance & Education"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <ScrollReveal key={service.slug} direction="up" delay={index * 0.1}>
                <ServiceCard service={service} />
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <ScrollReveal direction="up">
              <Button href="/services/" variant="outline" id="view-all-topics-btn">
                View All 12 Educational Topics
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* NEW CONTENT: CORRECTED AGE EXPLAINER & METRIC LOGS */}
      <section className="py-16 md:py-24 bg-brand-white px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative flex justify-center order-last lg:order-first">
            <ScrollReveal direction="right" className="w-full max-w-sm sm:max-w-md">
              <div className="bg-brand-rose/40 border border-brand-coral/15 rounded-3xl p-6 md:p-8 space-y-4">
                <h3 className="font-display font-bold text-brand-deep text-base md:text-lg">
                  Milestone Adjustments Example
                </h3>
                <p className="text-brand-brown text-xs md:text-sm leading-relaxed">
                  Comparing standard term milestones to adjusted timelines helps parents set realistic developmental expectations:
                </p>
                <div className="space-y-3">
                  <div className="bg-brand-white rounded-xl p-3 border border-brand-coral/10">
                    <span className="text-[10px] font-sans font-bold uppercase text-brand-coral block">At 4 Months Calendar Age:</span>
                    <p className="text-brand-brown text-xs">Standard charts expect complete head control and active reaching. A baby born 2 months early should be evaluated against 2-month milestones instead.</p>
                  </div>
                  <div className="bg-brand-white rounded-xl p-3 border border-brand-coral/10">
                    <span className="text-[10px] font-sans font-bold uppercase text-green-600 block">At 2 Months Corrected Age:</span>
                    <p className="text-brand-brown text-xs">Preterm baby tracks objects visually, smiles responsively, and lifts head during tummy time. Development is healthy and on track.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal direction="left">
              <span className="text-xs md:text-sm font-sans font-bold tracking-widest uppercase text-brand-coral">
                Milestone Tracking
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-extrabold text-brand-deep mt-2">
                Understanding Milestone Shifts
              </h2>
              <p className="text-brand-brown text-sm md:text-base leading-relaxed mt-4">
                When a baby is born early, their physical systems require additional time to grow outside the womb. Evaluating their motor skills, speech cooing, and cognitive tracking against standard calendar age charts leads to unnecessary family anxiety.
              </p>
              <p className="text-brand-brown text-sm md:text-base leading-relaxed">
                By adjusting milestones using **corrected gestational age** (chronological weeks minus weeks born early), parents can track progress accurately. Our interactive milestone simulator helps perform this math automatically, aligning expectations with your pediatrician's parameters.
              </p>
              <div className="pt-2">
                <Button href="/growth-milestones/" id="home-milestones-btn">
                  Launch Milestone Calculator
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* NEW CONTENT: NURSERY SAFETY & SANITATION STANDARDS */}
      <section className="py-16 md:py-24 bg-brand-rose/10 px-4 border-t border-brand-coral/10">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up">
            <SectionHeading
              subtitle="Safety Benchmarks"
              title="Nursery Preparation & Home Care Standards"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal direction="up" delay={0.1} className="bg-brand-white border border-brand-coral/15 rounded-3xl p-6 shadow-soft">
              <h3 className="font-display font-bold text-brand-deep text-base mb-2">
                Nursery Heat Control
              </h3>
              <p className="text-brand-brown text-xs md:text-sm leading-relaxed">
                Preterm infants lose body heat rapidly due to low subcutaneous fat. Maintain room temperatures strictly between 22 and 24 degrees Celsius. Dress the baby in layers and keep cribs away from AC drafts.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2} className="bg-brand-white border border-brand-coral/15 rounded-3xl p-6 shadow-soft">
              <h3 className="font-display font-bold text-brand-deep text-base">
                Sanitization Stations
              </h3>
              <p className="text-brand-brown text-xs md:text-sm leading-relaxed">
                Enforce hand sanitation from fingertips to elbows for all primary caregivers. Sanitize keys, handle surfaces, and phones regularly to keep the immediate nursery environment safe from common viral particles.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3} className="bg-brand-white border border-brand-coral/15 rounded-3xl p-6 shadow-soft">
              <h3 className="font-display font-bold text-brand-deep text-base">
                Hydration Diaper Checks
              </h3>
              <p className="text-brand-brown text-xs md:text-sm leading-relaxed">
                Count daily wet diapers closely. A healthy preterm baby should wet at least six diapers in twenty-four hours. Urates or reddish brick-dust spots indicate mild dehydration, requiring pediatrician follow-ups.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* NEW CONTENT: HOME TRANSITION SAFETY MATRIX */}
      <section className="py-16 md:py-24 bg-brand-white px-4 border-t border-brand-coral/10">
        <div className="max-w-7xl mx-auto space-y-12">
          <ScrollReveal direction="up">
            <SectionHeading
              subtitle="Home Transition"
              title="Standard Baby Care vs. Preterm Care Priorities"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ScrollReveal direction="right" className="bg-brand-rose/10 border border-brand-coral/15 rounded-3xl p-6 md:p-8 space-y-6">
              <h3 className="font-display font-bold text-brand-deep text-lg">
                Standard Full-Term Care Basics
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-brand-brown/40 flex-shrink-0 mt-2 mr-3" />
                  <div>
                    <strong className="text-brand-deep text-sm block">Home Temperature Settings</strong>
                    <p className="text-brand-brown text-xs md:text-sm">Standard rooms can rely on normal fan speeds or open windows depending on the season, as full-term infants self-regulate body heat easily.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-brand-brown/40 flex-shrink-0 mt-2 mr-3" />
                  <div>
                    <strong className="text-brand-deep text-sm block">Visitor Guidelines</strong>
                    <p className="text-brand-brown text-xs md:text-sm">Friends and extended family members are typically welcomed to meet the baby within the first few weeks, requiring only basic hand washing.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-brand-brown/40 flex-shrink-0 mt-2 mr-3" />
                  <div>
                    <strong className="text-brand-deep text-sm block">Feed Scheduling</strong>
                    <p className="text-brand-brown text-xs md:text-sm">Healthy infants can be fed on-demand when they cry, adjusting their intake naturally without rigid time-logging trackers.</p>
                  </div>
                </li>
              </ul>
            </ScrollReveal>

            <ScrollReveal direction="left" className="bg-brand-rose/40 border border-brand-coral/25 rounded-3xl p-6 md:p-8 space-y-6 shadow-glow">
              <h3 className="font-display font-bold text-brand-deep text-lg flex items-center text-brand-coral">
                Preterm Home-Care Priorities
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-brand-coral flex-shrink-0 mt-2 mr-3" />
                  <div>
                    <strong className="text-brand-deep text-sm block">Thermal Environment Control</strong>
                    <p className="text-brand-brown text-xs md:text-sm">Requires rooms strictly set at 22-24 degrees Celsius. Drafts from AC vents must be blocked, and babies require specific cotton-layer wrapping.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-brand-coral flex-shrink-0 mt-2 mr-3" />
                  <div>
                    <strong className="text-brand-deep text-sm block">Visitor Isolation Protocol</strong>
                    <p className="text-brand-brown text-xs md:text-sm">Restrict direct visitors for the first three months. Ensure primary caretakers sanitize hands, arms, keys, and phone screens before entry.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-brand-coral flex-shrink-0 mt-2 mr-3" />
                  <div>
                    <strong className="text-brand-deep text-sm block">Rigid Intake & Output Logs</strong>
                    <p className="text-brand-brown text-xs md:text-sm">Feeds must follow pediatrician-prescribed schedules (often every 2-3 hours) regardless of sleep, with daily wet-diaper outputs tracked in written logs.</p>
                  </div>
                </li>
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 5. PARENT EDUCATION JOURNEY SECTION */}
      <section className="py-16 md:py-24 bg-brand-white px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up">
            <SectionHeading
              subtitle="The Journey"
              title="A Structured Path to Confident Parenting"
            />
          </ScrollReveal>

          <div className="relative border-l-2 border-brand-coral/30 ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
            
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute -left-[35px] md:-left-[51px] top-0 bg-brand-coral text-brand-white w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-display font-bold text-xs md:text-sm shadow-soft">
                01
              </div>
              <ScrollReveal direction="right">
                <h3 className="font-display font-bold text-brand-deep text-lg md:text-xl mb-2">
                  NICU Stay Support
                </h3>
                <p className="text-brand-brown text-sm leading-relaxed max-w-3xl">
                  Understand incubator functions, coordinate communication with neonatal nurses, and safely practice containment holds or skin-to-skin kangaroo care under hospital supervision.
                </p>
              </ScrollReveal>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="absolute -left-[35px] md:-left-[51px] top-0 bg-brand-coral text-brand-white w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-display font-bold text-xs md:text-sm shadow-soft">
                02
              </div>
              <ScrollReveal direction="right">
                <h3 className="font-display font-bold text-brand-deep text-lg md:text-xl mb-2">
                  Feeding & Nutrition Plans
                </h3>
                <p className="text-brand-brown text-sm leading-relaxed max-w-3xl">
                  Coordinate breast milk expression, learn hunger cue patterns, and follow instructions from lactation specialists and pediatricians regarding human milk fortifiers or tube-to-oral transitions.
                </p>
              </ScrollReveal>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="absolute -left-[35px] md:-left-[51px] top-0 bg-brand-coral text-brand-white w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-display font-bold text-xs md:text-sm shadow-soft">
                03
              </div>
              <ScrollReveal direction="right">
                <h3 className="font-display font-bold text-brand-deep text-lg md:text-xl mb-2">
                  Transition to Home Care
                </h3>
                <p className="text-brand-brown text-sm leading-relaxed max-w-3xl">
                  Set up nursery rooms away from direct drafts, establish sanitizer stations, manage visitors, check infant body warmth layers, and track daily diaper logs.
                </p>
              </ScrollReveal>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="absolute -left-[35px] md:-left-[51px] top-0 bg-brand-coral text-brand-white w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-display font-bold text-xs md:text-sm shadow-soft">
                04
              </div>
              <ScrollReveal direction="right">
                <h3 className="font-display font-bold text-brand-deep text-lg md:text-xl mb-2">
                  Developmental Tracking
                </h3>
                <p className="text-brand-brown text-sm leading-relaxed max-w-3xl">
                  Calculate corrected age mathematically, observe milestone windows, track growth percentiles, and prepare organized lists of concerns to maximize the value of routine pediatrician visits.
                </p>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* NEW CONTENT: COMMON NICU TERMINOLOGY REFERENCE INDEX */}
      <section className="py-16 md:py-24 bg-brand-rose/10 px-4 border-t border-brand-coral/10">
        <div className="max-w-7xl mx-auto space-y-12">
          <ScrollReveal direction="up">
            <SectionHeading
              subtitle="Reference Index"
              title="Common NICU Terminology Explained"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ScrollReveal direction="up" className="bg-brand-white border border-brand-coral/15 rounded-3xl p-6 shadow-soft space-y-3">
              <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-brand-coral">Respiratory Support</span>
              <h3 className="font-display font-bold text-brand-deep text-base">Surfactant</h3>
              <p className="text-brand-brown text-xs md:text-sm leading-relaxed">
                A naturally occurring liquid substance that keeps the tiny air sacs (alveoli) in the lungs open. Premature infants born before thirty-two weeks often lack sufficient surfactant, requiring hospital clinical administration to assist normal breathing.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1} className="bg-brand-white border border-brand-coral/15 rounded-3xl p-6 shadow-soft space-y-3">
              <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-brand-coral">Breathing Assistance</span>
              <h3 className="font-display font-bold text-brand-deep text-base">CPAP & HFNC</h3>
              <p className="text-brand-brown text-xs md:text-sm leading-relaxed">
                Continuous Positive Airway Pressure (CPAP) and High-Flow Nasal Cannula (HFNC) are non-invasive methods that deliver warmed, humidified oxygen under mild pressure to keep the infant's airway open, reducing breathing effort.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2} className="bg-brand-white border border-brand-coral/15 rounded-3xl p-6 shadow-soft space-y-3">
              <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-brand-coral">Jaundice Treatment</span>
              <h3 className="font-display font-bold text-brand-deep text-base">Bilirubin & Phototherapy</h3>
              <p className="text-brand-brown text-xs md:text-sm leading-relaxed">
                Bilirubin is a yellow pigment created by the normal breakdown of red blood cells. Preterm livers process it slowly. Phototherapy uses blue lights to help break down bilirubin through the skin so it can be excreted easily.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3} className="bg-brand-white border border-brand-coral/15 rounded-3xl p-6 shadow-soft space-y-3 font-sans">
              <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-brand-coral">Nutrition Delivery</span>
              <h3 className="font-display font-bold text-brand-deep text-base">TPN & Gavage Tube</h3>
              <p className="text-brand-brown text-xs md:text-sm leading-relaxed font-sans">
                Total Parenteral Nutrition (TPN) delivers vital nutrients directly into the bloodstream. Gavage feeding routes expressed breast milk directly into the stomach via a soft tube in the nose or mouth, bypassing coordinate sucking difficulties.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4} className="bg-brand-white border border-brand-coral/15 rounded-3xl p-6 shadow-soft space-y-3">
              <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-brand-coral">Vital Signs Monitoring</span>
              <h3 className="font-display font-bold text-brand-deep text-base">Apnea & Bradycardia</h3>
              <p className="text-brand-brown text-xs md:text-sm leading-relaxed">
                Apnea represents a pause in breathing lasting longer than twenty seconds. Bradycardia refers to a temporary drop in heart rate below typical infant levels. Both are common in premature infants as their neurological systems mature.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.5} className="bg-brand-white border border-brand-coral/15 rounded-3xl p-6 shadow-soft space-y-3 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-brand-coral">Newborn Score</span>
                <h3 className="font-display font-bold text-brand-deep text-base">Apgar Score</h3>
                <p className="text-brand-brown text-xs md:text-sm leading-relaxed">
                  A quick physical rating system checked at one and five minutes after birth evaluating muscle tone, heart rate, reflexes, skin color, and breathing effort. It helps doctors decide if immediate assistance is needed.
                </p>
              </div>
              <div className="pt-2 border-t border-brand-coral/10 mt-3">
                <Link href="/what-is-prematurity/" className="inline-flex items-center text-xs font-bold text-brand-coral hover:underline">
                  Explore Preterm Terms <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* NEW CONTENT: TESTIMONIAL PREVIEW WALL */}
      <section className="py-16 md:py-24 bg-brand-rose/20 px-4 border-y border-brand-coral/10">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up">
            <SectionHeading
              subtitle="Testimonials Overview"
              title="Parent Support Feedback"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal direction="up" delay={0.1} className="bg-brand-white border border-brand-coral/15 rounded-3xl p-6 shadow-soft">
              <p className="text-brand-deep text-sm italic mb-4">
                "Prematurite helped us understand the basics of premature baby care in simple language. It gave our family better clarity before speaking with our doctor."
              </p>
              <h4 className="font-display font-bold text-brand-deep text-xs">A Mother from Vadodara</h4>
              <span className="text-[10px] text-brand-brown">Parent of late-preterm infant</span>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2} className="bg-brand-white border border-brand-coral/15 rounded-3xl p-6 shadow-soft">
              <p className="text-brand-deep text-sm italic mb-4">
                "The explanation of corrected age saved us so much worry. We were comparing our child to full-term milestones, but the resources here explained the right math."
              </p>
              <h4 className="font-display font-bold text-brand-deep text-xs">A Father from Pune</h4>
              <span className="text-[10px] text-brand-brown">Parent of very preterm infant</span>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3} className="bg-brand-white border border-brand-coral/15 rounded-3xl p-6 shadow-soft">
              <p className="text-brand-deep text-sm italic mb-4">
                "Entering the NICU was terrifying. The guides explaining common hospital equipment and terms helped us feel like partners in our baby's care rather than outsiders."
              </p>
              <h4 className="font-display font-bold text-brand-deep text-xs">A Parent from Bengaluru</h4>
              <span className="text-[10px] text-brand-brown">Parent of moderately preterm infant</span>
            </ScrollReveal>
          </div>

          <div className="text-center mt-12">
            <ScrollReveal direction="up">
              <Button href="/testimonials/" variant="outline" id="view-testimonials-btn">
                Read All 10 Testimonials
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 6. PARENT STORIES PREVIEW */}
      <section className="py-16 md:py-24 bg-brand-rose/10 px-4 border-t border-brand-coral/10">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up">
            <SectionHeading
              subtitle="Scenarios"
              title="Educational Parent Stories"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredStories.map((story, idx) => (
              <ScrollReveal key={story.id} direction="up" delay={idx * 0.1} className="bg-brand-white border border-brand-coral/15 rounded-3xl p-6 shadow-soft flex flex-col justify-between hover:border-brand-coral/30 hover:shadow-glow transition-all duration-300">
                <div>
                  <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-brand-coral block mb-2">
                    {story.scenario}
                  </span>
                  <h3 className="font-display font-bold text-brand-deep text-base md:text-lg mb-3">
                    {story.title}
                  </h3>
                  <p className="text-brand-brown text-xs md:text-sm leading-relaxed mb-4 line-clamp-4">
                    {story.content}
                  </p>
                </div>
                <div className="pt-4 border-t border-brand-coral/10 mt-4">
                  <p className="text-brand-deep text-xs font-semibold italic">
                    <strong>Takeaway:</strong> {story.takeaway}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <ScrollReveal direction="up">
              <Button href="/parent-stories/" variant="outline" id="view-parent-stories-btn">
                Read All Parent Stories
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 7. BLOG ARTICLE PREVIEW */}
      <section className="py-16 md:py-24 bg-brand-white px-4 border-t border-brand-coral/10">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up">
            <SectionHeading
              subtitle="Educational Blog"
              title="Trustworthy Articles & Care Manuals"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBlogs.map((post, idx) => (
              <ScrollReveal key={post.slug} direction="up" delay={idx * 0.1}>
                <BlogCard post={post} />
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <ScrollReveal direction="up">
              <Button href="/blog/" variant="primary" id="view-blog-posts-btn">
                Explore Blog Directory
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* NEW CONTENT: PARENT SUPPORT & CAREGIVER WELLNESS */}
      <section className="py-16 md:py-24 bg-brand-white px-4 border-t border-brand-coral/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal direction="right">
              <span className="text-xs md:text-sm font-sans font-bold tracking-widest uppercase text-brand-coral">
                Caregiver Mental Health
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-extrabold text-brand-deep mt-2">
                Supporting Parent Wellness Through the NICU Journey
              </h2>
              <p className="text-brand-brown text-sm md:text-base leading-relaxed mt-4">
                Having a baby in the NICU is an emotional roller coaster. It is completely normal for parents to feel overwhelmed, anxious, or isolated. Your physical and emotional well-being directly impacts your ability to care for your infant.
              </p>
              <p className="text-brand-brown text-sm md:text-base leading-relaxed">
                We believe in providing holistic education. That means advocating for parent self-care, establishing healthy sleep rotations, dividing household tasks with partners, and recognizing postpartum mood changes. Our parent support resources provide clear guidelines to help families process their journeys.
              </p>
              <div className="pt-2">
                <Button href="/parent-support/" id="home-support-btn">
                  Explore Parent Support Guides
                </Button>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-5 bg-brand-rose/40 border border-brand-coral/15 rounded-3xl p-6 md:p-8 space-y-6">
            <ScrollReveal direction="left" className="space-y-4">
              <h3 className="font-display font-bold text-brand-deep text-base">
                Parent Self-Care Checklist
              </h3>
              <ul className="space-y-3 text-xs md:text-sm text-brand-brown">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-coral flex-shrink-0 mt-1.5 mr-2" />
                  <span>Establish a structured sleep rotation schedule with your partner.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-coral flex-shrink-0 mt-1.5 mr-2" />
                  <span>Drink at least 8-10 glasses of water daily, especially if pumping milk.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-coral flex-shrink-0 mt-1.5 mr-2" />
                  <span>Take a daily 15-minute walk outside the hospital or home environment.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-coral flex-shrink-0 mt-1.5 mr-2" />
                  <span>Accept help from friends for meals, laundry, or home sanitation chores.</span>
                </li>
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 8. FAQ PREVIEW SECTION */}
      <section className="py-16 md:py-24 bg-brand-rose/20 px-4 border-t border-brand-coral/10">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal direction="up">
            <SectionHeading
              subtitle="FAQ Overview"
              title="Frequently Asked Questions"
            />
          </ScrollReveal>

          <div className="space-y-4">
            {featuredFAQs.map((faq, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.05}>
                <FAQItem faq={faq} id={index} />
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <ScrollReveal direction="up">
              <Button href="/faq/" variant="outline" id="view-all-faqs-btn">
                Browse All 20+ FAQs
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 9. CONTACT & QUICK INQUIRY SECTION */}
      <section className="py-16 md:py-24 bg-brand-white px-4 border-t border-brand-coral/10" id="quick-inquiry">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal direction="right">
              <span className="text-xs md:text-sm font-sans font-bold tracking-widest uppercase text-brand-coral">
                Contact Care Team
              </span>
              <h2 className="text-2xl md:text-4xl font-display font-extrabold text-brand-deep mt-2">
                Have a question about premature baby care?
              </h2>
              <p className="text-brand-brown text-sm md:text-base leading-relaxed mt-4">
                Fill out our quick inquiry form to request free educational resources, print checklists, or suggest topics you want our research team to cover.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1}>
              <DisclaimerBox />
            </ScrollReveal>
          </div>

          <div className="lg:col-span-6">
            <ScrollReveal direction="left" delay={0.2}>
              <InquiryForm />
            </ScrollReveal>
          </div>

        </div>
      </section>

    </div>
  );
}
