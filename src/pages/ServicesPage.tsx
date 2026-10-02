import { ArrowUpRight } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { SERVICES } from '../data/services';

interface ServicesPageProps {
  onOpenConsultation: () => void;
  onNavigate?: (page: string) => void;
}

export function ServicesPage({ onOpenConsultation }: ServicesPageProps) {
  return (
    <div className="min-h-screen bg-ivory-50 text-charcoal-900 pt-32 pb-24">
      <SEOHead 
        title="Services & Practice Capabilities" 
        description="Aureline Interiors offers end-to-end residential interior design, space planning, custom millwork, lighting architecture, and turnkey execution."
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16 md:mb-24 space-y-4">
          <p className="text-xs uppercase tracking-[0.25em] text-brass-600 font-semibold">
            Practice Disciplines
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-charcoal-900 leading-[1.08]">
            Services & Scope
          </h1>
          <p className="text-stone-600 text-base md:text-lg font-light leading-relaxed pt-2">
            We provide comprehensive, architecture-led interior design services tailored for homeowners, developers, and discerning clients seeking spaces of enduring quality.
          </p>
        </div>

        {/* Services Editorial Layout (Asymmetric, alternating compositions) */}
        <div className="space-y-28 md:space-y-36">
          {SERVICES.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={service.id}
                id={service.id}
                className="pt-12 border-t border-stone-300"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}>
                  
                  {/* Left Column: Number, Title, Overview */}
                  <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-serif italic text-brass-600">
                        {service.number} / 06
                      </span>
                      <div className="w-8 h-[1px] bg-stone-300" />
                      <span className="text-xs uppercase tracking-[0.2em] text-stone-500 font-medium">
                        Studio Discipline
                      </span>
                    </div>

                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-charcoal-900">
                      {service.title}
                    </h2>

                    <p className="text-stone-700 text-base md:text-lg font-light leading-relaxed">
                      {service.shortDescription}
                    </p>

                    <p className="text-stone-600 text-sm md:text-base leading-relaxed font-light">
                      {service.fullDescription}
                    </p>

                    {/* Ideal Project Fit */}
                    <div className="p-4 bg-ivory-100 border-l-2 border-brass-500 text-xs text-stone-600 leading-relaxed">
                      <span className="font-medium text-charcoal-900 uppercase tracking-wider block mb-1">
                        Best suited for:
                      </span>
                      {service.idealFor}
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={onOpenConsultation}
                        className="bg-charcoal-900 text-ivory-50 hover:bg-stone-800 text-xs uppercase tracking-[0.2em] font-medium py-3.5 px-6 inline-flex items-center gap-2 transition-colors"
                      >
                        <span>Enquire for this Service</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Visual and Deliverables */}
                  <div className={`lg:col-span-6 space-y-8 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    {service.image && (
                      <div className="overflow-hidden bg-stone-200 aspect-[16/10]">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover img-editorial"
                        />
                      </div>
                    )}

                    <div className="bg-ivory-100 p-8 border border-stone-200 space-y-4">
                      <h3 className="text-xs uppercase tracking-[0.2em] text-stone-700 font-semibold">
                        Key Deliverables & Documentation
                      </h3>
                      <ul className="space-y-2.5">
                        {service.deliverables.map((item) => (
                          <li key={item} className="text-xs md:text-sm text-stone-600 flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-brass-500 mt-2 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Working Together CTA Banner */}
        <div className="mt-32 bg-stone-900 text-ivory-50 p-12 md:p-16 text-center space-y-6">
          <p className="text-xs uppercase tracking-[0.25em] text-brass-400 font-semibold">
            Comprehensive Spatial Solutions
          </p>
          <h3 className="font-serif text-3xl sm:text-5xl font-light text-ivory-50 max-w-xl mx-auto">
            Ready to discuss your project scope?
          </h3>
          <p className="text-stone-400 text-sm font-light max-w-md mx-auto">
            Whether you require full turnkey execution or specialized lighting and spatial planning, we structure each engagement to your project requirements.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenConsultation}
              className="bg-ivory-50 text-charcoal-950 hover:bg-stone-200 text-xs uppercase tracking-[0.2em] font-medium py-4 px-8 inline-flex items-center gap-3 transition-colors"
            >
              <span>Book a Design Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
