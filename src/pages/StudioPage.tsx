import { ArrowUpRight } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

interface StudioPageProps {
  onOpenConsultation: () => void;
  onNavigate?: (page: string) => void;
}

export function StudioPage({ onOpenConsultation }: StudioPageProps) {
  return (
    <div className="min-h-screen bg-ivory-50 text-charcoal-900 pt-32 pb-24">
      <SEOHead 
        title="Studio — A Considered Approach to Interiors" 
        description="Aureline Interiors is a boutique interior design studio focused on thoughtful residential and refined commercial spaces. Built upon architectural discipline and material integrity."
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Page Header */}
        <div className="max-w-4xl mb-16 md:mb-24 space-y-6">
          <p className="text-xs uppercase tracking-[0.25em] text-brass-600 font-semibold">
            About the Practice
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-charcoal-900 leading-[1.08]">
            A considered approach to interiors.
          </h1>
          <p className="text-stone-700 text-lg md:text-xl font-light leading-relaxed pt-2">
            Aureline Interiors is an architectural interior design practice dedicated to creating calm, enduring residential and commercial environments.
          </p>
        </div>

        {/* Large Studio Visual */}
        <div className="overflow-hidden bg-stone-200 mb-24 aspect-[16/9]">
          <img
            src="/images/studio-workspace.jpg"
            alt="Aureline Interiors Design Studio and Materials Workshop"
            className="w-full h-full object-cover img-editorial"
          />
        </div>

        {/* Studio Story & Guiding Tenets */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-28">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-[0.2em] text-brass-600 font-semibold block">
              Our Perspective
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-charcoal-900">
              Interiors as quiet architecture.
            </h2>
            <div className="w-12 h-[1px] bg-stone-300" />
            <p className="text-stone-600 text-sm md:text-base leading-relaxed font-light">
              We do not treat interior design as superficial decoration. We believe that true luxury is architectural: it resides in the proportions of a doorway, the tactile grain of solid oak underhand, the subtle temperature of indirect light, and the ease with which one moves through a home.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-[0.25em] text-charcoal-900 font-semibold">
                01 / Timeless Materiality
              </h3>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed font-light">
                We specify natural stones, solid hardwoods, unlacquered patinated metals, and raw woven textiles. These materials age with dignity, acquiring character and depth as years pass rather than deteriorating.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-[0.25em] text-charcoal-900 font-semibold">
                02 / Restraint and Negative Space
              </h3>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed font-light">
                Every line, joinery shadow gap, and furniture placement is deliberate. We leave generous visual space so the eye can rest, allowing key architectural features and natural outdoor views to take precedence.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-[0.25em] text-charcoal-900 font-semibold">
                03 / Human-Centered Utility
              </h3>
              <p className="text-stone-600 text-sm md:text-base leading-relaxed font-light">
                A home must be a joy to live in daily. We obsess over acoustic privacy, concealed kitchen ergonomics, generous wardrobe organization, and intuitive lighting controls that enrich daily living rituals.
              </p>
            </div>
          </div>

        </div>

        {/* Dual Material & Detail Image Composition */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-28">
          <div className="space-y-3">
            <div className="overflow-hidden bg-stone-200 aspect-[4/3]">
              <img
                src="/images/material-palette.jpg"
                alt="Material palette curation and physical samples"
                className="w-full h-full object-cover img-editorial"
              />
            </div>
            <p className="text-xs text-stone-500 font-light italic">
              Curated material palette: Honed travertine, brushed brass, European oak, and raw bouclé.
            </p>
          </div>

          <div className="space-y-3">
            <div className="overflow-hidden bg-stone-200 aspect-[4/3]">
              <img
                src="/images/the-atelier.jpg"
                alt="Bespoke architectural joinery detail"
                className="w-full h-full object-cover img-editorial"
              />
            </div>
            <p className="text-xs text-stone-500 font-light italic">
              Bespoke fluted timber joinery with integrated indirect lighting details.
            </p>
          </div>
        </div>

        {/* Studio Commitment & Integrity */}
        <div className="bg-ivory-100 border border-stone-300 p-10 md:p-16 mb-28">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs uppercase tracking-[0.25em] text-brass-600 font-semibold">
              Practice Standards
            </p>
            <h3 className="font-serif text-3xl sm:text-4xl font-light text-charcoal-900">
              Honest collaboration from concept to realization.
            </h3>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed font-light">
              We manage a limited number of commissions concurrently. This deliberate focus guarantees direct studio leadership on every drawing, site review, and fabrication milestone, ensuring your space is realized without compromise.
            </p>
            <div className="pt-4">
              <button
                onClick={onOpenConsultation}
                className="bg-charcoal-900 text-ivory-50 hover:bg-stone-800 text-xs uppercase tracking-[0.2em] font-medium py-4 px-8 inline-flex items-center gap-2 transition-colors"
              >
                <span>Initiate a Project Discussion</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
