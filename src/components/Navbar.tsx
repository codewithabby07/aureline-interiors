import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string, projectId?: string) => void;
  onOpenConsultation: () => void;
}

export function Navbar({ currentPage, onNavigate, onOpenConsultation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Projects', page: 'projects' },
    { label: 'Services', page: 'services' },
    { label: 'Studio', page: 'studio' },
    { label: 'Process', page: 'process' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: string) => {
    setMobileMenuOpen(false);
    onNavigate(page);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-ivory-50/95 backdrop-blur-md py-4 border-b border-stone-200/70 shadow-subtle' 
          : 'bg-gradient-to-b from-charcoal-950/60 via-charcoal-950/20 to-transparent text-white py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <button 
          onClick={() => handleNavClick('home')}
          className="text-left group focus:outline-none"
          aria-label="Aureline Interiors Home"
        >
          <span className={`font-serif tracking-[0.18em] text-xl md:text-2xl uppercase transition-colors duration-300 ${
            isScrolled ? 'text-charcoal-900 group-hover:text-stone-600' : 'text-white group-hover:text-ivory-200'
          }`}>
            AURELINE INTERIORS
          </span>
          <span className={`block text-[10px] tracking-[0.25em] uppercase transition-colors duration-300 ${
            isScrolled ? 'text-stone-500' : 'text-stone-300'
          }`}>
            Spaces, thoughtfully designed
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-9">
          {navItems.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`text-xs uppercase tracking-[0.2em] font-medium transition-all duration-200 relative py-1 ${
                  isScrolled
                    ? isActive 
                      ? 'text-charcoal-900 font-semibold' 
                      : 'text-stone-600 hover:text-charcoal-900'
                    : isActive 
                      ? 'text-white font-semibold' 
                      : 'text-stone-200 hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className={`absolute bottom-0 left-0 right-0 h-[1.5px] ${
                    isScrolled ? 'bg-charcoal-900' : 'bg-white'
                  }`} />
                )}
              </button>
            );
          })}
        </nav>

        {/* Primary CTA */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onOpenConsultation}
            className={`text-xs uppercase tracking-[0.18em] font-medium px-5 py-2.5 transition-all duration-300 flex items-center gap-2 border ${
              isScrolled
                ? 'bg-charcoal-900 text-ivory-50 border-charcoal-900 hover:bg-stone-800'
                : 'bg-white/10 text-white border-white/40 backdrop-blur-sm hover:bg-white hover:text-charcoal-900'
            }`}
          >
            <span>Book a Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={onOpenConsultation}
            className={`text-[11px] uppercase tracking-[0.15em] px-3 py-1.5 border ${
              isScrolled 
                ? 'border-charcoal-900 text-charcoal-900' 
                : 'border-white/50 text-white'
            }`}
          >
            Enquire
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
            className={`p-2 transition-colors ${
              isScrolled ? 'text-charcoal-900' : 'text-white'
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Refined Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-ivory-50 border-b border-stone-200 px-6 py-8 text-charcoal-900 animate-in fade-in slide-in-from-top-2 duration-200 shadow-elevated">
          <div className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`text-left text-sm uppercase tracking-[0.2em] py-2 border-b border-stone-200/60 flex items-center justify-between ${
                  currentPage === item.page ? 'text-charcoal-900 font-semibold' : 'text-stone-600'
                }`}
              >
                <span>{item.label}</span>
                <span className="text-xs text-stone-400 font-serif italic">0{navItems.indexOf(item) + 1}</span>
              </button>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full text-center bg-charcoal-900 text-ivory-50 text-xs uppercase tracking-[0.2em] py-3.5 flex items-center justify-center gap-2"
              >
                <span>Book a Design Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              
              <div className="flex items-center justify-between text-[11px] text-stone-500 pt-2 tracking-wider">
                <a href="tel:+18005550190" className="hover:text-charcoal-900">Direct Call</a>
                <span>•</span>
                <a href="https://wa.me/18005550190" target="_blank" rel="noopener noreferrer" className="hover:text-charcoal-900">WhatsApp</a>
                <span>•</span>
                <a href="mailto:studio@aurelineinteriors.com" className="hover:text-charcoal-900">Email</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
