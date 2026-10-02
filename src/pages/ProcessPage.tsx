import { useState } from 'react';
import { ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { PROCESS_STEPS, FAQS } from '../data/process';

interface ProcessPageProps {
  onOpenConsultation: () => void;
}

export function ProcessPage({ onOpenConsultation }: ProcessPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-ivory-50 text-charcoal-900 pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-x-hidden">
      <SEOHead 
        title="Our Process — How We Work" 
        description="Learn about Aureline Interiors' disciplined five-step design process: Discover, Define, Design, Execute, and Complete."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 md:mb-24 space-y-3 sm:space-y-4">
          <p className="text-xs uppercase tracking-[0.25em] text-brass-600 font-semibold">
            Methodology & Workflow
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl font-light text-charcoal-900 leading-[1.08]">
            The Design Process
          </h1>
          <p className="text-stone-600 text-sm sm:text-base md:text-lg font-light leading-relaxed pt-1">
            A structured, five-stage framework designed to remove ambiguity, protect your investment, and ensure uncompromising execution.
          </p>
        </div>

        {/* 5-Step Process Deep Dive */}
        <div className="space-y-12 sm:space-y-16 md:space-y-24 mb-20 sm:mb-32">
          {PROCESS_STEPS.map((step, index) => (
            <div 
              key={step.step}
              className="pt-8 sm:pt-12 border-t border-stone-300 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16 items-start"
            >
              {/* Step indicator */}
              <div className="lg:col-span-3 space-y-1 sm:space-y-2">
                <span className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-brass-600 block">
                  {step.step}
                </span>
                <h2 className="text-xs sm:text-sm uppercase tracking-[0.22em] font-semibold text-charcoal-900">
                  {step.title}
                </h2>
                <p className="text-xs text-stone-500 font-serif italic">
                  Phase 0{index + 1}
                </p>
              </div>

              {/* Step description */}
              <div className="lg:col-span-5 space-y-3 sm:space-y-4">
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-charcoal-900 font-light">
                  {step.tagline}
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm md:text-base leading-relaxed font-light">
                  {step.description}
                </p>

                {/* Key Deliverable badge */}
                <div className="pt-2">
                  <div className="inline-block bg-ivory-200 border border-stone-300 px-3 sm:px-4 py-2 text-[11px] sm:text-xs text-stone-700">
                    <span className="font-semibold uppercase tracking-wider text-charcoal-900">Phase Output: </span>
                    {step.deliverable}
                  </div>
                </div>
              </div>

              {/* Step activities breakdown */}
              <div className="lg:col-span-4 bg-ivory-100 p-4 sm:p-6 border border-stone-200/80 space-y-2.5 sm:space-y-3">
                <p className="text-[10.5px] sm:text-[11px] uppercase tracking-[0.2em] text-stone-700 font-semibold mb-1">
                  Key Milestones & Scope
                </p>
                <ul className="space-y-2 sm:space-y-2.5">
                  {step.activities.map((act) => (
                    <li key={act} className="text-xs text-stone-600 flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brass-500 mt-1.5 shrink-0" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Process Visual Divider */}
        <div className="overflow-hidden bg-stone-200 mb-20 sm:mb-32 aspect-[16/8]">
          <img
            src="/images/oak-and-stone.jpg"
            alt="Realized Interior Architecture Handover"
            className="w-full h-full object-cover img-editorial"
          />
        </div>

        {/* FREQUENTLY ASKED QUESTIONS SECTION */}
        <div className="max-w-4xl mx-auto mb-20 sm:mb-28">
          <div className="text-center mb-10 sm:mb-16 space-y-2.5 sm:space-y-3">
            <p className="text-xs uppercase tracking-[0.25em] text-brass-600 font-semibold">
              Clarity & Transparency
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl font-light text-charcoal-900">
              Frequently Asked Questions
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm md:text-base font-light">
              Common questions regarding our engagement structure, timeline, and working relationships.
            </p>
          </div>

          <div className="divide-y divide-stone-300 border-y border-stone-300">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={faq.question} className="py-4 sm:py-6">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left flex items-center justify-between gap-4 py-2 group focus:outline-none"
                  >
                    <span className="font-serif text-lg sm:text-xl md:text-2xl text-charcoal-900 font-light group-hover:text-stone-600 transition-colors">
                      {faq.question}
                    </span>
                    <span className="p-1 rounded-full text-stone-500 group-hover:text-charcoal-900 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5" /> : <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-2 sm:pt-4 pb-2 text-stone-600 text-xs sm:text-sm md:text-base leading-relaxed font-light animate-in fade-in duration-300">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Consultation CTA Banner */}
        <div className="bg-ivory-100 border border-stone-300 p-6 sm:p-12 md:p-16 text-center space-y-4 sm:space-y-6">
          <p className="text-xs uppercase tracking-[0.25em] text-brass-600 font-semibold">
            Ready to Begin Phase 01?
          </p>
          <h3 className="font-serif text-2xl sm:text-4xl md:text-5xl font-light text-charcoal-900 max-w-xl mx-auto">
            Book an initial design consultation.
          </h3>
          <p className="text-stone-600 text-xs sm:text-sm font-light max-w-md mx-auto">
            Let us explore how our structured design process can transform your property into a calm, functional sanctuary.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto bg-charcoal-900 text-ivory-50 hover:bg-stone-800 text-xs uppercase tracking-[0.2em] font-medium py-3.5 sm:py-4 px-6 sm:px-8 inline-flex items-center justify-center gap-3 transition-colors"
            >
              <span>Schedule Initial Discovery</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
