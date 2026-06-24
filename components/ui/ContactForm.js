'use client';

import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';
import Button from './Button';
import ThankYouModal from './ThankYouModal';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'General Inquiry',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const inquiryOptions = [
    'Premature Baby Care Education',
    'NICU Journey Support',
    'Feeding and Nutrition Awareness',
    'Growth and Development Questions',
    'Resource Request',
    'General Inquiry',
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }



    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);

    // Simulate 1-second API call
    setTimeout(() => {
      setIsLoading(false);
      setShowModal(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        inquiryType: 'General Inquiry',
        message: '',
      });
    }, 1000);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        {/* Full Name */}
        <div>
          <label htmlFor="contact-name" className="block text-xs font-sans font-bold uppercase tracking-wider text-brand-deep mb-2">
            Full Name <span className="text-brand-coral">*</span>
          </label>
          <input
            type="text"
            id="contact-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-2xl bg-brand-white border ${
              errors.name ? 'border-red-500 focus:ring-red-200' : 'border-brand-coral/25 focus:ring-brand-coral/20'
            } text-brand-deep placeholder-brand-brown/50 text-sm focus:outline-none focus:ring-4 transition-all duration-300`}
            placeholder="Enter your full name"
            disabled={isLoading}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1 font-medium">{errors.name}</p>}
        </div>

        {/* Email Address */}
        <div>
          <label htmlFor="contact-email" className="block text-xs font-sans font-bold uppercase tracking-wider text-brand-deep mb-2">
            Email Address <span className="text-brand-coral">*</span>
          </label>
          <input
            type="email"
            id="contact-email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-2xl bg-brand-white border ${
              errors.email ? 'border-red-500 focus:ring-red-200' : 'border-brand-coral/25 focus:ring-brand-coral/20'
            } text-brand-deep placeholder-brand-brown/50 text-sm focus:outline-none focus:ring-4 transition-all duration-300`}
            placeholder="name@example.com"
            disabled={isLoading}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email}</p>}
        </div>

        {/* Inquiry Type */}
        <div>
          <label htmlFor="contact-inquiry" className="block text-xs font-sans font-bold uppercase tracking-wider text-brand-deep mb-2">
            Inquiry Type <span className="text-brand-coral">*</span>
          </label>
          <select
            id="contact-inquiry"
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-2xl bg-brand-white border border-brand-coral/25 focus:ring-brand-coral/20 text-brand-deep text-sm focus:outline-none focus:ring-4 transition-all duration-300 appearance-none cursor-pointer"
            disabled={isLoading}
          >
            {inquiryOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="contact-message" className="block text-xs font-sans font-bold uppercase tracking-wider text-brand-deep mb-2">
            Message / Inquiry Details <span className="text-brand-coral">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className={`w-full px-4 py-3 rounded-2xl bg-brand-white border ${
              errors.message ? 'border-red-500 focus:ring-red-200' : 'border-brand-coral/25 focus:ring-brand-coral/20'
            } text-brand-deep placeholder-brand-brown/50 text-sm focus:outline-none focus:ring-4 transition-all duration-300 resize-none`}
            placeholder="Describe your question or required educational topic..."
            disabled={isLoading}
          />
          {errors.message && <p className="text-red-500 text-xs mt-1 font-medium">{errors.message}</p>}
        </div>

        {/* Submit button */}
        <div className="pt-2">
          <Button
            type="submit"
            className="w-full"
            disabled={isLoading}
            id="submit-contact-form"
          >
            {isLoading ? (
              <span className="flex items-center">
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Processing...
              </span>
            ) : (
              'Send Inquiry'
            )}
          </Button>
        </div>
      </form>

      {/* Thank You Success Modal */}
      <ThankYouModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
