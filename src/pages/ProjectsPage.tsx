import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { PROJECTS, SERVICE_HIGHLIGHT_PROJECTS } from '../data/projects';

interface ProjectsPageProps {
  onNavigate: (page: string, projectId?: string) => void;
  onOpenConsultation: () => void;
}

export function ProjectsPage({ onNavigate, onOpenConsultation }: ProjectsPageProps) {
  const [filter, setFilter] = useState('all');

  const categories = [
    { label: 'All Projects', value: 'all' },
    { label: 'Private Residences', value: 'residence' },
    { label: 'Urban Apartments', value: 'apartment' },
    { label: 'Architectural Details', value: 'details' },
  ];

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'residence') return p.category.toLowerCase().includes('residence') || p.category.toLowerCase().includes('family');
    if (filter === 'apartment') return p.category.toLowerCase().includes('apartment');
    return true;
  });

  return (
    <div className="min-h-screen bg-ivory-50 text-charcoal-900 pt-32 pb-24">
      <SEOHead 
        title="Portfolio & Selected Projects" 
        description="Explore the architectural interior portfolio of Aureline Interiors, featuring bespoke residential sanctuaries, urban penthouses, and tailored living spaces."
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16 md:mb-24 space-y-4">
          <p className="text-xs uppercase tracking-[0.25em] text-brass-600 font-semibold">
            Portfolio Showcase
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-charcoal-900 leading-[1.08]">
            Selected Works
          </h1>
          <p className="text-stone-600 text-base md:text-lg font-light leading-relaxed pt-2">
            A curation of residential interiors and architectural spaces crafted with material discipline, natural light, and quiet proportions.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center gap-4 pb-8 mb-16 border-b border-stone-200">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`text-xs uppercase tracking-[0.2em] px-4 py-2 transition-all ${
                filter === cat.value
                  ? 'bg-charcoal-900 text-ivory-50 font-medium'
                  : 'text-stone-600 hover:text-charcoal-900 bg-ivory-100 hover:bg-stone-200/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Editorial Asymmetric List */}
        <div className="space-y-28 md:space-y-40">
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Large Photography */}
                <div 
                  className={`lg:col-span-8 overflow-hidden bg-stone-200 cursor-pointer group ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                  onClick={() => onNavigate('project-detail', project.id)}
                >
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-[400px] sm:h-[500px] md:h-[620px] object-cover img-editorial transition-transform duration-700"
                  />
                </div>

                {/* Project Editorial Content */}
                <div 
                  className={`lg:col-span-4 space-y-5 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs text-stone-400 font-serif italic">
                    <span>{project.number}</span>
                    <span className="font-sans not-italic uppercase tracking-[0.2em] text-stone-500">{project.year}</span>
                  </div>

                  <p className="text-xs uppercase tracking-[0.2em] text-brass-600 font-semibold">
                    {project.category}
                  </p>

                  <h2 
                    onClick={() => onNavigate('project-detail', project.id)}
                    className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal-900 font-light hover:text-stone-600 cursor-pointer transition-colors"
                  >
                    {project.title}
                  </h2>

                  <p className="text-stone-600 text-sm md:text-base leading-relaxed font-light">
                    {project.overview}
                  </p>

                  {/* Key specs */}
                  <div className="pt-4 border-t border-stone-200/80 space-y-2 text-xs text-stone-500">
                    <div className="flex justify-between">
                      <span className="uppercase tracking-widest text-stone-400">Direction:</span>
                      <span className="text-charcoal-900 font-medium">{project.designDirection}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="uppercase tracking-widest text-stone-400">Scale:</span>
                      <span className="text-charcoal-900 font-medium">{project.area}</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => onNavigate('project-detail', project.id)}
                      className="bg-charcoal-900 text-ivory-50 hover:bg-stone-800 text-xs uppercase tracking-[0.2em] font-medium py-3.5 px-6 flex items-center gap-2 transition-colors"
                    >
                      <span>Explore Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Spaces & Millwork Showcase */}
        <div className="mt-32 pt-24 border-t border-stone-300">
          <div className="max-w-2xl mb-14">
            <p className="text-xs uppercase tracking-[0.25em] text-brass-600 font-semibold mb-2">
              Curated Detail Studies
            </p>
            <h3 className="font-serif text-3xl sm:text-4xl font-light text-charcoal-900">
              Architectural Joinery & Sanctuaries
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICE_HIGHLIGHT_PROJECTS.map((item, idx) => (
              <div key={idx} className="space-y-4">
                <div className="overflow-hidden bg-stone-200 aspect-[4/3]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover img-editorial"
                  />
                </div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-stone-500">{item.category}</p>
                <h4 className="font-serif text-2xl text-charcoal-900 font-light">{item.title}</h4>
                <p className="text-stone-600 text-xs leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Consultation CTA */}
        <div className="mt-32 bg-ivory-100 border border-stone-300 p-12 md:p-16 text-center space-y-6">
          <p className="text-xs uppercase tracking-[0.25em] text-brass-600 font-semibold">
            Have a project in mind?
          </p>
          <h3 className="font-serif text-3xl sm:text-5xl font-light text-charcoal-900 max-w-xl mx-auto">
            Let's create a space shaped around how you live.
          </h3>
          <p className="text-stone-600 text-sm font-light max-w-md mx-auto">
            Book an introductory design consultation with our studio to discuss your brief and site possibilities.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenConsultation}
              className="bg-charcoal-900 text-ivory-50 hover:bg-stone-800 text-xs uppercase tracking-[0.2em] font-medium py-4 px-8 inline-flex items-center gap-3 transition-colors"
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
