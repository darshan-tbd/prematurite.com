'use client';

import React, { useState } from 'react';
import { Loader2, X, Upload } from 'lucide-react';
import Button from './Button';
import ThankYouModal from './ThankYouModal';

export default function CareerForm({ job, isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    coverLetter: '',
  });
  const [resume, setResume] = useState(null);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  if (!isOpen || !job) return null;

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }



    if (!resume) {
      newErrors.resume = 'Resume upload is required';
    } else {
      const allowedExtensions = /(\.pdf|\.doc|\.docx)$/i;
      if (!allowedExtensions.exec(resume.name)) {
        newErrors.resume = 'Please upload a PDF or Word Document (.doc, .docx) only';
      }
      if (resume.size > 5 * 1024 * 1024) {
        newErrors.resume = 'File size must be less than 5MB';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setResume(file);
    if (errors.resume) {
      setErrors((prev) => ({ ...prev, resume: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);

    // Artificial delay for UI polish and modal trigger
    setTimeout(() => {
      setIsLoading(false);
      setShowSuccess(true);
    }, 1000);
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 z-[500] flex items-center justify-center p-4 overflow-y-auto">
        {/* Overlay */}
        <div className="fixed inset-0 bg-black/50" onClick={onClose} />

        {/* Modal content */}
        <div className="bg-brand-white relative w-full max-w-lg rounded-3xl p-6 md:p-8 shadow-glow border border-brand-coral/20 z-10 my-8">
          {/* Close X */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full text-brand-brown/60 hover:bg-brand-rose hover:text-brand-coral transition-colors duration-200"
            aria-label="Close form"
            id="close-career-modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Heading */}
          <div className="mb-6 pr-6">
            <span className="inline-block text-xs font-sans font-bold uppercase tracking-wider text-brand-coral mb-1">
              Apply for Opening
            </span>
            <h3 className="font-display text-xl md:text-2xl font-bold text-brand-deep leading-tight">
              {job.title}
            </h3>
            <p className="text-brand-brown text-xs md:text-sm mt-1">
              Department: {job.department}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {/* Full Name */}
            <div>
              <label htmlFor="career-name" className="block text-xs font-sans font-bold uppercase tracking-wider text-brand-deep mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                id="career-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 rounded-xl bg-brand-white border ${
                  errors.name ? 'border-red-500' : 'border-brand-coral/20'
                } text-brand-deep placeholder-brand-brown/40 text-sm focus:outline-none focus:ring-2 focus:ring-brand-coral/20 transition-all duration-300`}
                placeholder="Enter your full name"
                disabled={isLoading}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1 font-medium">{errors.name}</p>}
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="career-email" className="block text-xs font-sans font-bold uppercase tracking-wider text-brand-deep mb-1.5">
                Email Address *
              </label>
              <input
                type="email"
                id="career-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 rounded-xl bg-brand-white border ${
                  errors.email ? 'border-red-500' : 'border-brand-coral/20'
                } text-brand-deep placeholder-brand-brown/40 text-sm focus:outline-none focus:ring-2 focus:ring-brand-coral/20 transition-all duration-300`}
                placeholder="name@example.com"
                disabled={isLoading}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email}</p>}
            </div>

            {/* Resume Upload */}
            <div>
              <label className="block text-xs font-sans font-bold uppercase tracking-wider text-brand-deep mb-1.5">
                Upload Resume (PDF/DOC) *
              </label>
              <div className="relative border-2 border-dashed border-brand-coral/25 rounded-2xl p-4 text-center hover:bg-brand-rose/20 transition-colors duration-300 cursor-pointer">
                <input
                  type="file"
                  id="career-resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  disabled={isLoading}
                />
                <Upload className="w-6 h-6 text-brand-coral mx-auto mb-2" />
                <p className="text-xs text-brand-deep font-semibold">
                  {resume ? resume.name : 'Click or Drag to Upload Resume'}
                </p>
                <p className="text-[10px] text-brand-brown/60 mt-1">
                  PDF or Word Document formats only. Maximum size: 5MB
                </p>
              </div>
              {errors.resume && <p className="text-red-500 text-xs mt-1 font-medium">{errors.resume}</p>}
            </div>

            {/* Cover Letter */}
            <div>
              <label htmlFor="career-cover" className="block text-xs font-sans font-bold uppercase tracking-wider text-brand-deep mb-1.5">
                Cover Letter <span className="text-brand-brown/50 font-normal">(Optional)</span>
              </label>
              <textarea
                id="career-cover"
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2.5 rounded-xl bg-brand-white border border-brand-coral/20 text-brand-deep placeholder-brand-brown/40 text-sm focus:outline-none focus:ring-2 focus:ring-brand-coral/20 transition-all duration-300 resize-none"
                placeholder="Share a brief introduction or write a cover letter..."
                disabled={isLoading}
              />
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-2">
              <Button
                variant="outline"
                className="flex-1"
                onClick={onClose}
                disabled={isLoading}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1"
                disabled={isLoading}
                id="submit-career-form"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </span>
                ) : (
                  'Submit Application'
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Thank You Success Modal */}
      <ThankYouModal
        isOpen={showSuccess}
        onClose={handleSuccessClose}
        message="Thank you! Our team will review your application and reach you soon."
      />
    </>
  );
}
