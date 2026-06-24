import React from 'react';
import Link from 'next/link';
import { Heart, Mail } from 'lucide-react';
import companyData from '../../data/company.json';
import navData from '../../data/navigation.json';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-rose border-t border-brand-coral/15" id="main-footer">
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <Link
              href="/"
              className="flex items-center space-x-2 font-display font-extrabold text-brand-deep"
              aria-label="Prematurite Digital Health Home"
            >
              <div className="bg-brand-coral p-1.5 rounded-xl text-brand-white">
                <Heart className="w-5 h-5" fill="currentColor" />
              </div>
              <span className="text-lg md:text-xl tracking-tight leading-none">
                Prematurite
                <span className="block text-[10px] md:text-[11px] font-sans font-semibold tracking-wider uppercase text-brand-brown">
                  Digital Health
                </span>
              </span>
            </Link>
            <p className="text-brand-brown text-sm leading-relaxed">
              Prematurite Digital Health is a warm, trusted digital resource for Indian parents and families navigating premature birth, NICU journeys, feeding care, growth milestones, kangaroo care, post-discharge home care, and parent support.
            </p>
            <p className="text-[11px] text-brand-brown/70 font-medium">
              A digital identity rooted in prematurity awareness since {companyData.establishedYear}.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-brand-deep mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navData.footer.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-brand-brown hover:text-brand-coral text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services/Topics Column */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-brand-deep mb-4">
              Care Topics
            </h3>
            <ul className="space-y-2">
              {navData.footer.topics.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-brand-brown hover:text-brand-coral text-sm transition-colors duration-200 truncate block max-w-xs"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="space-y-4">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-brand-deep mb-4">
              Contact & Support
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm text-brand-brown">
                <Mail className="w-5 h-5 text-brand-coral flex-shrink-0 mt-0.5" />
                <a href={`mailto:${companyData.email}`} className="hover:text-brand-coral break-all">
                  {companyData.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Short Medical Disclaimer Strip */}
        <div className="mt-12 pt-8 border-t border-brand-coral/10">
          <div className="bg-brand-white/80 border border-brand-coral/10 rounded-2xl p-4 md:p-6 shadow-soft">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-brand-deep mb-1">
              Important Educational Notice
            </h4>
            <p className="text-brand-brown text-xs md:text-sm leading-relaxed">
              Prematurite Digital Health provides educational and informational content only. The information on this website is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified pediatrician, neonatologist, or healthcare professional for medical concerns. In case of medical emergency, contact your nearest hospital or emergency service immediately.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="bg-brand-deep py-6 text-center text-xs text-brand-rose/60 border-t border-brand-coral/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <p>© {currentYear} {companyData.brandName}. All rights reserved.</p>
          <div className="flex space-x-4">
            {navData.footer.legal.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="hover:text-brand-coral transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
