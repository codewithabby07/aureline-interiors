import { useEffect } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { PROJECTS } from '../data/projects';

interface ProjectDetailPageProps {
  projectId: string;
  onNavigate: (page: string, projectId?: string) => void;
  onOpenConsultation: () => void;
}

export function ProjectDetailPage({ projectId, onNavigate, onOpenConsultation }: ProjectDetailPageProps) {
  const project = PROJECTS.find((p) => p.id === projectId) || PROJECTS[0];
  
  // Find previous and next projects for seamless navigation
  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];
  const prevProject = PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [projectId]);

  return (
    <div className="min-h-screen bg-ivory-50 text-charcoal-900 pb-24">
      <SEOHead 
        title={`${project.title} — ${project.designDirection}`}
        description={project.subtitle}
        ogImage={project.heroImage}
      />

      {/* Back button bar */}
      <div className="pt-28 pb-6 px-6 md:px-12 max-w-7xl mx-auto flex items-center justify-between">
        <button
          onClick={() => onNavigate('projects')}
          className="text-xs uppercase tracking-[0.2em] text-stone-500 hover:text-charcoal-900 flex items-center gap-2 transition-colors py-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </button>

        <div className="text-xs font-serif italic text-stone-400">
          {project.number} of 0{PROJECTS.length}
        </div>
      </div>

      {/* Project Immersive Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <div className="space-y-4 max-w-4xl">
          <p className="text-xs uppercase tracking-[0.25em] text-brass-600 font-semibold">
            {project.category}
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-charcoal-900 leading-[1.08]">
            {project.title}
          </h1>
          <p className="text-stone-600 text-lg md:text-xl font-light leading-relaxed max-w-3xl pt-2">
            {project.subtitle}
          </p>
        </div>
      </div>

      {/* Hero Full-width Photography */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-24">
        <div className="overflow-hidden bg-stone-200">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-[450px] sm:h-[600px] md:h-[720px] object-cover"
          />
        </div>
      </div>

      {/* Architectural Overview & Specifications */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 pb-16 border-b border-stone-200">
          
          {/* Main Story */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-[0.2em] text-brass-600 font-semibold block">
              Design Direction
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-charcoal-900">
              {project.designDirection}
            </h2>
            <p className="text-stone-700 text-base md:text-lg font-light leading-relaxed">
              {project.overview}
            </p>
            <p className="text-stone-600 text-sm leading-relaxed">
              {project.designApproach}
            </p>
          </div>

          {/* Project Specifications */}
          <div className="lg:col-span-5 bg-ivory-100 p-8 border border-stone-200 space-y-6">
            <h3 className="text-xs uppercase tracking-[0.25em] text-stone-700 font-semibold border-b border-stone-300 pb-3">
              Project Parameters
            </h3>
            
            <div className="space-y-4">
              {project.specifications.map((spec, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:justify-between text-xs gap-1 border-b border-stone-200/60 pb-3">
                  <span className="uppercase tracking-widest text-stone-500">{spec.label}</span>
                  <span className="font-medium text-charcoal-900 text-right">{spec.value}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="w-full bg-charcoal-900 text-ivory-50 hover:bg-stone-800 text-xs uppercase tracking-[0.2em] font-medium py-3.5 flex items-center justify-center gap-2 transition-colors"
              >
                <span>Enquire About Similar Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Tactile Material Palette & Craftsmanship */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24 md:mb-32">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-brass-600 font-semibold mb-2">
            Tactility & Craft
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-charcoal-900">
            Material Language
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {project.materials.map((mat, idx) => (
            <div key={idx} className="bg-ivory-100 p-6 border border-stone-200/80 space-y-3">
              <span className="text-xs font-serif italic text-brass-600">0{idx + 1}</span>
              <h3 className="font-serif text-xl text-charcoal-900 font-light">
                {mat.name}
              </h3>
              <p className="text-stone-600 text-xs leading-relaxed font-light">
                {mat.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Editorial Photography Gallery (Editorial Asymmetric Layout) */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-24 md:mb-32 space-y-16">
        <div className="border-t border-stone-300 pt-16">
          <p className="text-xs uppercase tracking-[0.25em] text-brass-600 font-semibold mb-2">
            Spatial Documentation
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-charcoal-900">
            Photography & Details
          </h2>
        </div>

        <div className="space-y-16">
          {project.gallery.map((item, idx) => (
            <div key={idx} className="space-y-3">
              <div className="overflow-hidden bg-stone-200">
                <img
                  src={item.url}
                  alt={item.caption}
                  className="w-full max-h-[750px] object-cover"
                />
              </div>
              <p className="text-xs text-stone-500 font-light italic pl-1">
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Challenge & Architectural Resolution */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-28">
        <div className="bg-ivory-200 p-8 md:p-14 border border-stone-300 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-stone-500 font-medium">
              Architectural Context
            </span>
            <h3 className="font-serif text-2xl text-charcoal-900 font-light">
              The Spatial Challenge
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed font-light">
              {project.challenge}
            </p>
          </div>

          <div className="space-y-3 border-t md:border-t-0 md:border-l border-stone-300 pt-6 md:pt-0 md:pl-10">
            <span className="text-xs uppercase tracking-[0.25em] text-brass-600 font-medium">
              Aureline Approach
            </span>
            <h3 className="font-serif text-2xl text-charcoal-900 font-light">
              The Design Solution
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed font-light">
              {project.solution}
            </p>
          </div>
        </div>
      </div>

      {/* Next / Prev Project Navigation Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 border-t border-stone-300">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          <button
            onClick={() => onNavigate('project-detail', prevProject.id)}
            className="text-left p-6 bg-ivory-100 border border-stone-200 hover:border-charcoal-900 transition-colors group space-y-2"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500 block">
              Previous Project
            </span>
            <div className="flex items-center justify-between">
              <span className="font-serif text-2xl text-charcoal-900 font-light group-hover:text-stone-600 transition-colors">
                {prevProject.title}
              </span>
              <ArrowLeft className="w-4 h-4 text-stone-400 group-hover:text-charcoal-900 transition-colors" />
            </div>
          </button>

          <button
            onClick={() => onNavigate('project-detail', nextProject.id)}
            className="text-right p-6 bg-ivory-100 border border-stone-200 hover:border-charcoal-900 transition-colors group space-y-2"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500 block">
              Next Project
            </span>
            <div className="flex items-center justify-between">
              <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-charcoal-900 transition-colors" />
              <span className="font-serif text-2xl text-charcoal-900 font-light group-hover:text-stone-600 transition-colors">
                {nextProject.title}
              </span>
            </div>
          </button>

        </div>
      </div>

    </div>
  );
}
