import React, { useState } from 'react';
import { CheckCircle2, Send, Phone, MessageSquare, AlertCircle } from 'lucide-react';

interface ConsultationFormProps {
  onSuccess?: () => void;
  compact?: boolean;
}

export function ConsultationForm({ onSuccess, compact = false }: ConsultationFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    propertyType: 'Private Residence',
    projectSize: '2,000 - 4,000 sq.ft',
    budget: '$100,000 - $250,000',
    preferredContact: 'WhatsApp',
    description: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      errs.phone = 'Please provide a valid contact number.';
    }
    if (!formData.city.trim()) errs.city = 'Please enter your project location / city.';
    if (!formData.description.trim()) {
      errs.description = 'Please briefly describe what you are looking to design.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate brief asynchronous processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onSuccess) {
        setTimeout(onSuccess, 3500);
      }
    }, 800);
  };

  if (isSubmitted) {
    return (
      <div className="bg-ivory-100 border border-stone-300 p-8 md:p-12 text-center animate-in fade-in duration-500">
        <div className="w-12 h-12 rounded-full bg-charcoal-900 text-ivory-50 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-6 h-6 text-brass-400" />
        </div>
        <p className="text-xs uppercase tracking-[0.25em] text-stone-500 font-medium mb-2">
          Consultation Request Received
        </p>
        <h3 className="font-serif text-3xl text-charcoal-900 mb-4">
          Thank you, {formData.name}.
        </h3>
        <p className="text-stone-600 text-sm leading-relaxed max-w-md mx-auto mb-6">
          We have received your project details for your <span className="font-medium text-charcoal-900">{formData.propertyType}</span> in <span className="font-medium text-charcoal-900">{formData.city}</span>. Our studio team will review your scope and get in touch via <span className="font-medium text-charcoal-900">{formData.preferredContact}</span> within one business day.
        </p>
        
        <div className="pt-4 border-t border-stone-200/80 max-w-sm mx-auto flex flex-col gap-2">
          <p className="text-xs text-stone-500">Need immediate assistance?</p>
          <div className="flex items-center justify-center gap-4 text-xs font-medium">
            <a 
              href={`https://wa.me/18005550190?text=Hi%20Aureline%20Interiors,%20I%20just%20submitted%20a%20consultation%20request%20for%20my%20project%20in%20${encodeURIComponent(formData.city)}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-charcoal-900 hover:text-stone-600 flex items-center gap-1.5 underline underline-offset-4"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Us Directly</span>
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Name */}
        <div>
          <label className="block text-xs uppercase tracking-[0.18em] text-stone-700 font-medium mb-2">
            Your Name *
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Eleanor Vance"
            className={`w-full bg-ivory-50 border ${
              errors.name ? 'border-red-500' : 'border-stone-300'
            } px-4 py-3 text-sm text-charcoal-900 focus:outline-none focus:border-charcoal-900 transition-colors`}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.name}</span>
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs uppercase tracking-[0.18em] text-stone-700 font-medium mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+1 (555) 000-0000"
            className={`w-full bg-ivory-50 border ${
              errors.phone ? 'border-red-500' : 'border-stone-300'
            } px-4 py-3 text-sm text-charcoal-900 focus:outline-none focus:border-charcoal-900 transition-colors`}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs uppercase tracking-[0.18em] text-stone-700 font-medium mb-2">
            Email Address *
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="eleanor@example.com"
            className={`w-full bg-ivory-50 border ${
              errors.email ? 'border-red-500' : 'border-stone-300'
            } px-4 py-3 text-sm text-charcoal-900 focus:outline-none focus:border-charcoal-900 transition-colors`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>

        {/* City / Location */}
        <div>
          <label className="block text-xs uppercase tracking-[0.18em] text-stone-700 font-medium mb-2">
            Project City / Location *
          </label>
          <input
            type="text"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            placeholder="e.g. Melbourne, London, New York"
            className={`w-full bg-ivory-50 border ${
              errors.city ? 'border-red-500' : 'border-stone-300'
            } px-4 py-3 text-sm text-charcoal-900 focus:outline-none focus:border-charcoal-900 transition-colors`}
          />
          {errors.city && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.city}</span>
            </p>
          )}
        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Property Type */}
        <div>
          <label className="block text-xs uppercase tracking-[0.18em] text-stone-700 font-medium mb-2">
            Property Type
          </label>
          <select
            value={formData.propertyType}
            onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
            className="w-full bg-ivory-50 border border-stone-300 px-4 py-3 text-sm text-charcoal-900 focus:outline-none focus:border-charcoal-900 transition-colors"
          >
            <option value="Private Residence">Private Residence</option>
            <option value="Apartment / Penthouse">Apartment / Penthouse</option>
            <option value="Townhouse / Villa">Townhouse / Villa</option>
            <option value="Refined Commercial / Studio">Refined Commercial / Studio</option>
            <option value="Full Architectural Renovation">Full Architectural Renovation</option>
          </select>
        </div>

        {/* Approximate Project Size */}
        <div>
          <label className="block text-xs uppercase tracking-[0.18em] text-stone-700 font-medium mb-2">
            Approx. Size
          </label>
          <select
            value={formData.projectSize}
            onChange={(e) => setFormData({ ...formData, projectSize: e.target.value })}
            className="w-full bg-ivory-50 border border-stone-300 px-4 py-3 text-sm text-charcoal-900 focus:outline-none focus:border-charcoal-900 transition-colors"
          >
            <option value="Under 2,000 sq.ft">Under 2,000 sq.ft</option>
            <option value="2,000 - 4,000 sq.ft">2,000 – 4,000 sq.ft</option>
            <option value="4,000 - 8,000 sq.ft">4,000 – 8,000 sq.ft</option>
            <option value="8,000+ sq.ft">8,000+ sq.ft</option>
          </select>
        </div>

        {/* Estimated Budget */}
        <div>
          <label className="block text-xs uppercase tracking-[0.18em] text-stone-700 font-medium mb-2">
            Estimated Budget
          </label>
          <select
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            className="w-full bg-ivory-50 border border-stone-300 px-4 py-3 text-sm text-charcoal-900 focus:outline-none focus:border-charcoal-900 transition-colors"
          >
            <option value="$50,000 - $100,000">$50,000 – $100,000</option>
            <option value="$100,000 - $250,000">$100,000 – $250,000</option>
            <option value="$250,000 - $500,000">$250,000 – $500,000</option>
            <option value="$500,000+">$500,000+</option>
          </select>
        </div>

      </div>

      {/* Project Description */}
      <div>
        <label className="block text-xs uppercase tracking-[0.18em] text-stone-700 font-medium mb-2">
          What are you looking to design? *
        </label>
        <textarea
          rows={compact ? 3 : 4}
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Tell us about the space, key rooms, desired aesthetic, and your expected project timeframe..."
          className={`w-full bg-ivory-50 border ${
            errors.description ? 'border-red-500' : 'border-stone-300'
          } px-4 py-3 text-sm text-charcoal-900 focus:outline-none focus:border-charcoal-900 transition-colors`}
        />
        {errors.description && (
          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            <span>{errors.description}</span>
          </p>
        )}
      </div>

      {/* Preferred Contact Method */}
      <div>
        <label className="block text-xs uppercase tracking-[0.18em] text-stone-700 font-medium mb-2">
          Preferred Response Method
        </label>
        <div className="grid grid-cols-3 gap-3">
          {['WhatsApp', 'Phone Call', 'Email'].map((method) => (
            <button
              type="button"
              key={method}
              onClick={() => setFormData({ ...formData, preferredContact: method })}
              className={`py-2.5 px-3 text-xs uppercase tracking-[0.15em] border text-center transition-all ${
                formData.preferredContact === method
                  ? 'bg-charcoal-900 text-ivory-50 border-charcoal-900 font-medium'
                  : 'bg-ivory-50 text-stone-600 border-stone-300 hover:border-stone-500'
              }`}
            >
              {method}
            </button>
          ))}
        </div>
      </div>

      {/* Submit Button & Direct Channels */}
      <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-charcoal-900 text-ivory-50 hover:bg-stone-800 text-xs uppercase tracking-[0.2em] font-medium py-4 px-8 flex items-center justify-center gap-3 transition-colors disabled:opacity-60"
        >
          {isSubmitting ? (
            <span>Processing Details...</span>
          ) : (
            <>
              <span>Request a Consultation</span>
              <Send className="w-3.5 h-3.5 text-brass-400" />
            </>
          )}
        </button>

        {/* Alternative direct contacts */}
        <div className="flex items-center justify-center sm:justify-end gap-6 text-xs text-stone-600 uppercase tracking-widest pt-2 sm:pt-0">
          <a 
            href="https://wa.me/18005550190" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-charcoal-900 flex items-center gap-1.5 transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 text-stone-500" />
            <span>WhatsApp</span>
          </a>
          <span className="text-stone-300">|</span>
          <a 
            href="tel:+18005550190" 
            className="hover:text-charcoal-900 flex items-center gap-1.5 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-stone-500" />
            <span>Call</span>
          </a>
        </div>
      </div>

    </form>
  );
}
