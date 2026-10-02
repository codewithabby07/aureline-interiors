import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, MessageSquare } from 'lucide-react';

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
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'bg-ivory-50/98 backdrop-blur-md py-3 md:py-4 border-b border-stone-200/80 shadow-subtle text-charcoal-900' 
          : 'bg-gradient-to-b from-charcoal-950/75 via-charcoal-950/30 to-transparent text-white py-4 md:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button 
          onClick={() => handleNavClick('home')}
          className="text-left group focus:outline-none max-w-[210px] sm:max-w-none"
          aria-label="Aureline Interiors Home"
        >
          <span className={`font-serif tracking-[0.12em] sm:tracking-[0.18em] text-base sm:text-xl md:text-2xl uppercase transition-colors duration-300 block leading-tight ${
            isScrolled || mobileMenuOpen ? 'text-charcoal-900 group-hover:text-stone-600' : 'text-white group-hover:text-ivory-200'
          }`}>
            AURELINE INTERIORS
          </span>
          <span className={`block text-[8.5px] sm:text-[10px] tracking-[0.18em] sm:tracking-[0.25em] uppercase transition-colors duration-300 ${
            isScrolled || mobileMenuOpen ? 'text-stone-500' : 'text-stone-300'
          }`}>
            Spaces, thoughtfully designed
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
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

        {/* Desktop Primary CTA */}
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

        {/* Mobile Actions: Enquire button + Burger Toggle */}
        <div className="flex md:hidden items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenConsultation}
            className={`text-[10.5px] uppercase tracking-[0.14em] font-medium px-2.5 py-1.5 border transition-all ${
              isScrolled || mobileMenuOpen
                ? 'border-charcoal-900 text-charcoal-900 bg-transparent active:bg-charcoal-900 active:text-ivory-50' 
                : 'border-white/60 text-white bg-black/20 backdrop-blur-sm'
            }`}
          >
            Enquire
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
            className={`p-1.5 transition-colors focus:outline-none ${
              isScrolled || mobileMenuOpen ? 'text-charcoal-900' : 'text-white'
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Refined Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[57px] sm:top-[63px] bottom-0 bg-ivory-50 text-charcoal-900 z-40 overflow-y-auto px-6 py-8 flex flex-col justify-between shadow-elevated animate-in fade-in slide-in-from-top-4 duration-300 border-t border-stone-200">
          
          {/* Navigation Links */}
          <div className="flex flex-col space-y-4">
            <p className="text-[10px] uppercase tracking-[0.25em] text-brass-600 font-semibold mb-2">
              Menu
            </p>

            {navItems.map((item, index) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`text-left text-base uppercase tracking-[0.18em] py-3 border-b border-stone-200/80 flex items-center justify-between transition-colors ${
                    isActive ? 'text-charcoal-900 font-semibold pl-2 border-charcoal-900' : 'text-stone-700'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-stone-400 font-serif italic">0{index + 1}</span>
                </button>
              );
            })}
          </div>

          {/* Bottom Actions inside Mobile Drawer */}
          <div className="pt-8 space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full bg-charcoal-900 text-ivory-50 text-xs uppercase tracking-[0.2em] font-medium py-4 flex items-center justify-center gap-2"
            >
              <span>Book a Design Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <a 
                href="https://wa.me/18005550190" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center gap-2 p-3 bg-ivory-100 border border-stone-300 text-xs uppercase tracking-wider text-charcoal-900"
              >
                <MessageSquare className="w-3.5 h-3.5 text-brass-600" />
                <span>WhatsApp</span>
              </a>

              <a 
                href="tel:+18005550190" 
                className="flex items-center justify-center gap-2 p-3 bg-ivory-100 border border-stone-300 text-xs uppercase tracking-wider text-charcoal-900"
              >
                <Phone className="w-3.5 h-3.5 text-brass-600" />
                <span>Call Studio</span>
              </a>
            </div>

            <p className="text-[10px] text-center text-stone-500 tracking-wider pt-2">
              © 2026 Aureline Interiors. All rights reserved.
            </p>
          </div>

        </div>
      )}
    </header>
  );
}
