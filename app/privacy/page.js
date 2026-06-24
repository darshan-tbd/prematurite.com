'use client';

import React from 'react';
import DisclaimerBox from '@/components/ui/DisclaimerBox';
import ScrollReveal from '@/components/animation/ScrollReveal';

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-8" id="privacy-page">
      <ScrollReveal direction="up" className="space-y-4">
        <h1 className="text-3xl md:text-5xl font-display font-extrabold text-brand-deep tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-brand-brown text-sm">Last Updated: June 23, 2026</p>
        <div className="h-1 w-12 bg-brand-coral rounded-full mt-4" />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.1} className="prose prose-stone text-brand-brown text-sm md:text-base leading-relaxed space-y-6">
        <p>
          At Prematurite Digital Health, accessible from prematurite.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Prematurite Digital Health and how we use it.
        </p>

        <h2 className="font-display font-bold text-brand-deep text-lg md:text-xl mt-6">
          1. Information We Collect
        </h2>
        <p>
          If you contact us directly or submit an inquiry through our forms (General Contact Form, Quick Inquiry Form, Career Application Form), we may collect your name, email address, the message details you provide, and any attachments such as resumes.
        </p>

        <h2 className="font-display font-bold text-brand-deep text-lg md:text-xl mt-6">
          2. How We Use Your Information
        </h2>
        <p>
          We use the collected information to:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Provide, operate, and maintain our educational digital health platform.</li>
          <li>Improve, personalize, and expand our educational articles and guides.</li>
          <li>Understand and analyze how visitors interact with our resources.</li>
          <li>Develop new digital calculators, checklists, and parent support guides.</li>
          <li>Respond to your direct inquiries or evaluate career applications.</li>
        </ul>

        <h2 className="font-display font-bold text-brand-deep text-lg md:text-xl mt-6">
          3. Log Files & Cookies
        </h2>
        <p>
          Prematurite Digital Health follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, and tracking users' movement on the website.
        </p>

        <h2 className="font-display font-bold text-brand-deep text-lg md:text-xl mt-6">
          4. Consent
        </h2>
        <p>
          By using our website, you hereby consent to our Privacy Policy and agree to its terms.
        </p>

        <DisclaimerBox className="mt-8" />
      </ScrollReveal>
    </div>
  );
}
