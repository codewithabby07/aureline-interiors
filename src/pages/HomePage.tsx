import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { ConsultationForm } from '../components/ConsultationForm';
import { PROJECTS } from '../data/projects';
import { SERVICES } from '../data/services';
import { APPROACH_PILLARS } from '../data/approach';
import { PROCESS_STEPS } from '../data/process';

interface HomePageProps {
  onNavigate: (page: string, projectId?: string) => void;
  onOpenConsultation: () => void;
}

export function HomePage({ onNavigate, onOpenConsultation }: HomePageProps) {
  return (
    <div className="min-h-screen bg-ivory-50 text-charcoal-900 overflow-x-hidden">
      <SEOHead 
        title="Spaces, Thoughtfully Designed" 
        description="Aureline Interiors is a boutique interior design studio specialising in residential and refined commercial interiors. Architectural, warm, and timeless."
      />

      {/* HERO SECTION */}
      <section className="relative h-[100dvh] min-h-[580px] max-h-[1100px] w-full flex items-end pb-12 sm:pb-16 md:pb-24 px-4 sm:px-6 md:px-12 overflow-hidden">
        {/* Full Viewport Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero.jpg"
            alt="Aureline Interiors - Architectural Living Pavilion"
            className="w-full h-full object-cover object-center transform scale-[1.01] transition-transform duration-1000"
          />
          {/* Enhanced gradient overlay for optimal readability on mobile screens */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/40 to-charcoal-950/50" />
        </div>

        {/* Minimal Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full text-white">
          <div className="max-w-3xl space-y-4 sm:space-y-6">
            
            <div className="inline-block border-b border-ivory-200/40 pb-1.5">
              <p className="text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] text-ivory-100 font-light">
                Aureline Interiors
              </p>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.1] text-ivory-50">
              Spaces, thoughtfully designed.
            </h1>

            <p className="text-stone-200 text-sm sm:text-base md:text-lg font-light max-w-xl leading-relaxed">
              Residential interiors shaped around the way you live.
            </p>

            {/* CTAs */}
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto bg-ivory-50 text-charcoal-950 hover:bg-stone-200 text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] font-medium py-3.5 sm:py-4 px-6 sm:px-8 flex items-center justify-center gap-2.5 transition-colors duration-300"
              >
                <span>Book a Design Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('projects')}
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/30 text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] font-medium py-3.5 sm:py-4 px-6 sm:px-8 flex items-center justify-center gap-2 backdrop-blur-sm transition-colors duration-300"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

        {/* Subtle scroll indicator */}
        <div className="absolute right-6 md:right-12 bottom-12 hidden lg:flex flex-col items-center gap-3 text-white/60 text-[10px] uppercase tracking-[0.25em]">
          <span className="[writing-mode:vertical-lr]">Scroll to discover</span>
          <div className="w-[1px] h-12 bg-white/30" />
        </div>
      </section>

      {/* EDITORIAL INTRODUCTION */}
      <section className="py-16 sm:py-24 md:py-36 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-start">
          
          <div className="lg:col-span-4">
            <span className="text-xs uppercase tracking-[0.22em] sm:tracking-[0.25em] text-brass-600 font-semibold block mb-2 sm:mb-3">
              Studio Philosophy
            </span>
            <div className="w-10 sm:w-12 h-[1px] bg-stone-400 mb-4 sm:mb-6" />
            <p className="text-xs uppercase tracking-[0.15em] sm:tracking-[0.18em] text-stone-500">
              Boutique Practice / Architectural Discipline
            </p>
          </div>

          <div className="lg:col-span-8 space-y-5 sm:space-y-8">
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-charcoal-900 leading-[1.18]">
              Designed around how you live.
            </h2>
            
            <p className="text-stone-700 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-3xl">
              Aureline approaches interiors as a balance of architecture, material, light and everyday living. Every space is considered as a whole—from the larger composition to the details experienced every day.
            </p>

            <p className="text-stone-600 text-sm md:text-base leading-relaxed max-w-2xl font-light">
              We reject transient trends and superficial ornament in favor of honest masonry, natural timber, tailored joinery, and calm spatial proportions that endure for decades.
            </p>
          </div>

        </div>
      </section>

      {/* FEATURED PROJECTS SHOWCASE (Asymmetric Editorial Layout) */}
      <section className="py-16 sm:py-20 md:py-32 bg-ivory-100 border-y border-stone-200/80 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 md:mb-24 pb-6 border-b border-stone-300 gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-brass-600 font-semibold mb-2">
                Selected Portfolio
              </p>
              <h2 className="font-serif text-3xl sm:text-5xl font-light text-charcoal-900">
                Featured Work
              </h2>
            </div>
            <button
              onClick={() => onNavigate('projects')}
              className="text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] text-charcoal-900 font-medium hover:text-stone-600 flex items-center gap-2 group self-start md:self-auto py-1"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Editorial Project Grid: Asymmetric Composition */}
          <div className="space-y-16 sm:space-y-24 md:space-y-36">
            
            {/* Project 01: The Aria Residence */}
            {PROJECTS[0] && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-center">
                <div 
                  className="lg:col-span-8 overflow-hidden bg-stone-200 group cursor-pointer"
                  onClick={() => onNavigate('project-detail', PROJECTS[0].id)}
                >
                  <img
                    src={PROJECTS[0].heroImage}
                    alt={PROJECTS[0].title}
                    className="w-full h-[240px] sm:h-[380px] md:h-[580px] object-cover img-editorial transition-transform duration-700"
                  />
                </div>
                <div className="lg:col-span-4 space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between text-xs text-stone-400 font-serif italic">
                    <span>{PROJECTS[0].number} / 04</span>
                    <span className="font-sans not-italic uppercase tracking-widest text-stone-500 text-[10px] sm:text-xs">{PROJECTS[0].location}</span>
                  </div>
                  <p className="text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] text-brass-600 font-semibold">
                    {PROJECTS[0].category}
                  </p>
                  <h3 
                    className="font-serif text-2xl sm:text-3xl md:text-4xl text-charcoal-900 font-light hover:text-stone-700 cursor-pointer"
                    onClick={() => onNavigate('project-detail', PROJECTS[0].id)}
                  >
                    {PROJECTS[0].title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed font-light">
                    {PROJECTS[0].subtitle}
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => onNavigate('project-detail', PROJECTS[0].id)}
                      className="text-xs uppercase tracking-[0.18em] font-medium text-charcoal-900 hover:text-stone-500 inline-flex items-center gap-2 py-1 border-b border-charcoal-900 hover:border-stone-500 transition-colors"
                    >
                      <span>View Project Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Project 02: Oak & Stone */}
            {PROJECTS[1] && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-center">
                <div className="lg:col-span-4 lg:order-1 order-2 space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between text-xs text-stone-400 font-serif italic">
                    <span>{PROJECTS[1].number} / 04</span>
                    <span className="font-sans not-italic uppercase tracking-widest text-stone-500 text-[10px] sm:text-xs">{PROJECTS[1].location}</span>
                  </div>
                  <p className="text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] text-brass-600 font-semibold">
                    {PROJECTS[1].category}
                  </p>
                  <h3 
                    className="font-serif text-2xl sm:text-3xl md:text-4xl text-charcoal-900 font-light hover:text-stone-700 cursor-pointer"
                    onClick={() => onNavigate('project-detail', PROJECTS[1].id)}
                  >
                    {PROJECTS[1].title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed font-light">
                    {PROJECTS[1].subtitle}
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => onNavigate('project-detail', PROJECTS[1].id)}
                      className="text-xs uppercase tracking-[0.18em] font-medium text-charcoal-900 hover:text-stone-500 inline-flex items-center gap-2 py-1 border-b border-charcoal-900 hover:border-stone-500 transition-colors"
                    >
                      <span>View Project Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
                <div 
                  className="lg:col-span-8 lg:order-2 order-1 overflow-hidden bg-stone-200 group cursor-pointer"
                  onClick={() => onNavigate('project-detail', PROJECTS[1].id)}
                >
                  <img
                    src={PROJECTS[1].heroImage}
                    alt={PROJECTS[1].title}
                    className="w-full h-[240px] sm:h-[380px] md:h-[580px] object-cover img-editorial transition-transform duration-700"
                  />
                </div>
              </div>
            )}

            {/* Project 03 & 04: Two column grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 lg:gap-16">
              {PROJECTS.slice(2, 4).map((project) => (
                <div key={project.id} className="space-y-4 sm:space-y-6">
                  <div 
                    className="overflow-hidden bg-stone-200 cursor-pointer group"
                    onClick={() => onNavigate('project-detail', project.id)}
                  >
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-[220px] sm:h-[320px] md:h-[420px] object-cover img-editorial transition-transform duration-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-stone-500 tracking-[0.18em] uppercase">
                      <span>{project.category}</span>
                      <span className="font-serif italic text-stone-400">{project.number}</span>
                    </div>
                    <h3 
                      onClick={() => onNavigate('project-detail', project.id)}
                      className="font-serif text-2xl md:text-3xl text-charcoal-900 font-light hover:text-stone-600 cursor-pointer"
                    >
                      {project.title}
                    </h3>
                    <p className="text-stone-600 text-sm leading-relaxed font-light">
                      {project.subtitle}
                    </p>
                    <div className="pt-1">
                      <button
                        onClick={() => onNavigate('project-detail', project.id)}
                        className="text-xs uppercase tracking-[0.18em] font-medium text-charcoal-900 hover:text-stone-500 inline-flex items-center gap-1.5"
                      >
                        <span>Explore Space</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* DESIGN APPROACH (Material. Light. Proportion.) */}
      <section className="py-16 sm:py-24 md:py-36 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-16 md:mb-24">
          <p className="text-xs uppercase tracking-[0.25em] text-brass-600 font-semibold mb-2 sm:mb-3">
            Core Principles
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-charcoal-900">
            Material. Light. Proportion.
          </h2>
          <p className="text-stone-600 text-sm sm:text-base md:text-lg font-light max-w-2xl mt-3 sm:mt-4">
            Three interconnected disciplines that anchor every interior we envision and build.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {APPROACH_PILLARS.map((pillar) => (
            <div key={pillar.number} className="space-y-4 sm:space-y-6 flex flex-col justify-between bg-ivory-100 md:bg-transparent p-5 sm:p-6 md:p-0 border border-stone-200 md:border-0">
              <div>
                <div className="overflow-hidden bg-stone-200 mb-4 sm:mb-6 aspect-[4/3]">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover img-editorial"
                  />
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-serif italic text-brass-600">{pillar.number}</span>
                  <div className="w-6 h-[1px] bg-stone-300" />
                  <h3 className="font-serif text-2xl md:text-3xl text-charcoal-900 font-light">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-xs uppercase tracking-[0.15em] sm:tracking-[0.18em] text-stone-500 mb-3">
                  {pillar.short}
                </p>
                <p className="text-stone-600 text-sm leading-relaxed font-light mb-4">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-200">
                <ul className="space-y-2">
                  {pillar.details.map((detail) => (
                    <li key={detail} className="text-xs text-stone-500 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brass-400 mt-1.5 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-16 sm:py-24 md:py-32 bg-stone-900 text-ivory-50 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-12 pb-10 sm:pb-16 border-b border-stone-800">
            <div className="lg:col-span-6 space-y-3 sm:space-y-4">
              <p className="text-xs uppercase tracking-[0.25em] text-brass-400 font-semibold">
                Studio Capabilities
              </p>
              <h2 className="font-serif text-3xl sm:text-5xl font-light text-ivory-50">
                Disciplines & Services
              </h2>
            </div>
            <div className="lg:col-span-6 flex items-end">
              <p className="text-stone-400 text-sm md:text-base font-light leading-relaxed">
                From complete private residences to custom joinery and lighting coordination, we provide architectural interior design services from inception through final handover.
              </p>
            </div>
          </div>

          {/* Services List with clean mobile spacing */}
          <div className="divide-y divide-stone-800">
            {SERVICES.map((service) => (
              <div 
                key={service.id} 
                className="py-8 sm:py-10 md:py-12 grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-6 items-baseline group hover:bg-stone-800/30 transition-colors px-1 sm:px-4"
              >
                <div className="lg:col-span-1 text-xs font-serif italic text-brass-400">
                  {service.number}
                </div>
                <div className="lg:col-span-4">
                  <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-ivory-50 font-light group-hover:text-brass-300 transition-colors">
                    {service.title}
                  </h3>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-stone-400 text-xs sm:text-sm leading-relaxed font-light">
                    {service.shortDescription}
                  </p>
                </div>
                <div className="lg:col-span-2 pt-2 lg:pt-0 text-left lg:text-right">
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-xs uppercase tracking-[0.18em] text-stone-300 hover:text-white inline-flex items-center gap-1.5 py-1"
                  >
                    <span>Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-10 sm:pt-12 text-center">
            <button
              onClick={() => onNavigate('services')}
              className="w-full sm:w-auto border border-stone-700 hover:border-ivory-50 text-ivory-100 hover:text-white text-xs uppercase tracking-[0.2em] py-3.5 sm:py-4 px-6 sm:px-8 transition-colors"
            >
              Explore Full Service Breakdown
            </button>
          </div>

        </div>
      </section>

      {/* 5-STEP DESIGN PROCESS */}
      <section className="py-16 sm:py-24 md:py-36 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-20">
          <p className="text-xs uppercase tracking-[0.25em] text-brass-600 font-semibold mb-2 sm:mb-3">
            Structured Execution
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-charcoal-900 mb-3 sm:mb-4">
            Our Five-Step Process
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm md:text-base font-light">
            A clear, disciplined progression that ensures design fidelity, budget clarity, and a calm client experience from concept to completion.
          </p>
        </div>

        {/* Process Timeline Steps (Responsive Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8">
          {PROCESS_STEPS.map((step) => (
            <div key={step.step} className="space-y-3 border-t-2 border-stone-300 pt-4 sm:pt-6 bg-ivory-100 sm:bg-transparent p-4 sm:p-0">
              <span className="font-serif text-3xl sm:text-4xl font-light text-brass-600 block">
                {step.step}
              </span>
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-charcoal-900">
                {step.title}
              </h3>
              <p className="text-stone-600 text-xs leading-relaxed font-light">
                {step.tagline}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <button
            onClick={() => onNavigate('process')}
            className="text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] text-charcoal-900 hover:text-stone-600 font-medium inline-flex items-center gap-2 border-b border-charcoal-900 pb-1"
          >
            <span>Learn More About Our Working Methodology</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* LEAD GENERATION / CONSULTATION SECTION */}
      <section id="consultation" className="py-16 sm:py-24 md:py-36 bg-ivory-200 border-t border-stone-300 px-4 sm:px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-brass-600 font-semibold">
              Begin Your Project
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-charcoal-900">
              Let's design your space.
            </h2>
            <p className="text-stone-600 text-sm sm:text-base md:text-lg font-light max-w-xl mx-auto">
              Tell us a little about your project and we'll get back to you to discuss the next step.
            </p>
          </div>

          <div className="bg-ivory-50 border border-stone-300 p-5 sm:p-8 md:p-14 shadow-subtle">
            <ConsultationForm />
          </div>

        </div>
      </section>

    </div>
  );
}
