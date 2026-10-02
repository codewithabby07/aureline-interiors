import { MessageSquare, Phone, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { ConsultationForm } from '../components/ConsultationForm';

export function ContactPage() {
  return (
    <div className="min-h-screen bg-ivory-50 text-charcoal-900 pt-32 pb-24">
      <SEOHead 
        title="Contact & Design Consultation" 
        description="Book a design consultation with Aureline Interiors. Let us discuss your residential or commercial project scope, timeline, and architectural vision."
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16 md:mb-20 space-y-4">
          <p className="text-xs uppercase tracking-[0.25em] text-brass-600 font-semibold">
            Initiate a Conversation
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-charcoal-900 leading-[1.08]">
            Let's design your space.
          </h1>
          <p className="text-stone-600 text-base md:text-lg font-light leading-relaxed pt-2">
            Tell us a little about your project and we'll get back to you to discuss the next step.
          </p>
        </div>

        {/* Contact Page Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Form Card */}
          <div className="lg:col-span-8 bg-ivory-100 p-8 sm:p-12 border border-stone-300 shadow-subtle">
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal-900 font-light mb-2">
              Project Consultation Request
            </h2>
            <p className="text-stone-600 text-xs md:text-sm font-light mb-8">
              Please complete the details below. Our studio will review your site context and follow up promptly.
            </p>

            <ConsultationForm />
          </div>

          {/* Right Column: Studio Information & Direct Channels */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Direct Instant Channels Card */}
            <div className="bg-charcoal-950 text-ivory-50 p-8 border border-stone-800 space-y-6">
              <span className="text-[10px] uppercase tracking-[0.25em] text-brass-400 font-semibold block">
                Direct Communication
              </span>
              
              <h3 className="font-serif text-2xl font-light text-ivory-50">
                Prefer an immediate conversation?
              </h3>

              <div className="space-y-4 pt-2">
                <a
                  href="https://wa.me/18005550190"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-stone-900 border border-stone-800 hover:border-brass-400 text-xs uppercase tracking-[0.18em] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-4 h-4 text-brass-400" />
                    <span>WhatsApp Studio</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-stone-400" />
                </a>

                <a
                  href="tel:+18005550190"
                  className="flex items-center justify-between p-4 bg-stone-900 border border-stone-800 hover:border-brass-400 text-xs uppercase tracking-[0.18em] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-brass-400" />
                    <span>Direct Studio Line</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-stone-400" />
                </a>

                <a
                  href="mailto:studio@aurelineinteriors.com"
                  className="flex items-center justify-between p-4 bg-stone-900 border border-stone-800 hover:border-brass-400 text-xs uppercase tracking-[0.18em] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-brass-400" />
                    <span>Email Studio</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-stone-400" />
                </a>
              </div>
            </div>

            {/* Studio Hours & Response Policy */}
            <div className="bg-ivory-100 p-8 border border-stone-200 space-y-4">
              <span className="text-[10px] uppercase tracking-[0.25em] text-stone-500 font-semibold block">
                Studio Inquiries
              </span>
              
              <div className="space-y-3 text-xs text-stone-600">
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-charcoal-900">Consultation Hours</p>
                    <p className="text-stone-500">Monday – Friday: 09:00 – 18:00 (By Appointment)</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 pt-2">
                  <MapPin className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-charcoal-900">Location</p>
                    <p className="text-stone-500">Studio visits & consultations arranged by appointment.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200 text-[11px] text-stone-500 leading-relaxed font-light">
                We respect your privacy. Project briefings and architectural documents shared with Aureline Interiors remain strictly confidential.
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
