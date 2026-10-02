import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
  onOpenConsultation: () => void;
}

export function Footer({ onNavigate, onOpenConsultation }: FooterProps) {
  return (
    <footer className="bg-charcoal-950 text-ivory-100 border-t border-stone-800 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Top conversion callout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16 border-b border-stone-800/80 items-start">
          <div className="lg:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.25em] text-brass-400 font-medium mb-3">
              Design Consultation
            </p>
            <h3 className="font-serif text-3xl md:text-5xl font-light leading-tight text-ivory-50 max-w-xl">
              Begin a conversation about your space.
            </h3>
          </div>
          <div className="lg:col-span-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:justify-end">
            <button
              onClick={onOpenConsultation}
              className="bg-ivory-50 text-charcoal-950 hover:bg-stone-200 text-xs uppercase tracking-[0.2em] font-medium px-8 py-4 flex items-center gap-3 transition-colors duration-300"
            >
              <span>Book a Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 py-16">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <h4 className="font-serif text-2xl uppercase tracking-[0.18em] text-ivory-50">
              Aureline Interiors
            </h4>
            <p className="text-stone-400 text-sm font-light tracking-wide max-w-sm">
              Spaces, thoughtfully designed.
            </p>
            <p className="text-stone-500 text-xs leading-relaxed max-w-sm pt-2">
              A premium interior design studio specialising in residential and refined commercial interiors.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3 space-y-4">
            <p className="text-[11px] uppercase tracking-[0.25em] text-stone-400 font-medium">
              Navigation
            </p>
            <ul className="space-y-2.5 text-xs uppercase tracking-[0.18em] text-stone-300">
              <li>
                <button 
                  onClick={() => onNavigate('projects')}
                  className="hover:text-white transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('studio')}
                  className="hover:text-white transition-colors"
                >
                  Studio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('process')}
                  className="hover:text-white transition-colors"
                >
                  Process
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-2 space-y-4">
            <p className="text-[11px] uppercase tracking-[0.25em] text-stone-400 font-medium">
              Direct Contact
            </p>
            <ul className="space-y-2.5 text-xs uppercase tracking-[0.18em] text-stone-300">
              <li>
                <a 
                  href="https://wa.me/18005550190" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>WhatsApp</span>
                  <ArrowUpRight className="w-3 h-3 text-stone-500" />
                </a>
              </li>
              <li>
                <a 
                  href="tel:+18005550190" 
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Phone</span>
                  <ArrowUpRight className="w-3 h-3 text-stone-500" />
                </a>
              </li>
              <li>
                <a 
                  href="mailto:studio@aurelineinteriors.com" 
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Email</span>
                  <ArrowUpRight className="w-3 h-3 text-stone-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Social Column */}
          <div className="md:col-span-2 space-y-4">
            <p className="text-[11px] uppercase tracking-[0.25em] text-stone-400 font-medium">
              Social
            </p>
            <ul className="space-y-2.5 text-xs uppercase tracking-[0.18em] text-stone-300">
              <li>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3 h-3 text-stone-500" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="border-t border-stone-800/80 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-stone-500 tracking-wider">
          <p>© 2026 Aureline Interiors. All rights reserved.</p>
          <p className="text-stone-500 text-center md:text-right">
            Demo Brand Portfolio & Consultation Showcase.
          </p>
        </div>

      </div>
    </footer>
  );
}
