import React from 'react';
import { Briefcase, Award } from 'lucide-react';
import Button from './Button';

export default function JobCard({ job, onApply }) {
  const { title, department, description, requirements } = job;

  return (
    <div className="bg-brand-white border border-brand-coral/15 rounded-3xl p-6 md:p-8 shadow-soft flex flex-col justify-between h-full hover:border-brand-coral/30 hover:shadow-glow transition-all duration-300">
      <div>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-coral/10 text-brand-coral">
            <Briefcase className="w-3 h-3 mr-1" />
            {department}
          </span>
        </div>

        {/* Job Title */}
        <h3 className="font-display text-lg md:text-xl font-bold text-brand-deep mb-3">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-brand-brown text-sm leading-relaxed mb-6">
          {description}
        </p>

        {/* Requirements */}
        <div className="mb-6">
          <span className="inline-flex items-center text-xs font-sans font-bold uppercase tracking-wider text-brand-coral mb-3">
            <Award className="w-4 h-4 mr-1.5" />
            Requirements:
          </span>
          <ul className="space-y-1.5">
            {requirements.map((req, index) => (
              <li key={index} className="text-brand-deep text-xs flex items-start space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-salmon flex-shrink-0 mt-1.5" />
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Apply Button */}
      <div className="pt-4 border-t border-brand-coral/10">
        <Button 
          variant="outline" 
          className="w-full"
          onClick={() => onApply(job)}
        >
          Apply Now
        </Button>
      </div>
    </div>
  );
}
